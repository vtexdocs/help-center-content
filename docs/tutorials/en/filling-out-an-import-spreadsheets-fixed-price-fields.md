---
title: 'Filling out an import spreadsheet's fixed price fields'
id: 50RFoH3ruV97FJgeBUCURh
status: PUBLISHED
createdAt: 2019-07-10T13:38:59.441Z
updatedAt: 2021-10-05T17:30:36.162Z
publishedAt: 2021-10-05T17:30:36.162Z
firstPublishedAt: 2019-07-15T13:22:32.402Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5DnIDwto7E6PRpdH1Kpdyu
slug: filling-out-an-import-spreadsheets-fixed-price-fields
legacySlug: filling-out-an-import-spreadsheets-fixed-price-fields
subcategory: 4id9W3RDyw02CasOm2C2iy
---

For a better understanding of what each fixed price spreadsheet field means, read the full description below.

![tabela.preço.fixo](//images.ctfassets.net/alneenqid6w5/6V1yGMgHF0NP5pzZzcSOCF/cc9369da09f81cafaeac1fc73ac61aa1/tabela.pre__o.fixo.png)

- **SKU ID:** the ID of the SKU to which you want to add the fixed price.
- **Trade policy:** the name or ID of the trade policy to which the fixed price will be applied.
- **List price:** suggested retail price for the SKU.
- **Min quantity:** the minimum SKU quantity for the fixed price to be applied.
- **Date from:** the date and time from which the fixed price will be valid, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) format. -
- **Date to:** the date and time from which the fixed price will no longer be valid, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) format.

The next spreadsheet fields are optional, being used only to make SKU identification easier. To view these fields in the spreadsheet, you'll need to select the **Include metadata in exported tables** export option.

- **SKU name (View Only):** SKU's registered name. 
- **Product ID (View Only):** product's ID as registered in the catalog.
- **Product Name (View Only):** product's name to which the SKU is linked. 
- **Ref ID (View Only):** unique reference code, usually created by a store's internal systems, that facilitates the catalog's product organization.
- **EAN (View Only):** SKU's identification code (barcode).

<div class="alert alert-warning">Imported price spreadsheets have a size limit of 1 MB. If your current spreadsheet exceeds that limit, we recommend dividing it into multiple files, <strong>making sure that prices that refer to the same SKU are kept together</strong>.</div>
