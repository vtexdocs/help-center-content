---
title: 'Promotions (Beta)'
id: 4jUEX3NcdMtxUPHey1nInn
status: DRAFT
createdAt: 2021-02-23T21:24:12.421Z
updatedAt: 2022-05-16T12:00:47.348Z
publishedAt: 
firstPublishedAt: 2021-02-25T12:26:08.175Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: promotions-beta
locale: en
legacySlug: promotions-beta
subcategoryId: 6iTRZiMeCGXYiO2ckABFZi
---

>❗ This feature will be discontinued on May 16, 2022. If you have any questions, please contact <a href= "https://support.vtex.com/hc/en-us/requests">our Support</a>.

The VTEX platform allows you to optimally and practically add different promotion types suited for different scenarios. Through a centralized interface for managing promotions, your store can offer more benefits focused on customer attraction and retention.

The Beta __Promotions__ module is flexible when it comes to creating promotion scenarios with specific conditions for different contexts. For example, you can offer discounts on prices and shipping rates or offer your customers giveaways using scheduled or segmented promotions.  

The __Promotions__ module is available on Admin, via the menu __Promotions & Taxes__ > __Promotions__.

## Promotions list
The home page displays the promotions list in a grid that allows you to easily view basic information about a promotion (name, effects, affected items, ending date, and status). With just one click, you can:

