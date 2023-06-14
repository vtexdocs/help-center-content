---
title: 'Master Data’s scroll endpoint sometimes returns a 408 error'
id: 4d05lBhLsBSgDknxAWaL1A
status: PUBLISHED
createdAt: 2019-06-12T18:05:38.623Z
updatedAt: 2022-12-22T20:45:34.707Z
publishedAt: 2022-12-22T20:45:34.707Z
firstPublishedAt: 2019-06-12T18:36:51.846Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: master-datas-scroll-endpoint-sometimes-returns-a-408-error
kiStatus: Backlog
internalReference: 
---

## Summary

In some cases, when requesting large amounts of data through our scroll endpoint, Master Data will timeout. Executing the first call once more will result in success.

## Simulation

http://api.vtex.com/{{accountName}}/dataentities/{{acronym}}/scroll?isCluster=true&_size=250&_fields=email,firstName

Receive a timeout


## Workaround

Timeouts can be mitigated by reducing the first request’s size. This can be done by adjusting the value, in this case from 1000 to 20:

### Before 
http://api.vtex.com/{{accountName}}/dataentities/{{acronym}}/scroll?isCluster=true&_size=1000&_fields=email,firstName

### After 
http://api.vtex.com/{{accountName}}/dataentities/{{acronym}}/scroll?isCluster=true&_size=250&_fields=email,firstName


