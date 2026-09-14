---
title: 'Exporting organization data in B2B Suite'
slug: '2026-08-31-organizations-data-export-in-b2b-suite'
hidden: false
createdAt: 2026-08-31T00:00:00.000Z
updatedAt: 2026-08-31T00:00:00.000Z
contentType: updates
productTeam: B2B
slugEN: 2026-08-31-organizations-data-export-in-b2b-suite
locale: en
announcementSynopsisEN: 'Stores using B2B Suite can now export data on organizations, cost centers, addresses, and users to spreadsheets to audit these configurations in bulk.'
tags:
  - New feature
  - B2B
---

As of August 31, 2026, all stores using [B2B Suite](/docs/tutorials/b2b-suite-overview) in every region can export data on buyer organizations, cost centers, addresses, and users registered in the store to spreadsheets. The feature is in general availability and allows you to audit these configurations in bulk.

## What has changed?

The **B2B Organizations** app now offers the `Export` option in the `New` button on the **Organizations** tab. When starting an export, you choose which types of data you want to download:

- Organizations
- Cost centers
- Addresses
- Users

Data is exported in XLSX format. Each selected data type is processed separately and has its own `Download file` action in the export window.

There's no limit to the number of records per export. The time it takes to generate the files depends on the volume of exported data.

The export feature only allows you to download data. You can't bulk edit data from the exported files.

## Why did we make this change?

Reviewing the configurations of each organization individually in the VTEX Admin isn't feasible for accounts with many buyer organizations. With the export feature, auditing this data in bulk becomes easy.

## What needs to be done?

1. Update the B2B Organizations app to the latest version.
2. Make sure users who will perform the export have access permission to the Organizations tab. Learn more in [Permission management in B2B Suite](/docs/tutorials/permissions-management-in-b2b-suite).

To learn how to export data, check out the article [Exporting organization data](/docs/tutorials/exporting-organization-data).

## Learn more

- [Exporting organization data](/en/docs/tutorials/exporting-organization-data)
- [Configuring bulk data import for organizations and cost centers (B2B Suite)](/docs/tutorials/configuring-bulk-data-import-for-organizations-and-cost-centers)
- [B2B Suite - Overview (B2B Suite)](/docs/tutorials/b2b-suite-overview)
