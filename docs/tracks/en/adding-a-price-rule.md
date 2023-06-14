---
title: 'Adding a price rule'
id: 7fyZaYe1IGzL0qVC28tOBO
status: PUBLISHED
createdAt: 2019-07-04T13:53:15.461Z
updatedAt: 2023-03-29T18:50:59.023Z
publishedAt: 2023-03-29T18:50:59.023Z
firstPublishedAt: 2019-07-17T19:42:10.960Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: adding-a-price-rule
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: prices-101
---

There are two of adding a price rule:

- through the Admin
- by API REST

Follow the steps below to add a price rule to your store:

## Admin

1. In the VTEX Admin, go to *Prices > Price rules*, or type *Price rules* in the search bar at the top of the page.
2. Click on the green **New Rule** button.
3. In the first step, **What is the general data of this rule?**, select a trade policy from the *dropdown menu*.
4. In the second step, **What items will this rule apply to?**, choose whether the rule will apply to *all products* or *only to chosen categories and brands*. If you select the second option, you should also choose the **Categories** and/or desired **Brands**.
5. In the third step, **Apply rule to items within a markup range?**, switch the *toggle* to yes to make use of the markup range. Type in the markup's minimum percentage in the **From** field and its max percentage in the **up to** field to select items within this range.
6. In the next step, **Select timeframe to apply this rule in?**, switching the *toggle* to yes will allow you to use this criteria. Choose the **Start Date**, **Start Hour**, **End Date** and the **End Hour** to define the period in which this rule will be applied.
7. In the final step, **What will the price change for this rule be?**, set the price percentage *modifier*. The price rule will apply this modifier to the selected SKUs.
8. Click on **Save**
9. A *sidebar* to confirm the new rule will appear. Click on **Confirm**.

## API REST

<div class="alert alert-warning">
Authentications for Prices module's API REST calls should be done using AppKey and AppToken. For more info, read our article on <a href="https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication">how to generate an AppKey and AppToken to authenticate integrations</a>
</div>

To add a **price rule**, you need to send a __POST__ to the following endpoint:

`https://api.vtex.com/{{accountName}}/pricing/pipeline/catalog`

- The request object has the following properties:

| __Properties__ | __Types__ | __Description__ |
|------------------|-----------|-------------|
| tradePolicyId | string | ID of the price table in which the rule will be applied |
| rules | array | Price rule criteria |
| id | integer | Price rule ID. You can add more than one rule to the same price table.|
| context | object | Object containing the price rule properties |
| categories | object | Category to which to rule applies |
| brands | object | Brand to which the rule applies  |
| markupRange | object | Rules applied to items in a markup range |
| from | integer | Minimum markup range value |
| to | integer | Maximum markup range value |
| dateRange | object | Rule's date and time range |
| from | string | Start date and time |
| to | string | End date and time |
| percentualModifier | integer | Price variation for this rule |

- The response object has the following properties:

| __Properties__ | __Types__ | __Description__ |
|------------------|-----------|-------------|
| tradePolicyId | string | ID of the price table in which the rule will be applied |
| rules | array | Price rule's object array to be applied to the price table |
| id | integer | Price rule ID. You can add more than one rule to the same price table.|
| context | object | Object containing the price rule properties |
| categories | object | Category to which to rule applies |
| brands | object | Brand to which the rule applies  |
| markupRange | object | Rules applied to items in a markup range |
| from | integer | Minimum markup range value |
| to | integer | Maximum markup range value |
| dateRange | object | Rule's date and time range |
| from | string | Start date and time |
| to | string | End date and time |
| percentualModifier | integer | Price variation for this rule |

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
        "tradePolicyId": "1",
        "rules": [
            {
                "id": 0,
                "context": {
                    "categories": {
                        "8": "categoryName"
                    },
                    "brands": {
                        "2000003": "brandName"
                    },
                    "markupRange": {
                        "from": 20,
                        "to": 50
                    },
                    "dateRange": {
                        "from": "2019-07-09T15:00:00.000Z",
                        "to": "2019-07-12T15:00:00.000Z"
                    }
                },
                "percentualModifier": 10
            }
        ]
 }
```
*If the array is sent blank, previously added rules will be deleted*
