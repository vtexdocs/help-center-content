---
title: '​​FBA order invoices'
id: 3AdnQDyUJUJu7KelalqJLG
status: DRAFT
createdAt: 2025-07-17T22:55:07.302Z
updatedAt: 2025-07-17T23:30:05.048Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: fba-order-invoices
legacySlug: fba-order-invoices
locale: en
subcategoryId: 
---

The **Invoices** feature allows sellers to [filter](#filters) and export invoices for FBA orders using filters to customize searches.  

To access the page, go to the **VTEX Admin > Marketplace > Amazon > Invoices** or type **Invoices** in the search bar. The following page will open:  

![overview-nfe-fba](//images.ctfassets.net/alneenqid6w5/4FqM91rsLMIVmr1xcVuvfx/ea9f1f992466a7da1cd20c27828b6056/overview-nfe-en.jpg)

## Filters

See below the available filters and how they work.

**Period:** Required filter. You can define a date range for extracting invoices by selecting a predefined period or setting a custom start and end date.

<div class=”alert alert-info”>
By default, the period displayed when accessing the page is “Today”.
</div>

**Status:** Optional filter where one or multiple statuses can be selected, including **Issued, Rejected**, and **Canceled.** If no status is selected, all statuses will be considered in the search.

**Type:** Optional filter that allows sellers to choose between **All, Operation type**, or **Invoice type**. When **All** is selected, the search includes all invoice types.
If **Operation type** or **Invoice type** is selected, additional filtering options are displayed :

- If **Operation type** is selected, the options displayed include **Shipment, Excess shipment, Removal, Sales, Customer return, Found stock,** and **Lost stock,** as shown in the image below.

![typeop-nfe-fba](//images.ctfassets.net/alneenqid6w5/1RdIWYPBSZGPBguJOIohxx/e1304f7da923a0affd64ca50d42966f5/typoop-nfe-en.jpg)

- If **Invoice type** is selected, the options displayed include **Shipment, Adjustment shipment, Return, Adjustment return** and **Customer sale,** as shown in the image below.

![type-nfe-fba](//images.ctfassets.net/alneenqid6w5/mLpc2MpvddP67tvsBv07e/a5656571ca63e6337d60cdbc5de9bfb4/typo-nfe-en.jpg)

<div class=”alert alert-info”>
If you don't select a type filter, the system returns invoices of all types by default.
</div>

## Exporting invoices

To export invoices for FBA orders, follow the steps below.

1. In the VTEX Admin, go to **Marketplace > Amazon > Invoices** or type **Invoices** in the search bar.  
2. Select the desired filters.  
3. Click the `Export invoices` button.  

A confirmation message will be displayed indicating that the process has started, and you will soon receive an email with a link to access the invoices.

<div class=”alert alert-warning>
The link to export invoices is valid for three days. If you don't export them before that, you'll need to repeat the process in the Admin to get a new link.
</div>

