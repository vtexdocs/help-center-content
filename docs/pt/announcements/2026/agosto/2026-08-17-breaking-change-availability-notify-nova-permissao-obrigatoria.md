---
title: 'Breaking change: Nova permissão obrigatória para o app Availability Notify'
slug: '2026-08-17-breaking-change-availability-notify-nova-permissao-obrigatoria'
hidden: false
createdAt: 2026-08-17T12:00:00.000Z
updatedAt: 2026-08-17T12:00:00.000Z
contentType: updates
productTeam: Apps
slugEN: 2026-08-17-breaking-change-availability-notify-new-required-permission
locale: pt
announcementSynopsisPT: 'A partir de 21 de setembro de 2026, a permissão Download Notification Requests será obrigatória para baixar, processar ou excluir pedidos de notificação do app Availability Notify'
tags:
  - Breaking change
  - Apps
  - Identity
---

A partir de **21 de setembro de 2026**, as operações administrativas do app [Availability Notify](https://developers.vtex.com/docs/apps/vtex.availability-notify) passarão a exigir o [recurso do License Manager](https://help.vtex.com/pt/docs/tutorials/recursos-do-license-manager) **Download Notification Requests**. Usuários e [chaves de API](https://help.vtex.com/pt/docs/tutorials/chaves-de-api) sem esse recurso receberão erros de permissão ou de autorização.

## O que mudou?

As seguintes operações administrativas do Availability Notify passarão a exigir o recurso **Download Notification Requests**, além de uma sessão administrativa autenticada:

| Operação | Rota / GraphQL | Ação no Admin |
| :- | :- | :- |
| `listRequests` | `/_v/availability-notify/list-requests` | Download Requests |
| `processUnsentRequests` | `/_v/availability-notify/process-unsent` | Process Unsent |
| `deleteRequest` | Mutação GraphQL | - |

Essa mudança não afeta o fluxo de inscrição do **Avise-me** na página de produto. Apenas as operações administrativas e de back-office são impactadas.

> ℹ️ Usuários com o perfil **Owner (Admin Super)** já possuem esse recurso e não precisam tomar nenhuma ação.

## Por que fizemos essa mudança?

Para melhorar a granularidade de acesso e aplicar boas práticas de segurança, exigiremos um recurso explícito no License Manager, limitando quem pode baixar, processar ou excluir dados de pedidos de notificação.

## O que precisa ser feito?

Antes de **21 de setembro de 2026**, toda conta que faz uso das operações **Download Requests**, **Process Unsent** ou **Delete Request** deve conceder o recurso **Download Notification Requests** aos usuários e chaves de API relevantes:

1. No Admin VTEX, acesse **Configurações da conta > Usuários > Perfis de acesso**.
2. [Crie um perfil de acesso personalizado](https://help.vtex.com/pt/docs/tutorials/criar-perfil-de-acesso#criar-perfil-de-acesso-personalizado) ou [edite um perfil existente](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso) e adicione o recurso **Download Notification Requests** (produto **Availability Notify**).
3. Atribua esse perfil a cada [usuário administrativo](https://help.vtex.com/pt/docs/tutorials/gerenciar-usuarios-administrativos#editar-um-usuario) que precisa baixar ou processar pedidos de notificação.
4. Atribua esse perfil a cada [chave de API](https://help.vtex.com/pt/docs/tutorials/chaves-geradas#editar-chave-gerada) usada por integrações que chamam essas rotas.

A partir de **21 de setembro de 2026**, usuários e chaves de API sem o recurso serão bloqueados. Usuários que tentarem realizar alguma das operações receberão um alerta no Admin por não possuírem permissão. Integrações que chamarem essas rotas receberão uma resposta HTTP 403 Forbidden.

Para mais informações sobre o app Availability Notify, consulte a [documentação do app](https://developers.vtex.com/docs/apps/vtex.availability-notify).
