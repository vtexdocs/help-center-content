---
title: 'Why does Mercado Livre return attribution errors after mapping?'
excerpt: "Each Mercado Livre category requires specific attributes and rejects others. Map only the attributes that category accepts."
id: frequentlyAskedQuestions_3800
status: PUBLISHED
createdAt: 2017-04-27T22:24:49.012Z
updatedAt: 2019-12-31T14:25:05.554Z
publishedAt: 2019-12-31T14:25:05.554Z
firstPublishedAt: 2017-04-27T23:02:38.024Z
contentType: frequentlyAskedQuestion
productTeam: Marketplace
author: authors_24
slugEN: why-does-mercado-livre-return-attribution-errors-after-mapping
locale: en
legacySlug: why-does-mercado-livre-return-attribution-errors-after-mapping
---

Each product category on Mercado Livre requires a different set of attributes. For adult footwear, for example, the mapping worksheet may need the codes for **Cor principal** (primary color) and **Tamanho de calçado para adulto** (adult shoe size).

Each category also rejects attributes that do not apply. For the same adult footwear, you cannot send a code for **Tamanho de cinto** (belt size).

VTEX cannot list the required attributes for every category, because Mercado Livre defines those rules. Typical attributes include primary color, secondary color, adult shoe size, belt size, and baby clothing size. Map only the attributes that apply to the product.

If you send an invalid attribute (for example, a belt size code on a pair of shoes), Integrations returns an error like this:

![Shot1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketplace/why-does-mercado-livre-return-attribution-errors-after-mapping_1.jpg)

The example above includes two errors in the same message.

The first error means an attribute whose code starts with `113000` is required for the selected category and is missing from the mapping worksheet:

![Shot2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketplace/why-does-mercado-livre-return-attribution-errors-after-mapping_2.png)

The second error means the attribute whose code starts with `63000`, in the last column of the worksheet above, is not valid for the selected category.

## How to identify the missing or invalid attribute

Codes for each variation of an attribute share the same prefix. For example, all **Cor principal** (primary color) codes start with `33000` and follow this format: `33000_Amarelo_52007`. **Cor secundária** (secondary color) codes start with `43000`. Examples: `43000_Azul claro_52093` and `43000_Rosa_52058`.

To identify the attribute in an error message, use the starting number of the Mercado Livre code. Download the reference worksheet for your country:

- [Brazil](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/en/faq/marketplace/Brasil.zip)
- [Argentina](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/en/faq/marketplace/Argentina.rar)
- [Colombia](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/en/faq/marketplace/Colombia.rar)
- [Mexico](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/en/faq/marketplace/Mexico.rar)
