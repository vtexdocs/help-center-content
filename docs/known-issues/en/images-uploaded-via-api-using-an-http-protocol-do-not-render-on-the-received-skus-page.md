---
title: Images uploaded via API using an HTTP protocol do not render on the Received SKUs page
id: 2mi0Nyznh9NHnc7P5zLghn
status: PUBLISHED
createdAt: 2021-08-31T18:09:37.181Z
updatedAt: 2022-12-22T20:41:18.067Z
publishedAt: 2022-12-22T20:41:18.067Z
firstPublishedAt: 2021-08-31T18:15:01.326Z
contentType: knownIssue
productTeam: Channels
author: 2mXZkbi0oi061KicTExNjo
tag: Suggestions
slug: images-uploaded-via-api-using-an-http-protocol-do-not-render-on-the-received-skus-page
kiStatus: Backlog
internalReference: 
---

## Summary

Images uploaded via the [Send SKU Suggestion](https://developers.vtex.com/vtex-rest-api/reference/manage-suggestions-1#send-sku-suggestion) API using an HTTP protocol do not render on the Received SKUs page in the VTEX Admin. Nevertheless, if the image works correctly in the HTTP link, it will be rendered in the VTEX Catalog and the Marketplace storefront once the SKU is approved. We will soon only accept images uploaded using the HTTPS protocol, as a security measure. 


## Simulation

When sellers call the Send SKU Suggestion API and enter a link using an HTTP — instead of an HTTPS — protocol in the `imageUrl` field, the image sent does not appear on the Received SKUs page.

```
 "Images": [
          {
"imageName": "Main",
"imageUrl": "http://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg"
          }

```


## Workaround

Sellers must upload images via the `imageUrl` field using the HTTPS protocol. This measure increases the security of the request and ensures that the image will be rendered on all VTEX pages.

```
 "Images": [
          {
"imageName": "Main",
"imageUrl": "https://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg"
          }
```


