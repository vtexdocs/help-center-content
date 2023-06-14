---
title: 'Changing zip code doesn't remove old address'
id: 3kS6NurZhmokISg82eaMw2
status: PUBLISHED
createdAt: 2018-09-11T19:53:42.872Z
updatedAt: 2022-12-22T20:48:38.338Z
publishedAt: 2022-12-22T20:48:38.338Z
firstPublishedAt: 2018-09-11T20:10:52.209Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: changing-zip-code-doesnt-remove-old-address
kiStatus: Backlog
internalReference: 
---

## Summary

When you change the zip code, the previously filled address is not removed from the form.

This scenario only happens in version 6 of SmartCheckout and is limited to the user experience, with no major flaws related to it.

## Simulation

1. In any cart, enter the zip code, number and complement;
2. Change the zip code;
3. Note that the number and complement fields hold the data from the first step. The expected behavior was to clear them and ask for new data.

## Workaround

There is no known workaround for this scenario.

