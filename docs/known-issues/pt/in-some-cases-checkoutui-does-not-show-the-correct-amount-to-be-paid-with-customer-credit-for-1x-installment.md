---
title: Em alguns casos, a Checkout-UI não mostra o valor correto a ser pago com o Crédito do Cliente para 1x a prestação
id: 3YsvVet6LKw1buFapSwFWm
status: PUBLISHED
createdAt: 2023-02-06T20:00:37.983Z
updatedAt: 2023-02-06T20:00:38.568Z
publishedAt: 2023-02-06T20:00:38.568Z
firstPublishedAt: 2023-02-06T20:00:38.568Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: em-alguns-casos-a-checkoutui-nao-mostra-o-valor-correto-a-ser-pago-com-o-credito-do-cliente-para-1x-a-prestacao
kiStatus: Backlog
internalReference: 748320
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Para um cenário onde o Crédito do Cliente é utilizado para pagar um valor inferior ao valor total do carrinho; ele mostra, para 1x a prestação no dropdown, o valor total ignorando débitos considerados como pagamento com outro método de pagamento como um cartão presente.

Esta é uma questão somente do lado do cliente, portanto, se o usuário fizer um pedido usando esta opção do menu suspenso, o API do checkout enviará o valor correto para o gateway.


##

## Simulação



- Certifique-se de que a conta tenha condições de pagamento com 1x de parcela para crédito do cliente;
- Vá até a parte de pagamento na caixa, depois escolha o crédito do cliente como forma de pagamento junto com um cartão presente. Portanto, observe que o valor na caixa parece incorreto.


##

## Workaround


N/A





