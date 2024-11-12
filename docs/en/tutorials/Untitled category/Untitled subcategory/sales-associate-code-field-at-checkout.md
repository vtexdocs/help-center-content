---
title: 'Sales associate code field at Checkout'
id: 6hiRCXt5Cz250o7hBnN2Tp
status: PUBLISHED
createdAt: 2023-06-20T12:18:18.542Z
updatedAt: 2023-06-20T21:50:57.120Z
publishedAt: 2023-06-20T21:50:57.120Z
firstPublishedAt: 2023-06-20T15:04:21.346Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: sales-associate-code-field-at-checkout
locale: en
legacySlug: sales-associate-code-field-at-checkout
subcategoryId: unknown-subcategory
---

On VTEX, you can create a field to add the sales associate code at Checkout. It allows you to:
- Link a particular order to a sales associate.
- Give exclusive discounts to the customer.
- Manage your sales associates' performance, collecting data such as the number of sales / average ticket per sales associate and sales commission ranking.

>⚠️ The **sales associate code**  field does not replace the **discount coupon** field (native on the VTEX platform). By completing the settings outlined in this article, both can be used to give discounts.

To create the field and add it to the Checkout page of your store, you need to complete three steps:

1. [Creating a new data entity](#creating-a-new-data-entity)
2. [Creating a sales associate code promotion](#creating-a-sales-associate-code-promotion)
3. [Customizing the Checkout UI](#customizing-the-checkout-ui)

## Creating a new data entity

The **sales associate code** field must be added to [Master Data](https://help.vtex.com/en/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) as a new entity. To create the data entity, follow the steps below:

1. In VTEX Admin, go to **Store Settings > Storefront > Master Data**, or type **Master Data** in the search bar at the top of the page.
2. Create a new [data entity](https://help.vtex.com/en/tutorial/creating-data-entity--tutorials_1265#how-to-set-up) called *salesassociatecode*.
3. In the new data entity, create the following fields:
    - **Sales associate code**: with a maximum of 10 characters (Varchar10 type).
    - **Email**: sales associate email address (Email type).
    - **Name**: sales associate name (Text type).
    - **Status**: indicates whether the sales associate is active or inactive (Boolean type).
    - **Store**: identification of the store where the sales associate works (Text type).
    - Other fields (as needed).

<blockquote><ui>4. Add the information for each sales associate to the fields you created in the previous step.</ui>

<blockquote><ui>5. Create a <a href="https://help.vtex.com/en/tutorial/creating-form-in-master-data--tutorials_1047">form</a> to access the information of the new <i>salesassociatecode</i> entity through the Master Data interface.</ui>

## Creating a sales associate code promotion

After creating the salesassociatecode entity, you need to link it to a promotion. To create a new promotion, follow the steps below:

1. In the VTEX Admin, go to **Promotions > Promotions**, or type **Promotions** in the search bar at the top of the page.
2. Create a new [regular promotion](https://help.vtex.com/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N). Complete the **Promotion overview** and the **To which items will this promotion apply?** fields.

>ℹ️ Callout Information: If you want to use the sales associate code field to give a discount on the purchase amount, complete the information in the **What is the type and amount of discount?**.

<blockquote><ui>3. In <b>To which items will this promotion apply?</b>, click the <b>utm_campaign</b> option and type <i>salesassociatecode</i>.</ui>

![utm campaign codigovendedor](https://images.ctfassets.net/alneenqid6w5/6jroNJYCvzunmfosErnmZF/4886ffbd85e8e08257a5d8249a734a4f/UTM_Campaign_codigovendedor_en.PNG)

<blockquote><ui>4. In <b>Restrictions and limitations of use</b>, add the other available restrictions if desired. Select the <b>Apply with other promotions</b> option.</ui>

<blockquote><ui>5. Click <b>Save</b>.</ui>

## Customizing the Checkout UI

The last step is configuring the Checkout interface to display the **sales associate code** field.

To customize this, you need to contact the partner agency that built your store and request that the new field be added, allowing the customer to enter the sales associate code and see their name displayed.

Additionally, you need to complete the following steps:

1. When simulating a purchase and entering the sales associate code on the Checkout page, make sure that the GET [Search Documents](https://developers.vtex.com/docs/api-reference/master-data-api-v2#get-/api/dataentities/-dataEntityName-/search) call performs the search in the entity `salesassociatecode` and returns all the information added for the sales associate. Example call: https://{accountName}.{environment}.com.br/api/dataentities/codigovendedor/search?codigovendedor=12345.

>⚠️ The **status** field must return **true**, indicating that the sales associate code is valid.

<blockquote><ui>2. Run the <a href="https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm">Update orderForm configuration</a> POST call to add the following information to the store <a href="https://developers.vtex.com/docs/guides/orderform-fields">orderForm</a></ui>:

<blockquote><blockquote>- <b>marketingData</b>: In <i>"utmCampaign"</i>, enter <i>"salesassociatecode"</i>. If this information is not described, the promotion (sales associate code) will not be applied to the cart, and the field will not be displayed.

<blockquote><blockquote>- <b>openTextField</b> (optional): Add notes or comments (e.g., information for commissioning filters).

>⚠️ Only the sales associate name should be displayed on the Checkout page.

After completing all the above steps, the **Sales associate code** field will be available on the Checkout page.

![Sales associate code](//images.ctfassets.net/alneenqid6w5/kWi3gE5Q9gyHP2pa8XFpv/6f6627b73ef728a83841ed4017256925/Checkout_UI_-_EN_2.png)  
