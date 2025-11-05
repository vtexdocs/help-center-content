---
title: 'Reembolso de pagamentos'
id: 6mS04nXwV46LeeH8Nr99fE
status: PUBLISHED
createdAt: 2025-04-03T10:23:45.401Z
updatedAt: 2025-04-03T11:01:24.508Z
publishedAt: 2025-04-03T11:01:24.508Z
firstPublishedAt: 2025-04-03T11:01:24.508Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: payment-refunds
legacySlug: reembolso-de-pagamentos
locale: pt
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

Reembolso é o ato de restituir ao cliente o valor pago por uma compra efetuada na loja. Esta ação pode ser necessária devido a diferentes cenários, tais como:

- Impossibilidade de entrega do produto por motivos de logística.
- Indisponibilidade temporária do produto no estoque.
- Solicitação de devolução do produto realizada pelo cliente. 

Os reembolsos podem ser de dois tipos:

- __Total__: o pedido é cancelado e o valor da compra é ressarcido integralmente ao cliente.
- __Parcial__: apenas parte do valor deve ser devolvido. Por exemplo, no caso do cliente permanecer com um ou mais produtos do pedido.

## Regras de prioridade para o reembolso parcial

Em compras realizadas por dois meios de pagamento diferentes e que seja solicitado um reembolso parcial, é necessário determinar qual dos meios de pagamento terá prioridade na ordem de reembolso dos valores. O gateway de pagamentos da VTEX possui duas regras de prioridade:

- __Menor valor liquidado__: define que o reembolso dos valores será iniciado a partir do meio de pagamento que tiver o menor valor liquidado (capturado) até o momento.

- __Cartão de Crédito primeiro (card-first)__: determina que o reembolso dos valores deve ocorrer sempre a partir do saldo do cartão de crédito e depois do outro meio de pagamento utilizado na compra, por exemplo, vale-presente. Esta regra está sujeita a alguns [cenários específicos de liquidação do pagamento](#cenarios-de-liquidacao-de-pagamento).

> ℹ️ As lojas VTEX são configuradas por padrão com a regra de **Menor valor liquidado**. Caso deseje alterar a sua operação para a regra de **Cartão de Crédito primeiro**, solicite a modificação por meio de um ticket no [Suporte VTEX](https://supporticket.vtex.com/support).

### Cenários de liquidação de pagamento

A regra __Cartão de Crédito__ primeiro ativada em uma loja determina que, em caso de reembolso parcial em um pedido contendo duas formas de pagamento, os valores devem ser devolvidos primeiramente do saldo do cartão de crédito, e, se necessário, utilizar o saldo do outro meio de pagamento em seguida. No entanto, no momento em que um reembolso parcial é solicitado, o valor liquidado do pagamento do cartão é verificado e podem ocorrer variações na aplicação desta regra.

Veja abaixo alguns dos cenários possíveis sobre o reembolso parcial envolvendo uma compra realizada com cartão de crédito e vale-presente:

#### Valor do cartão de crédito já foi liquidado totalmente ou o valor solicitado no reembolso é menor que o valor liquidado

O reembolso será realizado utilizando o saldo total do cartão de crédito. Caso o valor solicitado no reembolso seja maior que o saldo do cartão, o restante será liquidado no saldo do vale-presente.

#### Valor do cartão de crédito já liquidado é menor que o valor solicitado no reembolso 

O reembolso será realizado primeiramente com o saldo disponível do cartão de crédito (valor liquidado) e o restante com o saldo do vale-presente.

#### Valor do cartão de crédito ainda não foi liquidado

O reembolso será realizado primeiramente com o saldo do vale-presente e, se necessário, o sistema aguardará a liquidação do valor restante no cartão de crédito para completar o reembolso.
