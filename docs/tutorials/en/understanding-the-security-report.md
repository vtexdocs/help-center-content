---
title: Understand the Security report
id: tutorials_282
status: PUBLISHED
createdAt: 2017-04-27T22:10:10.101Z
updatedAt: 2023-03-29T19:22:38.336Z
publishedAt: 2023-03-29T19:22:38.336Z
firstPublishedAt: 2017-04-27T23:03:13.247Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: understanding-the-security-report
legacySlug: understanding-the-security-report
subcategory: 5yDQmr18K4GgQAeGwq8USa
---

The Security Report is where the changes affecting the product register are recorded. Its main function is to offer the storeowner the possibility of verifying the author of certain changes over a specific period of time.

## Access the Security report

The path is as follows:

1. In the VTEX Admin, go to **Catalog**, or type **Catalog** in the search bar at the top of the page.
2. Click on **Reports**.
3. Click on the tab **Security**.

## Filter the Security report

Several filters are available, beginning with the fields below, bearing in mind that the date field must always be filled out in order to return the proper result. If no filter is used, the register with all changes on the current date will be displayed.

In the example, I set up a filter for a change (whether creation or updating) to the price of an SKU. To do this I have used the fields __Data__ with the SKU Id, __Screen__, with the location of the platform where the change is happening and a specific time frame. According to the report you want, you may have to use other fields at the same time, or as a replacement for those I have used in the example.

![relatorioseguran aPT.gif?h=250](https://images.ctfassets.net/alneenqid6w5/9t5KxHdSwTGYy84KmJIq7/ef82dec5acc0f07090f01d3484407e75/relatorio-seguranca-en.gif)

Read the section below to understand all the available fields for filtering the report.

## Fields available for filtering

**Administrador's Name:** Name of the user that made the change.

**Access address:** IP address of the machine that made the change.

**Data:** You can enter the Id of the SKU, the product, brand, category or of any other registration form you wish to search for in the register.

**Screen:** Location on the platform where the change was made, taking into account the address of the URL. For example, on the price change form this is SkuTabelaValorForm.

**Function:** Action done on the screen. Following the example in the previous topic, a price change would appear as StockKeepingUnitPriceShet-update.

**Date:** Period you wish to search, with the “from” and “to” dates.

**Items per page:** Defines the maximum number of lines in the search result.

