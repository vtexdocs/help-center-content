---
title: 'Lean shipping causes "Something went wrong" after changing pick-up points'
id: 45jQODtjZ4vLXniNJIlQZc
status: PUBLISHED
createdAt: 2024-06-20T21:11:53.067Z
updatedAt: 2024-06-20T21:15:28.608Z
publishedAt: 2024-06-20T21:15:28.608Z
firstPublishedAt: 2024-06-20T21:11:53.899Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: lean-shipping-causes-something-went-wrong-after-changing-pickup-points
locale: en
kiStatus: Backlog
internalReference: 1053609
---

## Summary


A shopper can search for different pick-up points in different postal codes. When using lean shipping, after adding a postal code with pick-up points available and changing to a postal code without pick-up points, the shipping step is blocked with the message "Something went wrong".

 ![](https://vtexhelp.zendesk.com/attachments/token/i0jCDFlz5EGPnKyk5Nfw0Etl0/?name=image.png)


##

## Simulation



- Assemble a cart and select pick up in point in the cart;
- Add a postal code with pick-up;
- Select one of the pickups
- Change to a postal code without pick-up points;
- Go to checkout and the message "Something went wrong" is shown in the shipping step.


##

## Workaround


Refresh the page or deactivate the lean shipping.




