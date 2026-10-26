---
title: 'VTEX Pick and Pack: Settings'
createdAt: 2024-01-05T20:43:38.480Z
updatedAt: 2026-10-01T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-settings
locale: en
hidden: false
---

> ℹ️ **VTEX Pick and Pack** isn't available in the VTEX Admin by default. To enable the solution in your store, request activation from the VTEX Product Support team.

The **Settings** page in the VTEX Admin allows you to configure VTEX Pick and Pack for your store. The settings are distributed in the following side tabs:

* [Orders](#orders)
* [Worksheets](#worksheets)
* [Items](#items)
* [Automation](#automation)
* [Users](#users)
* [Integration](#integration)

In addition to the **Settings** tabs, Pick and Pack depends on the **Fulfillment locations** page, where you associate warehouses with fulfillment locations. Learn more in [Fulfillment locations](#fulfillment-locations).

## Orders

In this section, you can configure settings for orders processed by VTEX Pick and Pack.

![vtex-pick-and-pack-settings_5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_5.png)

* **Download orders from OMS:** Allows you to download orders from the [VTEX Orders module](https://help.vtex.com/en/docs/tutorials/orders-overview) to Pick and Pack. Orders are only downloaded when the items' warehouse is associated with a [fulfillment location](#fulfillment-locations).

### Filters

> ℹ️ Filters are applied to new orders only. If no filters are set, all orders will be downloaded.

The following filters determine which orders will be downloaded:

* **Payment methods**: Payment methods used in the orders to be downloaded.
* **Shipping methods**: Shipping methods used in the orders to be downloaded.
* **Shipment type**: Shipment types used in the orders to be downloaded (`SHIP_FROM_STORE`, `PICKUP_IN_STORE`, and `DRIVE_THRU`).
* **Order tags**: Restricts the download to orders with specific tags.
* **Sales channels**: [Sales channels](https://help.vtex.com/en/docs/tutorials/how-trade-policies-work) applied to the orders to be downloaded.

### Submit changes to the OMS

This option allows you to submit the changes (replacements, rejections, or adjustments) made to handled orders in the [VTEX Orders module](https://help.vtex.com/en/docs/tutorials/orders-overview). For the changes to be submitted, the order's worksheet must be completed and the order can't have pending picking or packing in the OMS.

### Automatic removal of invoiced orders

On the **Orders** tab, you can define how VTEX Pick and Pack should handle orders that change to **Invoiced** in the Order Management System (OMS) after being downloaded to the app.

To automatically remove invoiced orders from VTEX Pick and Pack, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. On the **Orders** tab, click **General**.
3. In the **If an order becomes Invoiced in the OMS** section, activate the **Remove from Pick and Pack** option.
4. Click `Save`.

With this option activated, VTEX Pick and Pack automatically removes from the app any orders that meet all of the following conditions:

- The order has already been downloaded to VTEX Pick and Pack.
- The order hasn't been processed yet.
- The order changed to **Invoiced** in the OMS before the handling step.

Click `Save` to save the changes made in the tab.

## Worksheets

In this section, you can configure the settings that will be applied to store [worksheets](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-worksheets). A worksheet consists of a single order or a set of orders that will be processed by the Pick and Pack flow simultaneously.

### General

In this tab, you choose how orders are grouped into worksheets and which features are available to the picker. See the available settings below.

![vtex-pick-and-pack-settings_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_2.png)

* **Single order**: Limits each worksheet to a single order.
* **Multi order**: Allows a worksheet to group more than one order.
* **Worksheet tags**: Custom tags that help identify worksheets. Tags can be viewed on the [pending worksheets](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile#pending-worksheets) screen in the Pick and Pack mobile app.
* **Allow worksheet notes**: Enables the picker [to add notes to the worksheet](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile#pending-worksheets).
* **Allow support chat**: Enables a chat between the picker and the merchant through the VTEX Admin.
* **Activate picking list**: List that contains the necessary worksheet information for the picker to pick items. This information can be printed in label format.

#### Label

You can define the information that will be displayed on the picking list, printed, and added to the order package.

* \*\*Size (cm): Print format for the label.
* **Label font size (px)**: Font size in pixels that will be used for printing the label.
* **Left margin:** Size of the label's left margin, in centimeters.
* **Right margin:** Size of the label's right margin, in centimeters.
* **Top margin:** Size of the label's top margin, in centimeters.
* **Bottom margin:** Size of the label's bottom margin, in centimeters.
* **Show order IDs**: Displays order IDs on the label.
* **Separate items by orders**: Allows generating one label per order.
* **Show customer information**: Displays customer information on the label.
* **Show packages barcode/QR code**: Displays the barcode or QR code on the label.
* **Barcode/QR code**: If the **Show package barcode/QR code** option is enabled, you can choose whether the barcode with the order number, the worksheet number, or both will appear on the label.

Click `Save` to save the changes made in the tab.

### Picking

In this tab, you define what the picker can see and do while picking items, such as replacing, rejecting, or changing order items. See the available settings below.

![vtex-pick-and-pack-settings_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_3.png)

* **Show order information tab**: Displays the order information tab to the picker in the worksheet, both in the [VTEX Admin](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-worksheets) and in the [Pick and Pack mobile app](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile#pending-worksheets).
* **Show customer information per order**: Displays the customer information tab to the picker.
* **Allow item notes**: Allows the picker to [add notes to order items during picking](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile#pending-worksheets).
* **Ask confirmation to pick items**: Enables extra validation in the Pick and Pack app, requiring the picker to confirm an item before picking it.
* **Activate approval flow**: Requires admin approval for picking items.
* **Allow adding new SKUs**: Allows the picker to [add new items during picking](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile#add-new-products-to-an-order).
* **Allow item replacements**: Allows the picker to [replace items during picking](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile#replacing-items).
* **Replacement reasons**: Reasons for [item replacement](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile#replacing-items) that the picker will be able to select in the [Pick and Pack mobile app](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile). The replacement reasons you add aren't translated when the picker selects another language in the Pick and Pack mobile app.
* **Allow item rejections**: Allows the picker to [reject items during picking](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile#rejecting-items).
* **Rejection reasons**: Reasons for [rejecting items](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile#rejecting-items) that the picker will be able to select in the [Pick and Pack mobile app](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile). The rejection reasons you add aren't translated when the picker selects another language in the Pick and Pack mobile app.
* **Allow item price changes**: Allows the picker to change the price of items during picking.
* **Price change reasons**: Price change reasons that the picker will be able to select in the [Pick and Pack mobile app](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile). The price change reasons you add aren't translated when the picker selects another language in the Pick and Pack mobile app.
* **Threshold for changes to item prices**: Limit for changes to item price in an order. **100%** is the maximum amount that can be added to the original price when making a change (calculated over the original item price). `-100%` is the minimum.
* **Allow item quantity changes**: Allows the picker to [change the quantity of items during picking](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile#change-product-quantity).
* **Threshold for changes to item quantities**: Quantity change limits for items in an order. 100% is the maximum value that can be added to the original quantity when making a change, calculated over the original item quantity. -100% is the minimum.
* **Limit order total changes**: Limits the changes that a picker can make to the order total. 100% is the maximum amount that can be added to the final order total when making a change, calculated over the original order value. -100% is the minimum.
* **Threshold for total changes to an order**: Maximum number of changes (replacements, rejections, and new items) that can be made to an order.

Click `Save` to save the changes made in the tab.

### Packing

In this section, you'll find the packing settings for order items.

#### General

In this tab, you activate the packing process and configure packaging and packing label options. See the available settings below.

![vtex-pick-and-pack-settings_4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_4.png)![vtex-pick-and-pack-settings_5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_5.png)

* **Activate packing process**: Enables the [packing flow](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile#packing) performed by the picker.
* **Activate packages report**: Allows displaying a report on packages. This option is currently deactivated.
* **Activate packing labels**: Allows generating labels for packing orders and shows the label settings on the page.
* **Packaging options**: Settings for the packaging that will be used during packing. The following options are available:
  - **Measurement system**: Allows selecting between metric and imperial systems for package dimensions and weight.
  - **Update total weight**: Displays a modal in the Pick and Pack app for the picker to enter the total package weight. If deactivated, the modal isn’t displayed, and the packing process starts.
* **Custom packaging**: Displays a form for the picker to enter the dimensions and weight of custom packaging in the Pick and Pack app.
* **No packaging**: Allows using the packaging of the items to ship the order.
  - **Use SKU dimensions and weight**: Uses the SKU dimensions and weight as the dimensions and weight of the packaging. If the SKU doesn't have this information, the custom packaging dimensions and weight form will be displayed.
  - **Enter total dimensions and weight**: Allows entering the item dimensions and weight.
* **Show quantity of packages**: Displays the number of packages on the printed label.
* **Show package barcode/QR code**: Displays a barcode or QR code generated from the information of the **Barcode/QR code** field.
* **Show order information**: Displays order details on the printed label. In the **Orders** field, select the information you want to display.
* **Show customer information**: Displays customer details on the printed label. In the **Customer** field, select the information you want to display.
* **Show shipping information**: Displays shipping details on the printed label. In the **Shipping** field, select the details you want to display.
* **Show items**: Displays order item details on the printed label. In the **Items** field, select the details you want to display.
* **Show picking information**: Displays item picking details on the printed label. In the **Picking** field, select the information you want to display.
* **Size (cm)**: Format in which the label will be printed, in centimeters.
* **Font size (px)**: Font size in pixels that will be used on the printed label.
* **Left margin**: Size of the printed label's left margin, in centimeters.
* **Right margin**: Size of the printed label's right margin, in centimeters.
* **Top margin**: Size of the printed label's top margin, in centimeters.
* **Bottom margin**: Size of the printed label's bottom margin, in centimeters.

Click `Save` to save the changes made in the tab.

#### Packaging types

![vtex-pick-and-pack-settings_6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_6.png)
The page is organized as follows:

| Column                       | Description                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------- |
| Name                         | Name of the packaging.                                                            |
| Description                  | Description with details about the packaging.                                     |
| Code                         | Unique packaging code.                                                            |
| Size (cm) | Packaging size in centimeters.                                                    |
| Type                         | Type of packaging: `Box`, `Bag`, `Envelopes`, `Tape`, or `Paper`. |

To create a new packaging type, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Click the **Packing** tab and then the **Packaging types** tab.
3. Click the `Create packaging type` button.
4. Complete the following fields:
   - **Name**: Name of the packaging type.
   - **Type**: Type of packaging, which can be `Box`, `Bag`, `Envelopes`, `Tape`, or `Paper`.
   - **Description**: Description with details about the packaging.
   - **Code**: Unique code for the packaging.
   - **Length**: Package length in centimeters.
   - **Height**: Package height in centimeters.
   - **Width**: Package width in centimeters.
   - **Max weight**: Maximum weight supported by the packaging.
5. Click `Save`.

To edit a packaging type, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Click the **Packing** tab and then the **Packaging types** tab.
3. Click the <i class="fas-solid fa-ellipsis-vertical" aria-hidden="true"></i> menu for the packaging type you want to edit.
4. Click <i class="fas fa-pencil"></i> `Edit`.
5. Edit the information of the packaging type.
6. Click `Save`.

To duplicate a packaging type, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Click the **Packing** tab and then the **Packaging types** tab.
3. Click the <i class="fas-solid fa-ellipsis-vertical" aria-hidden="true"></i> menu for the packaging type you want to duplicate.
4. Click <i class="fas fa-copy"></i> `Duplicate`.
5. Click `Confirm`.

To delete a packaging type, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Click the **Packing** tab and then the **Packaging types** tab.
3. Click the <i class="fas-solid fa-ellipsis-vertical" aria-hidden="true"></i> menu for the packaging type you want to delete.
4. Click `Delete` <i class="fas fa-trash" aria-hidden="true"></i>.
5. Click `Confirm`.

## Items

In this section, you'll find the item settings displayed in the VTEX Pick and Pack mobile app.

### General

In this tab, you can define the item details that will be shown in the mobile app and add other information to help the picker locate items.

![vtex-pick-and-pack-settings_15](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_15.png)

* **Item card data in picking app**: Information about the products that will be displayed on the item card in the [Pick and Pack mobile app](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile).
* **Activate item transfer**: Allows fulfilling an item from a location other than the originally specified fulfillment location. This feature is in testing and may show inconsistencies during use.
* **Activate item location**: Assigns a unique code to each SKU to make it easier to locate items in the store or warehouse. For more information about this setting, see the [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Codes**: Item location code. For more information about this setting, see the [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Example**: Field that allows you to preview how the location code will be generated. For more information about this setting, see [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Separator**: Symbol that will separate each section of information in the location code. For more information about this setting, see the [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Assign product brands to**: Defines the space (BIN, zone, section, or aisle) where brands will be located. For more information about this setting, see [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Assign product categories to**: Defines the space (BIN, zone, section, or aisle) where categories will be located. For more information about this setting, see the [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Activate dynamic barcodes**: When activated <i class="fas fa-toggle-on" aria-hidden="true"></i>, allows generating EANs based on the item's price, weight, or quantity.
* **Dynamic barcode types**: Specifies whether dynamic barcodes are based on price, weight, or item quantity. After selecting the barcode type, complete the fields with the numeric values of the code.

Dynamic EANs based on price, weight, and quantity use the following formats:

| Type     | Format                           | Conversion                                                                            | Example            |
| ---------- | ------------------------------------- | -------------------------------------------------------- | ------------------ |
| Price    | `Digit-Item-Price-CheckDigit`    | A price of $12.90 is converted to the digits `01290`. | `20-01234-01290-1` |
| Weight   | `Digit-Item-Weight-CheckDigit`   | A weight of 200 g is converted to the digits `00200`.                 | `20-01234-00200-1` |
| Quantity | `Digit-Item-Quantity-CheckDigit` | A quantity of 5 units is converted to the digits `00005`.             | `20-01234-00005-1` |

### Categories

In this tab, you can organize the product category hierarchy that'll be displayed in the mobile app. The configured list is used to sort items when picking using the Pick and Pack mobile app.

![vtex-pick-and-pack-settings_13](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_13.png)

* **All fulfillment locations**: Defines the fulfillment locations where the categories are available. If there are differences between the selected fulfillment locations, a warning is displayed indicating that the new setting will replace existing settings.
* **Available categories**: Full category tree from the catalog. When you select fulfillment locations, previously saved categories are loaded.

To define the available categories for a fulfillment location, follow the steps below:

1. Click `Change selected fulfillment locations` and select the ones you want to edit.
2. In the list, click the categories you want to include in the fulfillment locations. You can search using the category name up to three levels in the tree.
3. To sort the list, click the drag icon <i class="fas fa-grip-vertical" aria-hidden="true"></i> of a category and drag it to the desired position.
4. Click `Save` to finish.

To remove a selected category, click the delete icon <i class="fas fa-trash" aria-hidden="true"></i>.

To export the information of the categories that will be displayed in the [Pick and Pack mobile app](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile), follow these steps:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Click the **Categories** tab.
3. Click the categories you want to export.
4. After selecting them, click `Export`. A CSV file will be downloaded that contains the following information:

```csv
category_id,name,priority
6,Food,10
```

* `category_id`: Category ID.
* `name`: Category name.
* `priority`: Priority in the category sort order displayed in the mobile app.

To import information for the selected categories that will be displayed in the [Pick and Pack mobile app](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile), follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Click the **Categories** tab.
3. Click `Import`.
4. Select the CSV file from your computer. The CSV file must have the columns `category_id`, `name`, and `priority`.
5. Make sure the information is correct.
6. Click `Replace`.

### Catalog

In this tab, you can bulk update and index the catalog available in the [Pick and Pack mobile app](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile).

> ℹ️ During the initial Pick and Pack setup, bulk update the catalog first and then index it.

> ⚠️ The Pick and Pack catalog is a copy of the [VTEX catalog](/en/docs/tutorials/catalog-overview). Changes to products, SKUs, EANs, categories, dimensions, or weight in the VTEX catalog aren't applied automatically. Until the catalogs are synced, the mobile app and picking use the Pick and Pack catalog, which may differ from the VTEX catalog. To sync both catalogs, follow the [catalog indexing](#indexing-the-catalog) procedure.

![vtex-pick-and-pack-settings_15](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_15.png)

The page is organized as follows:

| Column      | Description                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------- |
| Item        | Product name                                                                                                       |
| ID          | Product ID                                                                                                         |
| SKU         | SKU ID                                                                                                             |
| EAN         | EAN number                                                                                                         |
| Categories  | Categories the product belongs to                                                                                  |
| Dimensions  | Product dimensions in centimeters                                                                                  |
| Weight      | Product weight                                                                                                     |
| Weighable   | Indicates if the product varies in weight, like fruit, or has a fixed weight.                      |
| Temperature | Product storage temperature. This information is only displayed in the VTEX Admin. |
| Active      | Indicates whether the product is active in the mobile app catalog.                                 |

Bulk update edits Pick and Pack catalog fields using a CSV file. To bring in changes made to the VTEX catalog, use `Index catalog`.

To edit items in bulk, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Under **Items**, click the **Catalog** tab.
3. Click `Bulk upload`.
4. Click `Download template`.
5. Complete the template with the item information.
6. Click `Choose file` and select the edited template that has the new information.
7. Click `Continue`.
8. Check for errors in the CSV. If there are any, correct them and re-upload the file.
9. Click `Continue`.

To edit an item, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Under **Items**, click the **Catalog** tab.
3. Click the item you want to edit.
4. Edit the item information:

   ![vtex-pick-and-pack-settings_14](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_14.png)

   - **EAN codes**
   - **SKU codes**
   - Temperature
5. Click `Save`.

#### Indexing the catalog

To sync the Pick and Pack catalog with the VTEX catalog, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Under **Items**, click the **Catalog** tab.
3. Click `Index catalog`.
4. Click `Continue`.
5. Click `OK` to finish.

## Automation

In this section, you'll find the process automation settings for **VTEX Pick and Pack**. Automations are an event-driven rule mechanism: you define the conditions, and the system automatically executes the actions when they're met. These rules can be applied to orders, worksheets, and shipping services.

### Worksheets

In this tab, you can configure worksheet automations.

![vtex-pick-and-pack-settings_10](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_10.png)

To create a new automation, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Under **Automation**, click the **Worksheets** tab.
3. Click `New`.
4. Complete the fields below:
   - **Active**: Activates the worksheet automation.
   - **Automation name**: Descriptive name for the automation.
   - **When this happens**: Condition that triggers the automation.
   - **Do this**: Action applied by the automation.
5. Click `+ Add another action` to implement additional actions.
6. Click `Create` to finish.

To update or delete an automation, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Under **Automation**, click the **Worksheets** tab.
3. Click the automation you want to edit.
4. Click `Update` to save the changes or click `Delete` to delete the automation.

### Orders

In this tab, you can configure order automations.

![vtex-pick-and-pack-settings_11](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_11.png)

To create a new automation, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Under **Automation**, click the **Orders** tab.
3. Click `New`.
4. Complete the fields below:
   - **Active**: Activates the order automation.
   - **Automation name**: Descriptive name for the automation.
   - **When this happens**: Condition that triggers the automation.
   - **Do this**: Action applied by the automation.
5. Click `+ Add another action` to implement additional actions.
6. Click `Create` to finish.

To update or delete an automation, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Under **Automation**, click the **Orders** tab.
3. Click the automation you want to edit.
4. Click `Update` to save the changes or click `Delete` to delete the automation.

### Shipping services

In this section, you can configure shipping automations.

![vtex-pick-and-pack-settings_12](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_12.png)

To create a new automation, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Under **Automation**, click the **Shipping services** tab.
3. Click `New`.
4. Complete the fields below:
   - **Active**: Activates the shipping automation.
   - **Automation name**: Descriptive name for the automation.
   - **When this happens**: Condition that triggers the automation.
   - **Do this**: Action applied by the automation.
5. Click `+ Add another action` to implement additional actions.
6. Click `Create` to finish.

To update or delete an automation, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Under **Automation**, click the **Shipping services** tab.
3. Click the automation you want to edit.
4. Click `Update` to save the changes or click `Delete` to delete the automation.

## Users

In this section, you can manage the pickers in your VTEX Pick and Pack operation. Users with **Picker** permissions can only access the VTEX Pick and Pack app.

![vtex-pick-and-pack-settings_7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_7.png)

To create a new user, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Under **Users**, click the **Pickers** tab.
3. Click `Create user`.
4. Complete the form fields:
   - **Username**: Username of the picker.
   - **Name**: Picker name.
   - **Email**: Login email of the picker.
   - **Password**: Login password of the picker.
5. Select the picker's [fulfillment location](#fulfillment-location).
6. Click `Create user`.

To edit or delete a user, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Under **Users**, click the **Pickers** tab.
3. Click the picker you want to edit or delete.
4. Edit the information you want to change.
5. Click `Update` to save the changes or `Delete` to delete the user.

### Accessing VTEX Pick and Pack in the VTEX Admin

Pickers created in this tab can only access the mobile app. Users who need to monitor the operation in the **VTEX Admin** require [roles](/en/docs/tutorials/roles) and [License Manager resources](/en/docs/tutorials/license-manager-resources), and are not managed in this tab.

We recommend creating a role dedicated to the fulfillment operation and assigning it to the users responsible for it. For these users to view the [Insights](/en/docs/tutorials/vtex-pick-and-pack-insights) page, the role must include the **Insights Metrics** resource from the **Insights** product.

## Fulfillment locations

Fulfillment locations aren't part of the **Settings** tabs. They're managed on a separate VTEX Admin page, **Shipping > Pick and Pack > Fulfillment locations**.

A fulfillment location is where orders are picked, such as a physical store or a distribution center. A [warehouse](/en/docs/tutorials/managing-warehouses) is the VTEX logistics location where items are stored.

A fulfillment location can have more than one associated warehouse.

> ⚠️ Orders only enter Pick and Pack when the items' warehouse is associated with a fulfillment location. A warehouse without a fulfillment location keeps these orders out of Pick and Pack, even if the **Download orders from OMS** option is activated. If an order has items from a warehouse without a fulfillment location, the automation that adds the order to a worksheet fails.

Orders from all warehouses associated with the same fulfillment location are processed in that fulfillment location. Worksheets, the mobile app, the [Insights](/en/docs/tutorials/vtex-pick-and-pack-insights) page, picker assignment, categories, and webhooks are filtered by fulfillment location use; that fulfillment location is therefore considered, and all warehouses associated with it are included.

## Integration

In this section, you can configure integrations with the [Pick and Pack mobile app](https://help.vtex.com/en/docs/tutorials/vtex-pick-and-pack-mobile).

### Webhook

In this section, you can configure webhooks for the mobile app. Webhooks are automatic notifications that Pick and Pack sends to a URL whenever there's a change in the flow, such as invoicing an order or updating a worksheet status.

The system gathers event information, such as order ID, current and previous status, date, and other details, and sends everything to the configured address. You can also limit notifications by [facility](#facilities). In that case, the webhook is only triggered for events related to the selected units.

![vtex-pick-and-pack-settings_8](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_8.png)

To create a new webhook, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Under **Integration**, click the **Webhook** tab.
3. Click `New`.
4. Complete the form fields:
   - **Active**: Activates the webhook.
   - **Type**: Webhook method. The event types that can trigger notifications are:
     - `INVOICING`: The order is invoiced.
     - `ORDER_STATUS`: The order status changes.
     - `WORKSHEET_STATUS`: The worksheet status changes.
     - `RETURN_STATUS`: The return status changes.
   - **URL**: Webhook URL.
   - **Headers**: Webhook headers.
   - **Params**: Webhook parameters.
   - **Where will this apply (fulfillment locations)**: Fulfillment locations the webhook will apply to.
5. Click `Create`.

To edit or delete a webhook, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. Under **Integration**, click the **Webhook** tab.
3. Click the webhook you want to edit.
4. Edit the webhook information.
5. Click `Update` to save the changes or `Delete` to delete the webhook.

### API key

In this tab, you can generate an API key to use the JSON Web Token (JWT) authentication endpoints of the [Pick and Pack API](https://developers.vtex.com/docs/api-reference/pick-and-pack-api#post-/token) and the [Pick and Pack Last Mile Protocol API](https://developers.vtex.com/docs/api-reference/pick-and-pack-protocol-api#post-/token).

![vtex-pick-and-pack-settings_9](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_9.png)

To generate a new API key, click `Generate`.
