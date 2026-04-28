---
title: 'Create a cluster of customers'
createdAt: 2019-01-24T20:45:58.065Z
updatedAt: 2026-04-09T00:00:00.000Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: how-can-i-create-cluster-of-customers
locale: en
---

A customer cluster is a way to segment customers into groups. This can be achieved by creating a boolean field in **Master Data** (e.g., `Resellers`, `VIP`, `Employees`). Customers marked as `true` for that field belong to the cluster, while the rest don't. Once created, you can use clusters to target specific customer segments with exclusive promotions, personalized campaigns, or tailored experiences.

> ℹ️ This article covers Master Data v1. Learn more about [Master Data versions](/en/docs/tutorials/master-data#versions-available) and [Master Data v2](https://developers.vtex.com/docs/guides/master-data-v2-basics).

## Creating a customer cluster field

Follow the steps below to create a customer cluster:

1. In the VTEX Admin, go to **Master Data**.
2. Create a new boolean field in the customer (`CL`) data entity with the name of the desired cluster (e.g., `Resellers`, `VIP`, `Wholesale`). See [Creating a field in Master Data](/en/docs/tutorials/how-can-i-create-a-field-in-master-data) for details.
3. Set the field as **searchable** and **filterable**. This is required for the cluster to work correctly with promotions.
4. Add the field to the customer form so it becomes visible when viewing customer data. See [Creating a field in Master Data](/en/docs/tutorials/how-can-i-create-a-field-in-master-data) for details.

## Populating the cluster

After creating the cluster field, you need to set it to `true` for each customer you want to include in the cluster. You can do this using one of the following methods:

- **Spreadsheet import:** Use the [Master Data v1 import feature](/en/docs/tutorials/importing-data-into-master-data-v1) to bulk-assign customers.
- **API:** Update customer records programmatically through the [Master Data API](https://developers.vtex.com/docs/api-reference/masterdata-api).
- **Manual entry:** Edit individual customer records in the CRM customer form.

## Learn more

- [Creating promotions for a cluster of customers](/en/docs/tutorials/creating-promotion-for-a-customer-cluster)
