---
title: "vtex.events.addData adding pageUrl Parameter using http, not https"
id: GKPhSAhbbODMlXwmcm0qX
status: PUBLISHED
createdAt: 2022-12-13T15:32:13.749Z
updatedAt: 2022-12-13T15:32:14.821Z
publishedAt: 2022-12-13T15:32:14.821Z
firstPublishedAt: 2022-12-13T15:32:14.821Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: vtexeventsadddata-adding-pageurl-parameter-using-http-not-https
locale: en
kiStatus: Backlog
internalReference: 348128
---

## Summary


`vtex.events.addData` adding pageUrl Parameter using http, not https


##

## Simulation


- Check de source code of a Portal VTEX account
- The pageUrl will be using HTTP:

    <script>
      vtex.events.addData({"pageCategory":"Home","pageDepartment":null,"pageUrl":"**http**://account.myvtex.com/", ...})
    </script>​

##

## Workaround


There is no workaround

