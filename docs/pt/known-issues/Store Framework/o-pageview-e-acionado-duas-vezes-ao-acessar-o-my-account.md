---
title: 'O pageView é acionado duas vezes ao acessar o My Account'
id: 2jV0cIVxNUhb170tBgBQo6
status: PUBLISHED
createdAt: 2023-07-03T16:33:09.076Z
updatedAt: 2023-07-03T16:33:09.652Z
publishedAt: 2023-07-03T16:33:09.652Z
firstPublishedAt: 2023-07-03T16:33:09.652Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: pageview-is-triggered-twice-when-accessing-my-account
locale: pt
kiStatus: Backlog
internalReference: 854480
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao acessar o My Account, o evento pageView é acionado duas vezes, duplicando os dados no Analytics.

## Simulação



- Configure o aplicativo Google Tag Manager,
- Acesse My Account (Minha conta);
- Abra as Ferramentas do desenvolvedor do navegador e digite "dataLayer" no Console; haverá dois eventos pageView

## Workaround


N/A



