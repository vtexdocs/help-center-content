---
title: Set up Alelo payment method for Cielo V3
id: 4fpnddmyMOAD6F5ixtdmY8
status: PUBLISHED
createdAt: 2020-06-30T13:26:40.843Z
updatedAt: 2023-03-26T22:07:43.484Z
publishedAt: 2023-03-26T22:07:43.484Z
firstPublishedAt: 2020-06-30T14:57:57.023Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: set-up-alelo-payment-method-for-cielo-v3
legacySlug: set-up-alelo-payment-method-for-cielo-v3
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

This article will cover how to enable the Alelo grocery voucher card as a payment method in our Checkout module.

<div class="alert alert-info">
<strong>Warning</strong>: The Alelo grocery voucher card is a payment method valid only in Brazil.
</div>

For the time being, on the VTEX platform, the payment acquirer Cielo is the only one to accept Alelo as a payment  method. The first step must therefore be to enable this payment acquirer as a gateway affiliation in your store. You can check out our full tutorial on these configuration steps [here](https://help.vtex.com/en/tutorial/configurar-adquirente-cielo--3avjZ7q65WcM02K8K0eeWu?locale=en "here"). 

After completing the step above, you can configure Alelo as a payment method in itself. 

As with any payment method, configuring Alelo also allows you to add special conditions. However, these are optional and not adding them will not hinder the proper functioning of the voucher card. 

For more details, you can check out our tutorial on [how to configure each of the special payment conditions](https://help.vtex.com/en/tutorial/condicoes-especiais--tutorials_456?locale=en "how to configure each of the special payment conditions"). 

Follow the instructions below:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Make sure you’re in the __Payment Conditions__ tab.
3. Click on the green __“+”__ sign.
4. Scroll to “Other” and select __“Alelo”__.
5. In the empty box, fill in the this payment method’s __name__ (something to help you quickly find it).
6. Toggle the __“Status”__ to active.
7. If needed, check the __“Use Anti-fraud”__ box.
8. You can also add __special conditions__ for the payment method by clicking on “Add special condition”. 
9. __Save__ change to complete the setup.

<div class="alert alert-info">
<strong>Warning</strong>: Remember that special payment conditions take up to 10 minutes to be applied to Checkout.
</div>
