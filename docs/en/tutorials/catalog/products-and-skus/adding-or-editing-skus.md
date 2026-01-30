---
title: 'Adding or editing SKUs'
id: 4ryZ6J45kwn3jDiQBxGiiN
status: PUBLISHED
createdAt: 2024-08-29T19:24:29.305Z
updatedAt: 2026-01-30T22:21:13.931Z
publishedAt: 2025-07-28T22:21:13.931Z
firstPublishedAt: 2024-08-29T19:28:11.129Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: adding-or-editing-skus
legacySlug: adding-skus-beta
locale: en
subcategoryId: pwxWmUu7T222QyuGogs68
---

The [Products and SKUs](/en/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By) page allows merchants to manage existing products and variations or add new ones. This article describes how to add or edit SKUs. For information on products, see [Adding or editing products](/en/tutorial/adding-or-editing-products--29IkdEu6GofCFlltsZh2H8).

Every new SKU must be linked to a product. Once the product is created, follow the steps below to add a new SKU:

1. In the VTEX Admin, go to **Catalog > Products and SKUs**, or type **Products and SKUs** in the search bar at the top of the page.
2. Click the row of the desired product.
3. Click the **SKUs** tab.
4. Click the add icon + to **open the options to add SKUs**.
5. Click `Add new SKU`.

  > ℹ️ You can create a new SKU from an existing one within a product. To do this, on the SKUs tab, click the **SKU menu icon > Duplicate > Save**.

