---
title: "parcelamentoOpções do pedidoO formulário API não leva em conta promoções de parcelas específicas"
id: YgwSByoCsjqEmWOmuXRU4
status: PUBLISHED
createdAt: 2022-08-24T15:53:17.291Z
updatedAt: 2022-11-25T21:50:31.916Z
publishedAt: 2022-11-25T21:50:31.916Z
firstPublishedAt: 2022-08-24T15:53:17.926Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: parcelamentoopcoes-do-pedidoo-formulario-api-nao-leva-em-conta-promocoes-de-parcelas-especificas
locale: pt
kiStatus: No Fix
internalReference: 644563
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando uma promoção é restrita a uma quantidade específica de parcelas de cartão de crédito (por exemplo, "10% em dinheiro"), o valor descontado é aplicado mesmo para parcelas fora da faixa limitada, onde o objeto "parcelamentoOptions" do OrderForm API retornará valores errados.

A seleção de um número diferente de parcelas recalculará as promoções e atualizará os valores de todas as parcelas. Você não pode criar um pedido com o desconto errado, pois ele sempre será atualizado para o número de parcelas selecionado, portanto, esta questão está relacionada apenas aos valores exibidos.



## Simulação



- Criar uma promoção com uma quantidade restrita de parcelas;
- Através da API, criar ou simular um carrinho informando um "PaymentData" com o número de parcelas em que a promoção é aplicada;
- Observe as "parcelasOpções" sobre os valores descontados;
- Informe outro número de parcelas e veja o valor sendo atualizado para todas elas.



## Workaround


Este objeto tem um comportamento limitado e deve ser considerado obsoleto.

Lojas que dependem de descontos para parcelas específicas em um pedidoO formulário deve ser baseado em um novo API, como descrito neste changelog (1) e nesta documentação (2).

Esta nova API não cobre pedidos de simulação. Para eles, a alternativa é a configuração "paymentSystemToCheckFirstInstallment" (3) - mas limitada a descontos na primeira parcela.

---

(1) https://developers.vtex.com/vtex-developer-docs/changelog/improvement-price-consistency-checkout-discounts-installments

(2) https://developers.vtex.com/vtex-rest-api/reference/getcartinstallments

(3) https://developers.vtex.com/vtex-rest-api/docs/using-checkout-api-to-set-a-discount

