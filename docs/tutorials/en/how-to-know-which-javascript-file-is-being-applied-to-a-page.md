---
title: 'How to know which JavaScript file is being applied to a page?'
id: frequentlyAskedQuestions_6132
status: PUBLISHED
createdAt: 2019-01-24T20:46:02.714Z
updatedAt: 2023-03-29T14:21:09.594Z
publishedAt: 2023-03-29T14:21:09.594Z
firstPublishedAt: 2019-01-24T22:01:54.751Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_35
slug: how-to-know-which-javascript-file-is-being-applied-to-a-page
locale: en
legacySlug: how-to-know-which-javascript-file-is-being-applied-to-a-page
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

The VTEX platform is extremely flexible. In other words, it is common for customers to have several customizations at the front-end of e-commerce. Different tools can handle these customizations, among them Google Tag Manager or even JavaScript files included on the CMS.

Quite often the number of customizations is so great that, over time, the storeowner himself forgets what each of these files does, right?

One way of identifying which JavaScript file is applying a given effect is by using the following path.

Have in mind a text contained in a mouseover effect, for example. When positioning your mouse over the Cart symbol, the following text appears: “You have no products in your shopping cart”.
In order to identify the JS responsible for this customization to be able to change it, follow the steps below:

1. With your page open, click on **F12** or choose **Inspect Page**;
2. Open the **Network** tab;
3. Use the dashboard search filed and enter the phrase “You have no products in your shopping cart”;
4. The list will show the file containing the search string;
5. In the VTEX Admin, access **Storefront > Layout > CMS** and seacrh for the file on the CMS folder using the following path:

*Files Manager > .js > Look for \_archive\_name\_.js*

If you want to investigate whether a JavaScript customization is causing a layout error, click [here](/en/faq/how-to-identify-layout-errors-caused-by-javascript-files) to find out how to identify JavaScript errors.
