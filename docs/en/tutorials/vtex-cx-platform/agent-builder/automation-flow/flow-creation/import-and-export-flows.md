---
title: "Import and export flows"
id: 2jwPSnXsL3wniLWt9i7IA5
status: PUBLISHED
createdAt: 2025-09-17T14:03:45.539Z
updatedAt: 2026-11-12T15:07:00.000Z
publishedAt: 2025-10-03T14:20:03.745Z
firstPublishedAt: 2025-10-03T14:20:03.745Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: import-and-export-flows
legacySlug: import-and-export-flows
locale: en
subcategoryId: hXGU8pFfABVFIg724zWBN
seeAlso:
  - /en/docs/tutorials/flows-creation
---

You can export flows from one organization and import them into another. The export generates a `.json` file, and the import uses that file to add the flows to the destination organization.

To duplicate a flow within the same organization, use `Copy` in the flow editor settings menu instead.

> For an overview of flows and their structure, see [Automation flow](https://help.vtex.com/en/docs/tutorials/automation-flow-overview).


## Exporting flows

You can open the export page from the flow editor or from the organization's general settings. The page lists every flow and campaign in the organization, grouped by usage.

> ⚠️ Flows in the same group interact with each other. If you export only one flow from a group, that flow may not work correctly after you import it. Select every flow in the group.

### Opening the export page from the flow editor

In the flow editor, the settings menu is next to the Start Flow button. `Export Definition` in that menu opens the export page. `Export Translation` is a different option: it exports the flow's language translation, not the flow definition. For the other options in this menu, see [Flow editor and tools](https://help.vtex.com/en/docs/tutorials/flow-editor-and-tools).

To open the export page from the flow editor, follow these steps:

1. In the side menu, click **Flows**.
2. Open a flow that you want to export.
3. Open the settings menu next to `Start Flow`.
4. Click `Export Definition`.

> ℹ️ `Export Translation` exports the flow's language translation, not its definition. For details about the other settings, see [Flow editor and tools](https://help.vtex.com/en/docs/tutorials/flow-editor-and-tools).

### From the general settings

1. Open the source organization's general settings.
2. In the options menu, click `Export`.

### Selecting and exporting flows

After opening the export page:

1. Select the flows you want to transfer. If a flow belongs to a group, select all flows in that group.
2. At the bottom of the page, click `Export`.

The platform downloads a `.json` file containing the selected flows. Keep this file for the import procedure.

## Importing flows

1. Open the destination organization's general settings.
2. In the options menu, click `Import`.
3. Select the `.json` file generated during export.
4. Click `Import`.

The imported flows are added to the destination organization.
