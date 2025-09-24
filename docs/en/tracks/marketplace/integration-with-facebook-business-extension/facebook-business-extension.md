---
title: 'Facebook Business Extension'
id: 434Z1iWnaa0zbOMDyr6oi
status: PUBLISHED
createdAt: 2021-09-30T13:58:09.872Z
updatedAt: 2023-04-10T13:52:16.703Z
publishedAt: 2023-04-10T13:52:16.703Z
firstPublishedAt: 2021-09-30T18:46:40.188Z
contentType: trackArticle
productTeam: Channels
slugEN: facebook-business-extension
locale: en
trackId: 2hS3ANSZ7vlHCcba4h7k8D
trackSlugEN: integration-with-facebook-business-extension
order: 1
---

[Facebook Business Extension (FBE)](https://developers.facebook.com/products/business-apps/?locale=en_US) is a platform that provides a streamlined way to integrate with Facebook services and features.

VTEX developed the _Facebook Business Extension and Conversions API_ app to facilitate the integration with FBE. After configuring the integration, you will be able to manage new Facebook assets through the VTEX platform. In addition, the integration automatically installs the following features:

- [Facebook Pixel](https://developers.facebook.com/docs/facebook-pixel?locale=en_US)
- [Conversions API](https://www.facebook.com/business/help/2041148702652965?locale=en_US)
- [Catalog](https://developers.facebook.com/docs/marketing-api/catalog?locale=en_US)
- Facebook Call-to-action button
- Instagram Call-to-action button

## Compatibility

The _Facebook Business Extension and Conversions API_ app is fully compatible with stores operating with VTEX IO, and partially compatible with stores that are CMS or [Headless](https://vtex.com/en/blog/strategy/headless-commerce-what-it-is-and-why-its-growing-so-fast/). To identify which model your store operates with, go to [Edition App](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-edition-app). 

Learn more about the required configuration for each in our [Facebook Business Extension](https://developers.vtex.com/docs/guides/vtex-facebook-fbe#compatibility) guide on the Developer Portal.

> ⚠️ VTEX has a <a href= "/en/tracks/integracao-com-o-facebook--7h8KvIC4DbRRc8VlyJ8PFc">Facebook integration guide</a>. However, integration with the *Facebook Business Extension and Conversions API* app must be your default choice, as FBE is Facebook's most complete solution. Regardless of whether you have the other integration configured, you must proceed normally with the configuration of this integration.

## Facebook Pixel

Facebook Pixel allows you to measure your business advertising effectiveness by tracking the user actions on your website. You can use Facebook Pixel capabilities natively by integrating the [Facebook Business Extension app](https://apps.vtex.com/vtex-facebook-fbe/p) and Conversions API.

The integration to use Facebook Pixel is currently available for VTEX IO and Legacy CMS Portal stores. If your store uses the Legacy CMS system, you need to configure Pixel manually in the system. Learn more in the [Facebook Business Extension](https://developers.vtex.com/vtex-developer-docs/docs/vtex-facebook-fbe#facebook-pixel-for-legacy-cms-portal-frontend) article.

If your store uses the old Facebook Pixel app from the App Store, you should check if the app has been uninstalled correctly, otherwise Facebook events may be duplicated.

To find out if the app has been uninstalled, go to VTEX *Admin > Account Settings > My Apps*.

## Conversions API

The Conversions API is designed to create a direct connection between your marketing data and the Facebook system. Some of the main advantages of this feature are:

- Reduced cost per action as a result of the improved connection.
- Ad optimization for actions that happen at the end of the customer journey.
- Improved measurement of marketing data.
- Increased data control.

> ℹ️ Learn more in the Facebook documentation <a href= "https://www.facebook.com/business/help/2041148702652965?locale=en_US">About Conversions API</a>.
