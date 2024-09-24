---
title: 'Configuring bulk data import for organizations and cost centers'
id: 41FwcZHF3GctzKcgyKGaoF
status: PUBLISHED
createdAt: 2024-04-25T11:45:15.945Z
updatedAt: 2024-05-21T14:04:56.238Z
publishedAt: 2024-05-21T14:04:56.238Z
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

>ℹ️ Before configuring the bulk import feature, you should have the [B2B Suite](https://developers.vtex.com/docs/apps/vtex.b2b-suite) installed in your store.

Here's how to import data in bulk into the VTEX platform:

1. In the VTEX Admin, go to **Apps > B2B Organizations & Cost Centers > Organizations**, or type **Organizations** in the search bar at the top of the page.

2. In the Organizations tab, click **New**, and then Bulk Import. Click the Upload button and select your **XLSX file**, or drag and drop the file into the dashed area. The imported file must be smaller than 50 MB.

>ℹ️ If necessary, download a template file by clicking VTEX File Template at the bottom of the import window and enter the import data.

<ol start="3">
	<li>Once the platform has verified the imported file and found no errors, click Import.</li>
</ol>

>ℹ️ If the platform detects any errors, check the section **Import errors**.

<ol start="4">
	<li>Once the import process is complete, you can click View Import Details to access the import report.</li>
</ol>

![Importação em massa - EN](https://images.ctfassets.net/alneenqid6w5/3sWvUytkkonIe01tnvXwpK/255b9bf809653b7f66bdeff7e22c0c49/Bulk_import_vers_o_original-gif-EN.gif)

# Import errors

During the import process, the system will check the file for errors. If errors are detected, you will be notified by email and receive a notification on your screen.

To get a detailed overview of the detected problems, follow the steps below:

1. Click View Import Details to access the corresponding error report.
2. Download the spreadsheet by clicking **Download Reviewed XLSX**. This spreadsheet shows the error details.
3. After fixing the errors, you can restart the import process by uploading the corrected file again.

>ℹ️ Make sure you only upload the file with corrections to the previously detected errors to ensure a successful import.

![Bulk import - EN](//images.ctfassets.net/alneenqid6w5/xXZgwvWu4ngsY9D9hjQsO/f15af7d4180b8949ef33c25c761122a8/Bulk_import_vers_o_error-gif-EN.gif)

# Bulk Import via API

You can also import information using the [Bulk Import API](https://developers.vtex.com/docs/api-reference/buyer-organizations?endpoint=overview), which allows you to validate and import files, as well as monitor the import progress and result.

