---
title: 'VTEX Pick and Pack Mobile'
id: 3i1K01CQlDBFYYp42WFOet
status: PUBLISHED
createdAt: 2024-04-04T20:42:46.548Z
updatedAt: 2025-10-01T19:33:57.065Z
publishedAt: 2025-10-01T19:33:57.065Z
firstPublishedAt: 2024-04-06T01:59:46.300Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-mobile
legacySlug: vtex-pick-and-pack-mobile
locale: en
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

> ℹ️ If you are already a VTEX customer and wish to adopt this functionality for your business, please contact [Commercial Support](/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please fill out the [contact form](https://vtex.com/us-en/contact/).

The [VTEX Pick and Pack](/en/docs/tutorials/vtex-pick-and-pack-fulfillment) mobile app helps the picker — the person who picks and packs items in the facility — handle orders, from picking to shipping. This makes the store's order picking and delivery flow smoother and more efficient.

![pickpack-mobile-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-mobile_1.png)

Order handling is divided into three steps, following the usual store order flow:

- [Create worksheets](#creating-worksheets)
- [Picking](#picking)
- [Packing](#packing)

## Menu

The __VTEX Pick and Pack__ app menu provides the main features to help you navigate and complete tasks. Through it, you can access different areas of the app more efficiently.

Tap the <i class="fas fa-grip-lines"></i> icon in the top-right corner to open the menu,  where you'll find the following fields:

- <i class="fas fa-house"></i> __Summary__:  Takes you to the app's home screen.
- <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-mobile_11.png" alt="pickpack-logout" width="30" height="30">: Logs out of the app.
- <i class="fas fa-history"></i> __History__: Redirects to the history of completed worksheets.
- <i class="fas fa-globe"></i> __Language__: Changes the app language.
- __Change to__ <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-mobile_12.png" alt="pickpack-logout" width="35" height="30">: Changes the facility where the order picking will be done.
- __Pending__: Redirects to the pending worksheets screen.
- __To pack__: Redirects to the worksheets that are awaiting packing.
- <i class="fas fa-bell"></i>: Notification area showing the latest changes to the worksheets.
- __Claim your next task__ <i class="fas fa-arrow-right"></i>: Redirects to the screen for creating worksheets.

To collapse the menu, tap `Close Menu` <i class="fas fa-chevron-right"></i>.

## Worksheets

A worksheet consists of a set of orders that will be processed by the Pick and Pack flow simultaneously. This allows for efficient management and speeds up the processing of multiple orders at once.

For example, a worksheet with only three orders:

- Order 1: A red t-shirt and a pink skirt.
- Order 2: Two red t-shirts and a white hat.
- Order 3: A pink skirt and a white hat.
When selecting this worksheet for handling, the app will display the following items for picking:

- Three red t-shirts.
- Two pink skirts.
- Two white hats.

The app will then help you pack each order with its respective items.

> ⚠️ Worksheets only apply to the order picking and packing steps. You must ship each order separately.

## Creating worksheets

The image of the tab below lists the orders that should be selected for [worksheets](#worksheets). 

![pickpack-ordemservico-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-mobile_2.png)

The order list displays information as follows:

| Order     | Delivery by     |
| ---------- | ---------- |
| Shows the order number along with the item quantity and total items.       | Order delivery due date.       |

To create a worksheet, follow the steps below:

1. Tap the menu <i class="fas fa-grip-lines"></i>.
2.	Tap the `Claim your next task` <i class="fas fa-arrow-right"></i> button.
3. Select the orders you want to add to the worksheet. To create a worksheet with all the orders, click <i class="fas fa-square"></i> `Select All`. 
4. Click `Start Picking`.

To search for an order, enter the order ID in the search bar. To filter the order list, tap  and select one or more of the following options:

- Delivery Date
- [Categories](/en/docs/tutorials/what-is-a-category)
- [Payment Methods](/en/docs/tutorials/difference-between-payment-methods-and-payment-conditions)
- [Shipping Strategy](/en/docs/tutorials/shipping-strategy)
- Shipment Type

## Picking items

The picking step consists of manually selecting the items listed in a [worksheet](#worksheets) and taking them to the appropriate packaging area in your facility.

### Pending worksheets

The __Pending worksheets__ tab displays the list of worksheets that haven't been picked yet, as shown in the image below:

![pickpack-pendente-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-mobile_3.png)

In this tab, you can select the worksheet ID if you only want to see the picked items from that order.

If there are worksheets assigned to the picker, you can access them from the picking screen by following these steps:

1. Tap the menu <i class="fas fa-grip-lines"></i>.
2. Select __Pending__. A list will be displayed with the worksheets assigned to the picker in the picking step.
3. Select the <i class="fas fa-arrow-right"></i> button on the worksheet of the order you want to pick.

When clicking a worksheet, the following information is displayed:

- __Items:__ Products to be picked from the worksheet.
- __Activity__: Details of changes made to the worksheet, such as products added, quantities updated, and replacements.
- __Info:__ General information about the worksheet and the order.
- __Summary:__ Products that have already been picked.

![pickpack-em-separacao-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-mobile_4.png)

By opening the  menu, the following options will be displayed:

- **Add Note:** [Adds a free note](/en/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#alteracoes-no-pedido) to the worksheet.
- **Add items to order:** Starts the flow to [add new items to the order](#add-new-products-to-an-order).
- **Set as Ready for Packing:** Used to bulk pick or bulk reject orders.
- **Pause Picking:** Pause the time count for picking the products listed in the worksheet.
- **Open Barcode Reader:** Uses the device's camera to read product barcodes.
- **Print Picking List:** Generates a document with the list of items in the worksheet for printing.
- **Close Menu:** Closes the menu and returns to the picking screen.

To pick an item, follow these steps:

1. On the Picking screen, go to the __Items__ tab.
2. Select the item you want to pick or swipe the product to the right.
    ![pickpack-item-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-mobile_5.png)
3. Check the item quantity.
4. Tap `Confirm Picking` or `Confirm and Pick All`, when there are multiple units of the same item.

For products with weight or volume, confirm the measurements first, then confirm your selection, as shown in the example below:

![pickpack-item-peso-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-mobile_6.png)

1. On the __Picking__ screen, go to the __Items__ tab.
2. Select the item you want to pick or drag the product to the right.
3. Enable the <i class="fas fa-toggle-on"></i> `Sync weight and price option` to automatically calculate and complete the total price of the item by its weight. Turn off the <i class="fas fa-toggle-off"></i> option if you want to manually enter the item's price and weight.
4. Select `Confirm picking`.

To pick all the products from the worksheet at once, follow these steps:

1. Tap the <i class="fas fa-ellipsis-v"></i> menu.
2. Select the __Set as Ready for Packing__ option.
3. Select `Pick All Available Items`.

Once picked, the products will be listed in the Summary tab.

## Change product quantity

During the picking process, the picker can manually update the quantity of a product. This may occur after a customer request, via call or text message, or when the available store inventory differs from what was initially added, for example.

This can be done in two ways:

### By selecting the product

1. On the **Picking** screen, click and hold the item whose quantity you want to change.
2. Click the **Add more units** option.
3. Select the correct quantity. The quantity of items that can be changed by the picker is defined on the [Settings](/en/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#separacao) page in the VTEX Admin.
4. Click **Confirm changes**.

### By selecting the worksheet

1. On the **Picking** screen, click the **Info** tab.
2. On the desired order, click the <i class="fas fa-ellipsis-v"></i> menu.
3. Click the **Add more units** option. 
4. Select the correct quantity. The quantity of items that can be changed by the picker is defined on the [Settings](/en/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#separacao) page in the VTEX Admin.
5. Click `Confirm action`.

## Add new products to an order

The picker can manually add new products to an order after receiving a customer request, such as a call or a text message. There are two ways to add new products to an existing order.

### By selecting the product

1. On the **Picking** screen, click the <i class="fas fa-ellipsis-v"></i> menu.
2. Click the **Add product to an order **option**.**
3. Select the order to which you want to add the new item.
4. Scan the product barcode or search for it manually using the search bar.
5. Select the desired quantity.
6. Click **Confirm selection**.

### By selecting the worksheet

1. On the **Picking** screen, click the **Info** tab.
2. On the desired order, click the <i class="fas fa-ellipsis-v"></i> menu.
3. Click the **Add new product** option.
4. Scan the product barcode or search for it manually using the search bar.
5. Select the desired quantity.
6. Click **Confirm selection**.

## Rejecting items

There are some scenarios in which products may have to be rejected due to store settings and item availability. 

To reject a product from the worksheet, follow the steps below:

1. Go to the __Items__ tab.
2. Select and swipe the product you want to reject to the left.
3. Enter the reason for item rejection in the textbox.
    ![pickpack-item-recusa-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-mobile_7.png)
4. Select the quantity of items you want to reject. The quantity of items that can be rejected by the picker is defined on the [Settings](/en/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#separacao) page in the VTEX Admin.
5. Select `Discard units` to reject the selected quantity, or `Confirm and Discard All` to reject all.

To reject all the products from the worksheet at once, follow these steps:

1. Click the <i class="fas fa-ellipsis-v"></i> menu.
2. Click the **Set ready for packaging** option.
3. Click **Reject All Available Items** to finish picking.

> ❗ If all the items from an order are rejected, the order will be completed automatically.

## Replacing items

Pickers can also replace one item with another, depending on the [store settings](/en/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9#picking) and item availability. This feature helps ensure that customers receive their orders on time, even if some items are unavailable.

To replace worksheet items, follow the steps below:

1. On the **Picking** screen, click and hold the item whose quantity you want to change.
2. Click the **Replace item** option.
3. Scan the product barcode or search for it manually using the search bar.
4. Select the desired quantity in units or add the weight value.
5. Click **Continue**.
6. Select the reason for the item replacement. The reasons listed are configurable in the [Settings](/en/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9#order-changes) page.
7. Click **Confirm and pick replacement**.

## Completing the picking process

After all items on the worksheet have been picked, rejected, or replaced, click the `Start Packing` button to move the worksheet to the [packing](#packing) step.

## Packing

During packing, the picker organizes order items into their respective shipping packages.  The Pick and Pack mobile app allows you to organize all the packages needed for multiple orders easily.

![pickpack-empacotamento-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-mobile_8.png)

You can access the Packing page once you have [completed picking](#completing-the-picking-process) the items on a worksheet or by following these steps:

1. Tap the menu <i class="fas fa-grip-lines"></i> .
2. Tap __Start Packing__. A list will be displayed with the [worksheets](#worksheets) assigned to the picker in the packing step.
3. Select the worksheet you want to start packing.
   ![pickpack-item-pendente-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-mobile_9.png)

Follow the steps below to pack items:

1. Under Packing, select the order you want to pack.
2. Select the + button to confirm the quantity of the product you want to add to the package.
3. Tap Pack Products.
4. Select an available package.
5. Tap Pack Products.
6. Enter the total weight of the package in kilograms (kg).
7. Tap Save.

### Custom package

1. Under __Packing__, select the order you want to pack.
2. Select the `+` button to confirm the quantity of the product you want to add to the package.
3. Tap `Pack Products`.
4. Add a new package by selecting __Custom package__.
5. Tap Pack Products.
6. Complete the following fields:
   - Length in centimeters (cm).
   - Width in centimeters (cm).
   - Height in centimeters (cm).
   - Total weight of the package in kilograms (kg).
7.	Tap `Confirm`.

### The product's own container

1. Under __Packing__, select the order you want to pack.
2. Tap the `+` button to confirm the quantity of the product you want to add to the package.
3. Tap `Pack Products`.
4. Add a new package by selecting __No packing required__.
5. Tap `Pack Products`.
6. Tap `Confirm`.

You need to repeat this procedure as many times as necessary to pack all the items from a worksheet.

Items that have already been packed will be available in the __Packed Items__ tab.

![pickpack-itemsempacotados-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-mobile_10.png)

You can perform the following actions for each packed item by tapping the   button:

- __View details__: Displays a window with the package details.
- __Print labels__: Generates a label that will be attached to the package.
- __Set location__: Registers the package location in a facility using the BIN code, which identifies a specific storage location in a warehouse.
- __Remove package__: Removes the package from the __Packed Items__ list, so the item will need to be packed again.

To delete an item from the package, tap the corresponding `X` button.

To finish packing, tap `Confirm Packing`.

#### Learn more

- [VTEX Pick and Pack](/en/docs/tutorials/vtex-pick-and-pack)
- [VTEX Pick and Pack: FAQ](/en/docs/tutorials/vtex-pick-and-pack-faq)
- [VTEX Pick and Pack: Settings](/en/docs/tutorials/vtex-pick-and-pack-settings)

