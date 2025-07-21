---
title: "A fatura de entrada não está acionando o processo de reembolso no gateway"
id: 7Jyssmgt0rYN1j8wZNtK1T
status: PUBLISHED
createdAt: 2025-03-24T19:24:31.259Z
updatedAt: 2025-03-24T19:24:31.904Z
publishedAt: 2025-03-24T19:24:31.904Z
firstPublishedAt: 2025-03-24T19:24:31.904Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: a-fatura-de-entrada-nao-esta-acionando-o-processo-de-reembolso-no-gateway
locale: pt
kiStatus: Backlog
internalReference: 1198829
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Foi identificado que a API de faturas (faturas e devoluções) não permite especificar os diferentes preços de venda que uma SKU pode ter da mesma forma que especificado no pedido. Isso significa que o comerciante não precisa "duplicar" explicitamente a mesma SKU nas faturas/devoluções para representar todos esses preços de venda.

Exemplo:
SKU-1 com quantidade 2, com um valor total de US$ 101.

Para resolver o problema de arredondamento, são especificados dois preços de venda diferentes: 1 de US$ 51 e outro de US$ 50.

O que acontece é que, quando a conta vai faturar o pedido, o SKU-1 é duplicado para informar os valores contidos no sellingPrice.

O SOS valida os itens duplicados e, se eles forem identificados, não será possível fazer um "reembolso".

## Simulação


É possível simular esse cenário criando um pedido com um item e uma quantidade maior que dois, e arredondando os valores de sellingPrice para que sejam diferentes entre os itens, por exemplo:
Pedido com duas unidades de SKU-10, com valor total de US$ 101, e no sellingPrice, temos 1 item com valor de US$ 51 e o outro com valor de US$ 50.
Ao inserir uma fatura, a conta duplica o item, informando os valores do sellingPrice.
Quando a fatura é inserida, ela faz a mesma duplicação.
Nesse momento, o SOS será verificado quanto aos itens duplicados e o reembolso não será solicitado

## Workaround


Insira apenas uma SKU na fatura, especificando a quantidade e o valor total.






