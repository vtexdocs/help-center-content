---
title: 'Why does Mercado Livre return attribution errors after mapping?'
id: frequentlyAskedQuestions_3800
status: PUBLISHED
createdAt: 2017-04-27T22:24:49.012Z
updatedAt: 2019-12-31T14:25:05.554Z
publishedAt: 2019-12-31T14:25:05.554Z
firstPublishedAt: 2017-04-27T23:02:38.024Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_24
slugEN: why-does-mercado-livre-return-attribution-errors-after-mapping
locale: en
legacySlug: why-does-mercado-livre-return-attribution-errors-after-mapping
---

Each product category on Mercado Livre requires different attributes. For example, for adult footwear, it may be necessary to include in the mapping worksheet the codes for the attributes **Cor principal** (primary color) and **Tamanho de calçado para adulto** (size of adult footwear).

On the other hand, for each of these product categories certain attributes are not accepted. For the same adult footwear, for example, you cannot attribute a code for **Tamanho de cinto** (belt size).

VTEX cannot say exactly which attributes have to be entered for each category, as these criteria are set by Mercado Livre itself. 

However, these attributes are quite clear (Primary color, Secondary color, Size of adult footwear, Belt size, Size of baby clothes). The appropriate attributes must be selected for each product.

If any of these attributes is wrongly entered (for example, if you attribute a code for belt size to a pair of shoes), the Integrations will return an error in the following format:

![Shot1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/channels/why-does-mercado-livre-return-attribution-errors-after-mapping_1.jpg)

In this case, we have examples of two errors in the same message.

he first indicates that an attribute whose code begins with the number `113000` is needed for the category selected and was not entered in the mapping worksheet. Look at the following worksheet:

![Shot2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/channels/why-does-mercado-livre-return-attribution-errors-after-mapping_2.png)

The second error indicates that the attribute with a code beginning with the number `63000`, entered in the final column of the above worksheet, is not valid for the category selected.

## How to identify the attribute that is missing or invalid

The codes for each variation of an attribute start with the same number. For example, all the codes for **Cor principal** (primary color) start with 33000 and are in the following format: 33000_Amarelo_52007. The codes for **Cor secundária** (secondary color) start with 43000. Examples: 43000_Azul claro_52093 and 43000_Rosa_52058.

To identify the attribute indicated in an error message, see the code start number defined by the Mercado Livre. Click on the name of your country to download the reference worksheet:

- [Brazil](https://raw.githubusercontent.com/vtexdocs/help-center-content/files-migration-script/docs/en/faq/channels/Brasil.zip)
- [Argentina](https://raw.githubusercontent.com/vtexdocs/help-center-content/files-migration-script/docs/en/faq/channels/Argentina.rar)
- [Colombia](https://raw.githubusercontent.com/vtexdocs/help-center-content/files-migration-script/docs/en/faq/channels/Colombia.rar)
- [México](https://raw.githubusercontent.com/vtexdocs/help-center-content/files-migration-script/docs/en/faq/channels/Mexico.rar)
