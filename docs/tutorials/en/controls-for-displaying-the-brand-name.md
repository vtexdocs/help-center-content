---
title: 'Controls for displaying the brand name'
id: 4WF5ZfVXcIkykGCICkeQYy
status: PUBLISHED
createdAt: 2018-02-26T13:36:50.601Z
updatedAt: 2019-12-31T15:21:09.686Z
publishedAt: 2019-12-31T15:21:09.686Z
firstPublishedAt: 2018-02-26T14:13:31.398Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: controls-for-displaying-the-brand-name
locale: en
legacySlug: controls-for-displaying-the-brand-name
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

There are two controls that render the brand name:
- `$product.BrandName`
- `$product.Brand`

Both are shelf controls, that is, they only work on pages that use shelf templates.

The difference between the two is as follows:

- The `$product.BrandName` control displays the brand name as it's registered in the store catalog. For example, if you registered a brand name like "Oliveira Juices", when you use this control, the __brand name__ will be rendered in the same way: "Oliveira Juices". This control renders only the pure string. To manipulate it on the front end, you can insert the control into an HTML element, such as a div or a span, with the class you want.
- The `$product.Brand` control displays the brand name in a __format specified to compose URLs__. This is because uppercase characters will be replaced by their lower case equivalents, and spaces will be replaced by dash. For example, if the brand name registered in the catalog is "Oliveira Juices", this control will render the following: "oliveira-juices". In this case, the rendered HTML code has the following format: `<p class="texto brand {brand}">{brand}</p>`, where {brand} is the brand name.
