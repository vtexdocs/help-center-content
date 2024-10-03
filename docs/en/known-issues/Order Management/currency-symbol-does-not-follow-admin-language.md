---
title: 'Currency symbol does not follow admin language'
id: 7gEGdkDSbRCtk2Q1u2nW6k
status: PUBLISHED
createdAt: 2024-03-15T19:37:45.395Z
updatedAt: 2024-03-15T19:40:56.682Z
publishedAt: 2024-03-15T19:40:56.682Z
firstPublishedAt: 2024-03-15T19:37:46.387Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: currency-symbol-does-not-follow-admin-language
locale: en
kiStatus: Backlog
internalReference: 1000915
---

## Summary


When a user accesses the cart configuration screen in the orders area (`https://{accountname}}.myvtex.com/admin/checkout/#/configurations )` the currency symbol follows the conventions of the locale indicated by the admin, the exchange of this symbol is done whenever the admin indicates a different locale, however according to our analysis this exchange is failing at certain times, causing the currency symbol indicated to be the default of the page which in this case is R$.


##

## Simulation




- Log in to admin
- Go to https://.myvtex.com/admin/checkout/#/configurations
- Change the locale to PT and back to EN;
- Refresh the page, and you will see that currency symbol is still R$;


##

## Workaround


We currently don't have a Workaround for this scenario, but it doesn't impact the store's operation, as the Currency Symbol in this area is only visual with no operational impact on the store.




