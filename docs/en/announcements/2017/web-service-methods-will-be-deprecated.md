---
title: 'Web Service methods will be deprecated after February 28 - except for the Catalog'
id: 50CJTiHkFGoCO44MK4AyaI
status: PUBLISHED
createdAt: 2017-11-03T12:40:06.282Z
updatedAt: 2019-12-31T15:13:51.717Z
publishedAt: 2019-12-31T15:13:51.717Z
contentType: updates
productTeam: Others
author: 245tA425AIeioKAk2eaiwS
slugEN: web-service-methods-will-be-deprecated
locale: en
legacySlug: web-service-methods-will-be-deprecated
announcementImageID: ''
announcementSynopsisEN: 'As of February 28, the use of Web Service will be discontinued for VTEX integrations, except for the Catalog methods.'
---

As of __February 28__, we will discontinue the use of Web Service for integrations with VTEX, __except for the Catalog methods__.

> ⚠️ Web Service will continue to work for the Catalog, while we work on the development of this service's REST APIs. We will let you know as soon as a migration schedule is defined.

If your store still uses any of these methods, replace them with API integrations. Otherwise, as of February 28, these integrations will no longer work.

VTEX has APIs that address all scenarios currently covered by Web Service methods, which is an old technology, for which there is less and less support.

Below is a list of the Web Service methods that will be discontinued:

- `AddressByAddressClient`
- `AddressGetByClientIdV2`
- `AddressInsertUpdateV3`
- `ClientGet`
- `ClientGetAllFromCreatedDateAndId`
- `ClientGetByCPF`
- `ClientGetByEmailV3`
- `ClientGetByGuidV3`
- `ClientGetV3`
- `ClientInsertUpdateV3`
- `FreightCalculateV3`
- `FreightGetAll`
- `NewsletterGetAllByDate`
- `OrderChangeStatus`
- `OrderChangeTrackingNumber`
- `OrderChangeTrackingNumberV3`
- `OrderGet`
- `OrderGetByClientCpf`
- `OrderGetByStatus`
- `OrderGetByStatusByQuantity`
- `OrderGetNext50FromIdV3`
- `OrderGetV3`
- `OrderPaymentGetAll`
- `OrderStatusGetAll`
- `UpdateNotifyShipping`
- `WareHouseIStockableGetByStockKeepingUnit`
- `WareHouseIStockableGetByStockKeepingUnitV3`
- `WareHouseIStockableUpdate`
- `WareHouseIStockableUpdateV3`
- `ZipCodeGet`
