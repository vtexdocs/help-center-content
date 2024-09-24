---
title: 'Why has my product been wrongly categorized on Mercado Livre?'
id: frequentlyAskedQuestions_4462
status: PUBLISHED
createdAt: 2017-04-27T22:24:19.119Z
updatedAt: 2019-12-31T14:23:48.805Z
publishedAt: 2019-12-31T14:23:48.805Z
firstPublishedAt: 2017-04-27T23:02:43.888Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: why-has-my-product-been-wrongly-categorized-on-mercado-livre
locale: en
legacySlug: why-has-my-product-been-wrongly-categorized-on-mercado-livre
---

The integration of the VTEX marketplace with Mercado Livre uses an API supplied by Mercado Livre to define the marketplace category in which the product will appear automatically.

This definition of the category is based on the **name** and the **price** of the product.

But in some cases this automatic definition does not place the product in the right category. To correct this, you have to change it on the Mercado Livre panel, or proceed as follows:

## Defining the product category

>❗ This procedure does not cause the integration to update the category in Mercado Livre. The ideal is to do it before integrating the product. If the product is already integrated, the solution is to delete the existing advertisement and integrate it again, with the category registered previously.

Mercado Livre has a tool which automatically defines the category of each product shipped. This tool uses information such as the name of the product, and if it makes the wrong inference it may categorize the product wrongly. Thus the announcement can appear in the incorrect category.

To fix this, you can [add a product specification](/en/tutorial/creating-a-product-field), **mandatorily** with the `categoria_meli` name. This specification will be able to be given different values, each of them representing a category in Mercado Livre.

The values will be the category IDs. Click [here](//assets.contentful.com/alneenqid6w5/7jBN2dUrjaUOqc4SYCoyaI/54997b8b1df385be79157a5d3c6dd907/MercadoLivre_CategoriasFixas.xlsx) to download a worksheet showing these values.

After registering the specification, you must access each product register and enter the ID as shown in the worksheet.

**This setting is optional**. but it is a useful solution if you find that the Mercado Livre automatic categorization is making mistakes.
