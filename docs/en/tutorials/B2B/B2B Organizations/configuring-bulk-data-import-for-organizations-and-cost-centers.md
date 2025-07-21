---
title: 'Configuring bulk data import for organizations and cost centers'
id: 41FwcZHF3GctzKcgyKGaoF
status: PUBLISHED
createdAt: 2024-04-25T11:45:15.945Z
updatedAt: 2025-04-28T17:03:12.642Z
publishedAt: 2025-04-28T17:03:12.642Z
firstPublishedAt: 2024-04-29T18:38:46.485Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: configuring-bulk-data-import-for-organizations-and-cost-centers
locale: en
legacySlug: configuring-bulk-data-import-for-organizations-and-cost-centers
subcategoryId: 6bSdupUQgvuXjBL9Igawxl
---

Bulk data import simplifies the process of updating and maintaining information for buyer organizations, their users (members), and cost centers.

<div class = "alert alert-warning">
Bulk import does not update existing organization or cost center information. This feature is intended for creating new records only.
</div>

<div class = "alert alert-warning">
Before configuring the bulk import feature, you should have the <a href="https://developers.vtex.com/docs/apps/vtex.b2b-suite">B2B Suite</a> installed in your store.
</div>

<div class="alert alert-warning">
Cost centers must have unique IDs. The system does not validate duplicate IDs, which may cause the import to fail without displaying an error message.
</div>

Here's how to import data in bulk into the VTEX platform:

1. In the VTEX Admin, go to **Apps > B2B Organizations & Cost Centers > Organizations**, or type **Organizations** in the search bar at the top of the page.

2. In the Organizations tab, click **New**, and then Bulk Import. Click the Upload button and select your **XLSX file**, or drag and drop the file into the dashed area. The imported file must be smaller than 50 MB.

<div class = "alert alert-info">
If necessary, download a template file by clicking VTEX File Template at the bottom of the import window and enter the import data.
</div>

<ol start="3">
	<li>Once the platform has verified the imported file and found no errors, click Import.</li>
</ol>

<div class = "alert alert-info">
If the platform detects any errors, check the section <b>Import errors</b>.
</div>

<ol start="4">
	<li>Once the import process is complete, you can click View Import Details to access the import report.</li>
</ol>

![Importação em massa - EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/B2B/B2B%20Organizations/configuring-bulk-data-import-for-organizations-and-cost-centers_1.gif)

# Import errors

During the import process, the system will check the file for errors. If errors are detected, you will be notified by email and receive a notification on your screen.

To get a detailed overview of the detected problems, follow the steps below:

1. Click View Import Details to access the corresponding error report.
2. Download the spreadsheet by clicking **Download Reviewed XLSX**. This spreadsheet shows the error details.
3. After fixing the errors, you can restart the import process by uploading the corrected file again.

<div class = "alert alert-info">
Make sure you only upload the file with corrections to the previously detected errors to ensure a successful import.
</div>

![Bulk import - EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/B2B/B2B%20Organizations/configuring-bulk-data-import-for-organizations-and-cost-centers_2.gif)

# Bulk Import via API

You can also import information using the [Bulk Import API](https://developers.vtex.com/docs/api-reference/buyer-organizations?endpoint=overview), which allows you to validate and import files, as well as monitor the import progress and result.

