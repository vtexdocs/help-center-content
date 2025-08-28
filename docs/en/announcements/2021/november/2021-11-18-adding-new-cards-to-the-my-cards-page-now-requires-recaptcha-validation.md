---
title: 'Adding new cards to the My Cards page now requires reCAPTCHA validation'
id: 67gG1eZGUBHQXqEBwTfLk9
status: PUBLISHED
createdAt: 2021-11-18T13:23:24.255Z
updatedAt: 2021-11-18T14:05:02.683Z
publishedAt: 2021-11-18T14:05:02.683Z
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2021-11-18-adding-new-cards-to-the-my-cards-page-now-requires-recaptcha-validation
locale: en
legacySlug: adding-new-cards-to-the-my-cards-page-now-requires-recaptcha-validation
announcementImageID: 'undefined'
announcementSynopsisEN: 'reCAPTCHA validation will be required whenever a customer manually adds a new card to your store’s My Cards page.'
---

Starting November 18, 2021, [reCAPTCHA](https://developers.google.com/recaptcha/docs/display) validation will be required whenever a customer manually adds a new card to your store’s [My Cards page](https://help.vtex.com/en/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh#cartoes).

This also means that there are [improvements to the My Cards API endpoint](https://developers.vtex.com/vtex-developer-docs/changelog/improvements-my-cards-api-endpoint).

This change is important because it dramatically reduces the likelihood of  attacks on the [My Cards](https://help.vtex.com/en/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh#cartoes) flow. However, this has no impact on your customers’ shopping experience, since it does not affect the Checkout flow in any way.

## What needs to be done?

If your store uses our native UI on the [My Cards page](https://help.vtex.com/en/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh#cartoes), the change should happen automatically. In this case, we expect no action will be required, but we recommend that you review the page layout, to make sure it works properly.

Note that in order to test this validation on your store, you must access it from the public address (without the `myvtex` environment), using a common user profile, without store administrator or developer privileges.

If your store contains any UI implementation that communicates directly with this [API endpoint](https://developers.vtex.com/vtex-developer-docs/changelog/improvements-my-cards-api-endpoint), please get in touch with our [support team](https://help.vtex.com/en/support) to update your implementation accordingly.

