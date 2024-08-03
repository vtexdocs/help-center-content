---
title: 'How to set up an index on Master Data'
id: tutorials_785
status: PUBLISHED
createdAt: 2017-04-27T21:58:03.173Z
updatedAt: 2022-10-17T18:32:35.482Z
publishedAt: 2022-10-17T18:32:35.482Z
firstPublishedAt: 2017-04-27T23:03:42.760Z
contentType: tutorial
productTeam: Post-purchase
author: authors_3
slug: setting-up-an-index-on-master-data
locale: en
legacySlug: setting-up-an-index-on-master-data
subcategory: WpbGhubuRZaNZilJSXnqu
---

An index is a reference to one or more columns, intended to optimize queries to a data entity. In other words, it is a structure that enables faster record searches.

To illustrate, imagine that, on Master Data, the index works as that found in books, showing indications of what that book addresses. To make a search, instead of going through all book pages, one by one, to find the desired results, you can access the index and go directly to the term you are searching for. This is how the index on Master Data works. It provides a more efficient method for retrieving data.

<!--On Master Data, the index has two uses:-->

## Quick queries return up to 1 thousand documents

The use of the index is recommended for search results of up to 1 thousand documents. This is so because, in case the search brings a greater number of documents very frequently, its performance may be improved by indexing the field, that is, marking the field as a filter in the settings of the data entity.
In other words, in cases of very large searches (over 1 thousand documents), [we recommend setting up a filter with the field that was in the index](/tutorial/filtrando-dados-no-master-data/ "we recommend setting up a filter with the field that was in the index"). This way, the search will be faster than it would be using the index.

## Restriction of values per document (alternate key)

There is also the possibility to block one or more columns to receive repeated values. The technical term for this concept is “alternate key.” The alternate key is set up in the **Valores Únicos **field, upon creation of the index, and it works in different manners, depending on the number of fields included in the index.

### One single field in the index

The alternate key prevents registration of a value that has already been registered in the field.

**Examples:
**The cliente table has 2 columns: ID and Nome.
The ID is a number that cannot be repeated, since it identifies the customer. “Nome” is the customer name.
However, to facilitate the search, the column “Nome” was set up as an index and classified as a **Valores Únicos **column. 

[![indice1](https://images.contentful.com/alneenqid6w5/2Z02pI4DxeaaWOmYw42Suu/60bb0d893f5bd07f94928288390a5526/image011.png)](https://images.contentful.com/alneenqid6w5/2Z02pI4DxeaaWOmYw42Suu/60bb0d893f5bd07f94928288390a5526/image011.png "![indice1](https://images.contentful.com/alneenqid6w5/2Z02pI4DxeaaWOmYw42Suu/60bb0d893f5bd07f94928288390a5526/image011.png)")As a result, you will not be able to enter a name that is already registered in Cliente. 

[![indice2](https://images.contentful.com/alneenqid6w5/FwEjcrqaQwKE8U4AEMOY4/ca741feb38fb89e6c3e0bd3ec442ba37/image002.png)](https://images.contentful.com/alneenqid6w5/FwEjcrqaQwKE8U4AEMOY4/ca741feb38fb89e6c3e0bd3ec442ba37/image002.png "![indice2](https://images.contentful.com/alneenqid6w5/FwEjcrqaQwKE8U4AEMOY4/ca741feb38fb89e6c3e0bd3ec442ba37/image002.png)")
The example above shows that the **Valores Únicos** option must be used carefully, or, in case a value is repeated, it will not be registered with the settings chosen.

### Several fields in the Index

In this case, the alternate key will prevent a combination of the fields selected being repeated.

**Examples:**

In the same example, imagine that the cliente entity has one more column: CPF. Accordingly, in the settings of the index, the columns nome and CPF were included in **Composição de campos.**

[![indice3](https://images.contentful.com/alneenqid6w5/41Y8vUIFjWGuqoqwA6UYaK/0a33bc147f17f95ea5038124bbd5132a/image021.png)](https://images.contentful.com/alneenqid6w5/41Y8vUIFjWGuqoqwA6UYaK/0a33bc147f17f95ea5038124bbd5132a/image021.png "![indice3](https://images.contentful.com/alneenqid6w5/41Y8vUIFjWGuqoqwA6UYaK/0a33bc147f17f95ea5038124bbd5132a/image021.png)")
Now, it is possible to include the name “Marcos” from the previous example, as long as he does not have the same CPF number as the “Marcos” previously registered. That is, just the combination of fields cannot be repeated. Records may have the same CPFs or names, but registering the same CPF and name in one record is not allowed.

[![indice4](https://images.contentful.com/alneenqid6w5/36308RenwQq2aYcSkAYq6K/5a18bd8e7eca83e3f7ac40d3e6ca41ad/image031.png)](https://images.contentful.com/alneenqid6w5/36308RenwQq2aYcSkAYq6K/5a18bd8e7eca83e3f7ac40d3e6ca41ad/image031.png "![indice4](https://images.contentful.com/alneenqid6w5/36308RenwQq2aYcSkAYq6K/5a18bd8e7eca83e3f7ac40d3e6ca41ad/image031.png)")

__Remember!__ This situation also requires attention, since the same combination of values cannot be repeated, and the record will not be saved. We recommend that the attribute **Valores Únicos**, in the Index, is used only when the repetition of values is not possible.
