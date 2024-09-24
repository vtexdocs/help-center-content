---
title: 'Indexes in Master Data'
id: tutorials_785
status: PUBLISHED
createdAt: 2017-04-27T21:58:03.173Z
updatedAt: 2024-07-17T13:57:12.010Z
publishedAt: 2024-07-17T13:57:12.010Z
firstPublishedAt: 2017-04-27T23:03:42.760Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: indexes-in-master-data
locale: en
legacySlug: setting-up-an-index-on-master-data
subcategoryId: WpbGhubuRZaNZilJSXnqu
---

An index in Master Data is a reference to one or more fields used to optimize queries on a data entity. Using indexes allows you to search for records more quickly.

To illustrate, imagine the index of a book, which lists the themes contained in the book and the page number for each theme. To search, instead of having to go through all the pages of the book to find the result you want, you can access the index and go straight to the theme you want. Likewise, the index in Master Data provides a more efficient method for finding documents.

## Configuring indexes

Follow the instructions below to define one or more fields as indexes in Master Data v1:

1. In the VTEX Admin, go to **Store Settings > Storefront > Master Data**.
2. Click the gear icon <i class="fas fa-cog"></i> in the application where you want to add the index.
3. Click **Data structure**.
4. Click the **Index** tab.
5. Click `Add`.
6. Complete the following fields:

    * **Name:** Name of the index.
    * **Unique values:** Option to block new records with repeated values for the index(es) created. See the section [Restricting values per document (alternative key)](#restricting-values-per-document-alternative-key) for more details.
    * **Data entity:** Name of the data entity containing the fields to be configured as indexes.
    * **Fields:** Name of one or more fields that will be configured as indexes. If you add more than one field name, separate them with a comma. Example: `firstName,document`.
7. Click `Save`.

## Use cases

Learn more about the main scenarios for using indexes in Master Data in the following sections.

### Queries of up to a thousand documents

The use of indexes is recommended for searches that return results of up to a thousand documents. If searches for an index frequently return more than a thousand documents, you can obtain better search performance by indexing the field, i.e., [configuring it as a filter in the data entity](https://help.vtex.com/en/tutorial/filtrando-dados-no-master-data--tutorials_778).

### Restricting values per document (alternative key)

The index configuration allows you to block one or more fields to prevent records with repeated values. These fields act as alternative keys, providing alternative values to identify a record.

The alternative key is configured via the **Unique values** field in [Index Settings](#configuring-indexes). Its behavior varies depending on the number of fields included in the index. The following sections show the alternative key's behavior in each case.

#### Only one field in the index

If only one field is configured as an index, the alternative key will not allow a value that has already been entered in that field to be entered again.

For example, the **Customer** table has two columns: **ID** and **Name**. To make searching easier, the **Name** field (`firstName`) can be configured as an index and marked as **Unique values**, as illustrated below:

![indices-1-en](//images.ctfassets.net/alneenqid6w5/3OsXbib7NQTwtjSzBlvR0a/73cc5f6e47530f8a25b428b858c3d0df/indices-1-en.png)

As a result, it will not be possible to enter a name that has already been entered in **Customer**:

![indices-2-en](//images.ctfassets.net/alneenqid6w5/4hHQqk8reoDAAzuMiNBncY/8caded1ca96fdf9c0bcd93a5afc12d27/indices-2-en.png)

In the example above, as there is already a record with the **Name** equal to **Mary**, you cannot add another one with the same value.

>⚠️ Use the **Unique values** option with caution. If a value that you want to allow to be repeated is configured as unique, the system will block duplicate records, preventing another one from being entered.

#### Multiple fields in the index

If there is more than one field in the index, the alternative key will prevent a set of values from being repeated in the selected fields.

For example, imagine that the **Customer** entity has three fields: **ID**, **Name** and **Document**. In the index configuration, under **Fields**, you enter Name (`firstName`) and Document (`document`), as shown below:

![indices-3-en](//images.ctfassets.net/alneenqid6w5/66m8jlFgaiE07dSpSFiWhg/6dfd99a8e88c85ea424e31bafd163572/indices-3-en.png)

In this case, the **Name** value can be repeated, or the **Document** value can be repeated, but the combination of the two values cannot be repeated. In other words, there can be no record that repeats the same pair of values (such as identical **Name** and **Document**).

![indices-4-en](//images.ctfassets.net/alneenqid6w5/7sLqZNCOgjbF794zd6Jcz7/f56a0b860946eec272c8973d57eb6368/indices-4-en.png)

In the example above, there is already a record with the **Name** as **Mary**. You can include another record with the same **Name** as long as the **Document** value is different.

>⚠️ If the same combination of values repeats, the record will not be saved. Use the **Unique values** option only when you are certain that a set of values will not be repeated in different records.
