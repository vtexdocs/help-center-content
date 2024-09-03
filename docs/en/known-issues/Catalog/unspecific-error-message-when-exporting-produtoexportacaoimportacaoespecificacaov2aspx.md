---
title: 'Unspecific Error Message When Exporting ProdutoExportacaoImportacaoEspecificacaoV2.aspx'
id: 3rtDeX0QppmbXOvuCtC1Lr
status: PUBLISHED
createdAt: 2022-03-22T13:09:32.153Z
updatedAt: 2024-02-16T20:29:49.944Z
publishedAt: 2024-02-16T20:29:49.944Z
firstPublishedAt: 2022-03-22T13:09:32.886Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: unspecific-error-message-when-exporting-produtoexportacaoimportacaoespecificacaov2aspx
locale: en
kiStatus: No Fix
internalReference: 314227
---

## Summary


Currently, the error message of the interface ProdutoExportacaoImportacaoEspecificacaoV2.aspx in the catalog import/export, when a user is trying to export a product specification sheet and there are no products in a given category (but there are specifications registered) do not point out the origin of the problem.

The message shown is a very generic exception:


    Ocorreu algo inesperado: Index was out of range. Must be non-negative and less than the size of the collection. Parameter name: index


It should be something in the lines of:

    "There are no products in this category". 





## Simulation


1) Access the ProdutoExportacaoImportacaoEspecificacaoV2.aspx interface.
2) Export a product specification sheet that has product fields registered but no products in it.




## Workaround


There are no workarounds.

