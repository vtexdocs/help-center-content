---
title: 'Messages app taking too long to return the informations'
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
slugEN: messages-app-taking-too-long-to-return-the-informations
locale: en
kiStatus: Backlog
internalReference: 567305
---

## Summary


In the indexation process, we call the messages app to save translated information on the products, the main issue is that the requests are taking too long to return and with that, some stores that have lots of languages either do not index fully or have their indexations stuck.


##

## Simulation


Check any store that has a great amount of languages, more than 10 and it will start to slow the response of the messages.
It can reflect other systems that depend on the messages to translate information.


##

## Workaround


N/A

