---
title: 'Gift card page UI loading indefinitely, preventing users with permission from accessing it properly'
id: 6HfglIfAEuXfQlVVnIJiQO
status: PUBLISHED
createdAt: 2021-07-29T12:25:51.576Z
updatedAt: 2022-12-22T20:51:53.612Z
publishedAt: 2022-12-22T20:51:53.612Z
firstPublishedAt: 2021-07-29T14:30:28.706Z
contentType: knownIssue
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
tag: Gift Card
slug: gift-card-page-ui-loading-indefinitely
kiStatus: Backlog
internalReference: 
---

## Summary

The UI of the Gift card page, in the Payments module, is not loading properly. We noticed that if you have permission to access the Gift card page in the Admin beforehand, you can access it just fine. But if you try to access it without permission first, then get the permission and try to access it again, it can generate a problem in which the UI appears to be loading forever and the user can't access the page.


## Simulation

1. Create a user and give them permission to access another page other than the Gift card.
2. Ask the user to try to access the Gift card page and make sure that they get the access denied page.
3. Change the permission and give the user access to the Gift card page.
4. When they try to access it, the page will be loading.


## Workaround

We are still working on that, but if you wait long enough (about an hour), you can access it.

Also, it will probably work if you delete the user and create it again and give them permission to access the Gift card page.


