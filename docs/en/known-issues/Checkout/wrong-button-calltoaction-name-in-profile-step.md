---
title: 'Wrong button call-to-action name in profile step'
id: 1S1dBhLOnKSpDX0sbXwF0y
status: PUBLISHED
createdAt: 2022-05-27T20:18:02.980Z
updatedAt: 2022-11-25T21:53:10.564Z
publishedAt: 2022-11-25T21:53:10.564Z
firstPublishedAt: 2022-05-27T20:18:03.671Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: wrong-button-calltoaction-name-in-profile-step
locale: en
kiStatus: Backlog
internalReference: 514532
---

## Summary


When filling in the data in the profile step at checkout and proceeding to the shipping step, when returning by clicking on the browser's return arrow, when reaching the profile again the button to proceed to the next step, should be with the name of '**Go to delivery**' however it says '**Go to payment**', even with the shipping component not yet filled.

Note: this only happens with the postal code component in the shipping step

Note2: The same problem, but with another validation, with the address filled, the button says "Ir para entrega"




## Simulation



Fill profile data and choose 'Go to delivery'

When you arrive in the delivery step, return in the browser's return arrow

You can see the CTA "**Ir para o Pagamento**" but the correct it's "**Ir para entrega**"




## Workaround


N/A

