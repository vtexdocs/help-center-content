---
title: 'How to import data into Master Data'
id: tutorials_1135
status: PUBLISHED
createdAt: 2017-04-27T21:57:12.437Z
updatedAt: 2023-06-15T19:48:45.566Z
publishedAt: 2023-06-15T19:48:45.566Z
firstPublishedAt: 2017-04-27T23:03:43.488Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: importing-data-into-master-data
locale: en
legacySlug: importing-data-into-master-data
subcategory: 2AThnkEZAYbk4G4EIs53rL
---

The mass inclusion or change of records in Master Data can be made through the API or by importing the worksheet. The purpose of this document is to show the steps required for creating and importing the worksheet containing new or changed data.

## How to set up the worksheet

The best way to obtain the import worksheet is [exporting the form that you intend to update](/en/tutorial/exporting-data/). This is so because the export worksheet is the same used for importing data. So, you must always export the worksheet before importing it, in order to ensure that the worksheet used has been updated with possible changes in the form in question, such as the elimination of fields automatically filled by the system like "accountId",	"accountName",	"dataEntityId", "createdBy", "createdIn",	"updatedBy",	"updatedIn",	"lastInteractionBy",	"lastInteractionIn", "followers" and "tags".

### Updating existing data

Additionally, to update the existing data, you must export data and change them in the worksheet exported. You must also maintain the value of the existing data in the column (id). Otherwise, you will be creating a new document, instead of changing the existing one.

### Inserting new data

Keep the value of column id empty, and a new entry will be created.

<div class="alert alert-warning">
When entering data in the spreadsheet, make sure that the cell value format matches the format expected by the corresponding column. Format examples are number, text, or date.
</div>

## How to upload the worksheet

After exporting and editing the worksheet exported, it is time to import the data. Follow the steps below to perform this task.

<div class="alert alert-warning">
Keep the same format of the worksheet (xls) for the import to be successful.
</div>

1. In the VTEX Admin, access **Store Settings** > **Storefront** > **Master Data**.
2. Click on the **Applications** tab.
3. Click on the **Import** button.
4. Select the data entity to be entered or updated (here, you must enter the data entity of the form containing the records that you intend to include or update).
5. Select the file.
6. Click on the **Import** button at the bottom of the screen.

![Importando](//images.contentful.com/alneenqid6w5/3xkB2DzbqoeIsk2Qice8sM/71d3c7d0379e03a8641180ccbe97dc77/Importando-1.gif)
