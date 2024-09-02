---
title: 'Sending products to Google Shopping'
id: 5L5LnccDCj5lJk8H95GQ82
status: PUBLISHED
createdAt: 2021-04-15T14:10:45.645Z
updatedAt: 2024-08-06T14:24:02.734Z
publishedAt: 2024-08-06T14:24:02.734Z
firstPublishedAt: 2021-04-15T17:41:23.772Z
contentType: trackArticle
productTeam: Channels
slug: sending-products-to-google-shopping
locale: en
trackId: 25Sl7iOqq58PGfVfTAo8Xw
trackSlugEN: integrating-with-google-shopping
---

Only catalogs can be integrated with Google Shopping. Unlike other integrations, **you do not have to map products using a spreadsheet.**

## Reindexing the database

After integrating and authenticating your account, the marketplace does not automatically receive the products after integrating with the seller. First, the seller must [reindex the database](https://help.vtex.com/en/tutorial/entendendo-o-funcionamento-da-indexacao). This process prepares the SKU information and products and sends catalog, price, and stock general information to the marketplace.  

<div class = "alert alert-info">
Please note that only the <a href="https://help.vtex.com/en/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA">sponsor user (owner)</a> has permission to reindex a VTEX store database. During reindexing, which may vary in terms of time, the products are queued for updating the information, while still remaining available for sale on the store site. 
</div>

To reindex the database, paste the link below in your browser, replacing the `{storename}` with the name of your store:

`{storename}.vtexcommercestable.com.br/admin/Site/FullCleanUp.aspx`

Access the link and click the `Reindex database` button. You can track the process in the VTEX Admin, through **PRODUCTS > Catalog > Reports**.

### Checking the index

You can verify if a specific SKU has been indexed correctly to the integration trade policy. Follow the steps below:

1. In the VTEX Admin, access **PRODUCTS > Products and SKUs**.
2. Click the <i class="fas fa-angle-down"></i> down arrow, next to the **CHANGE** button.
3. Select the `Indexed Info` option.
4. Check if the number of the trade policy used in the integration with the marketplace appears in the SKU information.

## Approving products

Once your items are approved by Google, they will become active and will be immediately displayed as ads on Google Shopping.

A product may eventually report the Insertion error: `Ineligible SKU`. This means that the product was considered ineligible for integration. Products may be ineligible for the following reasons:
- The product has no price.
- The product has no image.
- The product is out of stock, and it has been configured to be deleted in this scenario.

**If a product is disapproved, you will have to review its data and submit it again**. You can track the status of your products on Google Merchant Center.

<div class="alert alert-info">
Make sure your products meet the <a href="https://support.google.com/merchants/answer/7052112?visit_id=637492777706451215-3729304881&rd=1&hl=en">Product data specification</a> defined by Google. If a product is not in compliance with the requirements, the ad will be disapproved.
</div>

There are situations in which the product's disapproval happens after it has already been considered active. It happens more often for recently created accounts.

| **LEARN MORE** |
| ---------- |
|Check out other reasons for product disapproval in Google’s article [About disapprovals for product data quality violations.](https://support.google.com/merchants/answer/9227009?hl=en)|

## Updating product data

On Google Shopping, products automatically expire if they are not updated within 30 days. These updates include any changes in price, inventory or specification.

However, you do not have to worry about that. Once the integration with the VTEX Platform connector is completed, **the system will automatically update products every 29 days.**

<div class="alert alert-info">
There may be a delay of up to 30 minutes between processing a product's data change and updating it in the feed.
</div>

## Modifying the automatic categorization

Once the integration is complete, the system will automatically categorize your products. However, some products may be disapproved because Google considers **that the categories assigned to them are incorrect.**

>Example: advertising of alcoholic beverages.

However, before considering there may be a categorization issue, make sure that your products comply with Google's policy for [alcoholic beverages](https://support.google.com/merchants/answer/6150139?hl=en#zippy=%2Cbebidas-alco%C3%B3licas).

To replace an incorrect category and ensure that the product will be approved, see the step-by-step instructions in the article [Google product category](https://support.google.com/merchants/answer/6324436?hl=en).

<div class="alert alert-warning">
Google will accept category changes only in the cases foreseen in the article <a href="https://support.google.com/merchants/answer/6324436?hl=en">Google product category.</a>
</div>
