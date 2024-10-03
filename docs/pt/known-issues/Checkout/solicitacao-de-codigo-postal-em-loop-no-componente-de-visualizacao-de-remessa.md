---
title: 'Solicitação de código postal em loop no componente de visualização de remessa'
id: 6pcJyqvZ8u388xg04zJnnw
status: PUBLISHED
createdAt: 2022-07-25T16:47:46.301Z
updatedAt: 2022-11-25T21:51:12.684Z
publishedAt: 2022-11-25T21:51:12.684Z
firstPublishedAt: 2022-07-25T16:47:46.650Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: postal-code-request-in-loop-in-the-shipping-preview-component
locale: pt
kiStatus: Backlog
internalReference: 352659
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Depois de alternar o código postal algumas vezes no componente de pré-visualização do envio do carrinho, o componente entra em um eterno looping de pedidos de `/api/checkout/pub/postal-code//`

Assim, tornando impossível a alteração do código postal, uma vez que o componente está preso na última adição.



## Simulação


- Ir para a página de checkout

- Insira qualquer código postal, e mude para outro, repita a mudança algumas vezes, até que os loops dos componentes.

- Após entrar no looping, o componente não permite fazer nenhuma nova alteração.



## Workaround


N/A

