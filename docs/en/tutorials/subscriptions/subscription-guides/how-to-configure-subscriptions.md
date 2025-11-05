---
title: 'How to configure Subscriptions in your store'
id: 1FA9dfE7vJqxBna9Nft5Sj
status: PUBLISHED
createdAt: 2019-01-31T16:00:03.228Z
updatedAt: 2025-09-02T18:16:03.375Z
publishedAt: 2025-09-02T18:16:03.375Z
firstPublishedAt: 2019-01-31T16:01:57.927Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-to-configure-subscriptions
legacySlug: how-to-configure-subscription-v2
locale: en
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

> ℹ️ To install the Subscriptions module, please contact [our Support](https://support.vtex.com/hc/en-us/requests).

The **Subscriptions** system is an app developed by VTEX to facilitate recurring sales. It works as an automatic scheduler, repeating orders according to the frequency chosen by your customer.

Your costumer can indicate how often they would like to repurchase a certain product and the system will automatically resubmit the purchase order according to the selected frequency, on a recurring basis.

This purchase will be made automatically, according to the selected frequency, with the same characteristics configured in the original order. Subscription is a simple way to save your customer's time and to provide a scheduled sales flow to your store.

To activate this feature, you will need to:

1. [Install the Subscriptions module](#1-install-the-subscriptions-module)
2. [Configure payment methods](#2-configure-payment-methods)
3. [Create a subscription plan](#3-create-a-subscription-plan)
4. [Configure roles for subscriptions](#4-configure-roles-for-subscriptions)

## 1. Install the Subscriptions module

To install the Subscriptions module, open a request with [our Support](/en/support), indicate the name of your VTEX account, and select the **Technical** option.

The request is expected to be answered within 24 hours, following [our service SLA](/en/tutorial/como-funciona-o-suporte-da-vtex--2eAT5EyOvaLoHdIWDVaxC3#support-plans).

## 2. Configure payment methods

To configure payment methods for subscription orders, please follow the steps below.

1. Log in to the **Subscriptions module** of your Admin. 
2. Click on the **Settings** tab.
3. Toggle the checkbox next to the payment method you want to activate to **Activated**.

Currently, the following payment methods are enabled for subscription orders:

* **Boleto (popular Brazilian off-line payment method)**
* **Credit card**

> ℹ️ To make the **Credit card** payment option available, contact your store's acquirer and make sure they accept recurring purchase transactions coming from tokenized cards (no CVV). The **Subscriptions** system will use the same card data from the first purchase to place subsequent subscription orders, ensuring the security of the entire process.

To enable this type of transaction in the connector, the store manager must ask the acquirer for permission to process recurring payments. Check out our article [Registering gateway affiliations](/en/tutorial/registering-gateway-affiliations--tutorials_444).

## 3. Create a subscription plan

In the __Subscriptions__ module, you need to create subscription plans to offer to your customers and to associate products with these plans. The plans indicate that the Subscriptions feature is active for certain products and display the available subscription frequencies. Please refer to the article [Creating a subscription plan](/en/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) to learn more about this process.

There is another option to create a subscription plan, which involves manually creating an SKU attachment in the __Catalog__. In this case, the **SKU attachment** is responsible for indicating that the Subscription feature is active for that SKU and which order frequencies are available. Check out the article [How to create a subscription attachment](/en/tutorial/como-criar-um-anexo-de-assinatura--2bUuKyPflA8cOGLv8OvaKK) to learn more about this process.

## 4. Configure roles for Subscriptions

There are a number of subscription-related features available in the **Roles** module of your store. These features allow your VTEX Admin users to access certain features in order to operate the Subscriptions module. To learn more about roles, please read this [article](/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role).

> ⚠️ If the user does not have the permissions required to access the data on the **Subscriptions** pages, the system will display a warning stating that they do not have those permissions, and the user will be unable to view the data.

See the table below for features related to the Subscriptions module.

| Feature name on the Roles page | Key name       | Description                                                                        |
|---------------------------------------------|---------------------|----------------------------------------------------------------------------------|
| Subscription view only                      | SubscriptionViewer  | Allows viewing lists related to subscribers and orders only            |
| Subscription view and edit                  | SubscriptionManage  | Allows edits and actions, but does not give access to charts and non-monetary relationships |
| Subscription metrics and reports            | SubscriptionMetrics | Allows viewing charts, figures and trends                                   |
| Subscription admin                          | SubscriptionAdmin   | Allows configuring Subscriptions                                              |

To configure Subscription roles, please follow the instructions below.

1. Under **Account Settings**, click **User Roles**.
2. Click `New Role`.
3. Fill in the **Role name**.
4. Under **Products and Resources** select `Subscriptions`.
5. Check the resources you would like to add.
6. Click `Save`.

Once Subscriptions are configured in your store, please read our article on how to [manage subscriptions](/en/tutorial/como-gerenciar-assinaturas--6Jk50FPbv6iuz1OsFypv8x).

You can test the purchase flow of a subscription from your customer's perspective. To understand how your customer generates a subscription order, please refer to our article on [How subscriptions work](/en/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453).
