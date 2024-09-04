---
title: 'Offer Status'
id: 2OE87wU26F7lApl99OdwvJ
status: PUBLISHED
createdAt: 2023-09-29T19:16:05.771Z
updatedAt: 2024-03-04T20:03:00.144Z
publishedAt: 2024-03-04T20:03:00.144Z
firstPublishedAt: 2023-09-29T20:07:16.003Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slug: offer-status
locale: en
legacySlug: offer-status-beta
subcategory: 2zVauFUkYn8vgS0y0MfWeK
---

The **Offer Status** module allows sellers to track the sending and syncing of their offers on all sales channels integrated with the store. On VTEX, an offer is an SKU from a seller sent to a sales channel whose price and inventory information have been configured.  

**Offer Status** allows you to track offers sent only to VTEX marketplaces. To access the module, in the VTEX Admin, go to **Marketplace > Connections > Offer Status**, or type **Offer Status** in the search bar.

![Offer Status Screen](https://raw.githubusercontent.com/vtexdocs/help-center-content/main//downloads.ctfassets.net/alneenqid6w5/5elFaSW31IgANpXseTApPo/2de2b349e1c114b7b50db65533eee1df/-EN-_Offer_Status_-_GIF.gif)

The **Offer Status** page comprises three tabs: [**Published**](#published-tab), [**Issues**](#issue-tab), and [**Awaiting Completion**](#awaiting-completion-tab), all listing your offers according to their status. You can access and view details of each offer, such as their status, inventory, price, update date, and reasons for being rejected by the marketplace.

![Offer Status schema](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/offer-status-0.png)

## Published tab

In the **Published** tab, you can track the offers sent and approved by the marketplace. In this tab, you can:  

- [Search for and filter offers](#searching-for-and-filtering-offers) 
- [View offer details](#viewing-offer-details)  
- [Edit offer details](#editing-offer-details)
- [Export published offer list](#export-published-offer-list)  

### Searching for and filtering offers

At the top right of the page, there is a search bar with a <i class="fas fa-search"></i> magnifying glass. You can use this bar to search by **offer name.**

Additionally, you can filter the search results using the following criteria:

- **Marketplace:** Sales channel to which the offer was sent.
- **Inventory:** Number of products available in stock, which can be:
  - `Minimum:` Minimum number of items in stock for a product.
  - `Maximum:` Maximum number of items in stock for a product.
- **Update:** Price and inventory update status of published offers.

To filter the offers by **Marketplace**, click the down arrow, select the desired marketplaces, and then click **Apply**.

To filter the offers by **Inventory**, click the down arrow, enter the minimum and/or maximum inventory, and click **Apply**.

![Filtro estoque offer status](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/offer-status-1.png)

To filter the offers by **Update**, click the down arrow, select one of the options, and then click **Apply.**

See below the options available for this filter:

- **Updated**: Offers that had their price and/or inventory updated by the seller and have been processed successfully.
- **Error updating:** Offers that had inconsistencies and failed to update.

![Filtro atualizado offer status](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/offer-status-2.png)

You can use a single filter or combine them in a single search. The filters are not selected by default, so the home page displays the total number of existing offers.

### Viewing offer details

At the top of the **Offer Status** page, there is an overview of the seller's offers with the following information:

- Number of offers published versus offers sent.
- Number of offers with **Updated** status.
- Number of offers with **Error updating** status.

The offer list contains columns with the following information:

| **Column** | **Description** |
|---|---|
| **Name** | Displays the SKU image, the offer name on the sales channel, and the SKU ID on VTEX. |
| **Marketplace** | Sales channel to where the offer was sent. |
| **Price** | SKU offer price. |
| **Inventory** | Number of items in <a href="https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb">stock</a> for the offer SKU. |
| **Update** | Update processing status, which can be Updated <i class="far fa-check-circle"></i> or Error updating<div class="error-icon"></div>. |

You can click the column names to sort the offers in ascending or descending order. For example, by clicking the **Price** column, you can sort offers by price, from the lowest to highest or vice versa.

### Editing offer details

When you click an offer, a window will open with the following offer details:

- **Price:** The offer's current price, when it was last updated, and whether the update was successful or not.
- **Inventory:** The current availability of the offered item, when it was last updated, and whether the update was successful or not.
- **Content:** When the content was last updated and whether the update was successful or not.

To update any details of an already published offer, you must do the following:

1. In the **Published tab,** click the desired offer.
2. Click the <i class="fas fa-ellipsis-v"></i> action icon in the top right corner.
3. Click one of the options:  
- **Edit Price**
- **Edit Inventory**
- **Edit Content**

You will be redirected to the corresponding page to make the necessary changes.

![Ações offer status](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/offer-status-3.jpeg)

### Export published offer list

To export the published offer list in XLSX format, click the down arrow icon at the top of the interface. The file will be sent to the email of the logged-in user. The export time depends on the volume of offers exported and on the processing circumstances of the VTEX platform.

>ℹ️ The exported content refers to all items in the offer list at the moment of exporting. If any of the filters are active, only the selected offers will be exported.

## Issues tab

In the **Issues** tab, you can track the offers that have been sent but were rejected by the marketplace. In this tab, you can also do the following:

- [Search for and filter offers with issues](#searching-for-and-filtering-offers-with-issues)
- [View issue details](#viewing-issue-details)
- [Edit offer details](#editing-offer-details)
- [Export issues offer list](#export-issues-offer-list)

### Searching for and filtering offers with issues

At the top right of the page, there is a search bar with the <i class="fas fa-search"></i> magnifying glass icon, where you can search an offer by:

- Offer name
- SKU ID

Additionally, you can filter the search results using the following criteria:

- **Marketplace:** Sales channel to which the offer was sent.
- **Sent:** When the offer was sent to the marketplace. You can choose from the predefined ranges: **Today,** **Last 7 days,** or **Last month.**
- **Inventory:** Number of products available in stock, which can be:
- Minimum: Minimum number of items in stock for a product.
- Maximum: Maximum number of items in stock for a product.

To filter the offers by **Marketplace**, click the down arrow, select the desired marketplaces, and then click **Apply**.  

To filter the offers by **Sent**, click the down arrow, select one of the options, and then click **Apply.**  

To filter the offers by **Inventory**, click the down arrow, enter the minimum and/or maximum inventory, and click **Apply**.  
![Filtro estoque offer status](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/offer-status-4.png)

You can use a single filter or combine them in a single search. The filters are not selected by default, so the home page displays the total number of existing offers.  

### Viewing issue details

The offer list contains columns with the following information:

| **Column** | **Description** |
|---|---|
| **Name** | Displays the SKU image, the offer name on the sales channel, and the SKU ID on VTEX. |
| **Marketplace** | Sales channel to where the offer was sent. |
| **Price** | SKU offer price. |
| **Inventory** | Number of items in stock for the offer SKU. |
| **Issues** | Number of issues found in the offer. |
| **Sent** | When the offer was sent to the marketplace. |

### Editing offer details

When you click an offer, a window will open with the following offer details:

- **Possible errors**  
  - **Offer denied in marketplace:** Occurs when the marketplace has rejected the offer because it does not meet their specified requirements.  
  - **Inventory update:** Occurs when the offer SKU has no inventory configured.  
  - **Price update:** Occurs when the offer price was not configured.  
To update any details of an offer with issues, please follow the steps below:  

1. In the **Issues** tab, click the desired offer.  
2. Click the <i class="fas fa-ellipsis-v"></i>action icon in the top right corner.  
3. Click one of the options:  
  - **Edit Price**
  - **Edit Inventory**
  - **Edit Content**

You will be redirected to the corresponding page to make the necessary changes.

### Export issues offer list

To export the issues offer list in XLSX format, click the down arrow icon at the top of the interface. The file will be sent to the email of the logged-in user. The export time depends on the volume of offers exported and on the processing circumstances of the VTEX platform.

>ℹ️ The exported content refers to all items in the offer list at the moment of exporting. If any of the filters are active, only the selected offers will be exported.

## Awaiting Completion tab

In the **Awaiting Completion** tab, you can track the offers that are awaiting review from the marketplace. In this tab, you can also do the following:  

- [Search for and filter offers under review](#searching-for-and-filtering-offers-under-review)
- [Edit offer details](#editing-offer-details)
- [Export awaiting completion offer list](#export-awating-completion-offer-list)

### Searching for and filtering offers under review

At the top right of the page, there is a search bar with a <i class="fas fa-search"></i> magnifying glass. You can use this bar to search by:

- Offer name
- SKU ID

Additionally, you can filter the search results using the following criteria:

- **Marketplace:** Sales channel to which the offer was sent.
- **Sent:** When the offer was sent to the marketplace. You can choose from the predefined ranges: **Today, Last 7 days**, or **Last month**.  

To filter the offers by **Marketplace**, click the down arrow, select the desired marketplaces, and then click **Apply**.  

To filter the offers by **Sent**, click the down arrow, select one of the options, and then click **Apply.**  

You can use a single filter or combine them in a single search. The filters are not selected by default, so the home page displays the total number of existing offers.  

### Editing offer details

The **Awaiting Completion** tab contains columns with the following information:

| **Column** | **Description** |
|---|---|
| **Name** | Displays the SKU image, the offer name on the sales channel, and the SKU ID on VTEX. |
| **Marketplace** | Sales channel to where the offer was sent. |
| **Sent** | When the offer was sent to the marketplace. |

You can click the column names to sort the offers in ascending or descending order. To update any details of an offer under review, please do the following:

1. In the **Awaiting Completion** tab, click the desired offer.
2. Click the <i class="fas fa-ellipsis-v"></i>action icon in the top right corner.
2. Click one of the options:
  - **Edit Price**
  - **Edit Inventory**
  - **Edit Content**

You will be redirected to the corresponding page to make the necessary changes.

### Export awaiting completion offer list

To export the awaiting offer list in XLSX format, click the down arrow icon at the top of the interface. The file will be sent to the email of the logged-in user. The export time depends on the volume of offers exported and on the processing circumstances of the VTEX platform.

>ℹ️ The exported content refers to all items in the offer list at the moment of exporting. If any of the filters are active, only the selected offers will be exported.
