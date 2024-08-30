---
title: 'Adding Price Tables'
id: 2WQ3pVYfQpXkJnHr7VTFBv
status: PUBLISHED
createdAt: 2019-07-04T13:52:23.343Z
updatedAt: 2023-03-29T18:54:37.108Z
publishedAt: 2023-03-29T18:54:37.108Z
firstPublishedAt: 2019-07-17T19:40:54.612Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: cadastrar-tabelas-de-preco
locale: en
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: prices-101
---

There are two ways of adding a price table:

- through Admin
- by API REST

Follow the steps below to add a price table in your store:

## Admin

1. In the VTEX Admin, go to *Prices > Price list*, or type *Price list* in the search bar at the top of the page.
2. Click on the **Price Tables** button.
3. Select the **+ Create new price table** option. A *sidebar* will appear.
4. Type in the name of the price table you wish to create.
5. Click on **Create price table**.

## API REST

>⚠️ Authentications for Prices module's API REST calls should be done using AppKey and AppToken. For more info, read our article on [how to generate an AppKey and AppToken to authenticate integrations](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication)

To add a **price table**, you need to send a __PUT__ to the following endpoint:

`https://api.vtex.com/{{account}}/pricing/tables/{{priceTableName}}`

A new price table will be created when the `{{priceTableName}}` value is sent to the endpoint.

| __Properties__ | __Types__ | __Description__ |
|------------------|-----------|-------------|
| priceTableName | string | Price table's name |

- Below, we have an example of a Header to be used in the request

### Headers 

| Header| Value |
|------------------|-----------|
| Accept | application/vnd.vtex.pricing.v3+json |
| Content-Type | application/json |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |
