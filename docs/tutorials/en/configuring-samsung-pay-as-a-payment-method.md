---
title: 'Configuring Samsung Pay as a payment method'
id: 5Yj9rgzOCVYuGmAumQlfpP
status: PUBLISHED
createdAt: 2020-08-26T13:40:16.356Z
updatedAt: 2023-03-29T01:17:07.597Z
publishedAt: 2023-03-29T01:17:07.597Z
firstPublishedAt: 2020-08-26T16:30:52.180Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configuring-samsung-pay-as-a-payment-method
locale: en
legacySlug: configuring-samsung-pay-as-a-payment-method
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

This tutorial aims to show you how to configure the Samsung Pay digital wallet as a payment method.

The first step is to configure the Adyen connector in your store, Adyen being a gateway affiliation that processes payments made with Samsung Pay. You can check the complete step by step [here](https://help.vtex.com/en/tutorial/como-configurar-o-gateway-adyen-na-vtex--tutorials_2337?locale=en "here").

Thereafter, you should configure the payment method itself.

Follow these instructions:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Ensure that you are in the __Payment Conditions__ tab.
3. Next to the search bar, click on the __green button “+”__.
4. In the “Other” section, click on the __Samsung Pay__ option.
5. On the top of the page, set a __name__ in the __Rule Name__ field.
6. Below, click on the __Status__ button to activate the rule.
7. In Process with affiliation, select the __Adyen__ option.
8. If necessary, select the __Anti-fraud__ service that will be used. 

Thus, you will have carried out the most basic configuration of the payment method.

However, there is still the option to __set special payment conditions__ - specific rules for Samsung Pay that apply only in certain contexts determined by expiration date, country, trade policy (Sales Channel), trade condition, or account name.

Simply click on the white __"Add special condition"__ button and select which context the rule should apply to. Remember that you can set multiple special conditions for each payment method. For more details, check out the [tutorial on how to configure each of the special conditions](https://help.vtex.com/en/tutorial/condicoes-especiais--tutorials_456?locale=en "tutorial on how to configure each of the special conditions"). 

If this does not apply to you, simply complete the configuration by clicking on the __"Save"__ button.
