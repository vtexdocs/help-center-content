---
title: "Analytics: Configurar alertas operacionais"
createdAt: 2026-11-10T17:36:00.000Z
updatedAt: 2026-11-11T21:20:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: configuring-operational-alerts
locale: pt
---

Os **alertas operacionais** ajudam você a identificar atendimentos que ultrapassam os tempos definidos para a sua operação. Moderadores do projeto podem configurar alertas de tempo de espera, tempo para a primeira resposta e tempo de atendimento na aba **Ao vivo** do dashboard **Live Desk**.

Este guia explica cada alerta e como configurar o tempo limite, o limite de notificação e os destinatários de e-mail.

## Tipos de alerta

Cada alerta é opcional e funciona de forma independente. Os cards de tempo correspondentes na aba **Ao vivo** exibem a média atual e o valor máximo registrado para os atendimentos ativos. Quando um atendimento ultrapassa um limite configurado, o dashboard destaca esse atendimento na tabela de monitoramento detalhado.

| Alerta | Sigla | Descrição |
| --- | --- | --- |
| **Tempo máximo de espera** | TME | Tempo que um contato passa na fila antes de o atendimento começar. |
| **Tempo Médio de Primera Resposta** | TMPR| Tempo entre o início do atendimento e a primeira mensagem do agente. |
| **Tempo Médio de Atendimento** | **TMA** | Média do tempo total da conversa, do início do atendimento até o fim. |

> ℹ️ O alerta de tempo para a primeira resposta permanece ativo até que o agente envie a primeira mensagem.

Quando o número de atendimentos com um alerta ativo atinge o limite configurado para esse alerta, o Analytics exibe uma notificação. Se você selecionar destinatários de e-mail, eles também recebem a notificação por e-mail.

Para mais informações sobre a aba **Ao vivo** e suas métricas, consulte o artigo [Analytics: Métricas de atendimento](https://help.vtex.com/pt/docs/tutorials/analytics-metricas-de-atendimento).

## Configurando os alertas

Os destinatários de e-mail e o limite de notificação são configurados separadamente para cada alerta.

1. Acesse a organização e o projeto que você deseja configurar no [VTEX CX Platform](https://dash.weni.ai/orgs).
2. Abra **Analytics**.
3. No dashboard **Live Desk**, abra a aba **Ao vivo**.
4. Ao lado de `Exportar dados`, clique no botão de mais opções <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
5. Clique em `Alertas operacionais`.
6. Ative um ou mais dos alertas a seguir:
   - **Tempo de espera:** Exibe um alerta no dashboard Live Desk quando o tempo de espera de um atendimento ultrapassa o limite definido.
   - **Tempo para 1ª resposta:** Exibe um alerta no dashboard Live Desk quando o tempo para a primeira resposta de um atendimento ultrapassa o limite definido.
   - **Tempo de atendimento:** Exibe um alerta no dashboard Live Desk quando o tempo de atendimento ultrapassa o limite definido.
7. Para cada alerta ativado:
   1. Informe o limite em **Tempo máximo de espera**, **Tempo máximo para 1ª resposta** ou **Tempo máximo de atendimento**.
   2. Em **Unidade**, selecione **Segundos**, **Minutos** ou **Horas**. A unidade padrão é **Minutos**.
   3. Em **Notificação por e-mail (opcional)**, use **Enviar e-mail para** para selecionar os moderadores e gerentes que devem receber o alerta por e-mail.
   4. Em **Quando**, informe o número de atendimentos que devem ter um alerta ativo antes do envio da notificação. O padrão é `5`.
8. Clique em `Salvar`.

O botão `Salvar` permanece indisponível até que você informe um tempo limite para todos os alertas ativados. Se você não selecionar destinatários de e-mail, os atendimentos que ultrapassarem os limites continuam destacados na aba **Ao vivo**, e o Analytics ainda exibe a notificação quando o limite configurado for atingido.
