---
title: 'Shipping Promotion does not generate highlights / flags'
id: wwCzhTue5cSNhKFLFX9lP
status: PUBLISHED
createdAt: 2022-04-25T14:00:46.027Z
updatedAt: 2022-11-25T22:09:40.171Z
publishedAt: 2022-11-25T22:09:40.171Z
firstPublishedAt: 2022-04-25T14:00:46.772Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: shipping-promotion-does-not-generate-highlights-flags
kiStatus: Backlog
internalReference: 527111
---

## Summary


Percentage shipping, maximum shipping, free shipping, and gift promotions are not generating highlight / flags at PDPs and PLPs.



## Simulation


- Create a Shipping Promotion and set "Promotion is Highlight" to Yes;
- Make sure you are not using any restriction in the cart (zip code range, cluster of costumers etc, for more information https://help.vtex.com/tutorial/configuring-promotions-with-a-highlightflag--tutorials_2295);
- Make sure you are using the correct ViewPart to render this information on the front, for Portal stores: https://help.vtex.com/tutorial/lista-de-controles-para-templates?locale=pt, for IO Stores: https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-highlights
- Check the PDP or PLP, the highlight information will not be available.



## Workaround


There is no workaround.

