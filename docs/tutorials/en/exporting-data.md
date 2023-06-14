---
title: 'Exporting data from Master Data v1'
id: tutorials_1125
status: PUBLISHED
createdAt: 2017-04-27T21:57:19.601Z
updatedAt: 2023-03-28T23:31:33.420Z
publishedAt: 2023-03-28T23:31:33.420Z
firstPublishedAt: 2017-04-27T23:03:43.216Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: exporting-data
locale: en
legacySlug: exporting-data
subcategory: 2AThnkEZAYbk4G4EIs53rL
---

The mass export of data records in Master Data v1 can be made through the API or importing the worksheet. The purpose of this document is to show the steps required for exporting data by worksheet.

<div class="alert alert-warning">
Exporting data from Master Data is not an immediate operation, and its execution time depends on the amount of data in Master Data. Therefore, in stores with a very large amount of data and a high update frequency, the exported file may become outdated in relation to the new data. If this occurs, the solution may be to export the data again, preferably when there are not many updates taking place (for example, outside of business hours or on weekends).
</div>

## How to export

1. In the VTEX Admin, access **Store Settings** > **Storefront** > **Master Data.**
2. Click on the **Aplicações** tab.
3. Click on **visualizar** in the intended form.
![visualizar button master data](https://images.ctfassets.net/alneenqid6w5/2x1xCx4tEeV6eMPy4VRFpE/0e59f11450a93765e037da555f8d6c09/visualizar_button_export_data.png)
4. The list of the form selected will be uploaded.
5. Click on the **Exportar XLS** button.
6. Select the fields that you want to see in the report.
7. Give the e-mail to which the report will be sent (by default, the system will show the e-mail of the user who logged in, but this can be changed).
8. Click on **Exportar.**

## Exported customer data

Below you can see all fields exported from the **Clientes** tab in the Profile System (CRM) in Master Data v1.

| Field     | Description     | Origin     |
| ---------- | ---------- | ---------- |
| email       | Email address of customer	       | Register       |
| firstName       | First name of customer	       | Register       |
| lastName       | Last name of customer	       | Register       |
| document       | No. of CPF or CNPJ of customer	       | Register       |
| documentType       | Type of document of customer	       | Register       |
| homePhone       | Registered phone no. of customer       | Register       |
| tradeName       | Company (PJ) – Trade name	       | Register       |
| businessPhone       | PJ – Registered phone no.		       | Register       |
| corporateName       | PJ – Company name	       | Register       |
| isCorporate       | PJ- Indicates it is a company	       | Register       |
| stateRegistration       | PJ- State registration	       | Register       |
| isFreeStateRegistration       | PJ- Exempt from state registration	       | Register       |
| corporateDocument       | PJ- CNPJ number	       | Register       |
| isNewsletterOptIn       | Opted to receive Newsletter	       | Register       |
| createdIn       | Date record created	       | Internal       |
| updatedIn       | Date of last update of record in CRM	       | Internal       |
| lastInteractionIn       | Date of last update of record in CRM	       | Internal       |
| userId       | ID of customer in CRM	       | Internal       |
| createdBy       | User who created the record	       | Internal       |
| lastInteractionBy       | User who amended the record	       | Internal       |
| updatedBy       | User who amended the record	       | Internal       |
| rclastsession       | ID of browsing script session	       | Browsing script       |
| rclastsessiondate       | Date of last browsing session saved	       | Browsing script       |
| checkouttag       | List of Checkout steps completed by the customer	       | Browsing script       |
| categoryVisitedTag       | List of last categories visited	       | Browsing script       |
| searchTermTag       | List of last terms searched for on the site	       | Browsing script       |
| visitedProductWithStockOutSkusTag       | List of IDs of last unavailable products visited	       | Browsing script       |
| productVisitedTag       | List of IDs of last products visited	       | Browsing script       |
| brandVisitedTag       | List of last brands visited	       | Browsing script       |
| rclastcart       | URL to restock shopping cart with all the products	       | Browsing script       |
| rclastcartvalue       | Value of last cart	       | Browsing script       |
| carttag       | List of IDs of last SKUs in the cart	       | Browsing script       |

Remember that these fields are the ones shown by default in the Customer form. If the store has customized this company (Customer), other fields may have been created.

