---
title: 'Nuevo objeto devuelto a API Get Order "cancelReason"'
id: 1NeR0RsaoUPZYW4dsrgS9S
status: PUBLISHED
createdAt: 2019-04-10T14:15:51.553Z
updatedAt: 2020-09-16T13:49:49.376Z
publishedAt: 2020-09-16T13:49:49.376Z
contentType: updates
productTeam: Post-purchase
author: 5V92cmF9jG8KG600EwUgEg
slugEN: 2019-04-10-new-object-returned-to-api-get-order-cancelreason
locale: es
legacySlug: nuevo-objeto-devuelto-a-api-get-order-cancelreason
announcementImageID: 'undefined'
announcementSynopsisES: 'El JSON de pedidos regresará un nuevo objeto llamado cancelReason.'
---

A partir del 10 de mayo de 2019, el JSON de pedidos devolverá un nuevo objeto llamado cancelReason.

Este objeto devuelve el motivo rellenado por el usuario para la cancelación de un pedido.

Ejemplo del JSON con cancel Reason:
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

El valor del campo es la información rellenada en el momento de la cancelación del pedido.

## Principales ventajas
El nuevo campo permite que el sistema de ERP consuma la información que fue insertada como justificación para la cancelación del pedido. Estará disponible en el informe entregado por la Gestión de Pedidos en breve.

## Lo que tienes que hacer 
Es fundamental revisar las integraciones que usan las API de Get Order, como las de ERP, por ejemplo. Aquellas que no estén preparadas para recibir la nueva respuesta deben ajustarse antes del 30 de abril de 2019.

Para probar usted puede utilizar la ruta en beta:
https://{{accountName}}.vtexcommercebeta.com.br/api/oms/pvt/orders/{{orderId}}
