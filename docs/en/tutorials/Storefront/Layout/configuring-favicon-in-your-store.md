---
title: 'Configuring Favicon in your store'
id: tutorials_6370
status: PUBLISHED
createdAt: 2017-04-27T21:48:57.080Z
updatedAt: 2024-09-23T20:18:14.557Z
publishedAt: 2024-09-23T20:18:14.557Z
firstPublishedAt: 2017-04-27T23:11:18.833Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_31
slugEN: configuring-favicon-in-your-store
locale: en
legacySlug: how-to-configure-the-favicon
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

>⚠️ This tutorial is only applicable to Legacy CMS Portal stores. For stores developed using Store Framework, follow the instructions in the **Favicons** section in the guide [Configuring SEO in your Store Framework store](https://help.vtex.com/en/tutorial/configuring-seo-in-your-store--1sKskEsjUSvgHyqM8oknVR?&utm_source=autocomplete#favicons).

Favicon is a small icon associated with a website, displayed on the browser tab next to the page title, in bookmarks, browsing histories, and other places where the website address appears, such as search results pages.

![favicon-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/configuring-favicon-in-your-store_1.png)

The favicon helps users quickly identify a website when multiple tabs are opened or when browsing their favorites, improving the user experience and reinforcing a brand's identity and reliability.

To configure the favicon in Legacy Portal CMS stores, follow the instructions below:

1. In the VTEX Admin, go to **Storefront > Layout > CMS > Files Manager > images**.

    ![files-manager](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/configuring-favicon-in-your-store_2.png)

2. In the second column, click `Add`.

    ![add-image](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/configuring-favicon-in-your-store_3.png)

3. Click `Browse for file` to add the image file in the `.ico` format.

    >⚠️ The file name should follow the pattern <i>**{storeName}**-favicon.ico</i>. Replace the variable **{storeName}** with the store name in [Account management](https://help.vtex.com/en/tutorial/account-management--2vhUVOKfCaswqLguT2F9xq).

    ![store-name-favicon](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/configuring-favicon-in-your-store_4.png)

4. Configure the [templates](https://help.vtex.com/en/tutorial/what-are-templates--4l7BQBYO9ycumsqua2CU88) with the element `<link>` inside `<head>`, as follows: `<link rel="shortcut icon" href="/arquivos/**{storeName}**-favicon.ico" />`. The variable `{storeName}` should be replaced with the store name.

    >ℹ️ You can configure the favicon using another file name, which will create a URL different from the default. However, as Checkout and OrderPlaced load the URL following this pattern, we recommend following the format above.
