---
title: 'OrderForm'
id: 6ABsW2FfpY6u00IOUA4A4S
status: DRAFT
createdAt: 2018-03-06T14:03:12.878Z
updatedAt: 2020-09-08T18:04:54.011Z
publishedAt: 
firstPublishedAt: 
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: authors_24
slugEN: untitled-entry-2018-03-06-at-02-03-12
locale: pt
legacySlug: orderform
---

O orderForm é o principal objeto processado pelo checkout da VTEX, e um dos objetos mais importantes em toda a arquitetura de qualquer loja.

Nele ficam registradas diversas informações contextuais sobre o pedido, necessárias ao fechamento de compra: items do pedido, dados pessoais do cliente, endereço de entrega, informações de frete etc.

Por meio das APIs da VTEX, essas informações podem ser acessadas, manipuladas e às vezes alteradas.

A API do Checkout é uma das que mais interagem com o orderForm. De fato, quase todas as operações na API do Checkout retornam o orderForm ou parte dele.

A estrutura básica do orderForm é esta:

```json
{
  "allowManualPrice": false,
  "canEditData": true,
  "checkedInPickupPointId": ????????????,
  "clientPreferencesData": {},
  "clientProfileData": {},
  "commercialConditionData": {},
  "customData": {},
  "giftRegistryData": {},
  "hooksData": {},
  "ignoreProfileData": false,
  "invoiceData": ??????????????,
  "isCheckedIn": false,
  "itemMetadata": {},
  "items": {},
  "itemsOrdination": {},
  "loggedIn": false,
  "marketingData": {},
  "messages": [],
  "openTextField": {},
  "orderFormId": "426effeba9210",
  "paymentData": {},
  "products": {},
  "ratesAndBenefitsData": {},
  "salesChannel": "1",
  "selectableGifts": {},
  "sellers": {},
  "shippingData": {},
  "storeId": {},
  "storePreferencesData": {},
  "subscriptionData": ??????????????,
  "totalizers": {},
  "userProfileId": null,
  "userType": null,
  "value": 10390
}
```

Essa estrutura é constituída de várias __seções__.

> ℹ️ A maioria das chamadas à API do Checkout pede o parâmetro `expectedOrderFormSection`, que indica exatamente quais seções devem ser retornadas pela API.

No menu abaixo você encontra os links para cada uma dessas seções.

> ℹ️ Propriedades que representam valores monetários têm seus valores expressos em **centavos**. Por exemplo, `10390` significa **R$103,90** em lojas brasileiras.

> ℹ️ Seções que não foram solicitadas à API do Checkout são retornadas com valor `null`.

## Seções do OrderForm

- clientPreferencesData
- clientProfileData
- commercialConditionData
- customData
- giftRegistryData
- hooksData
- items
- invoiceData
- itemsOrdination
- marketingData
- messages
- openTextField
- paymentData
- products
- ratesAndBenefitsData
- selectableGifts
- sellers
- shippingData
- storeId
- storePreferencesData
- subscriptionData
- totalizers

### clientPreferencesData

Object containing preferences from the client who placed the order.

__Example:__
```json
{
  "locale": "pt-BR",
  "optinNewsLetter": true
}
```

| Field     | Type     | Description     |
| ---------- | ---------- | ---------- |
| locale       | string       | Client's locale. Examples: "pt-BR" and "en-US". The method `sendLocale()`, from vtex.js, changes the value of this field.       |
| optinNewsLetter       | boolean       | `true` if the client opted to receive newsletters from the store.       |

### clientProfileData

Object containing the data of the customer who placed the order.

If the customer has not yet informed her or his e-mail, much of the data may be empty (`null`).

If the customer's e-mail has not yet been confirmed, several personal data will be censored, that is, some of its parts will be hidden by asterisks to avoid identification.

__Example:__
```json
{
  "email": "customer@mailprovider.com",
  "firstName": "Bre******",
  "lastName": "Bar******",
  "document": "*1*2*5*5*3*",
  "documentType": "cpf",
  "phone": "******0879",
  "corporateName": null,
  "tradeName": null,
  "corporateDocument": null,
  "stateInscription": null,
  "corporatePhone": null,
  "isCorporate": false
}
```

