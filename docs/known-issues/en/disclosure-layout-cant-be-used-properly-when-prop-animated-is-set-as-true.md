---
title: "Disclosure Layout can't be used properly when prop animated is set as true"
id: 14QweVpzLO8TsyI68H79ZG
status: PUBLISHED
createdAt: 2022-04-19T19:53:22.409Z
updatedAt: 2022-11-25T22:13:15.022Z
publishedAt: 2022-11-25T22:13:15.022Z
firstPublishedAt: 2022-04-19T19:53:23.090Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: disclosure-layout-cant-be-used-properly-when-prop-animated-is-set-as-true
locale: en
kiStatus: Backlog
internalReference: 417947
---

## Summary


There is an issue in disclosure layout that is only triggering the block to show, but it's not closing. This is caused by prop animated, that is not working properly when set in disclosure layout and doesn't allow to hide the element after opening.



## Simulation


Go to any store using disclosure-layout with prop animated as true.
Try to show and hide the element.

The content can't be hidden.




## Workaround


Add the following handle in styles, this should avoid the issue in animation because the class is being changed:

    .vtex-disclosure-layout-1-x-content--search-description-content--hidden {display: none;}

