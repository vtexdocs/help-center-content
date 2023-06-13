---
title: How to create landing pages with customized URLs
id: q0p2UU6sBaYcEMsq24YSi
status: PUBLISHED
createdAt: 2018-10-02T21:22:13.046Z
updatedAt: 2023-03-29T15:54:22.828Z
publishedAt: 2023-03-29T15:54:22.828Z
firstPublishedAt: 2018-10-02T21:24:34.630Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: how-to-create-landing-pages-with-customized-urls
legacySlug: how-does-the-search-context-work
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div class = "alert alert-warning">
  <strong>Warning</strong>: VTEX has two search options - VTEX search and VTEX Intelligent Search. This article refers to the VTEX search. To learn more about the VTEX Intelligent Search application, see <a href = "https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">this track</a>.
</div>

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

The VTEX search engine is extremely customizable, and it's possible to adjust the most complex needs to its controls. 

It is possible to apply filters by department, category, brand, collection, SKU specification, etc.

As the application of these filters takes place by definition on the URL, when a complex search is required, this URL often becomes unfriendly, having less relevance for search engine crawlers, like the one from Google.

This article has been developed to present a new feature that is extremely important for the use of complex searches on landing pages: the __Search Context__.

When the intended search uses many filters (category, brand and product specification, for example), we always recommend building a Landing Page.

### Example

Intended search: `/busca?fq=C:111&fq=B:222&fq=spec_fct_1:333`

This search will return all products belonging to category **111**, which are also of brand **222** and where the id field **1** is **333**. The result displayed to the customer will be correct; however, the way crawlers will look at this URL will not be the best one for your store.

That is when the Landing Page and the Search Context come into play.

On your store CMS (`{AccountName}.myvtex.com/admin/a/`), all folders have a field named **Search Context (Default)**, whose function is to upload the intended search with no need for writing it on the URL.

Using the same previous example, if we create a folder named **my-landing-page** and we set up its **Search Context** with the value `fq=C:111&fq=B:222&fq=spec_fct_1:333`, this folder will render exactly the same products as the previous example, but on a more friendly URL.

### Setup

**Important**:

- For the Search Context to operate, it's necessary to use the `searchResult` control.
- The search applied in this filed will replace any search applied on the URL, i.e., if this field is set up in one folder, including search parameters directly on its URL, it will not work, including the sorting (parameter **O**).
