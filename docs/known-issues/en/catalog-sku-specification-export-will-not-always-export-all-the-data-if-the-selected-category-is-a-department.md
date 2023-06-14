---
title: 'Catalog SKU Specification Export will not always export all the data if the selected category is a department'
id: 1FrmIfWuDpbWSMvAnLuuho
status: PUBLISHED
createdAt: 2023-05-30T15:36:48.918Z
updatedAt: 2023-05-30T15:36:49.503Z
publishedAt: 2023-05-30T15:36:49.503Z
firstPublishedAt: 2023-05-30T15:36:49.503Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: catalog-sku-specification-export-will-not-always-export-all-the-data-if-the-selected-category-is-a-department
kiStatus: Backlog
internalReference: 465445
---

## Summary


Catalog SKU Specification Export, will not always export all the data if selected the department and not the innermost subcategory.



##

## Simulation


- Go to `admin/Site/ProdutoExportacaoImportacaoEspecificacaoSKUV2.aspx`
- Try to export the specifications from a department with lots of data;
- Export the same data but from all the innermost categories;
- Check data exported, the department may not include all the information.


##

## Workaround


- Always select the innermost category from the desired department, as described on our UI.





