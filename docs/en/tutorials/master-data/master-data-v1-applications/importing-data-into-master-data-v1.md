---
title: 'Importing data into Master Data v1'
id: tutorials_1135
status: PUBLISHED
createdAt: 2017-04-27T21:57:12.437Z
updatedAt: 2025-03-19T16:33:37.888Z
publishedAt: 2025-03-19T16:33:37.888Z
firstPublishedAt: 2017-04-27T23:03:43.488Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: importing-data-into-master-data-v1
legacySlug: importing-data-into-master-data
locale: en
subcategoryId: 2AThnkEZAYbk4G4EIs53rL
---

You can add and change records in bulk in Master Data v1 via the API or by importing a spreadsheet. This document provides the steps to create and import a spreadsheet with new and updated data.

## Exporting form data

To obtain the import spreadsheet, first export the form data you want to update by following the steps in Exporting data from Master Data v1. This ensures that the spreadsheet you use is up to date with the latest version of the form.

## Removing autocomplete fields

The exported spreadsheet is the same one you will use when importing, except for the fields that are automatically completed by the system:

- accountId
- accountName
- dataEntityId
- createdBy
- createdIn
- updatedBy
- updatedIn
- lastInteractionBy
- lastInteractionIn
- followers
- tags

Remove these fields when preparing the spreadsheet for import.

## Updating existing data

To update existing data, export it as described in [Exporting form data](#exporting-form-data) and change the required information in the exported spreadsheet, keeping the id column unchanged.

## Adding new data

To create a new record, add a new row with the record information and leave the id column blank.

> ⚠️ When adding data to the spreadsheet, make sure that the format of the values in each cell matches the format expected by that column (form field). Examples of formats include number, text, and date.

## Uploading the spreadsheet

After exporting and editing the spreadsheet, you must import the data. To do this, follow the steps below:

1. In the VTEX Admin, go to **Store Settings** > **Storefront** > **Master Data.**
2. Click the **Applications** tab.
3. Click `Import`.
4. In **Data entities**, select the data entity of the form where you want to add or update records.
5. Click `Choose file` to select the spreadsheet file on your device.
6. Click the `Import` button in the right corner at the bottom of the screen.

> ⚠️ Keep the same file format (XLS) as the exported spreadsheet to import successfully.

