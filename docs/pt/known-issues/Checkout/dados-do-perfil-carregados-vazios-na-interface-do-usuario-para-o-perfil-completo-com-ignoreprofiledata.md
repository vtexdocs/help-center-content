---
title: "Dados do perfil carregados vazios na interface do usuário para o perfil completo com 'ignoreProfileData'"
id: 10B1QKgN42sjapDEALmKOp
status: PUBLISHED
createdAt: 2024-04-15T11:41:06.841Z
updatedAt: 2024-04-15T11:41:07.691Z
publishedAt: 2024-04-15T11:41:07.691Z
firstPublishedAt: 2024-04-15T11:41:07.691Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: profile-data-loaded-empty-in-the-ui-for-complete-profile-with-ignoreprofiledata
locale: pt
kiStatus: Backlog
internalReference: 1016582
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao definir "ignoreProfileData" via API Ignore profile data on checkout, se o comprador tiver um perfil completo, mas não estiver conectado, os dados serão carregados vazios na interface do usuário.

## Simulação



- Enviar o ignoreProfileData via API Ignorar dados de perfil no checkout;
- Adicionar um item ao carrinho;
- Adicionar um e-mail com um perfil completo; nenhum dado será carregado e será necessário fazer login.

 ![](https://vtexhelp.zendesk.com/attachments/token/jVk0tmcR7R4BmaEkDcCedJgBP/?name=image.png

## Workaround


N/A




