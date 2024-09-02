---
title: "I can't view the product in the search results"
id: 2Ry55Fh6JW8v7oKBiB2pH3
status: PUBLISHED
createdAt: 2024-07-24T16:39:50.379Z
updatedAt: 2024-08-08T14:57:59.572Z
publishedAt: 2024-08-08T14:57:59.572Z
firstPublishedAt: 2024-07-24T18:55:15.925Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slug: i-cant-view-the-product-in-the-search-results
locale: en
legacySlug: i-cant-view-the-product-in-the-search-results
subcategory: 2Q0IQjRcOqSgJTh6wRHVMB
---

__Tags/Keywords__: *product, search, catalog, intelligent search, apps, rewriter, graphql, vtex io, redirect.*

When the user searches in a VTEX store using [Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG), the desired product may not be found, even if the search term is included in the item's information.

Example scenario: When searching the store's website for products containing the term "Pendleton," the search results return 6 products. However, when we access the VTEX Admin (__Storefront > Intelligent Search > Explained Search__) and enter the same term, 9 products are displayed.

![Filter_1](https://images.ctfassets.net/alneenqid6w5/1bMAcWQEyVXBsUBZQp8H0K/568f6f3868b13d54ed4335b4574ac434/Filter_1.png)

![Filter_2](https://images.ctfassets.net/alneenqid6w5/5TL7uaMv37zf7AGwohmAKu/06017d321b1996515da01c11ea53403c/Filter_2.png)

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

<blockquote><ui>1. In the Admin VTEX, go to <b>Catalog > All Products</b>.</ui>

<blockquote><ui><div class ="alert alert-warning">
  Stores using the <b>Produtos and SKUS (Beta)</b> page should check the product registration fields by going to <b>Catalog > Products and SKUs</b> in the VTEX Admin. Learn more about <a href="https://help.vtex.com/en/tutorial/products-and-skus-beta--2ig7TmROlirWirZjFWZ3By">Produtos and SKUS (Beta)</a>.
</div></blockquote>

<blockquote><ui>2. Find the product you want and click <b>Edit product</b>.</ui>

<blockquote><ui>3. In the <b>Brand</b> field, confirm if the information is correct. If necessary, add the brand corresponding to the product. You can only add brands that have already been <a href="https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/7lEGOSpAlQJCs5eUc5XFmR">created in the store</a>.</ui>

<blockquote><ui>4. Confirm if the <b>Show on site</b> option is checked.</ui>

<blockquote><ui>5. Confirm if the <b>Show when out of stock</b> option is checked.</ui>

<blockquote><ui>6. Click <i>Save</i>.</ui>

<blockquote><ui>7. Go to the store's website, search for the desired term, and ensure that the products displayed in the search results are the same as the ones available on the <b>Explained Search</b> page under Intelligent Search (<b>Storefront > Intelligent Search > Explained Search</b>).</ui>

<blockquote><ui><div class ="alert alert-warning">
  If the search term is included in the product's name or description, but the product belongs to a different brand than the term specified in the search, proceed with the other steps to solve the problem.
</div></blockquote>

### Changing search filters in Rewriter

Another reason a product may not be displayed in search results is the [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) app's default behavior when displaying products.

If a term is listed in Rewriter as a brand, [Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4uSFqyJVCMVMIvVrtz3lxZ) will understand that it should only be displayed when it is included in a brand name.

To remove the restriction on searching by *brand* and allow products to be found also by terms in the name or description (*full text*), follow the steps below:

<blockquote><ui>1. In the VTEX Admin, go to <b>Storefront > Intelligent Search > Explained Search</b> enter the desired term, and see how many products are returned in the search.</ui>

<blockquote><ui>2. Configure the <a href="https://developers.vtex.com/docs/apps/vtex.rewriter">Rewriter</a> app. If this app is not installed in your store, go to the <a href="https://help.vtex.com/en/tracks/extensions-hub--AW7klkYMh557y5IUOgzco/2LDRvGujYsumxi7IlE7CEJ">App Store</a> and install it.</ui>

<blockquote><ui>3. Access the <a href="https://developers.vtex.com/docs/guides/graphql-ide#graphql-basics">GraphQL IDE</a> in <b>Store Settings > Storefront > GraphQL IDE</b>.</ui>

<blockquote><ui>4. Under <b>Choose an app</b>, click the Rewriter app option (<b>vtex.rewriter@{app-version-number}</b>).</ui>

![Graphql_ide_en](https://images.ctfassets.net/alneenqid6w5/1IBr0HvF5xxf2nfxIwW4YC/6e0774e72b9a6e4a6b85a4c47986fe84/Graphql_ide_en.png)

<blockquote><ui>5. In the query input field (below <b>GraphiQL</b>), enter the details of the <i>saveInternal</i> mutation function.<ui>

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

<blockquote><ui>6. In <b>Query Variables</b>, enter the route details. You must replace the <i>Pendleton</i> value with the desired term and the <i>id</i> field value with the product ID.<ui>

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

<blockquote><ui><div class ="alert alert-warning">
  The value <i>ft</i> (full text) instead of <i>b</i> (brand) in the <i>map</i> parameter indicates that products with the term <i>Pendleton</i> in the name or description will also be displayed in the search.
</div></blockquote>

<blockquote><ui>7. Click the GraphiQL IDE arrow (next to <b>GraphiQL</b>) to update the search filter. The display of the following message in the GraphiQL IDE results field will confirm the new default search filter for the term.</ui>

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

<blockquote><ui>8. Go to the store's website, search for the desired term, and ensure that the products displayed in the search results are the same as the ones available on the <b>Explained Search</b> page under Intelligent Search (<b>Storefront > Intelligent Search > Explained Search</b>).</ui>

<blockquote><ui><div class ="alert alert-warning">
  If the search term is associated with a brand that no longer exists on your site, you will need to remove the internal search route within the Rewriter app, as described in the solution below</a>.
</div></blockquote>

### Removing internal search route in Rewriter

[Internal search routes](https://developers.vtex.com/docs/guides/vtex-io-documentation-routes#routes-in-rewriter) in the [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) app can prevent a product from being displayed in the search if it is associated with a brand that is no longer available in the store.

To display products using the search terms only in the name or description, you need to delete the search route.

To remove an internal search route for the term, follow the steps below:

<blockquote><ui>1. In the VTEX Admin, go to <a href="https://developers.vtex.com/docs/guides/graphql-ide#graphql-basics">GraphQL IDE</a> in <b>Store Settings > Storefront > GraphQL IDE</b>.</ui>

<blockquote><ui>2. Under <b>Choose an app</b>, click the Rewriter app option (<b>vtex.rewriter@{app-version-number}</b>).</ui>

<blockquote><ui>3. In the query input field (below <b>GraphiQL</b>), enter the data for the <i>internal get</i> function, replacingo <i>pendleton</i> with the desired term.</ui> 

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

<blockquote><ui>4. Click the GraphiQL IDE arrow (next to <b>GraphiQL</b>) and check the results field to see if the internal route is described as a <i>brand</i>.</ui>

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

<blockquote><ui>5. In the query input field (below <b>GraphiQL</b>), enter the data for the <i>mutation</i> function, replacing <i>pendleton</i> with the desired term.</ui> 

```
mutation {
  internal {
    delete(path: "/Pendleton"){
      type
    }
  }
}
```

<blockquote><ui>6. Click the GraphiQL IDE arrow (next to <b>GraphiQL</b>) to remove the internal filter route by <i>brand</i> and confirm that the information below appears in the GraphiQL IDE results field.</ui>

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

<blockquote><ui>7. Repeat steps 3 and 4 to confirm that the internal redirection route from term to brand has been deleted. This can be indicated by the <i>"get": null</i> result in the GraphiQL IDE results field.</ui>

```
{
  "data": {
    "internal": {
      "get": null
    }
  }
}
```

<blockquote><ui>8. Go to the store's website, search for the desired term, and ensure that the products displayed in the search results are the same as the ones available on the <b>Explained Search</b> page under Intelligent Search (<b>Storefront > Intelligent Search > Explained Search</b>).</ui>
