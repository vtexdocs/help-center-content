---
title: "PS - Somente um agente recebe notificação por e-mail em uma chamada ativa"
id: 6yCJx946wLRzLt7zIFk18n
status: PUBLISHED
createdAt: 2025-04-30T13:10:26.340Z
updatedAt: 2025-04-30T13:10:27.044Z
publishedAt: 2025-04-30T13:10:27.044Z
firstPublishedAt: 2025-04-30T13:10:27.044Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: ps-somente-um-agente-recebe-notificacao-por-email-em-uma-chamada-ativa
locale: pt
kiStatus: Backlog
internalReference: 1218130
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Durante os testes com o Personal Shopper, foi observado que apenas um dos agentes atribuídos a uma sessão ativa recebia a notificação por e-mail, enquanto o outro não. Esse comportamento ocorre quando a **atribuição manual de agentes** está ativada e foi relatado em **várias contas**, não apenas em uma.

## Simulação



1. Habilite a atribuição manual de agentes na conta.
2. Atribua dois agentes a uma sessão ativa do Personal Shopper.
3. Inicie uma chamada com um cliente a partir do canal Admin.
4. Observe o seguinte comportamento:
  - Apenas um dos agentes recebe a notificação por e-mail.
  - O outro agente não recebe nenhuma notificação

## Workaround



1. Acesse a conta Admin.
2. Identifique o usuário Shopper que não está recebendo notificações por e-mail.
3. Exclua o usuário da configuração correspondente.
4. Recrie o usuário usando o mesmo endereço de e-mail e a configuração original.
5. Salve as alterações.
6. Execute um novo teste para confirmar que as notificações por e-mail são enviadas corretamente.





