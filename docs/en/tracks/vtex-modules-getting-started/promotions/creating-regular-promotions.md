---
title: 'Creating Regular Promotions'
id: 7FjbeZdE2KMwk5L1t98pZI
status: PUBLISHED
createdAt: 2020-01-14T13:11:35.010Z
updatedAt: 2025-06-12T16:32:22.510Z
publishedAt: 2025-06-12T16:32:22.510Z
firstPublishedAt: 2020-01-22T13:55:43.369Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: creating-regular-promotions
locale: en
trackId: 6asfF1vFYiZgTQtOzwJchR
trackSlugEN: promotions
order: 4
---

On VTEX, you can [create different types of promotions](/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI) for a range of scenarios, but the most commonly used is the regular promotion. This promotion type allows you to offer flexible discounts, combining multiple conditions, restrictions, and benefits.
In this article, we'll explain the steps required to set up a regular promotion:

1. [Promotion overview](#promotion-overview)
   - [Restrict this promotion to seller products](#restrict-this-promotion-to-seller-products)
   - [Trade policy](#trade-policy)
2. [To which items will this promotion apply?](#to-which-items-will-this-promotion-apply)
3. [Conditions for the promotion to be valid](#conditions-for-the-promotion-to-be-valid)
4. [Restrictions and limitations of use](#restrictions-and-limitations-of-use)

Read our article [Promotion examples](/en/tutorial/promotion-examples--5A8UTc7knvAscxo7e7rMFD?&utm_source=autocomplete) for more information.

## Creating a promotion

To create a regular promotion, follow the steps below:

1. In the VTEX Admin, go to **Promotions > Promotions**, or type **Promotions** in the search bar at the top of the page.
2. Click the **Create Promotion** button.
3. Select the **Regular** option.
4. Complete the promotion fields.
5. Click **Save**.

# 1. Promotion overview

In this section, you need to configure your promotion's general information. These are required fields: **Name**, **Expiration date**, and **What is the type and amount of discount?**.

- **Name:** Promotion name. Required field.
- **Status:** Activates or deactivates the promotion.
- **Description:** An internal description of the promotion. The purpose of this field is to be used as internal communication in your store to indicate whether the promotion comes from a campaign, clearance sale, etc.
- **Expiration date:** Start and end date and time of the promotion. You can use a future date and/or time for the promotion to start on your website. If configured this way, the promotion status will be displayed as follows:
  - **Scheduled:** Before the selected start date and time.
  - **Active:** During the scheduled promotion period.
  - **Inactive:** After the selected end date and time.
- **Use recurrence settings:** By selecting this option, you can configure the recurrence, such as the weekday and time.
- **What is the type and amount of discount?:**  Allows you to select one of the options below:
  - **Nominal:** Discount applied to the cart total.
  - **Nominal shipping:** Discount applied to the shipping cost.
  - **Percentage:** Percentage discount that will be applied to the product price.
  - **Maximum price per item:** The maximum price for each eligible item will be the price set above.
  - **Percentage:** Percentage discount that will be applied to the shipping cost.
  - **Maximum shipping:** Maximum amount for the shipping cost.
  - **Free shipping:** Full discount on shipping costs.
  - **Gift:** Full discount on the product amount set as a gift. By selecting this option, you can indicate the SKU (by name or ID) that will be considered a gift, choose if you want to activate the gift multiplier, and the maximum number of products that can be used as gifts in the promotion.
> ℹ️ The gift product must have a price associated with it, even though it is given to the customer for free.

  - **Nominal discount based on formula:** Discount calculated based on a formula you can create using the product total amount, shipping, and the number of items as variables. Please note that the shipping cost considered by the formula will be the lowest available for the order, regardless of the customer's selection. The decimal separator must always be a period. For example: If the discount is 30% of the product's total amount + shipping cost, the formula should be (total + freight) * 0.3. For more information about the formula, check out our [documentation](/en/tutorial/promocao-regular-com-desconto-nominal-baseado-em-formula--2Pwrq6THyGViNedQG381jV).
  - **Nominal reward value:** Credit that will be added to the store's reward program. For more information, check out the [Regular promotion with reward value](/en/tutorial/promocao-regular-com-valor-fidelidade--3FCip23ZtvG0sDt0rVGVmR) article.
  - **Percentage reward value:** Percentage credit that will be added to the store's reward program. For more information, check out the [Regular promotion with reward value](/en/tutorial/promocao-regular-com-valor-fidelidade--3FCip23ZtvG0sDt0rVGVmR) article.
  - **Promotional price table:** Price tables can be used as promotions. The promotional price of each SKU will be its corresponding price in the selected price table.
  - **Additional information (optional):** Allows you to add a name and value to the promotion.
  - **Promotion is highlighted:** Adds a tag with the promotion name to the window display and the product page. This tag will only be added if you use the right promotion display control in the template `<vtex.cmc:discountHightLight/>`.

> ℹ️ Nominal promotions will only be displayed in the cart, not in the window display or on the product page.

## Restrict this promotion to seller products

In this section, you can determine to which sellers the promotion will apply. You can specify the sellers you want to include or exclude from the discount.

- **Equal to:** Select the sellers you want to include.
- **Different from:** Select the sellers you want to exclude.

For the promotion to be valid for all sellers, leave the field blank.

> ⚠️ You cannot directly select a white label seller. To include a white label seller to the promotion, there are two options:<ol>1. Restrict sellers to the main store. This restriction adds all your store's white label sellers to the promotion.</ol><ol>2. Leave the checkbox empty to include all sellers, meaning that all types of sellers - whether white label or not - will be added to the promotion.</ol>

## Trade policy

In this section, you can set the trade policies valid for the promotion. You can include or exclude trade policies from the discount.

- Equal to: Select the trade policies you want to include.
- Different from: Select the trade policies you want to exclude.
- Provided by me (my store): Select trade policies with products from your store. You can select more than one trade policy.
- Delivered by me (other stores): Select trade policies in which your products are available in third-party stores. You can select more than one trade policy.

For the promotion to be valid for all trade policies, leave the selection empty.

# 2. To which items will this promotion apply?

In this section, you need to choose whether the promotion will apply to all your store products or only specific products, as detailed below:

- **Apply to all products:** Allows you to apply the promotion to your whole catalog.
- **Apply to products that meet all of the following restrictions:** Allows you to limit your promotion to specific products. You must satisfy the selection criteria for categories, brands, collections, products, and SKUs.
- **Products:** Allows you to choose the products to which the promotion will be applied. You can upload a file (.txt) with the product IDs.
- **SKUs:** Allows you to choose the SKUs to which the promotion will be applied. You can upload a file (.txt) with the product SKUs.

You can include or exclude **categories**, **brands**, **collections**, **products**, and **SKUs** from the promotion using the **Equal** to or **Different from** criteria.

To be eligible for the promotion, products must meet all the conditions added in this section.

![A quais itens esta promoção será aplicada - EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/vtex-modules-getting-started/promotions/creating-regular-promotions_1.png)

# 3. Conditions for the promotion to be valid

The order must meet the conditions specified in this section for the promotion to apply.

- **Order minimum or maximum amount:** The promotion will be applied based on the gross amount of the cart, not considering other promotions or shipping.
- **Aggregate purchase value:** Discount given if the customer's total purchase amount reaches the specified amount.
- **Item price between:** The discount will apply if the item price is within the range of values set by the store.
- **Full price and discounted price are the same or Full price and discounted price are different:** Refers to the added product prices. Only one can be selected.
- **Use restriction BINs:** Allows you to activate or deactivate the BIN restriction, limiting the credit cards used in the promotion. You can import a list of BINs, which must be saved in a text file (.txt) with each BIN listed on a different row.
- **Marketing tags:** Used to limit the promotion's activation if the order is placed through the VTEX Subscriptions module.
- **Affiliates:** Marketplace order identifier. The discount will be applied to the selected affiliates. Check out the What is an affiliate article for more information.
- **Customer cluster:** The discount will be given if the customer is included in the cluster selected in this field. Note that the cluster name must be identical to the one registered; any misspelling will prevent the configuration from working correctly. For more information, check out the Create a cluster of customers article.
- **Shipping countries:** The discount will apply to items shipped to the countries selected in this field.
- **Shipping postal code should:** The discount will apply if the shipping postal code meets the configured rule. Note that postal codes not added will not be valid for the promotion.
- **Shipping method:** The discount will apply only if the shipping method chosen by the customer is the same as the one specified in the promotion. This criterion will only be considered if the discount refers to the shipping cost, i.e., if it is one of the following: Percentage shipping, Nominal shipping, Maximum shipping, or Free shipping. Note that this configuration cannot be combined with "Only apply discount to the cheapest shipping option", as one option invalidates the other.
- **Apply the selected discount only when one of the above carriers is selected by the customer:** The promotion will only be applied once the customer has selected the shipping method in question. If it is not selected, it will not be eligible for the discount. This criterion will only be considered if the promotion type refers to the shipping cost, i.e., only if it is one of the following types: Percentage shipping, Nominal shipping, Maximum shipping, or Free shipping.
- **Payment method:** Allows you to choose if the promotion will be applied to one or more of the selected payment methods.

> ℹ️ By default, you can add up to 20 payment methods per promotion. You can also customize it to add up to 100 payment methods. If you need to use more than 20 payment methods, please contact [our Support](https://vtexhelp.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fsupport.vtex.com%2Fhc%2Fpt-br%2Frequests&theme=hc&locale=pt-br&brand_id=144968&auth_origin=144968%2Ctrue%2Ctrue).

- **Number of installments:** Discount given if the number of installments selected by the customer is within the specified range. This field does not apply to boletos (Brazilian payment method).
> ⚠️ Promotions based on payment method and number of installments do not apply to orders paid for with two cards or vouchers.

- **UTM source:** The discount will apply if the customer navigation uses an utm_source parameter corresponding to a listed one in this promotion. Note that the customer can only enter one **utm_source** at checkout.
- **UTM campaign:** The discount will apply if the customer navigation uses an utm_source parameter corresponding to a listed one in this promotion.
- **Create a new coupon with the UTMs above:** Creates a coupon from the added UTMs to give customers access to the promotion using just the coupon code, without the need for UTMs.
- **utmi_cp:** The discount will be given if the customer navigation uses the utmi_cp parameter with the specified value, which is case-sensitive.

> ℹ️ In the UTMs field, enter only the value that the UTMs must match to activate the promotion. You don't need to enter ?utm_source= in the field.

- **Only on first purchase:** The discount will only be given on the customer's first purchase.
- **Apply the discount even if the user is not logged in?:** This field is available when the Only on first purchase field is selected. If this field is checked, the promotion will be applied even if the customer has not entered their email and password. When unchecked, the promotion will only be applied if the customer has logged in with their email and password.
- **Is a subscription order:** Allows you to select one of the options below:
  - **First orders:** Orders that generate subscriptions but are not part of subscription cycles yet.
  - **Recurring orders:** Orders from subscription cycles.
  - **Filter by:** Allows you to filter the subscription requests valid for the promotion.
  - **Frequency:** Select the frequency of subscription orders — weekly, monthly, and annually. For more information, see [Configuring the frequency and date of the subscription cycle](/en/tutorial/como-criar-um-anexo-de-assinatura--2bUuKyPflA8cOGLv8OvaKK).
  - **Cycle number:** Allows you to select the subscription cycles valid for the promotion. This option is only unlocked if the **Recurring orders** option is selected.

# 4. Restrictions and limitations of use

In this section, you will find important information about the promotion conditions and restrictions.

- **How many times will this promotion be applied in your store:** Limits the number of times the promotion will be applied. If you uncheck the unlimited field, the **times** field becomes available to enter the maximum number of times the promotion can be used. This only applies for orders created after the condition has been set up. It will not affect orders placed previously.
- **How many times per customer will this promotion be applied in your store:** This field's value determines the maximum number of times each customer can benefit from the promotion. For example, if you set a limit of three uses and the promotion is applied three times on a single order, this will be considered a single use in relation to the total limit. This way, the customer can still use the promotion on two different orders. Note that this calculation is done regardless of how many times the promotion has been used on each individual order.
- **Set maximum number of eligible items for each cart:** Defines the maximum number of items in the cart that will be affected by the promotion. Check out [Restricting promotional products in cart](/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy#restricting-promotional-products-in-cart) to learn how to configure this field.
- **Apply with other promotions:** If selected, more than one promotion can be applied simultaneously, regardless of the discount type. Learn more in the [How promotion competition works](/en/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270) article.
- **Apply with manual prices:** Allows the promotion to apply to products whose prices were manually added via telesales. To enable the manual pricing feature, use the [Update orderForm configuration endpoint](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

