---
title: 'VTEX Pick and Pack: Settings'
id: 16cs3e7hWk7c4cSZqe10O9
status: PUBLISHED
createdAt: 2024-01-05T20:43:38.480Z
updatedAt: 2024-01-09T18:30:22.578Z
publishedAt: 2024-01-09T18:30:22.578Z
firstPublishedAt: 2024-01-09T16:30:00.192Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-settings
legacySlug: vtex-pick-and-pack-settings
locale: en
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

> ℹ️ This feature is in closed beta, so only selected customers can access it now. If you want to implement it in the future, please complete our [form](https://vtex.com/us-en/contact/) apontaby entering the product name in the `Comments` field.

**Settings** is a VTEX Admin page that allows you to select the VTEX Pick and Pack settings for your store. The settings are distributed in the following tabs:

- [Orders](#orders)
  - [Filters](#filters)
- [Worksheets](#worksheets)
  - [General](#general)
  - [Label](#label)
  - [Picking](#picking)
- [Packing](#packing)
  - [General](#general-1)
  - [Packaging types](#packaging-types)
- [Items](#items)
  - [General](#general-2)
  - [Categories](#categories)
  - [Catalog](#catalog)
- [Automation](#automation)
  - [Worksheets](#worksheets-1)
  - [Orders](#orders-1)
  - [Shipping services](#shipping-services)
- [Users](#users)
- [Integration](#integration)
  - [Webhook](#webhook)
  - [API key](#api-key)

## Orders

In this section, you can configure settings for orders processed by VTEX Pick and Pack.

![vtex-pick-and-pack-settings_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_1.png)

- **Download orders from OMS**: Allows exporting orders from the VTEX Orders module.

>ℹ️ The filters below only apply to new orders placed after the export. If no filters are set, all orders will be downloaded.

### Filters

The following filters determine which orders will be downloaded:

- **Payment methods**: Payment methods used in the orders being exported.
- **Shipping method**: Shipping methods used in the orders being exported.
- **Shipment type**: Shipping types used in the orders being exported (`SHIP_FROM_STORE`, `PICKUP_IN_STORE`, or `DRIVE_THRU`).
- **Order tags**: Restricts the download to orders that have certain tags.
- **Trade policies**: [Trade policies](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) applied to the orders being exported.
- **Submit changes to OMS**: Allows submitting the changes (replacements, rejections, or modifications) made to the handled orders to the [VTEX Orders module](https://help.vtex.com/en/tutorial/gerenciamento-de-pedidos-visao-geral--tutorials_201). Orders must have their worksheet completed and no items pending picking or packing in the OMS to be valid in this filter.

Click `Save` to save the changes in the section.

## Worksheets

In this section, you can configure the settings that will be applied to store [worksheets](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-ordens-de-servico--7bUwvmTY6eOqxzhyMIIzvz). A worksheet consists of a single order or a set of orders that will be processed by the Pick and Pack flow simultaneously.

### General

![vtex-pick-and-pack-settings_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_2.png)

- **Single order**: Limits each worksheet to a single order.
- **Multi order**: Allows a worksheet to group more than one order.
- **Worksheet tags**: Custom tags that help identify worksheets. Tags can be viewed on the [pending worksheets](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#ordens-de-servico-pendentes) screen in the Pick and Pack mobile app.
- **Allow worksheet notes**: Enables the picker [to add notes to the worksheet](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#ordens-de-servico-pendentes).
- **Allow support chat**: Enables a chat between the picker and the merchant through the VTEX Admin.
- **Enable picking list**: List that contains the necessary worksheet information for the picker to pick items. This information can be printed in label format.

### Label

You can define the information that will be displayed on the picking list, printed, and added to the order package.

- **Size (in)**: Print format for the label.
- **Font size (px)**: Font size in pixels that will be used for printing the label.
- **Margin left**: Size of left label margin in millimeters.
- **Margin right**: Size of the right label margin in millimeters.
- **Margin top**: Size of top label margin in millimeters.
- **Margin bottom**: Size of bottom label margin in millimeters.
- **Show order IDs**: Displays order IDs on the label.
- **Separate items by orders**: Allows generating one label per order.
- **Show customer information**: Displays customer information on the label.
- **Show package barcode / QR**: Displays the barcode or QR code on the label.
- **Barcode / QR**: If the **Show package barcode / QR** option is enabled, this allows choosing whether the barcode with the order number, the worksheet number, or both will appear on the label.

Click `Save` to save the changes in the section.

### Picking

![vtex-pick-and-pack-settings_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_3.png)

- **Show order information tab**: Displays the order information tab to the picker in the worksheet, both in the [VTEX Admin](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-ordens-de-servico--7bUwvmTY6eOqxzhyMIIzvz) or in the [Pick and Pack mobile app](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#ordens-de-servico-pendentes).
- **Show customer information per order**: Displays the customer information tab to the picker.
- **Allow item notes**: Allows the picker to [add notes to order items during picking](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#ordens-de-servico-pendentes).
- **Ask confirmation to pick items**: Enables extra validation in the Pick and Pack app that requires the picker to confirm an item when picking it.
- **Activate approval flow**: Requires admin approval for picking items.
- **Allow adding items**: Allows the picker to [add new items during picking](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#adicionar-novos-produtos-a-um-pedido).
- **Allow item replacements**: Allows the picker to [replace items during picking](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#substituir-itens).
- **Replacement reasons**: Reasons for [item replacement](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#substituir-itens) that the picker will be able to select in the [Pick and Pack mobile app](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet). The replacement reasons you add aren't translated when the picker selects another language in the Pick and Pack mobile app.
- **Allow item rejections**: Allows the picker to [reject items during picking](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#recusar-itens).
- **Rejection reasons**: Reasons for [rejecting items](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#recusar-itens) that the picker will be able to select in the [Pick and Pack mobile app](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet). The rejection reasons you add aren't translated when the picker selects another language in the Pick and Pack mobile app.
- **Allow item price changes**: Allows the picker to change the price of items during picking.
- **Price change reasons**: Price change reasons that the picker will be able to select in the [Pick and Pack mobile app](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet). The price change reasons you add aren't translated when the picker selects another language in the Pick and Pack mobile app.
- **Threshold for changes to item price**: Limit for changes to item price in an order. **100%** is the maximum amount that can be added to the original price when making a change (calculated over the original item price). `-100%` is the minimum.
- **Allow item quantity changes**: Allows the picker to [change the quantity of items during picking](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#alterar-a-quantidade-de-um-produto).
- **Threshold for changes to item quantity**: Quantity change limits for items in an order. **100%** is the maximum value that can be added to the original quantity when making a change (calculated over the original item quantity). `-100%` is the minimum.
- **Limit order total changes**: Limits the changes that a picker can make to the order total. **100%** is the maximum amount that can be added to the final order total when making a change (calculated from the original order value). `-100%` is the minimum.
- **Threshold for total changes to an order**: Maximum number of changes (replacements, rejections, and new items) that can be made to an order.

Click `Save` to save the changes in the section.

## Packing

In this section, you'll find the packing settings for order items.

### General

![vtex-pick-and-pack-settings_4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_4.png)

![vtex-pick-and-pack-settings_5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_5.png)

- **Enable packing process**: Enables the [packing flow](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#empacotamento) performed for the picker.
- **Enable packages report**: Enables displaying a report about the packages. This option is currently disabled.
- **Enable packing labels**: Enables generating labels for packing orders and shows the label settings on the page.
- **Packaging options**: Settings for the packaging that will be used during packing. The following options are available:
  - **Measurement system**: Allows selecting between metric or imperial system for package dimensions and weight.
  - **Update total weight**: Displays a modal in the Pick and Pack app for the picker to enter the total package weight. If disabled, the modal is not shown and the packing process is started.
- **Custom packaging**: Displays a form for the picker to enter the dimensions and weight of custom packaging in the Pick and Pack app.
- **No packaging**: Allows using the packaging of the items to ship the order.
  - **Use SKU dimensions and weight**: Uses the SKU dimensions and weight as the dimensions and weight of the packaging. If the SKU doesn't have this information, the custom packaging dimensions and weight form will be displayed.
  - **Enter total dimensions/weight**: Allows entering the item dimensions and weight.
- **Show quantity of packages**: Displays the number of packages on the printed label.
- **Show package barcode/QR code**: Displays a barcode or QR code generated from the information of the **Barcode/QR code** field.
- **Show order information**: Displays order details on the printed label. In the **Orders** field, select the information you want to display.
- **Show customer information**: Displays customer details on the printed label. In the **Customer** field, select the information you want to display.
- **Show shipping information**: Displays shipping details on the printed label. In the **Shipping** field, select the details you want to display.
- **Show items**: Displays order item details on the printed label. In the **Items** field, select the details you want to display.
- **Show picking information**: Displays item picking details on the printed label. In the **Picking** field, select the information you want to display.
- **Size (in)**: Format for printing the invoice in inches.
- **Font size (px)**: Font size that will be used on the printed label in pixels.
- **Margin left**: Size of the printed label left margin in millimeters.
- **Margin right**: Size of the right margin of the printed label in millimeters.
- **Margin top**: Size of the top margin of the printed label in millimeters.
- **Margin bottom**: Size of the bottom margin of the printed label in millimeters.

Click `Save` to save the changes in the section.

### Packaging types

![vtex-pick-and-pack-settings_6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_6.png)

This page is organized as follows:

| Column       | Description                                      |
| ------------ | ------------------------------------------------ |
| **Name**     | Name of the packaging.                           |
| **Description** | Description with details about the packaging. |
| **Code**     | Unique packaging code.                           |
| **Size (in)**| Packaging size in inches.                        |
| **Type**     | Type of packaging: `Box`, `Bag`, `Envelopes`, `Tape`, or `Paper`. |

To create a new packaging type, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. Click the **Packing** section and then the **Packaging types** tab.
3. Click the `Create packaging type` button.
4. Complete the following fields:
   - **Name**: Name of the packaging type.
   - **Type**: Type of packaging, which can be `Box`, `Bag`, `Envelopes`, `Tape`, or `Paper`.
   - **Description**: Description with details about the packaging.
   - **Code**: Unique code for the packaging.
   - **Length**: Package length in centimeters.
   - **Height**: Package height in centimeters.
   - **Width**: Package width in centimeters.
   - **Max weight**: Maximum weight of the packaging.
5. Click `Save`.

To edit a packaging type, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. Click the **Packing** section and then the **Packaging types** tab.
3. Click <i class="fas-solid fa-ellipsis-vertical"></i> for the packaging type you want to edit.
4. Click <i class="fas fa-pencil"></i> `Edit`.
5. Edit the information of the packaging type.
6. Click `Save`.

To duplicate a packaging type, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. Click the **Packing** section and then the **Packaging types** tab.
3. Click <i class="fas-solid fa-ellipsis-vertical"></i> for the packaging type you want to duplicate.
4. Click <i class="fas fa-copy"></i> `Duplicate`.
5. Click `Confirm`.

**To delete a packaging type, follow the steps below:**

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. Click the **Packing** section and then the **Packaging types** tab.
3. Click <i class="fas-solid fa-ellipsis-vertical"></i> for the packaging type you want to delete.
4. Click <i class="fas fa-trash"></i> `Delete`.
5. Click `Confirm`.

## Items

In this section, you'll find the item settings displayed in the VTEX Pick and Pack mobile app.

### General

In this section, you can define the item details that will be shown in the mobile app and add other information to help the picker locate items.

![vtex-pick-and-pack-settings_15](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_15.png)

- **Item card information in picking app**: Information about the products that will be displayed on the item card in the [Pick and Pack mobile app](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet).
- **Enable item transfer**: Allows fulfilling an item from a location different from the facility that was originally specified.
- **Enable item location**: Assigns a unique code to each SKU to facilitate locating items in the store or warehouse. For more information about this setting, check [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-).
- **Codes**: Item location code. For more information about this setting, check [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-).
- **Example**: Field that lets you preview how the location code will be generated. For more information about this setting, check [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-).
- **Separator**: Symbol that will separate each section of information in the location code. For more information about this setting, check [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-).
- **Assign product brands to**: Defines the space (**BIN**, zone, section, or aisle) that brands will be in. For more information about this setting, check [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-).
- **Assign product categories to**: Defines the space (**BIN**, zone, section, or aisle) that categories will be in. For more information about this setting, check [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-).
- **Enable dynamic barcodes**: When enabled `<i class="fas fa-toggle-on"></i>`, allows generating EANs based on:

  | **Price**|**Weight**|
  | --- | --- |
  | Format: `Digit-Item-Price-CheckDigit` <br>If the price is $12.90, the digits are converted as `01290`. <br>Example: `20-01234-01290-1` | Format: `Digit-Item-Weight-CheckDigit` <br>If the weight is 200 g, the digits are converted ass `00200`. <br>Example: `20-01234-00200-1` |

- **Dynamic barcode types**: Defines whether the dynamic barcodes will be based on price, weight, or item quantity. After selecting the barcode type, complete the fields with the numeric values of the code.

### Categories

In this section, you will define the product category hierarchy that will be displayed in the mobile app. The configured list is used to sort items when picking using the Pick and Pack mobile app.

![vtex-pick-and-pack-settings_13](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_13.png)

- **All facilities**: Defines the facilities that will have the categories available. If there are differences between the selected facilities, a warning is displayed indicating that the new setting will replace existing settings.
- **Available categories**: Full category tree from the catalog. When you select facilities, categories that were previously saved are loaded.

To define the available categories for a facility, follow the steps below:

1. Click `Change selected facilities` and select the facilities you want to edit.
2. In the list, click the categories you want to include in the facilities. You can search using the category name up to three levels in the tree.
3. Click <i class="fas fa-grip-vertical"></i> and drag a category to sort the list as desired.
4. Click `Save`.
  
To remove a selected category, click <i class="fas fa-trash"></i>.

To export the information of the categories that will be displayed in the [Pick and Pack mobile app](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet), follow these steps:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. Click the **Categories** section.
3. Click the categories you want to export.
4. After selecting them, click `Export`. A CSV file will be downloaded that contains the following information:

```csv
category_id,name,priority
6,Food,10
```

- `category_id`: Category ID.
- `name`: Category name.
- `priority`: Priority in the category sort order displayed in the mobile app.

To import information for the selected categories that will be displayed in the [Pick and Pack mobile app](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet), follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. Click the **Categories** section.
3. Click `Import`.
4. Select the CSV file from your computer. The CSV file must have the columns `category_id`, `name`, and `priority`.
5. Make sure the information is correct.
6. Click `Replace`.

### Catalog

In this section, you can **bulk update** and **index the catalog** that will be available in the Pick and Pack mobile app.

>ℹ️ During the initial Pick and Pack setup, you need to **bulk update** the catalog and **index** it.

The page is organized as follows:

| Column        | Description|
| ------------- | --------- |
| **Item**      | Product name. |
| **ID**        | Product ID.|
| **SKU**       | SKU ID.|
| **EAN**       | EAN number.|
| **Categories**| Categories the product belongs to.|
| **Dimensions**| Product dimensions.|
| **Weight**    | Product weight.|
| **Weighable** | Indicates if the product varies in weight, like fruit, or has a fixed weight.|
| **Temperature** | Product storage temperature. This information is only displayed in the VTEX Admin. |
| **Active**    | Indicates whether the product is active in the mobile app catalog.          |

To edit items in bulk, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. Under **Items**, click the **Catalog** section.
3. Click `Bulk update`.
4. Click `Download template`.
5. Complete the template with the item information.
6. Click `Choose file` and select the edited template that has the new information.
7. Click `Continue`.
8. Check for errors in the CSV. If there are any, correct them and re-upload the file.
9. Click `Continue`.

To edit an item, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. Under **Items**, click the **Catalog** section.
3. Click the item you want to edit.
4. Edit the item information:

    ![vtex-pick-and-pack-settings_14](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_14.png)

   - **EAN codes**
   - **SKU codes**
   - **Temperature**

5. Click `Save`.

To index the updates to the items, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. Under **Items**, click the **Catalog** section.
3. Click `Index catalog`.
4. Click `Continue`.
5. Click `OK` to finish.

## Automation

In this section, you'll find the automation settings for VTEX Pick and Pack processes. Automations are a rule-based mechanism triggered by events in which conditions are defined and the system automatically performs actions when they are met. These rules can be applied to orders, worksheets, and shipping services.

### Worksheets

In this section, you can configure worksheet automations.

![vtex-pick-and-pack-settings_10](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_10.png)

To create a new automation, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. Under **Automation**, click the **Worksheets** section.
3. Click `New`.
4. Complete the fields below:
   - **Active**: Activates the worksheet automation.
   - **Automation name**: Descriptive name for the automation.
   - **When this happens**: Condition that triggers the automation.
   - **Do this**: Action applied by the automation.
   - Click `+ Add another action` to implement additional actions.
5. Click `Create` to finish.

To update or delete an automation, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. Under the **Automation** section, click **Worksheets**.
3. Click the automation you want to edit.
4. Click `Update` to save the changes or click `Delete` to delete the automation.

### Orders

In this section, you can configure order automations.

![vtex-pick-and-pack-settings_11](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_11.png)

To create a new automation, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. In the **Automation** section, click **Orders**.
3. Click `New`.
4. Complete the fields below:
   - **Active**: Activates the order automation.
   - **Automation name**: Descriptive name for the automation.
   - **When this happens**: Condition that triggers the automation.
   - **Do this**: Action applied by the automation.
   - Click `+ Add another action` to implement additional actions.
5. Click `Create` to finish.

To update or delete an automation, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. In **Automation**, click the **Orders** section.
3. Click the automation you want to edit.
4. Click `Update` to save the changes or click `Delete` to delete the automation.

### Shipping services

In this section, you can configure shipping automations.

![vtex-pick-and-pack-settings_12](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_12.png)

To create a new automation, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. In **Automation**, click the **Shipping services** section.
3. Click `New`.
4. Complete the fields below:
   - **Active**: Activates the shipping automation.
   - **Automation name**: Descriptive name for the automation.
   - **When this happens**: Condition that triggers the automation.
   - **Do this**: Action applied by the automation.
   - Click `+ Add another action` to implement additional actions.
5. Click `Create` to finish.

To update or delete an automation, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. In **Automation**, click the **Shipping services** section.
3. Click the automation you want to edit.
4. Click `Update` to save the changes or click `Delete` to delete the automation.

## Users

In this section, you can manage the pickers in your VTEX Pick and Pack operation. Users with **Picker** permissions can only access the VTEX Pick and Pack app.

![vtex-pick-and-pack-settings_7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_7.png)

To create a new user, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. In the **Users** section, click **Pickers**.
3. Click `Create user`.
4. Complete the form fields:
   - **Username**: Username of the picker.
   - **Name**: Picker name.
   - **Email**: Login email of the picker.
   - **Password**: Login password of the picker.
   - Select the facility where the picker is located.
5. Click `Create user`.

To edit or delete a user, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. In the **Users** section, click **Pickers**.
3. Click the picker you want to edit or delete.
4. Edit the information you want to change.
5. Click `Update` to save the changes or `Delete` to delete the user.

## Integration

In this section, you can set up integrations with the Pick and Pack mobile app.

### Webhook

In this section, you can set up webhooks for the mobile app. Webhooks work as an automatic notification that Pick and Pack sends to a URL every time there's a change in the flow, such as invoicing an order or a worksheet status update.

The system gathers event information, such as order ID, current and previous status, date, and other details, and sends everything to the configured address. You can also limit notifications by facility. In that case, the webhook is only triggered for events related to the selected units.

![vtex-pick-and-pack-settings_8](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_8.png)

To create a new webhook, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. In **Integration**, click the **Webhook** section.
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
   - **Where will this apply (facilities)**: Facilities the webhook will apply to.
5. Click `Create`.

To edit or delete a webhook, follow the steps below:

1. In VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or search for **Settings** in the search bar.
2. In **Integration**, click the **Webhook** section.
3. Click the webhook you want to edit.
4. Edit the webhook information.
5. Click `Update` to save the changes or `Delete` to delete the webhook.

### API key

In this section, you can generate an API key to use the JWT authentication endpoints for the Pick and Pack API and the Pick and Pack Last Mile Protocol API.

![vtex-pick-and-pack-settings_9](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-settings_9.png)

To generate a new API key, click `Generate`.
