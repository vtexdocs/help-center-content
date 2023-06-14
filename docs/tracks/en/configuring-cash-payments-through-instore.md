---
title: Configuring cash payments through VTEX Sales App
id: 4ye3bIWldaHJxGTgAziBZo
status: PUBLISHED
createdAt: 2020-06-28T16:04:36.122Z
updatedAt: 2023-05-31T15:48:30.288Z
publishedAt: 2023-05-31T15:48:30.288Z
firstPublishedAt: 2020-06-28T16:19:11.591Z
contentType: trackArticle
productTeam: Shopping
slug: configuring-cash-payments-through-instore
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugEN: instore-payments
---

This article explains how to configure VTEX Sales App to accept cash payments.
This configuration is done in two steps:

Before configuring the cash payment display in VTEX Sales App, you must [create a custom payment](#creating-a-custom-payment) and a [payment condition](#creating-a-payment-condition) for it. Both actions must be performed in the VTEX admin panel.

## Creating a custom payment

1. In the VTEX Admin, go to **Store Settings** > **Payments** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Go to the **Custom payments** tab.
3. In the **Notes payable** section, click on any of the boxes containing <i class="fas fa-cog"></i> `Config`.
4. In the **Name** field, type the name you want to use for this custom payment. For example, "Cash".
5. In the **Automatic authorization** field, select **Yes**. The other fields do not need to be filled in or changed.
6. Click on `Save`.

## Creating a payment condition

Now we will create the payment condition.

1. Still on the **Settings** page of the **Payments** module in the VTEX Admin, click on the **Payment conditions** tab.
2. Click on the green button with the `+` icon to add a new condition, as shown below.

![en-add-payment-condition](https://images.ctfassets.net/alneenqid6w5/27933kBohPNieKSiiulGZA/fefd28c063c5572c3dfe2852aac484f5/en-add-payment-condition-1.png)

3. In the **Custom payment** section, select the **Cash** option you have created.
4. Enter a name for this payment condition, change the status to **Active**, and in the **Process with affiliation** field, select the custom payment you created in the previous step.
5. Click on `Save`.

<div class="alert-info">
<p>In addition to the settings above, you must follow the <strong><a href="https://help.vtex.com/en/tracks/instore-pagamentos--43B4Nr7uZva5UdwWEt3PEy/jHQQcyX3WKeUFidwSjmY1">Define payment methods displayed in VTEX Sales App</a></strong> guide so that the payment options are displayed correctly in the app.</p>
</div>
