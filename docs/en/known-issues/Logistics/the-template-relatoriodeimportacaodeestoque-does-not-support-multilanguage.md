---
title: "The template 'relatorio-de-importacao-de-estoque' does not support multi-language"
id: 5R8b0jnibOQdXupo0hIyts
status: PUBLISHED
createdAt: 2022-05-25T18:25:43.394Z
updatedAt: 2024-02-16T20:24:28.851Z
publishedAt: 2024-02-16T20:24:28.851Z
firstPublishedAt: 2022-05-25T18:25:43.976Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: the-template-relatoriodeimportacaodeestoque-does-not-support-multilanguage
locale: en
kiStatus: No Fix
internalReference: 585906
---

## Summary


Currently, the return message from the inventory import report is in _pt-BR_. So when the import is finished, the email triggered through the template "`relatorio-de-importacao-de-estoque`" has the information in _pt-BR_, not considering the store locale.



## Simulation



1. Access the inventory import (Orders > Inventory & Shipping > Shipping Strategy > Warehouses > Import Items);
2. Attach the file to be imported;
3. At the end of the importing process, the e-mail will be sent with the import result. We can see that the message is not respecting the language of the account:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

"`Importação concluída! Total de itens importados: 6. Total de itens não importados: 0.`"




## Workaround


There is no workaround.

