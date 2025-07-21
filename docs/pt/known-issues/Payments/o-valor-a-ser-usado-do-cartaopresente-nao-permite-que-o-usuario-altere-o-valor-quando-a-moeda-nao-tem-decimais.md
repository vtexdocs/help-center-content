---
title: 'O "Valor a ser usado" do cartão-presente não permite que o usuário altere o valor quando a moeda não tem decimais'
id: 23HqMWkLn2yzikFAwwjvti
status: PUBLISHED
createdAt: 2025-05-14T13:18:01.781Z
updatedAt: 2025-05-14T13:18:02.525Z
publishedAt: 2025-05-14T13:18:02.525Z
firstPublishedAt: 2025-05-14T13:18:02.525Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: o-valor-a-ser-usado-do-cartaopresente-nao-permite-que-o-usuario-altere-o-valor-quando-a-moeda-nao-tem-decimais
locale: pt
kiStatus: Backlog
internalReference: 339664
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o usuário está no checkout, vai para a sessão de pagamento e opta por usar o crédito, o valor não pode ser alterado. O usuário tem permissão para usar o valor total.

## Simulação



- Defina o "Número de dígitos decimais a serem considerados" como 0 na Configuração geral de pedidos;
- Tente alterar o "Valor a ser usado" na etapa de pagamento

## Workaround


N/A




