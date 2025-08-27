---
title: 'How the progressive discount promotion  works'
id: tutorials_324
status: PUBLISHED
createdAt: 2017-04-27T22:08:26.447Z
updatedAt: 2025-08-22T14:57:47.483Z
publishedAt: 2025-08-22T14:57:47.483Z
firstPublishedAt: 2017-04-27T23:03:15.195Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: progressive-discount
legacySlug: progressive-discount
locale: en
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Progressive Discount is a feature that allows you to create promotions with increasing discount percentages as the customer adds more products to the cart. This strategy is perfect for boosting larger purchases and rewarding the customer with benefits based on the number of items purchased.

![Desconto Progressivo gift-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/progressive-discount_1.gif)

To configure the **Progressive Discount** promotion, you need to complete the following steps:

- [Create a Progressive Discount promotion](#create-a-progressive-discount-promotion)
- [Set the conditions for the Progressive Discount promotion](#set-the-conditions-for-the-progressive-discount-promotion)
- [Set conditions for applying the promotion](#set-conditions-for-applying-the-promotion)
- [Set usage restrictions](#set-usage-restrictions)
- [Configure combination and competition](#configure-combination-and-competition)
- [Display the promotion on the product page](#display-the-promotion-on-the-product-page)

## Creating a Progressive Discount promotion
1. In the VTEX Admin, go to **Promotions > Promotions**, or type **Promotions** in the search bar at the top of the page.
2. Click `Create Promotion`.
3. Select the **Progressive Discount** option.
4. Complete the fields. You can find details of how to complete them in the table below.
5. Click `Save`.

Segue a tabela convertida para o formato Markdown, substituindo as células vazias por "IMAGEMAQUI":

| Field                          | Description                                                                                                                                                                                                                                                                                    | Example                                   |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| **Name**                       | Enter a clear and objective name that reflects the purpose of the promotion, making it easy for customers to identify it (up to 150 characters).                                                                                                                                               | Summer Clearance.                         |
| **Status**                     | Define whether the promotion will be Active or Inactive. Configure as <i class="fas fa-toggle-on" aria-hidden="true"></i> to apply the promotion based on the configured dates and times. Set as <i class="fas fa-toggle-off" aria-hidden="true"></i> to pause it, even if it is within the defined period. | ![Habilitar Promotions- EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/progressive-discount_2.png) ![Desabilitar Promotions-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/progressive-discount_3.png)                                |
| **Description**                | The internal promotion description should be used to record information for internal communication (up to 10,000 characters). This field is used to specify the purpose of the promotion, such as a specific campaign or clearance.                                                            | Promotion for clearing summer collection items. |
| **Start date and time**        | Select the date and time the promotion will start, ensuring that it is activated when you want it to. Make sure date and time align with campaign planning to maximize effectiveness.                                                                                                         | ![Data e horario de inicio da Promotions-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/progressive-discount_4.png)                                          |
| **End date and time**          | Define the expiration date of the promotion by setting the date and time it will be automatically deactivated.                                                                                                                                                                                 |  ![Data de termino e horario da Promotions-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/progressive-discount_5.png)                                |
| **Use recurrence settings**    | Select this option to schedule the promotion to repeat automatically on specific days and times. Set the desired ranges to ensure recurrence as scheduled.                                                                                                                                     | ![Usar recorrencia Promotions-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/progressive-discount_6.png)                                |

### Sellers
In the right-hand corner of the page, in the **Sellers,** section, define the sellers that the promotion should apply to.

![Seller-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/progressive-discount_7.png)

Select one of the following options for applying the promotion:

- **All:** The promotion will be applied to all sellers. Use this option if you want all products from all sellers to be part of the campaign.
- **Same as:** The promotion will only be applied to specific sellers. After selecting this option, complete the field that will display the names of the desired sellers.
- **Different from:** Define the sellers that will not be affected by this promotion. After selecting "Different from", you can choose the sellers you don't want to include in the campaign. All other sellers will be included.

### Trade policies
In the right-hand corner of the page, in the section **Trade policies**, select the trade policies valid for the discount. You can give discounts for trade policies when [your store acts as a marketplace](https://help.vtex.com/pt/faq/o-que-e-um-marketplace) (**My store**) or as a seller (**Third-party stores - Fulfillment**).

You can choose from the following options:

- **All:** Select this option to apply the promotion to all trade policies without any restrictions. All products, regardless of the associated trade policy, will be included in the promotion.
- **Equal to**: This option allows you to determine the policies that will apply to the products eligible for the discount.
- **Different from:** This option removes specific policies, ensuring the discount is not applied to products that use those business rules.

![Politica comercial-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/progressive-discount_8.png)

## Set the conditions for the Progressive Discount promotion
Determine the conditions and discount percentages to be applied. See the available conditions below:

- **SKUs:** Select the SKUs that the progressive discount will apply to. This option restricts the promotion to products associated with the selected SKUs.
- **Collections:** Select the product [collections](https://help.vtex.com/en/tutorial/criando-colecao-de-produtos--tutorials_244) that the progressive discount will apply to. This option allows you to apply the promotion to a group of predefined products.
- **Must be the same item:** This option restricts the discount to products that are the same. For example, if you add different SKUs from the same collection, the promotion won't be applied. The rule only checks the quantity of the single SKU in the cart.
- **Discount:** Set the discount percentage applied when the minimum quantity of items defined is reached. You can create up to 10 progressive discount ranges.
- **Add range:** Configure additional progressive discount levels. For example, you can define a 5% discount with a quantity of 10, and an increase to 10% when the quantity reaches 20. The maximum number of configurable ranges is 10.

![Desconto Promotions-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/progressive-discount_9.png)

## Setting conditions for applying the promotion
Conditions allow the promotion to activate under specific circumstances based on the selected criteria. To add a condition, follow the instructions below:

- **Card BIN:** Apply this promotion when using cards from specific networks, banks, or categories identified by their BIN codes. Import a list of BINs saved in a TXT or CSV file, with each BIN on a separate row.
- **Customer cluster:** select an already created [customer cluster](https://help.vtex.com/en/tutorial/como-criar-um-cluster-de-clientes) in Master Data, following the field=value or field contains value format. Select one of the following options:
    - **All of the following:** Apply the promotion only if all cluster criteria are met.
    - **At least one of the following:** Apply the promotion if at least one of the cluster criteria is met.
- **Shipping location:** Apply the promotion based on the shipping address associated with the order. Conditions can be configured using the following criteria:
    - **Countries:** Specify the countries in which the promotion will be valid. You can select up to 50 countries from the list. The promotion will only apply to orders with shipping linked to the configured countries.
    - **Shipping postal code:** Configure postal code ranges to limit the application of the promotion to specific regions.
        - **Choose Include or Exclude:** Define whether the promotion will apply to the configured ranges (Include) or to the excluded values (Exclude).
        - **Configure the postal code ranges:** Complete the "From" and "To" fields with the desired postal codes.
        - **Add multiple ranges:** Use the + Add range option to include add ranges as necessary.

![Local de entrega-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/progressive-discount_10.png)        

- **UTM:**  Configure the promotion to apply when the site is accessed via a URL with [UTM parameters](https://help.vtex.com/en/tutorial/o-que-sao-as-utms-internas-utmi-cp-utmi-pc-e-utmi-p--5Pvo8ufYWs00AUeCCEY68a) or when a coupon linked to these parameters is used. Set the UTM parameters according to the formatting rules, using only letters, numbers, hyphens, and underscores.

 > ℹ️ Using these parameters is optional and allows you to apply discounts to specific campaigns.

Set the following parameters if necessary:

- **utm_source:** Apply the discount when browsing occurs through the configured utm_source parameter.
- **utm_campaign:** Apply the discount when browsing occurs through the configured utm_campaign parameter.
- **Create coupon from the UTM parameters above:** Generate a coupon based on the UTM parameters entered in the `UTM_source` and `UTM_campaign` fields.
- **View linked coupons:** View the coupons that have already been associated with the defined UTM parameters.
- **Payment method:**  The promotion is only applied when the customer uses one of the previously configured payment methods. The options include:
    - Boleto Bancário (Brazil).
    - Credit cards, such as Visa or Mastercard.
    - Other methods, such as Diners or Hipercard.

## Setting usage restrictions
In this section, determine whether the promotion can be combined with other promotions. The available options are:

- **Limit the use of the promotion in the store:** Restrict the number of times the promotion can be used in the store.
- **Limit the use of the promotion per customer:** Restrict the number of times each customer can use the promotion.
- **Limit the number of eligible items per cart:** Define the maximum number of items per order that will get the discount.

## Configure combination and competition
Define how the promotion will be combined with other business conditions applied in the store.

- **Allow combining with manual prices:** Select this setting so that the promotion is applied to products whose price has been adjusted.

## Displaying the promotion on the product page
In this section, you can highlight the promotion on the product listing page and add custom data for in-store customizations.

- **Highlight promotion on products:** Check this option to display the promotion directly on the product listing pages.

> ⚠️ Remember [configure this option in the CMS module](https://help.vtex.com/en/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295).

- **Additional information:** Click `Create` to add custom fields with name and value, which can be used for store customizations.

