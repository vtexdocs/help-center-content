---
title: 'FBA order invoices'
id: 5ok71vWueJ22JhXo1egx2y
status: PUBLISHED
createdAt: 2025-07-29T13:36:40.476Z
updatedAt: 2025-07-29T14:05:41.349Z
publishedAt: 2025-07-29T14:05:41.349Z
firstPublishedAt: 2025-07-29T14:03:04.089Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: fba-order-invoices
legacySlug: fba-order-invoices
locale: en
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

The **Invoices** feature allows sellers to [filter](#filters) and export invoices for FBA orders using filters to customize searches.  

To access the page, go to the **VTEX Admin > Marketplace > Amazon > Invoices** or type **Invoices** in the search bar. The following page will open:  

![Overview Invoices Amazon](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/integration-settings/fba-order-invoices_1.jpg)

## Filters

See below the available filters and how they work.

**Period:** Required filter. You can define a date range for extracting invoices by selecting a predefined period or setting a custom start and end date.  

> ℹ️ By default, the period displayed when accessing the page is “Today”.  

**Status:** Optional filter where one or multiple statuses can be selected, including **Issued, Rejected**, and **Canceled.** If no status is selected, all statuses will be considered in the search.

**Type:** Optional filter that allows sellers to choose between All, **Operation type**, or **Invoice type**. When **All** is selected, the search includes all invoice types. 
If **Operation type** or **Invoice type** is selected, additional filtering options are displayed :  

- If **Operation type** is selected, the options displayed include **Shipment, Excess shipment, Removal, Sales, Customer return, Found stock,** and **Lost stock,** as shown in the image below.  

![Operation type NFe](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/integration-settings/fba-order-invoices_2.jpg)

- If **Invoice type** is selected, the options displayed include **Shipment, Adjustment shipment, Return, Adjustment return** and **Customer sale,** as shown in the image below.  

![NFe type](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/integration-settings/fba-order-invoices_3.jpg)

> ℹ️ If you don't select a type filter, the system returns invoices of all types by default.

## Exporting invoices

To export invoices for FBA orders, follow the steps below.

1. In the VTEX Admin, go to **Marketplace > Amazon > Invoices** or type  **Invoices** in the search bar.  
2. Select the desired filters.  
3. Click the `Export invoices` button.  

A confirmation message will be displayed indicating that the process has started, and you will soon receive an email with a link to access the invoices.  

> ⚠️ The link to export invoices is valid for three days. If you don't export them before that, you'll need to repeat the process in the Admin to get a new link.

