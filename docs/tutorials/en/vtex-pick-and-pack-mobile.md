---
title: 'VTEX Pick and Pack Mobile'
id: 3i1K01CQlDBFYYp42WFOet
status: PUBLISHED
createdAt: 2024-04-04T20:42:46.548Z
updatedAt: 2024-04-06T02:45:49.741Z
publishedAt: 2024-04-06T02:45:49.741Z
firstPublishedAt: 2024-04-06T01:59:46.300Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: vtex-pick-and-pack-mobile
locale: en
legacySlug: vtex-pick-and-pack-mobile
subcategory: 7Kllu6CmeLNV3tYXlCFvOt
---

<div class = "alert alert-info">
<p>If you are already a VTEX customer and wish to adopt this functionality for your business, please contact <a href="https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ">Commercial Support</a>. Additional fees may apply. If you are not yet a customer but are interested in this solution, please fill out the <a href="https://vtex.com/us-en/contact/">contact form</a>.</p>
</div>

The [VTEX Pick and Pack](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA) mobile app helps the picker — the person who picks and packs items in the facility — handle orders, from picking to shipping. This makes the store's order picking and delivery flow smoother and more efficient.

![pickpack-mobile-en](https://images.ctfassets.net/alneenqid6w5/4VZJd6qfgBB45lcqptQ5L9/c130518e5a14f76ca2ee9268bc298d92/image.png)

Order handling is divided into four steps, following the usual store order flow:

- [Create worksheets](#creating-worksheets)
- [Picking](#picking)
- [Packing](#packing)
- [Shipping](#shipping)

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

<div class="alert alert-warning">
Worksheets only apply to the order picking and packing steps. You must ship each order separately.
</div>

## Creating worksheets

The __Unassigned__ tab lists the orders that should be selected for [worksheets](#worksheets). 

![pickpack-ordemservico-en](https://images.ctfassets.net/alneenqid6w5/2zTfjSklG6b57gEHryo2BI/fe3519449de97380728a84ea34d7ba86/image.png)

To create a worksheet, follow the steps below:

1. On the initial screen, click __Unassigned__ <i class="fas fa-arrow-right"></i>.
2. Select the orders you want to add to the worksheet. To create a worksheet with all the orders, click <i class="fas fa-square"></i> `Select All`. 
3. Click `Start Picking`.

## Picking products

The picking step consists of manually selecting the items listed in a [worksheet](#worksheets) and taking them to the appropriate packaging area in your facility.

### Pending worksheets

The Pending tab displays the list of worksheets that have not been picked yet.

![pickpack-pendente-en](https://images.ctfassets.net/alneenqid6w5/43VayjqahaHNiFLoT2gjbm/0b818a175fc5f290de6f37e1cff2d16f/image.png)

In this tab, you can select the worksheet ID if you only want to see the picked items from that order.

If there are worksheets assigned to the picker, you can access them from the picking screen by following these steps:

1. On the app's home page, click **Continue Picking**. A list will be displayed with the [worksheets](#worksheets) assigned to the picker in the picking step.
2. Click the worksheet you want to start picking.

When clicking a worksheet, the following information is displayed:

- __Items:__ Products to be picked from the worksheet.
- __Approvals:__ Products that were rejected or replaced.
- __Info:__ General information about the worksheet and the order.
- __Summary:__ Products that have already been picked.

![pickpack-em-separacao-en](https://images.ctfassets.net/alneenqid6w5/5zrrsEx43mNC0shZkDiBQ0/53ee187d9cf252ce233ab2c5b5c2b9ea/image.png)

By clicking the <i class="fas fa-ellipsis-v"></i> menu, the following options will be displayed:

- **Add Note:** Add a note to the worksheet.
- **Set as Ready for Packing:** Used to bulk pick orders or bulk reject orders.
- **Pause Picking:** Pause the time count for picking the products listed in the worksheet.
- **Open Barcode Reader:** Use the device's camera to read product barcodes.
- **Print Picking List:** Generates a list of items from the worksheet for printing.
- **Close Menu:** Closes the menu and returns to the picking screen. 

To pick a product, follow the steps below:

1. On the Picking screen, go to the __Items__ tab.
2. Click the product you want to pick or drag the product to the right. If the product has more than one unit, you need to click the number of units. For products with weight or volume, confirm the measurements first, then confirm your selection, as shown in the example below.

![pickpack-item-en](https://images.ctfassets.net/alneenqid6w5/6DXcDvIWNba93QEDb1wjo3/de6e921ac69b112aee8ac14a81810c60/image.png)

To pick all the products from the worksheet at once, follow these steps:

1. Click the <i class="fas fa-ellipsis-v"></i> menu.
2. Click the **Set ready for packaging** option.
3. Click **Pick all Available Items.**

Once picked, the products will be listed in the __Summary__ tab.

## Rejecting items

There are some scenarios in which products may have to be rejected due to store settings and item availability. 

<div class="alert alert-warning">
The option to reject items may not be available. If you have any questions, please contact the store admin.
</div>

To reject a product from the worksheet, follow the steps below:

1. Go to the __Items__ tab.
2. Click and drag the product you want to reject to the left.
3. Select the reason for rejection from the **Rejection reasons** list.
4. Select the number of items you want to reject or click `Confirm and Discard All`.
5. Click `Discard Item`.

To reject all the products from the worksheet at once, follow these steps:

1. Click the <i class="fas fa-ellipsis-v"></i> menu.
2. Click the **Set ready for packaging** option.
3. Click **Reject All Available Items**.

<div class="alert alert-danger">
If all the items from an order are rejected, the order will be completed automatically.
</div>

## Replacing items

You can also replace the item with another one, depending on the store's settings and the item's availability.

<div class="alert alert-warning">
The option to replace items may not be available. If you have any questions, please contact the store admin.
</div>

To replace worksheet items, follow the steps below:

1. Go to the __Items__ tab.
2. Press and hold the product you want to replace.
3. Click the **Replace Item** option.
4. Search for or select the replacement item for the order and check the box <i class="fas fa-check-square"></i>.
5. Select the number of units to be replaced.
6. Select the reason for the replacement from the list of options.
7. Complete the **Description** field with more information about the replacement.
8. Click the `Confirm Replacement` button.

## Completing the picking process

After all items on the worksheet have been picked, rejected, or replaced, click the `Start Packing` button to move the worksheet to the [packing](#packing) step.

## Packing

During packing, the picker organizes order items into their respective shipping packages.  The Pick and Pack mobile app allows you to organize all the packages needed for multiple orders easily.

![pickpack-empacotamento-en](https://images.ctfassets.net/alneenqid6w5/7vJJMaVu3OgpDTtpXAPOCU/a12a99b9e9988032ac4b4950d1f85f01/image.png)

You can access the Packing page once you have [completed picking](#completing-the-picking-process) the items on a worksheet or by following these steps:

1. On the app's initial screen, click **To pack**. A list will be displayed with the [worksheets](#worksheets) assigned to the picker in the packing step.
2. Click the worksheet you want to start picking. 

![pickpack-item-pendente-en](https://images.ctfassets.net/alneenqid6w5/6ZdONyhqHoSVFf0snDQ6SO/e3b58759bf7b7dfed1a7232f302bda2b/image.png)

Follow the steps below to pack items:

1. Under Packing, click the order you want to pack.
2. Click the <i class="fas fa-plus"></i> button of the product you want to add to the package, or click <i class="fas fa-box"></i> to pack all products at once.
<div class="alert alert-warning"> If you choose to pack all the order items, the remaining unpacked products will automatically be listed in a new package.</div>
3. Select an existing package or add a new one by clicking `+ Create Package`.
4. Select the package type you want to add.
5. Select the number of units of this product you want to add to that package.
6. Click the `Pack` button.

You need to repeat this procedure as many times as necessary to pack all the items from a worksheet.

The packed items will be displayed on the **Packed Items** tab. You can switch between viewing items as a list or by orders and packages by clicking <i class="fas fa-toggle-on"></i>.

__Item list__
![pickpack-item-empacotado-en](https://images.ctfassets.net/alneenqid6w5/2fKkok0mKMpcwLtaaY48gd/ec354b5f4e8e0dbce8102dac4bdc554e/image.png)

__Orders and packages__
![pickpack-item-empacotado-2-en](https://images.ctfassets.net/alneenqid6w5/6BIoHcM0CwTg8boKYiiL4T/893b8268f9e01e764ca6f952852af1d1/image.png)

After packing all items listed in the worksheet, complete the packing process on the Packed Items tab by clicking the `Confirm Packing` button.

Then, the order will be completed in the app. Depending on your store's settings, the picker may proceed to the shipping step.

## Shipping

The shipping step allows you to create shipping services for orders picked and packed.

<div class="alert alert-warning">
Shipping is an optional step in the app. It depends on your operation and the store settings.
</div>

To ship packages using the Pick and Pack app, follow the steps below:

1. In the initial screen, click the <i class="fas fa-ellipsis-v"></i> menu.
2. Click the **To ship** option.
3. Select the package you want to ship. You need to select an order with the `Preparing shipment` [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196).
4. Complete all shipping information:
    - **Expected pickup date**
    - **Expected delivery date**
    ![pickpack-envio-en](https://images.ctfassets.net/alneenqid6w5/241KZLvmluqVG6uR63dBze/91bf904272cdd0c22037fafa64e273a4/image.png)
5. Select a carrier.
6. Click `Select and Continue`.
7. Confirm the shipping information. If no corrections are needed, click the `Create Service` button. If not, click `Back` and go back to step 5. 

After that, the shipping information will be displayed on the app's next screen. The shipped orders will be available in the <i class="fas fa-ellipsis-v"></i> > __Completed__ menu. 

