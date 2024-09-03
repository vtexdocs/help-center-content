---
title: "Why don't marketplace orders integrate with my store?"
id: 275YvF8dyry5KmfY9epoET
status: PUBLISHED
createdAt: 2024-06-21T14:24:48.621Z
updatedAt: 2024-06-21T14:50:25.468Z
publishedAt: 2024-06-21T14:50:25.468Z
firstPublishedAt: 2024-06-21T14:48:49.434Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slug: why-dont-marketplace-orders-integrate-with-my-store
locale: en
legacySlug: why-dont-marketplace-orders-integrate-with-my-store
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
---

**Tags:** orders, marketplace  
**Keywords:** integration, marketplace, orders, SKU, inventory  

When order integration errors occur between a marketplace and your store, messages are displayed on the page of each order with the error. The possible order integration errors are the following:  

- Incomplete shipping information.  
- Amount divergence.  
- Invalid SKU ID.  
- Unavailable inventory.  
- Unavailable status.  
- Carrier not registered in the ERP.  

Check the status of order integration and messages by going to the VTEX Admin, and clicking **Marketplace > Connections > Orders** or typing **Orders** in the search bar.  

## Solution

To understand the meaning of the error and fix it, see the table below:  

| **Error type** | **Meaning** | **Required action** |
|:---:|:---:|:---:|
| **Incomplete shipping information** | The delivery information is incomplete or incorrect. | Correct or complete the requested information following the documentation [Order flow and status.](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196) |
|  <br>**Amount divergence** |  <br>The total amount of the order placed on the marketplace differs from the amount expected by the VTEX store, and this difference exceeds the percentage accepted by the VTEX store, or the Price Divergence rule is not configured.<br> <br>**Example**<br> <br>The total amount paid for the order on the marketplace was $311.77 USD, and the amount expected by the store was $313.61 USD. In other words, the order has a difference of $1.84 USD. | [Reprocess the order](https://help.vtex.com/en/tutorial/verificando-integracao-no-bridge#pedidos) or Configure the [Price Divergence rule](https://help.vtex.com/en/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW). |
| **Invalid SKU ID** | The product IDs in the trade policy differ from those in the marketplace. | Change the SKU IDs in the marketplace to have the same codes as the products in the trade policy. |
| **Unavailable inventory** | The SKU is not being displayed in the marketplace.<br> <br>See the full list of [Inventory integration errors with marketplaces.](https://help.vtex.com/en/tutorial/erros-de-integracao-de-estoque-com-marketplaces--32bcsv9Dx1Dtl0YQOwWDpc).<br>  | Apply the required fix based on the error identified in the documentation [Inventory integration errors with marketplaces.](https://help.vtex.com/en/tutorial/erros-de-integracao-de-estoque-com-marketplaces--32bcsv9Dx1Dtl0YQOwWDpc)<br>  |
| **Unavailable status** | The product is available in your store, but the marketplace has blocked the item in the storefront. The order status will be displayed as **Unavailable**. | Contact the marketplace to release the order. |
| **Carrier not registered in the ERP** | The carrier selected to deliver the product is not registered in the ERP.<br> <br>**Example**<br>A new carrier has been added to VTEX but has not been registered in the ERP. | Update the carrier information in the ERP as aligned with the information on the VTEX platform. |
