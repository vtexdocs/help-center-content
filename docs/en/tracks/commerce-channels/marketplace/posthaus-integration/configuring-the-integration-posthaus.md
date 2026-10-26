---
title: 'Configuring the integration'
id: 2TTDtf6ZityqXzfPfnvJ3e
status: PUBLISHED
createdAt: 2024-10-23T17:17:07.710Z
updatedAt: 2026-09-28T20:45:00.000Z
publishedAt: 2025-05-28T14:34:26.994Z
firstPublishedAt: 2024-10-23T19:01:15.353Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-the-integration-posthaus
locale: en
trackId: eipXIoOCKRgTDkg1Z1C4a
trackSlugEN: posthaus-integration
order: 2
---

## Posthaus credentials

The first step to integrate your VTEX store with Posthaus is to have the **AppKey** and **AppToken** credentials. Both are used to validate your integration with the marketplace.

> ❗ To get your credentials and start the integration, contact [VTEX Support](https://supporticket.vtex.com/support).

After requesting the credentials, the seller can proceed with [Defining a sales channel for Posthaus](#defining-a-sales-channel-for-posthaus) and configuring the [Divergence rule](/en/docs/tracks/configuring-price-divergence-rule-posthaus).

During the configuration process on the VTEX platform, always have the credentials provided by Posthaus at hand. The [AppKey and AppToken](https://developers.vtex.com/docs/guides/authentication) are essential for the integration.

## Defining a sales channel for Posthaus

On VTEX, a [sales channel](https://help.vtex.com/docs/tutorials/how-trade-policies-work) determines a specific product assortment, pricing, and shipping strategy. This means the settings that apply to your products on Posthaus are defined by the sales channel.

If you use the same catalog, pricing, and shipping strategy settings in your VTEX store and on Posthaus, you don't need to [create a new sales channel](https://help.vtex.com/docs/tutorials/creating-a-trade-policy).

You'll only need to [configure a specific sales channel for the marketplace](https://help.vtex.com/docs/tutorials/creating-a-trade-policy) if you have one of the following goals:

- Offering a different selection of products on Posthaus.
- Making a different inventory quantity available.
- Sending different prices to Posthaus.
- Sending different promotions to Posthaus.
- Configuring other payment conditions.
- Defining a different [shipping strategy](https://help.vtex.com/docs/tutorials/shipping-strategy).

If you need an exclusive sales channel for Posthaus, you can [create it directly through the VTEX Admin](https://help.vtex.com/docs/tutorials/creating-a-trade-policy), without completing forms or opening tickets. To learn more about costs and conditions, see [Requesting an additional sales channel](https://help.vtex.com/docs/tutorials/requesting-an-additional-trade-policy). If you have any questions, open a ticket with [VTEX Support](https://supporticket.vtex.com/support) and select the **Sales** option.
