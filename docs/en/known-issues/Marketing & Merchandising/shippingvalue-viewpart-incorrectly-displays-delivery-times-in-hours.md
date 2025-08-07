---
title: "“shippingValue” ViewPart incorrectly displays delivery times in hours"
id: 5hvl9eGxPLZAuNcFAFc9Vb
status: PUBLISHED
createdAt: 2019-09-09T20:07:14.796Z
updatedAt: 2024-12-26T19:37:53.602Z
publishedAt: 2024-12-26T19:37:53.602Z
firstPublishedAt: 2019-09-09T20:16:10.874Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: shippingvalue-viewpart-incorrectly-displays-delivery-times-in-hours
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The `<vtex.cmc:shippingValue/>` ViewPart, which can be used on the product page to calculate the shipping value and delivery times, incorrectly displays the hours and minutes of such deadlines. 

For example: a carrier called "Express", having a delivery time of up to 4 hours, will display the following text:

`Express Shipping, delivery to ZIP code XX in up to 4 days.` 

## Simulation


- Access any product page that uses this ViewPart.
- Have a product whose delivery time is calculated in minutes or hours
- Calculate the delivery time using this component
- Check the result

## Workaround

__This component must be considered obsolete.__

At present, we recommend manually calculating shipping and delivery using [Checkout's cart simulation API](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForms/simulation) or the endpoint [Calculate SLA](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping/calculate).

