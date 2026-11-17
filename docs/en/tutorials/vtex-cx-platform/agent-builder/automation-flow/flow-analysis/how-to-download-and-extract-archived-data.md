---
title: "Downloading and extracting archived data"
id: 3fYq4fID5fMrm5BT2uVxG0
status: PUBLISHED
createdAt: 2025-09-12T17:09:16.264Z
updatedAt: 2026-11-12T14:20:00.000Z
publishedAt: 2025-10-03T14:21:49.361Z
firstPublishedAt: 2025-10-03T14:21:49.361Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: how-to-download-and-extract-archived-data
legacySlug: how-to-download-and-extract-archived-data
locale: en
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

Data from the Automation flow is stored for 180 days. After this period, the platform archives the data in JSON format in the Archives menu.

## Get the files in the Automation flow

You can download these archived data by accessing the settings panel. At the bottom of the page, the platform shows the number of files and records.

You can access both the content of the **Messages** table and the **Runs** table. To view either, click the button highlighted in yellow.

The files from the Messages table will start with the prefix "message." To download the files, click on the highlighted icon next to the date.

The files from the Runs table will start with the prefix "run." To download the files, click on the highlighted icon next to the date.

Finally, in each file, you can check the content, period (month), and the number of records in the file.

## Loading and transforming the archived data in Power BI

To load the files in Power BI, follow the steps below:

1. After you download the files, load them in Power BI through Power Query by selecting a new source and choosing **JSON**.
2. When you click `Connect`, change the file type option to **All files**.
3. Select the file and click `Open`.

Power Query shows **Import**, which loads the files into Power BI, and **DirectQuery**, which connects to the file without importing it. Use **Import**, because the file can be changed or removed from the folder.

After the import, the query expands every column that contains data.

Delete these steps to get clean data and to combine the archived data tables with the tables from the connector.

## Combining the tables

To combine the tables, follow the steps below:

1. Select **Combine**, then **Append queries**, then **Append queries as new**.
2. Select the tables and finish by clicking `OK`.

When you finish, Power Query creates a new query with all the selected data in a single table.

> The connection to the data uses the Power BI integration API. The data is structured as JSON. To access every field, expand the columns in Power Query in Power BI.
