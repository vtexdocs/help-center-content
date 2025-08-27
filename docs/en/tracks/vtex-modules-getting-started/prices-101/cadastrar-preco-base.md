---
title: 'Adding a base price'
id: P99EjtrlRHk92Q8qDPq29
status: PUBLISHED
createdAt: 2019-07-04T13:52:47.694Z
updatedAt: 2024-11-27T11:36:41.541Z
publishedAt: 2024-11-27T11:36:41.541Z
firstPublishedAt: 2019-07-17T19:41:10.765Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: cadastrar-preco-base
locale: en
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: prices-101
order: 6
---

There are three ways to add a base price:

- through Admin
- [by using a spreadsheet](https://help.vtex.com/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D)
- through an API REST

Follow the steps below to add a base price to your SKUs:

## Admin

1. In the VTEX Admin, go to *Prices > Price list*, or type *Price list* in the search bar at the top of the page.
2. Each box contains a product with its respective SKUs. Click on the first column of the desired SKU's line. A *sidebar* will open.
3. Fill in the form fields:
- **Cost Price:** fill out the SKU cost value.
- **Initial Markup:** fill out with the profit margin that is to be obtained from the sale of that SKU.
4. Click on the *sidebar* itself to save the price.  
5. The **Base Price** will be calculated based on the given data.

You may also add a **List Price** linked to an SKU base price by following the steps below:

1. At the bottom of the same *sidebar* where you add the base price, click on the **+ Set list price**
2. Fill the out the **List Price** field with the desired SKU value
3. Click anywhere on the *sidebar* itself to save the list price

## API REST

> ⚠️ Authentications for the Prices module's API REST requests must be done using AppKey and AppToken. For more on this, read our article on [how to manage an AppKey and AppToken to authenticate your integrations.](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication)

To add a **base price** to an SKU, you'll have to send a __PUT__ request to the following endpoint:

`https://api.vtex.com/{{account}}/pricing/prices/{{itemId}}`

You can also add a **list price** that is linked to the SKU base price. However, this field is **not mandatory**.

- The request object has the following properties:

| __Properties__ | __Types__ | __Description__ |
|------------------|-----------|-------------|
| costPrice | integer | SKU Cost Price |
| markup| integer | SKU Markup |
| basePrice | integer | SKU Base Price |
| listPrice | integer | SKU List Price |

- The response object has the following properties:

| __Properties__ | __Types__ | __Description__ |
|------------------|-----------|-------------|
| itemId| string| SKU ID |
| costPrice | integer | SKU Cost Price |
| basePrice | integer | SKU Base Price |
| listPrice | integer | SKU List Price |
| markup | integer | SKU Markup |
| fixedPrices | array | Fixed Price  |
| tradePolicyId | integer | Trade policy ID |
| value | integer | Fixed Price value |
| listPrice | integer | List Price |
| minQuantity | integer | Minimum item quantity |
| dateRange | string | Fixed price date range |

- Below, we have a Header example and **three possible Body examples** to be sent in the request

### Headers 

| Header| Value |
|------------------|-----------|
| Accept | application/vnd.vtex.pricing.v3+json |
| Content-Type | application/json |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body - Example 1

```json
{
    "costPrice": null,
    "markup": 100,
    "basePrice": 300
}
```

`costPrice * (1 + markup%) = basePrice`

In this example, as `markup = 100` and `basePrice = 300`, the `costPrice` calculated by the system will be equal to `150`.

### Body - Example 2

```json
{
    "costPrice": 150,
    "markup": null,
    "basePrice": 300,
    "listPrice": 500
}
```

`costPrice * (1 + markup%) = basePrice`

In this example, as `costPrice = 150` and `basePrice = 300`, the `markup` calculated by the system will be equal to `100`. 

We have also included a List Price with a value of `500`.

### Body - Example 3

```json
{
    "costPrice": 150,
    "markup": 100,
    "basePrice": null,
}
```

`costPrice * (1 + markup%) = basePrice`

In this example, as `costPrice = 150` and `markup = 100`, the `basePrice` calculated by the system will be equal to `300`.

