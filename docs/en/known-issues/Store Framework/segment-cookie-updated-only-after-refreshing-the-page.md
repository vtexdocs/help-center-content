---
title: 'Segment Cookie updated only after refreshing the page'
id: 3QBmp4D2tvIAxEzEy2LpNf
status: PUBLISHED
createdAt: 2022-11-01T16:33:05.698Z
updatedAt: 2024-01-10T17:18:13.115Z
publishedAt: 2024-01-10T17:18:13.115Z
firstPublishedAt: 2022-11-01T16:33:06.403Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: segment-cookie-updated-only-after-refreshing-the-page
locale: en
kiStatus: Backlog
internalReference: 647116
---

## Summary


Some VTEX features and components can use data requested from the Segment Cookie to present information (like price, promotion data, SKU availability, etc) in the storefront. This cookie is stored in the user's browser when the session is created. Sometimes, mostly in dynamic scenarios where it needs to make changes in the front where it triggers a Cookie Segment update, the cookie itself loses some data which is a of a behavior in render-runtime that doesn't trigger segment change to the context

How to retrieve Session info:
https://developers.vtex.com/vtex-rest-api/reference/getsession

You can get the Segment Cookie data through the segment token:

- Open the browser's console;
- Decode the segment token presented in the render runtime object;
- In the console, run:` atob(__RUNTIME__.segmentToken)`
 ![](https://vtexhelp.zendesk.com/attachments/token/wHuslnrutSh5W2CZS4FlHBm0d/?name=Captura+de+Tela+2022-09-23+a%CC%80s+14.09.57.png)


##

## Simulation



- Select a store that presents information based on a Segment Cookie data:
- Ex.: Different prices are shown based on the customer identification - related to pricing tables;
- Get the Cookie Segment data in different scenarios using the app that retrieves the user identification;


##

## Workaround


Refresh the page





