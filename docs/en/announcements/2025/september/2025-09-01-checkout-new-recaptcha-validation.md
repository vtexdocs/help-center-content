---
title: 'Checkout: New reCAPTCHA validation'
id: 1npERT6lyshKPOJlFUeC7y
status: PUBLISHED
createdAt: 2025-09-01T18:57:56.689Z
updatedAt: 2025-09-08T13:00:09.650Z
publishedAt: 2025-09-08T13:00:09.650Z
contentType: updates
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: 2025-09-01-checkout-new-recaptcha-validation
locale: en
legacySlug: checkout-new-recaptcha-validation
announcementImageID: 'undefined'
announcementSynopsisEN: 'New security layer in Checkout validates hosts via License Manager when using reCAPTCHA.'
---

To improve security during checkout, we added a new layer of protection in the store [reCAPTCHA](https://help.vtex.com/en/tutorial/using-recaptcha-at-checkout--18Te3oDd7f4qcjKu9jhNzP) validation. Now, store [hosts](https://help.vtex.com/en/tutorial/configurar-dominio-de-la-tienda--tutorials_2450#store-address-structure) are validated through [License Manager](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc), which is the systems that checks user permissions for completing actions in the platform.

## What has changed?

The Checkout system now checks if the host where the reCAPTCHA validation challenge is solved, such as `www.mystore.com`, exists in the License Manager module of that account. This helps prevent malicious access and fraud attempts. 

To see the account hosts, use the [Get stores](https://developers.vtex.com/docs/api-reference/license-manager-api#get-/api/vlm/account/stores) endpoint. If you want to add a new host to your store, check [Configuring the store domain](https://help.vtex.com/en/tutorial/configurar-dominio-de-la-tienda--tutorials_2450#registering-a-new-host).

## What needs to be done?

After adding hosts to the account, [configure reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha) in your store. If your store uses custom integrations at checkout, you need to make sure that [reCAPTCHA is integrated](https://developers.vtex.com/docs/guides/implementing-recaptcha-in-integrations) correctly with them.

Stores already using their own [reCaptcha keys](https://cloud.google.com/recaptcha/docs/create-key-website) in integrations as a validation method don't need to do anything.

