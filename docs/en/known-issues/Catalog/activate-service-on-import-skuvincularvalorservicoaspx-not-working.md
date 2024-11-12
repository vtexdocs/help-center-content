---
title: 'Activate Service on Import (SkuVincularValorServico.aspx) not Working'
id: 1gM3bYz0IX4ozLrIkWIicb
status: PUBLISHED
createdAt: 2022-02-25T14:56:50.052Z
updatedAt: 2024-05-10T14:24:13.156Z
publishedAt: 2024-05-10T14:24:13.156Z
firstPublishedAt: 2022-02-25T14:56:50.569Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: activate-service-on-import-skuvincularvalorservicoaspx-not-working
locale: en
kiStatus: Backlog
internalReference: 339894
---

## Summary


Currently, in the SkuVincularValorServico.aspx import usability, when trying to change previously exiting services from inactive from active, the values are not changed. The UI prompts that values were changed but nothing actually really happens.

(The opposite is not true, changing from active to inactive works).


##

## Simulation


1) Go to the UI https://account.myvtex.com/admin/Site/SkuVincularValorServico.aspx interchanging the rows in the attached sheet from 0 to 1 and vice versa:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

2) Check the final effects on the SKU you've changed values of:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

You will be able to set them as inactive, but not as active. The import UI prompts that changes were made:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

No values are actually changed on the given account's database.


##

## Workaround


Using the UI to make changes of inactive -->> active and/or our service APIs:
https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-sku-service




