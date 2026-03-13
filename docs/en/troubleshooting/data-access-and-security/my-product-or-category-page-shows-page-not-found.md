---
title: 'My product or category page shows Page Not Found'
id: EDU-12986
status: DRAFT
createdAt: 2026-03-13T00:00:00.000Z
updatedAt: 2026-03-13T00:00:00.000Z
publishedAt:
firstPublishedAt:
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: my-product-or-category-page-shows-page-not-found
locale: en
subcategoryId:
tags:
  - Catalog
  - Storefront
  - Intelligent Search
---

Keywords: Loading error | Sync issue

My product, category, or subcategory page returns `404` or behaves as if the page doesn't exist (**PAGE NOT FOUND** message). This can happen after catalog updates, such as changes to product content, images, slugs, category hierarchy, or workspace publication.

In some cases, the issue looks like a rendering or product visibility problem, but the storefront symptom is the same: the route can't be resolved correctly. Depending on the root cause, the fix may require action from you, VTEX, or both.

The most common causes for this behavior are:

- [The URL or slug changed](#check-the-url-and-slug)
- [The product or category isn't available in the storefront](#confirm-storefront-availability)
- [The product or category wasn't indexed correctly](#reindex-the-affected-item)
- [The route wasn't updated in the rewriter](#refresh-route-generation)
- [The category hierarchy or breadcrumb path is incorrect](#review-the-category-hierarchy-and-breadcrumb-path)
- [Workspace changes weren't published](#publish-workspace-changes)

## Solutions

### Check the URL and slug

1. In the VTEX Admin, go to **Catalog**, or type **Catalog** in the search bar at the top of the page.
2. Click **Products and SKUs** or **Categories** to access the affected product or category.
3. Confirm whether the current [product](https://help.vtex.com/docs/tutorials/adding-or-editing-products#seo) or [category](https://help.vtex.com/docs/tutorials/registering-a-category#filling-in-the-category-registration-fields) URL slugs are correct.
4. Check whether the storefront URL matches the current slug exactly.
5. If the slug changed recently, test the new URL.
6. If internal or external links still point to the old URL, create a redirect from the old path to the current one following the instructions in [Managing URL redirects](https://help.vtex.com/en/docs/tutorials/managing-url-redirects).

After completing these checks, open the current URL again and confirm that the page no longer returns `404`.

### Confirm storefront availability

1. In the VTEX Admin, go to **Catalog**, or type **Catalog** in the search bar at the top of the page.
2. Click **Products and SKUs** or **Categories** to access the affected product or category.
3. Confirm that the product or category is active, and is configured to be shown in the store. For products, confirm that at least one SKU is active.
4. Check whether the product has valid price and stock for the [trade policy](https://help.vtex.com/en/docs/tutorials/how-trade-policies-work) used by the store.
5. If your operation shows unavailable products, confirm that the corresponding display setting is enabled according to the [availability](https://help.vtex.com/en/docs/tutorials/availability) criteria.
6. Confirm that the item is assigned to the expected brand, category, and commercial structure.

After validating these settings, test the storefront again to confirm that the product or category is available and no longer behaves like a missing page.

### Reindex the affected item

1. In the VTEX Admin, trigger [reindexing](https://help.vtex.com/en/faq/why-is-the-product-not-visible-on-the-website#indexed-info) for the affected product or category.

> ⚠️ If multiple related pages are failing, you may need to perform a full reindex of the catalog.

2. Wait for the indexing process to finish and monitor the status in [Indexing History](https://help.vtex.com/en/docs/tutorials/indexing-history) or check the [catalog reindex log](https://help.vtex.com/en/docs/tutorials/view-reindex-log) if needed.
3. Test the affected URL again in an anonymous browser window.

Once the indexing process is complete, test the affected URL again and confirm that the page resolves normally.

### Refresh route generation

1. Check whether the expected route exists in the [rewriter configuration](https://help.vtex.com/pt/troubleshooting/nao-consigo-visualizar-o-produto-na-busca-do-site#modificacao-do-filtro-da-busca-no-rewriter).
2. Confirm that the route points to the correct product, category, or subcategory path.
3. If the route is stale or inconsistent, refresh route generation according to your internal procedure.
4. If your team uses route versioning, increment the routes version and wait for the storefront to rebuild the routes.
5. Test the affected URL again.

After the route is refreshed, test the URL again to confirm that the storefront rebuilt the path correctly.

### Review the category hierarchy and breadcrumb path

1. In the VTEX Admin, open the [category tree](https://help.vtex.com/en/docs/tutorials/deactivating-and-reorganizing-categories#changing-the-category-tree).
2. Confirm that the affected subcategory is attached to the expected parent category.
3. Check whether the breadcrumb path in the storefront matches that hierarchy.
4. Compare the failing subcategory with another subcategory under the same parent that works correctly.
5. If the breadcrumb points to an outdated or malformed path, correct the category structure and reindex the affected categories.

After correcting the category structure, test the breadcrumb and subcategory links again and confirm that they open valid pages.

### Publish workspace changes

1. Confirm where the change was applied in the [workspace](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace).
2. Validate the corrected route in the workspace.
3. Publish or promote the workspace changes according to your release process.
4. Test the page in the live store and confirm that production is using the updated route.

If the page still returns `404` after following all the steps above, contact VTEX Support using the instructions in [Opening tickets to VTEX Support](https://help.vtex.com/en/docs/tutorials/opening-tickets-to-vtex-support).
