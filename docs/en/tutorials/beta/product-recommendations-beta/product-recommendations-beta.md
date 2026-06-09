---
title: 'Product Recommendations (beta)'
id: 2QIexbD2FSXBxELUnFtg7g
status: PUBLISHED
createdAt: 2025-06-27T20:37:59.368Z
updatedAt: 2025-07-04T13:01:10.919Z
publishedAt: 2025-07-04T13:01:10.919Z
firstPublishedAt: 2025-06-27T20:41:49.041Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: product-recommendations-beta
legacySlug: product-recommendations-beta
locale: en
subcategoryId: 6WyZwZfn89IsnNFNkTAi8d
---

> ℹ️ This feature is in closed beta and only available to selected clients. If you're a VTEX client and want to adopt this feature for your business, contact our [Commercial Support](/docs/tracks/commercial-support). Additional fees may apply. If you're not a VTEX client but are interested in this solution, complete the [contact form](https://vtex.com/en-us/contact-us).

The Product Recommendations feature allows your store to provide custom experiences to buyers by recommending items based on multiple strategies. In addition, you can display relevant or complementary products, boost conversion rates, and increase the average ticket of your business.

![produtos-similares-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/recomendacoes-de-produtos-beta_1.png)

## Prerequisites

To activate product recommendations, you must have a store implemented using [Store Framework](https://developers.vtex.com/docs/guides/store-framework), [FastStore](https://developers.vtex.com/docs/guides/faststore), or the [headless](https://developers.vtex.com/docs/guides/headless-commerce) model.

## Recommendation strategies

Below are the available recommendation strategies developed by the VTEX team:

| Name                                                          | Description                                                                                     | Requirements and how it works                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Most popular                                                  | Products with the highest number of views                                                       | -                                                                                                                                                                                                                                                                                                                                                                                |
| Recommended for you                                           | Custom recommendations based on user profile and behavior                                       | Minimum of 1,000 purchases with more than 1 item in the cart. The algorithm analyzes customer purchase patterns.                                                                                                                                                                                                                                 |
| Similar products                                              | Products similar to a specific one                                                              | Similarity is determined mainly by being in the same catalog category. If that isn't enough, the system may also consider product specifications. Quality depends on how well your catalog is organized. If you want to customize the similarity rules, contact [VTEX Support](/en/docs/tracks/suporte-na-vtex). |
| Frequently bought together (cross-selling) | Complementary products for a specific one that are commonly purchased together. | Minimum of 1,000 purchases with more than 1 item in the cart. Identifies complementary products based on how often they are purchased together.                                                                                                                                                                                                  |
| Best sellers                                                  | The store's best-selling products                                                               | -                                                                                                                                                                                                                                                                                                                                                                                |
| Recently viewed                                               | Products recently viewed by the user                                                            | -                                                                                                                                                                                                                                                                                                                                                                                |
| Recent interactions                                           | Products most likely to engage the user in the future                                           | -                                                                                                                                                                                                                                                                                                                                                                                |
| Visually similar products                                     | Products visually similar to a specific one                                                     | Uses image recognition technology to identify visually similar products by analyzing features such as color, shape, and patterns.                                                                                                                                                                                                                                |
| Manual collection                                             | Recommendations from a manually created collection                                              | -                                                                                                                                                                                                                                                                                                                                                                                |

## Implementation

To request activation of the Product Recommendations feature in your store, open a ticket with [Commercial Support](/pt/docs/tracks/suporte-comercial) and specify which strategies you want to activate. The VTEX team will review the request and get in contact with you.

### Store Framework

For stores implemented with Store Framework, use the [Recommendation Shelf](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf) component to display recommended product shelves across different store pages.

### Headless or FastStore

For headless or FastStore stores, see the documentation [Integrating product recommendations in headless or FastStore web stores](https://developers.vtex.com/docs/guides/integrating-product-recommendations-in-headless-or-faststore-web-stores).

### Mobile

For mobile applications, see the documentation [Integrating product recommendations in mobile stores](https://developers.vtex.com/docs/guides/integrating-product-recommendations-in-mobile-stores).