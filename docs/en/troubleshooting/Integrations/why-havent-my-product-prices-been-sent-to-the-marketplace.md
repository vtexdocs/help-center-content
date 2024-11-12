---
title: "Why haven't my product prices been sent to the marketplace?"
id: 7LMjXNoYJXsgPyKFkk6I25
status: PUBLISHED
createdAt: 2024-09-13T18:09:21.855Z
updatedAt: 2024-11-08T18:33:24.038Z
publishedAt: 2024-11-08T18:33:24.038Z
firstPublishedAt: 2024-09-13T18:21:24.321Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: why-havent-my-product-prices-been-sent-to-the-marketplace
locale: en
legacySlug: why-havent-my-product-prices-been-sent-to-the-marketplace
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
---

**Tags:** Marketplace, Integration, Pricing

A product price is sent to the marketplace after two steps: [pricing configuration in the seller's store](https://help.vtex.com/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu) and product cataloging. If one of these processes is not performed, the seller's product price will not be available on the marketplace.  

## Solution

To solve the problem, you must first identify which of the processes contains the error and apply the necessary correction.

### Price module configuration

The [Price module configuration](https://help.vtex.com/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu) is where the seller creates, edits, and stores the price data for the SKUs sold in their store.  

See the table below for possible error messages related to price settings and the actions required to fix them.  

|**Error message**|**Meaning**|**Required action**|
|:--:|:--:|:--:|
|Sale price cannot be updated to 29,99. Can not offer more then 70% off.| The seller cannot give more than 70% off the [base price](https://help.vtex.com/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) of a product.| Change the discount price to a value within the percentage required by the marketplace.| 
|Check if the SKU has a price set for this policy or if the price has expired.|The SKU price has not been added to the [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) used in the integration with the marketplace, or it has expired.| Add the SKU price to the trade policy used to integrate the store with the marketplace.|

### Product cataloging

Product cataloging is the process of matching each product the seller sends with the marketplace's categories and brands. This is done manually and exclusively by the marketplace.
To know if your product is going through this process, please contact the marketplace.  

If the products have already been cataloged, you must submit the product prices again by following the steps below:  

1. In the VTEX Admin, click **Marketplace > Connections > Price**.  
2. Click the product with the **Processed with error** status.  
3. Click the `Actions` button.  
4. Click **Reprocess**.  

Repeat the process for each product with the status  **Processed with error**. If the error persists, please contact the [VTEX support team](https://help.vtex.com/en/support).  

