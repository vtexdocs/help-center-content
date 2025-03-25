---
title: 'spotPrice do skuJson é incorreto para produtos com múltiplos Vendedores'
id: 6rgLJCE1DYPXZj1Pqt6hA2
status: PUBLISHED
createdAt: 2022-02-24T15:32:40.223Z
updatedAt: 2024-02-16T20:30:08.928Z
publishedAt: 2024-02-16T20:30:08.928Z
firstPublishedAt: 2022-02-24T15:32:41.286Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: spotprice-from-the-skujson-is-incorrect-for-products-with-multiple-sellers
locale: pt
kiStatus: No Fix
internalReference: 264791
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Valor do "spotPrice" (preço à vista) no "skuJson" do Portal incorreto em produtos com múltiplos vendedores.

Na parcelaOptions of checkout e Search API serão corretas, e o valor spotPrice de richSnippets e skuPrice viewparts (impressos em HTML) também. Mas o skuJson parece estar preso ao vendedor 1.







## Simulação


- ter um produto/sku vendido por vários vendedores, além do próprio mercado.

- têm configurado o "paymentSystemId" em skuPrice e/ou richSnippets viewparts.

- observar as informações devolvidas pela aplicação do Portal.







## Workaround



Não há solução para o skuJson especificamente.

As outras informações na página devem ser utilizadas.

