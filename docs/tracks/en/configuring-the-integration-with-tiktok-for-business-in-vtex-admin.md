---
title: 'Configuring the integration with TikTok for Business in VTEX Admin'
id: 4AEUg7pEdX1beOaQhFf0wC
status: PUBLISHED
createdAt: 2022-04-14T21:22:01.564Z
updatedAt: 2022-04-26T13:08:43.741Z
publishedAt: 2022-04-26T13:08:43.741Z
firstPublishedAt: 2022-04-18T11:52:11.581Z
contentType: trackArticle
productTeam: Channels
slug: configuring-the-integration-with-tiktok-for-business-in-vtex-admin
locale: en
trackId: 1r0yJSO11nrer1YVu3WTFd
trackSlugEN: tiktok-integration
---

After installing the app, you must configure it in the VTEX Admin. To do this, follow the steps in the next sections of this article.

1. [Completing the integration configuration form](#1-completing-the-integration-configuration-form).
2. [Connecting your TikTok account](#2-connecting-your-tiktok-account).
3. [Configuring TikTok for Business](#3-configuring-tiktok-for-business).

## 1. Completing the integration configuration form

First, you must fill in the TikTok integration configuration form with the requested information.

1. In the VTEX Admin, go to **Marketplace > TikTok**. For some versions of the VTEX Admin, you can access the page in **Apps > My apps > TikTok**.
2. Complete the form with the information described in the following sections:
    * [Configuration of the catalog integration](#configuration-of-the-catalog-integration).
    * [Company data](#company-data).
    * [Contact information](#contact-information).
3. Click `Continue`.
4. Check the information displayed before proceeding.
5. Click `Confirm`.
   You will be directed to a screen to [connect to the TikTok account](#2-connecting-your-tiktok-account).

### Configuration of the catalog integration 

In this part of the form, you need to fill in information that will be used to integrate your product catalog with TikTok.

* **Affiliate ID:** the identifier of the [new affiliate](https://help.vtex.com/en/tutorial/what-is-an-affiliate--4bN3e1YarSEammk2yOeMc0) you want to create for the integration. The affiliate ID must contain only 3 consonants and cannot be associated with an existing affiliate. We suggest using `TKT` to easily identify TikTok. It is important to check if the ID is not in use in **Orders management > Settings > Affiliates**. The affiliate will be created automatically when you complete the configuration. 

* **Trade policy:** a field to select the trade policy to be associated with a catalog integrated with TikTok. Currently, the integration only accepts trade policies with BRL as currency. See the [Sending product data to TikTok](#sending-product-data-to-tiktok) section for more information.

<div class="alert alert-warning">
<p>Do not change the affiliate configuration created automatically through this integration. Any future manual changes to the affiliate's configuration in <strong>Orders management > Settings > Affiliates</strong> may cause the integration to stop working.</p>
</div>

### Company data

In this section, you must enter your store’s information, which will be sent to TikTok.

* **Store name:** the name of your store as it will appear on TikTok.
* **Store website:** URL of your store's website that will appear on TikTok. It cannot be changed later.
* **Segment:** a field to select the market segment in which the store operates, among the options made available by TikTok.
* **Country:** the country in which the store operates. Currently, the integration is only available for Brazil.
* **Time zone:** the time zone in which the business is located.

### Contact information

Here, you need to specify the contact details of the person responsible for the integration, so that TikTok can contact them if necessary.

* **Email:** the email of the person responsible for the integration. It does not have to be the email address of your VTEX Admin account, you can inform any contact email address.
* **Country code:** the country code for the phone number of the person responsible.
* **Phone:** the phone number of the person responsible.

## 2. Connecting the TikTok account

After completing the integration configuration form, you need to connect your TikTok account. To do this, please follow the instructions below:

1. Go to **Marketplace > TikTok** (or **Apps** **> My apps > TikTok,** in some versions of the VTEX Admin) and click on `Connect Account`.
    This will open a TikTok window to log in to your TikTok for Business account.

2. Log in using the email and password provided for your TikTok account.
    You will be redirected to the [Set up TikTok for Business](#3-configuring-tiktok-for-business) page in the TikTok environment.

## 3. Configuring TikTok for Business

<div class="alert alert-warning">
<p>We recommend disabling the extensions that block ads in your browser to avoid errors in the following steps.</p>
</div>

On the **Set Up TikTok for Business page**, as illustrated below, please follow the configuration instructions described next.

![set-up-tiktok-for-business](https://images.ctfassets.net/alneenqid6w5/77d9v0437SxRBVXD0OUmW/290a1ece93c0fcb0fe91a1da61352513/image2.png)

1. Click the __TikTok for Business Account__ section and check if your account is listed.
    * If you want to connect another account, click `Disconnect` and repeat the login step described in [Connecting the TikTok account](#2-connecting-the-tiktok-account).
2. Click on the **Business Center** section to connect to a [Business Center account](https://ads.tiktok.com/help/article?aid=925158121749954004).
3. In the **Business Center** section, choose one of the following options:
    * To connect to an existing Business Center, click `Connect`.
    * To create a new Business Center: Edit the name of the new Business Center as desired and click `Create New`.
4.  Click on the **TikTok Ad Account** section to connect to [your TikTok Ads Manager account](https://ads.tiktok.com/help/article?aid=9678), i.e. the account you use to create ads on TikTok. 
5. In the **TikTok Ad Account** section, choose one of the following options:
    * To connect to an existing Ad Account, click `Connect`.
    * To create a new Ad Account: Edit the name of the new account as desired and click `Create New`.
6. Click on the __Data Sharing__ section to create a [TikTok Pixel](https://help.vtex.com/en/tracks/tiktok-integration--1r0yJSO11nrer1YVu3WTFd/7Dwfwu1aHMp1aR1yvej5nv#tiktok-pixel).
7. In the **Data Sharing** section, edit the name of the new Pixel as desired and click `Create New`.
8. Use the <i class="fas fa-toggle-on"></i> button to enable or disable [Advanced Matching](https://ads.tiktok.com/help/article?aid=10007891). This feature is not available for the VTEX integration at the moment, so even if you enable it via this button, it will not be applied.
9. Click on the __Catalog__ section to integrate your catalog with TikTok. Read [Sending product data to TikTok](#sending-product-data-to-tiktok) for more information on this process.
10. In the **Catalog** section, edit the name of the new catalog to be created in the [TikTok Catalog Manager](https://ads.tiktok.com/help/article?aid=10001005) as desired and click `Create New`. The products associated with the trade policy informed in the [form](#1-completing-the-integration-configuration-form) will be added to this catalog onc TikTok.
11. Click `Finish Setup`.

When you complete this setting, you will be redirected back to **Marketplace > TikTok** in the VTEX Admin, where you can [manage the integration](https://help.vtex.com/en/tracks/tiktok-integration--1r0yJSO11nrer1YVu3WTFd/24SfBYkRkKMaetgjLDKgaP). For some versions of the VTEX Admin, you can access the page in **Apps > My apps > TikTok**. After the configuration has been successfully completed, any user logged into the VTEX Admin can access the TikTok management area. 

### Sending product data to TikTok

<div class="alert alert-warning">
  <p>TikTok only syncs products that comply with the platform's advertising policies. Read <a href="https://ads.tiktok.com/help/article?aid=9550&lang=pt">TikTok Advertising Policies</a> for more information.</p>
</div>

Once the integration is configured, sending products to TikTok will be an automatic process. The following data will be submitted:

* Product name
* SKU ID
* Product ID
* Category
* Description
* Brand
* URL
* Condition
* Availability
* Price (in BRL)
* Images

For products to be synced, all of the above information must be completed. Updates to product listings made in the VTEX environment, via [API](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-overview) or [Admin](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/1ROhz3Y7mfSMmCO1I1GxEL), are automatically replicated on TikTok.
