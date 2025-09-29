---
title: 'How VTEX search works'
id: tutorials_542
status: PUBLISHED
createdAt: 2017-04-27T22:02:07.746Z
updatedAt: 2025-06-12T20:30:30.148Z
publishedAt: 2025-06-12T20:30:30.148Z
firstPublishedAt: 2017-04-27T23:03:37.560Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-does-vtex-search-work
legacySlug: how-does-vtex-search-work
locale: en
subcategoryId: 383bZO0kymqpnNf7Z4NdEg
---

This article sets out to describe how VTEX's search system works.

> ⚠️ **Warning**: VTEX has two search options - VTEX search and VTEX Intelligent Search. This article refers to the VTEX search. To learn more about the VTEX Intelligent Search application, see [this track](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb).

## VTEX search engine product display prioritization 

VTEX search engine is an intelligent algorithm that identifies which result to best show the user based on the search term.

In addition, the result displayed will always be the one that will generate more sales conversion. The success of this result depends solely on the catalog master file (brand, department, category, product, specification, etc).

In accordance with the search term, the system may render the following result pages, by order of priority:

1. Landing Page
2. Brand
3. Department
4. Search by term (keyword)

### 1. Landing Page

If the term searched for corresponds to the name of a folder which is set up in Portal Manager (the landing page), this folder will be rendered.

> ⚠️ **Notice**: a folder needs to have a layout in order to be searchable.<br>**Even if the search in done in the subfolder, the parent folder also requires layout.**

### 2. Brand

If the searched for term corresponds exactly to the name of or substitute word for a brand which is registered in the master file, the system will only render products of this brand. If the system identifies two or more brands with the same **substitute word** (which is considered an inconsistency in the master file), the system will render only the first one found (and its products);

The result of this page will be a brand page, having the source code as follows: `<!-- CommerceContext.Current.VirtualFolder.Name: brand -->`

### 3. Department 

If the term searched for corresponds exactly to the name of or substitute word for a registered department, the system will render only the products belonging to this department. If the system identifies two or more departments with the same **substitute word** (which is considered an inconsistency in the master file), the system will render only the first one found (and its products);

The result of this page will be the Department page. Checking the source code will allow you to identify which result was displayed. The following comment should be found in the page code: `<!-- CommerceContext.Current.VirtualFolder.Name: @departament@ -->`

### 4. Search by keyword

If the system does not identify the Landing Page, Brand or Department according to the term searched for, it applies a search by term (keyword).

The result of this page will be a search page. Checking the source code will allow you to identify which result was displayed. The following comment should be found in the page code: `<!-- CommerceContext.Current.VirtualFolder.Name: Search -->`

When the search is by keyword, the search engine undergoes a search of the __indexer__, which is responsible for the search algorithm by keyword.

__Ranking System:__
This algorithm uses the concept of ranking (Score) to prioritize and order products. For each search, the indexer allocates a score to products based on the search term. Some basic fields (having different weight) are considered when calculating this ranking. The shop window display is created according to this ranking, from highest to lowest, meaning that the product with the highest score displayed first, while the one with the lowest score, last.

> ℹ️ For more information, see the article [How does the Score field work?](/en/tutorial/como-funciona-o-campo-score--1BUZC0mBYEEIUgeQYAKcae).

## How the search is done

To understand VTEX search, we must first become familiar with the indexer and its update process.

### Catalog Indexer

The catalog indexer is a quick access scalable database, with configurable algorithms for result prioritization. It is positioned between conventional database and user. See the outline below:

![database](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/catalog/search/how-does-vtex-search-work_1.JPG)

The indexer contains all the information referring to the product catalog (products, SKUs, brands, departments, categories). The search engine uses this information to locate products and to display these in shop windows and search results. However, __only already indexed products can be found by the search__.

### Updating process (Indexing)

Any changes made to the product (main data, price, inventory, collection, etc.) will generate an update in the indexer, meaning that __whenever changes are applied to a product, it is sent to the end of the indexing queue__. 

When this indexing queue is consumed, the changes applied will be available for display on the website. The indexing process is extremely safe and has “repêchage” rules. Whenever an item is not indexed in the first attempt, the system makes other attempts.

### Fields and their weights

The following fields and their respective weights are used by the search algorithm when ranking a product:  
- __Product name__: 2.8
- __First product name__: 2.5
- __First and second product name__: 1.2
- - __Full product na__me__: - __1.0
- __Substitute words (product an__d bran- __d): 0.7
- __Product specifications (only for indexed text and indexed long text fields)__: 0.5

__Example__

Considering the following indexer:

| Product name     | Complementary product name	    | Substitute words     | Product specifications     |
| ---------- | ---------- | ---------- | ---------- |
| Soccer ball       | Football 7      | soccer ball, football ball       | White       |
| Ball       | Football 7       | society       | Soccer ball       |
| Soccer boot       | Field       | Soccer boot, Soccer boot       | White       |

<div class=alert>Search term 1: **Soccer ball**</div>

Result:
1. **Soccer ball** (Highest ranked, since the term corresponds exactly to the product name)
2. **Ball** (Second best ranked, since the term corresponds to a specification value)
3. **Soccer boot** (Third best ranked, since part of the term corresponds to part of the product name)

<div class=alert>Search term 2: **White Ball**</div>

Result:
1. **Ball** (Best ranked, since part of the term corresponds exactly to the product name)
2. **Soccer ball** (Second best ranked, since part of the term searched for corresponds to part of the product name)
3. **Soccer boot** (Third best ranked, since part of the term corresponds to a specification)

**Hint:** The use of __substitute words__, in spite of their low indexer score weight, is an extremely important feature. With this feature, it is possible to reach users that search for grammatically incorrect terms, but with the same semantics. 

## Read more
 - [How does the Score field work](/en/tutorial/how-does-the-score-field-work--1BUZC0mBYEEIUgeQYAKcae)

