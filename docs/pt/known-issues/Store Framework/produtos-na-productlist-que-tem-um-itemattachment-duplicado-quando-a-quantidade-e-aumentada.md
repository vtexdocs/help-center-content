---
title: "Produtos na 'product-list' que têm um 'itemAttachment' duplicado quando a quantidade é aumentada"
id: 4QybxJRoj7wLNvN7NG2FLA
status: PUBLISHED
createdAt: 2022-01-24T21:19:51.135Z
updatedAt: 2024-10-31T14:10:47.569Z
publishedAt: 2024-10-31T14:10:47.569Z
firstPublishedAt: 2022-06-29T13:13:18.202Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: products-in-the-productlist-that-have-an-itemattachment-duplicate-when-the-quantity-is-increased
locale: pt
kiStatus: Fixed
internalReference: 337069
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Se uma loja usar o componente de lista de produtos do Store Framework, usado no minicarro, os itens do carrinho poderão ser duplicados ao aumentar a quantidade de um item que tenha um anexo (itemAttachment).

Isso ocorre porque o comportamento padrão noSplitItem da solicitação de API que atualiza os itens do carrinho é falso.

## Simulação



1. Em sua loja, adicione ao carrinho um item que tenha uma opção de anexo;
2. Inclua um anexo no item adicionado ao carrinho;
3. Aumente a quantidade desse item com a solicitação de atualização do item do carrinho, enviando o seguinte corpo:
`{ "orderItems": [{"index": 0, "quantity": 2 }] }`
4. Observe que a API retorna a lista de itens com o produto duplicado, em vez de aumentar a quantidade.



## Workaround


Atualmente, não há solução alternativa.





