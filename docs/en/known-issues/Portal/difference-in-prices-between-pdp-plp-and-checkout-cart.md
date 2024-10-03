---
title: 'Difference in prices between PDP, PLP and Checkout Cart'
id: 3Oo5ccYOG7hcEXYaROxXMV
status: PUBLISHED
createdAt: 2023-06-29T20:02:13.485Z
updatedAt: 2023-06-29T20:02:14.572Z
publishedAt: 2023-06-29T20:02:14.572Z
firstPublishedAt: 2023-06-29T20:02:14.572Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: difference-in-prices-between-pdp-plp-and-checkout-cart
locale: en
kiStatus: Backlog
internalReference: 853175
---

## Summary



Portal is delivering the same content on the PDPs and PLPs even after some updates like promotions.


##

## Simulation



With an expired cache, the CND asks the portal system if the page was changed. If so, the portal delivers the new page to be rendered, otherwise, the CDN redraws the page it already has.

In this case, we saw that although the page had submitted some changes, the inclusion of a promotion, the portal returned to the CDN that there was no change compared to the cached page and therefore the edge layer was rendering the page without promotion.


##

## Workaround



One way around it was **to change the template of the product page (like include a comment**), so the portal informes that there was a change in the structure, and the CDN gets the new page to be cached.




