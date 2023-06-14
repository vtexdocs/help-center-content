---
title: 'Controle $product.InsertSku não está considerando a ordenação definida no cadastro do produto'
id: laM7GlhASOuGisu2e8KGO
status: PUBLISHED
createdAt: 2018-01-11T20:32:44.037Z
updatedAt: 2022-12-22T20:46:04.880Z
publishedAt: 2022-12-22T20:46:04.880Z
firstPublishedAt: 2018-01-11T20:42:41.646Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slug: controle-productinsertsku-nao-esta-considerando-a-ordenacao-definida-no-cadastro-do-produto
kiStatus: Backlog
internalReference: 
---

## Sumário

O controle $product.InsertSku de template de prateleira, está renderizando as variações (SKUs) ordenadas pelo ID e não pela posição configurada no admin.

## Simulação

Para reproduzir esse comportamento:
1. Configure um produto com variação de SKU
2. Na tela de gestão de SKUs ordene os SKUs de forma que o SKU de ID mais baixo fique posicionado depois de um SKU de ID mais alto
3. Configure um template de prateleira com o controle $product.InsertSku
4. Use esse template de prateleira em alguma prateleira ou vitrine
5. Acesse essa prateleira ou vitrine, pela visão do cliente

Você observará que os SKUs estarão ordenados pelo ID e não pelo posicionamento definido.

## Workaround

A solução de contorno para esse comportamento é garantir que o ID dos SKUs sejam equivalentes ao seu posicionamento dentro do produto.

Ex.: Um produto possui os SKUs "P", "M" e "G". O SKU "P" precisa ter o menor ID, seguido do SKU "M" e, depois, pelo "G", com maior ID.

