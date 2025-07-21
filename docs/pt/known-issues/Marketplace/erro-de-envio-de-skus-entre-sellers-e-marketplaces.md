---
title: "Erro de envio de SKUs entre sellers e marketplaces"
id: 1fh0ea4fZrfyWW5EYnrZxj
status: PUBLISHED
createdAt: 2021-09-30T19:19:17.233Z
updatedAt: 2022-03-28T22:32:12.939Z
publishedAt: 2022-03-28T22:32:12.939Z
firstPublishedAt: 2021-09-30T20:49:09.165Z
contentType: knownIssue
productTeam: Marketplace
author: 46G4yHIZerH7B9Jo0Iw5KI
tag: Suggestions
slugEN: erro-de-envio-de-skus-entre-sellers-e-marketplaces
locale: pt
kiStatus: Fixed
internalReference: 000
---

## Sumário

As lojas VTEX podem se tornar [sellers](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402?&utm_source=autocomplete#sendo-seller-vtex) e [marketplaces](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402?&utm_source=autocomplete#ser-um-marketplace-vtex) umas das outras, enviando SKUs que já fazem parte de seus catálogos. Porém, nem sempre esses SKUs são enviados corretamente. 

Isso acontece porque produtos que são vendidos tanto pelo marketplace como pelos seus sellers não são reconhecidos pelo sistema ao serem enviados. Só é possível enviar produtos que são vendidos por apenas uma das lojas.

![arquitetura circular](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Marketplace/erro-de-envio-de-skus-entre-sellers-e-marketplaces_1.JPG)

## Simulação

Observamos este erro quando uma loja envia um SKU para um marketplace e este SKU não aparece no módulo SKUs Recebidos. 

Não é exibida nenhuma mensagem de erro no seu Admin VTEX  indicando que o problema ocorreu.  Utilize a rota de API [Get SKU](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku#catalog-api-get-sku) para verificar se o SKU é vendido por outros sellers. Na resposta desta chamada, dentro do objeto `SkuSellers`, estarão todos os sellers que vendem esse SKU. Se houver mais de um seller indicado no objeto, isso significa que o erro ocorrerá.


## Workaround

Atualmente, estamos investigando a melhor forma de incorporar operações com esse tipo de arquitetura na plataforma da VTEX. Portanto, não há workaround para esse cenário. 

