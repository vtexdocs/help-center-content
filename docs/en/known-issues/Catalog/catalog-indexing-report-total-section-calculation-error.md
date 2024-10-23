---
title: "Catalog Indexing Report 'Total' Section Calculation Error"
id: 6TJXux104P2c0mruo5vlEn
status: PUBLISHED
createdAt: 2022-02-25T11:39:42.098Z
updatedAt: 2024-02-16T20:26:35.750Z
publishedAt: 2024-02-16T20:26:35.750Z
firstPublishedAt: 2022-02-25T11:39:42.485Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-indexing-report-total-section-calculation-error
locale: en
kiStatus: No Fix
internalReference: 499450
---

## Summary


Currently, in the catalog indexing report (RelatorioIndexacao.aspx), the "Total Indexed" section is considering all catalog products when reaching 100% of the metric, not subtracting not indexed products if needed.







## Simulation


1) Check the total products indexed on the "Total" section of this UI

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/catalog-indexing-report-total-section-calculation-error_1.png)​

2) Then check the "Products that were not indexed"

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/catalog-indexing-report-total-section-calculation-error_2.png)​

3) Then go to the "Produtos" catalog section, in which you'll see how many total products your store has:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/catalog-indexing-report-total-section-calculation-error_3.png)​

The math does not add up, the "Total" section should be 71 in the example above, since there are 2 products that are also not indexed.








## Workaround


n/a

