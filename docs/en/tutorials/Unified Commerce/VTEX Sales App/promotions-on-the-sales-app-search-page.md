---
title: 'Promotions on the Sales App search page'
id: 2g9JmTLKYASz8jxme2pyc9
status: PUBLISHED
createdAt: 2024-08-19T11:11:42.781Z
updatedAt: 2024-10-18T12:07:33.298Z
publishedAt: 2024-10-18T12:07:33.298Z
firstPublishedAt: 2024-08-20T13:54:03.140Z
contentType: tutorial
productTeam: Shopping
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: promotions-on-the-sales-app-search-page
locale: en
legacySlug: promotions-on-the-sales-app-search-page
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

The [promotions](https://help.vtex.com/pt/tutorial/lista-de-promocoes-beta--4yB7nNdliiFxBTXE19GCIi#criar-promocoes) feature on the [Sales App](https://help.vtex.com/pt/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/6cq4E1JCmA6vCvBCCtAgIM) search page has been created for merchants who want to highlight special offers directly in the search results of the Product Listing Page (PLP). This provides a better shopping experience, promotes interaction with customers, and increases the visibility of products containing multiple promotions.

To display a promotion correctly in Sales App, you must:

- Check the promotion as highlighted when you create it in the VTEX Admin. Only highlighted promotions will be displayed in Sales App.
- Add a field called `salesAppHighlight` with the value `true` in the **additional information** section to highlight the promotion in the product image.
- In the **additional information** section, add a field with the name `salesAppDisplayName`. As the value, add the text that will overwrite the default name of the promotion displayed on the search page. For example, "Free shipping".

>ℹ️ If you want the promotion to be exclusive to Sales App, you need to configure a dedicated [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) for Sales App.

When a product has multiple promotions, the sales associate in a physical store can view all the options by clicking the tag of the promotion displayed in the search results.

The following image shows a promotion available on the Product Listing Page (PLP).

![promoção em destaque](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
