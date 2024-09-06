---
title: 'O aplicativo de mensagens está demorando muito para retornar as informações'
id: 5GnHyQaPlqCW0KNar1tlMC
status: PUBLISHED
createdAt: 2024-01-30T14:16:58.627Z
updatedAt: 2024-01-30T14:16:59.326Z
publishedAt: 2024-01-30T14:16:59.326Z
firstPublishedAt: 2024-01-30T14:16:59.326Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: o-aplicativo-de-mensagens-esta-demorando-muito-para-retornar-as-informacoes
locale: pt
kiStatus: Backlog
internalReference: 567305
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


No processo de indexação, chamamos o aplicativo de mensagens para salvar informações traduzidas sobre os produtos. O principal problema é que as solicitações estão demorando muito para retornar e, com isso, algumas lojas que têm muitos idiomas não indexam totalmente ou têm suas indexações travadas.

## Simulação


Verifique qualquer loja que tenha uma grande quantidade de idiomas, mais de 10, e isso começará a tornar a resposta das mensagens mais lenta.
Isso pode refletir em outros sistemas que dependem das mensagens para traduzir informações.



## Workaround


N/A

