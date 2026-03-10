---
title: 'Recommendations dashboard (beta)'
id: 2QIexbD2FSXBxELUnFtg7g
status: PUBLISHED
createdAt: 2026-02-20T13:01:10.919Z
updatedAt: 2026-02-20T13:01:10.919Z
publishedAt: 2026-02-20T13:01:10.919Z
firstPublishedAt: 2025-06-27T20:41:49.041Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: recommendations-dashboard
legacySlug: recommendations-dashboard
locale: en
subcategoryId: 6WyZwZfn89IsnNFNkTAi8d
---

> ℹ️ This feature is in closed beta and only available to selected clients. If you're a VTEX client and want to adopt this feature for your business, contact our [commercial support](/docs/tracks/commercial-support). Additional fees may apply. If you're not a VTEX client but are interested in this solution, complete the <a href="https://vtex.com/br-pt/contato/">contact form</a>.

The **Recommendations** page provides a dashboard to track and analyze the performance of product recommendation strategies in your store through consolidated metrics or divided by shelves.

To access the dashboard in the VTEX Admin, go to _Storefront > Recommendations_.

## Requirements

- The [Product recommendations](https://help.vtex.com/docs/tutorials/product-recommendations-beta) feature must be enabled in your store.
- [Recommendation strategies](https://help.vtex.com/docs/tutorials/product-recommendations-beta) must be implemented in your store.

## Overview

The top section of the page shows the aggregated performance of all recommendation strategies configured in the store. Data varies based on the [selected period for analysis and comparison](#selecting-an-analysis-period) and [applied filters](#filtering-information).

The solid line represents the currently selected period, while the dotted line represents the comparison period.

![informacoes-gerais-gif](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/dashboard-de-recomendacoes_1.gif)

Click any metric to view its corresponding chart, which shows the metric's evolution over time. You can hover over any point on the chart to view specific data for that date.

The following table describes the dashboard metrics:

| Metric                       | Description                                                                                                                                                                            | Hover information                        |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| **Click-through conversion** | Percentage of clicks on recommendations that resulted in orders.                                                                                                       | Clicks, Orders, Click-through conversion |
| **View rate**                | Percentage of recommendation shelf views relative to total page views. The strategy is generated each time the page loads, and you may view it or not. | Views, Impressions, View rate            |
| **Click-through rate**       | Average click-through rate (CTR) for recommendations.                                                                                               | Clicks, Views, Click-through rate        |
| **Total revenue**            | Total revenue generated from interactions with recommendations.                                                                                                        | Revenue                                  |

## Viewing shelf details

The table shows the performance of each recommendation shelf configured in the store. Data varies based on the [selected period](#selecting-an-analysis-period) and [applied filters](#filtering-information).

![information-shelves](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/dashboard-de-recomendacoes_2.png)

The page displays the following information about each shelf in table form:

| Column                   | Description                                                                                                                                                  |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shelf                    | Recommendation shelf name and its respective strategy and display context (for example, _home_, _pdp_, _cart_, _footer_). |
| View rate                | Percentage of shelf views relative to views of the page where it's embedded.                                                                 |
| Click-through rate       | Percentage of clicks on products in the shelf relative to total views.                                                                       |
| Click-through conversion | Percentage of clicks on the shelf that resulted in orders.                                                                                   |
| Sales                    | Total revenue generated from interactions with the shelf.                                                                                    |

### Details

To view the performance chart for a specific shelf during the selected period, follow the instructions:

1. Click the shelf row or the ellipsis ⋮ menu.
2. Click **View details**.

![view-details](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/dashboard-de-recomendacoes_3.png)

On the details screen, you can also:

- Change the selected period.
- Copy the shelf ID via the ellipsis ⋮ menu in the top right corner of the page.

### Copying a shelf ID

To copy the identifier of a recommendation shelf:

3. In the shelf row or on the shelf details page, click the ellipsis ⋮ menu.
4. Click **Copy ID**.

The ID can be used to:

- Implement the strategy in the storefront.  
  Learn more in the [Recommendation Shelf](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf) component documentation for Store Framework.
- Facilitate strategy identification when troubleshooting or contacting Support.

## Selecting an analysis period

To set the dashboard analysis period, follow the instructions below:

1. Click the defined period in the upper right corner of the page.

2. Choose one of the available options:
   - **Yesterday**
   - **Last 7 days**
   - **Last 28 days**
   - Custom dates in the **Current** and **Comparison** fields

     You can manually adjust the comparison period by entering a different date range in the **Comparison** field. The comparison period must be the same length as the current period, but otherwise you can choose any date range.

     If you don't change it, the comparison period is automatically set to the immediately preceding equivalent period. Example: If you select **Last 7 days** and don’t set a custom comparison range, the report compares the selected 7-day period with the 7 days immediately before it.

3. Click `Apply`.

![select-period](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/dashboard-de-recomendacoes_4.gif)

## Filtering information

You can filter dashboard data by **Status** (_Active_ or _Inactive_) and **Campaign type**:

- Most popular
- Recommended for you
- Similar products
- Bought together
- Best sellers
- Recently viewed
- Recent interactions
- Visually similar products

To apply filters on the dashboard, follow the steps below:

1. Click `Filter` at the top right corner of the page.
2. Click `Status` or `Campaign type`.
3. Check the desired option.
4. Click `Apply`.

You can combine **Status** and **Campaign type** filters.

To remove a filter, repeat steps 1 and 2 and click `Clear`.

![filter-information](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/dashboard-de-recomendacoes_5.gif)

## Learn more

- [Product Recommendations](https://help.vtex.com/docs/tutorials/product-recommendations-beta)
- [Recommendation Shelf (Store Framework)](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf)
- [Integrating product recommendations in headless stores (Beta)](https://developers.vtex.com/docs/guides/integrating-product-recommendations-in-headless-stores)
- [Implementing product recommendations in FastStore](https://developers.vtex.com/docs/guides/implementing-product-recommendations-in-faststore)
