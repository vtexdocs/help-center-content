---
title: 'How does VTEX Intelligent Search work?'
id: 23mytRDsEduqLO0Lo7yufy
status: PUBLISHED
createdAt: 2020-03-05T14:57:22.014Z
updatedAt: 2023-04-13T23:00:35.423Z
publishedAt: 2023-04-13T23:00:35.423Z
firstPublishedAt: 2020-03-05T19:54:00.932Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: how-does-vtex-intelligent-search-work
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugEN: vtex-intelligent-search
---

The Search Engine is the core of VTEX Intelligent Search's intelligence. It interprets the search term and displays a filtered and ordered list of products. This tool allows a more objective search through indexing and treatment of the catalog data.

This feature is a default in VTEX Intelligent Search and covers the vast majority of scenarios. However, you can also adjust the Search Engine to improve search results.

There is a set of settings that change products displayed in search results and their order:  

- __Definition of search fields__: defines certain product information as searchable. With this configuration, every search performed verifies the contents of this field to assimilate the products. The __product name__, __brand__, __ProductID__, __ProductRefID__, __SKUID__, __SKURefID__, and __EAN__ fields are defined by default and cannot be changed. 

  You can include special characters ( `-` and `/` ) when searching for a product.

 _For example_: the "color" field is set as configurable and the product was added with the name "Nike Total 90 Sneakers" and the color "black". If a customer searches for "Black Sneakers", the tool will return products that have the term "sneakers" and the color "black" at the top of search results.

- __Definition and sorting of filter fields__: in all search results, users can select filters. Some filters are pre-defined by default, but it is also possible to create them according to the store's needs. The display order is also customizable.

 _Examples_: Price, Categories, and Brand.

- __Autocorrect__: the user may make spelling mistakes when performing a search. The tool interprets these misspellings and shows similar products.

 The Search Engine performs an automatic correction in each search. For each search term, a specific number of wrong characters is allowed. The number of accepted misspellings is called fuzzy.

 The fuzzy varies according to the length of the search term. By default, if the term is 3 to 5 characters long, the fuzzy applied will be 1, which means that 1 misspelled character is allowed. For terms with 6 or more characters, the fuzzy used will be 2.

 The predicted misspellings considering ```fuzzy = 1``` are:
   - Insert 1 extra character.
   - Remove 1 character.
   - Change 1 character.
   - Exchange 2 characters that are side by side.

 _For example_:
 Suppose a customer wants to search for the term "case". Using the default configuration (```fuzzy = 1``` for terms of 3 to 5 characters), the Search Engine will show results for "case" in any search that contains accepted errors, such as:
   - chase (insert 1 extra character)
   - cae (remove 1 character)
   - cast (change 1 character)
   - csae (exchange 2 characters that are next to each other)

<div class="alert alert-info" role="alert">
<p>Whitespace is not considered in fuzzy, so “base ball” will not be corrected to “baseball”. We recommend using synonyms for these cases.</p>
</div>

- __Relevance settings__: it is the ordering principle of search results. In this section, you can assign weights and prioritize certain criteria in the Search Engine, such as popularity, release date, and promotions. The relevance of a product is composed by the combination of weights and priorities defined by each retailer.

 _For example_: a retailer configured that "promotion" has greater relevance than other criteria. When a customer searches for "T-shirt", the tool might display the T-shirts on sale at the top of search results, depending on the weights assigned to other criteria.

 For more information on how to customize the order of results according to your store's needs, read the article [Relevance settings](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS).

- __Minimum result__: allows you to set the minimum number of products for multi-term queries. If this number is not reached, the search returns more comprehensive results, considering only one of the searched terms.

 _For example_: it has been configured that the minimum result for multi-term queries is __three__. The user searched for "nike sneakers", but there is only __four__ products in the catalog with that name. The platform will first display products with the terms "nike sneakers", then products with the term "sneakers", and after that, those with the term "nike".

- __Page limit__: limits search results to 50 pages. This feature encourages the customer to use filters, creating a more relevant and focused experience.

<div class="alert alert-warning">
  <p>The VTEX Intelligent Search does not offer the functionality of substitute words natively. To enable the use of substitute words with VTEX Intelligent Search, please contact <a href="https://support.vtex.com/hc/en-us/requests">our support</a>.</p>
</div>

## Alternative ways to search

You can search for IDs in the store URL bar or in the search bar. In addition, you can search for just one item or for a list of items. 

To search in your store URL bar, follow the format below:

- Example for searching an item: `[account address]/[id type]:[id_1]?q=[id type]&map=ft`
- Example for searching a list: `[account address]/[id type]:[id_1];[id_2];[id_3]?q=[id type]:[id_1];[id_2];[id_3]&map=ft`

The possible value types for the ID type field are `product.id`, `sku.id`,`sku.ean`, `sku.reference` or `id` (ProductID, ProductRefID, SKUID, SKURefID and EAN). It is important that all IDs belong to the same type.

You can search for IDs in the search bar in the following ways:

1. By typing only the first digits of the ID in the search bar. Please note that the search must be exact: for example, if the ID is `0123-456-789` and you search for `123`, the product will not be displayed.
2. By queries, following the format below:
  - **Search by SKU ID:** `?q=sku.id:<id>` or `?q=sku:<id>` 
  - **Search by EAN:** `?q=sku.ean:<id>` 
  - **Search by reference ID:** `?q=sku.reference:<id>` 
  - **Search by slug:** `?q=product.link:<link>` 
  - **Search by product ID:** `?q=product:<id>` or `?q=product.id:<id>`

## Indexing

Indexing is the process of sync between store and search catalogs. This feature allows you to keep your content up to date with continuous updates of the product index. It also performs data processing to be used in the search.

Initially, it synchronizes all the products from your VTEX catalog. After that, data changes — such as product name and status —  are updated in real time by the search indexer.

In this synchronization process, the system queues up the information that has been updated to add it to the search catalog. Once all changes have been indexed, they will be available on the website. 

Indexing process is safe and has a retry mechanism — if an item is not indexed on the first attempt, the system makes subsequent attempts until it is successfully completed. 

Indexing is fundamental to analyze, process, and organize data as best as possible to improve your search results.

<div class="alert alert-info" role="alert">
<p>When using Intelligent Search, two commands can define the order of your collections. Using the command `map=productClusterIds` defines that the order of your collections will be defined by your own relevance rule. If you choose to use  `productClusterNames`, you’ll define that you want your collections to follow Intelligent Search’s relevance standards.  </p>
</div>

