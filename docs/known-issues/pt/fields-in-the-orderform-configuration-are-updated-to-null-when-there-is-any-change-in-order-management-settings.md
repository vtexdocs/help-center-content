---
title: Os campos na configuração do OrderForm são atualizados para zero quando há qualquer mudança nas configurações de gerenciamento de pedidos
id: jKGnwUGdfmCXtKjGPe6hj
status: PUBLISHED
createdAt: 2023-02-06T21:00:09.224Z
updatedAt: 2023-04-03T14:22:00.794Z
publishedAt: 2023-04-03T14:22:00.794Z
firstPublishedAt: 2023-02-06T21:00:09.753Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: os-campos-na-configuracao-do-orderform-sao-atualizados-para-zero-quando-ha-qualquer-mudanca-nas-configuracoes-de-gerenciamento-de-pedidos
kiStatus: Backlog
internalReference: 748404
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao atualizar qualquer informação nas Configurações de Gerenciamento de Pedidos (na administração), os campos "Sistema de PagamentoPagarPrimeiro Pedido" e "Sistema de PagamentoPagarPagarPadrãoAplicarNo Formulário de Pedido/Usuário" são configurados como "nulo" na Configuração do Formulário de Pedido


##

## Simulação



- Configurar os campos `paymentSystemToCheckFirstInstallment' e `defaultPaymentSystemToApplyOnUserOrderOrderForm' na ordemForm de configuração via API
- Alterar qualquer coisa nas configurações de gerenciamento de pedidos (admin)
- Quando você fizer o pedidoFormar configuração, você verá esses campos como 'nulos'.


##

## Workaround


Salvar a configuração do OrderForm com os valores corretos para os campos `paymentSystemToCheckFirstInstallment' e `defaultPaymentSystemToApplyOnUserOrderOrderForm' após a mudança nas configurações de gerenciamento de pedidos




