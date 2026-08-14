---
title: 'Checking Master Data usage in the VTEX Admin'
createdAt: '2026-06-23T10:00:00.000Z'
updatedAt: '2026-07-20T10:00:00.000Z'
contentType: tutorial
productTeam: Master Data
slugEN: checking-master-data-usage-in-the-vtex-admin
locale: en
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

The **Master Data usage** dashboard in the VTEX Admin helps you track the volume of documents stored in [Master Data](/docs/tutorials/master-data) [custom entities](/docs/tutorials/master-data#custom-data-entities). These entities are created by your operation. The dashboard doesn't display [native Master Data entities](/docs/tutorials/master-data#master-data-native-entities), which support the platform's default features.

With this dashboard, you can check the total number of documents, see when the data was last updated, and analyze the volume per entity before making decisions about storage or data cleanup.

> ℹ️ The use of custom entities is subject to monthly charges. To understand how VTEX measures the volume of documents for billing, see the [Billing](/en/docs/tutorials/master-data#billing) section of the Master Data article.

## Accessing the dashboard

To open the **Master Data usage** dashboard, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Storefront > Master Data usage**.
2. On the **Master Data usage** page, you can view the information described below.

## Information available in the dashboard

At the top of the page, the summary cards provide an usage overview:

- **Total number of documents**: Total number of documents stored in the store's custom entities.
- **Last updated**: The date the dashboard data was last refreshed. The information is updated weekly.

In the **Entities** section, you'll find the breakdown by entity. The table lists only custom entities and displays two columns:

| Column | Description |
| :--- | :--- |
| **Name** | Data entity name. |
| **Number of documents** | Number of documents stored in the entity. |

Entities are displayed in descending order of document volume, with the highest counts at the top of the list. Use the pagination in the upper-right corner of the table to navigate between pages when there are many entities.

## Learn more

- [Master Data](/en/docs/tutorials/master-data)
- [Custom data entities and billing](/en/docs/tutorials/master-data#custom-data-entities)
