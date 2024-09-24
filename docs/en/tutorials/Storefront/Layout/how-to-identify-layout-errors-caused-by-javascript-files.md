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
slug: how-to-identify-layout-errors-caused-by-javascript-files
locale: en
legacySlug: how-to-identify-layout-errors-caused-by-javascript-files
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

A way to identify whether an error appearing in the layout is caused by a VTEX standard control or by a Javascript file customized in the store is to use /tools.html.

To do so, follow the steps below:

1. To disable the JS of the page, just add `/tools.html` at the end of the URL. E.g.: {AccountName}.myvtex.com/tools.html
2. Click on __Disable__ in the __Client JavaScript is__ tab. 

![javascript-disable ](//images.ctfassets.net/alneenqid6w5/2rDNQsznK8umymyKaOoYkA/1c4306998c4d580505dfaffe20ca66fa/js_enabled.png)

3. Next, remove `/tools.html` from the URL and update the page.

If the error displayed was caused by an external JavaScript file, it will no longer appear.
Thus, this file needs be adjusted.

Regarding JS files inserted in the page, it is important to follow certain assumptions:

- To use an external JS rather than online JavaScript.
- To check whether it will interfere in the performance of the store.

Remember that we also have the VTEX Speed tool that enables local development with shorter cache time. [Vtex Speed - Download e Execution](https://github.com/vtex/speed)

To investigate possible problems involving CSS, we recommend using the WebDeveloper plugin - look [here](/en/tutorial/tools-to-help-the-performance-of-your-e-commerce/) some tools to improve debugging customization issues.
