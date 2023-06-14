---
title: Activating SKUs in bulk
id: 4uMZATlSc0kEYiewWKSwEY
status: PUBLISHED
createdAt: 2018-01-30T12:57:18.128Z
updatedAt: 2022-08-24T21:28:24.858Z
publishedAt: 2022-08-24T21:28:24.858Z
firstPublishedAt: 2018-01-30T14:20:27.722Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slug: activating-skus-in-bulk
legacySlug: activating-bulk-skus
subcategory: pwxWmUu7T222QyuGogs68
---

On the VTEX platform, you can activate SKUs in bulk. There are two scenarios for this:

- Activate all registered SKUs in the store.
- Activate only a group of SKUs registered in the store.

See below the step-by-step for each scenario.

## Activating all SKUs

To activate all SKUs using VTEX Admin, follow the steps below:

1. Access the URL `https://{accountName}.myvtex.com/admin/site/productskuactivateall.aspx`.
2. Click on `Enable all SKUs`.

<div class="alert alert-warning">
<p>SKUs that are registered with invalid data will not have the <em>Activate SKU if possible</em> flag enabled.</p>
<p>In case not all of the SKUs have been flagged with <em>Activate SKU if possible</em>, repeat the process described above.</p>
</div>

## Activate a group of SKUs

To activate only a certain group of SKUs, you can use a spreadsheet extracted from the VTEX Admin, as follows:

1. Download the __Products and SKUs__ spreadsheet from the platform. You can find out more details on this by reading [How to export a product spreadsheet](https://help.vtex.com/en/tutorial/how-to-export-a-product-spreadsheet--2sIroGeqZqaN3NAvaSGwWV).
2. In the __EnableSKUifPossible__ column, change the status of the SKUs you wish to enable. The field should be filled out with `YES` only.
3. Save the changes made to the document.
4. Import the spreadsheet to the platform again. Remember that you import the same way as you export. 

In addition, if the spreadsheet used to import the new data is not the default model used on the platform, you may download a model that matches the format used by VTEX.

## Learn more

- [How to activate an SKU](https://developers.vtex.com/vtex-rest-api/docs/how-to-activate-an-sku)
