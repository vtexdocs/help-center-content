---
title: 'Os campos na configuração do orderForm são atualizados para nulos quando há alguma alteração nas configurações do Order Management.'
id: jKGnwUGdfmCXtKjGPe6hj
status: PUBLISHED
createdAt: 2023-02-06T21:00:09.224Z
updatedAt: 2024-05-09T12:44:51.823Z
publishedAt: 2024-05-09T12:44:51.823Z
firstPublishedAt: 2023-02-06T21:00:09.753Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: os-campos-na-configuracao-do-orderform-sao-atualizados-para-nulos-quando-ha-alguma-alteracao-nas-configuracoes-do-order-management
locale: pt
kiStatus: Fixed
internalReference: 748404
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao atualizar qualquer informação nas configurações de gerenciamento de pedidos (no administrador), os campos `paymentSystemToCheckFirstInstallment` e `defaultPaymentSystemToApplyOnUserOrderForm` são definidos como `null` na configuração do formulário de pedido

## Simulação



- Configure os campos `paymentSystemToCheckFirstInstallment` e `defaultPaymentSystemToApplyOnUserOrderForm` na configuração do orderForm via API
- Alterar qualquer coisa nas configurações de gerenciamento de pedidos (admin)
- Ao obter a configuração do orderForm, você verá esses campos como "nulos"

## Workaround


Salve a configuração do orderForm com os valores corretos para os campos `paymentSystemToCheckFirstInstallment` e `defaultPaymentSystemToApplyOnUserOrderForm` após a alteração nas configurações do Order Management




