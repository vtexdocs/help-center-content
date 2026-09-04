---
title: 'Exporting organization data (B2B Suite)'
createdAt: '2026-08-10T12:00:00.000Z'
updatedAt: '2026-08-10T12:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: exporting-organizations-data
legacySlug: exporting-organizations-data
locale: en
subcategoryId: 6bSdupUQgvuXjBL9Igawxl
---

> ⚠️ This documentation applies only to B2B Suite.

Data export allows you to download spreadsheets with information about buyer organizations, cost centers, addresses, and users registered in your store. This allows you to audit these configurations in bulk without reviewing each organization individually in the VTEX Admin. Exporting is useful, for example, to verify that the data was registered correctly after a [bulk import](/docs/tutorials/configuring-bulk-data-import-for-organizations-and-cost-centers).

## Before you begin

To export, you need to have the [B2B Organizations](https://developers.vtex.com/docs/apps/vtex.b2b-organizations) app updated to the latest version.

> ⚠️ Only users with access permission to the **Organizations** menu can export data. Learn more in [Permission management in B2B Suite](/docs/tutorials/permissions-management-in-b2b-suite).

## Exported data

When you start an export, you can choose which of the four data types you want to download:

- **Organizations:** Buyer organizations registered in the store and their configurations, including status, collections, price tables, payment conditions, and sales channels. Learn more in [Managing B2B organizations](/docs/tutorials/managing-b2b-organizations).

- **Cost centers:** Divisions of each buyer organization. Learn more in [B2B cost center management](/docs/tutorials/b2b-cost-center-management).

- **Users:** People authorized to access the platform on behalf of an organization. Learn more in [Managing users in B2B organizations](/docs/tutorials/managing-users-in-b2b-organizations).

- **Addresses:** Shipping addresses associated with the cost centers.

The system exports the data in XLSX format and processes each selected data type separately, making the `Download file` action available in the export window.

There's no limit to the number of records per export. The time it takes to generate the files depends on the volume of exported data.

## Instructions

Below, you'll find an overview of the steps to export data:

Exporting data
Tracking and downloading the export

### Exporting data

To export data about organizations, cost centers, addresses, and users, follow the steps below:

1. In the VTEX Admin, go to **Apps > B2B Organizations and Cost Centers > Organizations**, or type **Organizations** in the search bar at the top of the page.
2. Click the **Organizations** tab.
3. Click `New` and select the `Export` option.
4. Check the boxes for the data types you want to export: `Organizations`, `Cost centers`, `Users`, and `Addresses`. To export all data types, check `Select all`.
5. Click `Export`.

### Tracking and downloading the export

After starting the export, the window displays a table with a row for each selected data type, showing the generation progress, status, and available actions.

Each row in the table can display one of the following statuses:

- **Generating...**: The system is generating the file.
- **Ready**: The file is ready, and the `Download file` action becomes available in the same row.

When the system completes the export, the VTEX Admin displays the message **Export completed. Download started**. To save the file for a data type, click `Download file` in the corresponding row. The system also sends an email with the exported files, so you don't need to keep the Admin tab open to get them.

## Limitations

- This form of data export is available only for stores using B2B Suite.
- The export feature only allows you to download data. To create new records in bulk, use the [bulk import of data about organizations and cost centers](/docs/tutorials/configuring-bulk-data-import-for-organizations-and-cost-centers).

## Learn more

In this tutorial, you learned how to export data about organizations, cost centers, users, and addresses in B2B Suite. To continue configuring your store, see the following articles:

- [Managing B2B organizations (B2B Suite)](/docs/tutorials/managing-b2b-organizations)
- [Configuring bulk data import for organizations and cost centers (B2B Suite)](/docs/tutorials/configuring-bulk-data-import-for-organizations-and-cost-centers)
- [B2B cost center management (B2B Suite)](/docs/tutorials/b2b-cost-center-management)
- [Managing users in B2B organizations (B2B Suite)](/docs/tutorials/managing-users-in-b2b-organizations)
- [Permissions management in B2B Suite (B2B Suite)](/docs/tutorials/permissions-management-in-b2b-suite)
- [B2B Suite - Overview (B2B Suite)](/docs/tutorials/b2b-suite-overview)
