---
title: Configuring promotions with highlights / flags
id: tutorials_2295
status: PUBLISHED
createdAt: 2017-04-27T21:55:19.949Z
updatedAt: 2023-03-31T19:22:08.848Z
publishedAt: 2023-03-31T19:22:08.848Z
firstPublishedAt: 2017-04-27T23:03:51.539Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: configuring-promotions-with-a-highlightflag
legacySlug: configuring-promotions-with-a-highlightflag
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

The promotion highlight is a notice that can be placed on shelves and product pages stating that the product is eligible for a promotion. A common example is an image below a product picture indicating free shipping.

![ExemploPromocaoDestaque2](//images.contentful.com/alneenqid6w5/jS31HBOW3YWsIYyUOE8o/3d0c108c84b2a7c5e6ae2d4254425e4b/ExemploPromocaoDestaque2.png)

Not all promotions are eligible to be featured. This possibility is limited to the types below:

- Percentage
- Percentage shipping
- Maximum shipping
- Free shipping
- Gift

In addition, **it is not possible to configure a highlight when the promotion has restrictions in the cart**, such as:

- Zip code range;
- Order value, unless the product’s value is higher or lower than the one configured in this field;
- Accumulated value of purchases;
- Promotion restriction by BIN;
- Cluster of customers;
- Shipping type;
- Payment method;
- Maximum number of installments, only on the first purchase.

This is because all these promotions have restrictions, which means that they are not eligible for all buyers. In this way, it is necessary for the consumers to provide some information (e.g. the delivery zip code) for the promotion to be applicable.

This configuration comprises three parts, one in Promotions and two in your store’s templates, in the CMS module. Your CSS must also be configured for this function. See below how to configure it.

### Configuring the promotion

1. In the VTEX Admin, go to *Promotions > Promotions*, or type *Promotions* in the search bar at the top of the page.
2. Search for the promotion you want to configure.
3. In **Featured in the product**, select the **Highlight** option.
4. Click on `Save`.

### Configuring the page template

This configuration consists of editing the page template used for the product page layout and including the tag ``<vtex.cmc:discountHightLight />`` in it.

1. In the VTEX Admin, go to *Storefront > Layout*, or type *Layout* in the search bar at the top of the page.
3. Click on the **CMS** folder.
4. Click on the **Sites and channels** folder.
5. Click on the desired website.
6. Click on **/**.
7. Click on **Product**.
8. Click on **@Product@**.
9. On the right side of the screen, click on **New Layout**.
10. In the side menu, click on the layout with a red check mark, and in the __Template__ field check the name of the template used.

![Layout com check - PT](https://images.ctfassets.net/alneenqid6w5/4GmSglkpk78c4M5hDZEgZX/ab47d3105213471fe370be0b11afcfab/image.png)

![Template](//images.contentful.com/alneenqid6w5/2OzzBkU2YwsgCGeICsgIcg/61aaf502c787cb4f0468ab8cee821072/Template.png)

11. Go back to the side menu and click on the **HTML Templates** folder.
12. Click on the template you found in @Product@.
13. Insert the code <vtex.cmc:discountHightLight/> according to your HTML structure.
14. Click on the **Save Template** button.

### Configuring the shelf template

1. In the VTEX Admin, go to *Storefront > Layout*, or type *Layout* in the search bar at the top of the page.
2. Click on the **CMS** folder.
3. Click on **Shelves Template**.
4. Click on the desired template. 
5. Enter the code $product.DiscountHightLight.
6. Click on the **Save Template** button.

After you’ve configured it, a class will be created in HTML with the promotion name. Thus it is necessary to include, through CSS, a text or an image for the flag.