| Field      | Type      | Description |
| ---------- | ---------- | ---------- |
|      email      |            |  Customer's email      |
|   firstName         |            |  Customer's first name     |
|    lastName        |            |   Customer's last name      |
|   document         |            |  Document number informed by the customer          |
|   documentType         |            |  Type of the document informed by the customer          |
|   phone         |            |   Customer's phone number    |
|    corporateName        |            |            |
|  tradeName          |            |            |
|  corporateDocument          |            |            |
|   stateInscription         |            |            |
|   corporatePhone         |            |            |
|   isCorporate         |            |            |

### commercialConditionData

### customData

Durante o processo de checkout, algumas lojas têm a necessidade de solicitar ao cliente dados que não fazem parte do conjunto padrão de objetos do orderForm. Por exemplo: gênero, número de celular, idade etc.

Para isso, você pode criar campos extras no orderForm. Estes campos ficam no objeto `customData`.

__Exemplo:__
```json
"customData": {
	"attachmentId": "customData",
	"customApps": [
		{
			"fields": {
				"number": "78550693",
				"street": "Rua Voluntários da Pátria",
				"complement": "Em frente à Torre Citi",
				"name": "101 - Delco Autopista,
				"neighborhood": "Botafogo",
				"city": "Rio de Janeiro",
				"state": "RJ"
			},
			"id": "pickupinfo",
			"major": 1
		},
		{
			"fields": {
				"deliveryEstimate": "30"
			},
			"id": "deliveryinfo",
			"major": 1
		}
	]
}
```

- __customApps:__ array que contém os apps criados pela loja.
- __fields:__ objeto que contém os campos criados pela loja para cada app.
- __id:__ ID do app.
- __major:__ 

### giftRegistryData

### hooksData

### items

É um array que contém um objeto para cada item do carrinho.

__Exemplo:__
```json
[
  {
    "id": "3106957",
    "productId": "2214",
    "name": "Mochila para material de natação Swimm II",
    "skuName": "Mochila para material de natação Swimm II - vermelha",
    "tax": 0,
    "price": 10490,
    "listPrice": 10490,
    "manualPrice": null,
    "priceValidUntil": "2019-03-06T12:53:40Z",
    "modalType": null,
    "sellingPrice": 10490,
    "isGift": false,
    "attachments": [],
    "attachmentOfferings": [],
    "additionalInfo": {
      "brandName": "Royal Canin Cães",
      "brandId": "37",
      "offeringInfo": null
    },
    "preSaleDate": null,
    "productCategories": {
      "343": "Natação",
      "515": "Mochilas"
    },
    "productCategoryIds": "/343/515/",
    "defaultPicker": null,
    "handlerSequence": 0,
    "handling": false,
    "quantity": 2,
    "refId": "193",
    "rewardValue": 0,
    "seller": "1",
    "sellerChain": [
      "0": "1"
    ]
    "itemAttachment": {
      "content": {},
      "name": null
    },
    "imageUrl": "/arquivos/ids/188329-71-71/racao-club-performance-junior.jpg",
    "detailUrl": "/racao-royal-canin-club-performance-junior/p",
    "components": [],
    "ean": null,
    "bundleItems": [],
    "offerings": [{
      "id": "1033",
      "name": "A Oferta Magnifica",
      "price": 100,
      "type": "idk"
    }],
    "priceTags": [],
    "availability": "available",
    "measurementUnit": "un",
    "uniqueId": "58FFD07FEE47407EAD545F9A9A31E4A8",
    "unitMultiplier": 1
  }
]
```

### itemsOrdination

### marketingData

Objeto que contém informações de rastreio de cupons, promoções e UTMs externas e internas.

__Exemplo:__
```json
{
  "attachmentId": "marketingData",
  "coupon": null,
  "marketingTags": [],
  "utmCampaign": "christmas",
  "utmMedium": null,
  "utmSource": "fb",
  "utmiCampaign": "",
  "utmiPart": "",
  "utmipage": ""  
}
```

