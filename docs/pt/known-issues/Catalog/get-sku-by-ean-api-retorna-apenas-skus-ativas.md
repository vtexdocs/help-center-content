---
title: 'GET SKU by EAN API retorna apenas SKUs ativas'
id: 5NiuB1Lgf3CM5kXSSVdfuu
status: PUBLISHED
createdAt: 2020-03-23T15:10:23.842Z
updatedAt: 2023-10-24T17:25:02.496Z
publishedAt: 2023-10-24T17:25:02.496Z
firstPublishedAt: 2020-03-27T19:32:53.914Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: get-sku-by-ean-api-returns-only-active-skus
locale: pt
kiStatus: Fixed
internalReference: 699007
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Ao utilizar a rota https://..com.br/api/catalog_system/pvt/sku/stockkeepingunitbyean/, a resposta API retorna a mensagem "SKU not Found" ou "Dados inconsistentes no cadastro de EAN para esse sku" quando o SKU está inativo ou indisponível no indexador, mesmo quando esse SKU existe com esse EAN na loja.



## Simulação



Ligue para a rota https://..com.br/api/catalog_system/pvt/sku/stockkeepingunitbyean/ para um SKU inativo/disponível com EAN.



## Workaround




Use as rotas **GET SKU por RefID** ou **GET SKU por ID** para obter as mesmas informações.

