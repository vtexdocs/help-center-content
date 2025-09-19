---
title: 'Upgrade your store to Google Analytics 4'
id: 01mmrSck8nvXAKsypecT9V
status: PUBLISHED
createdAt: 2023-04-28T14:42:52.792Z
updatedAt: 2023-07-17T13:38:03.472Z
publishedAt: 2023-07-17T13:38:03.472Z
contentType: updates
productTeam: Shopping
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2023-04-28-upgrade-your-store-to-google-analytics-4
locale: en
legacySlug: upgrade-your-store-to-google-analytics-4
announcementImageID: 'undefined'
announcementSynopsisEN: 'upgrade-your-store-to-google-analytics-4'
---

As of July 1, 2023, [Google Analytics 4](https://support.google.com/analytics/answer/10089681) (GA4) will replace Universal Analytics, the previous version of Google's data analytics tool. See details about the change in [this Google article](https://support.google.com/analytics/answer/11583528). 

For stores using [Legacy CMS Portal](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) or [VTEX IO - Store Framework](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), to continue tracking browsing data in your VTEX store, you will need to create a GA4 property and adjust some settings in your store.

## What has changed?
Universal Analytics will stop processing events on July 1, 2023. Therefore, the only functional version of the tool will be Google Analytics 4.

To ensure VTEX stores are compatible with the new version of Google Analytics, you need to create a Google Analytics 4 property and adjust your Google Tag Manager account settings, as described in [Configuring Google Analytics 4 in VTEX stores](/en/tutorial/how-to-setup-google-analytics-in-vtex-store--G2P0rmSrEiqCcmUMyUUwG).

Stores using VTEX IO - Store Framework also need to configure [the Google Tag Manager app](https://developers.vtex.com/docs/guides/google-tag-manager) to integrate with Google Analytics 4.

## Why make this change?

This change is necessary to ensure that VTEX stores using [Legacy CMS Portal](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) or [VTEX IO - Store Framework](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2) remain compatible with Google Analytics 4, enabling them to gather relevant browsing data through the latest version of Google's analytics tool.

## What needs to be done?

To make your store compatible with the new version of Google's data analytics tool, please follow the instructions in the [Configuring Google Analytics 4 in VTEX stores](/en/tutorial/how-to-setup-google-analytics-in-vtex-store--G2P0rmSrEiqCcmUMyUUwG) guide.

If your store uses [VTEX IO - Store Framework](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), you must enable the `Send events in GA4 format` setting in the VTEX Admin and configure the app to receive all Google Analytics 4 updates. For more information, see the [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager) guide.
