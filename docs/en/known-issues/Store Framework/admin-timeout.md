---
title: 'Admin timeout'
id: 6Kp2viMZSnmGucJnciDNKx
status: PUBLISHED
createdAt: 2024-06-17T18:07:48.342Z
updatedAt: 2024-06-17T18:07:49.170Z
publishedAt: 2024-06-17T18:07:49.170Z
firstPublishedAt: 2024-06-17T18:07:49.170Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: admin-timeout
locale: en
kiStatus: Backlog
internalReference: 1051070
---

## Summary


The messages app is receiving a timeout error randomly and some admin pages may need a refresh to work properly.

This may be related to GraphQL queries. Normally you'll see errors in the `/meta` route or a messages app timeout related to the `translateWithDeps` query.


##

## Simulation


Try accessing some pages on the admin of an account and randomly this page can receive the error below:
 ![](https://vtexhelp.zendesk.com/attachments/token/zNzGxtaY5SszSHGFiKRMiCXda/?name=image.png)

 ![](https://vtexhelp.zendesk.com/attachments/token/KqbIgf2qqZIAdpYgXJcaiu5FJ/?name=image.png)

When you refresh the page everything should be back to normal


##

## Workaround


N/A





