---
title: 'Setting up the type of interest rate'
id: 3h9ollbIS9YTXWcsmz8iF8
status: ARCHIVED
createdAt: 2019-02-13T16:48:24.960Z
updatedAt: 2022-01-27T19:56:23.586Z
publishedAt: 
firstPublishedAt: 2019-02-13T16:51:05.020Z
contentType: tutorial
productTeam: Financial
author: 5fYXkMJagMwcSAeMAsAuOI
slug: setting-up-the-type-of-interest-rate
locale: en
legacySlug: setting-up-the-type-of-interest-rate
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

## Identifying the payment method's ID

The payment method's ID can be configured to have Simple Interest Rates and is obtained by following these steps:

- Access the Payments module
- In the dropdown menu on the left, click on Settings
- Access the Payment Conditions tab
- Select the Payment Condition that should be configured to use Simple Interest Rates
- Copy the last URL parameter, which shows the ID of this Payment Method (see image)

![ENjuros](https://images.ctfassets.net/alneenqid6w5/27ScAtFzUYwYm8y5zGqsEP/ae3915ad736e96121017aba11d87a522/ENjuros.png)

## Setting up the interest rate type using API

The "interestRateMethod" field is where the setup should be implemented, if we were to use the Simple Interest Rate or Compound Interest Rate calculation algorithm:
- **Simple Interest Rate** will equal "interestRateMethod": 1.
- **Compound Interest Rate** will equal "interestRateMethod": null.

A "GET Rule by ID" call will initially be sent in order to receive the updated Payment Method setting through the following API:

https://developers.vtex.com/reference/configuration-1#rulebyid

The reply that the "GET Rule by ID" call returns will be the request of the thereafter "POST Rule by ID" call. To save the new configuration, only the value "interestRateMethod":1 should be modified:

https://developers.vtex.com/reference/configuration-1#putrulebyid

>❗ IMPORTANT: At present, the only way to change a payment method is through API. Should it be necessary to change the payment method by using the user interface, the setup process through API would have to be repeated, since when saving the changes, the value will be considered empty by default.
