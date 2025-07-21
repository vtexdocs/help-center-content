---
title: '[Catalog] A API Get Product by RefId retorna "não encontrado" para alguns produtos/RefId'
id: 1hVZC2kSCnsURW3k8w53Ef
status: PUBLISHED
createdAt: 2025-01-02T18:27:05.040Z
updatedAt: 2025-06-13T17:38:19.706Z
publishedAt: 2025-06-13T17:38:19.706Z
firstPublishedAt: 2025-01-02T18:27:05.832Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-a-api-get-product-by-refid-retorna-nao-encontrado-para-alguns-produtosrefid
locale: pt
kiStatus: Backlog
internalReference: 1157371
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A API Get Product by RefId retorna "não encontrado" para alguns produtos/RefId, mesmo com a referência registrada no catálogo da VTEX

✅️ se você pesquisar o refid na interface do usuário, ele retornará o produto
❌️ pesquisa usando a rota "/productgetbyrefid", retorna não encontrado

*Observação: esse problema também ocorre ao pesquisar skubyrefid

## Simulação



https://VTEX.vtexcommercestable.com.br/api/catalog_system/pvt/products/productgetbyrefid/

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/catalog-a-api-get-product-by-refid-retorna-nao-encontrado-para-alguns-produtosrefid_1.png)

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/catalog-a-api-get-product-by-refid-retorna-nao-encontrado-para-alguns-produtosrefid_2.png)


## Workaround


n/a

