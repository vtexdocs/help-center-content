---
title: 'Novos eventos disponíveis no Audit'
createdAt: 2026-05-12T00:00:00.000Z
updatedAt: 2026-05-12T00:00:00.000Z
contentType: updates
productTeam: Storage
slugEN: 2026-05-12-new-events-available-in-audit
locale: pt
announcementSynopsisPT: 'Ampliamos a lista de eventos do Audit com novos registros para as aplicações VTEX ID, Master Data, Pedidos e Vale-presente, oferecendo mais visibilidade sobre operações sensíveis na sua loja.'
tags:
  - Novo
  - Audit
---

Ampliamos a lista de eventos registrados pelo [Audit](/pt/docs/tutorials/audit), módulo do Admin VTEX que armazena o histórico de ações realizadas em diferentes aplicações. As novidades abrangem as aplicações **VTEX ID**, **Master Data**, **Pedidos** e **Vale-presente**.

## O que mudou?

A lista de [eventos disponíveis no Audit](/pt/docs/tutorials/eventos-disponiveis-no-audit) passa a incluir os seguintes registros:

### VTEX ID

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| UserLogin | Login do usuário no Admin VTEX. | ID do usuário. |
| UserLogout | Logout do usuário do Admin VTEX. | ID do usuário. |

### Master Data

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| ReadPersonalInformation | Leitura de informação pessoal. Aplicável apenas a interações com as entidades CL e AD na interface do CRM. | ID do documento. |
| CreatePersonalInformation | Criação de informação pessoal. Aplicável apenas a interações com as entidades CL e AD na interface do CRM. | ID do documento. |
| UpdatePersonalInformation | Atualização de informação pessoal. Aplicável apenas a interações com as entidades CL e AD na interface do CRM. | ID do documento. |
| DeletePersonalInformation | Exclusão de informação pessoal. | ID do documento. |
| SearchPersonalInformation | Busca de informação pessoal. Aplicável apenas a interações com as entidades CL e AD na interface do CRM. | Detalhes da busca. |

### Pedidos

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| GetUnmaskedPersonalInformation | Leitura de informação pessoal desmascarada em um pedido. | ID do pedido. |
| UpdatePersonalInformation | Atualização de informação pessoal em um pedido. | ID do pedido. |

### Vale-presente

| Ação | Descrição do evento | Detalhes do evento |
|---|---|---|
| LIST_GIFT_CARD_TRANSACTIONS | Visualização das transações de vale-presente. | list-gift-card-transactions |
| VIEW_GIFT_CARD_CONDITIONS | Visualização das condições de vale-presente. | view-gift-card-conditions |
| CREATE_GIFT_CARD_CONDITIONS | Criação das condições de vale-presente. | create-gift-card-conditions |
| EDIT_GIFT_CARD_CONDITIONS | Edição das condições de vale-presente. | edit-gift-card-conditions |
| EDIT_GIFT_CARD_CONFIGURATION | Edição da configuração de vale-presente. | edit-gift-card-configuration |
| CREATE_GIFT_CARD_CANCELLATION | Registro de cancelamento de vale-presente. | create-gift-card-cancellation |
| CREATE_GIFT_CARD_SETTLEMENT | Registro de liquidação de vale-presente. | create-gift-card-settlement |
| INSERT_GIFT_CARD_CREDITS | Inserção de créditos em vale-presente. | insert-gift-card-credits |

> ℹ️ Confira a lista completa em [Eventos disponíveis no Audit](/pt/docs/tutorials/eventos-disponiveis-no-audit).

## O que precisa ser feito?

Nenhuma ação é necessária. Os novos eventos já estão disponíveis para todas as contas VTEX e podem ser filtrados no [Audit](/pt/docs/tutorials/audit) pelos nomes de ação listados acima.
