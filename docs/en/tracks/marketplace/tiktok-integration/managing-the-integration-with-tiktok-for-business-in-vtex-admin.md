---
title: 'Managing the integration with TikTok for Business in the VTEX Admin'
id: 24SfBYkRkKMaetgjLDKgaP
status: PUBLISHED
createdAt: 2022-04-14T21:42:00.633Z
updatedAt: 2022-04-26T13:16:22.600Z
publishedAt: 2022-04-26T13:16:22.600Z
firstPublishedAt: 2022-04-18T11:57:58.931Z
contentType: trackArticle
productTeam: Channels
slugEN: managing-the-integration-with-tiktok-for-business-in-vtex-admin
locale: en
trackId: 1r0yJSO11nrer1YVu3WTFd
trackSlugEN: tiktok-integration
order: 5
---

After installing and configuring TikTok for Business, you can manage the integration with TikTok in **Marketplace > TikTok**. For some versions of the VTEX Admin, you can access the page in **Apps > My apps > TikTok**.

After the configuration has been successfully completed, any user logged into the VTEX Admin can access the TikTok management area. However, when interacting with the buttons in this area, users will be redirected to TikTok environments — TikTok Business Center, TikTok Ads Manager and TikTok Catalog Manager — where they need permissions to view content and make changes.

![manage-tiktok-integration](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/marketplace/tiktok-integration/managing-the-integration-with-tiktok-for-business-in-vtex-admin_1.png)

From that page, you can do the following:

- [Create ads on TikTok](#create-ads-on-tiktok)
- [Manage features](#manage-features)
    - [Business Center](#business-center)
    - [TikTok Ad Account](#tiktok-ad-account)
    - [Data Sharing](#data-sharing)
    - [Catalog](#catalog)
- [Disconnect TikTok from your store](#disconnecting-tiktok-from-your-store)

## Create ads on TikTok

To create ads on TikTok, you can click the `Create an ad` button or access **TikTok Ad Account** > `Create an ad`.

You will then be redirected to TikTok Ads Manager to create a new ad.

## Manage features

See below for a description of the features available to manage the integration between your VTEX store and TikTok on this page. You must click on each section to view its respective options.

### Business Center

* **Manage:** redirects you to [TikTok Business Center](https://ads.tiktok.com/help/article?aid=12786) to manage your TikTok business account.

### TikTok Ad Account

* **Manage:** redirects you to [TikTok Ads Manager](https://ads.tiktok.com/help/article?aid=10178) to manage the existing ads.
* **Create an ad:** redirects you to [TikTok Ads Manager](https://ads.tiktok.com/help/article?aid=10178) to create a new ad.

### Data Sharing

* **Manage:** redirects you to the TikTok Pixel management page in TikTok Ads Manager.
* **Enable Advanced Matching:** allows you to use the <i class="fas fa-toggle-on"></i> button to enable or disable [Advanced Matching](https://ads.tiktok.com/help/article?aid=10007891). This feature is not available for the VTEX integration at the moment, so even if you enable it via this button, it will not be applied.

### Catalog

* **Products available:** indicates the quantity of products in your catalog that are available on TikTok.
    * **Manage:** redirects you to TikTok Catalog Manager to manage the catalog on TikTok.
* **Products pending:** indicates the quantity of products in your catalog that are being processed on TikTok. This status is transitory and it means that TikTok is analyzing the information.
    * **Manage:** redirects you to TikTok Catalog Manager to manage the catalog on TikTok.
* **Products need additional details:** indicates the number of products in your catalog that are missing some [information](/en/tracks/tiktok-integration--1r0yJSO11nrer1YVu3WTFd/4AEUg7pEdX1beOaQhFf0wC#sending-product-data-to-tiktok) in order to be synced with TikTok.
    * **Manage:** redirects you to TikTok Catalog Manager to manage the catalog on TikTok.

## Disconnecting TikTok from your store

To disable the integration between your store and TikTok, click on `Disconnect` at the top of the page.

If your TikTok credentials are revoked, i.e. if your account is [suspended](https://ads.tiktok.com/help/article?aid=12170), the integration is automatically disconnected. 

Once disconnected, your integration with TikTok stops completely: TikTok Pixel and the integration with your store's catalog are deactivated. Therefore, you will no longer be able to send new products and update products.

However, VTEX does not delete existing products from TikTok, which means they will continue to appear on TikTok. To delete them from TikTok, you need to manually delete the products in [TikTok Catalog Manager](https://ads.tiktok.com/help/article?aid=10001005).

> ⚠️ If an error message appears when disconnecting TikTok from your VTEX store, follow the steps below to ensure that the integration has been correctly disabled. <ol><li>Go to the [Authorizations](https://ads.tiktok.com/ac/page/authorizations) page in TikTok Ads Manager.</li> <li>Find the **VTEX** option.</li> <li>Click `Remove`.</li></ol>

After disconnecting, it is possible to reactivate the integration at any time by repeating the steps described in [Configuring the integration with TikTok for Business](/en/docs/tracks/configuring-the-integration-with-tiktok-for-business-in-vtex-admin).
