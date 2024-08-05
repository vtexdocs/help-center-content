---
title: "GET Product by Refid retorna 'Null' quando não é encontrado"
id: 6yiM9gJT5DB77pZSBNfGZ3
status: PUBLISHED
createdAt: 2023-05-16T19:35:46.743Z
updatedAt: 2024-07-01T18:49:03.498Z
publishedAt: 2024-07-01T18:49:03.498Z
firstPublishedAt: 2023-05-16T19:35:47.468Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: get-product-by-refid-retorna-null-quando-nao-e-encontrado
locale: pt
kiStatus: No Fix
internalReference: 826702
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A rota get product by refid (/catalog_system/pvt/products/productgetbyrefid) está retornando um valor nulo em vez de uma simples resposta 404 quando não encontra um ID válido em um determinado catálogo da loja



## Simulação


1) Execute o seguinte cURL

curl --location --request GET 'https://mystore.vtexcommercestable.com.br/api/catalog_system/pvt/products/productgetbyrefid/667' \
--header 'Content-Type: application/json' \
--header 'Cookie: janus_sid=beb23e63-ccb5-4619-9ee7-f1f61deb0683'

Você deverá obter a seguinte resposta se o ID fornecido não existir

 ![](https://vtexhelp.zendesk.com/attachments/token/zLUjULwrXOEEd8hX9P0pTq8op/?name=inline-1138166273.png)

Isso está incorreto, pois o esperado é um `404 - Not Found`


## Workaround


Use outras APIs para GET product, como Get Product by ID, se essa resposta 404 for imperativa para qualquer coisa com a qual você esteja trabalhando.






