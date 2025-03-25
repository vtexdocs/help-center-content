---
title: "Component drawer doesn't work when implemented in product-summary for iOS"
id: 75145kfQE8swAef57Yr4Aj
status: PUBLISHED
createdAt: 2023-05-29T13:22:57.856Z
updatedAt: 2024-02-19T18:51:53.024Z
publishedAt: 2024-02-19T18:51:53.024Z
firstPublishedAt: 2023-05-29T13:22:58.422Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: component-drawer-doesnt-work-when-implemented-in-productsummary-for-ios
locale: en
kiStatus: Backlog
internalReference: 833338
---

## Summary


When the component "drawer" is implemented in "product-summary", it causes the page to reload after page 3 in iOS, and an error message may be shown.


##

## Simulation



- Implement the "drawer" in "product-summary";
- Access the search page and go to until page 3;
- The page will reload, and sometimes an error message shows.


##

## Workaround


Implement the Modal Layout instead to have a quick view.




