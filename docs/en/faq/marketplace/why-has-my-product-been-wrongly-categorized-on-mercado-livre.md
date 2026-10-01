---
title: 'Why has my product been wrongly categorized on Mercado Livre?'
excerpt: "Mercado Livre auto-categorizes by product name and price, which can be wrong. Fix the category on Mercado Livre or before integrating the SKU."
id: frequentlyAskedQuestions_4462
status: PUBLISHED
createdAt: 2017-04-27T22:24:19.119Z
updatedAt: 2019-12-31T14:23:48.805Z
publishedAt: 2019-12-31T14:23:48.805Z
firstPublishedAt: 2017-04-27T23:02:43.888Z
contentType: frequentlyAskedQuestion
productTeam: Marketplace
author: 1nsS1IgG3WWQ4cA8e2qsw6
slugEN: why-has-my-product-been-wrongly-categorized-on-mercado-livre
locale: en
legacySlug: why-has-my-product-been-wrongly-categorized-on-mercado-livre
---

The VTEX integration with Mercado Livre uses a Mercado Livre API to assign the marketplace category automatically.

That assignment is based on the product **name** and **price**. In some cases, the automatic category is wrong. You can correct it in the Mercado Livre Admin, or follow the steps below.

## Defining the product category

> ❗ This procedure does not update the category of a listing that is already on Mercado Livre. Register the category before integrating the product. If the product is already integrated, delete the existing listing and integrate it again with the category already set.

Mercado Livre infers the category of each product it receives, using information such as the product name. If that inference is wrong, the listing appears in the wrong category.

To fix this, [add a product specification](/en/docs/tutorials/adding-specifications-or-product-fields) named `categoria_meli`. Each value of this specification is a Mercado Livre category ID.

Download the [category ID worksheet](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/en/faq/marketplace/MercadoLivre_CategoriasFixas.xlsx) for the IDs. After you create the specification, open each product record and enter the ID from the worksheet.

This setting is optional. Use it when Mercado Livre's automatic categorization is incorrect.
