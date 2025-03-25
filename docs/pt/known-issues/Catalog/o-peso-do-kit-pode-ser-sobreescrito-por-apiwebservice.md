---
title: 'O peso do kit pode ser sobreescrito por API/Webservice'
id: Dlrs4qgHsnwIHxqqV0Rmg
status: PUBLISHED
createdAt: 2022-06-28T16:55:40.711Z
updatedAt: 2024-02-16T20:29:08.522Z
publishedAt: 2024-02-16T20:29:08.522Z
firstPublishedAt: 2022-06-28T16:55:40.971Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: kit-weight-can-be-overritten-by-apiwebservice
locale: pt
kiStatus: No Fix
internalReference: 429993
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

Atualmente, está definido no nosso catálogo de regras comerciais que o peso de um KIT SKU deve ser definido pela soma dos seus componentes - https://help.vtex.com/en/tutorial/cadastrando-kit--tutorials_215

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/o-peso-do-kit-pode-ser-sobreescrito-por-apiwebservice_1.png)

No entanto, é atualmente possível sobrescrever este cálculo de peso através de API e/ou webservice onde o valor definido é o enviado diretamente na carga útil, não considerando qualquer pesagem de componentes.

## Simulação


1) Criar um KIT SKU e componentes para o mesmo;

Por exemplo, o peso original do componente pode ser de 100g e o kit é composto por 6 itens deste componente único. Consequentemente, o seu peso final deve ser 600g:

Mesmo a caixa de entrada é definida como uma caixa de leitura.

2) Contudo, se na estrutura do SKUKIT, ou seja, na forma que compõe a informação do kit, eu vou buscar estes dados via API ou webservice, como por exemplo:

"Curl --localização --requisito GET 'https://merch.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/310118469'" \".
`--cabeçalho 'Content-Type: aplicação/json''.
`--cabeçalho 'Aceitar: aplicação/json''.
"VtexIdclientAutCookie": "...
`--header 'Cookie: janus_sid=361dacc3-e2b8-4ee1-8f5b-b2cf0529f39a' {\i1}`
"--data-trace"

3) E depois actualizar directamente a propriedade JSON relacionada, enviando-a através do Método PUT na carga útil:

```json
`curl --localização --requisito PUT 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/?an='``.
`--cabeçalho 'Content-Type: aplicação/json''.
`--cabeçalho 'Aceitar: aplicação/json''.
"VtexIdclientAutCookie": "...
`--header 'Cookie: janus_sid=eee0b24c-f31b-4359-9bbd-5745b5b38d39'' {\i1}`
"--data-trace
"Id": 310118469,`
"ProdutoId": 35,`
"IsActive": verdadeiro,`
"ActivateIfPossible": true,`
"Nome": "Kit com 6",`
"RefId": "000806",`
"PackagedHeight": 1.0000,`
"PackagedLength": 3.0000,`
"PackagedWidth": 2.0000,`
"PackagedWeightKg": 0.300,`
"Altura": nulo,`
"Comprimento": nulo,`
"Largura": nulo,`
"PesoKg": nulo,`
"CubicWeight": 0.0013,`
"IsKit": verdade,`
``CriaçãoData'': "2021-09-14T09:20:00",`
"RewardValue": nulo,`
"EstimatedDateArrival": null,`
"ManufacturerCode": "",`
"CommercialConditionId": 1,`
"Unidade de Medição": "un",`
"UnitMultiplier": 1.0000,`
"ModalType": nulo,`
"KitItensSellApart": falso,`
"Vídeos": []`
`}'`
```

O valor anterior que tinha em conta o peso do componente * é completamente sobrescrito, gerando consequentemente possíveis inconsistências nos cálculos do frete.


## Workaround

Atualizar apenas os pesos dos componentes e deixar a aplicação calcular o peso final do kit por si só.

