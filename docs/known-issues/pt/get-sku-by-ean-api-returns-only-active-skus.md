---
title: GET SKU by EAN API retorna apenas SKUs ativas
id: 5NiuB1Lgf3CM5kXSSVdfuu
status: PUBLISHED
createdAt: 2020-03-23T15:10:23.842Z
updatedAt: 2022-11-25T22:00:19.153Z
publishedAt: 2022-11-25T22:00:19.153Z
firstPublishedAt: 2020-03-27T19:32:53.914Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: get-sku-by-ean-api-retorna-apenas-skus-ativas
kiStatus: Backlog
internalReference: 699007
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Ao utilizar a rota https://..com.br/api/catalog_system/pvt/sku/stockkeepingunitbyean/, a resposta API retorna a mensagem "SKU not Found" ou "Dados inconsistentes no cadastro de EAN para esse sku" quando o SKU está inativo ou indisponível no indexador, mesmo quando esse SKU existe com esse EAN na loja.



## Simulação



Ligue para a rota https://..com.br/api/catalog_system/pvt/sku/stockkeepingunitbyean/ para um SKU inativo/disponível com EAN.



## Workaround




Use as rotas **GET SKU por RefID** ou **GET SKU por ID** para obter as mesmas informações.

