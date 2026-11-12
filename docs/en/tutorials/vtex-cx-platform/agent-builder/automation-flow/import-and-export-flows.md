---
title: "Import and export flows"
id: 2jwPSnXsL3wniLWt9i7IA5
status: PUBLISHED
createdAt: 2025-09-17T14:03:45.539Z
updatedAt: 2026-11-12T12:20:00.000Z
publishedAt: 2025-10-03T14:20:03.745Z
firstPublishedAt: 2025-10-03T14:20:03.745Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: import-and-export-flows
legacySlug: import-and-export-flows
locale: en
subcategoryId: hXGU8pFfABVFIg724zWBN
---

You can export flows from one organization and import them into another.

## Export flows

There are two ways to access the flow export page.

### Through the flow editor

To access the export page through the flow editor, go to the options menu and click the "Export Definition" button.

Or also through the **Flow module**.

To learn more about the editor, see [Flow editor and tools](/en/docs/tutorials/flow-editor-and-tools).

### Through the organization's general settings

To access the export page through the organization's general settings, go to the options menu and click the "Export" button.

To learn more, see [General project settings](/en/docs/tutorials/general-project-settings).

On the export page, the platform displays all the flows and campaigns of the organization, grouped by usage. That is, all flows in the same group interact with each other. If you export only one flow from a group, it may not work correctly.

To export the flows you want, select them and click the export button at the bottom of the page. The platform generates a `.json` file, which you use in the import step.

## Import flows

To open the import page, go to the options menu in the organization's general settings and click the "Import" button.

On the import page, select the `.json` file created in the export and click the "Import" button.

The platform imports the flows into the organization.
