---
title: "Property blockClass from infoCard not working"
id: LTEEWCaZx2unBWSEJFDw6
status: PUBLISHED
createdAt: 2023-01-31T19:02:03.835Z
updatedAt: 2024-07-01T18:48:42.227Z
publishedAt: 2024-07-01T18:48:42.227Z
firstPublishedAt: 2023-01-31T19:02:04.299Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: property-blockclass-from-infocard-not-working
locale: en
kiStatus: No Fix
internalReference: 743730
---

## Summary



Infocard has a prop called blockClass to add custom classes into the component, but this property is not working


##

## Simulation



Open your infoCard component, add the prop blockClass
Check your elements on DOM and you won't find any infocard element with the added class


##

## Workaround


Build your own infocard with our components vtex.flex-layout, vtex.image and vtex.rich-text, this will give you more flexibility to build your infocard





