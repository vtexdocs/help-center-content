---
title: 'Exporting the newsletter database using Master Data'
id: frequentlyAskedQuestions_1825
status: PUBLISHED
createdAt: 2019-01-24T20:45:58.818Z
updatedAt: 2024-05-24T18:56:12.924Z
publishedAt: 2024-05-24T18:56:12.924Z
firstPublishedAt: 2019-01-24T22:00:56.109Z
contentType: tutorial
productTeam: Master Data
author: authors_84
slugEN: how-can-i-export-from-the-newsletter-database-using-master-data
legacySlug: how-can-i-export-from-the-newsletter-database-using-master-data
locale: en
subcategoryId: WpbGhubuRZaNZilJSXnqu
---

To export your customer base that have chosen to receive newsletter, follow the step-by-step below:

1. In the VTEX Admin, access **Store Settings** > **Storefront** > **Master Data.**
2. Click on the **Clientes** tab.
3. Click `Export XLS`.
4. Select the `Receive Newsletter?` filter, as well as others you like (`Name` and `email`, for example).
5. Click on `Export`.
6. A window will appear informing you that the export has been successfully programmed. Click `OK` to close it.

  In the spreadsheet that has been sent to your email there will be a column titled `isNewsletterOptIn`, which assigns the value **true** to customers who receive newsletter and **false** to those who do not.

> ⚠️ This option is only valid for stores with their Newsletter registered in the CRM. If your store is not yet configured in this way, and still uses the page control, read the article [Configuring the inclusion of a newsletter in Master Data](/en/tutorial/how-do-i-configure-the-inclusion-of-newsletter-in-master-data--frequentlyAskedQuestions_1816) to find out how to do it.
