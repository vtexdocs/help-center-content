---
title: 'Master Data v1: Dynamic settings deprecation'
id: 4a1FZX8wGeHLcOyMg0egg8
status: PUBLISHED
createdAt: 2024-04-17T12:34:11.024Z
updatedAt: 2024-04-17T12:48:51.570Z
publishedAt: 2024-04-17T12:48:51.570Z
contentType: updates
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slug: master-data-v1-dynamic-settings-deprecation
locale: en
legacySlug: master-data-v1-dynamic-settings-deprecation
announcementImageID: ''
announcementSynopsisEN: 'The Calculated field and the "Change field value" trigger will be discontinued in Master Data v1.'
---

On June 17, 2024, we will disable the following settings in Master Data v1: **Calculated field** and **Change field value** trigger.

These options allowed you to dynamically change document values in[ Master Data](https://help.vtex.com/en/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) by running code from a trigger or updating/creating a document.

We recommend [creating an app to communicate with Master Data](https://developers.vtex.com/docs/guides/create-master-data-crud-app) to replace these settings if you need to update field values dynamically.

## What has changed?

Both dynamic settings will be disabled in Master Data v1.

Note that **Calculated fields** and existing triggers using the **Change field value** function will stop working on the same date. See the [What needs to be done?](#what-needs-to-be-done) section for more information on how to adapt to these changes.

### Calculated field

The **Calculated field** was a setting within the [data entity](https://help.vtex.com/en/tutorial/data-entity--tutorials_1265) fields that allowed running C# code to recalculate the field's value whenever a new document was added or updated. 

This field type and the calculated fields created will no longer be available from June 17, 2024, as illustrated below. 

![image5](//images.ctfassets.net/alneenqid6w5/13NWpWtxQGLFfh0ecW4ZV6/f0f168a3da476c6dfce2d74060569f98/image5.png)

### Change field value

When configuring triggers, the **Change field value** option allows you to add C# code to change the value of selected fields for each trigger execution.

The **Change field value** option, illustrated below, will no longer be available when configuring trigger actions from June 17, 2024. Triggers previously created with this option will continue to work until that date.

![image2](//images.ctfassets.net/alneenqid6w5/2meuBC8t6dnVAfg1YzZnwL/cb208350954b305141787aa0b4c65407/image2.png)

## What needs to be done?

If you need to update Master Data field values based on a trigger, we recommend contacting your development team and following the instructions below:

- Develop an app on VTEX IO that communicates with Master Data, following the instructions in the developer's guide on [Creating a Master Data CRUD app](https://developers.vtex.com/docs/guides/create-master-data-crud-app).
-	Configure a trigger that sends an HTTP request to the app, following the instructions in [How to create a trigger in Master Data v1](https://help.vtex.com/en/tutorial/creating-trigger-in-master-data--tutorials_1270#sending-an-http-request).

If you use the **Calculated field** or a trigger with the **Change field value**, follow the steps above before June 17, 2024 to dynamically update the values even after these settings have been deprecated in Master Data v1.