- Activate or deactivate promotions using the <i class="fas fa-toggle-on"></i>  button;
- Duplicate or archive promotions using the <i class="fas fa-ellipsis-v"></i>  button;
- Manage promotion conditions by clicking anywhere in the grid row (see [New promotion](#new-promotion) for more details about promotion conditions).

![promobeta1 acoes lista promocoes EN](https://images.ctfassets.net/alneenqid6w5/1iLvxFtAqM5pFOz6enx8KU/b3f2216333e8dd4cbd084b6408524541/promobeta1_acoes_lista_promocoes_EN.gif)

You can filter and sort your promotion list according to your needs. The VTEX platform allows you to filter your promotions by *Effects*, *Status*, *Starting date*, *Ending date*, or *Trade policy*.

![promobeta2 filtros lista promocoes EN](https://images.ctfassets.net/alneenqid6w5/4UBGUJC4RTEA9alSeHmJlh/e1e802f323d8eba2e296a27ae0f27135/promobeta2_filtros_lista_promocoes_EN.gif)

You can also sort your list in ascending or descending order based on the basic information of the promotion by clicking on the filter title.

![promobeta3 ordenacao lista promocoes EN](https://images.ctfassets.net/alneenqid6w5/60Z7afuYC3PqwTEPCVLVYd/5f56351941377f0829b3582324ed347f/promobeta3_ordenacao_lista_promocoes_EN.gif)

## New promotion
On the Promotions page, click on the __NEW PROMOTION__ button to access the promotion creation page, where you will fill in a series of fields to configure the desired conditions for your promotion. 

![promobeta4 botao novapromocao EN](https://images.ctfassets.net/alneenqid6w5/4Zp0NocPVWeIW44Ky8pWqo/29b06b468de480f45adef9896a7eabe4/promobeta4_botao_novapromocao_EN.png)

The new promotion conditions and fields are divided into the following groups:

- [General](#general)
- [Scheduling](#scheduling)
- [Combining with other promotions](#combining-with-other-promotions)
- [Effects](#effects)
- [Conditions](#conditions)
- [Coupons](#coupons)
- [Restrictions](#restrictions)
- [Origin](#origin)
- [Appearance](#appearance)

Combining different conditions allows you to create multiple scenarios with specific contexts. For instance, you can determine shipping rate discounts for sales with a certain number of products or offer giveaways to particular clients on certain days of the week. There are many options available, and you just have to fill in the fields according to your needs.

### General
- __Status__: defines if the promotion is active or inactive.
- __Name__: promotion name.
- __Description__: internal description of the promotion. This field should be used for the store’s internal communication, to clarify the promotion’s origin, for example, if it is part of a campaign, a fire sale, etc.

### Scheduling
- __Start date and time__: date and time that determine the beginning of a promotion. You can configure this field with a date and time in the future. If that is the case, the promotion will be listed as scheduled until that particular point in time.
- __Set end date__: activates the settings of a promotion’s end date.
- __End date and time__: date and time that determine the end of a promotion. The configured date and time must be subsequent to the start date and time. While the promotion is valid, its status will be active. At the end date and time, the status will automatically change to “Finished”.
- __Recurrence settings__: additional settings for promotion recurrence.
  - __Days of the week__: defines on which days of the week the promotion will be valid. In case you opt for specific days, you must select them.
  - __Time of the day__: defines at which times of the day the promotion will be valid. In case you opt for specific times, you must select a time range.

### Combining with other promotions
- __Apply with other promotions__: this option allows more than one promotion with the same discount type to be [applied simultaneously](https://help.vtex.com/en/tutorial/understanding-competition-of-promotions--tutorials_2270).
- __Apply with manual prices__: this option allows the promotion to apply to products whose prices were manually added via telesales. This option can be used only after configuring your store to enable such price settings.

### Effects
In this section, you must click on the option that contains the effect you want the promotion to have. The available effects are __Price__, __Giveaway__, or __Shipping__. When you select one of these options, their related fields will be available for customization.

#### Price
This effect allows you to configure a discount that will be applied to the shopping cart total or to the price of certain products.

- __Discount type__
  - __Nominal__: the discount that will be applied to the total cart price. For instance, a $20 discount on carts with a total higher than $150.
  - __Percentage__: the percentage discount that will be applied to the product price. For instance, a 10% discount on products from the Kids’ section.
  - __Price table__: the discount will be applied according to the price listed on the selected price table.
- __Affected items__
  - __All catalog__: this option indicates that the promotion applies to all products of your catalog.
  - __Specific products__: indicates which products in your catalog the promotion applies to. You can create conditions by choosing between __Brand__, __Category__, __Collection__, __Product__, __Seller__, and __Product SKU__ and then define if a specific group of products will be affected or excluded from the promotion. For example, a clothing store can create a summer promotion with all the products in the catalog, except the winter collection ones.

#### Giveaway
This effect generates a total discount on the value of the product that is defined as a giveaway. For example, buy one shampoo and get a toiletry bag.

- __SKUs__: option that allows you to select the SKU of the giveaway.
- __Maximum quantity per purchase__: allows you to choose the maximum number of giveaways per order.

>⚠️ You must add prices for all **giveaway products**, even though they are given for free.

#### Shipping
- __Discount type__
  - __Nominal__: the discount that will apply to the shipping rate. For example, a $10 discount on the shipping rate.
  - __Percentage__: the percentage discount that will be applied to the shipping rate. For example, a 90% discount on shipping rates for the Southeast region.
  - __Maximum Value__: the maximum shipping rate allowed per order. If the calculated shipping cost is cheaper than the maximum value, the customer will pay the lowest rate. For example, suppose a retailer defines on the promotion that the maximum shipping rate is $20 and that the system calculates a $10 shipping rate for an order. In that case, the customer will be charged $10. However, if the estimated shipping rate is $30, the customer will be charged $20.
- __Affected items__
  - __All catalog__: this option indicates that the promotion applies to all products of your catalog.
  - __Specific products__: indicates which products in your catalog the promotion applies to. You must select the conditions of the products that will be included in the promotion by choosing between __Brand__, __Category__, __Collection__, __Product__, __Seller__, and __Product SKU__.

### Conditions
- __All customers:__ it indicates that the promotion applies to all your customers.
- __Specific customers:__ indicates which clients the discount applies to. You must define the eligible clients based on the following conditions:
  - __Product in cart__.
  - __Delivery country__.
  - __Credit card BIN__.
  - __First purchase__.
  - __Number of installments__.
  - __Payment method__.
  - __Shipping method__.
  - __Total price range__.
  - __UTM campaign__.
  - __UTM source__.
  - __ZIP code range__.

>ℹ️ If you want to link an <a href= "https://help.vtex.com/en/tutorial/como-criar-cupom--tutorials_319?&utm_source=autocomplete">existing coupon</a> to the new promotion, you must select UTM Campaign and UTM Source and inform the coupon codes.

### Coupons
If you want to create a new coupon linked to the promotion, click on __NEW COUPON__ and fill in the following fields:

- __Coupon code__
- __UTM Source__: the UTM source code of the coupon.
- __UTM Campaign__: the UTM campaign code of the coupon.

By clicking on __Advanced Settings__, you can also configure an additional field:

- __Limit use__: limits the number of times the coupon can be used.

>⚠️ To save this new coupon, click on the **OK** button. If you close the **NEW COUPON** window without saving the changes, the coupon will not be created.

When you create a new coupon for the new promotion, the coupon will also be displayed in the __Coupons__ tab of the __Promotions & Taxes__ module. In addition, your UTM Source and/or UTM Campaign conditions will be automatically linked to the new promotion in the __Specific customers__ filter.

>⚠️ If you change the UTM Source and UTM Campaign conditions in the **Specific customers** filter settings **after** creating the coupon, it will be deleted.

### Restrictions
- __Limit use in the store__: limits the number of times the promotion can be used in the store.
- __Limit use per client__: limits the number of times that a customer can use the promotion. 
- __Maximum number of affected items per cart__: maximum number of products in a cart to which the promotion can apply.
- __Restrict trade policies__: defines which trade policies apply to the promotion.

### Origin
- __Marketplace__: specifies that the promotion is valid only for orders placed directly at your store.
- __Fulfillment__: defines that the promotion is valid only for orders placed at marketplaces where your store acts as a seller.

### Appearance
- __Highlight promotion on product shelves and product pages__: defines if any [additional configuration in the CMS module](https://help.vtex.com/en/tutorial/configuring-promotions-with-a-highlightflag--tutorials_2295) is required to display the promotion highlight. 
