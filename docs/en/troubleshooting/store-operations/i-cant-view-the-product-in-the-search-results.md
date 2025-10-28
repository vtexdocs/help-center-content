---
title: "I can't view the product in the search results"
id: 2Ry55Fh6JW8v7oKBiB2pH3
status: PUBLISHED
createdAt: 2024-07-24T16:39:50.379Z
updatedAt: 2025-08-14T22:44:25.091Z
publishedAt: 2025-08-14T22:44:25.091Z
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

When the user searches in a VTEX store using [Intelligent Search](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG), the desired product may not be found, even if the search term is included in the item's information.

Example scenario: When searching the store's website for products containing the term "Pendleton," the search results return 6 products. However, when we access the VTEX Admin (__Storefront > Intelligent Search > Explained Search__) and enter the same term, 9 products are displayed.

![Filter_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/store-operations/i-cant-view-the-product-in-the-search-results_1.png)

![Filter_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/store-operations/i-cant-view-the-product-in-the-search-results_2.png)

This behavior can occur due to the following reasons:

1. Incorrect product registration in the Catalog.

2. The term used is not in one of the product's searchable fields. Learn more about [Search behavior configuration](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/23mytRDsEduqLO0Lo7yufy#standard-search-behavior) and [Search configuration](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5t75L6lYNwix93l41s1Yrx).

3. Internal route redirecting the search result to a brand page.

## Solutions

To enable the searched products to be displayed correctly in the site's search results, consider the following solutions:

- [Verify product registration fields](#verifying-product-registration-fields)
- [Change search filters in Rewriter](#changing-search-filters-in-rewriter)
- [Removing internal search route in Rewriter](#removing-internal-search-route-in-rewriter)

### Verifying product registration fields

A missing product in a search result may come from incomplete fields during the [product registration](/en/tutorial/product-registration-fields--4dYXWIK3zyS8IceKkQseke). Follow the steps below to check the __Brand, Show on site__, and __Show when out of stock__ fields:

1. In the Admin VTEX, go to **Catalog > All Products**.

> ⚠️ Stores using the **Products and SKUS (Beta)** page should check the product registration fields by going to **Catalog > Products and SKUs** in the VTEX Admin. Learn more about [Produtos and SKUS (Beta)](/en/tutorial/products-and-skus-beta--2ig7TmROlirWirZjFWZ3By).

2. Find the product you want and click **Edit product**.

3. In the **Brand** field, confirm if the information is correct. If necessary, add the brand corresponding to the product. You can only add brands that have already been [created in the store](/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/7lEGOSpAlQJCs5eUc5XFmR).

4. Confirm if the **Show on site** option is checked.

5. Confirm if the **Show when out of stock** option is checked.

6. Click _Save_.

7. Go to the store's website, search for the desired term, and ensure that the products displayed in the search results are the same as the ones available on the **Explained Search** page under Intelligent Search (**Storefront > Intelligent Search > Explained Search**).

> ⚠️ If the search term is included in the product's name or description, but the product belongs to a different brand than the term specified in the search, proceed with the other steps to solve the problem.

### Changing search filters in Rewriter

Another reason a product may not be displayed in search results is the [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) app's default behavior when displaying products.

If a term is listed in Rewriter as a brand, [Intelligent Search](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4uSFqyJVCMVMIvVrtz3lxZ) will understand that it should only be displayed when it is included in a brand name.

To remove the restriction on searching by *brand* and allow products to be found also by terms in the name or description (*full text*), follow the steps below:

1. In the VTEX Admin, go to **Storefront > Intelligent Search > Explained Search** enter the desired term, and see how many products are returned in the search.

2. Configure the [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) app. If this app is not installed in your store, go to the [App Store](/en/tracks/extensions-hub--AW7klkYMh557y5IUOgzco/2LDRvGujYsumxi7IlE7CEJ) and install it.

3. Access the [GraphQL IDE](https://developers.vtex.com/docs/guides/graphql-ide#graphql-basics) in **Store Settings > Storefront > GraphQL IDE**.

4. Under **Choose an app**, click the Rewriter app option (**vtex.rewriter@{app-version-number}**).

![Graphql_ide_en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/store-operations/i-cant-view-the-product-in-the-search-results_3.png)

5. In the query input field (below **GraphiQL**), enter the details of the _saveInternal_ mutation function.

    ```graphql
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

6. In **Query Variables**, enter the route details. You must replace the _Pendleton_ value with the desired term and the _id_ field value with the product ID.

    ```graphql
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

> ⚠️ The value *ft* (full text) instead of *b* (brand) in the *map* parameter indicates that products with the term *Pendleton* in the name or description will also be displayed in the search.

7. Click the GraphiQL IDE arrow (next to **GraphiQL**) to update the search filter. The display of the following message in the GraphiQL IDE results field will confirm the new default search filter for the term.

    ```graphql
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

8. Go to the store's website, search for the desired term, and ensure that the products displayed in the search results are the same as the ones available on the **Explained Search** page under Intelligent Search (**Storefront > Intelligent Search > Explained Search**).

> ⚠️ If the search term is associated with a brand that no longer exists on your site, you will need to remove the internal search route within the Rewriter app, as described in the solution below</a>.

### Removing internal search route in Rewriter

[Internal search routes](https://developers.vtex.com/docs/guides/vtex-io-documentation-routes#routes-in-rewriter) in the [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) app can prevent a product from being displayed in the search if it is associated with a brand that is no longer available in the store.

To display products using the search terms only in the name or description, you need to delete the search route.

To remove an internal search route for the term, follow the steps below:

1. In the VTEX Admin, go to [GraphQL IDE](https://developers.vtex.com/docs/guides/graphql-ide#graphql-basics) in **Store Settings > Storefront > GraphQL IDE**.

2. Under **Choose an app**, click the Rewriter app option (**vtex.rewriter@{app-version-number}**).

3. In the query input field (below **GraphiQL**), enter the data for the _internal get_ function, replacingo _pendleton_ with the desired term. 

    ```graphql
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

4. Click the GraphiQL IDE arrow (next to **GraphiQL**) and check the results field to see if the internal route is described as a _brand_.

    ```graphql
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

5. In the query input field (below **GraphiQL**), enter the data for the _mutation_ function, replacing _pendleton_ with the desired term. 

    ```graphql
    mutation {
      internal {
        delete(path: "/Pendleton"){
          type
        }
      }
    }
    ```

6. Click the GraphiQL IDE arrow (next to **GraphiQL**) to remove the internal filter route by _brand_ and confirm that the information below appears in the GraphiQL IDE results field.

    ```graphql
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

7. Repeat steps 3 and 4 to confirm that the internal redirection route from term to brand has been deleted. This can be indicated by the _"get": null_ result in the GraphiQL IDE results field.

    ```graphql
    {
      "data": {
        "internal": {
          "get": null
        }
      }
    }
    ```

8. Go to the store's website, search for the desired term, and ensure that the products displayed in the search results are the same as the ones available on the **Explained Search** page under Intelligent Search (**Storefront > Intelligent Search > Explained Search**).
