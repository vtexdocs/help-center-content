---
title: 'Creating a campaign audience'
id: 6cnuDZJzIkIeocewAQQK4K
status: PUBLISHED
createdAt: 2018-12-02T18:34:21.663Z
updatedAt: 2023-10-31T19:23:55.713Z
publishedAt: 2023-10-31T19:23:55.713Z
firstPublishedAt: 2018-12-03T16:51:36.457Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: creating-a-campaign-audience
locale: en
legacySlug: creating-campaigns
subcategory: 2cI57eZ3ZiWSeaQs26Gwys
---

The campaign audiences resource allows segmenting your store's promotions based on defining [target audiences](https://help.vtex.com/en/tutorial/campaign-audiences--3o7lhpNseXY2WmjZO0gQ6m#target-audience) meeting specific criteria. For more information on this feature, check out [Campaign audiences](https://help.vtex.com/en/tutorial/campaign-audiences--3o7lhpNseXY2WmjZO0gQ6m).

Follow the steps below to create a new campaign audience:

1. In the VTEX Admin, go to *Promotions > Campaign audience*, or type *Campaign audience* in the search bar at the top of the page.
2. Click `New Campaign Audience`.
3. Fill in the general campaign audience data as described in the [General data](#general-data) section.
4. Next to **Target audience**, click on `Create new target audience`.
5. Fill in the fields described in the [Create new target audience](#creating-a-new-target-audience) section.
6. Click `Save`.

<div class="alert alert-warning">
  <p>After creating a campaign audience, you have to associate it with a campaign promotion to take effect. Follow the steps described in the <a href="https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume">Creating a campaign promotion</a> guide.</p>
</div>

## General data

When creating a new campaign audience, you must enter the following information in the **What are the general campaign audience data?** section:

* **Status:** The current status of the campaign audience.
    * **Active:** Available to use in your store's campaign promotions.
    * **Inactive:** Unavailable to use in your store's campaign promotions.
* **Name:** Name of the campaign audience.
* **Description:** Internal description of the campaign audience.
* **Expiration date:** The amount of time the campaign audience is valid in your store.
    * **Start Date:** Start date scheduled for activating the campaign audience.
    * **Start Hour:** Start hour scheduled for activating the campaign audience.
    * **End Date:** End date scheduled for deactivating the campaign audience.
    * **End Hour:** End hour scheduled for deactivating the campaign audience.

<div class="alert alert-warning">
  <p>When scheduling a campaign audience, the <strong>Start Date</strong> or <strong>Start Hour</strong> must be subsequent to your current date or hour.</p>
<p>The time zone will be the same as the one on the user's device when creating the campaign audience — you cannot adjust the hour to a different time zone.</p>
</div>

## Creating a new target audience

Configuring the target audience allows you to segment users based on specific conditions. For more information on the target audience for campaign audiences, please read the article [Campaign audience](https://help.vtex.com/en/tutorial/campaign-audiences--3o7lhpNseXY2WmjZO0gQ6m).

After clicking `Create New Target Audience`, you must follow the instructions below:

1. Fill in the fields related to the target audience. Please see the sections listed below for details on each field's meaning:
    * [Define your target audience](#define-your-target-audience): Name the target audience.
    * [Items to use for this target audience](#items-to-use-for-this-target-audience): Limit the items associated with this target audience.
    * [Conditions for your target audience to be applied](#conditions-for-your-target-audience-to-be-applied): Fill in the criteria on which customers will be included in the defined target audience.
2. At the bottom of the target audience configuration section, click `Update`.
    The created audience will be listed in the **Target audience** section.
    If you want to edit it, click it and make the necessary changes.
    If you want to delete it, click the bin icon <i class="fas fa-trash-alt"></i>.
3. If you want to create more target audiences for the campaign audience, click `Create new Target Audience` again and repeat steps 1 and 2. If not, go to step 4.
4. If you created more than one target audience, you must select the relationship between them in the campaign audience:
    * **or:** The campaign audience will consist of customers fitting any target audience.
    * **and:** The campaign audience will consist of customers fitting all the target audiences, summing up all their criteria.

![publico-alvo-e-ou-en](https://images.ctfassets.net/alneenqid6w5/2NrpuE4MN7q6qaHI6mkoCe/655312e51c8e30a847cb012d4382de39/en-publico-alvo.gif)

### Define your target audience

* **Name**: Name of the target audience.

### Items to use for this target audience

* **Categories, Brands, Collections** and **SKUs:** Allows adding or removing one or more categories, brands, collections, products and SKUs from the target audience using the **Equal to** or **Different from** criteria.

    The items must meet all selected prerequisites for the customer to be part of the target audience.

* **At least __ products meet the criteria above:** Determines how many items corresponding to the defined criteria must be in the shopping cart for a customer to be in the target audience. All previous criteria must be **Equal to** to enable this configuration.

For example: The target audience includes items whose brand is **Nike**, as illustrated below. The configuration also indicates that at least 3 items must meet the criteria. Therefore, a customer must have at least **3** items in the shopping cart to be included in the target audience.

![exemplo-marca-publico-alvo-en](https://images.ctfassets.net/alneenqid6w5/4Bot3XZUQJ4JkWJknpTxB2/7aeb73bd45e025ca84337c37d6800991/screencapture-lojadobreno-myvtex-admin-rnb-2022-07-21-18_10_40_1.png)

### Conditions for your target audience to be applied

* **Minimum order value:** Minimum value the items in the cart must have in total. The total considers the sum of the prices of cart items that meet all the campaign audience criteria.
* **Maximum order value:** Maximum value the items in the cart must have in total. This total considers the sum of the prices of cart items that meet all the campaign audience criteria.
* **Item price between __ and __:** Minimum and maximum price for each item in the cart. The campaign audience will be activated if the item value is within the range of the set values.
* **Use restriction BINs:** The campaign audience will be activated if the credit card _Bank Identification Number_ (BIN) corresponds to the filled-in characters. The BIN refers to the first 6 or 8 digits on a credit card and is used to identify the bank and the card label.
* **Marketing Tags:**: this field prevents activating the campaign audience if the purchase is made using the [VTEX Subscriptions module](https://help.vtex.com/en/tutorial/how-subscriptions-work--frequentlyAskedQuestions_4453).
* **Customer cluster:** The customer will be part of the target audience if they are included in the selected cluster. It is important to highlight that the cluster name must be written exactly as in the Master Data. Spelling errors will prevent the configuration from working correctly.
* **Maximum number of installments:** The campaign audience will be activated if the selected number of installments is lower or equal to the maximum number allowed.
* **Only if it's a first buy:** The campaign audience will be activated only if this is the customer's first purchase from the store.
* **Apply the discount even if the user is not logged in?:** This field is displayed when the **Only if it's a first buy option is checked**. If the field above is checked, the customer will be included in the target audience even if they are not logged in using an email and password. When the field is unchecked, the customer will only be included in the target audience if they sign in with an email and password previously used to access the store.
* **Price "from" and "to" are the same** or **Price "from" and "to" are different:** Refers to the values listed in the product [list price](https://help.vtex.com/en/tracks/pricing-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#list-price). You can only select one of the two options.
* **Shipping to postal code should Include / Exclude from __ to __:** Allows including or excluding shipping code ranges for order shipment. The campaign audience will be activated if the shipping code meets the rule set for the target audience.
* **Affiliates:** Allows selecting [affiliates](https://help.vtex.com/en/tutorial/what-is-an-affiliate--4bN3e1YarSEammk2yOeMc0) from a list. A campaign audience will be activated if the purchase is made in one of those affiliate marketplaces.

  <div class="alert alert-warning">
    <p>The <strong>Affiliates</strong> option only applies if the affiliate is a VTEX store.</p>
  </div>

* **utm_source:** Allows selecting the desired [utm_source](https://help.vtex.com/en/tutorial/what-are-utm-source-utm-campaign-and-utm-medium--2wTz7QJ8KUG6skGAoAQuii) or creating a new one to be linked to the campaign audience. The campaign audience will be activated if customer navigation is made using the utm_source corresponding to any entered values. It is important to note that customers can only enter one utm_source at checkout.
* **utm_campaign:** Allows selecting the desired [utm_campaign](https://help.vtex.com/en/tutorial/what-are-utm-source-utm-campaign-and-utm-medium--2wTz7QJ8KUG6skGAoAQuii) or creating a new one to be linked to the campaign audience. The discount will be granted if the customer navigation uses a utm_campaign corresponding to the entered value.
* **Shipping method:** Allows selecting the [shipping option](https://help.vtex.com/en/tutorial/how-does-the-type-of-delivery-work--tutorials_126) for the target audience. For example: standard or express. The campaign audience will be activated if the customer selects one of the defined shipping options when completing an order.
* **Apply selected discount only when one of the above carriers is selected by the customer:** The campaign audience will be activated only after the customer selects the order delivery method.
* **Payment system:** Allows selecting the payment methods that will be included in the target audience. The campaign audience will be activated if the payment method selected by the customer is the one configured for this target audience.

  <div class="alert alert-warning">
    <p>Campaign audiences defined by <strong>Payment system</strong> or <strong>Maximum number of installments</strong> will not apply to orders paid using two credit cards or vouchers.</p>
  </div>

## Learn more

- [Campaign audiences](https://help.vtex.com/en/tutorial/campaign-audiences--3o7lhpNseXY2WmjZO0gQ6m)
- [List of campaign audiences](https://help.vtex.com/en/tutorial/campaign-audiences-list--2aW3JH34Zsm4keR5wtXZbT)
- [Creating a campaign audience](https://help.vtex.com/en/tutorial/criar-audiencia-de-campanhas--6cnuDZJzIkIeocewAQQK4K)
