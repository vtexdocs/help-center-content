---
title: "External clients are receiving 301 erros when trying to access vteximg"
id: 7ccanjU8GMJ4JEUPbsaPfo
status: PUBLISHED
createdAt: 2024-12-12T18:57:08.245Z
updatedAt: 2024-12-12T20:27:28.192Z
publishedAt: 2024-12-12T20:27:28.192Z
firstPublishedAt: 2024-12-12T18:57:09.086Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: external-clients-are-receiving-301-erros-when-trying-to-access-vteximg
locale: en
kiStatus: Backlog
internalReference: 1150100
---

## Summary


When making a request through an app to access a `vteximg` endpoint on an external client, the response can be a 301 (redirect). This occurs because `colossus-legacy-proxy` is manipulating the request.

Kube-Router receives the request and sends it to `colossus-legacy-proxy` to be resolved. But the proxy changes the request from `https://.vteximg.com.br` to `http://.vtexcommercestable.com.br,` and this request goes back to Kube-Router. It searches this request outside of our clusters, but the original resource is on `vteximg`, not `vtexcommercestable`, which leads us to the redirect response (301). The request then follows the inverse path and returns the 301 response saying that the request is not on the `vtexcommercestable` but on the `vteximg`.


##

## Simulation


Try to call the `vteximg` endpoint on an ExternalClient.


##

## Workaround


N/A





