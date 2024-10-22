---
title: 'Configuring the integration with FBE in the VTEX Admin'
id: jUtgjBDumr5oGWIU7mVLC
status: PUBLISHED
createdAt: 2021-09-30T16:07:29.101Z
updatedAt: 2024-04-17T14:57:04.600Z
publishedAt: 2024-04-17T14:57:04.600Z
firstPublishedAt: 2021-09-30T18:49:18.739Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-the-integration-with-fbe-in-the-vtex-admin
locale: en
trackId: 2hS3ANSZ7vlHCcba4h7k8D
trackSlugEN: integration-with-facebook-business-extension
---

With the _Facebook Business Extension and Conversions API_ app installed, you will see a new field in your VTEX Admin. In the **MARKETPLACE** module, there will be the **Facebook** option. It might be necessary to refresh your VTEX Admin page for the option to be visible.

To start configuring the integration, please follow the steps below:

1. In your VTEX Admin, in the _MARKETPLACE_ module, click on `Facebook`.
2. By default, the fields related to **region and currency** and the **URL** of your VTEX store will be filled in. Check the information and, if necessary, make changes.
3. Unless you have a custom Facebook Pixel implementation, keep the option_ Enable Pixel configuration_ enabled.

  >ℹ️ Regardless of whether you have installed the <a href= "https://apps.vtex.com/vtex-facebook-pixel/p">Facebook Pixel app</a>, the recommendation is that the **Enable Pixel configuration** option remains enabled. The exception is when you already use the Google Tag Manager. More information on <a href= "https://help.vtex.com/en/tracks/integration-with-facebook-business-extension--2hS3ANSZ7vlHCcba4h7k8D/434Z1iWnaa0zbOMDyr6oi#facebook-pixel">Facebook Pixel</a>.

4. Click on `CONTINUE WITH FACEBOOK`.
5. The next screen asks for your Facebook account. Fill in your information and click on `Log in`. If you have the [Facebook integration](https://help.vtex.com/en/tracks/integracao-com-o-facebook--7h8KvIC4DbRRc8VlyJ8PFc) configured, your data will already be saved.
6. Grant the necessary permissions for the integration by clicking `Continue`.
7. Determine which settings will be used in the integration.
8. Click on `Continue`.
9. Choose which permissions must be granted to VTEX for the integration.

  >❗ For the integration to work properly, we recommended that you grant all the permissions shown. By default, they are set as enabled.

10. Click on `Next`.
11. In the pop-up window, a confirmation that the integration has been configured will be displayed. Click on `Done`.

![gif en v1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/integration-with-facebook-business-extension/configuring-the-integration-with-fbe-in-the-vtex-admin_1.gif)

## Sending product information to Facebook Business Extension

Once the integration is configured, sending products to Facebook will be an automatic process. The following information will be sent:

- Product display name
- Image
- Category
- Price
- Currency
- Description
- Brand
- Product condition
- Availability

When a change is made to any of this information, the update in the FBE environment is done automatically.

To add attributes to the products submitted, the change must be made in the Facebook environment, using the [Commerce Manager](https://www.facebook.com/business/help/2371372636254534?locale=en_US) platform.
