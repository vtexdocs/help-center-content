---
title: 'Configure Cartman'
id: 1ACMTStZYkMqB0lTgwg451
status: PUBLISHED
createdAt: 2019-09-03T15:02:48.303Z
updatedAt: 2022-06-15T23:16:07.805Z
publishedAt: 2022-06-15T23:16:07.805Z
firstPublishedAt: 2019-09-09T18:28:20.208Z
contentType: tutorial
productTeam: Shopping
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configure-cartman
locale: en
legacySlug: configure-cartman
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

Cartman is a tool created to assist the merchant in the analysis of possible scenarios at Checkout, simulating, sharing and investigating carts in VTEX stores. By default, this tool is available and activated automatically for the following VTEX domains:

- `{accountname}.myvtex.com`
- `{accountname}.vtexcommercebeta.com`
- `{accountname}.vtexcommercestable.com`

For official store domains (`www.{yourstore}.com`), you need to [manually activate Cartman](configure-cartman#activate-cartman-manually).

This article will cover the following topics:

- [Manually activate Cartman](configure-cartman#activate-cartman-manually)
- [Cartman features](configure-cartman#cartman-features)
  - [Get information about items in cart](configure-cartman#get-information-about-items-in-cart)
  - [Add specific items to cart](configure-cartman#add-specific-items-to-cart)
  - [Add random items to cart](configure-cartman#add-random-items-to-cart)
  - [Define marketing data](configure-cartman#define-marketing-data)
- [Disable Cartman](configure-cartman#disable-cartman) 

<div class="alert alert-warning">
  Only the merchant has access to <b>Cartman</b>. Its features are not available for use by users in a store.
</div>

## Activate Cartman manually

To activate Cartman manually, follow the steps below:

1. Access any of your store's Checkout pages (`https://{accountname}.myvtex.com/checkout/`).
2. Insira a query string `?cartman=on` no final da URL  (`https://accountname.myvtex.com/checkout?cartman=on`).
3. In the lower right corner of the screen, click the button <img src="https://images.ctfassets.net/alneenqid6w5/2Z1d5lHtVM7E7SvL58C8UW/acc0fa24cc8ae2e008d4a8d0f466b035/cartman-removebg-preview.png" alt="cartman-icon" width="25"/> to access Cartman.

## Cartman features

### Get information about items in cart

By accessing the **View cart details** menu, it is possible to check the specific information of each of the selected products in the cart.

![Item detail](https://images.ctfassets.net/alneenqid6w5/1EH9jYZZwOSTcCDKqoQocj/82b5f6305c4ea397b5aaaed9168e6d74/Item_detail.PNG)

### Add specific items to cart

In **Add items by SKU ID**, new items can be added to the cart according to their identification code (SKU ID). The following fields can be used:

- **SKU IDs**: identification number of a particular item (SKU). Required field.
- **Quantity of each item**: indication of how many SKU units will be added to the cart.
- **Seller ID**: identification number of the seller who will deliver the item.

![Add items by SKU ID](https://images.ctfassets.net/alneenqid6w5/3HfuNsrFblpnncoUW2UQl2/969209879fc26ab3ea769e75c8730bda/Add_items_by_SKU_ID.PNG)

### Add random items to cart

In **Add random items**, new items from the store catalog can be added to the cart at random (without specifying which item will be added). To add new items, one or more of the criteria below can be selected:

- Number of items
- Quantity of each item
- Category ID
- Brand ID
- Collection ID
- Seller ID
- Price range (Price from / Price up to)

![Add random items](https://images.ctfassets.net/alneenqid6w5/3vHoO3Pm1Vnsc2QXYOJMQW/66f12cfd13a5abb0e4e50251a719ccee/Add_random_items.PNG)

### Define marketing data

In the **Set marketing data option**, you can apply discount coupons to specific items and promotions based on marketing information. The following fields can be used:

- **utm_source**: the origin of the traffic, that is, through which website, advertiser, or publication, the user reached the store.
- **utm_medium**: the advertising or marketing media used to access the store's website (banner, newsletter).
- **utm_campaign**: the name of the campaign used to determine the marketing context (Christmas, release).
- **utmi_cp**: internal utm used to define when a certain promotion will be applied, according to the utm described in the order URL. 
- **Cupom**: discount coupon code to be added to cart.

![Set marketing data](https://images.ctfassets.net/alneenqid6w5/5jutuQsztAkNGjFHdPk27a/03ea65c5ca723df8a38ab99dc78301c5/Set_marketing_data.PNG)

To learn more about UTMs and UTMIs, go to [What are utm_source, utm_campaign, and utm_medium](https://help.vtex.com/en/tutorial/what-are-utm-source-utm-campaign-and-utm-medium--2wTz7QJ8KUG6skGAoAQuii#) and [What are the internal UTMs utmi_cp, utmi_pc and utmi_p](https://help.vtex.com/en/tutorial/o-que-sao-as-utms-internas-utmi_cp-utmi_pc-e-utmi_p#).

## Disable Cartman ##

Cartman can be deactivated at any time as required by the merchant. To disable it, follow the steps below:

1. Access any of your store's Checkout pages (`https://{accountname}.myvtex.com/checkout/`).
2. In the lower right corner of the screen, click the button  <img src="https://images.ctfassets.net/alneenqid6w5/2Z1d5lHtVM7E7SvL58C8UW/acc0fa24cc8ae2e008d4a8d0f466b035/cartman-removebg-preview.png" alt="cartman-icon" width="25"/>.
3. At the bottom of Cartman's menu, click  `Disable Cartman`.

<div class="alert alert-info">
  If you want to reactivate <b>Cartman</b>, re-add the query string <code>?cartman=on</code> in one of your store's Checkout pages. In this way, the blue icon will be available again in the lower right corner of the page.
</div>