- __attachmentId__: 
- __coupon__: 
- __marketingTags__: 
- __utmCampaign__: valor do parâmetro `utm_campaign` da URL que levou ao pedido.
- __utmMedium__: valor do parâmetro `utm_medium` da URL que levou ao pedido.
- __utmSource__: valor do parâmetro `utm_source` da URL que levou ao pedido.
- __utmiCampaign__: valor da UTM interna `utmi_cp`.
- __utmiPart__: valor da UTM interna `utmi_pc`.
- __utmipage__: valor da UTM interna `utmi_p`.

### messages

Array que contém mensagens referentes à chamada feita à API.

__Exemplo:__
```json
[
  {
    "code": null,
    "status": "error",
    "text": "O vale compra de código AAAA-BBBB-CCCC-DDDD não foi encontrado no sistema"
  }
]
```

### openTextField

### paymentData

Objeto que contém as informações do pagamento feito pelo cliente para este pedido.

__Exemplo:__
```json
{
  "giftCards": [
    {
      "redemptionCode": "HYUO-TEZZ-QFFT-HTFR",
      "value": 500,
      "balance": 500,
      "name": null,
      "id": "-1390324156495k195pmab4rall3di",
      "inUse": true,
      "isSpecialCard": false
    }, {
      "redemptionCode": "MTHU-WNTD-VXJW-TIDC",
      "value": 0,
      "balance": 700000,
      "name": "loyalty-program",
      "id": "122",
      "inUse": false,
      "isSpecialCard": true
    }
  ],
  "giftCardMessages": [],
  "availableAccounts": [
    {
      "accountId": "71F2775D46BF44B1BF217F828F4E6131",
      "paymentSystem": "2",
      "paymentSystemName": "Visa",
      "cardNumber": "************1111",
      "availableAddresses": ["-1363804954758", "-1366200971560"]
    }
  ],
  "availableTokens": [],
  "installmentOptions": [
    {
      "paymentSystem": "2",
      "value": 16175,
      "installments": [
        {
          "count": 1,
          "hasInterestRate": false,
          "interestRate": 0,
          "value": 16175,
          "total": 16175
        }, {
          "count": 2,
          "hasInterestRate": false,
          "interestRate": 132,
          "value": 4178,
          "total": 16712
        }
      ]
    }
  ],
  "paymentSystems": [
    {
      "id": 2,
      "name": "Visa",
      "groupName": "creditCardPaymentGroup",
      "validator": {
        "regex": "^4",
        "mask": "9999 9999 9999 9999",
        "cardCodeRegex": "[^0-9]",
        "cardCodeMask": "999",
        "weights": [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
      },
      "stringId": null,
      "template": "creditCardPaymentGroup-template",
      "requiresDocument": false,
      "selected": false,
      "isCustom": false,
      "description": null
    }
  ],
  "payments": [
    {
      "accountId": null,
      "bin": null,
      "installments": 2,
      "paymentSystem": "12",
      "referenceValue": 16175,
      "value": 16175
    }
  ]
}
```

- __availableAccounts__: 
- __availableTokens__: 
- __giftCardMessages__: 
- __giftCards__: 
- __installmentOptions__: 
- __paymentSystems__: 
- __payments__: 

### products

### ratesAndBenefitsData

### selectableGifts

### sellers

Array que contém um objeto para cada seller do pedido.

__Exemplo:__

```json
[
  {
    "id": "1",
    "name": "meuamigopet",
    "logo": "http://portal.vtexcommerce.com.br/arquivos/logo.jpg"
  }
]
```

- __id:__ ID do seller.
- __name:__ Nome do seller.
- __logo:__ URL onde a logo do seller fica hospedada no sistema VTEX.

### shippingData

Objeto que contém as informações da entrega dos produtos do pedido.

