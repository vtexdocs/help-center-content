---
title: "New returned object in API Get Order  'itemMetadata'"
id: 473vn32oLLH2qyep29rpi
status: PUBLISHED
createdAt: 2019-04-08T16:33:34.076Z
updatedAt: 2019-12-31T15:13:21.597Z
publishedAt: 2019-12-31T15:13:21.597Z
contentType: updates
productTeam: Post-purchase
author: 5V92cmF9jG8KG600EwUgEg
slug: New-returned-object-in-API-Get-Order-itemMetadata
locale: en
legacySlug: New-returned-object-in-API-Get-Order-itemMetadata
announcementImageID: ''
announcementSynopsisEN: 'As of May 1, 2019, the request JSON will return a new object called itemMetadata.'
---

As of May 10, 2019, the request JSON will return a new object called itemMetadata.

This object will be responsible for delivering the assembly options variables linked to a SKU. This scenario is now specific to stores that use the assembly options function. In the future it will house the information attached to a SKU.

Example of Json with assembly options:
``` 
"orderId": "922480366938-01",
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
    "itemMetadata": {
        "Items": [
            {
                "Id": "4",
                "Seller": "1",
                "Name": "CAFE ORGANICO",
                "SkuName": "CAFE ORGANICO",
                "ProductId": "2",
                "RefId": null,
                "Ean": "CAFE4",
                "ImageUrl": "http://partnerslatam.vteximg.com.br/arquivos/ids/155710-300-300/Juan-paquete-2.jpg?v=636567404918200000",
                "DetailUrl": "/cafe-organico/p",
                "AssemblyOptions": []
            }
        ]
    },
    "cancelReason": "The customer bought the wrong product size
  ```
## Main Advantages 
For the stores that have the function of assembly options can get them through the get order inside the object Itemmetadata, we can thus handle the organized data within that array.

## What you need to do
Reviewing integrations using the Get Order APIs is critical.
ERPs that flow as a parse of the data should review if the delivery of this new field will not cause inconveniences, but we emphasize that only the stores that use the Assembly Options received the data at the moment.

Those who are not prepared to receive the new answer need to be adjusted before April 30, 2019.
