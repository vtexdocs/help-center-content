---
title: 'Breadcrumb control'
id: 3qQS5O9XpusAC6oUqSIQMM
status: PUBLISHED
createdAt: 2018-02-07T11:57:17.362Z
updatedAt: 2020-01-08T20:23:45.528Z
publishedAt: 2020-01-08T20:23:45.528Z
firstPublishedAt: 2018-02-07T12:28:18.865Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: breadcrumb-control
locale: en
legacySlug: breadcrumb-control
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Breadbrumbs improve the in-store browsing experience by encouraging users to explore their page hierarchy.

In VTEX, the `<vtex.cmc:breadCrumb/>` control is responsible for rendering breadcrumbs like the one below.

![breadcrumb1](//images.contentful.com/alneenqid6w5/4UnYdunXh6MI28k8sS0w8Y/9883ba3a0d5f9f5826313832f9c5a2d0/breadcrumb1.png)

If, as in this example, the user directly accesses the page of a product of the category *Camisetas*, the breadcrumb displayed on the product page will give you the information that the user is in this category (*Camisetas*), which is below the department *Moda masculina*.

This control works only on the following page types:
- Product
- Department
- Category
- Search

Here is an example of the HTML code rendered by the breadcrumb control:

```html
<div id="box-bread-brumb" class="hidden-xs"><div class="bread-crumb" xmlns:v="http://rdf.data-vocabulary.org/#">
<ul>
<li typeof="v:Breadcrumb"><a href="http://lojadobreno.vtexcommercestable.com.br/" rel="v:url" property="v:title">lojadobreno</a></li>
<li class="last" typeof="v:Breadcrumb"><a href="http://lojadobreno.vtexcommercestable.com.br/livros" rel="v:url" property="v:title">Livros</a></li></ul>
</div>
</div>
```

The code above renders the following breadcrumb in the site:

![breadcrumb2](//images.contentful.com/alneenqid6w5/1PxrLYlhNaaUYYoi6oOCe6/06d276039e7e73a39fa15061befffd38/breadcrumb2.png)
