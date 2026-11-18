---
title: 'Destination retail'
createdAt: 2026-11-17T00:00:00.000Z
updatedAt: 2026-11-18T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: destination-retail
locale: en
---

Your website can receive traffic from [offsite campaigns](/en/docs/tutorials/vtex-ads-offsite-campaigns) configured by the [VTEX Ads](/en/docs/tracks/retail-media) team in the advertiser account. On the **Destination retail** page, you define which campaigns your website appears in as a destination and how your conversion data is shared.

An offsite campaign displays the ad outside your store and directs the user to it. For the purchase that results from that visit to be attributed to the campaign, VTEX Ads needs to record the user's arrival on your storefront or in your app. The page therefore covers two distinct topics: the decision to participate as a destination and the data capture that records the visit.

The page is available only for publisher accounts, identified by the **Retail Media Publisher** badge in the Admin.

> ℹ️ The publisher is the retailer that offers ad space for monetization. To understand this role and the other roles involved in retail media, see [Retail media roles](/en/docs/tracks/retail-media-roles).

> ⚠️ Participating as a destination and having capture working are independent states. Enabling the **Available for new campaigns** toggle switch declares the intent to receive traffic from offsite campaigns, but it doesn't install or validate any capture. Capture starts working only when the Web script or the mobile SDK is implemented and VTEX Ads receives the corresponding signal. You can keep the toggle switch enabled with both surfaces on **Not detected**. In that case, the attribution that advertisers rely on doesn't happen.

## Before you begin

- Your store must be registered in VTEX Ads as a publisher and have the Publisher ID (UUID) provided by the VTEX Ads team. The VTEX Ads team creates the publisher account, issues the Publisher ID and, when applicable, links it to the VTEX account.
- For offsite campaign attribution to work, capture must be implemented on at least one surface (web or mobile app). This isn't a condition for accessing the page or for enabling the participation toggle switch. The complete procedures are in the Developer Portal guides linked in the [Installation](#installation) section of this article.

## Accessing the Destination retail page

To access the **Destination retail** page, follow the steps below:

1. Go to the VTEX Ads publisher Admin.
2. Click the menu icon in the upper-left corner.
3. Click **Destination retail**, in the **Settings** section.

## List as destination retailer

The **List as destination retailer** card controls your store's participation as a destination for offsite campaigns. The control on the card is the **Available for new campaigns** toggle switch.

With the toggle switch enabled, your store is available as a destination for new offsite campaigns, and your conversion data is shared with VTEX Ads to measure performance.

With the toggle switch disabled, your store no longer appears in the list of destinations available for new offsite campaigns. Campaigns that were already running when it was disabled continue to run normally and aren't interrupted.

## Installation

On the **Installation** card, you configure tracking on the channels that receive traffic (web and mobile), so the performance of offsite campaigns that direct users to your store can be attributed.

The card lists two surfaces, **Web** and **Mobile app**, each with its own capture status. The **Not detected** status means VTEX Ads hasn't yet received a capture signal from that surface.

> ℹ️ The status of a surface doesn't depend on the position of the **Available for new campaigns** toggle switch, and the toggle switch doesn't depend on the status of the surfaces. A surface on **Not detected** still has no capture even when the toggle switch is enabled.

### Web

The page presents two installation cases for the **Web** surface:

- **Native VTEX store:** Install the VTEX Ads Agent app and set the Publisher ID in the app settings.
- **Independent storefront:** Add a script to the storefront pages. The page displays the script ready to copy.

The installation procedure is described in [Installing the offsite capture web script](https://developers.vtex.com/docs/guides/installing-the-offsite-capture-web-script).

### Mobile app

If you have a mobile app, install the Activity Flow SDK to capture purchases that originate from offsite campaigns. The procedure is in [Installing Activity Flow in mobile apps](https://developers.vtex.com/docs/guides/installing-activity-flow-in-mobile-apps), which breaks down into the React Native and Flutter guides. The card also displays the `View mobile SDK documentation` button.

## How your store is chosen as a destination

While configuring an offsite campaign, an advertiser or the VTEX Ads team sees destination retailers that:

- Have the **List as destination retailer** toggle switch enabled.
- Have at least one capture surface active in the last 72 hours.

## Advertisers sending offsite campaign traffic to your website

The **Advertisers sending offsite campaign traffic to your website** card lists the advertisers that are running offsite campaigns with your store as the destination. In each row of the table, you find the following information:

- **Advertiser:** Name of the advertiser sending offsite campaign traffic to your store.
- **Active campaigns:** Number of that advertiser's active offsite campaigns that direct traffic to your store.

## Learn more

- [VTEX Ads offsite campaigns](/en/docs/tutorials/vtex-ads-offsite-campaigns)
- [VTEX Ads metrics and attribution](/en/docs/tutorials/vtex-ads-metrics-and-attribution)
- [Retail media glossary](/en/docs/tracks/retail-media-glossary)
- [VTEX Ads: First steps](/en/docs/tracks/vtex-ads-first-steps)
- [Installing the offsite capture web script](https://developers.vtex.com/docs/guides/installing-the-offsite-capture-web-script)
- [Installing Activity Flow in mobile apps](https://developers.vtex.com/docs/guides/installing-activity-flow-in-mobile-apps)
