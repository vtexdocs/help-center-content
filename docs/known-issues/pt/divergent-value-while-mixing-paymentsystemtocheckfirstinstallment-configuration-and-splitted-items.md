---
title: 'Valor divergente ao misturar a configuração "paymentSystemToCheckFirstInstallment" e itens divididos'
id: 3h2o69kTBqFdQlzhED2kMN
status: PUBLISHED
createdAt: 2023-03-07T18:35:31.215Z
updatedAt: 2023-03-07T20:06:30.491Z
publishedAt: 2023-03-07T20:06:30.491Z
firstPublishedAt: 2023-03-07T18:35:31.660Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: valor-divergente-ao-misturar-a-configuracao-paymentsystemtocheckfirstinstallment-e-itens-divididos
locale: pt
kiStatus: Backlog
internalReference: 766454
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando a conta tiver configurado "paymentSystemToCheckFirstInstallment" em OrderForm Configuration, o cálculo de checkout enviará dois pedidos ao módulo de promoções. Se houver itens divididos no carrinho (por exemplo, Mais para menos promoção), a primeira solicitação enviará os itens corretamente, mas a segunda enviará os itens divididos com base na aplicação da promoção.

Combinando essa promoção com uma promoção regular restrita ao mesmo método de pagamento configurado em "paymentSystemToCheckFirstInstallment". Você verá valores diferentes na resposta do módulo de promoções, e um valor de juros em totalizadores na UI de Checkout, não permitindo que você termine a compra e a mensagem "Valor do pagamento não corresponde ao valor solicitado".

Notamos este comportamento para formas de pagamento que têm apenas 1 parcela como padrão, por exemplo, PIX, "Boleto Bancário" ou Promissory.


##

## Simulação



- Configurar "paymentSystemToCheckFirstInstallment" em OrderForm Configuration;
- Configurar um Mais para Menos promoção;
- Configurar uma promoção regular restrita ao mesmo método de pagamento configurado em "paymentSystemToCheckFirstInstallment": PIX ou Boleto;
- Montar um carrinho e selecionar o método de pagamento configurado em "paymentSystemToCheckFirstInstallment";
- Você pode ver o valor dos juros nos totalizadores no Checkout UI.


##

## Workaround


N/A



