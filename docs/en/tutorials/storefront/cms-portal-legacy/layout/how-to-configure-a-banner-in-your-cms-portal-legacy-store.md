---
title: 'How to configure a banner in your CMS Portal (Legacy) store'
id: frequentlyAskedQuestions_1848
status: PUBLISHED
createdAt: 2019-01-24T20:45:59.558Z
updatedAt: 2026-07-10T10:52:00.000Z
publishedAt: 2023-03-29T17:40:06.023Z
firstPublishedAt: 2019-01-24T22:15:27.116Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-configure-a-banner-in-your-cms-portal-legacy-store
legacySlug: how-to-alter-a-banner
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
seeAlso:
    - "/docs/tracks/legacy-cms-portal"
    - "/docs/tutorials/defining-window-displays"
---

>⚠️ This tutorial is only applicable to CMS Portal (Legacy) stores.

In this article, you'll learn how to create, edit, and schedule banners in the CMS Portal (Legacy). Throughout the instructions, you'll see how to access the page layout, complete the banner fields, and set the display conditions.

This article shows how to configure a banner on the homepage, but the same flow applies to any page in your store.

## Instructions

To create or change a banner on your store homepage, follow these steps:

1. In the Admin, go to **Storefront > Layout**.
2. Click the **CMS > Sites and channels** folder.
3. Click the name of the desired site.
4. Click the **/** folder.

    ![instrução CMS -pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/como-alterar-banner_1.png)

5. Click **Home > Settings**.

    ![cms-home-settings PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/como-alterar-banner_2.png)

6. In the window that opens, click the pencil icon to edit.

    ![cms_home_settings_lapis pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/como-alterar-banner_3.png)

7. In the form that opens, complete the fields with the banner settings. Learn more about each field in the [Banner form fields](#banner-form-fields) section.
8. Click `Update Content List` to update the banner content. The form will close, and the window opened in step 6 will be displayed.
9. Click `Save Content` to save the information. A pop-up will appear with the message `Settings saved successfully`.
10. Click `OK` to close the pop-up.
11. Click `Save Settings`

    >⚠️ If you leave the page without clicking the `Save Settings` button, as indicated in the last step, you'll lose all the changes made in the banner registration.

## Banner form fields

The banner form is divided into two sections:

- [**Content**](#content)
- [**Display Condition**](#display-condition)

### Content

| Field | Description |
| --- | --- |
| **Content Name** | Internal name that identifies the banner in the CMS. |
| **Width** | Image width in pixels (example: `1170px`). |
| **Height** | Image height in pixels (example: `500px`). |
| **File Type** | File type. For banners, select `image`. |
| **URL** | Destination link when clicking the banner. |
| **Banner/Preview** | Field to add the banner image. See more details in the [Changing or adding the banner image](#changing-or-adding-the-banner-image) section. |

### Display Condition

Display conditions allow you to segment when and where the banner will be displayed, as shown in the following table:

| Field | Description |
| --- | --- |
| **Partner/Campaign/Source** | Displays the banner when the visitor's source URL contains matching UTMs (for example, `utm_source=google&utm_medium=cpc`). |
| **Keywords** | Links the banner's display to searches for specific terms on the site. |
| **Category/Brand** | Links the banner's display to specific category and/or brand pages. |
| **Active Content** | Enables the banner to be displayed in the store. |
| **From/To** | Sets the period during which the banner will be active. See more details in the [Scheduling a banner](#scheduling-a-banner) section. |

## Changing or uploading the banner image

To make a change or upload a new image, follow the steps below:

1. In the **Content** section of the banner form, click `add file`. The **Insert File** window will open, with options to find an existing file or upload a new one.

    ![inserir-image-banner](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/inserir-imagem-banner.png)

2. Choose one of the following options to define the image that will be used in the banner:

   **Use an existing file**

   a. In **Find by name**, type the file name to find it.

   b. If you know the file identifier, you can complete the `File Id` field to find it.

   c. Click `Find` to run the search.

   **Upload a new image**

   a. In **Insert a new file**, click `Browse for file`.

   b. Select the image from your computer.

3. After finding or selecting the file, click `Add` to link it to the banner.
4. Click `Update Content List` to update the banner content.
5. Click `Save Content` to save the information. A pop-up will be displayed with the message `Settings saved successfully`.
6. Click `OK` to close the pop-up.
7. Click `Save Settings`

    >⚠️ If you leave the page without clicking `Save Settings`, as indicated in the last step, all the settings made when adding the banner will be lost.

## Scheduling a banner

To schedule a banner, configure the **From** and **To** fields with the start and end dates for displaying the banner, and make sure to select `Active Content`. If the `Active Content` option isn't checked, the banner won't be displayed, even if the dates are configured.

>⚠️ The CMS Portal (Legacy) uses **UTC-0 (GMT)** in the **From** and **To** fields. For example, if you want the banner to be displayed starting at 10:00 AM Brasília time (UTC-3), set the **From** field to 13:00 (10:00 AM + 3 hours = 13:00 UTC-0).
