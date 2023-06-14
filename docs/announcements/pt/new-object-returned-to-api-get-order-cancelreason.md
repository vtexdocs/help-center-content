---
title: Novo objeto retornado na API Get Order "cancelReason"
id: 1NeR0RsaoUPZYW4dsrgS9S
status: PUBLISHED
createdAt: 2019-04-10T14:15:51.553Z
updatedAt: 2020-09-16T13:49:49.376Z
publishedAt: 2020-09-16T13:49:49.376Z
contentType: updates
productTeam: Post-purchase
author: 5V92cmF9jG8KG600EwUgEg
slug: novo-objeto-retornado-na-api-get-order-cancelreason
legacySlug: novo-objeto-retornado-na-api-get-order-cancelreason
announcementImageID: 
announcementSynopsisPT: O JSON de pedidos retornará um novo objeto chamado cancelReason.
---

A partir de 10 de Maio de 2019, o JSON de pedidos retornará um novo objeto chamado cancelReason. Este objeto devolverá o motivo preenchido pelo usuário para cancelamento de um pedido.

Exemplo de JSON com cancel Reason:
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

O valor do campo é a informação preenchida no momento do cancelamento do pedido.

## Principais vantagens
O novo campo permite  que o sistema de ERP consuma a informação que foi inserida como justificativa para o cancelamento de um pedido. Estará disponível no report entregue pelo Gerenciamento de Pedidos em breve.

## O que você precisa fazer
É fundamental revisar as integrações que usam as APIs Get Order, como as de ERP, por exemplo. Aquelas que não estiverem preparadas para receber a nova resposta precisam ser ajustadas antes de 30 de Abril 2019.

Para testar você pode utilizar a rota em beta: 
https://{{accountName}}.vtexcommercebeta.com.br/api/oms/pvt/orders/{{orderId}}
