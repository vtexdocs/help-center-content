---
title: OrderByBestDiscount retorna a ordem errada
id: 4w9qSs9jUTty4e77iD1bIT
status: PUBLISHED
createdAt: 2021-08-24T16:33:08.218Z
updatedAt: 2022-12-22T20:41:14.306Z
publishedAt: 2022-12-22T20:41:14.306Z
firstPublishedAt: 2021-09-03T14:53:03.469Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: orderbybestdiscount-retorna-a-ordem-errada
kiStatus: Backlog
internalReference: 
---

## Sumário

A ordenação `OrderByBestDiscount` é afetada pelos [preço de lista](https://help.vtex.com/pt/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#preco-de-lista) e [preço base](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) mais baixos entre todas as políticas comerciais disponíveis. 

Para mais erros relacionados a ordenação, veja [esta documentação](https://help.vtex.com/pt/known-issues/problema-ordenacao-produtos-vitrine--7JlXcIcicgQwkOkCuce4Ow#).

## Simulação

1. Configure pelo menos duas [políticas comerciais cadastradas](https://help.vtex.com/pt/tutorial/criar-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) na sua loja.
2. Crie um [preço base](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) para um SKU.
3. Crie um [preço de lista](https://help.vtex.com/pt/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#preco-de-lista) para o mesmo SKU.
4. Configure o controle `<vtex.cmc:searchResult/>` na página do produto.

## Workaround

Não há nenhum workaround no Portal. No entanto, você pode adicionar o [VTEX Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG#) à sua loja.

