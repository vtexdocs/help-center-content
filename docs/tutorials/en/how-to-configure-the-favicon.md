---
title: 'How to configure the Favicon'
id: tutorials_6370
status: PUBLISHED
createdAt: 2017-04-27T21:48:57.080Z
updatedAt: 2020-07-09T15:57:35.902Z
publishedAt: 2020-07-09T15:57:35.902Z
firstPublishedAt: 2017-04-27T23:11:18.833Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_31
slug: how-to-configure-the-favicon
legacySlug: how-to-configure-the-favicon
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

The favicon is the icon displayed on the browser tab next to the page title. The browser loads this image from the `<link rel="shortcut icon">` element that references an image with the extension “.ico”.

Example:

![favicon_2](//images.contentful.com/alneenqid6w5/2azvX7m3asGckkU6c8WAcM/2e66d9a107c0394c3f1a63afff7f3149/favicon_2-1024x537.png "Favicon 2")

I have used Google as an example, only to reiterate that this resource is not exclusive to VTEX and can be used in any content reproduced in a browser. Read more about this issue on Google. 🙂

### Favicon at VTEX

On VTEX, to ensure that the favicon will be loaded during the customer’s entire browsing session (portal, checkout and orderPlaced), good practices indicate that the templates have to be set up with the `<link>` element inside the `<head>`, as follows:

`<link rel="shortcut icon" href="/arquivos/{STORENAME}-favicon.ico" />`

**Note:** In the portal (/admin/a/), it is possible to set up the favicon in a different URL standard (for example, another file name). However, since the Checkout and the OrderPlaced load the URL based on this pattern, it is advisable to load it in the portal in the same way.

**Note 2:** The {STORENAME} variable must be replaced with the name of the store, as it is registered in the Account management.

![fav](//images.contentful.com/alneenqid6w5/6j5eZzVMEE6E2KgqGgsOwU/c2292316f75f3620cd870c96df9e65fc/fav-1024x554.png)
