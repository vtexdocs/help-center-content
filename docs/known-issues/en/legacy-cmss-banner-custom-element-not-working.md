---
title: "Legacy CMS's banner custom element not working"
id: 3ezW1BTc2nSvHpp0mAYhwh
status: PUBLISHED
createdAt: 2024-02-07T13:44:20.722Z
updatedAt: 2024-02-07T13:44:21.554Z
publishedAt: 2024-02-07T13:44:21.554Z
firstPublishedAt: 2024-02-07T13:44:21.554Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: legacy-cmss-banner-custom-element-not-working
locale: en
kiStatus: Backlog
internalReference: 978466
---

## Summary


Currently, the "custom elements" tab of the legacy CMS configurations is not working properly.

Setting up a custom element of this type will not yield effects in most cases and directly setting it up in the layout's HTML is recommended.

This only happens for legacy template stores.


##

## Simulation


1 - go to the legacy CMS and select the custom elements tab
2 - upload a custom element of the "banner" type
3 - reference this banner in your html
4 - the configured banner will not render properly


##

## Workaround


set up the banners by using the type HTML layout and/or subtemplates associated to it.

OR

migrate to the VTEX store framework





