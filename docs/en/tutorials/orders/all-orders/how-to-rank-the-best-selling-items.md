---
title: 'How to rank the best selling items'
id: 64LG0uAOysee0YceiSiO66
status: PUBLISHED
createdAt: 2019-01-24T20:45:40.694Z
updatedAt: 2023-03-30T17:21:26.307Z
publishedAt: 2023-03-30T17:21:26.307Z
firstPublishedAt: 2019-01-24T22:09:25.396Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slugEN: how-to-rank-the-best-selling-items
legacySlug: how-to-rank-the-best-selling-items
locale: en
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

<div class="alert alert-warning">
The <strong>Orders</strong> module was not designed as a Business Intelligence (BI) tool. It's usually through the ERP that the store has access to sales reports.
</div>

While the **Orders** module primary goal is to manage the order flow, it is possible to manipulate data from the [order report](https://help.vtex.com/tutorial/planilha-de-pedidos) to extract information that may be useful to your business.

To get a list of SKUs sold in a certain period by order of top sellers, follow the steps below:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.
2. Using the [filters](https://help.vtex.com/en/tutorial/filtrar-todos-pedidos--tutorials_192), choose the period you want information about. 
3. Click the `Export` button in order to [export orders](https://help.vtex.com/en/tutorial/exportacao-de-pedidos-gerenciamento-de-pedidos--tutorials_6417).
4. Open your email and download the link within 72 hours; the link will expire after that period.

Each line corresponds to an SKU purchased in a particular order. In the `Quantity_SKU` column, you have the SKU quantity for that order. And in the `ID_SKU` column, you have the SKU ID.

Therefore, you can use Excel to count how many times each SKU appears (`ID_SKU`), also taking into account cases where the SKU quantity for the same order is greater than 1.

Example: in the case below, the SKU of ID 009 appears twice, both with quantity 1. Therefore, the total quantity for this SKU is 2. The SKU of ID 034 appears only once, but with quantity 2, so its total quantity is 2 as well. The other SKUs (001 and 050) appear only once, with quantity 1. So the total quantity of each of these SKUs is 1.

| Quantity_SKU | ID_SKU |
| ---------- | ---------- |
| 1 | 001 |
| 1 | 009 |
| 2 | 034 |
| 1 | 050 |
| 1 | 009 |