6. Complete the fields on the SKU form as described in the sections:

    * [Name and status](#name-and-status)
    * [Specifications](#specifications)
    * [Media](#media)
    * [Identifiers](#identifiers)
    * [Logistics](#logistics)
    * [Commercial strategy](#commercial-strategy)
    * [Customizations](#customizations)
    * [Cross-sell and up-sell recommendations](#cross-sell-and-up-sell-recommendations)
    * [Attributes](#attributes)

    > Required fields are marked with an asterisk (*).

7. Click `Save`.

> ❗ You can deactivate a SKU after creating it, but you can't delete a single SKU. The platform only allows bulk deletion of products and SKUs via [Database Maintenance (Full Cleanup)](/en/tutorial/manutencao-de-base-full-cleanup--34P9LGs7BCIQK6acQom802).

After creating the SKU, you can track its availability for sale through the colored icon. Hovering over the icon displays a tooltip with the meaning of the color, as in the image below. Learn more in [Products and SKUs](/en/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By).

![adding_or_editting_sku_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/catalog/products-and-skus/adding-or-editing-skus_1.png)

Additionally, once the SKU is created, you can include it in a [bundle](/en/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28). To do so, in the row of the desired SKU, click the menu icon and select the `Create bundle` option. Note that converting a SKU into a bundle can't be undone.

See the following sections for details about the form fields and instructions on how to complete them.

> ⚠️ There is a limit of 50 SKUs per product. To request an extension of the limit, please contact [our Support](https://support.vtex.com/hc/pt-br/requests).

## Name and status

The first section of the form includes the name and status of the SKU:

* **Name*:** Enter the SKU name, which identifies the product variation. The name is limited to 200 characters. Example: For the product "Refrigerator", the SKU name could be "28.6-Cu".
* **Active:** To activate the SKU, enable the toggle switch <i class="fas fa-toggle-on" aria-hidden="true"></i>. To keep it inactive, leave the toggle switch <i class="fas fa-toggle-off" aria-hidden="true"></i> disabled. If the SKU remains unavailable for sale after activation, check the article [Why is the product not visible on the website?](/en/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).

## Specifications

Specifications are properties configured in the SKU that customers can select before adding the product to the cart. For example, the capacity of an appliance is a specification, allowing customers to choose between 25 cu ft or 21.4 cu ft.

The **Specifications** section may display different fields depending on the product associated with the SKU.

> ⚠️ If a SKU has specifications, they must be completed. For more information, see the article [Adding SKU specifications or fields](/en/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119).

> ❗ It's not possible to create a SKU with the same values combination​ as another SKU. For example, if the combination of SKU A is color black and size S, it would not be possible to create SKU B with the color black and size S, as this would generate a conflict. However, if the SKU A was black and the SKU B color was blue, even if you kept the size S for both, there would be no conflict as the combinations would differ. It is worth mentioning that you can deactivate but not delete a single SKU.

## Media

In this section, you can add images or videos to the SKU.

### Images

In the **Images** field, clicking `Add` displays two options for uploading photos and images:

* `Choose files`: Upload images stored locally on your computer or another device.
* `Add links`: Upload images using a URL.

The table below shows the size limits and formats accepted for each image:

| **File size and format** | **Description** |
| :--- | :--- |
| Maximum size in pixels | 5,000 x 5,000 pixels |
| Minimum size in pixels | 600 x 600 pixels |
| Maximum size in MB | 4 MB |
| Minimum size in KB | 300 KB |
| Allowed file extensions | <ul><li>JPG</li><li>PNG</li><li>GIF</li><li>ICO</li><li>SVG</li><li>WEBP</li></ul> |

> ℹ️ For more recommendations, check the article [Best practices for using images in the Catalog](/en/tutorial/best-practices-for-using-images-in-the-catalog--738K2yfq5U86kUI2k4AQIk).

After uploading an image, you can edit its metadata by following the steps below: 

1. Hover over the image to view the existing icons.
2. Click the menu icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
3. Click `Edit metadata`.
4. In the modal, complete the metadata information.
5. Click `Apply`.

In addition to adding new images to an SKU, you can replicate images from one SKU to other SKUs associated with the same product. To do so, follow the steps below:

1. In the top right corner of the **Images** section, click the copy icon <i class="far fa-clone" aria-hidden="true"></i>.
2. In the **Select the SKUs where you want to replicate the media** modal, click the SKUs to which you want to copy the images.
3. Click `Apply`.

> ⚠️ A SKU must have at least one image to be activated. For more information on the conditions for displaying an item on the storefront, see the article [Why is the product not visible on the website?](/en/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).

### Videos

In the **Videos** field, click `+ Add` to open the **Add SKU media links** window. To add a video, enter its URL and then click `Apply`.

A SKU can have up to 6 videos, and you can only add them using links from either the Vimeo or YouTube platforms**. The accepted formats are:

**Vimeo**

- `https://vimeo.com/{VIDEO_ID}`

**YouTube**

- `https://youtu.be/{VIDEO_ID}`
- `https://www.youtube.com/watch?v={VIDEO_ID}`
- `https://www.youtube.com/embed/{VIDEO_ID}`
- `https://www.youtube.com/v/{VIDEO_ID}`

> ⚠️ Replace `{VIDEO_ID}` with the ID of the video you want to display.

## Identifiers

The fields in this section refer to the codes that identify the SKU:

* **Reference code:** Unique reference code created to help merchants with catalog management.
* **EAN/UPC:** The EAN (European Article Number) and the UPC (Universal Product Code) are in ternational identification codes corresponding to an item's barcode. Each SKU can be associated with only one of these codes, and they can be differentiated by the number of alphanumeric characters: 13 for the EAN and 12 for the UPC.
* **Manufacturer code:** Code provided by the manufacturer to identify the SKU. If a SKU has a specific code, this field must be completed.

## Logistics

These are the SKU fields related to [logistics](/en/tutorial/fulfillment-logistica-vtex--53udnvI5eBy8DKo8FOjMoP):

## Modal (optional)

[Modal](/en/tutorial/como-funciona-o-modal--tutorials_125) is a carrier configuration for specialized deliveries, as some products require special transport conditions, such as refrigeration or the ability to carry chemical cargo. 

When previously created, modal options for the SKU will be displayed in a list, allowing you to select a single option. To learn more, see the article [Setting up modal for carriers](/en/tutorial/configurar-modal-para-transportadoras--3jhLqxuPhuiq24UoykCcqy).

### Shipping weight and dimensions

The following fields are used to [calculate the cubic weight factor](/en/tutorial/como-o-peso-cubado-e-calculado--tutorials_128) of the SKU and refer to the package used for its transportation:

* **Package weight:** Absolute weight value.
* **Package width:** Absolute width value.
* **Package height:** Absolute height value.
* **Package length:** Absolute length value.

> ℹ️ Fields should only be completed with numbers, without units of measure, as they automatically apply the units configured in the store catalog.

### Actual weight and dimensions

The fields below correspond to the actual dimensions of the product — the same that are displayed on the product detail page (PDP) — and should be completed with numbers only:

* **Actual weight:** Absolute product weight value, excluding packaging.
* **Actual width:** Absolute product width value, excluding packaging.
* **Actual height:** Absolute product height value, excluding packaging.
* **Actual length:** Absolute product length value, excluding packaging.

### Inventory unit

Define inventory aspects in the Catalog context:

> ❗ The **Unit of measure** and **Unit multiplier** fields are used for catalog purposes and don't generate any impact on inventory, stock, or other shipping configurations.

* **Unit of measure:** Identifies the unit of measure used to count items in stock.
* **Unit multiplier:** Numeric value by which the SKU will be multiplied to determine its quantity in the cart. For example, a multiplier of 5 means that each SKU represents 5 units in the cart, allowing purchases only in multiples of 5, such as 10 or 15 units. Fractional values can be separated by either a period or a comma. For example, 0.5 or 0,5 for half a kilogram.

## Commercial strategy

This section includes fields related to the store's sales strategies:

* **Commercial condition:** Defines the promotions or [payment conditions](/en/tutorial/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento--3azJenhGFyUy2gsocms42Q) that are valid for the SKU. If no commercial condition is needed, select the `Default` option. Learn more in [Registering a commercial condition](/en/tutorial/como-cadastrar-condicao-comercial--tutorials_445#).
* **Presale date:** Sets a presale date for the SKU, indicating when the item is expected to arrive in stores and be available for sale. To configure this setting, you need to consider both the item release date and the [estimated shipping](/en/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) to customers.
* **Generate credit with gift card:** When enabled, specifies that the sale of the SKU will generate a [gift card](/en/tutorial/gift-card--tutorials_995) credit to the customer.
* **Loyalty amount**: Determines the credit the customer receives when purchasing 1 unit of a given SKU. For example, if this field is set to $1.00, the customer who buys the SKU will receive a $1.00 store credit for future purchases.

## Customizations

SKUs can be configured to offer customization options to customers. For example, a customer can add a name to a t-shirt. There are two types of customizations: [attachments](/en/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm) and [services](/en/tutorial/o-que-e-um-servico).

To link a customization to a SKU, click the add + icon, select the desired option, and follow these steps:

* `Attachments`: Clicking this option opens the **Choose the attachments you want to link** modal. Select the desired attachments and click `Apply`.
* `Services`: Clicking this option opens the **New service** modal. Complete the fields and set the toggle switch <i class="fas fa-toggle-on" aria-hidden="true"></i> to **Active**. Click `Apply` to save the information.

> ⚠️ The attachment and service options for the SKU must be configured in advance. For more information, see the articles [Adding an attachment](/en/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU) and [Creating a service for a SKU](/en/tutorial/criar-servico-para-um-sku--tutorials_252).

## Cross-sell and up-sell recommendations

This section allows the store to configure [cross-selling](/en/tutorial/setting-up-a-similar-product-suggestions-accessories-and-generics--tutorials_280#what-is-cross-selling) and [up-selling](/en/tutorial/setting-up-a-similar-product-suggestions-accessories-and-generics--tutorials_280#what-is-up-selling) options for the new SKU, reflecting them on the storefront and in the customer browsing experience. 

To configure cross-sell and up-sell options, follow the steps below:

1. In the **Cross-sell and up-sell recommendations** section, click the add icon `+`.
2. Select an option from the following:

    * **Accessories:** Complimentary items suggested for the main product.
    * **Suggestions:** Product recommendations.
    * **Similar products:** Alternatives to the selected item or products with similar characteristics.
    * **Show together:** Suggestions for buying together.

3. Click `Add SKUs`
4. Select the SKUs you want to add. You can use the search bar if you wish.
5. Click `Apply`.

> ℹ️ For more information, see the article [How to set up similar product, suggestions, accessories and generics](/en/tutorial/configurar-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280).

## Attributes

This section allows the store to configure custom fields with specific values for each SKU. For example, in a lipstick (product), each of the colors (SKUs) can have the field ingredients (SKU attribute) with different values.

To configure an attribute for the SKU, follow the steps below:

1. In the **Attributes** section, click the add icon `+`.
2. Fill in the field **Name** with the attribute identifier.
3. (Optional) If you want to replicate the attribute for all SKUs, check the box **Apply to all SKUs**.
4. Click `Create`.

> ℹ️ Attributes for the SKU are not linked to the category tree.

## Learn more

* [Products and SKUs](/en/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By)
* [Adding or editing products](/en/tutorial/adding-or-editing-products--29IkdEu6GofCFlltsZh2H8)
* [Catalog: Overview](/en/tutorial/catalogo-visao-geral--77M8ItLhDXs6aBdQTqToVe)
* [Catalog](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ) (track)

