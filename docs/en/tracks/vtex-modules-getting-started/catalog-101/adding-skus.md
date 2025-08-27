---
title: 'Adding SKUs'
id: 17PxekVPmVYI4c3OCQ0ddJ
status: PUBLISHED
createdAt: 2019-05-20T13:57:45.289Z
updatedAt: 2025-06-13T18:27:58.802Z
publishedAt: 2025-06-13T18:27:58.802Z
firstPublishedAt: 2019-06-25T15:06:05.521Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: adding-skus
locale: en
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugEN: catalog-101
order: 10
---

There are different ways to add SKUs: 

- VTEX Admin
- Importing spreadsheet
- API

> ℹ️ If you want to import SKUs via [backend integrations](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu) with an ERP, check out the [Back office integration guide (ERP/PIM/WMS)](https://developers.vtex.com/docs/guides/erp-integration-guide).

## VTEX Admin

To add a new SKU to the store catalog, check the article [Adding or editing SKUs](https://help.vtex.com/en/tutorial/adding-or-editing-skus--4ryZ6J45kwn3jDiQBxGiiN).

## Spreadsheet

To add SKUs using a spreadsheet, you first need to export the default VTEX spreadsheet to, later on, import the spreadsheet with your information.

### Export default spreadsheet

You can do this by following the steps below:

1.	Click on **Catalog**.
2.	Click on **Import and Export**.
3.	In the first tab, called **All products**, click on **Export / Import**.
4.	In __Export__, in the green box, add the emails to which to export the spreadsheet. Next, click on the blue `Export to Excel` button. 
5. After receiving the spreadsheet, fill it in with the SKU data. For more, access our article on [how to fill out the SKU and product spreadsheet](https://help.vtex.com/en/tutorial/fill-in-import-spreadsheet-fields--4nYhx63Q5yokQWaMguaIgI).

### Import spreadsheet

After filling in the spreadsheet, follow these steps in order to import your SKUs:

1.	Click on **Catalog**.
2.	Click on **Import and Export**.
3.	In the __All products__ tab, click on **Export / Import**.
4.	Click on **Import**.
5.	Choose the filled-out spreadsheet by selecting **Choose file**.
6.	Click on `Import`.

### Add images via spreadsheet

After adding a SKU you need to also link an image to it in order to activate it. Follow the steps below to add an image:

1.	Click on **Catalog**
2.	Click on **Import and Export**
3.	Click on the **Import Images** tab
4.	Click on the word **here** to download the default import spreadsheet.
5.	Open the spreadsheet that you’ve received by email and fill it out. For more on each field and how to fill them out, read our article on [importing images through a spreadsheet](https://help.vtex.com/en/tutorial/importing-images-through-spreadsheet--tutorials_262). 
6.	After filling out the spreadsheet, click on **Select file**.
7.	Select the file you wish to upload and click on open.
8.	Click on **Import**.

## API

To register a SKU via API, use the [Create SKU](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit) endpoint.

