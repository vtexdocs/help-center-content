---
title: 'Synonyms'
id: um0MRK7KMbE4RZEEbblFJ
status: PUBLISHED
createdAt: 2024-08-14T18:10:16.284Z
updatedAt: 2024-10-29T19:41:49.081Z
publishedAt: 2024-10-29T19:41:49.081Z
firstPublishedAt: 2024-08-14T18:12:53.564Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: synonyms
locale: en
legacySlug: synonyms
subcategoryId: BBzMtJan1UTxC9QZODnlN
---

Intelligent Search's synonyms feature allows you to add words with similar meanings to a specific search term, increasing the chances of a successful search. This tool enables the creation of rules linking searched words to words in the product list.

For example, if a store lists products under the name `television,` but customers often search for `TV`, you can set up a synonym rule so that when the term `TV` is searched, the results for `television` are also displayed.

## How it works

During a search, Intelligent Search receives the term entered by the customer and checks the synonym rules already created. If a matching synonym is found, Intelligent Search includes items matching the synonym in the search results.

This means that even if the customer doesn't search for the exact word listed in the product, they can still get relevant results. This increases the chances of a successful search and reduces the likelihood of getting no results.

The use of synonyms also complements the search [reports](https://help.vtex.com/en/tutorial/analytics--6qRMAHDL9hvv3oE0bh8mA1) without results. This analysis allows the merchant to identify unsuccessful searches and determine which terms would benefit from synonyms.

## Types of synonyms

You can create two types of synonyms: unidirectional and bidirectional. Here's how each of them works:

| Type | Description | Examples |
|---|---|---|
| Unidirectional | Two or more words have similar meanings but are not considered equivalent in all contexts.<br><br>This configuration allows, by strategic decision, the correspondence to work only in one direction. | `smartphone → iphone`<br>When searching for the term "smartphone", the results will include products labeled "iphone". However, searching for "iphone" will not return results for "smartphone". |
| Bidirectional | Two or more words have equivalent meanings, allowing matching to work in both directions.<br><br>This configuration makes it easier to search for products that may have different names in various regions of a country. | `diet ⇄ zero ⇄ sugar-free`<br>A search for "diet" products will include those labeled as "zero" and "sugar-free." Similarly, searching for "zero" will return results for "diet" and "sugar-free" products. Searching for "sugar-free" will also show "zero" and "diet" products.<br><br>`soda ⇄ pop ⇄ soft drink`<br>In the US, the terms "soda," "pop," and "soft drink" all refer to the same type of beverage. With bidirectional synonyms for each term, it is not necessary to replicate each word in the product description, as all results will be displayed. |

Learn more about adding synonyms in [Creating synonyms](https://help.vtex.com/en/tutorial/creating-synonyms--5IfjhvjxNAvJGEWNn0AhOA).

>⚠️ After registration or modification, a synonym can take up to two hours to reflect in the store.

## Best practices

>❗ Don't use [substitute words](https://help.vtex.com/pt/tutorial/otimizar-as-buscas-com-palavras-substitutas--32FqSsl5VuQyiIMEc02Uwu) from the product/SKU in the Catalog with Intelligent Search. Instead, use only the synonym feature, which allows for more scalable management of terms per product.

### Results sorting

When creating a bidirectional synonym, there is no differentiation between the two terms in sorting search results. For example, if there is a bidirectional synonym `Tylenol ⇄ acetaminophen`, in a search for `Tylenol`, results for the term `Tylenol` are not necessarily displayed before results for `acetaminophen`. To determine the sorting strategy, you need to use a [merchandising rule](https://help.vtex.com/en/tutorial/merchandising-rules--2UEbxllrr98twbGIVhSPvi).

### Words added individually

When creating a synonym with more than one word, each word is added individually to the product. For example, if `running shoes ⇄ running sneakers` are synonyms, and someone searches for the term `running`, results for both `running shoes` and `running sneakers` will be included in the search results.

### Recursion

Synonyms are recursive, meaning the results are cumulative. For example, if you create a synonym `Tylenol ⇄ acetaminophen` and another synonym `acetaminophen ⇄ headache`, a search for `Tylenol` will also return results for `headache`.

### Intelligent Search autocorrect

Synonyms should not be used to address spelling mistakes, singular and plural variations, pronouns, articles, or prepositions in search terms. In these cases, Intelligent Search can interpret, learn, and correct automatically through [Autocorrect](https://help.vtex.com/en/tutorial/search-behavior--B9o3JbV6utAinBJ1ETujs#autocorrect).

Here are some examples of synonym configurations:

| Synonyms | Type | Comments |
|---|---|---|
| `lotion ⇄ moisturizer` | Bidirectional | ✔️ Appropriate configuration. When someone searches for `lotion`, results for `moisturizer` are included. |
| `pants → jeans` | Unidirectional | ✔️ Appropriate configuration. When someone searches for `pants`, results for `jeans` are included. |
| `color → colour` | Unidirectional | ❌ Redundant configuration. Intelligent Search automatically corrects variations like this. |
| `shoe ⇄ shoes` | Bidirectional | ❌ Redundant configuration. Intelligent Search automatically corrects variations like this. |
| `running shoes ⇄ shoes for running` | Bidirectional | ❌ Redundant configuration. Intelligent Search automatically corrects variations like this. |

>ℹ️ The [Intelligent Synonyms](https://help.vtex.com/pt/tutorial/sinonimos-inteligentes--1rR47Kk96UgFYwh8dkDG7i) feature generates term recommendations for adding synonyms, in addition to manual configuration. If you are interested in implementing this feature, please contact our [Support team](https://support.vtex.com/hc/pt-br/requests). Extra fees may apply in the future.

## Learn more

* [Creating synonyms](https://help.vtex.com/en/tutorial/creating-synonyms--5IfjhvjxNAvJGEWNn0AhOA)
* [Synonym list](https://help.vtex.com/en/tutorial/synonym-list--3E1fi0C6tVrR0klMFXAaU8)
