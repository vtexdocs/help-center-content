---
title: 'Checkout API now supports reCAPTCHA v3'
id: 1buRTScMhlis0LESr7g8Rt
status: PUBLISHED
createdAt: 2023-06-28T19:52:18.268Z
updatedAt: 2023-08-25T23:36:39.909Z
publishedAt: 2023-08-25T23:36:39.909Z
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2023-06-28-checkout-api-now-supports-recaptcha-v3
locale: en
legacySlug: checkout-api-now-supports-recaptcha-v3
announcementImageID: ''
announcementSynopsisEN: 'This user validation solution to prevent fake users can be used in native mobile apps and other similar integrations'
---

[reCAPTCHA](https://help.vtex.com/en/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP) is a user validation solution that VTEX provides for all stores. It foresees scenarios where malware is used for fraud and prevents access by fake users.

Besides the native storefront functionality of the VTEX platform, stores implementing their own storefronts can [integrate reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha) via the Checkout API to improve security.

## What has changed?

Now, the Checkout API also supports score-based reCAPTCHA reCAPTCHA validation (equivalent to v3), which is suitable for native mobile apps.

>ℹ️ VTEX is integrated with reCAPTCHA enterprise, which offers two validation approaches: checkbox (equivalent to reCAPTCHA v2) and score-based (equivalent to reCATPCHA v3). See this article on [reCAPTCHA at VTEX Checkout](https://help.vtex.com/en/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP#recaptcha-versions) to learn what version you should use depending on your storefront characteristics. You can also learn more each method: [reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display) or [reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3) with the documentation provided by Google.

However, the reCAPTCHA checkbox (equivalent to v2) integration option is still available and is the recommended option if you want to implement a [reCAPTCHA integration](https://developers.vtex.com/docs/guides/recaptcha) other than in a native mobile app.

Currently, score-based validation is not available for native VTEX storefronts - it is expected to be in the coming months. This solution is only available for integrations based on the Checkout API.

## What needs to be done?

If you use a native VTEX storefront solution or integrate with reCAPTCHA checkbox via the Checkout API, no action is required. reCAPTCHA will continue working as configured.

If you want to implement reCAPTCHA in a native mobile app storefront, you should use score-based validation. Contact your development team and see the [reCAPTCHA integration guide](https://developers.vtex.com/docs/guides/recaptcha).
