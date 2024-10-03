---
title: "Nuevo objeto devuelto en API Get Order  'itemMetadata'"
id: 473vn32oLLH2qyep29rpi
status: PUBLISHED
createdAt: 2019-04-08T16:33:34.076Z
updatedAt: 2019-12-31T15:13:21.597Z
publishedAt: 2019-12-31T15:13:21.597Z
contentType: updates
productTeam: Post-purchase
author: 5V92cmF9jG8KG600EwUgEg
slugEN: 2019-04-08-New-returned-object-in-API-Get-Order-itemMetadata
locale: es
legacySlug: Nuevo-objeto-devuelto-en-API-Get-Order-itemMetadata
announcementImageID: ''
announcementSynopsisES: 'A partir del 1 de mayo de 2019, el JSON de pedidos devolverá un nuevo objeto llamado itemMetadata.'
---

A partir del 10 de mayo de 2019, el JSON de pedidos devolverá un nuevo objeto llamado itemMetadata.

Este objeto será responsable de la entrega de las variables de assembly options vinculadas a un SKU, este escenario hoy es específico para las tiendas que utilizan la función de assembly options, en el futuro él abrigará la información anexa a un SKU.

Ejemplo del Json con assembly options:
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
## Principales ventajas
Para las tiendas que tienen la función de assembly options pueden obtenerlas por medio del get order dentro del objeto Itemmetadata, podemos así manejar el dato organizado dentro de esa array.

## Lo que tienes que hacer 
Es fundamental revisar las integraciones que usan las API de Get Order.
ERPs que tienen como flujo un parse del dato deben revisar si la entrega de ese nuevo campo no causará inconvenientes, pero resaltamos que sólo las tiendas que utilizan el Assembly Options recibieron el dado en este momento.

Aquellas que no estén preparadas para recibir la nueva respuesta deben ajustarse antes del 30 de abril de 2019.
