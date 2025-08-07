---
title: 'Seller Monitoring'
id: 3Gt3Zu7BPFAaTRRehi27ez
status: DRAFT
createdAt: 2023-07-18T19:35:09.684Z
updatedAt: 2023-07-19T13:53:51.474Z
publishedAt: 
firstPublishedAt: 2023-07-18T19:55:46.688Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: seller-monitoring
legacySlug: seller-monitoring
locale: en
subcategoryId: 2xWRgEIlR2ookieEmm4KQu
---

**Seller Monitoring** is a tool of the [Seller Management](https://help.vtex.com/pt/tutorial/gerenciamento-de-sellers--6eEiOISwxuAWJ8w6MtK7iv) module that allows your marketplace to evaluate seller performance. To access this page,go to your VTEX Admin > **Marketplace > Sellers > Seller Management > click the Configure Metric button**. On the home page,you will find the following sections:

- **Operation health**: In this section,you will find all the data from all your sellers, including:
  - Total active sellers
  - Average invoicing time
- **Overview**: Here,you will monitor the metric details with an in-depth view of the infraction that caused the seller to be classified as ⚠ **Acceptable or** ❌ **Unsatisfactory**. You can click the button (paste the button icon) to filter by seller and select only the desired sellers.

When clicking the **View Orders** button,a pop-up will be displayed with the **Order ID**, **Time**, and the **View button.**

|**Field**|**Description**|
| - | - |
|**Order ID**| Code that is automatically generated for each order placed in the marketplace.|
|**Time**| Amount of time that order has been pending invoicing.|
|**View**|Redirect button, which will redirect you to the OMS order details.|

If you are accessing the tool for the first time,you will need to set up the **Invoicing time** metric to set the maximum and preferred time for seller orders to be invoiced. Configuration steps are presented below.

## Configuring metrics

Follow the steps below to configure metrics.

1. In your VTEX Admin, go to **Marketplace > Sellers > Seller Management > Configure metric.**
2. Click **Invoicing Time** and fill in the fields.
3. Click **+ Add Variation** and fill in the required fields to set up variations for a segment or a group of sellers.
4. Click **Save**.

When you click **`Save`**, you will receive notifications in the Admin about the seller performance in your operation. You will also have visibility of the sellers not meeting the expected deadlines.

|**Field ( * required)** |**Description**|
| - | - |
|**Value limit***|Value limit set to measure whether or not the seller is meeting your marketplace's standards.|
|**Segmentation***|You will define which sellers or seller groups will be affected by the value set in **Time limit.**|
|**Preferred limit**|The set time to warn that the seller is reaching the **Time limit.**|

When variation is configured in a metric, the ordering defines the priority. For cases where there is only one segmentation per group and one per exception, there is no conflict, regardless of the order.

## Editing metrics

After being configured, metrics can be edited. Follow the steps below:

1. Click the **Edit metric** button.
2. Change the values in the fields that will be displayed.
3. Click **Save**.
