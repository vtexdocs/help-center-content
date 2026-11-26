---
title: 'Recommendations reports (Beta)'
createdAt: 2026-09-17T13:00:00.000Z
updatedAt: 2026-09-17T13:00:00.000Z
contentType: tutorial
productTeam: Intelligent Search
slugEN: recommendations-reports
locale: en
---

> ℹ️ This feature is in closed beta and only available to selected clients. If you're a VTEX client and want to adopt this feature for your business, contact our [Commercial Support](https://help.vtex.com/en/docs/tracks/commercial-support). Additional fees may apply. If you're not a VTEX client but are interested in this solution, complete the [contact form](https://www.vtex.com/en-us/contact-us/).

In the VTEX Admin, the **Reports** tab within **Recommendations** displays a list of performance reports for the store's product recommendation strategies. Unlike the [recommendations dashboard](https://help.vtex.com/en/docs/tutorials/recommendations-dashboard), which displays real-time, filterable data, reports provide static snapshots of data for a specific period and can be downloaded.

The feature is available to all clients who already have [Product recommendations](https://help.vtex.com/en/docs/tutorials/product-recommendations-beta) activated in their store.

To access it in the VTEX Admin, go to _Storefront > Recommendations_ and click the **Reports** tab.

![recommendation-reports](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/relatorios-de-recomendacoes_1.png)

## Requirements

- Have [Product recommendations](https://help.vtex.com/en/docs/tutorials/product-recommendations-beta) activated in your store.
- Have [recommendation strategies](https://help.vtex.com/en/docs/tutorials/product-recommendations-beta#recommendation-strategies) implemented in your store.
- Have a [role](https://help.vtex.com/en/docs/tutorials/roles) with the following [License Manager resources](https://help.vtex.com/en/docs/tutorials/license-manager-resources):

  | Resource name                | Resource key (resource_key)  | Description                                                                    |
  | :--------------------------- | :--------------------------- | :----------------------------------------------------------------------------- |
  | View Recommendations         | `ViewRecommendations`        | Allows viewing the recommendation list in the Admin.                           |
  | View Recommendations metrics | `ViewRecommendationsMetrics` | Allows viewing recommendation metrics in the Admin, including the Reports tab. |

## Report frequency

Reports can be generated in three ways:

- **Weekly**: Automatically generated every Monday, covering the previous 7 days.
- **Monthly**: Generated automatically on the 1st of each month, covering the previous month.
- **On demand**: Generated manually at any time, for any custom period.

In the **Reports** tab, you can perform the following actions:

- [Create reports](#creating-reports)
- [Download reports](#downloading-reports)

The tab displays the following information in a table:

| Column           | Description                                                                                                                                                      |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Period**       | Date range covered by the report.                                                                                                                                |
| **Created date** | When the report was generated.                                                                                                                                   |
| **Status**       | Report status: <ul><li>**Creating:** The report is being generated.</li><li>**Available:** Ready for download.</li><li>**Viewed:** Already downloaded.</li></ul> |

If the store doesn't have any reports generated yet, the tab displays the message **No reports yet**, along with the button to [create a report](#creating-reports).

## Creating reports

You can create a report for a custom period.

1. In the VTEX Admin, go to **Storefront > Recommendations**, or type **Recommendations** in the search bar at the top of the page.
2. Click the **Reports** tab.
3. Click **Create report**.
4. In the **Create report** modal, select one of the predefined periods (**Yesterday**, **Last 7 days**, or **Last 28 days**) or define a custom range in **Start date**.

   ![create-report](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/relatorios-de-recomendacoes_2.png)

5. Click `Create`.

The new report is displayed in the list with the **Creating** status while it's being processed.

## Downloading reports

You can download any report with **Available** or **Viewed** status.

In the row of the desired report, click the download icon <i class="fas fa-download"></i> to save it to your device.

## Email notifications

When a scheduled report (weekly or monthly) is generated, VTEX sends an email notification to the addresses configured for the account, so you don't need to log in to the VTEX Admin to check whether a new report is available.

## Report structure

The report is generated in PDF. The language, currency, and email notification recipients are defined during feature activation in the store. To change these preferences, contact [Commercial Support](https://help.vtex.com/en/docs/tracks/commercial-support).

The report includes the following sections:

### Header

Identifies the store and the reporting period, followed by a summary of influenced revenue, number of orders, views, and total clicks generated by recommendation shelves during that period.

### Consolidated metrics

| Metric                 | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| Revenue via shelves    | Revenue attributed to recommended items.             |
| Orders via shelves     | Orders influenced by recommendations.                |
| Views                  | Recommended products viewed.                         |
| Store total GMV        | Total store revenue (own channel).                   |
| Store total orders     | Orders completed in the period.                      |
| View rate              | Average view rate across all recommendation shelves. |
| Share of store revenue | Attributed revenue as a share of the store GMV.      |
| Share of store orders  | Influenced orders as a share of total store orders.  |
| Clicks                 | Clicks on recommended products.                      |
| Store average ticket   | Average order amount in the store.                   |
| Click conversion       | Average click conversion across all shelves.         |

### Revenue by shelf

Chart showing each shelf's share of the total revenue generated by recommendations during the period.

### Shelf performance

Table with the performance of each shelf in the period: view rate, click-through rate, conversion per click, and sales.

### Top 5 products per shelf

For each shelf, the top 5 best-performing products in the period, with revenue and number of purchases.

### Star product of the period

Highlights the product that appears among the top sellers on at least two shelves during the period, including total revenue, number of purchases, and the number of shelves it appears on. This section is only displayed when a product meets this criterion.

### Insights and recommendations

Automatically generated cards, each with a brief analysis and a suggested next step. Cards are labeled as **Highlight**, **Attention**, or **Opportunity**.

Examples of analyses include identifying the shelf that generates the most revenue, the one with the best conversion per click, and those with many views but few clicks.

### Footer

Indicates the period covered, the report generation date, and a confidentiality notice.

## Learn more

- [Product recommendations](https://help.vtex.com/en/docs/tutorials/product-recommendations-beta)
- [Recommendations dashboard (Beta)](https://help.vtex.com/en/docs/tutorials/recommendations-dashboard)
- [Creating recommendation lists (Beta)](https://help.vtex.com/en/docs/tutorials/creating-recommendation-lists)
