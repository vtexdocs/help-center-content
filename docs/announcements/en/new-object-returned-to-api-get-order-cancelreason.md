---
title: 'New object returned to API Get Order "cancelReason"'
id: 1NeR0RsaoUPZYW4dsrgS9S
status: PUBLISHED
createdAt: 2019-04-10T14:15:51.553Z
updatedAt: 2020-09-16T13:49:49.376Z
publishedAt: 2020-09-16T13:49:49.376Z
contentType: updates
productTeam: Post-purchase
author: 5V92cmF9jG8KG600EwUgEg
slug: new-object-returned-to-api-get-order-cancelreason
locale: en
legacySlug: new-object-returned-to-api-get-order-cancelreason
announcementImageID: ''
announcementSynopsisEN: 'The JSON orders will return a new object called cancelReason.'
---

As of May 10, 2019, JSON orders will return a new object called cancelReason.
This object will return the reason filled by the user for the cancellation of an order. 

Example of JSON with "cancel Reason":
```  "orderId": "922480366938-01",
    "sequence": "500367",
    "marketplaceOrderId": "",
    "marketplaceServicesEndpoint": "http://oms.vtexinternal.com.br/api/oms?an=partnerslatam",
    "sellerOrderId": "00-922480366938-01",
    "origin": "Marketplace",
    "affiliateId": "",
    "salesChannel": "1",
    "merchantName": null,
    "status": "canceled",
    "statusDescription": "Cancelado",
    "value": 11000000,
    "creationDate": "2019-04-04T16:06:37.4898827+00:00",
    "lastChange": "2019-04-04T16:08:51.0329191+00:00",
    "orderGroup": "922480366938",
    "totals": [ ],
    "items": [ ],
    "marketplaceItems": [ ],
    "clientProfileData": { },
    "giftRegistryData": null,
    "marketingData": null,
    "ratesAndBenefitsData": { },
    "shippingData": { },
    "paymentData": { },
    "packageAttachment": { },
    "sellers": [ ],
    "callCenterOperatorData": null,
    "followUpEmail": "30715524e1464d1fb9d43a0e303fa332@ct.vtex.com.br",
    "lastMessage": null,
    "hostname": "partnerslatam",
    "invoiceData": null,
    "changesAttachment": null,
    "openTextField": null,
    "roundingError": 0,
    "orderFormId": "fd5936d662e94b9cafb63a1ff8d92dd3",
    "commercialConditionData": null,
    "isCompleted": true,
    "customData": null,
    "storePreferencesData": { },
    "allowCancellation": false,
    "allowEdition": false,
    "isCheckedIn": false,
    "marketplace": {},
    "authorizedDate": null,
    "invoicedDate": null,
    "itemMetadata": {},
    "cancelReason": "The customer bought the wrong product size"
```
* "cancelReason": "The customer bought the wrong product size"  

The field value corresponds to the information filled in at the moment of cancellation of the order.

## Main Advantages
The new field allows the ERP system to consume the information that was entered as justification for canceling an order. This field will soon be available in the report issued by the Order Management module.

## What you need to do
It is imperative to review the integrations that use the Get Order APIs, such as ERP, for example. Those who are not prepared to receive the new answer need to be adjusted before April 30th, 2019.

To test this, you can use the beta route:
https://{{accountName}}.vtexcommercebeta.com.br/api/oms/pvt/orders/{{orderId}}
