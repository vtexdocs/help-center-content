---
title: 'How inventory availability works on the product page'
id: gyVfuG5dTyUyGA02iiU0y
status: PUBLISHED
createdAt: 2019-01-24T20:45:34.673Z
updatedAt: 2023-03-29T00:39:08.136Z
publishedAt: 2023-03-29T00:39:08.136Z
firstPublishedAt: 2019-01-24T22:15:25.141Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slug: how-inventory-availability-works-on-the-product-page
locale: en
legacySlug: how-inventory-availability-works-on-the-product-page
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

To understand how the inventory availability works for the user, we need to know a little bit about how the architecture of calls that makes stock information available on the product page works.

On the product page, the **Layout**, module that renders the pages, makes a call to the __Checkout__. Checkout is the module that has the most up-to-date information on the inventory availability of a product. Checkout always returns the most up-to-date inventory information possible.

That way, the Layout uses this Checkout information and shows on the product page whether a particular SKU is available or not.

## SKU displayed as unavailable

It's possible, although not common, that a product appears as __unavailable__ to some user, __even having available stock__.

What happens is that product pages use the cache to store some data and optimize its performance. Thus, the requests fetch some information from the [cache layers](/en/tutorial/understanding-how-the-cache-works) instead of requesting the information directly from the servers. This is a common procedure on the web so that responses to requests are faster and sites become more efficient.

Because of these cache layers, inventory availability information on the product page may differ from that returned by Checkout at the same time. In order for the product page to display the most up-to-date Checkout information, the product page cache must expire. To expire the cache, you must add any parameter to the product page URL (for example, `utm_source=anyquerstring`) and refresh the page.

## SKU displayed as available

In the same way, it's possible for a product page to display an SKU as __available__, even without available inventory.

These are the low stock scenarios. A user can spend a certain amount of time on a product page that displays the available SKU information, according to the information passed by the Checkout at the time of the call. However, this stock may have been consumed by another customer in the meantime.
