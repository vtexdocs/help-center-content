---
title: 'Sending products to Google Shopping'
id: 5L5LnccDCj5lJk8H95GQ82
status: PUBLISHED
createdAt: 2021-04-15T14:10:45.645Z
updatedAt: 2026-11-04T17:45:00.000Z
publishedAt: 2025-09-08T17:53:08.339Z
firstPublishedAt: 2021-04-15T17:41:23.772Z
contentType: trackArticle
productTeam: Channels
slugEN: sending-products-to-google-shopping
locale: en
trackId: 25Sl7iOqq58PGfVfTAo8Xw
trackSlugEN: integrating-with-google-shopping
order: 7
---

In Google Shopping, only catalogs can be integrated with Google Shopping. Unlike other integrations, **you do not have to map products using a spreadsheet.**

## Product approval

Once your items are approved by Google, they will become active and will be immediately displayed as ads on Google Shopping.

A product may eventually report the Insertion error: `Ineligible SKU`. This means that the product was considered ineligible for integration. Products may be ineligible for the following reasons:  

- The product has no price.  
- The product has no image.  
- The product is out of stock, and it has been configured to be deleted in this scenario.  

**If a product is disapproved, you will have to review its data and submit it again**. You can track the status of your products on Google Merchant Center.

> ℹ️ Make sure your products meet the [Product data specification](https://support.google.com/merchants/answer/7052112?visit_id=637492777706451215-3729304881&rd=1&hl=en) defined by Google. If a product is not in compliance with the requirements, the ad will be disapproved.

There are situations in which the product's disapproval happens after it has already been considered active. It happens more often for recently created accounts.

| LEARN MORE |
| ---------- |
|Check out other reasons for product disapproval in Google’s article [About disapprovals for product data quality violations.](https://support.google.com/merchants/answer/9227009?hl=en)|

## Updating product data

On Google Shopping, products automatically expire if they are not updated within 30 days. These updates include any changes in price, inventory or specification.

However, you do not have to worry about that. Once the integration with the VTEX Platform connector is completed, **the system will automatically update products every 29 days.**

> ℹ️ There may be a delay of up to 30 minutes between processing a product's data change and updating it in the feed.

## Using custom labels

In addition to basic product information, you can upload custom labels to Google Shopping. This feature is called *custom labels* and allows you to classify offers based on criteria you define, such as promotional campaigns, seasonality, margins, or target audience.  

*Custom labels* are useful for:  

- Organizing Google Ads campaigns  
- Creating custom filters for reports  
- Optimizing ad targeting and performance  

### How to configure it

You need to create *custom labels* in the Google Merchant Center. After creating the *custom labels* in the Google Merchant Center, follow the tutorial [Adding product specifications or fields](/en/docs/tutorials/adding-specifications-or-product-fields) to associate them with a specific offer using **product specifications.**  

When creating the new product specification field, complete it with the following values:  

| Field | Value |
|--- | --- |
| Specification field name | `googleshopping-labels`|
| Field type | Radio |

After creating the new specification field, you must associate the labels with the offers. For this step, follow the steps below:  

1. In the VTEX Admin, go to **Catalog > Products and SKUs** or type **Products and SKUs** in the search bar at the top of the page.  
2. On the product row, click the menu button <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.  
3. Click **Edit product**.  
4. Complete the `googleshopping-labels` field with the desired values, separating them with a semicolon`;`.  
5. Click `Save`.  

> ⚠️ Each offer can have a maximum of five associated labels.

## Modifying the automatic categorization

Once the integration is complete, the system will automatically categorize your products. However, some products may be disapproved because Google considers **that the categories assigned to them are incorrect.**

>Example: advertising of alcoholic beverages.

However, before considering there may be a categorization issue, make sure that your products comply with Google's policy for [alcoholic beverages](https://support.google.com/merchants/answer/6150139?hl=en#zippy=%2Cbebidas-alco%C3%B3licas).

To replace an incorrect category and ensure that the product will be approved, see the step-by-step instructions in the article [Google product category](https://support.google.com/merchants/answer/6324436?hl=en).

> ⚠️ Google will accept category changes only in the cases foreseen in the article [Google product category.](https://support.google.com/merchants/answer/6324436?hl=en)
