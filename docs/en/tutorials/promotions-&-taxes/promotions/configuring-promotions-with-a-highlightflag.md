---
title: 'Configuring promotions with highlights / flags'
id: tutorials_2295
status: PUBLISHED
createdAt: 2017-04-27T21:55:19.949Z
updatedAt: 2024-09-17T16:24:52.963Z
publishedAt: 2024-09-17T16:24:52.963Z
firstPublishedAt: 2017-04-27T23:03:51.539Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: configuring-promotions-with-a-highlightflag
legacySlug: configuring-promotions-with-a-highlightflag
locale: en
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

The highlight of a promotion is a visual notification that can be placed on shelves and product pages, informing customers that the item is eligible for a promotion. A common example is the indication of free shipping below the product image.

![ExemploPromocaoDestaque2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/configuring-promotions-with-a-highlightflag_1.png)

In this guide, you will find the following sections:

- [Promotions eligible for highlight](#promotions-eligible-for-highlight)
- [Restrictions](#restrictions)
- [Configuring a promotion](#configuring-a-promotion)
- [Promotion highlight in Store Framework](#promotion-highlight-in-store-framework)
- [Promotion highlight in Legacy CMS Portal](#promotion-highlight-in-legacy-cms-portal)
    - [Page template](#page-template)
    - [Shelves template](#Shelves-template)

## Promotions eligible for highlight

The promotion highlight can be applied to different types of promotions and discounts. This highlight will be displayed on shelves and product pages, alerting customers that the item is part of a special promotion.

The following types of discounts are eligible for a highlight application:

- [Percentage discount](https://help.vtex.com/en/tutorial/configurar-promocao-de-desconto-percentual-para-um-sku-especifico--3rbh8ELSLu2IGCeQ6SImU0): offers a percentage reduction on the product’s price.
- [Percentage shipping discount](https://help.vtex.com/en/tutorial/configurar-promocao-de-desconto-percentual-para-um-sku-especifico--3rbh8ELSLu2IGCeQ6SImU0): applies a discount to a portion of the shipping cost, allowing customers to pay less for shipping and encouraging the purchase decision.
- [Maximum shipping](https://help.vtex.com/en/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW): sets a maximum shipping cost, regardless of factors such as distance or order weight.
- [Free shipping](https://help.vtex.com/en/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW): completely eliminates the shipping cost.
- **Free gift**: offers an extra product at no cost to the customer when purchasing a certain item or reaching a minimum purchase value.

To learn more, see the [Promotions](https://help.vtex.com/en/subcategory/promocoes--1yTYB5p4b6iwMsUg8uieyq) section.

## Restrictions

You cannot configure the highlight in promotions with restrictions in the cart, such as:

- Postal code range
- Accumulated purchase value
- BIN
- Customer clusters
- Shipping method
- Payment method
- Max installments, first purchase only

These promotions are not eligible for all customers. This means that customers need to provide additional information (e.g., postal code) for the promotion to be applicable. Therefore, highlights cannot be configured in these cases.

## Configuring a promotion

Follow the instructions below to configure promotions in your store.

1.  In the VTEX Admin, go to **Promotions > Promotions**, or type **Promotions** in the search bar at the top of the page.
2.  Search for the promotion you want to configure.
3.  In the **Promotion is highlighted** option, select **Yes**.
4.  Configure the promotion with the desired specifications.
5.  Click the `Save` button.
6. Follow the instructions corresponding to the frontend technology used by your store:

- [Store Framework](#promotion-highlight-in-store-framework)
- [Legacy CMS Portal](#promotion-highlight-in-legacy-cms-portal)

## Promotion highlight in Store Framework

For stores developed using Store Framework, after configuring the promotion highlight, follow the instructions in the documentation for the [Product Highlights](https://developers.vtex.com/docs/apps/vtex.product-highlights) component.

## Promotion highlight in Legacy CMS Portal

For Legacy CMS Portal stores, after configuring the promotion highlight, configure the [page template](#configure-the-page-template) and [shelves template](#configure-the-shelves-template) in the CMS module. In addition, your CSS must be configured for this function.

### Page template

This configuration involves editing the page template used for the product page layout and including the `<vtex.cmc:discountHighLight/>` tag.

1. In the VTEX Admin, go to **Storefront > Layout**, or type **Layout** in the search bar at the top of the page.
2. Click **CMS > Sites and channels**.
3. Click the name of the **website** you want.
4. Click **/ > Product > @Product@**.
5. Click the layout with a red checkmark.

    ![template-pagina](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/configuring-promotions-with-a-highlightflag_2.gif)

6. In the __Template__ field, check the name of the template used:

    ![template-produto](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/configuring-promotions-with-a-highlightflag_3.png)

7.  In the side menu, click the **HTML Templates** folder.
8.  Click the template found at **@Product@**.

    ![save-template](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/configuring-promotions-with-a-highlightflag_4.gif)

9.  Enter the code `<vtex.cmc:discountHightLight/>` based on your HTML structure.
10.  Click **Save Template**.

### Shelves template

1.  In the VTEX Admin, go to **Storefront > Layout**, or type **Layout** in the search bar at the top of the page.
2.  Click **CMS > Shelves Templtes**.

    ![shelves-templates](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/configuring-promotions-with-a-highlightflag_5.png)

3.  Click the desired template.
4.  Enter the `$product.DiscountHightLight` code.
5.  Click **Save Template**.

After making the settings in the VTEX Admin and adding the appropriate tags to the templates, a CSS class with the name of each promotion that meets the requirements will be automatically generated in the HTML. For example, if the promotion is called "BlackFriday," a class called `.BlackFriday` will be generated in the HTML of the product or shelf.

Once the class is generated, you will need to define your CSS styles, customizing a text or image for the flag directly in the templates.
