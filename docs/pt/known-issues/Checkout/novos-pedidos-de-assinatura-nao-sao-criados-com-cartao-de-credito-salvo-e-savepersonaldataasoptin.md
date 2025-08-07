---
title: "Novos pedidos de assinatura não são criados com cartão de crédito salvo e savePersonalDataAsOptIn"
id: 5mMUYOzdXM9p69oythduOx
status: PUBLISHED
createdAt: 2024-08-27T17:54:38.067Z
updatedAt: 2024-08-27T17:54:59.938Z
publishedAt: 2024-08-27T17:54:59.938Z
firstPublishedAt: 2024-08-27T17:54:39.058Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: novos-pedidos-de-assinatura-nao-sao-criados-com-cartao-de-credito-salvo-e-savepersonaldataasoptin
locale: pt
kiStatus: Backlog
internalReference: 1087876
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Novos pedidos com assinaturas não podem ser criados usando um cartão de crédito salvo quando "savePersonalDataAsOptIn" está ativo na configuração do formulário de pedido.

## Simulação



- Ativar "savePersonalDataAsOptIn" na configuração do formulário de pedido;
- Montar um carrinho com um item com uma assinatura;
- A mensagem "Orders containing Subscriptions must have opt-in for 'Save Payment Data' and 'Save Personal Data'" (Pedidos que contêm assinaturas devem ser aceitos para 'Salvar dados de pagamento' e 'Salvar dados pessoais') será exibida ao fazer o pedido

## Workaround


N/A




