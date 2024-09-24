---
title: 'Managing Customer Credit invoices'
id: vtf5UVQcmlb0kHBZYYmM3
status: PUBLISHED
createdAt: 2024-02-07T21:31:46.690Z
updatedAt: 2024-02-09T12:30:53.684Z
publishedAt: 2024-02-09T12:30:53.684Z
firstPublishedAt: 2024-02-07T21:44:30.527Z
contentType: trackArticle
productTeam: Financial
slugEN: managing-customer-credit-invoices
locale: en
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugEN: customer-credit-getting-started
---

The __Invoices__ screen in the VTEX Admin (__Apps > Customer Credit > Invoices__), allows you to access information on all invoices issued by customers registered with Customer Credit in your store. Through this functionality, you can perform the following actions:

- [Filter invoice view](#invoice-filter) 
- [Check details of each invoice](#invoice-details)
- [Settle invoices](#settle-invoices)
<br>
<br>
![Invoices_EN](//images.ctfassets.net/alneenqid6w5/6otbbLNAHn0hHmKvkYmrj2/5f6f07bf3e43e11762d057b41b2277bb/Invoices_EN.JPG)

## Invoice filter

To select the list of invoices to be displayed, you can click on one of the four statuses (Open, Paid, Canceled or Expired), or enter the identification number of the order for which the invoice was issued.

>⚠️ In Customer Credit, all invoices are created with the status **Open**.

## Invoice details

When clicking on a specific invoice, the __Invoice Summary__ page displays the following information: value of the invoice issued, due date, payment link (if there is one), identification of the account where it was issued, identification of the order and observations (specific messages about the invoice).

## Settle invoices

To facilitate the payment process for a invoice, it is possible to provide a payment link directly to the customer. This link can be added to the title in two ways:

- Use the `IMPORT` function to insert data from a .csv spreadsheet.
- Via [PUT Change Invoice](https://developers.vtex.com/docs/api-reference/customer-credit-api#put-/api/creditcontrol/accounts/-creditAccountId-/invoices/-invoiceId-) endpoint of the Customer Credit API.

>ℹ️ After carrying out one of the procedures above, the customer will have access to the **PAY** button that is available in their customer area on the store's website (**My Account > My Credits**).

### Individual settlement

After confirming payment for a invoice, you can settle it as follows:

1. In the VTEX Admin, access __Apps > Customer Credit > Invoices__, or type __Invoices__ in the search bar at the top of the page.
2. Click on the desired invoice.
3. On the __Invoice Summary__ page, click on __Mark as Paid__.
4. On the __Invoices__ page, confirm that the invoice status is indicated as __Paid__.

### Bulk settlement

If you want to confirm the payment of several invoices at the same time, follow the steps below:

1. In the VTEX Admin, access __Apps > Customer Credit > Invoices__, or type __Invoices__ in the search bar at the top of the page.
2. Click on the `EXPORT` button.
3. Access the downloaded .csv spreadsheet and modify the information in the `Status` field to `Paid` in the lines corresponding to the invoices you want to settle. Save the spreadsheet.
4. Click on the `IMPORT` button.
5. Select or insert the .csv spreadsheet in the space __Drop your CSV here or choose a file__.
6. Click on the `IMPORT FILE` button.
7. After the spreadsheet is loaded into Admin, check on the __Invoices__ screen if the updated invoices are described as __Paid__.

### API settlement

You can also settle a invoice through the [PUT - Change invoice](https://developers.vtex.com/docs/api-reference/customer-credit-api#put-/api/creditcontrol/accounts/-creditAccountId-/invoices/-invoiceId-). For more information about Customer Credit API endpoints, visit [Customer Credit API - Overview](https://developers.vtex.com/docs/api-reference/customer-credit-api#overview).

