---
title: 'How to create a subscription attachment via the Catalog module'
id: 2bUuKyPflA8cOGLv8OvaKK
status: PUBLISHED
createdAt: 2021-07-06T15:31:40.648Z
updatedAt: 2024-09-20T16:57:10.523Z
publishedAt: 2024-09-20T16:57:10.523Z
firstPublishedAt: 2021-07-06T17:47:38.919Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: how-to-create-a-subscription-attachment-via-the-catalog-module
locale: en
legacySlug: how-to-create-a-subscription-attachment
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

>ℹ️ If you use the **Subscriptions** module in the VTEX Admin, we recommend creating a subscription plan through this module. For more information, see the article [Creating a subscription plan](https://help.vtex.com/en/tutorial/creating-a-subscription-plan--1qGRoFczm98Wgt81f9mUqC).

[Subscriptions](https://help.vtex.com/en/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453) is the VTEX solution that allows merchants to sell to subscribing customers on a recurring, automatic basis based on a specified frequency.

There are two ways your store's products can be purchased via subscription:

* Creating [subscription plans](https://help.vtex.com/en/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) via the **Subscriptions** module.
* Creating subscription attachments via the **Catalog** module.

This article explains how to create subscription attachments via the **Catalog**, which is recommended when your store does not use the **Subscriptions (Beta)** module.

>⚠️ It's important to understand the use of the term attachment in the context of subscriptions:
> *[Attachment](https://help.vtex.com/en/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm): An optional, no-cost customization of the SKU that allows the merchant to add additional information to an item.
> * **Subscription attachment:** A specific type of attachment that allows creating subscriptions for an SKU. Customers can subscribe to receive the SKU periodically when it is associated with a subscription attachment.
> * **SKU subscription with attachment:** When a customer creates a subscription from an order containing a SKU with an attachment, the attachment from the original order will only be kept in future subscription orders if the merchant enables this setting. This can be done only via API using the [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings) endpoint. Learn more in [How to keep attachments from original orders in subscriptions](https://developers.vtex.com/docs/guides/how-to-keep-attachments-from-original-orders-in-subscriptions).

## Catalog subscription attachment

The subscription attachment is used to configure the subscription feature for the SKU it's associated with. This type of attachment contains the subscription frequency and cycle date settings.

To create a subscription attachment from the Catalog, you must do the following:

1. [Create the subscription attachment](#1-creating-the-subscription-attachment)
2. [Configure the subscription frequency and cycle date](#2-configuring-the-frequency-and-date-of-the-subscription-cycle)
3. [Associate the SKU with the subscription attachment](#3-associating-a-sku-with-the-subscription-attachment)

## 1. Creating the subscription attachment

Follow the steps below to create a subscription attachment:

1. In the VTEX Admin, go to **Catalog > Custom Fields**, or type **Custom Fields** in the search bar at the top of the page.
2. In the **Services and SKUs** tab, click `New Attachment`.
3. In the **Name field**, enter a value in the format `vtex.subscription.{suffix}`, and replace `{suffix}` with the name you want to use to differentiate this subscription, as in the following examples:
    * `vtex.subscription.plan1`
    * `vtex.subscription.test`
4. In the **Attachment required** field, leave the checkbox unchecked.

  >❗ Make sure the **Attachment required** checkbox is unchecked. If it is checked, the **Subscriptions** system will try to send an order with a subscription for an item that already has a required attachment (the subscription attachment), which will generate an error in the system. Therefore, if the **Attachment** required field was checked by mistake, uncheck it and ask the customer to place the order again.

5. In the **Status** field, select the checkbox `Enable/Disable the attachment`.
6. Click `Save`.

## 2. Configuring the frequency and date of the subscription cycle

After creating the subscription attachment, you must configure the frequency and date of the subscription cycle. The frequency is the periodicity of the subscription. This value is displayed for your customers to choose when they create the subscription and can be set to daily, weekly, monthly, or yearly, depending on your business strategy.

The subscription cycle date corresponds to the day on which the order will be repeated each subscription cycle. For example, if a customer creates a subscription for cat food on the 15th of each month, the 15th is the cycle date, and the subscription frequency is monthly.

To configure the subscription frequencies and cycle dates you want to offer in your store, follow the steps below:

1. In the VTEX Admin, go to **Catalog > Custom Fields**, or type **Custom Fields** in the search bar at the top of the page.
2. In the **Services and SKUs** tab, in the row corresponding to the attachment you created previously, click `Edit`.
3. In the **Key name** field, enter the fixed value `vtex.subscription.key.frequency`, which corresponds to the frequency.
4. In the **Permitted values** field, set the desired values for the subscription frequency (following the guidelines in the table below).
5. Click `Add New`.
6. In the **Key name** field, enter the fixed value `vtex.subscription.key.purchaseday`, which corresponds to the date of the subscription cycle.
7. In the **Permitted values** field, set the desired values for the cycle date (following the guidelines in the table below).

  >⚠️ If no value is entered in the **Permitted values** field for `vtex.subscription.key.purchaseday`, the subscription cycle date will be the same day of the week (for weekly frequency) or day of the month (for monthly frequency) as the original order.

  >ℹ️ You do not need to complete the **Maximum number of characters** field.

8. Click `Save`.

| **Key name** | **Permitted values** |
| --- | --- |
| `vtex.subscription.key.frequency` | <p>The permitted values are a combination of a number from 1 to 9 + space + any of the following:<ul><li>`day`: Daily orders. Example: `5 day`.</li><li>`week`: Weekly orders. Example: `4 week`.</li><li>`month`: Monthly orders. Example: `3 month`.</li><li>`year`: Yearly orders. Example: `2 year`.</li></p><p>To offer multiple frequency options, separate the values with a comma and do not include a space after the comma.<ul><li>Example: To offer both a monthly and a weekly subscription option, enter `1month,1week`.</li></ul></p> |
| `vtex.subscription.key.purchaseday` | <p><b>Weekly frequency</b></p><p>The permitted values for the weekly subscription cycle date range from 0 to 6, corresponding to the days of the week:<ul><li>`0`: Sunday</li><li>`1`: Monday</li><li>`2`: Tuesday</li><li>`3`: Wednesday</li><li>`4`: Thursday</li><li>`5`: Friday</li><li>`6`: Saturday</li></ul></p><p>To offer more than one day for the cycle with a weekly frequency, separate the values with a comma.<ul><li>Example: A weekly subscription with a cycle date on Sundays, Wednesdays, and Fridays would be written as `0,3,5`.</li></ul></p><br><p><b>Monthly frequency</b></p><p>The permitted values range from `1` to `28` and correspond to the days of the month, where `1` is the first day of the month, `2` is the second, and so on, up to `28`, which is the twenty-eighth day of the month.</p><p>If you use more than one number, separate them with a comma and do not include a space after the comma.<ul><li>Example: A monthly subscription with a cycle date on the first and last days would be written as `1,28`.</li></ul></p> |

The following images provide examples of how to complete the fields in the VTEX Admin:

* **Example of monthly frequency:** The image shows a monthly subscription where orders can be placed on the 1st, 15th, or 28th of each month.

  ![EN Assinatura Exemplo Valores month](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Subscriptions/Subscription%20Guides/how-to-create-a-subscription-attachment-via-the-catalog-module_1.png)

* **Example of a frequency every 3 weeks:** The image shows a subscription that generates new orders every 3 weeks, with purchases occurring on Sundays, Tuesdays, or Saturdays.

  ![EN Assinatura Exemplo Valores week](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Subscriptions/Subscription%20Guides/how-to-create-a-subscription-attachment-via-the-catalog-module_2.png)

## 3. Associating a SKU with the subscription attachment

Lastly, to create a subscription attachment in the **Catalog**, associate the subscription attachment with the desired SKUs. To do so, follow the steps below:

1. In the VTEX Admin, go to **Catalog > All Products**, or type **All Products** in the search bar at the top of the page.
2. In the **SKU** column, click the sku name you wish to associate with the subscription attachment.
3. In the **Advanced Settings** tab, find the **Attachments** field and check the subscription attachment checkbox.
4. Click `Save`.

After that, customers will be able to create subscriptions in your store to automatically purchase the SKU associated with the subscription attachment on a recurring basis.

## Learn more

* [How subscriptions work](https://help.vtex.com/en/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453)
* [How to configure subscriptions in your store](https://help.vtex.com/en/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj)
* [How to keep attachments from original orders in subscriptions](https://developers.vtex.com/docs/guides/how-to-keep-attachments-from-original-orders-in-subscriptions)
