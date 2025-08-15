---
title: 'Add 3DS support to the integration with Adyen'
id: 3DNZeC9qJaC2GMIw4mawYk
status: PUBLISHED
createdAt: 2017-07-25T18:20:05.681Z
updatedAt: 2024-06-13T21:44:14.602Z
publishedAt: 2024-06-13T21:44:14.602Z
firstPublishedAt: 2017-08-01T16:58:04.306Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: add-3ds-support-to-the-integration-with-adyen
legacySlug: add-3ds-support-to-the-integration-with-adyen
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

To add support for [3DS](https://help.vtex.com/en/tutorial/o-que-e-3d-secure--1eWPdop8mECuaEomQgkAIa) (security protocol that allows buyers to be authenticated by the issuing bank) in the Adyen integration, you must configure the connector first. Follow the steps below:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Access the __Gateways Affiliations__ tab.
3. Click on the Adyen affiliation card.
4. Go to __Live Endpoint URL Prefix__ and follow [this Adyen tutorial](https://help.adyen.com/en_US/knowledge/ecommerce-integrations/integrations-basics/how-can-i-find-the-endpoint-url-for-my-live-account) to get the necessary information.
5. In the field __Enable 3D Secure?__, select __Yes__.
6. Choose the 3DS mode — 3DS, 3DS2, or 3DS2 Data only — defined in the agreed-upon business partnership with Adyen.
7. Fill in the remaining fields according to [this tutorial](https://help.vtex.com/en/tutorial/configuring-payment-with-adyenv3--7xAz67E2Eg63LWCQNjVdwv).
8. Click on __Save__.

### Enable 3DS Responses

After configuring the connector on VTEX, go to the Adyen dashboard to enable 3DS for your store transactions.

> ⚠️ We recommend that you set up the test environment before moving to the live environment. Validate the settings in the test environment, then access the **Live** environment to make final adjustments.

1. Click on the links below to access Adyen's test and live environments:

      - __Adyen's test environment:__ https://ca-test.adyen.com/ca/ca/login.shtml
      - __Adyen's live environment:__ https://ca-live.adyen.com/ca/ca/login.shtml

2. Click on __Risk__ and then click __Dynamic 3D Secure__.
3. Click on __Create new rule__ to create a new 3DS activation rule. Check out [this Adyen documentation](https://docs.adyen.com/risk-management/dynamic-3d-secure) for more details.
4. After creating the rule, click on __Save__.

Once you have completed these steps, the 3DS security module will be ready to be used in your Adyen integration.

