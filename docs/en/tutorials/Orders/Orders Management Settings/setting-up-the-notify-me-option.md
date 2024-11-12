---
title: 'Setting up the Notify me option'
id: 2VqVifQuf6Co2KG048Yu6e
status: PUBLISHED
createdAt: 2017-10-17T20:54:15.822Z
updatedAt: 2023-03-29T20:36:18.980Z
publishedAt: 2023-03-29T20:36:18.980Z
firstPublishedAt: 2017-10-17T20:57:40.778Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: setting-up-the-notify-me-option
locale: en
legacySlug: set-up-the-notify-me
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

>⚠️ This article explains how to set up the **Notify me** feature in stores that use [Legacy CMS Portal](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj). For stores using [VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs/what-is-vtex-io), the setup follows the steps described in the [Availability Notify](https://developers.vtex.com/vtex-developer-docs/docs/vtex-availability-notify) guide.

When a product is out of [stock](https://help.vtex.com/en/tutorial/managing-stock-items--tutorials_139), the retailer may choose to make the **Notify me** feature available to the customer. This feature allows interested customers to be notified by email when the item is available again.

See below an example of how the **Notify me** option is displayed in a store. To receive a notification when the item is back in store, the customer must type in the name and the email in the marked fields and then click on the `Send` button.

![aviseme-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

As soon as the item is back in stock, the system automatically sends an email to the customer informing them that the product is available for purchase again. 

In this article, we will go through the necessary steps for setting up the **Notify me** feature:

* [Displaying the "Notify me" option](#displaying-the-notify-me-option)
* [Setting up the product page template](#setting-up-the-product-page-template)
* [Setting up the notification email template](#setting-up-the-notification-email-template)

## Displaying the "Notify me" option

To enable the display of the **Notify me** feature, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Storefront > Settings**, or type *Storefront* in the search bar at the top of the page and select *Store Settings / Storefront*.
2. Click on the **General** tab.
3. Check the option <a class="far fa-check-square"></a> `Show “Notify me” when out of stock`.
4. Click `Save`.

### Setting up the product page template

Next, you must set up the product page template for displaying the **Notify me** option. Follow the instructions below.

1. In the VTEX Admin, go to **Storefront > Layout**, or type **Layout** in the search bar at the top of the page.
2. Click the **CMS** folder.
3. Click the **HTML Templates** folder.
4. Click the **Product** template.
5. Use the control `vtex.cmc:BuyButton` on the **Product** page template as described below:

```html
<div class="buy-button-box hidden-xs">
  <vtex.cmc:BuyButton />
</div><!-- .buy-button-box -->
```

## Setting up the notification email template

To set up the **Notify me** template for the emails which will be sent to the customers, follow the instructions below.

1. In the VTEX Admin, go to **Store Settings > Email Templates > Templates**, or type **Templates** in the search bar at the top of the page.
3. Type "Let me know" in the search field.
4. Select the **Let me know** template.
5. Go to the **HTML** text box and edit the code as you want.
6. Click `Save`.

## Learn more

* [Exporting customers who signed up for the availability notification (Notify me)](https://help.vtex.com/en/tutorial/exporting-clients-registered-in-the-availability-notification--3Yr19DMQukGeIImUeCwIao)
* [Inserting images in the "Notify me" email](https://help.vtex.com/en/tutorial/inserting-images-into-let-me-know-email--3soCXGcE3XBPsnPhxJh2DY)
* [What to do when the "Notify me" option is not displayed](https://help.vtex.com/en/faq/what-to-do-when-the-notify-me-option-is-not-displayed--oNb6JK1LPMOQwYsecKKCs)

