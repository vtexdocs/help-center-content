---
title: 'VTEX Pick and Pack: Worksheets'
createdAt: 2024-01-03T18:38:05.781Z
updatedAt: 2026-08-21T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-worksheets
locale: en
hidden: false
---

**Worksheets** is a VTEX Admin page for managing the worksheets that pickers use to group and pick order items in real time. A worksheet can bring together a single order or multiple orders, which are processed by the Pick and Pack flow simultaneously. To open the page, in the VTEX Admin, go to **Shipping > Pick and Pack > Worksheets**.

![Worksheets page](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-worksheets_1.png)

This article is divided into the following sections:

- [Tracking worksheets](#tracking-worksheets)
- [Selecting fulfillment locations](#selecting-fulfillment-locations)
- [Searching for worksheets](#searching-for-worksheets)
- [Filtering worksheets](#filtering-worksheets)
- [Creating worksheets](#creating-worksheets)
- [Viewing worksheet details](#viewing-worksheet-details)
- [Managing worksheets](#managing-worksheets)
- [Accessing tracking tools](#acessing-tracking-tools)

## Tracking worksheets

Worksheets are organized in columns based on their stage. The header of each column indicates the number of worksheets in the corresponding stage:

- **Pinned:** Worksheets pinned to the page for priority tracking.
- **Pending:** Worksheets awaiting or in progress in item picking.
- **Packing:** Worksheets awaiting shipping.
- **Completed:** Completed worksheets.
- **Canceled:** Canceled worksheets.

Orders are displayed in cards with the following information:

| Information              | Description                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **Worksheet ID**         | Identifier of the worksheet on the platform.                                                  |
| **Status**               | Current stage of the worksheet, such as **Pending**, **Ready for packing**, or **Completed**. |
| **Orders**               | IDs of the orders grouped in the worksheet.                                                   |
| **Start date**           | Date and time when item picking started.                                                      |
| **Deadline**             | Deadline with date and time to complete the handling of the worksheet.                        |
| **Picker**               | Picker assigned to the worksheet.                                                             |
| **Fulfillment location** | [Fulfillment location](/docs/tutorials/managing-warehouses) where the worksheet is processed. |
| **Picked** or **Packed** | Progress of the current stage, in processed units out of the expected total.                  |

![Worksheet card](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_2.png)

To view the complete data of a worksheet, click the corresponding card. For more information, see [Viewing worksheet details](#viewing-worksheet-details).

## Selecting fulfillment locations

By default, the page displays worksheets from all fulfillment locations in your operation. To restrict the view, follow the steps below:

1. Click `Change selected fulfillment locations`.
2. Select the desired fulfillment locations. You can use the **Search** bar to find a facility by name.

## Searching for worksheets

To find a specific worksheet, enter the worksheet ID or the ID of one of its orders in the **Search** bar.

## Filtering worksheets

You can display only the worksheets that contain items from certain catalog categories. To filter this view, follow the steps below:

1. Click `Categories`.
2. Select the desired categories. You can use the **Search** bar to find a category by name.
3. Click `Apply`.

To remove the filter and return to displaying all worksheets, click `Clear`.

## Creating worksheets

When creating a worksheet, you can define the orders to be picked together and who will do the picking. There's no limit to the number of orders per worksheet. To create a worksheet, follow the steps below:

1. In the sidebar, click **Orders**.
2. In the **Orders** tab, select the orders you want to group. Each order displays the sequence, deadline, delivery type, fulfillment location, and the number of items and units.
3. In **Assign orders to worksheet**, review the summary of the selected orders, including the number of items, the number of units, and the estimated handling time.

> ℹ️ Steps 4 and 5 are optional.

4. To assign a picker for the order, click the edit icon <i class="fas fa-pen" aria-hidden="true"></i> in the **Picker** field and select the desired picker. By default, the assignment is **Automatic**.
5. Enable the **Pin new worksheets** option to display the created worksheet in the **Pinned** column.
6. Click `Create`.

![Action to create the worksheet](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-service-orders_3.png)

> ℹ️ The number of orders per worksheet depends on the options: **Single order** and **Multiple orders**, which can be defined on the [Settings](/docs/tutorials/vtex-pick-and-pack-settings) page.

## Viewing worksheet details

To open the details panel, click to expand the desired worksheet. The panel header displays the ID and status of the worksheet, and the body shows the following information:

| Information              | Description                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| **Fulfillment location** | [Fulfillment location](/docs/tutorials/managing-warehouses) where the worksheet is processed. |
| **Created date**         | Date and time when the worksheet was created.                                                 |
| **Start date**           | Date and time when item picking started.                                                      |
| **Orders**               | Number of orders grouped in the worksheet.                                                    |
| **Items**                | Number of items and units to handle.                                                          |
| **Picker**               | Picker assigned for the worksheet.                                                            |
| **Deadline**             | Deadline with date and time to complete the handling of the worksheet.                        |
| **Packed/Picked**        | Progress of packing or picking, in units out of the expected total.                           |

![Worksheet details](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_4.png)

### Adding tags

Tags identify worksheets with common characteristics, such as the type of operation they relate to. To add a tag, click `+` in the details panel and select the desired tag. You can use the **Search tags** field to find a tag by name.

> ℹ️ Available tags are added in the **Worksheet tags** field, on the [Settings](/docs/tutorials/vtex-pick-and-pack-settings) page.

### Orders

The **Orders** tab lists the orders in the worksheet. To find an order, enter the ID in the **Search** field. The items of each order display the following information:

- **EAN:** Item barcode.
- **Ref. ID:** Item reference code in the catalog.
- **SKU:** Identifier of the item on the platform.
- **Categories:** Catalog categories the item is associated with.

![Tab in the worksheet details modal](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-service-orders_5.png)

### Approvals

The **Approvals** tab displays requests from pickers that require admin authorization for item picking to continue.

> ℹ️ The **Approvals** tab is only displayed when the **Enable approval flow** option is enabled on the [Settings](/docs/tutorials/vtex-pick-and-pack-settings#picking) page.

## Managing worksheets

In the details panel, click the menu icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i> to access the following actions:

- `Print`: Generates the picking list for the worksheet.
- `Notes`: Adds and views worksheet notes.
- `Pause picking`: Interrupts item picking.
- `Select a picker`: Defines the picker for this worksheet.

![Action menu of the details panel](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-worksheets_6.png)

> ℹ️ The content of the picking list is defined on the [Settings](/docs/tutorials/vtex-pick-and-pack-settings) page, in the **Enable picking list** option.

### Adding notes

Notes record information about the worksheet, such as guidance for the picker. To add a note, follow these steps:

1. Click `Notes`.
2. Enter the note in the text field.
3. Click `Add note`.

### Pausing picking

By pausing picking, you prevent the picker from continuing to pick items from the worksheet. To pause picking, follow these steps:

1. Click the **Manual** tab to create the worksheet manually.
2. In the **Reason** field, select the reason for the pause.
3. In the **Pause reason** field, describe the reason in more detail.
4. Click `Confirm`.

### Selecting a picker

You can assign the worksheet to a picker or change the picker assigned to it. To select a picker, follow these steps:

1. Click `Select a picker`.
2. Find the desired picker. The list displays the name, username, last access time, and the number of tasks assigned to each picker. You can use the **Search** bar to find a picker by name.
3. Click the desired picker.

## Accessing tracking tools

The page sidebar brings together tools for tracking the fulfillment operation:

- **Pickers:** List with the operation pickers, their last access and the number of tasks assigned to each one.
- **Orders:** Orders available for assignment to new worksheets and returned orders.
- **Inbox:** Conversations between the merchant and the pickers about each worksheet.
- **Time alerts:** Worksheets that have exceeded the expected time for their current stage.
- **Item audit:** History of changes made to items during order handling.
- **Transfers:** Item transfer between fulfillment locations.

### Inbox

The **Inbox** organizes conversations with pickers by worksheet. The **Needs support** label identifies the worksheets in which the picker has requested help.

To reply to a picker, click the desired conversation and write the message. You can also upload files, locations, and audio messages.

![Inbox screen with the list of conversations by worksheet](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_7.png)

> ℹ️ The **Inbox** depends on the **Allow support chat** option, enabled on the [Settings](/en/docs/tutorials/vtex-pick-and-pack-settings) page.
