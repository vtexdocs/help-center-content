---
title: 'Regular Promotion'
id: tutorials_327
status: PUBLISHED
createdAt: 2017-04-27T22:07:59.690Z
updatedAt: 2025-06-23T11:42:18.456Z
publishedAt: 2025-06-23T11:42:18.456Z
firstPublishedAt: 2017-04-27T23:03:15.647Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: regular-promotion
locale: en
legacySlug: regular-promotion
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

On VTEX, you can [create different types of promotions](/en/tutorial/como-criar-promocoes--tutorials_320) for a range of scenarios, but the most commonly used is the regular promotion.This promotion type allows you to configure discounts in a flexible and controlled way, combining multiple conditions, usage restrictions, and benefits.

## Creating a regular promotion
1. In the VTEX Admin, go to **Promotions > Promotions**, or type **Promotions** in the search bar at the top of the page.
2. Click `Create Promotion`.
3. Select the `Regular` option.
4. Complete the fields on the promotion form as described in the sections:
    - [To which items will this promotion apply](#to-which-items-will-this-promotion-apply)
    - [What are the conditions for the promotion to be valid](#what-are-the-conditions-for-the-promotion-to-be-valid)
    - [Restrictions and limitations of use](#restrictions-and-limitations-of-use)
5. Click `Save`.

### 1. Promotion overview
Required fields are marked with an asterisk (*).

| Field                         | Description                                                                                                                                                                                                                                                                                                                                                                 |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name*                         | Choose a clear and objective name for the promotion.                                                                                                                                                                                                                                                                                                                        |
| Status                        | Define whether the promotion will be Active or Inactive. <br> Configure as <i class="fas fa-toggle-on" aria-hidden="true"></i>` to apply the promotion based on the configured dates and times. <br> Configure as `<i class="fas fa-toggle-off" aria-hidden="true"></i>` to pause it, even if it's within the defined period.                     |
| Description                   | The internal promotion description should be used to record information for internal communication.                                                                                                                                                                                                                                                                         |
| Start date and time*          | Select the date and time the promotion will start, ensuring it's activated when you want it to.                                                                                                                                                                                                                                                                            |
| End date and time*            | Select the exact date and time the promotion should end.                                                                                                                                                                                                                                                                                                                    |
| Use recurrence settings       | Select this option to schedule the promotion to repeat automatically on specific days and times. Set the desired recurrence intervals.                                                                                                                                                                                                                                     |
| What is the type and amount of discount?* | Select the discount type and amount that will be applied in the promotion. Options include: <br> - **Fixed amount**: Discount applied to the cart total. <br> - **Fixed amount off shipping**: Discount applied to the shipping cost. <br> - **Percentage**: Discount percentage on product price. <br> - **Maximum price per item**: Sets a max price per item. <br> - **Percentage-off shipping**: Discount percentage on shipping. <br> - **Maximum shipping**: Maximum amount for shipping. <br> - **Free shipping**: Full discount on shipping. <br> - **Gift**: Full discount on the product set as a gift. The max quantity refers to the number of distinct SKUs the user may select. <br> &nbsp;&nbsp;&nbsp;&nbsp;- The checkbox "Activate gift multiplier" only works in Buy One Get One promotions. In regular promotions, it may appear but has no effect. <br> &nbsp;&nbsp;&nbsp;&nbsp;<div class="alert alert-warning">The gift product must have a price associated with it, even if it's given to the customer for free.</div> |
| Fixed amount based on formula | Discount calculated using a custom formula with variables like total product value, shipping, and quantity. The formula uses the lowest available shipping for the order. <br> **Example**: `(total + freight) * 0.3`                                                                                                                                                            |
| Fixed reward amount           | Credit added to the store’s reward program. See: *Regular promotion with reward value*.                                                                                                                                                                                                                                                                                      |
| Percentage reward amount      | Percentage-based credit added to the store’s reward program. See: *Regular promotion with reward value*.                                                                                                                                                                                                                                                                    |
| Promotional price table       | Price tables can be used as promotions. The promotional price of each SKU will be the corresponding price in the selected price table.                                                                                                                                                                                                                                     |
| Promotion is highlighted      | Adds a tag with the promotion name on the PLP and PDP. Only works if the template uses `<vtex.cmc:discountHighLight/>`.                                                                                                                                                                                                                                                     |

<div class = "alert alert-info">
**Fixed amount** promotions will only be displayed in the cart, not in the window display or on the product detail page (PDP).
</div>

#### Restrict this promotion to seller products

In this section, you can determine to which sellers the promotion will apply. You can specify the sellers you want to include or exclude from the discount.
- **Equal to:** Select the sellers you want to include.
- **Different from:** Select the sellers you want to exclude.

For the promotion to be valid for all sellers, leave the field blank.

<div class = "alert alert-warning">
  <p>You can't select a white label seller directly. To include a white label seller in the promotion, you have two options:</p><ol>1. Restrict sellers to the main store. This restriction adds all your store's white label sellers to the promotion.</ol><ol>2. Leave the selection empty to including all sellers. Here, all types of sellers — white label or not — will be added to the promotion.</ol>
</div>

#### Trade policy
In this section, you can set the trade policies valid for the promotion. You can include or exclude trade policies from the discount.

- **Equal to:** Select the trade policies you want to include.
- **Different from:** Select the trade policies you want to exclude.
- **Provided by me (my store):** Select trade policies with products from your store. You can select more than one trade policy.
- **Delivered by me (other stores):** Select trade policies in which your products are available in third-party stores. You can select more than one trade policy.

For the promotion to be valid for all trade policies, leave the selection empty.

### 2. To which items will this promotion apply?
In this section, you specify whether the promotion will be applied to all products in the catalog or only to selected products. Follow the guidelines below to configure it:

- If you want the promotion to apply to your entire catalog, select the option **Apply to all products.** 
- To restrict the promotion to specific products, select **Apply to products that meet all of the following restrictions** and complete the fields based on your criteria. You can select:
    -  Categories
    -  Brands
    -  Collections
    -  Products
    -  SKUs

Each field allows you to select the options **Equal to** (inclusion) or **Different from** (exclusion), allowing you to precisely configure combinations.

In the example below, the promotion was configured to include all products in the Food category with the Pedigree brand, except the Whiskas Sachet product. Fields were completed as follows:

![Tela quais itens-EN](https://images.ctfassets.net/alneenqid6w5/4v5wXtdO7CzCCHI0F0heTC/1a96b896b9e9472cd7b0200ec41832b0/Tela_quais_itens-EN.png)

To simplify adding products or SKUs, you can upload a **.txt** file containing their desired IDs. Each ID should be on a separate line. To upload:

- Click **Select a .txt file** in the corresponding field for the desired product or SKU.
- Select the **.txt** file with product IDs or SKUs.

<div class = "alert alert-warning">
<p>If you select <strong>Apply to the following products</strong> and don't complete any selection criteria, the promotion will not be saved, and the message <strong>Set eligible products</strong> or <strong>apply to all products</strong>. will be displayed. In this case, you must go back and complete the selection criteria or click <strong>Apply to all products</strong>.
</div>

For products to be included in the promotion, they must meet all the conditions configured in this section.

### 3. What are the conditions for the promotion to be valid?
The customer cart must meet the conditions specified in this section for the promotion to apply.

- **Minimum and maximum order amount:** For price promotions that directly adjust item prices in the cart, the promotion activation is based on the original item price. For promotions that offer other benefits like free shipping or gifts, the discounted price is what triggers the promotion.
- **Aggregate purchase value:** Discount given if the customer's total purchase amount reaches the specified amount.
- **Item price between:** The discount will apply if the item price is within the range of values set by the store.
- **Full price and discounted price are the same** or **Full price and discounted price are different:** Refers to the added product prices. Only one can be selected.
- **Use restriction BINs:** The discount will be granted to users paying with cards whose BINs are among the numbers entered in this field.
- **Marketing tags:** Field used to associate the promotion with specific campaigns.
- **Affiliates:** The affiliate is the seller's identifier for the marketplace. The discount will be applied to the selected affiliates. See the [What is an affiliate](/en/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0?locale=pt) article for more information.
- **Customer cluster:** The discount will be given if the customer is included in the cluster selected in this field. Note that the cluster name must be identical to the one added; any misspelling will prevent the configuration from working correctly.
- **Shipping countries:** The discount will apply to items shipped to the countries selected in this field.
- **Shipping to postal code should:** The discount will apply if the shipping postal code meets the configured rule.
- **Shipping method:** The discount will be applied if the shipping method selected by the customer is the same as the one in the promotion. This criterion will only be considered if the promotion applies to the shipping cost, so only if it's one of the following: Percentage-off shipping, Fixed amount off shipping, Maximum shipping, or Free shipping.
- **Apply the selected discount only when one of the above carriers is selected by the customer:** The promotion will only be applied after the customer selects the specified delivery method. If it's not selected, it won't be eligible for the discount. This criterion will only be considered if the promotion applies to the shipping cost, so only if it's one of the following: Percentage-off shipping, Fixed amount off shipping, Maximum shipping, or Free shipping.
- **Payment method:** The discount applies if the payment method selected matches the one configured in the promotion. This discount will only be applied at checkout when customers select the same payment method configured in the promotion.

    <div class = "alert alert-info">
  <p> By default, you can add up to 20 payment methods per promotion. You can also customize it to add up to 100 payment methods. If you need to use more than 20 payment methods, contact <a href="https://support.vtex.com/hc/pt-br/requests">our Support</a>.</p>
 </div>

- **Number of installments:** Discount given if the number of installments selected by the customer is within the specified range. This field does not apply to boleto (Brazil).

    <div class = "alert alert-warning">
  <p><b>Warning</b>: Promotions based on payment method and number of installments don't apply to orders paid for with two cards or gift cards.</p>
</div>

- **UTM source:** The discount will apply if the customer navigation uses an utm_source parameter corresponding to a listed one in this promotion. Note that the customer can only enter one utm_source at checkout.
- **UTM campaign:** The discount will apply if the customer navigation uses an utm_campaign parameter corresponding to a listed one in this promotion.
- **Create a new coupon with the UTMs above:** Creates a coupon from the added UTMs to give customers access to the promotion using just the coupon code, without the need for UTMs.
- **utmi_cp:** The discount will apply if the customer navigation uses an utmi_cp parameter corresponding to a listed one in this promotion (uppercase and lowercase letters are considered different characters).

    <div class = "alert alert-info">
  <p>In the UTMs field, enter only the value that the UTMs must match to activate the promotion. You don't need to enter <i>?utm_source=</i> in the field</p>
</div>

- **Only on first purchase:** The discount will only be given on the customer's first purchase.
- **Is a subscription order:** This option specifies that the promotion will apply to subscription orders. See the conditions for the following order types:

   Order type:
     - **First orders:** Orders that generate subscriptions but aren't part of subscription cycles yet.
     - **Recurring orders:** Orders from subscription cycles.

   Filter by: 
     - **Frequency:** Option to set the frequency of subscription orders — weekly, monthly, annually, among others.
     - **Cycle number:** Selection of subscription cycles valid for the promotion. This option is enabled if the Recurring orders field has been selected.
- **Apply the discount even if the user is not logged in?:** This field is available when the "Only on first purchase" field is selected. By checking this option, the promotion will be applied even if the customer hasn't logged in with their email and password. However, the discount will be applied once they're identified, and they don't need to be logged in. If this option is unchecked, the promotion will only apply after the customer logs in with their email and password.

### 4. Restrictions and limitations of use
- **How many times will this promotion be applied in your store:** Limits the number of times the promotion will be applied. If you uncheck the **unlimited** field, the times field becomes available to enter the maximum number of times the promotion can be used. This only applies to orders created after the condition has been set up. It will not affect orders placed previously.
- **How many times per customer will this promotion be applied in your store:** Sets a limit on how many times each customer can benefit from the promotion. If the above field is also selected, the store limit will have a higher priority than this one.
- **Set maximum number of eligible items for each cart:** Defines the maximum number of items in the cart that will be affected by the promotion. See [this article](/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy) to learn how to configure this field.
- **Apply with other promotions:** If selected, more than one promotion can be applied simultaneously, regardless of the discount type. Learn more in the [How promotion competition works](/en/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270) article.
- **Apply with manual prices:** Allows the promotion to apply to products whose prices were manually added via telesales. To enable the manual pricing feature, use the [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) endpoint.

