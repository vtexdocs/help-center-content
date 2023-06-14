---
title: 'Export SKU attachment values does not work correctly for Spanish language operating systems'
id: 75FXMEc3L2kI0JaFjyyZuU
status: PUBLISHED
createdAt: 2022-04-25T20:26:43.281Z
updatedAt: 2022-11-25T21:46:06.902Z
publishedAt: 2022-11-25T21:46:06.902Z
firstPublishedAt: 2022-04-25T20:26:44.068Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: export-sku-attachment-values-does-not-work-correctly-for-spanish-language-operating-systems
kiStatus: Backlog
internalReference: 566393
---

## Summary


When the operating system language is Spanish (Peru), the export of the SKU attachment values generates a spreadsheet with the "Valor" and "Custo" columns incorrectly filled in



## Simulation


- Change your operating system language to Spanish (Peru)
- Export the spreadsheet of service values by URL: `/admin/Site/SkuVincularValorServico.aspx`
- Compare the spreadsheet value with the registered value or with the PDP value



## Workaround


Change operating system language to English/Portuguese to export or change the value in the spreadsheet

