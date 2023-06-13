---
title: Creating a subscription plan
id: 1qGRoFczm98Wgt81f9mUqC
status: PUBLISHED
createdAt: 2021-07-06T14:35:00.792Z
updatedAt: 2022-12-22T20:39:08.965Z
publishedAt: 2022-12-22T20:39:08.965Z
firstPublishedAt: 2021-07-06T17:39:43.728Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: creating-a-subscription-plan
legacySlug: creating-a-subscription-plan-beta
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

To offer **subscription plans** to your customers, you need to install the Subscriptions app and make the necessary configurations. For more information about this process, see our article [How to configure Subscriptions in your store](https://help.vtex.com/en/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj).

Once the app has been set up, you must create subscription plans for your customers and associate products with these plans. The Plans feature indicates for which products the Subscriptions option is active and the available subscription frequencies.

There are two possible ways to create a subscription plan. The **most recommended** is to create a [new plan directly from the Subscriptions module](#new-plan-in-the-subscriptions-module) in the Admin.

Another possibility is to create a [SKU attachment related to the subscription in the Catalog](#sku-attachment-in-the-catalog) module. SKU attachments are equivalent to subscription plans.

<div class="alert alert-warning">
  <p>For this reason, you should <strong>not</strong> create both. Otherwise, the plan will be duplicated.</p>
</div>

## Creating a new plan in the Subscriptions module

Creating a new plan in the **Subscriptions** module is the most recommended option, as it centralizes the experience in a single module of the VTEX platform. You can do it by following the steps below:

1. In the **Subscriptions** module, go to the **Plans** page.
2. Click on the `New Plan` button.
3. Fill in the information required in the [Settings](#settings) tab.
4. Click on the [Associated Products](#associated-products) tab and select the products you want to associate with the subscription plan.
5. Click on `Save`.

<div class="alert alert-warning">
  <p>By default, plans are saved as active, even if they do not have any associated products. Plans that do not have associated products are not available as an option for customers.</p>
</div>

### Settings

In the **Settings** tab, please fill in the following fields.

#### Identification

* **Name**: enter a name for the new subscription plan.
* **ID:** this field is automatically filled in with an identifier for the subscription plan following the format `vtex.subscription.{name}`. The system fills in the `{name}` with the plan name entered in the **Name** field.

#### Allowed frequencies

In this section, click on the `Add frequency` button to create a periodicity for the subscription. The value entered in this section will be displayed for the customer to choose how often they want to purchase that product.

You can offer the options to create orders daily, weekly, monthly or annually, depending on your business strategy.

Fill in the fields below to configure the frequency.

   * **Select frequency**: choose one of the options (Day, Week, Month or Year).
   * **Run every**: set the number of days, weeks, months or years for the subscription cycle.
       For example, if you want to give the option of subscribing to a product on a daily basis, select the frequency **Day** and then **1 day**. If you want to give the option of subscribing to a product every two weeks, select **Week** and then **2 weeks**.

To save the frequency you have added, click on the `Add` button.

To delete a previously created frequency, click on the <i class="far fa-trash-alt"></i> button.

You can provide multiple frequency options on the same plan. In this case, you should click the `Add frequency` button again and repeat the process by filling in the fields with the new frequency information. This way, customers can choose the frequency they prefer.

<div class="alert alert-warning">
  <p>You cannot assign a validity period to the subscription plan in the <strong>Subscriptions</strong> module. Only subscription plans configured as SKU attachments in the <strong>Catalog</strong> module can have validity periods configured.</p>
</div>

### Associated Products

The **Associated Products** tab displays a list of all Products and SKUs in your store and allows you to select the ones you want to associate with the subscription plan. On this tab, you can navigate between the categories **All** and **Associated**.

In the category **All**, you can see all the products and SKUs in your store's catalog. To search for a specific product or SKU, enter its ID in the search bar.

The list of products and SKUs contains the following columns:

* **Image**: the image added to the product or SKU.
* **Product:** name of the product.
    * **Id**: number that corresponds to the product ID.
    * **SkuId**: number that corresponds to the SKU ID.
* **Brand**: the product’s brand name.
* **Category**: the product’s category name.

On this page, you can perform the following actions:

* **Select**: by clicking on the <i class="far fa-square"></i> in the row of each product, you can select products or SKUs individually. Another option is to click on the first <i class="far fa-square"></i> and select all the products and SKUs displayed on the page to add them to the subscription plan, as illustrated in the example below.

![selecionarskus EN](//images.ctfassets.net/alneenqid6w5/3nBgV1SCLFqG92L1rOBXOX/f833322d9519810cbdd0d1b7e17e4551/selecionarskus_EN.gif)

* <i class="fas fa-chevron-down"></i> __button__: displays the SKUs, i.e., product variations.
* **Add**: click on this button to add products or SKUs to the subscription plan.
* **Remove**: click on this button to remove products or SKUs from the subscription plan.

Products added to the subscription plan are displayed in the **Associated** list, where it is possible to remove them from the plan individually or in bulk.

To navigate between pages in both lists, use the <i class="fas fa-chevron-left"></i> and <i class="fas fa-chevron-right"></i> arrows in the lower right corner of the page.

## Alternative path: configuring a SKU attachment in the Catalog

Creating a SKU attachment is an alternative option equivalent to creating a subscription plan. The attachment indicates that the Subscription feature is active for a given SKU, and which frequencies are available.

We recommend using the path described above to create a plan directly in the Subscriptions module. However, if you opt to do it via SKU attachment, follow the steps described in the article [How to create a subscription attachment](https://help.vtex.com/en/tutorial/how-to-create-a-subscription-attachment--2bUuKyPflA8cOGLv8OvaKK).

## Learn more

* [Subscription plans](https://help.vtex.com/en/tutorial/planos-de-assinatura-beta--5kczKRqHEsrs1tYtRcY8wR)
