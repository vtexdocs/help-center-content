---
title: 'clientProfileData fica vazio se a solicitação Add client profile for executada duas vezes'
id: 1TG7cnnMyWHNKrCjoouKoC
status: PUBLISHED
createdAt: 2023-10-02T15:51:35.989Z
updatedAt: 2023-10-02T15:51:36.771Z
publishedAt: 2023-10-02T15:51:36.771Z
firstPublishedAt: 2023-10-02T15:51:36.771Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: clientprofiledata-fica-vazio-se-a-solicitacao-add-client-profile-for-executada-duas-vezes
locale: pt
kiStatus: Backlog
internalReference: 911203
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao enviar a solicitação Adicionar perfil de cliente duas vezes e o e-mail tiver um perfil completo, "clientProfileData" fica vazio, mostrando apenas o e-mail.

## Simulação



- Adicionar perfil de cliente via API;
- Reenvie a mesma solicitação autenticada, o "clientProfileData" terá apenas o e-mail

## Workaround


N/A




