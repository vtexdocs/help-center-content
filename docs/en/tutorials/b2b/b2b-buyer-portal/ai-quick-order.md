---
title: 'AI Quick Order'
createdAt: 2026-10-02T00:00:00.000Z
updatedAt: 2026-11-06T00:00:00.000Z
contentType: tutorial
productTeam: B2B
slugEN: ai-quick-order
locale: en
---

**AI Quick Order** uses the **Order Entry Agent** to assemble the order from a file or a chat conversation. The agent interprets the context without relying on a fixed template.

> ⚠️ This feature is only available to select accounts among stores that use [B2B Buyer Portal](https://help.vtex.com/en/docs/tutorials/b2b-buyer-portal).

## Placing an order with a file

To create an order from a file, follow these instructions:

1. Log in to the store and go directly to `/pvt/organization-account/order-entry`.

   In **How would you like to start?**, the **Order Entry Agent** screen offers the options **Send a file**, **Drag and drop a document**, and **Search for products via chat**. This article covers the file workflow, which you can complete by uploading a file or dragging and dropping it. With **Search for products via chat**, you provide the agent with the product name or SKU ID and quantities, as described in **Placing an order via chat**. The **Supported formats** row lists the following file formats: `csv`, `xlsx`, `xls`, `txt`, and `json`.
2. Upload the file by clicking the `+` icon or drag it into the chat area.

   The agent interprets items without relying on a fixed spreadsheet template. However, the file must include some product identification (name or SKU ID) and the quantity of each item. Unambiguous rows are automatically added to the order.
3. If a row matches more than one product, the agent marks the item with the **Ambiguous** badge and displays the extracted name and quantity. Then, select one of the options:
   - `Choose this product (SKU …)`: Chooses one of the products found and adds it to the order.
   - `Search for another product`: Searches for another product.
   - `Reject item`: Rejects the item.
   - `Review later`: Leaves the item pending for review.
4. Continue the review until all pending items are resolved.

   Items are reviewed one at a time, and the agent shows you how many are still pending. Finally, the agent confirms that the order has been created and shows how many items were added, including those matched automatically and those selected during review.
5. In **Items**, check the **Line item details**, **Quantity**, **Unit price**, and **Subtotal** for each item. The unit price comes from the catalog.

   The summary also displays the order identifier, **Contract**, **Participants**, **Last update**, **Promo code**, **Comments**, **Delivery**, and **Payment**. The `Checkout` button is inactive while the order has no items.
6. (Optional) Change the item quantities by clicking `−` and `+`.
7. Click `Checkout`.

## Placing an order via chat

To assemble an order via chat, select `Search for products via chat` and enter the product names or SKU IDs along with the desired quantities. Then, follow the instructions from the **Order Entry Agent**, including reviewing items and resolving any ambiguities.

## Quotes

The **Order Entry Agent** can request a quote if the **Quotes** feature is activated.

> ℹ️ Learn more in **[B2B Buyer Portal](https://help.vtex.com/en/docs/tutorials/b2b-buyer-portal)**. What happens after clicking `Checkout` is described in **[Buyer Portal Checkout](https://help.vtex.com/en/docs/tutorials/buyer-portal-checkout-en)**.
