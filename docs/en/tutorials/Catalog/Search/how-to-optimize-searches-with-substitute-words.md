---
title: 'Optimizing searches with substitute words '
id: 32FqSsl5VuQyiIMEc02Uwu
status: PUBLISHED
createdAt: 2019-01-24T20:45:49.707Z
updatedAt: 2025-06-12T20:29:40.190Z
publishedAt: 2025-06-12T20:29:40.190Z
firstPublishedAt: 2019-01-24T22:00:22.364Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5fYXkMJagMwcSAeMAsAuOI
slugEN: how-to-optimize-searches-with-substitute-words
locale: en
legacySlug: how-to-optimize-searches-with-substitute-words
subcategoryId: 383bZO0kymqpnNf7Z4NdEg
---

<div class = "alert alert-warning">
We don't recommend using <a href="https://help.vtex.com/en/tutorial/otimizar-as-buscas-com-palavras-substitutas--32FqSsl5VuQyiIMEc02Uwu">Substitute Words</a> when using Intelligent Search. To associate words with products, we recommend using <a href="https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV">Synonyms</a>, which allows you to manage terms per product in a more scalable way. For more information, contact our <a href="https://support.vtex.com/hc/pt-br/requests">Support team</a>.</div>

## How the search engine works 
VTEX has an intelligent algorithm that, based on the term searched for, identifies the best result for the user, i.e., it always shoes the result that will generate more conversions into sales.

<div class="alert alert-info">
See more details on <a href="https://help.vtex.com/en/tutorial/how-does-vtex-search-work--tutorials_542">how the search engine works</a> at VTEX.
</div>

## How useful is a substitute word
If the search engine does not identify the Landing Page, Brand or Department according to the term searched for, it applies a search for a Substitute Word (key work). 

Despite having a low weight in the indexer, the use a substitute words is an extremely important resource, since it permits to reach users that search for grammatically incorrect terms (spagetti), phonetic writing (espagueti) or misspelled words due to typing mistakes (spaguetto), but with the same semantics of the original word (spaguetti).

<div class="alert alert-info">
A resource frequently used by the internal teams to expedite searches is to input RefId/EAN as the Substitute Word in the product. Therefore, it is possible to make faster searches, with only results and to quickly find the product searched for.
</div>

## How do I input a substitute word 

### 1. Product integration 
Integrating the products with the **Catalog API** permits to aggregate their Substitute Words and to associate them with the relevant products:
https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product

### 2. Import by spreadsheet
Input the Substitute Words directly through product spreadsheet, on a massive basis:
https://help.vtex.com/en/tutorial/registering-a-product#importing-products-through-worksheet

### 3. To edit a product 
Input the Substitute Words directly to each product individually in the field **Substitute Word**:
https://help.vtex.com/en/tutorial/registering-a-product#registering-a-product-through-the-admin

## Where do I get substitute words
### Google Trends
A good way to get alternative key words to be typed by the user is using a good tool to investigate trends, such as Google Trends. For example: When searching for the word "Spaguetti" with Argentina filter, one can find out that users relate this search with similar terms, such as "fideos" or "espagueti".

### Google Analytics
By analyzing the history of search words in Google Analytics, it is possible to access an interesting group of search keywords, in the section Acquisition >> Campaign Audiences >> Key Words (organic). This is a good repository of terms the users usually write when searching for a specific product, and that we may have indexed with another name.

### Google Search Console
In the menu Search Traffic >> Search Analytics, it is possible to export a report with a high number of key words, which will show what the users search for when they find us in the Google search engine.

### Indexation Partners
There are companies engaged in preparing databases, images and features of products. 
