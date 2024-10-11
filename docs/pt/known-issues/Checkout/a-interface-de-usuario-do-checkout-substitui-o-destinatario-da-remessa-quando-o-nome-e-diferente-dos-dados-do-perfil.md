---
title: 'A interface de usuário do checkout substitui o destinatário da remessa quando o nome é diferente dos dados do perfil'
id: 2IrL7DbWbzdgxZh6Us6n4q
status: PUBLISHED
createdAt: 2023-05-09T22:08:13.314Z
updatedAt: 2023-05-17T15:35:45.479Z
publishedAt: 2023-05-17T15:35:45.479Z
firstPublishedAt: 2023-05-09T22:08:14.290Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-overwrites-shipping-recipient-when-name-is-different-from-profile-data
locale: pt
kiStatus: Fixed
internalReference: 822670
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Se um comprador tiver um perfil completo em que o nome e o sobrenome sejam diferentes do destinatário da remessa, quando o perfil for preenchido automaticamente no checkout, a interface do usuário substituirá o destinatário da remessa pelo valor do nome e do sobrenome combinados.

## Simulação



- Registre um comprador com nome e sobrenome diferentes do destinatário do frete;
- Vá para o checkout e adicione o e-mail dele para preencher automaticamente as informações do perfil;
- Verifique o destinatário da remessa, que será o nome e o sobrenome

## Workaround


N/A



