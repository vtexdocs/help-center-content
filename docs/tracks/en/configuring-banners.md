---
title: Configuring Banners
id: 4ViKEivLJtJsvpaW0aqIQ5
status: PUBLISHED
createdAt: 2019-11-27T16:34:24.404Z
updatedAt: 2023-03-30T21:35:08.898Z
publishedAt: 2023-03-30T21:35:08.898Z
firstPublishedAt: 2020-03-05T19:58:30.009Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: configuring-banners
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugEN: vtex-intelligent-search
---

To set up a banner, follow the steps below:

1. In the VTEX Admin, go to **Storefront**, or type **Storefront** in the search bar at the top of the page.
2. Click **Banners**.
3. Click <i class="fas fa-plus"></i> `New`.
4. Complete the banner fields.
5. To finish, click `Save`.

After configuring the banner, you have to add it to a page on your store. To do that, follow the steps described in the [Banner](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search-banner) guide.

<div class="alert alert-info">
<p> This feature is available on VTEX Intelligent Search Multilanguage. For more information, please refer to our article <a href="https://help.vtex.com/en/tutorial/vtex-intelligent-search-multilanguage-settings-beta--2WahlTESLXIJ9XBdQMdTYO#banners">VTEX Intelligent Search: Multilanguage settings (Beta)</a>.</p>
</div>

![banner-form-en](//images.ctfassets.net/alneenqid6w5/4eY6elSTbPcVvjQHuxOhdu/306bbd26bcadab589aeabe91903b0bcc/image.png)

## Banner fields

To add a banner, the following fields need to be completed:

### General Information

* **Name**: Name of the banner.
* **Position**: Position where the banner will be displayed on the search results page. Banners can be positioned in four different areas of the site page. The placing is up to the retailer and will be determined by the option selected in this field or defined through [store-theme blocks](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search-banner#props).

### Type

* **Banner type**: Banner content that will be created. The banner can be  HTML code or an image URL:
    * **HTML**: The administrator can add media, YouTube videos, images, or code lines, such as JavaScript, to the HTML field.
    * **Image**: The system requests the image URL that will be used and the banner destination link.
        * Image URL
        * Destination link
* **Time zone**: Time zone for the times configured in the banner.
* **Start date**: Date when the banner will start being available.
* **Start time**: Time when the banner will start being available.
* **End date**: Date when the banner will stop being available. This allows the administrator to schedule future campaigns, which makes them easier to control.
* **End time**: Time when the banner will stop being available.

### Trigger Rules

**Trigger rules** are a group of conditional terms or filters that are applied to every search. You need to have at least one condition, whether by term or by filter.

Click <i class="fas-solid fa-link"></i> `Autofill from URL` to add the URL of the search page to the trigger rules that will be applied.

![banner-url-en](//images.ctfassets.net/alneenqid6w5/2ldGnmahkPao4EbISls3gu/326bfe62f7a49e6f1bd34c7cbe5f6b6a/image.png)

Click <i class="fas fa-plus"></i> `Add condition` to create a rule. Rules can be of two types:

* **Term**: The word searched by the customer that will be associated with the rule.
* **Filter**: Predefined attribute that can be selected which restricts the search results. You can select categories, departments, and subcategories.

Click `Clear Rules` to delete all the rules.

