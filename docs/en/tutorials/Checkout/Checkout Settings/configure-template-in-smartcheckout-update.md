---
title: 'Configure template in SmartCheckout'
id: ToTE5XB39t0SwtHgpgwSv
status: PUBLISHED
createdAt: 2019-08-27T17:48:08.831Z
updatedAt: 2023-03-24T19:06:08.064Z
publishedAt: 2023-03-24T19:06:08.064Z
firstPublishedAt: 2019-10-28T16:39:00.190Z
contentType: tutorial
productTeam: Shopping
author: authors_84
slugEN: configure-template-in-smartcheckout-update
locale: en
legacySlug: configure-template-in-smartcheckout-update
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

The __Portal__ is used to render __Checkout__ (cart, personal data, address, payment method) and __OrderPlaced__ (buying confirmation screen)  screens. In this article it will be presented how to register and configure the resources of the Portal. 

The __Checkout__ module in the Admin, displays the sites that are registered for your account. Through it, it is also possible to create a new website, edit and configure information about existing websites.

>ℹ️ Each registered site corresponds to a multidomain (if the account has contracted multidomains). For accounts that do not use multidomains, it is not necessary to register more than one site in this module. Learn more at [Create a multistore/multidomain](https://help.vtex.com/en/tutorial/como-criar-multiloja-multidominio--tutorials_510#).

## Creating a new website

1. In the VTEX Admin, go to __Store Settings > Storefront > Checkout__, or type __Checkout__ in the search bar at the top of the page.
2. Click on the `New Site` button.
3. Fill in the following fields:
<ul>
<br>
  <li><b>Name</b>: enter here the desired name for the site.</li>
  <li><b>Store</b>: fill in with the account name, which can be found at  <b>Account Settings > Account Management > Accounts > Account name</b>.</li>
  </ul>
4. Click `Save`.

Creation of the new website:

![en.smartcheckout1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Account Name Access:

 ![en.smartcheckout2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

## Editing and configuring website 

1. In the VTEX Admin, go to __Store Settings > Storefront > Checkout__, or type __Checkout__ in the search bar at the top of the page.
2. Click on the <i class="fas fa-cog" alt="engrenagem azul"></i> icon of the desired website.
3. By accessing the blue options menu located at the top of the page, you can perform the following actions:
   - __WebSites__: return to the home screen of the registered websites.
   - __Edit__: edit the "Name" and "Store".
   - __Checkout__: perform basic settings, such as Shipping Calculation, Google Tag Manager, among others.
   - __Orders__: set up cancellation and order replacement reasons.
   - __Code__: display and create website related templates.
   - __Pages__: display existing pages for the website.

Example of existing sites in the same account:
![EN Cards Portal](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

Example of available pages for a website:
![en.smartcheckout3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

If you want to __delete__ a site, click on the delete button for the desired site, as in the example below:

![en.smartcheckout5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)

We'll now have a more in-depth look at the following options menu settings: __Code__ and __Checkout__, being responsible for configuring the pages *checkout* and *order placed* pages.

## Configuring Checkout

1. In the VTEX Admin, go to __Store Settings > Storefront > Checkout__, or type __Checkout__ in the search bar at the top of the page.
2. Click on the <i class="fas fa-cog" alt="engrenagem azul"></i> icon of the desired website.
3. In the blue options menu at the top of the page, click __Checkout__ and configure the fields below as needed:
<ul>
<br>
  <li><b>Website Title</b>: if informed, will be displayed in the title of the cart, checkout and confirmed order pages.</li>
  <li><b>Google Tag Manager</b>: enter the ID (in `GTM-XXXX` format) of your container <a href="https://www.google.com/tagmanager/">Google Tag Manager</a>, if you want to use it automatically.</li>
  <li><b>Google Maps API Key</b>: the key is used in two situations: when the Delivery function based on geographic coordinates is active or if the option to <b>Pickup in store</b>.</li>
  <li><b>Calculation of Delivery Options (Beta and Stable)</b>: select whether the freight calculation will be done from the spreadsheet or by geolocation.</li>
  </ul>

![en.smartcheckout6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)

## Configure code

1. In the VTEX Admin, go to __Store Settings > Storefront > Checkout__, or type __Checkout__ in the search bar at the top of the page.
2. Click on the <i class="fas fa-cog" alt="engrenagem azul"></i> icon of the desired website.
3. In the blue options menu located at the top of the page, click on __Code__. A menu of __Files__ and __Templates__ will be displayed on the right with all the templates for your site, configured by the system.

Example:

![en.smartcheckout7](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)

### Configuring templates from the "Code" menu

You can customize the pages of your website, in addition to configuring other functionality through HTML, by accessing the __Files__ and __Templates__ menu.

The HTML code filled in the template corresponds to what will appear on the __checkout__ and __order placed__ pages of your site.

Of the available templates, the only ones that cannot be changed are __vtex-checkout__ and __vtex-orderPlaced__. These correspond to the native functioning of the platform, rendering the main content of the __checkout__ and __order placed__ pages.

>⚠️ Javascripts included directly in any Portal templates will be ignored by the platform. The reason behind this is that only scripts that originated in Google Tag Manager are accepted by [SmartCheckout](https://help.vtex.com/en/tutorial/smartcheckout-preenchimento-automatico-de-dados-do-cliente--2Nuu3xAFzdhIzJIldAdtan#). aTherefore, whenever you need to customize something (or even to insert specific tags) using javascript, do this through [Google Tag Manager](https://help.vtex.com/en/tutorial/integration-with-google-tag-manager--frequentlyAskedQuestions_616#).

### Examples of how to fill out templates

Below are examples of how the codes present in the __checkout-header__, __checkout-footer__, __vtex-checkout__ and __vtex-orderPlaced__ templates can be filled and their corresponding visualization in the website:

- Template __checkout-header__ and website page header:

![en.smartcheckout10](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_8.png) 

![en.smartcheckout11](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_9.png)

- Template __checkout-footer__ and website page footer:

![en.smartcheckout8](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_10.png)

 ![en.smartcheckout9](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_11.png)

- Template __vtex-checkout__ and cart page at Checkout:

![en.smartcheckout12](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_12.png) 

![en.smartcheckout13](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_13.png)

- Template __vtex-orderPlaced__ and confirmed order page:

![en.smartcheckout18](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_14.png)

![en.smartcheckout19](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_15.png)

### Multi-domain accounts

Multi-domain accounts can use just one site if no specifics configuration requirements are present. This is possible because, even tough just one site is used, the platform includes a class in the "body" tag, according to the accessed domain. Therefore, applying different layouts to the same site is made simple.

An example of a "body" tag that's inserted according to the accessed domain:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_16.jpg)

