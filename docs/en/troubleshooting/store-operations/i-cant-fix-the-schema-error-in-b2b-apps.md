---
title: "I can't fix the schema error in B2B apps"
id: WkjJZSnGXCiqmLhg4b0OR
status: PUBLISHED
createdAt: 2024-09-11T18:54:34.611Z
updatedAt: 2025-08-14T22:02:49.294Z
publishedAt: 2025-08-14T22:02:49.294Z
firstPublishedAt: 2024-09-11T19:42:01.055Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: i-cant-fix-the-schema-error-in-b2b-apps
legacySlug: i-cant-fix-the-schema-error-in-b2b-apps
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - B2B
  - Schema
  - Master Data
---

In environments using B2B apps, users may get the alert `Schema is invalid` related to schema errors. This type of alert usually occurs due to an incorrect configuration in the CL (customer) entity within Master Data.

The most common situation involves adding required fields to the schema that defines data for the CL entity in Master Data. When a B2B Suite app tries to create a user without providing the required fields, an invalid schema alert is displayed. This problem can occur when accessing the **Organization** page in the VTEX Admin or the **Organization Requests** page in the storefront.

## Solution
Fixing the Schema is invalid alert in B2B apps involves adjusting the configuration of the required fields in Master Data.

### Fixing the Schema is invalid alert in B2B apps
To fix the Schema is invalid alert, follow the steps below to ensure the correct configuration:

1. In the VTEX Admin, go to **Store Settings > Storefront > Master Data**, or type **Master Data** in the search bar at the top of the page.  
2. Log in.  
3. Click **Advanced Settings**.  
4. Click **Data structure**.  
5. Click **Data Entities**.  
6. Click **Edit** in the **CL** row.  
7. Review all the fields in the list to identify the one where the option is **nullable** and unchecked, and then check it.  

   > ⚠️ Only the email field should remain with the **Is nullable** option unchecked.

8. Click **Save**.  
9. In the list of **Data Entities**, click **Publish**.

The image below shows the necessary steps to fix the configuration of the required fields in Master Data, solving the `Schema is invalid` alert.

![B2B Suite - troubleshootingv2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/store-operations/i-cant-fix-the-schema-error-in-b2b-apps_1.gif)
