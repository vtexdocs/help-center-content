---
title: 'Status "ERRO DE PROCESSAMENTO" Shipping Policy'
id: 4g3SWNwDVJG5OeJVP05TOd
status: PUBLISHED
createdAt: 2022-05-18T15:12:15.503Z
updatedAt: 2022-11-25T21:59:53.193Z
publishedAt: 2022-11-25T21:59:53.193Z
firstPublishedAt: 2022-05-18T15:12:15.910Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: status-erro-de-processamento-shipping-policy
locale: en
kiStatus: Backlog
internalReference: 445793
---

## Summary


There is a scenario regarding status of Shipping Policy after create/update freight values API. The status still pending as "Error on processing" in case of creation whithout spreadsheet.



## Simulation


Step 1 - Create Shipping Policy without a spreadsheet. The status will be "Error on processing" but this is normal considering that no file was processed.

Step 2 - Execute the API - POST creating a range of Postal Code to that Shipping Policy. (/values/update)

Step 3 - At this moment is possible check that Postal Code match on Shipping Rates, check the Postal Code loaded using API and even more a download of the spreadsheet of that Shipping Policy. (Because the step 2 creates a spreadsheet).

Step 4 - Shipping Simulator works fine.

Even everything is working OK, the STATUS  of Shipping Policy is still in "Error on processing".

PS: Sometimes the Shipping Simulator can not work because after update freight values there is a line to update all system (like dynamo and elasticsearch).



## Workaround


The workaround is just process the spreadsheet. You can execute a download and upload without any changes and the status will change to active.

