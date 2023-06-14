---
title: 'Novo objeto retornado na API Get Order  "itemMetadata"'
id: 473vn32oLLH2qyep29rpi
status: PUBLISHED
createdAt: 2019-04-08T16:33:34.076Z
updatedAt: 2019-12-31T15:13:21.597Z
publishedAt: 2019-12-31T15:13:21.597Z
contentType: updates
productTeam: Post-purchase
author: 5V92cmF9jG8KG600EwUgEg
slug: novo-objeto-retornado-na-api-get-order-itemmetadata
legacySlug: novo-objeto-retornado-na-api-get-order-itemmetadata
announcementImageID: ''
announcementSynopsisPT: 'A partir de 01 de Maio de 2019, o JSON de pedidos retornará um novo objeto chamado itemMetadata.'
---

A partir de 10 de Maio de 2019, o JSON de pedidos retornará um novo objeto chamado itemMetadata.

Este objeto será responsável pela entrega das variáveis de assembly options vinculados a um SKU. Este cenário é específico para as lojas que utilizam a função de assembly options. Porém, no futuro, abrigará as informações anexas a um SKU.

Exemplo de Json com assembly options:
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
## Principais vantagens
As lojas que utilizam a função de assembly options poderão obtê-las por meio do get order, dentro do objeto Itemmetadata. Podemos, assim, manusear o dato organizado dentro desse array.

## O que você precisa fazer
É fundamental revisar as integrações que usam as APIs Get Order.
ERPs que tem como fluxo um parse do dado devem revisar se a entrega desse novo campo não causará inconvenientes. Ressaltamos que apenas as lojas que utilizem o Assembly Options receberam o dado neste momento. 

Aquelas que não estiverem preparadas para receber a nova resposta precisam ser ajustadas antes de 30 de Abril 2019.
