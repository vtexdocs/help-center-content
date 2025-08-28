---
title: 'Understanding the value of approved revenues'
id: tutorials_4322
status: PUBLISHED
createdAt: 2017-04-27T21:51:05.741Z
updatedAt: 2025-02-28T13:48:02.348Z
publishedAt: 2025-02-28T13:48:02.348Z
firstPublishedAt: 2017-04-27T23:11:15.957Z
contentType: tutorial
productTeam: Billing
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: understanding-the-value-of-approved-revenues
legacySlug: understanding-the-value-of-approved-revenues
locale: en
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

For VTEX, every financially approved order has its total amount considered as revenue, including shipping costs and taxes applied to the final product price. All orders that go through this status are included in the invoice, regardless of subsequent cancellation or return.

## 1. Understanding revenue on VTEX
To understand the invoice, you need to understand the definition of revenue. On VTEX, all orders marked as **approved** in the Orders module are considered revenue. This includes:

- Order total including shipping and taxes.
- Canceled orders, including those denied by the anti-fraud solution.
- Purchase tests.

All the above cases use the whole platform infrastructure because this is the stage when a customer completes the purchase. This is why these orders are included in the revenue.

### Identifying when an order is marked as approved
An order is marked as approved when the payment is authorized. The process varies based on the payment method used for the order:

- **Credit card:** The order is marked when the acquirer validates the balance and card information.
- **Pix and boleto (Brazil):** The order is marked only after payment confirmation.

Once an order is marked as approved, VTEX no longer considers changes to the order for billing purposes.

## 2. Exporting the invoice financial report
The financial report includes **all approved orders** in the period corresponding to the invoice, considering only the environment from which it's exported. If you have multiple environments, you must export a report for each one. After export, the report will be sent to your email shortly.

The **Invoices module** generates the financial report. To export it, follow the steps below:

1. In the VTEX Admin, click the initial of your email address at the top right corner.
2. Click **Billing  Invoices**, or type **Invoices** in the search bar.
3. Select the desired invoice.
4. Click `Financial Report`.

> ℹ️ The financial report is static and doesn't change after it's generated. You can access it at any time to view the revenue.

## 3. Analyzing and manipulating the financial report
The financial report is in **CSV** format with several columns detailing each order. To validate the invoice values, apply **filters to the columns** in the report, following the criteria below:

### Filtering and calculating the transacted GMV
Use the `=SUMIF` function in Excel to calculate the total number of orders in different scenarios:

| **Revenue type**                          | **Applied filters**                                               | **Summed column**              | **Description**                                                                                              |
|-------------------------------------------|-------------------------------------------------------------------|--------------------------------|--------------------------------------------------------------------------------------------------------------|
| Certified marketplace                     | `IsCertifiedMarketplace (Q) = True (T)`                           | `Value STR (G)` or `Value (F)` | `Value STR` contains the total of each order in 00,00 format and `Value` contains the total in 00.00 format. |
| External seller                           | `IsExternalSeller (S) = True (T)`                                 | `Value STR (G)` or `Value (F)` | `G` or `F` indicate the column used for the sum.                                                             |
| B2B                                       | `IsB2B (O) = True (T) and IsCertifiedMarketplace (Q) = False (F)` | `Value STR (G)` or `Value (F)` | `O` and `Q` are report columns.                                                                              |
| B2C                                       | `BillingType (O) = B2C`                                           | `Value STR (G)` or `Value (F)` | Filters are applied per column.                                                                              |
| Internal certified seller & child account | `IsInternalCertifiedSellerAndIsChildAccount (AF) = True (T)`      | `Value STR (G)` or `Value (F)` | `T` and `F` indicate boolean values (True or False).                                                         |

These filters allow you to segment the data and ensure that each order category is accounted for correctly on the invoice.

## 4. Compare the data in the financial report with the data in the Orders module
Although the **financial report** is the official source for validating invoices, you can compare this information with the **order report** to get more details about the invoiced orders.

### Exporting the orders report for review
In this section, you will see the process of exporting the generated report, including the formats available for download and how to access it later.

1. In the VTEX Admin, go to **Orders > All Orders** or type **All Orders** in the search bar.
2. Filter by **Authorized date** from the first day of the desired month to the first day of the following month, both at 12:00 AM.
3. Click `Use my time zone` to disregard the time zone.
4. Click `Apply`.
5. Click `Export`.

After downloading the report, use the **OrdersIDs** to compare the information with the financial report.

