---
title: 'Subscription plans'
id: 5kczKRqHEsrs1tYtRcY8wR
status: CHANGED
createdAt: 2021-07-06T14:33:32.850Z
updatedAt: 2022-07-26T22:51:42.731Z
publishedAt: 2021-07-06T17:47:04.593Z
firstPublishedAt: 2021-07-06T15:07:38.880Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: subscription-plans
locale: en
legacySlug: subscription-plans-beta
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

The **Plans** page in the **Subscriptions** module displays a list of all subscription plans configured in your store, whether they have been created via the [New plan page](https://help.vtex.com/en/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) or [SKU attachments](https://help.vtex.com/en/tutorial/como-criar-um-anexo-de-assinatura--2bUuKyPflA8cOGLv8OvaKK). 

To offer subscription plans for your customers, you need to install the Subscriptions app and make all the necessary configurations. For more information, read the article [How to configure Subscriptions in your store](https://help.vtex.com/en/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj).

On the **Plans** page, you can view and manage the subscription plans available to your customers, as illustrated below.

![planslist EN](//images.ctfassets.net/alneenqid6w5/5PAOM3BmvgeIjU1ruAmEYG/0355551976bbb3465d4ddad5ca8cd254/planslist_EN.png)

Here are the main features of this page:

* [Create a new plan](#create-a-new-plan)
* [Search](#search)
* [Filter](#filter)
* [Plan details](#plan-details)
* [Show rows](#show-rows)
* [Pagination](#pagination)

## Create a new plan

By clicking on the `New plan` button, you will be redirected to the page for adding a subscription plan. Check out our article [Creating a subscription plan](https://help.vtex.com/en/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) for more details.

## Search

To search for a specific subscription plan, you can type its name in the search bar above the subscription plan list.

Search results are updated in real-time. As you type, the plans displayed are updated according to the term you are searching for.

## Filter

You can filter the subscription plans displayed in the list by **Status**. Here are the available options:

* **All**: displays active and inactive plans.
* **Active**: displays only active plans.
* **Inactive**: displays only inactive plans.

Learn more about each status in the [Plan details](#plan-details) section.

## Plan details

Each column of the subscription plan list displays different information. See below the plan details and actions available on the list.

* **Name**: displays the name of the subscription plan that was added when creating it. Once a plan is saved, its name cannot be edited.
* **Id**: displays the subscription plan identifier, which follows the format `vtex.subscription.{name}`. The subscription plan ID is automatically generated when you fill in the Identification name on the [New Plan page](https://help.vtex.com/en/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC). If you are creating the plan manually [via SKU attachment](https://help.vtex.com/en/tutorial/como-criar-um-anexo-de-assinatura--2bUuKyPflA8cOGLv8OvaKK), the ID will be equivalent to the name of the subscription attachment. This field cannot be edited.
* **Products**: shows the number of products associated with the subscription plan. It indicates the number of products in your catalog that are available in the subscription option for customers at checkout or via __My Account__. This number does not consider the number of SKUs of each product.
* **Status**: displays the current status of the subscription plan and a &lt;i class="fas fa-toggle-on">&lt;/i> button to switch from one status to another. Here are the available statuses:
    * **Active**: means that the plan is available for customers creating new subscriptions with associated products.
    * **Inactive**: means that the plan is not available for customers creating new subscriptions, even if they include associated products.

<div class="alert alert-info">
<p>Inactive plans are disabled only for new subscriptions. If a customer created a subscription when the plan was active, it would continue to place orders in the next cycle dates for that customer.</p>
</div>

* <i class="fas fa-ellipsis-v"></i> **button**: by clicking on this button, you can perform the following actions.
    * **Edit**: opens the page to edit the subscription plan.
    * **Delete**: allows you to delete the plan permanently. Before deleting it, a window will appear asking you to confirm your choice. If you click on `Delete plan`, this action **cannot** be undone.

<div class="alert alert-warning">
  <p>When a plan is deleted, customers who have this plan will <strong>not</strong> have their orders placed in the next subscription cycles. To prevent this plan from being used in new subscriptions but keep placing future orders from its pre-existing subscriptions, you should disable the plan instead of deleting it.</p>
</div>

## Show rows

By default, the number of rows displayed on each page is 5. If you want to see a few more rows, you can choose to display 10 or 15 rows in the **Show rows** field at the bottom of the page.

## Pagination

To navigate between pages in the subscription plan list, use the <i class="fas fa-chevron-left"></i> and <i class="fas fa-chevron-right"></i> arrows in the lower right corner of the page.

## Learn more

* [Creating a subscription plan](https://help.vtex.com/en/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC)
