---
title: 'Customizing templates'
id: 6GyWKDbduXzdsZbH4jqhli
status: ARCHIVED
createdAt: 2019-02-19T19:57:29.896Z
updatedAt: 2020-03-13T21:24:44.801Z
publishedAt: 
firstPublishedAt: 2019-02-19T19:57:33.579Z
contentType: trackArticle
productTeam: VTEX IO
slug: customizing-templates
locale: en
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugEN: build-a-store-using-vtex-io
---

No two ecommerce stores are the same, but they all share lots of common building blocks such as shelves, carousels, menus, search bars, etc. We can implement an entire store by declaratively composing these blocks in order to create arbitrarily complex templates.

## Blocks and templates

In fact, everything you see in a VTEX IO page is called a __block__. Blocks represent *instances of configured components* and may __contain other blocks__. They are the most basic unit representing something you can render in a page.

Apps may *declare* blocks as simple as a button or as complex as a Home page template. Using the new VTEX CMS, users may further configure and combine new blocks in order to create new templates or edit their site's layout without touching code, while seeing changes in real-time.

Blocks are reusable, so the same block may be used on multiple templates. For example, the `vtex.shelf` app exports the `Shelf` react component, which can be configured to show different amount of products, hide or show navigation arrows, etc. You may want to configure all your shelves to always display 4 items and show arrows on the sides. This configuration is a __block__. Now you can mount a 4-item shelf in any template.

## Declaring templates

To implement a store, we need to declare a __template__ for each of the pages the user may visit, such as home page, product page, etc. 

__Templates__ are top-level blocks that are rendered when an user navigates to a determined route. The vtex.store app declares all of the native routes like home page, product page, category, search, my account, etc, and the __interfaces__ for blocks that should render on each page. For now, you can think of interfaces as the blueprints, and blocks as the actual configured components that appear on the store.

In a VTEX IO store, every template __extend the top-level__ `store` __interface__, declared in the `vtex.store` app. 

The default `store-theme` implements all the basic templates for us. Let's take a look at the Home page template:

```json
//blocks.json
{
 "store.home": {
   "blocks": [
     "carousel#home",
     "shelf#home"
   ]
 }, (...)
}
```

Because the `vtex.store` app declares a route that mounts the `store.home` block to the `/` route, this is what is rendered when the user visits the root of the domain after installing the `store-theme` app.

Further down this file, we can find the declaration for the `shelf#home` block:

```json
// blocks.json
{
 "shelf#home": {
   "props": {
     "orderBy": "OrderByTopSaleDESC",
     "productList": {
       "maxItems": 10,
       "itemsPerPage": 4,
       "scroll": "BY_PAGE",
       "arrows": true,
       "titleText": "New collection",
       "summary": {
         "isOneClickBuy": false,
         "showBadge": true,
         "badgeText": "OFF",
         "buyButtonText": "Comprar",
         "displayBuyButton": "displayButtonHover",
         "showCollections": false,
         "showListPrice": true,
         "showLabels": false,
         "showInstallments": true,
         "showSavings": true,
         "name": {
           "showBrandName": false,
           "showSku": false,
           "showProductReference": false
         }
       }
     }
   }
 }
}
```

## Aside: Important upcoming changes to content in blocks

Currently, blocks deal with fetching and displaying content. Notice the `orderBy` property above. It informs this block on how to query the Search API for products. This imposes a limitation: if you want to vary the content, you need to declare a new block and change the corresponding props. 

__This behaviour is going to change__ with an upcoming feature that will let you __mount different content__ on two different instances of the same block. This change will be backwards compatible and we will offer an automatic migration tool to port blocks. Now, let's get back to editing our store.

## Declaring a new shelf on our home page

To add a component to this page, we simply need to declare a new shelf block and insert it into the `store.home` template. For example, let's create a `shelf#deals` block and add it to our template:

```json
// blocks.json
{
 "store.home": {
   "blocks": [
     "carousel#home",
     "shelf#home",
     "shelf#deals"
   ]
 },
 "shelf#deals": {
   "props": {
     "orderBy": "OrderByBestDiscountDESC",
     "productList": {
"titleText": "Best Discounts",
	(...)
     }
   }
 }
}
```

If you save this in `store/blocks.json` and `vtex link` your store, you should see a new shelf rendered when visiting the home.

![shelf](https://images.ctfassets.net/alneenqid6w5/6Hw3fRA4E8xC0Q4bNdO6gV/8b6742fd0c57a341db0cc0baea4cfb06/shelf.svg)

You can customize the blocks declared by the `store-theme` app freely, and also declare new ones yourself. For now, you can find the documentation for each component on their [GitHub repositories](https://github.com/vtex-apps?q=store-components). There, you can find the available properties for each component.
