---
title: 'VTEX Ads offsite campaigns'
createdAt: 2026-11-17T00:00:00.000Z
updatedAt: 2026-11-17T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: vtex-ads-offsite-campaigns
locale: en
---

**[VTEX Ads](/en/docs/tracks/retail-media)** serves campaigns inside and outside retail channels. In an onsite campaign, the ad appears on the store's own channels, such as the website, the app, or the physical store. In an offsite campaign, the ad appears outside the store that receives the traffic, and the click takes the user to it. The general definitions of [onsite media](/en/docs/tracks/retail-media-glossary) and [offsite media](/en/docs/tracks/retail-media-glossary) are in the **Retail media glossary**.

This article explains what distinguishes an offsite campaign, who participates in it, the path the user follows from the ad click to the order attributed to the campaign, and what each party needs to ensure for that path to work. It doesn't describe how to create an offsite campaign, because the **VTEX Ads** team creates it, as explained in [How the campaign is created](#how-the-campaign-is-created).

## How the journey works

An offsite campaign involves, in addition to the advertiser, two parties: the media publisher, which displays the ad, and the destination retailer, which receives the user and where the purchase happens. Sale attribution therefore depends on **VTEX Ads** recording the user's arrival at the destination retailer. The journey follows these steps:

1. **Display:** The ad is displayed outside the destination retailer, on the media publisher's channel.
2. **Click:** The user clicks the ad. The destination link carries the **VTEX Ads** parameters that identify the campaign and the click.
3. **Arrival:** The user arrives at the destination retailer, on the website or in the app. The web script or the mobile SDK installed by the retailer records that arrival and sends the signal to **VTEX Ads**.
4. **Association:** **VTEX Ads** associates the recorded arrival with the ad click.
5. **Attribution:** If the user places an order within the format's attribution window, the conversion is attributed to the offsite campaign.

> ℹ️ The attribution window applied to the conversion is that of the ad type served, as in other **VTEX Ads** campaigns. See [VTEX Ads metrics and attribution](/en/docs/tutorials/vtex-ads-metrics-and-attribution).

In journeys that end in the destination retailer's app, there is no click inside the app. The ad link opens the app with the campaign parameters, and the mobile SDK records that opening as the offsite click. The purchase completed in the app finalizes the conversion.

## Who participates

An offsite campaign brings together three parties, each with a distinct role:

- **Advertiser:** Brand or company that funds the campaign and whose products are advertised. The advertiser doesn't create or approve the offsite campaign. See [How the campaign is created](#how-the-campaign-is-created).
- **Media publisher:** Party that displays the ad outside the destination retailer. Also called Publisher Offsite. It's usually a traditional digital media channel, but it can also be another type of partner that displays the ad. In **VTEX Ads**, this side of the campaign appears to the client as **Offsite VTEX Ads**.
- **Destination retailer:** Store that receives the ad traffic and where the purchase happens. It's a **VTEX Ads** publisher account that agreed to participate in offsite campaigns on the **Destination retail** page and installed data capture on the surfaces that receive the traffic. See [Destination retail](/en/docs/tutorials/destination-retail).

> ℹ️ To understand the advertiser, publisher, and marketing agency roles in retail media, see [Retail media roles](/en/docs/tracks/retail-media-roles).

## What each party needs to ensure

A sale is attributed to the offsite campaign only when all of the following preconditions are met. Each one depends on a different party:

| Precondition | Responsible | Learn more |
| --- | --- | --- |
| The ad is served with the **VTEX Ads** parameters preserved, and the destination link isn't shortened or changed. | Media publisher | - |
| The store is available as a destination for offsite campaigns, with the `Available for new campaigns` toggle switch enabled on the **Destination retail** page. | Destination retailer | [Destination retail](/en/docs/tutorials/destination-retail) |
| The web script is installed on the storefront, the mobile SDK is installed in the app, or both, and the destination page or app loads for the user. | Destination retailer team | [Installing the offsite capture web script](https://developers.vtex.com/docs/guides/installing-the-offsite-capture-web-script) and [Installing Activity Flow in mobile apps](https://developers.vtex.com/docs/guides/installing-activity-flow-in-mobile-apps) |
| The campaign is configured with the correct destination retailer. | **VTEX Ads** team | - |

> ⚠️ Participating as a destination and having data capture working are independent states. Enabling participation on the **Destination retail** page doesn't install or validate capture. If the web script or the mobile SDK isn't implemented, **VTEX Ads** doesn't record the user's arrival and the sale isn't attributed to the campaign.

## How the campaign is created

Currently, the **VTEX Ads** team creates the offsite campaign in the advertiser account, sets the media publisher and the destination retailer, and approves the campaign. The advertiser doesn't create the campaign or go through an approval step, and the destination retailer doesn't approve it either. To request an offsite campaign, the advertiser contacts the **VTEX Ads** team.

## Where the results appear

Each party sees a different portion of an offsite campaign's results:

- **Advertiser:** Tracks delivery and conversion metrics in the **VTEX Ads** campaign report, aggregated by campaign. The report doesn't specify which media publisher served the ad.
- **Destination retailer:** Sees, on the **Destination retail** page, which advertisers are sending offsite campaign traffic to the store and how many active campaigns each one has. The page doesn't display performance metrics for those campaigns.

## Learn more

- [Destination retail](/en/docs/tutorials/destination-retail)
- [Campaign models and roles in VTEX Ads](/en/docs/tutorials/vtex-ads-campaign-models-and-roles)
- [Retail media roles](/en/docs/tracks/retail-media-roles)
- [VTEX Ads metrics and attribution](/en/docs/tutorials/vtex-ads-metrics-and-attribution)
- [Installing the offsite capture web script](https://developers.vtex.com/docs/guides/installing-the-offsite-capture-web-script)
- [Understanding ads events](https://developers.vtex.com/docs/guides/understanding-ads-events)
