---
title: 'Configuring iDEAL payment method in Adyen integration'
id: 6EY1uvOVcomIFgMv81FAub
status: PUBLISHED
createdAt: 2021-05-06T19:28:42.490Z
updatedAt: 2021-05-07T17:05:47.949Z
publishedAt: 2021-05-07T17:05:47.949Z
firstPublishedAt: 2021-05-07T14:02:07.647Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: configuring-ideal-payment-method-in-adyen-integration
locale: en
legacySlug: configuring-ideal-payment-method-in-adyen-integration
subcategory: 
---

__iDEAL__ is an online payment method available only to customers in The Netherlands which allows consumers to make payments directly in their own bank. 
In this tutorial, you will go through the steps to configure it in your store through an integration with [Adyen](https://help.vtex.com/en/tutorial/how-to-configure-the-adyen-gateway-on-vtex--tutorials_2337).

<div class="alert alert-danger">
  <b>Adyen</b> is currently the only partner that supports payments made with iDEAL. This means you need to get in touch with Adyen to check whether iDEAL is applicable for your location. 
If so, consult the article <a href="https://help.vtex.com/en/tutorial/how-to-configure-the-adyen-gateway-on-vtex--tutorials_2337?&utm_source=autocomplete">How to set up the Adyen gateway on VTEX</a> and configure the affiliation in your store.
  </div>

1. Access the VTEX __Admin__.
2. Click on __Payments__ > __Settings__.
3. Select __Payment conditions__ and click on the green "__+__" button.
4. Click on the option __iDEAL__.
5. At the top of the page, fill in the field __Rule Name__ with the name you would like to use to identify the payment condition.
6. Click the __Status__ toggle to enable it.
7. In __Process with affiliation__, Adyen should already be set.
8. If you have an anti-fraud solution, check the box next to __Use Anti-fraud__ to enable it.

If you wish to create __special conditions__ for this payment method, access the documentation [Configuring special payment conditions](https://help.vtex.com/en/tutorial/condicoes-especiais--tutorials_456) for more information and details on each step. If you prefer not to create any conditions, click on __Save__ to complete the configuration.

After completing all these steps, iDEAL should be correctly installed in your store.

