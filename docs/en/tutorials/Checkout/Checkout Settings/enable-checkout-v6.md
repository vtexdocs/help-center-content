---
title: 'Activating Checkout v6'
id: 7qVqv3ptRvpVVplrvg8ruH
status: PUBLISHED
createdAt: 2019-05-22T14:54:15.180Z
updatedAt: 2023-03-24T12:51:38.105Z
publishedAt: 2023-03-24T12:51:38.105Z
firstPublishedAt: 2019-05-22T18:19:40.922Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slugEN: enable-checkout-v6
locale: en
legacySlug: enable-checkout-v6
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

For more on the Checkout v6 advantages, access our article on the [new SmartCheckout™ release](/announcements/dazzle-your-customer-with-the-new-smartcheckout-shopping-experience--47B91RA1WNhUfTNg5iGU0J).

To update your store's checkout to the latest version (Checkout v6), you must enable it in both Test and Production environments.

## Activate Checkout v6 in Test Environment 

1. In the VTEX Admin, go to __Store Settings > Storefront > Checkout__, or type __Checkout__ in the search bar at the top of the page.
2. Click on the <i class="fas fa-cog" alt="engrenagem azul"></i> icon of the desired website.
3. In the blue options menu located at the top of the page, click on __Checkout__.
4. Under __Smart Checkout Update (V6)__, enable the __Test Environment (Beta)__ option by clicking the <i class="fas fa-toggle-on"></i> button.
5. Click `Save`.
6. [Access your store in beta/test environment](/tutorial/access-beta-environment-through-myvtex-com-domain--3BHM289568gcSwk2O80Asu) and implement the necessary style adjustments. Checkout v6 has new _CSS_ classes that you need to be mindful of when performing style customizations.

![Checkoutv6_box](//images.ctfassets.net/alneenqid6w5/9hAJfi1LLwpFlcB5iWA3k/f185469ae22029d00f5d19f3b6a8cf1b/CheckoutV6_box_EN.png)

## Activate Checkout v6 in Production Environment

After the necessary adjustments are completed, you can activate Checkout v6 in the production environment, by following the steps below:

1. In the VTEX Admin, go to __Store Settings > Storefront > Checkout__, or type __Checkout__ in the search bar at the top of the page.
2. Click on the <i class="fas fa-cog" alt="engrenagem azul"></i> icon of the desired website.
3. In the blue options menu located at the top of the page, click on __Checkout__.
4. Under __Smart Checkout Update (V6)__, enable the __Production Environment (Beta)__ option by clicking the <i class="fas fa-toggle-on"></i> button and in the two checkboxes of the checklist.
5. Click `Save`.

After this step, Checkout v6 would be installed in your store.

![checkoutv6_box_2](//images.ctfassets.net/alneenqid6w5/1gXZSHO1C5yRDF6GL6h5IK/f38745c904dfcb233ec0b09d3c01b2a2/CheckoutV6_box2_EN.png)

## How to ascertain whether Checkout v6 was properly installed?

1. Access the URL `{{accountName}}.myvtex.com/checkout`
2. Press `Ctrl + U` on a Windows machine or `Opt + Cmd + U` if you're using Mac. The page's source code will be displayed.
3. Press `CTRL + F` on a Windows machine or `Cmd + F` on a Mac to open the browser search box.
4. Search for `checkout-ui/v6`. If you come across `//io.vtex.com.br/checkout-ui/v6.x.x/style/style.css` in the source code, the migration to Checkout v6 was successful.
