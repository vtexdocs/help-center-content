---
title: 'SmartCheckout™ V5 general characteristics'
id: tutorials_3811
status: PUBLISHED
createdAt: 2017-04-27T21:51:49.943Z
updatedAt: 2024-02-08T15:03:13.491Z
publishedAt: 2024-02-08T15:03:13.491Z
firstPublishedAt: 2017-04-27T23:11:15.321Z
contentType: tutorial
productTeam: Shopping
author: authors_65
slugEN: smartcheckout-v5-general-characteristics
legacySlug: migrating-to-the-new-version-of-smart-checkout
locale: en
subcategoryId: 8AGXmtpbTqUE2KQu0Swwk
---

SmartCheckout™ V5 allows purchase without VTEX login and password (one-click-buy checkout). Check here its main characteristics and advantages.

### Iframe for the card payments

Payment with credit card, debit card and private label (type of card issued by the retailer and only accepted within your network of stores) is now isolated inside an iframe, which makes it impossible to customize JavaScript, increasing the security of your store. For more information about data protection, visit [SmartCheckout Security](https://help.vtex.com/en/tutorial/seguranca-do-smartcheckout--3SrJuuhrqwePUg1rp1exfB#).

Note that, besides the fact of being inside an iframe, it's still possible to apply CSS on the field. But you must pay attention to the CSS selector you're using: It needs to start with elements that are inside `#app-container .App` and without i.e. `#payment-data` or `.payment-group`, that are outside the iframe.

A practical example: to hide the 'Pay with different cards' option, use the element `.ChangeNumberOfPayments {display: none}`.

### New geocoordinate freight calculation option

By using this feature, you may define delivery regions based on a geographical point (latitude and longitude) instead of a postal code.

In case you wish to understand that feature in further details, read the article [Geolocation at Checkout](/en/tutorial/geolocation-at-checkout).

__Attention:__ Once the API Key has been included in the Checkout configuration, the geolocation will be visible in your store checkout, even if you are not migrated to the new version of Smart Checkout._

### Page title

The SmartCheckout™ page title, which appears in the browser's bar or tab, can be customized. Just follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Storefront > Checkout__, or type __Checkout__ in the search bar at the top of the page.
2. Click on the <i class="fas fa-cog" alt="engrenagem azul"></i> icon of the desired website.
3. In the blue options menu located at the top of the page, click on __Checkout__.
4. In the __Website Title__ field, write the desired title and check the result in the PREVIEW box.
5. Click the `Save` button.

### Customized JavaScript

You can use the files `checkout5-custom.js` and `orderplaced2-custom.js` in order to insert your JavaScript customizations into Checkout and into the finished order screen, respectively. Just follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Storefront > Checkout__, or type __Checkout__ in the search bar at the top of the page.
2. Click on the <i class="fas fa-cog" alt="engrenagem azul"></i> icon of the desired website.
3. In the blue options menu located at the top of the page, click on __Code__.
4. In the __Files__ menu, located on the right side of the page, click on the ones you want to make adjustments to the code.
5. Click the `Save` button.

> ⚠️ Customizing JavaScript files can damage your Checkout. VTEX **does not recommend** customizations and doesn't take responsibility for any damage caused by this code.

__IMPORTANT:__ Do not use these files to insert marketing and integration tags. In case you need them, do so through Google Tag Manager.

### PayPal Plus

The SmartCheckout™ V5 supports the PayPal Plus payment method. This allows payment to be made directly on your website, without the need to redirect your customers (transparent checkout).

### Google Enhanced Ecommerce

The SmartCheckout™ V5 adds to the data layer information to be used along with Google Enhanced Ecommerce. If you wish to understand how to use these tags, check Google's documentation: https://developers.google.com/tag-manager/enhanced-ecommerce.

