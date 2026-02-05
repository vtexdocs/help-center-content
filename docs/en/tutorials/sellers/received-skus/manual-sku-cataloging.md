---
title: 'Cataloging received SKUs'
id: tutorials_396
status: PUBLISHED
createdAt: 2017-04-27T22:06:59.819Z
updatedAt: 2022-06-21T20:18:01.465Z
publishedAt: 2022-06-21T20:18:01.465Z
firstPublishedAt: 2017-04-27T23:03:22.726Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: manual-sku-cataloging
legacySlug: approving-suggestions-for-skus
locale: en
subcategoryId: 4hU8QWlzhxWg711Kz7Gmib
---

The received SKUs page allows the marketplace to view, prioritize, and catalog the items sent by their sellers, making it possible to:

- Create new products. 
- Link them to existing SKUs.
- Link them to existing products.

Cataloging can be done using [one or more matchers](/en/tutorial/understanding-vtex-matcher-scoring), both manually and automatically. There is also the possibility to use external tools to do it.

# Prioritizing cataloging 

The list of received SKUs was designed to prioritize and speed up the cataloging of these items.

Here are some of the features that help in this process:

## Filters

In the search feature, you can combine different filters to make the display of SKUs more accurate. Try filtering SKUs by brand, seller, or subcategory to create custom views.

For example, if you select the "ABC" brand and the "socks" subcategory, all SKUs of the “ABC” brand that are in the "socks" subcategory will be displayed.

It is worth noting that the filter options are given based on the SKUs that are available in the list. For example, if the marketplace is connected to sellers A, B, and C but there are only SKUs of sellers B and C pending in cataloging, the selection of filters will only display the results of sellers B and C.

## Ordering

By default, the most recent items are shown first, but you can also sort them by price or inventory.

In this case, the items in the table will be sorted in ascending or descending order by clicking on "Price" or "Inventory" in the header.

# Cataloging items

Any SKU in the list is available to be cataloged. However, we recommend mapping categories and brands before cataloging in order to make the process faster.

Remember that suggestions pending approval are available for 30 days and will expire automatically after this period.

## Cataloging options

In the list, click on the button with three dots and choose one of the following options:

- **Approve as a new product:** creates a new SKU in the catalog and, consequently, a new product. This option is recommended when a specific product does not exist in the marketplace's catalog.

- **Link to existing SKU:** links the seller's SKU to an already existing SKU from the marketplace's catalog.

A possible example would be a marketplace selling the XYZ phone with 128GB internal storage from seller A.

Now suppose that the marketplace received the same SKU from seller B. To avoid creating a duplicate SKU, the marketplace needs to link these SKUs.

Therefore, you must indicate the ID of the existing SKU for the association to be made correctly.

- **Link to an existing product:** adds a new SKU to a product that already exists in your catalog.

Let's suppose that the marketplace already has an white shirt SKU, in S, M and L sizes. However, the seller has recently added XS and XL sizes to its inventory.

After you link them, the new sizes will be grouped with the cataloged ones. Therefore, the product's available sizes will be XS, S, M, L and XL.

In this case, you’ll need to indicate the ID of the existing product to properly link it to the new SKUs.

- **Reject SKU**: rejects SKUs that the marketplace doesn't want to sell. When a SKU is rejected, it means the marketplace blocked it. The next time the seller adds its products, those rejected will no longer be among those added. It is possible to unblock a SKU through REST API if the marketplace wishes to receive it again as a suggestion from the seller. To learn more about SKU unblocking, please access our [API documentation on the Developer Portal](https://developers.vtex.com/vtex-rest-api/reference/savesuggestion).    

- **Automatic Approval:** you can also configure automatic SKU approval for a specific seller, regardless of its Matcher score. This can only be done through Rest API. To learn more, see our documentation about [Received SKU Approval Settings](https://developers.vtex.com/vtex-rest-api/reference/getautoapprovevaluefromconfig).

## Cataloging in bulk

The marketplace also has the option to catalog SKUs in bulk directly from the list:  

1. In the checkboxes on the left side of the screen, check the SKUs that you want to catalog.  
2. Select the cataloging action in the blue bar that will appear above.  
3. Review or add the necessary information for each SKU selected.  
4. In the bottom right corner of the box, click on "Approve".  

Your SKUs will be cataloged.

This feature can be used when you already have a product in the catalog but need to add new sizes. You will be able to select all sizes at once and link them to the product.

Or, if you want to create unique new products - such as chairs, bottles, books - just select them and approve them as new products.

