---
title: 'How does the Search Context work?'
id: tutorials_543
status: DRAFT
createdAt: 2017-04-27T22:01:57.778Z
updatedAt: 2019-12-31T15:21:59.700Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:38.176Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: how-does-the-search-context-on-website-folders-operate
locale: en
legacySlug: 
subcategory: 
---

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

![](https://images.contentful.com/alneenqid6w5/ZvEGMDPUs0OsuCkoUsqqS/4411604b8b78124edcbacd46cc45ed53/ContextoDeBusca.PNG "Search Context")

**Important**:

- For the Search Context to operate, it's necessary to use the `searchResult` control.
- The search applied in this filed will replace any search applied on the URL, i.e., if this field is set up in one folder, including search parameters directly on its URL, it will not work, including the sorting (parameter **O**).

### Related articles

- [How does VTEX search work?](/en/tutorial/how-does-vtex-search-work/)
- [Search parameters](/en/tutorial/search-parameters/)
