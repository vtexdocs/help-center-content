---
title: 'Using slider-layout with the prop navigationStep to 1 causes last dots to be empty'
id: 28hbmflHNhAQmHN51Y6abX
status: PUBLISHED
createdAt: 2023-09-29T14:41:34.387Z
updatedAt: 2023-09-29T14:57:48.863Z
publishedAt: 2023-09-29T14:57:48.863Z
firstPublishedAt: 2023-09-29T14:41:35.227Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: using-sliderlayout-with-the-prop-navigationstep-to-1-causes-last-dots-to-be-empty
locale: en
kiStatus: Backlog
internalReference: 910125
---

## Summary


When we have a slider-layout block with the `navigationStep` prop set to 1 and the `itemsPerPage` different than 1 the last dot will be empty and it is not possible to delete it.


##

## Simulation



- Create a new slider-layout block
- Set the `navigationStep` to 1
- Set the `itemsPerPage` in a value different than 1
- Using the slider arrows, try to navigate to the last dot on the slider
- You'll see that the last dot is empty


##

## Workaround


N/A





