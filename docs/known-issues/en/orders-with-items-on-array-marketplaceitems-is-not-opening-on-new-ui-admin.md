---
title: 'Orders with items on array MarketplaceItems is not opening on New UI Admin'
id: 3tj9AKklBHm4tCKYgrfDi5
status: PUBLISHED
createdAt: 2022-09-13T03:06:57.141Z
updatedAt: 2022-11-25T22:01:26.839Z
publishedAt: 2022-11-25T22:01:26.839Z
firstPublishedAt: 2022-09-13T03:06:57.675Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: orders-with-items-on-array-marketplaceitems-is-not-opening-on-new-ui-admin
kiStatus: Backlog
internalReference: 656821
---

## Summary


Some orders has the array "marketplace Items" filled with more items then the array "items" of json order. This setup is normal and is regarding for example "wedding gift list".
But the New UI is not prepared to handle these kind of orders with items on "marketplace Items" and broke the page with an error message:





"Sorry, something went wrong on our side.

Please try again or refresh the page.

Back to the list"




## Simulation


Create an order with catalog using array "marketplace Items", after that you can try see the order on UI admin. The UI will broke and show a message error.




## Workaround


Use the old UI to open that order.

