---
title: 'Adding a Price Variation Limiter'
id: 6IVgeLPeggIv2mkbFVO6y3
status: PUBLISHED
createdAt: 2019-07-04T13:54:30.939Z
updatedAt: 2024-08-26T18:38:52.888Z
publishedAt: 2024-08-26T18:38:52.888Z
firstPublishedAt: 2019-07-17T19:48:12.477Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: cadastrar-trava-de-preco
locale: en
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: prices-101
---

There are two of adding a price variation limiter:

- through Admin
- by API REST

Follow the steps below to add a price variation limiter:

## Admin

1. In VTEX Admin, go to **Store Settings > Products > Price Settings**, or type **Price Settings** in the search bar at the top of the page.
2. Click on **Use price variation limit**.
3. Enter the desired percentage for **Maximum Decrease** and **Maximum Increase**.
4. Click **Save**.

## API REST

<div class="alert alert-warning">
Authentications for Prices module's API REST calls should be done using AppKey and AppToken. For more info, read our article on <a href="https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication">how to generate an AppKey and AppToken to authenticate integrations</a>
</div>

To add a **price variation limiter**, you need to send a __POST__ to the following endpoint:

`https://api.vtex.com/{{account}}/pricing/config`

- The request object has the following properties:

| __Properties__ | __Types__ | __Description__ |
|------------------|-----------|-------------|
| priceVariation | object | Price variation |
| upperLimit | integer | Upper limit |
| lowerLimit | integer | Lower limit |

- Below, we have an example of a Header and Body to be used in the request

### Headers 

| Header| Value |
|------------------|-----------|
| Accept | application/vnd.vtex.pricing.v3+json |
| Content-Type | application/json |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body 

```json
{
	"priceVariation": {
        "upperLimit": 50,
        "lowerLimit": 20
    }
}
```
