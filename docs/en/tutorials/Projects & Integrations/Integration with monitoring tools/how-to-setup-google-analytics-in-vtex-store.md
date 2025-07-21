---
title: 'Configuring Google Analytics 4 in VTEX stores'
id: G2P0rmSrEiqCcmUMyUUwG
status: PUBLISHED
createdAt: 2017-07-30T22:53:46.285Z
updatedAt: 2023-07-17T13:35:10.259Z
publishedAt: 2023-07-17T13:35:10.259Z
firstPublishedAt: 2017-07-30T23:24:21.394Z
contentType: tutorial
productTeam: Others
author: 523NSmHfn2IKEoiy2Q44YS
slugEN: how-to-setup-google-analytics-in-vtex-store
locale: en
legacySlug: how-to-setup-google-analytics-in-vtex-store
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

[Google Analytics 4 (GA4)](https://support.google.com/analytics/answer/10089681) is the current version of Google's data analytics tool. To get your VTEX store browsing data from Google Analytics 4, you need to:

1. [Configure Google Analytics 4](#configuring-google-analytics-4)
2. [Configure Google Tag Manager](#configuring-google-tag-manager)

<div class="alert alert-info">
As of July 1, 2023, Google Analytics 4 will replace Universal Analytics, the previous version of the tool. Therefore, you need to follow this tutorial to make the necessary adjustments to your store. See details about the change in <a href="https://support.google.com/analytics/answer/11583528">this Google announcement</a>.
</div>

## Configuring Google Analytics 4
If you were using the previous version of Google Analytics (Universal Analytics) in your store, you need to add a GA4 property. To do so, follow this Google documentation: [Add a Google Analytics 4 property (to a site that already has Analytics)](https://support.google.com/analytics/answer/9744165?hl=pt-BR&ref_topic=9303319#zippy=%2Cneste-artigo).

If your store does not have the previous version of Google Analytics configured, follow the instructions in this Google documentation: [GA4 - Set up Analytics for a website and/or app](https://support.google.com/analytics/answer/9304153).

In both cases, save the Google Analytics property ID code in the `G-xxxxxxx` format obtained from Google Analytics. It will be used in the next step during Google Tag Manager configuration.

## Configuring Google Tag Manager

Once you have configured the necessary settings in your Google Analytics account, you will need to change Google Tag Manager settings in the VTEX Admin to track your store events. To do so, follow the steps described in [Configuring Google Tag Manager](/en/tutorial/integration-with-google-tag-manager).

If your store uses [VTEX IO - Store Framework](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), in addition to the setup, you will need to configure a new version of the Google Tag Manager app. For more information, see [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager).

