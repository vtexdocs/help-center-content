---
title: 'Error when trying to import SKUs via spreadsheet in the VTEX Admin'
id: 1TDF87s7P1UJT1hNDGZsuk
status: PUBLISHED
createdAt: 2024-07-01T15:07:50.982Z
updatedAt: 2025-04-08T23:14:26.707Z
publishedAt: 2025-04-08T23:14:26.707Z
firstPublishedAt: 2024-07-01T18:24:23.096Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l3eEiSz8MpcppCxcnijGz
slugEN: error-when-trying-to-import-skus-via-spreadsheet-in-the-vtex-admin
locale: en
legacySlug: error-when-trying-to-import-skus-via-spreadsheet-in-the-vtex-admin
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Product tags:** Catalog, SKU, Spreadsheet, Import

After setting the category tree and adding [product specifications and SKUs](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#product-specification) to your store, you must complete the values for the specifications you created. In the VTEX Admin, you can do this process manually or using a spreadsheet when [adding products and SKUs](/en/tutorial/adding-sku-specifications-or-fields--tutorials_119).

If you get the message `"An error occurred in the data writing process. Make sure your worksheet data is consistent with the instructions and try again."` when importing SKUs via spreadsheet, this may be due to:

- [Incomplete mandatory SKU specifications.](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP)
- Incorrect file formatting.

## Solution 

You can solve this problem by:

[Changing the file](#solution-changing-the-file): The file must follow specific formatting rules and be saved as an XML spreadsheet in .xls format.

### Solution  - Changing the file

1. In the VTEX Admin, go to **Catalog > Import and Export > All Products > Export / Import** and click the **Import** tab.
2. Click `Click Here` to download the spreadsheet template.
3. Edit the spreadsheet template with the SKUs you want, following all the recommendations on the [Import and Export](https://cosmetics2.myvtex.com/admin/Site/Relatorio_Skus.aspx) page.
4. Save the spreadsheet in `.xls` format.
5. On the same page, under `Upload Import File`, select the file and click `Import`.
6. Check if the action of importing was successful.

If the error persists after changing the file, please contact our [Support](https://support.vtex.com/hc/pt-br/signin?return_to=https%3A%2F%2Fsupport.vtex.com%2Fhc%2Fpt-br%2Frequests) team.