```json
{
  "attachmentId": "shippingData",
  "address": {
    "addressType": "residential",
    "receiverName": "Gui***rme",
    "addressId": "-1368194386810",
    "postalCode": "******000",
    "city": "Rio ** *******",
    "state": "RJ",
    "country": "BRA",
    "street": "Rua *** *****nte",
    "number": "***",
    "neighborhood": "Bot*****",
    "complement": "*** ** *",
    "reference": null
  },
  "availableAddresses": [
    {
      "addressType": "residential",
      "receiverName": "Gui***rme",
      "addressId": "-1368194386810",
      "postalCode": "******000",
      "city": "Rio ** *******",
      "state": "RJ",
      "country": "BRA",
      "street": "Rua *** *****nte",
      "number": "***",
      "neighborhood": "Bot*****",
      "complement": "*** ** *",
      "reference": null
    }
  ],
  "logisticsInfo": [
    {
      "itemIndex": 0,
      "selectedSla": ".Transportadora",
      "slas": [
        {
          "id": ".Transportadora",
          "name": ".Transportadora",
          "deliveryIds": [
            {
              "courierId": "67",
              "warehouseId": "1_1",
              "dockId": "1_1_1",
              "courierName": "Transportadora",
              "quantity": 1
            }
          ],
          "shippingEstimate": "3d",
          "shippingEstimateDate": null,
          "lockTTL": null,
          "availableDeliveryWindows": [],
          "deliveryWindow": null,
          "price": 956,
          "tax": 0
        }, {
          "id": "Agendada",
          "name": "Agendada",
          "deliveryIds": [
            {
              "courierId": "FA02F72F-FEBD-41A0-AF70-83A77E8C77A0",
              "warehouseId": "1_1",
              "dockId": "1_1_1",
              "courierName": "Entrega agendada",
              "quantity": 1
            }
          ],
          "shippingEstimate": "90d",
          "shippingEstimateDate": null,
          "lockTTL": null,
          "availableDeliveryWindows": [
            {
              "startDateUtc": "2014-04-21T09:00:00+00:00",
              "endDateUtc": "2014-04-21T12:00:00+00:00",
              "price": 1000,
              "tax": 0
            }, {
              "startDateUtc": "2014-04-21T13:00:00+00:00",
              "endDateUtc": "2014-04-21T17:00:00+00:00",
              "price": 1000,
              "tax": 0
            }
          ],
          "deliveryWindow": null,
          "price": 1220,
          "tax": 0
        }
      ]
    }
  ],
  "selectedAddresses": []
}
```

- __attachmentId:__ 
- __address:__
- __availableAddresses:__ 
- __logisticsInfo:__ 
- __selectedAddresses:__ 

### storeId

### storePreferencesData

Objeto que contém preferências da loja, configuradas no License Manager.

__Exemplo:__

```json
{
  "countryCode": "BRA",
  "checkToSavePersonDataByDefault": true,
  "templateOptions": {
    "toggleCorporate": false
  },
  "timeZone": "E. South America Standard Time",
  "currencyCode": "BRL",
  "currencyLocale": 0,
  "currencySymbol": "R$",
  "currencyFormatInfo": {
    "currencyDecimalDigits": 2,
    "currencyDecimalSeparator": ",",
    "currencyGroupSeparator": ".",
    "currencyGroupSize": 3,
    "startsWithCurrencySymbol": true
  }
}
```

- __countryCode:__ 
- __checkToSavePersonDataByDefault:__ 
- __templateOptions:__ 
  - __toggleCorporate:__ 
- __timeZone:__ 
- __currencyCode:__ 
- __currencyLocale:__ 
- __currencySymbol:__ 
- __currencyFormatInfo:__ 
  - __currencyDecimalDigits:__ 
  - __currencyDecimalSeparator:__ 
  - __currencyGroupSeparator:__ 
  - __currencyGroupSize:__ 
  - __startsWithCurrencySymbol:__ 

### totalizers

Array de totalizadores.

__Exemplo:__
```json
[
  {
    "id": "Items"
    "name": "Total dos Itens"
    "value": 35620
  }, {
    "id": "Shipping"
    "name": "Total do Frete"
    "value": 399
  }
]
```
