---
title: 'Creating a product for presale'
id: 4o6cUJ4gIg0MQWW8WfN34K
status: PUBLISHED
createdAt: 2021-09-08T16:32:39.818Z
updatedAt: 2025-11-06T15:35:57.132Z
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

On the VTEX platform, merchants can set up the release date of a product and offer it in presale mode. The presale allows clients to reserve these products upon payment prior to the actual product launch date and market availability.

In this article we will cover the following topics:

- [Creating a product for presale](#creating-a-product-for-presale)
- [Scheduling prices](#scheduling-prices)
- [Scheduling content](#scheduling-content)

> ⚠️ Configuring the **Release date** field for a product doesn't impact the product display on the storefront, which is determined by the activation or deactivation of the **Display on website** field.

## Creating a product for presale

To make a product available on presale, follow the steps below:

1. In the VTEX Admin, go to **Catalog > Products and SKUs**, or type **Products and SKUs** in the search bar at the top of the page.
2. Click `+ Add Product`.
3. In the **Storefront** section, in the **Release date** field, select the desired release date for the product.

  > ℹ️ This field helps sort search results on the website. You can use the query string `O=OrderByReleaseDateDESC` to retrieve this value and display products in order of release date. In addition, the value of this field influences the creation of [automatic collections](/en/docs/tutorials/creating-collections-beta) and determines the product [indexing](/en/docs/tutorials/understanding-how-indexation-works) date.

4. Fill in the other fields required to create the product. Know more in [Adding or editing products](/en/docs/tutorials/adding-or-editing-products).
5. Click `Save`.
6. Click the `SKUs` tab.
7. Click `+` **> Add new SKU**.
8. In the **Commercial strategy** section, in the **Presale date** field, select the desired date for the presale, indicating when the item is expected to arrive in stores and be available for sale.

  > ℹ️ For this configuration, you need to consider both the item release date and the estimated delivery time: `final delivery time = delivery SLA + supply batch delivery time frame`.

9. Fill in the fields required to create the SKU. Know more in [Adding or editing SKUs](/en/docs/tutorials/adding-or-editing-skus).
10. Click `Save`.

> ⚠️ Presale items must only be invoiced on or after the launch date, when the product becomes available in inventory.

## Scheduling prices

To schedule your store's fixed prices for the presale of a product, follow the steps described in [Scheduling prices](/en/docs/tutorials/scheduling-prices).  

## Scheduling content

To increase success in the pre-sales stage and achieve greater customer reach, it is important to enhance the promotion of the product that will be launched. For this purpose, it’s worth to schedule content about the release date, as explained in the article [Scheduling features for special events](/en/tutorial/scheduling-features-for-special-events--2nd50tPWdKK4waXRZLg0JI#scheduling-content).
