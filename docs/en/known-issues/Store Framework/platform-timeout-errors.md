---
title: 'Platform timeout errors'
id: 6Kp2viMZSnmGucJnciDNKx
status: PUBLISHED
createdAt: 2024-06-17T18:07:48.342Z
updatedAt: 2024-10-10T14:32:44.370Z
publishedAt: 2024-10-10T14:32:44.370Z
firstPublishedAt: 2024-06-17T18:07:49.170Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: platform-timeout-errors
locale: en
kiStatus: Backlog
internalReference: 1051070
---

## Summary


The messages app randomly receives a timeout error, and some pages may need a refresh to work properly. This is related to admin pages, but any other page of the platform can also receive this error.

This may be related to GraphQL queries. Normally, you'll see errors in the `/meta` route or a messages app timeout related to the `translateWithDeps` query.


##

## Simulation


Try accessing some pages on the admin, for example, of an account, and randomly, this page can receive the error below. This image can also appear on myvtex environment when accessing any other pages:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Store%20Framework/platform-timeout-errors_1.png)
When you refresh the page everything should be back to normal

You can see more details of the error on the console or just wait for it to refresh.


##

## Workaround


N/A





