---
title: 'Google Search Console crawling - robots.txt'
id: tutorials_574
status: PUBLISHED
createdAt: 2017-04-27T22:00:09.026Z
updatedAt: 2023-03-29T17:32:57.686Z
publishedAt: 2023-03-29T17:32:57.686Z
firstPublishedAt: 2017-04-27T23:03:39.731Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: google-search-console-tracking-robots-txt
legacySlug: google-search-console-tracking-robots-txt
locale: en
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

The robots.txt is a text file that search engines use to define site behavior rules for crawlers.

VTEX natively provides an interface for editing and customizing your robots.txt file.

To access the editor, follow the steps below:

1. In the VTEX Admin, go to the **Store settings** menu.
2. In the **Storefront** section, click **Settings**.
3. Click the **SEO** tab.
4. Make the desired changes in the **Robots.txt** text box.

To better understand this content, the main functions of the file are detailed below:

- **Allow:** Allows search engine crawlers to browse and index the specified address.
- **Disallow:** Blocks the specified content from being crawled.

To validate the content of the `robots.txt` file, we recommend that you:

- Check if the listed URLs really need specific crawling rules.
- Confirm that the rules are correctly applied to the desired URLs.
- Ensure that the added `sitemap.xml` file is correct.

You can also edit the store's `robots.txt` file available at:

```
{storename}.vtexcommercestable.com.br/admin/Site/ConfigSEOContents.aspx
```

After configuring the `robots.txt`, review the store's `sitemap.xml`. The sitemap presents the site structure to search engines, indicating which pages should be crawled and indexed, such as categories, products, and institutional pages.

By correctly adding the sitemap in Google Search Console, you make the crawler's task easier, allowing store pages to be discovered and indexed more quickly in search results.
