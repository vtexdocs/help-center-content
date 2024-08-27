---
title: 'VTEX Ad Network (Beta)'
id: 2cgqXcBuJmXN2livQvClur
status: CHANGED
createdAt: 2024-04-23T17:38:07.378Z
updatedAt: 2024-07-05T13:14:45.135Z
publishedAt: 2024-07-05T13:13:03.955Z
firstPublishedAt: 2024-04-23T19:11:42.313Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: vtex-ad-network-beta
locale: en
legacySlug: vtex-ad-network-beta
subcategory: 2AksvvAtAsbAfE7HsBIVDU
---

>ℹ️ VTEX Ad Network is in beta, which means that we are working to improve it. If you are already a VTEX customer and wish to adopt this functionality for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). If you are not yet a customer but are interested in this solution, please fill out the [contact form](https://vtex.com/us-en/contact/).

**VTEX Ad Network** connects VTEX stores with brands interested in advertising their products. This connection allows advertisers and merchants to boost their business:

- **Advertisers:** Brands that can create ad campaigns to promote products in VTEX stores offering the same products in their catalogs, thus increasing sales.
- **Merchants:** Can offer ad space in their stores for advertisers to promote products. In return, these merchants will receive a fee for each click on an ad in their stores.

## Campaigns

A **VTEX Ad Network** campaign is based on the following characteristics:

- Promoted products.
- Total budget.
- Bid, which is the cost per click (CPC) — the amount the advertiser is willing to pay for each click on the ad. This amount also determines the [priority of different ads](#ad-priority) for the same ad space and is defined per product.
- Duration.
- Coverage, which determines whether the campaign will run in the Ad Network or specific stores.

When creating a campaign, the advertiser defines one or more EAN codes (barcodes) associated with the products they want to promote. VTEX can display these ads in all the stores that sell that product and have joined **VTEX Ad Network**, or advertisers can choose specific stores for their campaigns.

## Ad format

VTEX currently offers a single ad format: sponsored products. This means that products promoted by advertisers can be highlighted in some contexts where products are listed:

- Search results.
- Category pages.

Below, there's an example of how sponsored products are displayed:

![vtex_ad_network_sponsored_EN](https://images.ctfassets.net/alneenqid6w5/1PlUii3Hd3Tma9trnhqnLS/1abdea32c119ed4890e414ad7dbc8fea/vtex_ad_network_sponsored.png)

Stores participating in **VTEX Ad Network** will be able to [configure the amount of ad space](https://help.vtex.com/en/tutorial/advertising-with-vtex-ad-network-beta--5WoXcJzHc7EQElpPjziqse#creating-campaigns) available in each store context.

## Ad priority

Every time a customer browses a store with available ad space, **VTEX Ad Network** determines which ads will be displayed.

This prioritization process consists of three stages:

#### 1. Selection

- **VTEX Ad Network** considers customer behavior, such as search terms, categories, or window displays, and selects campaigns with products that fit this context. The platform even considers a minimum relevance score to ensure that only ads that might interest the customer are displayed.
- At this stage, VTEX also considers compatibility from the point of view of [campaign settings](#campaigns), such as coverage and negative keywords.

#### 2. Budget pacing

- At this stage, VTEX weighs up the budget for campaigns, excluding the ones with no available budget and optimizing expenditure based on the likelihood of clicks and conversions.

#### 3. Auction

- **VTEX Ad Network** determines the best-promoted products to fill the available spaces from the candidates selected in the previous stages.
- The platform classifies the ads based on their bid (CPC) and [quality score](#quality-score).
- There is also a random factor in the auction calculation to avoid biases. Therefore, the higher the CPC value x quality score, the more likely an ad will be ranked higher, but there is no guarantee that it will always be the case.

The bid amount is set once the ads displayed on the page have been defined. The winning bid will be the final amount of the second-highest bid plus $0.01 USD.

>⚠️ Ads may not be selected through the prioritization process if the promoted products do not fit the customer behavior, store coverage, or available budget.

### Quality score

The ad quality score is a measure that considers different evaluation criteria and influences the auction stage of the [Ad priority](#ad-priority) process. The higher the quality score, the more likely a particular ad will rank well in the auction.

### Priorization example

Consider the following ads from different campaigns competing in the same store.

| **Ad** | **Product** | **Quality Score** | **Bid** | **Budget** |
| :---: | :---: | :---: | :---: | :---: |
| 1 | Perfume A | 10% | $1.00 USD | $0 USD |
| 2 | Perfume B | 1% | $2.00 USD | $10 USD |
| 3 | Perfume C | 10% | $0.90 USD | $10 USD |
| 4 | Shampoo A | 5% | $0.50 USD | $10 USD |

If a store customer accesses the **Perfumes** category page with 300 products, the prioritization process would go as follows:

1. At the targeting stage, the platform discards ad 4, which doesn't fit the customer behavior.
2. After assessing the pacing, the platform discards ad 1, as it has no available budget.
3. In the auction, product 3 has a greater chance of being ranked first, considering its **bid** and **conversion rate**.

## Attribution window

**VTEX Ad Network's** attribution window is 15 days. If a customer clicks a product ad and buys that product within 15 days of clicking it, VTEX Ad Network attributes this sale to the ad.

However, if the customer buys after this period, the sale will not be allocated to the ad.

## How to join VTEX Ad Network

See below how you can join **VTEX Ad Network** as a [merchant](#merchants) that displays ads or an [advertiser](#advertisers).

### Merchants

>⚠️ Currently, only stores developed with [Store Framework](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework) can offer ad space.

To make ad space available in your store, you need to contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ) to request the installation of the __VTEX Ad Network app for merchants__ in your VTEX account.

Learn more about the functionalities for merchants in the [Displaying VTEX Ad Network ads in your store (Beta)](https://help.vtex.com/en/tutorial/exibindo-anuncios-do-vtex-ad-network-na-sua-loja-beta--6gWgZrMLcS5FDFFdl5LETA) article.

### Advertisers

Any brand interested in promoting products already sold in VTEX stores can advertise using **VTEX Ad Network**. To do this, you need to contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ) to request that the __VTEX Ad Network__ app be installed on your VTEX account.

Learn more about the features available to advertisers in the [Advertising with VTEX Ad Network (Beta)](https://help.vtex.com/en/tutorial/advertising-with-vtex-ad-network-beta--5WoXcJzHc7EQElpPjziqse) article.
