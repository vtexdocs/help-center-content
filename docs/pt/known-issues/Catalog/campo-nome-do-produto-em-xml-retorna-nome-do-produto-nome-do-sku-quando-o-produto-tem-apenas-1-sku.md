---
title: 'Campo Nome do produto em XML retorna Nome do produto + Nome do Sku quando o produto tem apenas 1 sku'
id: 7sNNzBe5pLn7oigDgoCKjv
status: PUBLISHED
createdAt: 2022-09-19T19:06:55.572Z
updatedAt: 2024-02-16T20:23:45.927Z
publishedAt: 2024-02-16T20:23:45.927Z
firstPublishedAt: 2022-09-19T19:06:56.137Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-name-field-on-xml-returns-product-name-sku-name-when-the-product-has-only-1-sku
locale: pt
kiStatus: No Fix
internalReference: 661089
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



No XML temos os campos chamados "Nome do Produto" e "Nome do Produto + Nome Sku". Entretanto, se o produto tiver apenas 1 sku, o campo "Nome do produto" não está se comportando como esperado, sendo preenchido como "Nome do produto + Nome do Sku".

Por exemplo, se o nome do produto A tiver um único SKU(Nome B), o campo **Nome do produto** utilizaria A+B, em vez de apenas A.




## Simulação



1. Criar um XML;
2. Adicionar um produto com apenas 1 sku;
3. Verifique o campo Nome do produto;
4. Verifique se o retorno será o nome do produto adicionado ao nome do sku.



## Workaround


Nenhuma solução.

