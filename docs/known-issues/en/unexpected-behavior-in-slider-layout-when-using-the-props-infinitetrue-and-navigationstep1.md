---
title: 'Unexpected behavior in slider layout when using the props infinite=true and navigationStep=1'
id: 2uSG9sqj32yL3wHt0SUnOO
status: PUBLISHED
createdAt: 2022-02-01T19:49:07.658Z
updatedAt: 2022-11-25T22:13:51.355Z
publishedAt: 2022-11-25T22:13:51.355Z
firstPublishedAt: 2022-02-01T21:08:05.816Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: unexpected-behavior-in-slider-layout-when-using-the-props-infinitetrue-and-navigationstep1
kiStatus: Backlog
internalReference: 462895
---

## Summary


An unexpected behavior occurs when using vtex.slider-layout, if these two props are set together:


- infinite: true
- navigationStep: 1

In this case, when the slider is scrolled using the right arrow, it shows the next card, one at a time, as expected due to the navigationStep=1 parameter. But after it reaches the last card, it then shows the first one, and after that the second one becomes the first in the list, and it goes back and forth when clicking the right arrow.

The expected behavior would be to roll the slider all the way back to the first card when it reaches the last one, and start the one by one stepping again.



## Simulation


Create a slider-layout using the two prop values mentioned above and check it's behavior on the website.



## Workaround


Avoid using both properties with those specific values together.

If the expected behavior is ultimately needed for the page, it is possible to create a custom component to achieve this result.

