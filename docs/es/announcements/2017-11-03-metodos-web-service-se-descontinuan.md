---
title: 'Métodos Web Service se descontinúan a partir del 28 de febrero - a excepción del Catálogo'
id: 50CJTiHkFGoCO44MK4AyaI
status: PUBLISHED
createdAt: 2017-11-03T12:40:06.282Z
updatedAt: 2019-12-31T15:13:51.717Z
publishedAt: 2019-12-31T15:13:51.717Z
contentType: updates
productTeam: Others
author: 245tA425AIeioKAk2eaiwS
slugEN: 2017-11-03-web-service-methods-will-be-deprecated
locale: es
legacySlug: metodos-web-service-se-descontinuan
announcementImageID: ''
announcementSynopsisES: 'A partir del 28/02/18, el uso de Web Service se descontinuará para integraciones VTEX, excepto los métodos del Catálogo.'
---

A partir del día __28 de febrero__, vamos a descontinuar el uso de Web Service para integraciones con VTEX, __a excepción de los métodos del Catálogo__.

>⚠️ El Web Service continuará funcionando para el Catálogo, mientras trabajamos en el desarrollo de las API REST de este servicio. Se le informará una vez que se haya establecido un calendario de migración.

Si su tienda todavía usa alguno de estos métodos, sustitúyalos por integraciones a través de API. En caso contrario, a partir del 28 de febrero estas integraciones dejarán de funcionar.

VTEX tiene APIs que atienden a todos los escenarios actualmente cubiertos por métodos Web Service, que se trata de una tecnología antigua, para la que cada vez hay menos soporte.

A continuación se muestra la lista de métodos de Web Service que se van a interrumpir:

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
