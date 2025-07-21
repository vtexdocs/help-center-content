---
title: "Inserting multiple specification values not working on legacy catalog"
id: 2MSK9ZIrV3jzdJtHxpYfSO
status: PUBLISHED
createdAt: 2025-06-18T14:04:51.857Z
updatedAt: 2025-06-18T14:04:52.511Z
publishedAt: 2025-06-18T14:04:52.511Z
firstPublishedAt: 2025-06-18T14:04:52.511Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: inserting-multiple-specification-values-not-working-on-legacy-catalog
locale: en
kiStatus: Backlog
internalReference: 1246453
---

## Summary


Currently, there is a function in the legacy catalog experience in which you can add multiple values to a field by using a line break (Example URL path: https://mystore.vtexcommercestable.com.br/admin/site/CampoValorForm.aspx?idCategoria=123&idCampo=456&flagSku=0#).

The UI says you can add multiple values by using a linebreak, such as

"Value A
Value B
Values C"

And this would add 3 distinct values. However, this usability is not currently functional and upon attempting to do so, the UI is refreshed and a "Try this Tip!" message is shown instead (which gives no useful information).

The data, itself, is not saved.


##

## Simulation


1 - Access the field value UI for the legacy catalog (Categories --> Fields (either product or SKU) --> Values --> Add values)

2 - Try adding multiple values via a linebreak, such as the example below:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/inserting-multiple-specification-values-not-working-on-legacy-catalog_1.png)

3 - You will not be able to and a "Try this tip" message will be shown.


##

## Workaround


There are multiple workarounds:

1 - Add these fields one by one using the same UI
2 - Add them via API
3 - Add them via sheet import





