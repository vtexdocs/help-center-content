---
title: 'Identifying layout errors caused by JavaScript files'
id: frequentlyAskedQuestions_588
status: PUBLISHED
createdAt: 2019-01-24T20:45:54.986Z
updatedAt: 2023-03-29T13:44:10.202Z
publishedAt: 2023-03-29T13:44:10.202Z
firstPublishedAt: 2019-01-24T22:14:27.348Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-identify-layout-errors-caused-by-javascript-files
legacySlug: how-to-identify-layout-errors-caused-by-javascript-files
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
seeAlso:
  - /en/docs/tutorials/how-to-know-which-javascript-file-is-being-applied-to-a-page
  - /en/faq/blocking-customizations-to-troubleshoot-front-end-issues
  - /en/docs/tutorials/how-to-test-for-layout-problems
---

> ⚠️ This tutorial is only valid for CMS Portal (Legacy) stores.

You can use the `/tools.html` page to check whether a layout error comes from a custom JavaScript file in the store or from native VTEX behavior.

To disable client JavaScript and test the page, follow the steps below:

1. Go to `https://{accountName}.myvtex.com/tools.html`, replacing `{accountName}` with your store's account name.
2. In the **Client JavaScript is** tab, click **Disable**.

![tools.html page with the option to disable client JavaScript](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms-portal-legacy/layout/how-to-identify-layout-errors-caused-by-javascript-files_1.png)

3. Remove `/tools.html` from the URL and refresh the store page.

If the error disappears, it is likely caused by a custom JavaScript file. In that case, update the file.

When adding JavaScript to the page, follow these recommendations:

- Use an external JavaScript file, not inline code.
- Check that the file does not affect store performance.
