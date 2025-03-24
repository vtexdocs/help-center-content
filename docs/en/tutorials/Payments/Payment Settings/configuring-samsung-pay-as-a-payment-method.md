---
title: 'Configuring Samsung Pay as a payment method'
id: 5Yj9rgzOCVYuGmAumQlfpP
status: PUBLISHED
createdAt: 2020-08-26T13:40:16.356Z
updatedAt: 2024-07-24T13:36:58.723Z
publishedAt: 2024-07-24T13:36:58.723Z
firstPublishedAt: 2020-08-26T16:30:52.180Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: configuring-samsung-pay-as-a-payment-method
locale: en
legacySlug: configuring-samsung-pay-as-a-payment-method
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, you can use the Samsung Pay digital wallet as a payment method in your store.

Firstly, you need to configure the [Adyen](https://help.vtex.com/en/tutorial/configuring-payment-with-adyenv3--7xAz67E2Eg63LWCQNjVdwv) payment provider in your store, as it will be responsible for processing payments received via Samsung Pay.

Then you need to configure Samsung Pay according to the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on the __Samsung Pay__ option.
4. Activate the condition in the __Status__ field.
5. Under __Process with Provider__, select the __Adyen__ option.
6. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
7. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456).
8. Click on `Save`.

To set special conditions for Samsung Pay, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Samsung Pay may take up to 10 minutes to appear at your store's checkout as a payment option.
