---
title: 'How to customize the Checkout UI Custom in the Admin'
id: 548aDBJciQu97Vh0BhEiWx
status: PUBLISHED
createdAt: 2024-01-04T13:27:04.734Z
updatedAt: 2024-01-04T18:28:45.989Z
publishedAt: 2024-01-04T18:28:45.989Z
firstPublishedAt: 2024-01-04T18:28:45.989Z
contentType: tutorial
productTeam: Shopping
author: 2AhArvGNSPKwUAd8GOz0iU
slug: how-to-customize-the-checkout-ui-custom-in-the-admin
locale: en
legacySlug: how-to-customize-the-checkout-ui-custom-in-the-admin
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

The Checkout customizations covered in this article are made using the Checkout UI Custom app. Before configuring it in your app, check if the app is installed in your store or install it as explained in the[ Checkout UI Custom](https://developers.vtex.com/docs/apps/vtex.checkout-ui-custom) article.

## Customizing the Checkout

In the VTEX Admin, go to **Store Settings > Storefront > Checkout UI Custom** or type **Checkout UI Custom** in the search bar at the top of the page.

The app's customizing features can be found in the following Admin tabs:

* [Layout](#layout)
* [Colors](#colors)
* [JavaScript](#javascript)
* [CSS](#css)
* [History](#history)

## Layout

In this tab, you can configure the following:

1. **Payment option as accordion:** by enabling this button, the payment methods are displayed in a cascade (accordion) if up to five payment methods are available. When disabled, the payment methods will be displayed in side tabs.

2. **Simplified shipping date:** by enabling this button, the user can view the delivery estimate in date format (e.g., "Monday, 09/18/23").  When disabled, the data provided will be limited to an estimate of the delivery time in days (e.g., "up to 5 working days").

3. **Show item unit price:** by enabling this button, the user will see both the unit price of each product and the total amount for that product based on the product's quantity. When disabled, only the product's unit price will be displayed.

4. **Show Notes field:** by enabling this button, a box will be displayed for the user to add additional comments to the order, such as a birthday message if the product is a gift or a comment about the delivery. When disabled, this box will not be displayed.

5. **Hide email step:** by enabling this button, the option to automatically enter information via email is disabled. When disabled, the contact information must be entered manually.

6. **Google address form:** this is an address form integration with Google (beta). By enabling this button, when the user enters the address, autocomplete suggestions will be offered. Selecting one of these suggestions will automatically complete the address fields.

7. **Text size:** it allows you to change the font size (in pixels) in the Checkout.

8. **Border radius:** it allows you to customize the rounding format of the outer border (in pixels) in the Checkout.

9. **Button border radius:** it allows you to customize the rounding format of the button border (in pixels) in the Checkout.

10. **Text field height:** it allows you to customize the width (in pixels) of the text fields in the Checkout.

11. **Max. wrapper width:** it allows you to set the maximum width (in pixels) of the information displayed in the Checkout.

12. **Container border:** it allows you to configure the [type of border](https://www.w3schools.com/css/css_border.asp) for Checkout sections.

13. **Font family:** it allows you to configure the font types used in the Checkout.

## Colors

The Colors tab allows you to customize the checkout colors in your store, including backgrounds, buttons, text, and more. This standardization ensures consistent design.

![Colors](https://images.ctfassets.net/alneenqid6w5/4H44wWoSRkxqorAvMIIdtG/82c33725eabb61f10ba13b8d2406e4d8/Colors_-_EN.png)

## JavaScript

The JavaScript tab adds an additional layer of customization to the interface by allowing you to add scripts.

![Java - EN](https://images.ctfassets.net/alneenqid6w5/2Uz2vqftUh4RvMsMwuO6OR/045facf9e300f701eb07395dbfbb1570/Java_-_EN.png)

## CSS

The CSS tab allows the store layout customization by adding CSS code.

![CSS - EN](https://images.ctfassets.net/alneenqid6w5/70CMxJWujBZ9qK4bCseGeH/6911348bbacbba2fee4c7bc0bfd8a1df/CSS_-_EN.png)

## History

It allows you to view and restore previously created and published customizations.

![Histórico - EN](https://images.ctfassets.net/alneenqid6w5/6C0VthFtBjKP4S3aSS2BaX/85741110e6bd7c7ad0914adce2124bcb/Hist_rico_-_EN.png)

To ensure that your configuration is successfully applied, complete the necessary settings and click `Publish`.
