---
title: 'The price filter in the store window shows the lowest price registered, ignoring the sales policy to which it is linked'
id: 1xbpUOsLDGIgqeQ6UCCgK0
status: PUBLISHED
createdAt: 2017-04-03T20:54:18.423Z
updatedAt: 2022-12-22T20:45:56.420Z
publishedAt: 2022-12-22T20:45:56.420Z
firstPublishedAt: 2017-04-03T21:43:41.118Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: the-price-filter-in-the-store-window-shows-the-lowest-price-registered-ignoring-the-sales-policy-to-which-it-is-linked
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The price filter shows the lowest price registered, ignoring the sales policy to which it is linked. This case is specific to products with multiple value tables (associated with different sales policies).

<video preload="metadata" width="100%" controls="controls">
  <source type="video/mp4" src="//videos.contentful.com/alneenqid6w5/1VtdEXKfvekQeSKMmEeusY/d1b1d1cd6a2e902c0b297eed32ca205a/ProblemaConhecido.mp4">
</video>

In this case, the filter takes into account products for the São Paulo region, but when looking for the price with the discount for the file, it takes the lowest price, which is for Paraná, since the discount in fact being applied is 10%.

This being the case, if we take the values registered for each commercial policy, minus the 10% discount, we will have:

SP = $58.83
MG = $57.51
PR = $49.41

## Simulation

- Loading a store window with products;
- Use the side menu to filter by price band;

## Workaround

There is no workaround.

