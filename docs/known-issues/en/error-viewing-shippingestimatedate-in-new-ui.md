---
title: Error viewing shippingEstimateDate in New UI
id: 7K9hFPStESW2urw4yzkY6t
status: PUBLISHED
createdAt: 2022-09-21T12:37:43.379Z
updatedAt: 2022-11-25T23:17:49.772Z
publishedAt: 2022-11-25T23:17:49.772Z
firstPublishedAt: 2022-09-21T12:37:44.030Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: error-viewing-shippingestimatedate-in-new-ui
kiStatus: Backlog
internalReference: 661040
---

## Summary



When placing an order with more than one product/SKU with different delivery dates, New_UI takes the (shippingEstimateDate) information from ItemIndex=0, which is in the GET Orders API at "ShippingData">"LogisticsInfo">"ItemIndex", instead of getting the information (shippingEstimateDate) from the ItemIndex with the longest time.




## Simulation



1- Place an order by inserting products/SKUs with different delivery dates (shippingEstimateDate);

2- you will notice that in the New_UI the (shippingEstimateDate) of the ItemIndex=0 is displayed and not of the ItemIndex with the highest (shippingEstimateDate) shown in the Get Orders API.




## Workaround



As a workaround, it is possible to use Old_UI.

