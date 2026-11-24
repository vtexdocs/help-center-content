---
title: 'Creating a product for presale'
id: 4o6cUJ4gIg0MQWW8WfN34K
status: PUBLISHED
createdAt: 2021-09-08T16:32:39.818Z
updatedAt: 2026-10-08T15:00:00.000Z
publishedAt: 2025-11-06T15:35:57.132Z
firstPublishedAt: 2021-09-14T16:54:57.039Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: creating-a-product-for-presale
legacySlug: creating-a-product-for-presale
locale: en
subcategoryId: pwxWmUu7T222QyuGogs68
---

VTEX allows merchants to sell products through presales before they arrive in inventory. The presale mode allows customers to purchase products and pay in advance, and the delivery estimate is calculated based on when the products are expected to arrive in inventory.

In this article, we'll cover the following topics:

- [Creating a product for presale](#creating-a-product-for-presale)
- [Sorting products by release date](#sorting-products-by-release-date)
- [Validating the configuration](#validating-the-configuration)
- [Scheduling prices](#scheduling-prices)
- [Scheduling content](#scheduling-content)

> ℹ️ What activates the presale is the **Presale date** field, configured in the SKU. The **Release date** field, configured at the product level, doesn't affect presale or the product's visibility on the storefront, which is determined by the **Display on website** field.

## Creating a product for presale

To make a product available for presale, follow the steps below:

1. In the VTEX Admin, go to **Catalog > Products and SKUs**, or type **Products and SKUs** in the search bar at the top of the page.
2. Click `+ Add product`.
3. (Optional) In the **Storefront** section, in the **Release date** field, select the date you'll launch the product.

> ℹ️ This field doesn't activate presale or change the delivery time frame. It's used to sort the site's search results, as explained in [Sorting products by release date](#sorting-products-by-release-date). The value of this field is also considered when creating [automatic collections](/en/docs/tutorials/creating-collections-beta) and in the product's [indexing](/en/docs/tutorials/understanding-how-indexation-works) date.

4. Complete the other fields to create the product. Learn more in [Adding or editing products](/en/docs/tutorials/adding-or-editing-products).
5. Click `Save`.
6. Click the `SKUs` tab.
7. Click the `+` sign **> Add new SKU**.
8. In the **Commercial strategy** section, use the **Presale date** field to select the date the item is expected to arrive at the warehouse and become available for shipping. The SKU can be sold before this date, and shipping is calculated from it.

> ℹ️ The estimated delivery date shown to the customer is calculated by adding the shipping SLA to the presale date: `estimated delivery date = presale date + shipping SLA`. Learn more in [How shipping calculation works](/en/docs/tutorials/how-shipping-calculation-works).

9. Complete the other fields for creating the SKU. Learn more in [Adding or editing SKUs](/en/docs/tutorials/adding-or-editing-skus).
10. Click `Save`.
11. Add the available quantity of the SKU in inventory. Learn more in [Updating the quantity of items in inventory](/en/docs/tutorials/updating-the-quantity-of-items-in-inventory).

> ⚠️ The **Presale date** doesn't make the item available on its own. The customer can only purchase the SKU in presale if it has an available quantity in inventory.

> ℹ️ An order containing a presale item should only be invoiced on or after the presale date, which is when the item becomes available for shipping.

## Sorting products by release date

The **Release date** allows you to sort products by release date, from newest to oldest, on product listing pages. To do this, add the query string corresponding to the store [frontend](/en/docs/tracks/frontend) technology and search engine to the end of the page URL:

| Frontend                                                                              | Search engine                                                                                                                                                               | Query string                    |
| :------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------ |
| [Store Framework (VTEX IO)](/en/docs/tracks/frontend#store-framework) | [VTEX Intelligent Search](/en/docs/tutorials/intelligent-search-overview)                                                                                                   | `?order=OrderByReleaseDateDESC` |
| [FastStore](/en/docs/tracks/frontend#faststore)                                       | [VTEX Intelligent Search](/en/docs/tutorials/intelligent-search-overview)                                                                                                   | `?sort=release_desc`            |
| [CMS Portal (Legacy)](/en/docs/tracks/frontend#cms-portal-legacy)  | [VTEX Intelligent Search](/en/docs/tutorials/intelligent-search-overview) or [VTEX Search (Legacy)](/en/docs/tutorials/how-does-vtex-search-legacy-work) | `?O=OrderByReleaseDateDESC`     |

Store Framework example: `https://www.{storeName}.com/{department}/{category}?order=OrderByReleaseDateDESC`.

When the query string isn't applied, the sort order depends on the search engine:

- **[VTEX Intelligent Search](/en/docs/tutorials/intelligent-search-overview):** Results are ranked by relevance, with release date as a configurable criterion whose weight decreases over 90 days. Learn more in [Relevance rules](/en/docs/tutorials/relevance-rules).
- **[VTEX Search (Legacy)](/en/docs/tutorials/how-does-vtex-search-legacy-work):** Results are ranked based on the score calculated by the indexer for the search term.

## Validating the configuration

To confirm that the SKU's delivery time frame is being calculated from the presale date without placing a real order, simulate a purchase using one of the methods below:

- **On the storefront:** Add the SKU to the cart, proceed to checkout, and enter a shipping postal code. Check that the delivery time frame displayed is calculated from the presale date. You don't need to complete the purchase.
- **Via API:** Send a request to the [Cart simulation](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForms/simulation) endpoint of the Checkout API with the desired SKU and postal code. Check the delivery time frame returned in the `logisticsInfo` object of the response.

> ⚠️ The [Shipping Simulator](/en/docs/tutorials/shipping-simulation) in the VTEX Admin doesn't consider the **Presale date** in the total delivery time frame. Use one of the options above to validate the configuration.

## Scheduling prices

To schedule your store's fixed prices for a product's presale, follow the steps described in [Scheduling prices](/en/docs/tutorials/scheduling-prices).

## Scheduling content

To boost presale success and reach more customers, it's important to maximize product promotion ahead of the release. To do this, it's worth scheduling content about the release, as explained in the article [Scheduling for special events](/en/docs/tutorials/scheduling-features-for-special-events#scheduling-content).
