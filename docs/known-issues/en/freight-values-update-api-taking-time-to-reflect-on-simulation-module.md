---
title: 'Freight Values Update API taking time to reflect on simulation module'
id: 7Gclw70xDYX34fOah2aWAa
status: PUBLISHED
createdAt: 2022-07-26T17:47:10.996Z
updatedAt: 2023-01-03T20:23:50.817Z
publishedAt: 2023-01-03T20:23:50.817Z
firstPublishedAt: 2022-07-26T17:47:11.865Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: freight-values-update-api-taking-time-to-reflect-on-simulation-module
kiStatus: Backlog
internalReference: 621230
---

## Summary


Freight value updates are taking more than 1 day to reflect on the shipping simulation when the update was requested using the API POST method. This issue is intermittent, usually the update takes only few minutes.



## Simulation


Use the API to update the freight values, then you will see the update on the Logistics module, which you can confirm this using the GET Freight values API endpoint or by downloading the freight values spreadsheet. However, this update might not be accurately reflected on the shipping simulation, and you will see old values as possibilities on simulation.

Steps:

1 - Updating the freight values => API POST /api/logistics/pvt/configuration/freights/values/update

2- Checking the update modification on => API GET /api/logistics/pvt/configuration/freights/0/values (or you can see this update as well by downloading the freight values spreadsheet)

3 - Using shipping simulation on the Admin or the cart simulation API will shows the old values, not the correct ones executed on step 1 and 2.



## Workaround


The workaround for this case is to download the spreadsheet and upload the same spreadsheet for the Shipping Policy.

