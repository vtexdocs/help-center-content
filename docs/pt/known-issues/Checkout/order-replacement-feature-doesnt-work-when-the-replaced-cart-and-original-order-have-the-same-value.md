---
title: 'O recurso de substituição de pedidos não funciona quando o carrinho substituído e o pedido original têm o mesmo valor'
id: 7eHiC34Pgsr1XcfIVHl7Sc
status: PUBLISHED
createdAt: 2023-07-21T14:49:31.057Z
updatedAt: 2023-12-18T20:17:32.757Z
publishedAt: 2023-12-18T20:17:32.757Z
firstPublishedAt: 2023-07-21T14:49:31.682Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-recurso-de-substituicao-de-pedidos-nao-funciona-quando-o-carrinho-substituido-e-o-pedido-original-tem-o-mesmo-valor
locale: pt
kiStatus: Fixed
internalReference: 866622
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O recurso de substituição de pedidos não funciona quando o carrinho substituído tem o mesmo valor do pedido original e o sistema de pagamento é "Reutilizar pagamento".

## Simulação



- Ative o recurso de substituição de pedidos;
- Conclua um pedido e altere algo, por exemplo, do tamanho pequeno para o grande;
- Certifique-se de que o carrinho substituído tenha o mesmo valor que o pedido original;
- Na etapa de pagamento, selecione "Reuse Payment" (Reutilizar pagamento)

## Workaround


Selecione um método de pagamento diferente de "Reuse Payment" (Reutilizar pagamento). A transação anterior será cancelada e reembolsada; uma nova transação será criada.



