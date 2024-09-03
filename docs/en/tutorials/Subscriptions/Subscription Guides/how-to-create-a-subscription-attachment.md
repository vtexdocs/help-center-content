---
title: 'How to create a subscription attachment'
id: 2bUuKyPflA8cOGLv8OvaKK
status: PUBLISHED
createdAt: 2021-07-06T15:31:40.648Z
updatedAt: 2021-07-06T18:27:09.787Z
publishedAt: 2021-07-06T18:27:09.787Z
firstPublishedAt: 2021-07-06T17:47:38.919Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: how-to-create-a-subscription-attachment
locale: en
legacySlug: how-to-create-a-subscription-attachment
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

 >ℹ️ If you have the **Subscriptions Beta** module, the recommended process to create a subscription plan is directly through the **Subscriptions** module. Read the article [Creating a subscription plan (Beta)](https://help.vtex.com/en/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) for more information.

The SKU Attachment is responsible for indicating that the subscription functionality is active for that SKU, and also what will the available frequency be.

When the customer places an order and selects a subscription option, this information will be sent to the __Order managemen__ system, where the __Subscriptions__ system will check the details and schedule the future purchases.

See next how to create a subscription attachment.

* [Create a SKU attachment](#creating-a-sku-attachment)
* [Configure the frequency and date of the subscription cycle](#configuring-the-frequency-and-date-of-the-subscription-cycle)
* [Associate the attachment with an SKU](#associating-the-attachment-with-an-sku)

### Creating a SKU attachment

To create a SKU attachment, follow the steps below.

1. Access the **Catalog** module.
2. Click on the **Custom Product Attributes** section.
3. On the **Services and SKUs** tab, click on the `New Attachment` button.
4. In the **Name** field, enter a value in the `vtex.subscription.{suffix}` format, where `{suffix}` must be replaced by the name you want to give to this subscription, as in the following examples:
    * `vtex.subscription.plan1`
    * `vtex.subscription.test`
5. Leave the **Attachment required** box unchecked.

 >⚠️ Make sure the **Attachment required** box is unchecked. If the attachment is marked as required, the **Subscription** system will attempt to send a recurring order for an item that already has a required attachment, causing an error in the system. In case you misconfigure this option, uncheck the required attachment field and ask your customer to try again.

6. In the **Status** field, check the **Enable/Disable attachment** box and click on `Save`.

### Configuring the frequency and date of the subscription cycle

After creating the SKU attachment, you have to configure the **frequency** and **date of the subscription cycle.**

Frequency refers to the periodicity of the subscription. This value will be displayed for customers to choose between the available subscription frequency options for a given SKU. You can configure the subscription frequency to place orders on a daily, weekly, monthly, or annual basis, depending on your business strategy.

When associated with the frequency you have previously determined, the date of the subscription cycle corresponds to the day on which the order will be placed every subscription cycle. For example, your customer may set up a subscription to purchase cat food on the 15th of each month. In this case, the date of the subscription cycle is 15, and the frequency is monthly.

Follow the step-by-step instructions below to configure available frequencies and dates for the subscription cycle. The values you add will be displayed at checkout so that customers may choose the frequency and date that most suits them.

1. In **Custom Product Attributes** > **Services and SKUs**, click on the `Modify` button, next to the attachment you have created.
2. In the **Key Name** field, add the fixed values `vtex.subscription.key.frequency` for the **frequency** and `vtex.subscription.key.purchaseday` for the **date of the subscription cycle**.
3. Set the **Permitted Values** for each key according to the frequencies and dates you want to make available in your store.

   * The following units can be used for the **frequency** (`vtex.subscription.key.frequency`): `day`, `week`, `month`, `year`. There must be a space between the number and the frequency unit.

        **Examples**: `3 week`, `8 month`, `1 year`, or `7 day`. If you want to give your customer the option to subscribe to an item daily, fill it in with `1 day`. If you want to make available the option of subscribing to an item every two weeks, fill it in with `2 week`.

        You can offer multiple frequency options. In that case, you must separate values by commas. For example, if you want to offer a monthly subscription and a weekly subscription, fill in the field as follows: `1 month,1 week`.

    * For the **date of the subscription cycle** (`vtex.subscription.key.purchaseday`), the **Permitted Values** field must follow the numeric standard for **Subscriptions**, with monthly or weekly frequency.

        * **Weekly**: possible values for this field are `0`, `1`, `2`, `3`, `4`, `5`, and `6`, representing the days of the week. Consider `0` = Sunday, `1` = Monday, `2` = Tuesday, and so on until `6` = Saturday. Separate the values by `,`, as illustrated below.

        ![EN Assinatura Exemplo Valores week](https://images.ctfassets.net/alneenqid6w5/3pNwE8MSIe9GevIiLZxBOf/ecba3debced2525d6cd3ab3cbbdf4a5f/EN_Assinatura_Exemplo_Valores_week.png) 

        * **Monthly**: possible values for filling in this field at checkout are = `1`, `2`, `3`, (...) until `28`, representing the days of the month. Consider `1` = the first day of the month, `2` = the second day of the month, and so on until `28` = the twenty-eighth day of the month. Separate the values by `,`, as illustrated below.

        ![EN Assinatura Exemplo Valores month](https://images.ctfassets.net/alneenqid6w5/15AueDNpKyx3yBVjP0q7tY/415def684e81619e96155a1fb390a4f4/EN_Assinatura_Exemplo_Valores_month.png)

>ℹ️ If the **Permitted Values** field is left blank, the date of the subscription cycle will be the same day of the week (if the frequency is weekly) or the same day of the month (if the frequency is monthly) as the original order.

### Associating the attachment with an SKU

After creating the SKU attachment and setting up the required frequencies and cycle dates, you must associate the attachment with one or more existing SKUs.

1. In the **Catalog** module, click on **All products**.
2. Select the SKU you want to enable in the subscription plan.
3. Go to the **Advanced Settings** tab.
4. Associate the SKU with the subscription attachment you have created by clicking the check box.
5. Click on `Save`.

#### **LEARN MORE**

* [How to configure Subscriptions in your store](https://help.vtex.com/en/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj)
