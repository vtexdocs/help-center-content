---
title: 'Google Analytics: FAQ'
id: 2VRtB07muo3vwO6KEmMVn0
status: PUBLISHED
createdAt: 2021-12-17T18:41:26.175Z
updatedAt: 2023-07-31T18:35:26.120Z
publishedAt: 2023-07-31T18:35:26.120Z
firstPublishedAt: 2021-12-17T18:53:43.536Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: google-analytics-faq
locale: en
legacySlug: google-analytics-faq
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

Check below some of the most frequently asked questions about Google Analytics for VTEX stores.
## How to install Google Analytics in your store

The installation is done via [Google Tag Manager](https://help.vtex.com/tutorial/integracao-com-o-google-tag-manager#), as described in the article [Setting up Google Analytics in VTEX stores](https://help.vtex.com/pt/tutorial/how-to-setup-google-analytics-in-vtex-store--G2P0rmSrEiqCcmUMyUUwG#).

## Where does the data displayed in Google Analytics come from? What are Google tags?

The installation and configuration of Google Analytics is based on including tags (default scripts) in the front-end of your store.

In general, these tags correspond to user actions. For example, a specific script can be triggered every time a user accesses the store, recording information about this access in Google Analytics. There may be a conversion tracking tag, which is triggered when loading the page, and confirms to the customer that the order has been completed.

The information available on the Google platform comes from the triggers of these tags. Therefore, VTEX does not send data to Google Analytics.

## What are attribution models?

Attribution models dictate the methodology used by a platform to attribute a cause to a given event. When it comes to Google Analytics, this means defining whether a given sale occurred as a result of an ad on a social network or an email marketing campaign, for example.

Learn more about [attribution models in Google Analytics.](https://support.google.com/analytics/answer/1662518?hl=en).

## Why are the metrics displayed on VTEX and Google Analytics different?

There are differences in how each platform gets data from your store, and this can result in different numbers in analytics. Below, we indicate some of the most common cases and explain how to interpret these differences.

### Transactions

As VTEX is responsible for processing transactions from your store, all of them are recorded on the platform. However, in Google Analytics, some cases may generate anomalies or failures triggering the corresponding tag. These cases include:

- Browsers with strict privacy settings.
- Browsers with JavaScript blocking.
- Ad blockers.
- Google Analytics data layer configuration error. See the official Google documentation to learn more about how your development team can [configure Google Analytics 4 data layer](https://developers.google.com/tag-manager/ecommerce-ga4).
- Transaction tag triggers even with transactions that were not successfully completed.
- Failed or duplicated display of the order confirmation page if the transaction tag is linked to the page display.

>ℹ️ Consider that there is also a delay of up to 48 hours in recording transaction data on Google Analytics.

Also, integrations can be built in such a way that they end up not triggering certain tags on your storefront. For example, there are integrations that use a [payment app](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-payment-app) and complete the purchase without redirecting the customer to the order confirmation page, such as the integration developed by AME Digital. Transactions will always be recorded in VTEX, but in this case, it is likely that they are not recorded in Google Analytics, generating divergence.

### Sales attribution

It is normal that there are differences between attribution data as seen in VTEX modules and Google Analytics, as they are different tools with different [attribution models](#what-are-attribution-models) and that capture information through different cookies.

The UTM information recognized by VTEX can be verified in the developer tools panel of your browser, in the `marketingData` object of the [OrderForm](https://developers.vtex.com/docs/guides/orderform-fields). For more information, read the article [Marketing UTMs at checkout](https://help.vtex.com/en/tutorial/identificar-se-utms-de-marketing-estao-sendo-passadas-para-o-checkout--6kjHHfOWIgeI26qcQSU4Wg#).

Google Analytics uses the Last Interaction model by default.
You can choose between different models, which are described in [Google’s documentation on attribution models](https://support.google.com/analytics/answer/1662518?hl=en).

If you also analyze Facebook ads data, you may find other divergences. For example, Facebook takes into account customers who saw the ad and purchased the product at some later point, even if they came to the store via another route at the time of purchase.

The type of attribution does not affect the sale, only the interpretation of each platform.

### Sessions

Just as there are different ways to determine the source of events that occur in your store, there are different ways to define sessions. The concept of session used by VTEX is intended to resemble [Google Analytics' concept](https://support.google.com/analytics/answer/2731565?hl=en#time-based-expiration&zippy=%2Cneste-artigo), but it is not a replica.

Therefore, events that are interpreted as sessions in VTEX may not be interpreted the same way in Google Analytics and vice versa.

For this reason, it is important that your store team performs analyses based on a single source. Analyses that compare different sources, with different concepts of sessions, are subject to distortions in the results.

Despite the differences, it is worth noting that both platforms consider that a session expires after 30 minutes of user inactivity.

### Sales funnel

VTEX generates a view of your store sales funnel based on the navigation records that the platform generates, from product pages to shopping cart flow and checkout.

Whereas Google Analytics provides an automatically generated sales funnel based on Google tags set up in your storefront. Learn more about [how Google generates this funnel view](https://support.google.com/analytics/answer/6014872#zippy=%2Cin-this-article%2Cneste-artigo).

As the funnel views are based on different information, they may differ.

You can configure another sales funnel on Google Analytics, which enables a customized view and better control of the buying journey. Check out this article on how to [set up the sales funnel on Google Analytics] (https://help.vtex.com/en/tutorial/configurar-funil-de-vendas-no-google-analytics#).

