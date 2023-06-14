---
title: 'Produtos sem estoque aparecem disponíveis para compra na página de produto'
id: 5yLgUHlBraGeUYAUK4w288
status: PUBLISHED
createdAt: 2018-02-08T18:17:40.064Z
updatedAt: 2022-12-22T20:45:11.644Z
publishedAt: 2022-12-22T20:45:11.644Z
firstPublishedAt: 2018-02-08T18:52:42.311Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: produtos-sem-estoque-aparecem-disponiveis-para-compra-na-pagina-de-produto
kiStatus: Backlog
internalReference: 
---

## Sumário

Produtos sem estoque ficam disponíveis para compra na página de produto (botão de compra aparece). No entanto, ao clicar no botão e ir para o carrinho, o Checkout faz a consulta no sistema e impede que o produto seja comprado de fato.

A causa disto é um campo chamado `stockBalance`, que é um dos campos usado pelo Catálogo para exibir (ou não) o botão comprar na página de produto. Este campo apresenta o total de unidades em estoque de um SKU. No entanto, quando um produto está associado à um brinde, o `stockBalance` está retornando o estoque do brinde no lugar do estoque do SKU. E é exatamente aí que está o problema. O cenário vai acontecer quando um produto não tem estoque, mas o brinde associado à ele tem.

## Simulação


- Adicionar um brinde à um produto sem estoque
- Acessar a sua página de produto


## Workaround

Por enquanto, a solução que contorna a situação é desassociar o brinde ao produto sem estoque. Desta forma, o produto ficará indisponível novamente.

