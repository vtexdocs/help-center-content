---
title: 'How to use Subtemplates'
id: tutorials_577
status: PUBLISHED
createdAt: 2017-04-27T21:59:46.725Z
updatedAt: 2023-03-29T15:25:52.828Z
publishedAt: 2023-03-29T15:25:52.828Z
firstPublishedAt: 2017-04-27T23:03:40.959Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: subtemplates
legacySlug: subtemplates
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

Subtemplates are intended for small structures that could be reused in several Page Templates. Subtemplates work as _“includes”_.

You can create an HTML block that you intend to reuse, and then insert a call inside a Page Template. To create a subtemplate:

1. In the VTEX Admin, access **Storefront > Layout > CMS** and go to the **Templates de Página > Subtemplates** folder.
2. Click on the **Novo Subtemplate** option.
3. Fill in the `Nome do Template` field.
4. Paste your code on the `XHTML do Template:`field.
5. Then, click on **salvar**.

In order to reference a Subtemplate inside a page Template, use the syntax below:

`<vtex:template id="name-of-the-id" />`

Fill in the `id` attribute with the name given to the subtemplate.

