---
title: 'reCAPTCHA validation will now follow orderForm configuration for all requests'
id: 3SLXk0n8neXgWxaLaIgAC7
status: PUBLISHED
createdAt: 2023-07-04T21:20:42.330Z
updatedAt: 2023-07-05T18:40:32.146Z
publishedAt: 2023-07-05T18:40:32.146Z
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2023-07-04-recaptcha-validation-will-now-follow-orderform-configuration-for-all-requests
locale: en
legacySlug: recaptcha-validation-will-now-follow-orderform-configuration-for-all
announcementImageID: ''
announcementSynopsisEN: 'Merchants that use the Checkout API to place orders from mobile apps/headless storefronts must review their integrations'
---

[reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha) is a security service used to determine if a given action is performed by a real user or malicious automation, protecting websites from fraud and abuse. By activating [reCAPTCHA at checkout](https://help.vtex.com/en/tutorial/using-recaptcha-at-checkout--18Te3oDd7f4qcjKu9jhNzP), you are following best practices against virtual attacks and reducing the risk that your store can be exploited for fraudulent purposes.

To further protect our customers, VTEX will now enforce the reCAPTCHA orderForm configuration set in each account for all Checkout API requests, regardless of the roles associated with the user or application key.

Merchants that use the Checkout API to place orders from mobile apps, headless storefronts and similar applications must [review](#review-your-integrations) and [adjust](#adjust-your-integrations) their integrations before __September 1, 2023__.

## What is changing?

Before, reCAPTCHA verification was not required for orders placed by users and application keys with the `Shopping Cart Full Access` [resource in License Manager](https://help.vtex.com/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). This includes [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) such as `Owner (Admin Super)` and `User Admin - RESTRICTED`, as well as the [Sponsor user](https://help.vtex.com/en/tutorial/what-is-the-sponsor-user--3oPr7YuIkEYqUGmEqIMSEy).

Now, reCAPTCHA verification will follow orderForm configuration set in each account for all Checkout API requests, regardless of the roles associated with the user or application key.

## Why are we making this change?

This action was necessary to reduce the chances of fraud and abuse, such as card testing, in our stores. While the best practices for using application keys indicate that stores should create individual keys for each integration and apply restrictive roles to them, some merchants were exposing themselves to risk by using application keys with administrative roles. 

Because we understand that there may be a legitimate reason for some integrations to have access to more resources and information, our decision was to require merchants to implement reCAPTCHA in those integrations. If that is not possible, they have the alternative of disabling the reCAPTCHA validation in their account (`recaptchaValidation="never"`) and implementing alternative protective measures against automated attacks on their own.

We know that these changes will have an impact on our customers’ operations, but adopting security best practices is always necessary and beneficial for our entire ecosystem.

## What needs to be done?

### Review your integrations

Ask your development team to review your integrations that use the Checkout API to place orders to your VTEX store, using the following endpoints:

- [Place order from an existing cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/transaction)
- [Place order](https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orders)

They should be able to follow the diagram below to assess whether an integration needs to be adjusted, according to your store's [reCAPTCHA orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) and how requests made to these endpoints are [authenticated](https://developers.vtex.com/docs/guides/authentication-overview):

![reCAPTCHA diagram](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2023-07-04-recaptcha-validation-will-now-follow-orderform-configuration-for-all-requests_1.png)

- __Case 1__: *No changes are required in the integration, but your store might be at risk.*

  Your store does not use reCAPTCHA at Checkout and is therefore vulnerable to automated attacks, unless other protective measures are implemented in your integration.

- __Case 2__: *You need to adjust your integration, otherwise it might stop working.*

  Your store uses reCAPTCHA at Checkout, but is not ready to display it correctly in the user interface. Your development team should [adjust your integrations](#adjust-your-integrations).

- __Case 3__: *No changes are required in the integration.*

  Your store uses reCAPTCHA at Checkout and is ready to display it correctly in the user interface. Congratulations for following best practices in security!

### Adjust your integrations

If your development team identified that your integration requires attention, they must follow the instructions provided in the developer guide [Implementing reCAPTCHA in integrations](https://developers.vtex.com/docs/guides/implementing-recaptcha-in-integrations).

>⚠️ If you are implementing reCAPTCHA on a native mobile app, use reCAPTCHA v3. Otherwise, reCAPTCHA use v2.

Using the reCAPTCHA key returned by the Checkout, the reCAPTCHA widget should be rendered in the user interface of your mobile app/headless storefront (or similar) as described in the [reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display) or [reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3) documentation provided by Google.

After the shopper has completed the reCAPTCHA challenge, their response (`recaptchaToken`) should be sent to the Checkout API to complete the purchase, as described in the *Final validation* section of [Implementing reCAPTCHA in integrations](https://developers.vtex.com/docs/guides/implementing-recaptcha-in-integrations#final-validation). Checkout API will then [verify the user's response](https://developers.google.com/recaptcha/docs/verify) using the provided token.

>❗ All integrations using Checkout API to place orders must be reviewed and adjusted before September 1, 2023. Applications that fail to render the reCAPTCHA widget and verify the user's response will not be able to place orders after this date.

## Learn more

Check out the following documentation to learn more about reCAPTCHA and best practices to ensure your store is protected:

- [Using reCAPTCHA at Checkout](https://help.vtex.com/en/tutorial/using-recaptcha-at-checkout--18Te3oDd7f4qcjKu9jhNzP)
- [Best practices against virtual attacks](https://help.vtex.com/en/tutorial/best-practices-against-virtual-attacks--191rpbF7UgrKapVCi1PCDE)
- [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm)
- [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3)

