---
title: "I can't view the product in the search results"
id: 2Ry55Fh6JW8v7oKBiB2pH3
status: PUBLISHED
createdAt: 2024-07-24T16:39:50.379Z
updatedAt: 2025-03-31T19:12:10.972Z
publishedAt: 2025-03-31T19:12:10.972Z
firstPublishedAt: 2024-07-24T18:55:15.925Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: i-cant-view-the-product-in-the-search-results
legacySlug: i-cant-view-the-product-in-the-search-results
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Product
  - Search
  - Catalog
  - Intelligent search
  - Rewriter
---

When the user searches in a VTEX store using [Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG), the desired product may not be found, even if the search term is included in the item's information.

Example scenario: When searching the store's website for products containing the term "Pendleton," the search results return 6 products. However, when we access the VTEX Admin (__Storefront > Intelligent Search > Explained Search__) and enter the same term, 9 products are displayed.

![Filter_1](//images.ctfassets.net/alneenqid6w5/1bMAcWQEyVXBsUBZQp8H0K/568f6f3868b13d54ed4335b4574ac434/Filter_1.png)

![Filter_2](//images.ctfassets.net/alneenqid6w5/5TL7uaMv37zf7AGwohmAKu/06017d321b1996515da01c11ea53403c/Filter_2.png)

This behavior can occur due to the following reasons:

1. Incorrect product registration in the Catalog.

2. The term used is not in one of the product's searchable fields. Learn more about [Search behavior configuration](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/23mytRDsEduqLO0Lo7yufy#standard-search-behavior) and [Search configuration](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5t75L6lYNwix93l41s1Yrx).

3. Internal route redirecting the search result to a brand page.

## Solutions

To enable the searched products to be displayed correctly in the site's search results, consider the following solutions:

- [Verify product registration fields](#verifying-product-registration-fields)
- [Change search filters in Rewriter](#changing-search-filters-in-rewriter)
- [Removing internal search route in Rewriter](#removing-internal-search-route-in-rewriter)

### Verifying product registration fields

A missing product in a search result may come from incomplete fields during the [product registration](https://help.vtex.com/en/tutorial/product-registration-fields--4dYXWIK3zyS8IceKkQseke). Follow the steps below to check the __Brand, Show on site__, and __Show when out of stock__ fields:

<blockquote><ui>1. In the Admin VTEX, go to **Catalog > All Products**.</ui>

<blockquote><ui>> ⚠️ Stores using the **Produtos and SKUS (Beta)** page should check the product registration fields by going to **Catalog > Products and SKUs** in the VTEX Admin. Learn more about [Produtos and SKUS (Beta)](https://help.vtex.com/en/tutorial/products-and-skus-beta--2ig7TmROlirWirZjFWZ3By).</blockquote>

<blockquote><ui>2. Find the product you want and click **Edit product**.</ui>

<blockquote><ui>3. In the **Brand** field, confirm if the information is correct. If necessary, add the brand corresponding to the product. You can only add brands that have already been [created in the store](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/7lEGOSpAlQJCs5eUc5XFmR).</ui>

<blockquote><ui>4. Confirm if the **Show on site** option is checked.</ui>

<blockquote><ui>5. Confirm if the **Show when out of stock** option is checked.</ui>

<blockquote><ui>6. Click *Save*.</ui>

<blockquote><ui>7. Go to the store's website, search for the desired term, and ensure that the products displayed in the search results are the same as the ones available on the **Explained Search** page under Intelligent Search (**Storefront > Intelligent Search > Explained Search**).</ui>

<blockquote><ui>> ⚠️ If the search term is included in the product's name or description, but the product belongs to a different brand than the term specified in the search, proceed with the other steps to solve the problem.</blockquote>

### Changing search filters in Rewriter

Another reason a product may not be displayed in search results is the [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) app's default behavior when displaying products.

If a term is listed in Rewriter as a brand, [Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4uSFqyJVCMVMIvVrtz3lxZ) will understand that it should only be displayed when it is included in a brand name.

To remove the restriction on searching by *brand* and allow products to be found also by terms in the name or description (*full text*), follow the steps below:

<blockquote><ui>1. In the VTEX Admin, go to **Storefront > Intelligent Search > Explained Search** enter the desired term, and see how many products are returned in the search.</ui>

<blockquote><ui>2. Configure the [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) app. If this app is not installed in your store, go to the [App Store](https://help.vtex.com/en/tracks/extensions-hub--AW7klkYMh557y5IUOgzco/2LDRvGujYsumxi7IlE7CEJ) and install it.</ui>

<blockquote><ui>3. Access the [GraphQL IDE](https://developers.vtex.com/docs/guides/graphql-ide#graphql-basics) in **Store Settings > Storefront > GraphQL IDE**.</ui>

<blockquote><ui>4. Under **Choose an app**, click the Rewriter app option (**vtex.rewriter@{app-version-number}**).</ui>

![Graphql_ide_en](//images.ctfassets.net/alneenqid6w5/1IBr0HvF5xxf2nfxIwW4YC/6e0774e72b9a6e4a6b85a4c47986fe84/Graphql_ide_en.png)

<blockquote><ui>5. In the query input field (below **GraphiQL**), enter the details of the *saveInternal* mutation function.<ui>

```
mutation saverInternal($route: InternalInput!) {
internal {
 save(route: $route) {
   from
   declarer
   type
   id
   query
   endDate
   binding
   resolveAs
   origin
   disableSitemapEntry
 }
}
}
```

<blockquote><ui>6. In **Query Variables**, enter the route details. You must replace the *Pendleton* value with the desired term and the *id* field value with the product ID.<ui>

```
{
"route": {
 "from": "/Pendleton",
 "declarer": "vtex.store@2.x",
 "type": "fullText",
 "id": "2000307",
 "query": {
     "map": "ft"
 },
   "origin": "user-canonical"
 }
}
```

<blockquote><ui>> ⚠️ The value *ft* (full text) instead of *b* (brand) in the *map* parameter indicates that products with the term *Pendleton* in the name or description will also be displayed in the search.</blockquote>

<blockquote><ui>7. Click the GraphiQL IDE arrow (next to **GraphiQL**) to update the search filter. The display of the following message in the GraphiQL IDE results field will confirm the new default search filter for the term.</ui>

```
{
  "data": {
    "internal": {
      "save": {
        "from": "/Pendleton",
        "declarer": "vtex.store@2.x",
        "type": "fullText",
        "id": "2000307",
        "query": {
          "map": "ft"
        },
        "endDate": null,
        "binding": "0be568e5-52f5-44f0-9308-3ea701a9f847",
        "resolveAs": null,
        "origin": "user-canonical",
        "disableSitemapEntry": null
      }
    }
  }
}
```

<blockquote><ui>8. Go to the store's website, search for the desired term, and ensure that the products displayed in the search results are the same as the ones available on the **Explained Search** page under Intelligent Search (**Storefront > Intelligent Search > Explained Search**).</ui>

<blockquote><ui>> ⚠️ If the search term is associated with a brand that no longer exists on your site, you will need to remove the internal search route within the Rewriter app, as described in the solution below</a>.</blockquote>

### Removing internal search route in Rewriter

[Internal search routes](https://developers.vtex.com/docs/guides/vtex-io-documentation-routes#routes-in-rewriter) in the [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) app can prevent a product from being displayed in the search if it is associated with a brand that is no longer available in the store.

To display products using the search terms only in the name or description, you need to delete the search route.

To remove an internal search route for the term, follow the steps below:

<blockquote><ui>1. In the VTEX Admin, go to [GraphQL IDE](https://developers.vtex.com/docs/guides/graphql-ide#graphql-basics) in **Store Settings > Storefront > GraphQL IDE**.</ui>

<blockquote><ui>2. Under **Choose an app**, click the Rewriter app option (**vtex.rewriter@{app-version-number}**).</ui>

<blockquote><ui>3. In the query input field (below **GraphiQL**), enter the data for the *internal get* function, replacingo *pendleton* with the desired term.</ui> 

```
{
  internal {
    get(path: "/Pendleton") {
      from
      resolveAs
      type
    }
  }
}
```

<blockquote><ui>4. Click the GraphiQL IDE arrow (next to **GraphiQL**) and check the results field to see if the internal route is described as a *brand*.</ui>

```
{
  "data": {
    "internal": {
      "get": {
        "from": "/Pendleton",
        "resolveAs": "/Pendleton",
        "type": "brand"
      }
    }
  }
}
```

<blockquote><ui>5. In the query input field (below **GraphiQL**), enter the data for the *mutation* function, replacing *pendleton* with the desired term.</ui> 

```
mutation {
  internal {
    delete(path: "/Pendleton"){
      type
    }
  }
}
```

<blockquote><ui>6. Click the GraphiQL IDE arrow (next to **GraphiQL**) to remove the internal filter route by *brand* and confirm that the information below appears in the GraphiQL IDE results field.</ui>

```
{
  "data": {
    "internal": {
      "delete": {
        "type": "brand"
      }
    }
  }
}
```

<blockquote><ui>7. Repeat steps 3 and 4 to confirm that the internal redirection route from term to brand has been deleted. This can be indicated by the *"get": null* result in the GraphiQL IDE results field.</ui>

```
{
  "data": {
    "internal": {
      "get": null
    }
  }
}
```

<blockquote><ui>8. Go to the store's website, search for the desired term, and ensure that the products displayed in the search results are the same as the ones available on the **Explained Search** page under Intelligent Search (**Storefront > Intelligent Search > Explained Search**).</ui>
