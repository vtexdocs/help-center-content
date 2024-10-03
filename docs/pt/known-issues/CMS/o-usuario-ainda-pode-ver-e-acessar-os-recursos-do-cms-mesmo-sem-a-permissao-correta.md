---
title: 'O usuário ainda pode ver e acessar os recursos do CMS mesmo sem a permissão correta'
id: n2BmrCyzXD04sysczRuyt
status: PUBLISHED
createdAt: 2024-06-07T12:22:10.494Z
updatedAt: 2024-06-07T12:22:11.466Z
publishedAt: 2024-06-07T12:22:11.466Z
firstPublishedAt: 2024-06-07T12:22:11.466Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: user-can-still-see-and-access-cms-features-even-without-the-correct-permission
locale: pt
kiStatus: Backlog
internalReference: 1046263
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Se o usuário não tiver nenhuma das permissões do CMS, ele não deverá ser capaz de acessar ou mesmo ver os módulos do CMS. Mas isso não está acontecendo.

## Simulação


Tente acessar os módulos CMS usando um usuário que não tenha as seguintes permissões LM:

      CMS:

- Consulte o menu CMS na barra superior
- Configurações

GraphQL:
- API GraphQL do CMS

O usuário ainda poderá acessar e ver os recursos (mas não editá-los).



## Workaround


N/A





