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

* [Picking](#picking)
* [Categories](#categories)
* [Packing](#packing)
* [Orders](#orders)
* [Automation](#automation)
* [Users](#users)
* [Catalog](#catalog)
* [Facilities](#facilities)

## Picking

In this tab, you'll find the settings related to the picking of order items. Here, you can set actions the picker can take during the picking process, including notifying you that an order item is unavailable and suggesting replacements.

![pick-and-pack-separacao-en](//images.ctfassets.net/alneenqid6w5/31IMWfSufilPJHlkU7bLyh/0b5dd839ffadbb4fc7670bae7b6a1e27/image.png)

### Picking Strategy

In this section, you can define the picking strategy types you would like for your pickers.

> ℹ️ Only the **Wave picking** strategy is currently available.

### Order Changes

In this section, you can set actions related to order changes, such as when items are out of stock.

* **Send changes to the OMS:** Allows you to send the changes made by the picker to the [VTEX OMS](https://help.vtex.com/en/tutorial/gerenciamento-de-pedidos-visao-geral--tutorials_201). You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.
* **Allow changing item prices:** Allows the picker to change the item prices from an order. You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.
* **Allow replacing items:** Allows the picker to replace unavailable items from an order. You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.
* **Allow rejecting items:** Allows the picker to reject unavailable items from an order. You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.
* **Allow changing item quantity:** Allows the picker to change the number of items in an order. You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.
* **Allow adding order notes:** Allows the picker to add notes to orders, such as the reason for a price change. You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.
* **Allow adding item notes:** Allows the picker to add notes to items, such as why an item was rejected. You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.
* **Rejection reasons:** Displays the options available for the picker to choose from when rejecting items from an order. The picker can choose as many options as they want.
* **Price change reasons:** Displays the options available for the picker to choose from when changing item prices from an order. The picker can choose as many options as they want.
* **Limit for quantity changes in order items:** Percentage that limits how many items can be changed from an order.
* **Limit for price changes in order items:** Percentage that limits how many item prices can be changed from an order.
* **Total limit for order changes:** Percentage that limits the total number of orders that can be changed.

#### Worksheets

In this section, you can set the options that will be applied to your store worksheets.

* **Allow multiple orders in one worksheet:** Allows adding multiple orders to a worksheet. You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.
* **Enable quick picking:** Allows fast picking and automatic confirmation of product quantities and prices, avoiding the need for manual checks by the picker. You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.
* **Enable express fulfillment:** Allows the express fulfillment option, enabling orders to be picked and packed simultaneously. You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.
* **Allow moving orders after the picking process has started:** Allows editing worksheets even after the picking process has started. You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.
* **Allow moving orders between worksheets:** Allows editing worksheets by moving the added orders between worksheets. You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.
* **Worksheet tags:** Allows adding custom tags to optimize the order-picking process.
* **Enable dynamic EAN codes:** Enables the use of dynamic barcodes, which can be changed based on the product's characteristics, such as weight. You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.

### Onboarding

You can activate the VTEX Pick and Pack app configuration process by following the steps below:

1. Click `Onboarding`.
2. Click `Start`.
3. Select the options you want to set for the app. This setting will only apply to parentAccount.
4. Click `Next`.
5. Select the worksheets to be managed in the app and the number of tabs you want to create.
6. Click `Next`.
7. Activate <i class="fas fa-toggle-on"></i> the sales associates to whom you want the settings to apply.
8. Click `Completed`.
9. Click `Close`.

Click `Save` to save the changes.

## Categories

On this tab, you can configure the order of the categories in which the orders will be picked. This enables the picker to manage the order picking process efficiently.

![pick-pack-categorias-en](//images.ctfassets.net/alneenqid6w5/3BSGR29QrAWbHBRjadYcBE/1399599a366ab0232398093187d11eaa/image.png)

* **Fast configuration**: Applies the settings to all facilities. You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.
* **Facility**: Determines the facility to which the category settings will be applied.

To add a category to the list, click the desired category. To reorder, drag the category to the desired position in the list.

You can import a CSV file or export the already configured list.

## Packing
In this tab, you will find the packing settings for order items.

![pick-pack-empacotamento-en](//images.ctfassets.net/alneenqid6w5/2SbFdooYvZpNL3KDq2gdgK/af91942f280c2312c521db86060c706e/image.png)
* **Allow package reports**: Enables the visualization of the package report, which will be displayed on the Orders screen. You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.
* **Allow automatic packing**: Allows automatic packaging of orders. You can enable <i class="fas fa-toggle-on"></i> or disable <i class="fas fa-toggle-off"></i> this option.

### Configuring package label printing

In this section, you can configure the characteristics of the label that will be attached to the order package. See the available characteristics below:

* **Print package label settings enabled**: Enables or disables the option to edit the label characteristics.
* **Format**: Determines the label format.
* **Font size (px)**: Determines the font size (in pixels) that will be printed on the label.

#### Margins

* **Left**: Size of the label's left margin in millimeters.
* **Right**: Size of the label's right margin in millimeters.
* **Top**: Size of the label's top margin in millimeters.
* **Bottom**: Size of the label's bottom margin in millimeters.

#### Dimensions

* **Width**: Label width in millimeters.
* **Height**: Label height in millimeters.

### Configuring print receipt

In this section, you can configure the order receipt printing characteristics. See the available characteristics below:

* **Print receipt settings enabled**: Enables or disables the option to edit the receipt's characteristics.
* **Format**: Determines the receipt format.
* **Font size (px)**: Determines the font size (in pixels) that will be printed on the receipt.

#### Margins

* **Left**: Size of the receipt's left margin in millimeters.
* **Right**: Size of the receipt's right margin in millimeters.
* **Top**: Size of the receipt's top margin in millimeters.
* **Bottom**: Size of the receipt's bottom margin in millimeters.

#### Dimensions

* **Width**: Receipt width in millimeters.
* **Height**: Receipt height in millimeters.

### Envelopes

In this section, you must add the types of envelopes your store will use to package and ship orders. To add a new envelope, follow these steps:

1. Click `Create`.
2. Complete the fields below:
   * **Name**: Name that will identify the envelope.
   * **Type**: Envelope type. The options are Box, Bag, Envelope, Tape, Paper, and Others.
   * **Description**: Envelope description for internal use.
   * **Code**: Envelope identification code.
   * **Cubic weight**: Envelope [cubic weight](https://help.vtex.com/en/tutorial/como-o-peso-cubado-e-calculado--tutorials_128).
   * **Height**: Envelope height in millimeters.
   * **Length**: Envelope length in millimeters.
   * **Weight**: Envelope weight in millimeters.
   * **Width**: Envelope width in millimeters.
3. Click `Save`.

Click `Save` to save the changes.

## Orders

In this tab, you will find settings for orders processed by VTEX Pick and Pack.

![pick-pack-config-pedidos-en](//images.ctfassets.net/alneenqid6w5/4WY1T4pWaSbvdzA6FqOeGY/557e12764b6dc82064c62cc8e9f6a405/image.png)

* **Download Orders From OMS**: Allows exporting orders from the OMS.
* **Payment methods**: Payment methods used in the orders being exported.
* **Shipping method**: Shipping methods used in the orders being exported.
* **Shipment type**: Shipping types used in the orders being exported.
* **Order tags**: Tags used in the orders being exported.

Click `Save` to save the changes.

## Automation

In this tab, you will find the automation settings for VTEX Pick and Pack processes.

![pick-pack-automacao-en](//images.ctfassets.net/alneenqid6w5/4ymzTYa77AIPdheE0KkgSy/5bdf2473a93291bf2c839415872f4805/image.png)

To create a new automation, follow the steps below:

1. Click `Create`.
2. Complete the __Name__ field with the name of the automation and __Automation for__ with the option you want to automate.
3. Click `Save`.

## Users

In this tab, you can manage users, admins, and pickers from your VTEX Pick and Pack operation. Users with Admin permission will have access to the VTEX Admin and be able to make changes within the tool. Users with Picker permission can only access the VTEX Pick and Pack app.

![pick-pack-usuarios-en](//images.ctfassets.net/alneenqid6w5/1VzckMNHfoiub8sRtreP3p/445bb2e98986273d4fbd0afba11a6310/image.png)

To create a new user, follow the steps below:

1. Click `Create`.
2. Select the permission type you want for your new user: __Admin__ or __Picker__.
3. Add users based on the desired permissions:
  * __Admin__ permission
    1. Select the listed user you want to add as __Admin__.
    2. Click `Create`.
    ![pick-pack-usuarios-2-en](//images.ctfassets.net/alneenqid6w5/1cdVquaWE1X8XIgD7M6tlS/b91e3d2d4268d779b7df0453d8cbf7c1/image.png)
  * __Picker__ permission
    1. Complete the form with the following information:
       * User name
       * Name
       * Email (required)
       * Password (required)
       * Facilities
       * Allow shipping packages
       * Categories
    2. Click `Create`.
    ![pick-pack-usuarios-3-en](//images.ctfassets.net/alneenqid6w5/4PrkthovWlPTX7vzJ1IdAN/5ab7dd935ac929c4c3bd2c2f7feac3af/image.png)

## Catalog

In this tab, you can access information about items in orders that are currently in the shipping stage.

![pick-pack-catalogo-en](//images.ctfassets.net/alneenqid6w5/7bEUt2nvw2xGUKO8WjmkSl/846976dd5b8fab2a93d32264334f9686/image.png)

The page displays the following information in a table:

| Column fields | Description                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| Item          | Product name.                                                                                                 |
| Product ID    | Product identification number.                                                                                |
| SKU           | Product SKU identification number.                                                                            |
| EAN           | Product EAN number.                                                                                           |
| Categories    | Categories in which the product is listed.                                                                    |
| Dimensions    | Product dimensions.                                                                                           |
| Weight        | Product weight.                                                                                               |
| Weighable     | Products that must be weighed to indicate their weight in kilograms or grams, depending on the configuration. |
| Temperature   | Products that must be stored at a minimum temperature to avoid deterioration.                                 |
| Active        | Whether the product is available to customers or not.                                                         |

You can add bulk SKU IDs and EANs for your products via a CSV file. To do this, follow the steps below:

1. Click the `Bulk Upload SKU/EAN` button.
2. Add the file you want to upload.
3. Click `Continue`.

You can also index the catalog to update the product list. To do this, click `Index Catalog` and then `Continue`.

> ❗ Indexing the catalog will delete and recreate all its contents, so you could lose all your custom EAN and SKU codes.

## Facilities

In this tab, you will be able to add and view your store's facilities.

![pick-pack-instalacoes-en](//images.ctfassets.net/alneenqid6w5/4VKy2KHlm4Vdz8oa8lv8VB/3c3a6b90a27abf2d6144ae505a64d46c/image.png)

To create a new facility, follow these steps:

1. Click `Create`.
2. Complete the form with your facility's address. You must complete the __Street__, __City__, and __State__ fields.
3. Click `Save`.
