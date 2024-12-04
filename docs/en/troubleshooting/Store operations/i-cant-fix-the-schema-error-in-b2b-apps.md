---
title: "I can't fix the schema error in B2B apps"
id: WkjJZSnGXCiqmLhg4b0OR
status: PUBLISHED
createdAt: 2024-09-11T18:54:34.611Z
updatedAt: 2024-11-08T19:31:33.438Z
publishedAt: 2024-11-08T19:31:33.438Z
firstPublishedAt: 2024-09-11T19:42:01.055Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: i-cant-fix-the-schema-error-in-b2b-apps
locale: en
legacySlug: i-cant-fix-the-schema-error-in-b2b-apps
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:  B2B, Schema, Master Data
---

In environments using B2B apps, users may get the alert `Schema is invalid` related to schema errors. This type of alert usually occurs due to an incorrect configuration in the CL (customer) entity within Master Data.

The most common situation involves adding required fields to the schema that defines data for the CL entity in Master Data. When a B2B Suite app tries to create a user without providing the required fields, an invalid schema alert is displayed. This problem can occur when accessing the **Organization** page in the VTEX Admin or the **Organization Requests** page in the storefront.

## Solution
Fixing the Schema is invalid alert in B2B apps involves adjusting the configuration of the required fields in Master Data.

### Fixing the Schema is invalid alert in B2B apps
To fix the Schema is invalid alert, follow the steps below to ensure the correct configuration:

<ol>
  <li>In the VTEX Admin, go to <strong>Store Settings > Storefront > Master Data</strong>, or type <strong>Master Data</strong> in the search bar at the top of the page.</li>
  <li>Log in.</li>
  <li>Click <strong>Advanced Settings</strong>.</li>
  <li>Click <strong>Data structure</strong>.</li>
  <li>Click <strong>Data Entities</strong>.</li>
  <li>Click <strong>Edit</strong> in the <strong>CL</strong> row.</li>
  <li>Review all the fields in the list to identify the one where the option is <strong>nullable</strong> and unchecked, and then check it.</li>
</ol>

<div>
  <p>Only the email field should remain with the <strong>"Is nullable"</strong> option unchecked.</p>
</div>

<ol start="8">
  <li>Click <strong>Save</strong>.</li>
  <li>In the list of <strong>Data Entities</strong>, click <strong>Publish</strong>.</li>
</ol>

The image below shows the necessary steps to fix the configuration of the required fields in Master Data, solving the `Schema is invalid` alert.

![B2B Suite - troubleshootingv2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/Store%20operations/i-cant-fix-the-schema-error-in-b2b-apps_1.gif)