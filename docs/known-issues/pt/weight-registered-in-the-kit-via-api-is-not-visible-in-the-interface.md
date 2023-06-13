---
title: Peso cadastrado no kit via API não é visível na interface
id: 3pXAznG51YoUquomEmaeUi
status: PUBLISHED
createdAt: 2018-08-06T22:31:30.571Z
updatedAt: 2022-12-22T20:45:12.639Z
publishedAt: 2022-12-22T20:45:12.639Z
firstPublishedAt: 2018-08-06T23:18:13.408Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: peso-cadastrado-no-kit-via-api-nao-e-visivel-na-interface
kiStatus: Backlog
internalReference: 
---

## Sumário

Embora a API (webservice) permita o cadastro de qualquer valor como peso final de um kit, a interface de cadastro do SKU exibe sempre a soma do peso total dos componentes.

Ao salvar o SKU pelo admin, o valor ali exibido irá sobrescrever o que foi cadastrado pela API.

Isso pode gerar dois tipos de cenários indesejados: o valor cadastrado pela API não tem visibilidade facilitada (divergindo da UI) ou um valor por lá cadastrado pode ser perdido sem a intenção (ao salvar outras alterações na UI).

Por fim, é necessário ter em conta que o checkout e o cálculo de frete se baseiam sempre no valor do peso cadastrado para o kit, independente dos componentes.

## Simulação

- Cadastrar um peso qualquer pelo método `StockKeepingUnitInsertUpdate` do Webservice em um SKU tipo KIT
- Observar a tela de edição do mesmo SKU, que irá apresentar como peso a soma do valor total dos componentes

## Workaround

É inadequado o cadastro de um valor diferente da soma de seus componentes. Em uma implementação de integração é necessário buscar este peso sempre sincronizado com seus componentes.

Caso não exista integração alterando os SKUs, não há risco de falta de sincronia, de modo que a interface administrativa por si só já vai garantir o peso final do kit corretamente gerenciado.

