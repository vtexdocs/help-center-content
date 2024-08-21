---
title: 'How to use the meta tags control'
id: 2OPiSPubgcEqIikAWsCouk
status: PUBLISHED
createdAt: 2019-01-24T20:45:38.270Z
updatedAt: 2023-10-17T14:24:54.898Z
publishedAt: 2023-10-17T14:24:54.898Z
firstPublishedAt: 2019-01-24T22:06:45.424Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: how-to-use-the-meta-tags-control
locale: en
legacySlug: how-to-use-the-meta-tags-control
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

The `<vtex:metaTags/>` control inserts in the code the meta tags corresponding to the page.

It is usually inserted shortly after the opening of the `<head>` element.

These meta tags use information added in different parts of the platform. They are important mainly for two reasons:
- SEO. In other words, they interfere with the finding degree of your pages by search engines.
- The way browsers interpret your site.

Two of the most important tags are `title` (which, by definition, is not precisely a meta tag but is of the utmost importance) and `meta name="description"`.

The first one shows the title of the page (the one that appears on the page tab in the browser), and the second one the description (the one that appears, for example, in Google search results).

For the __product__, __category__ and __brand__ pages, both the title and the description are defined in their registration pages. For example, when creating a new brand, you must enter a title and description for it.

When this brand's page is loaded, it will contain this information in the `title` and `meta name="description"` tags, provided that the `<vtex:metaTags/>` control is in the brand page template.

For the __home page__ and the __search page__, the tag `meta name="description"` is populated with the information in the site's SEO section. To access this section, go to __Store Settings__>__Storefront__>__Settings__>__General__, and then the __SEO__ option.

You can also set the `title` tag of the __home page__ via Admin, simply go to __Store Settings__>__Storefront__>__Settings__>__General__ and fill in the __Home Page title (Tag Title)__.

See an example of meta tags inserted by the `<vtex:metaTags/>` control for the page of the category "Climbing" of the store of account name "lojadobreno" below:

```html
<meta name="language" content="pt-BR">
<meta name="country" content="BRA">
<meta name="currency" content="R$">
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<meta name="description" content="Indoor, rock and ice climbing equipment.">
<meta name="Abstract" content="Climbing">
<meta name="author" content="lojadobreno">
<meta name="copyright" content="lojadobreno">
<meta name="vtex-version" content="1.4.904.1590">
<meta http-equiv="pragma" content="no-cache">
<meta name="robots" content="noindex,nofollow">
<title>Climbing</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="http://lojadobreno.vtexcommercestable.com.br/climbing">
```

>ℹ️ If you don't want to use the canonical tag (&lt;link rel="canonical"&gt;), you can disable it using a [specific control](https://developers.vtex.com/docs/guides/control-to-disable-the-canonical-tag).
