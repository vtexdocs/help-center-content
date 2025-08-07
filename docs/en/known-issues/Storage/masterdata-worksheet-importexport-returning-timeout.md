---
title: "MasterData worksheet import/export returning timeout"
id: 64De4JpmsgnQ2xckuOgYip
status: PUBLISHED
createdAt: 2024-12-13T17:12:25.937Z
updatedAt: 2024-12-13T17:12:26.798Z
publishedAt: 2024-12-13T17:12:26.798Z
firstPublishedAt: 2024-12-13T17:12:26.798Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: masterdata-worksheet-importexport-returning-timeout
locale: en
kiStatus: Backlog
internalReference: 400265
---

## Summary


When exporting and/or importing an entity, a timeout may occur in the following scenarios:

- Entity with many fields;
- A certain field with too much information;
- Many documents in the entity.
These scenarios can lead to a very large file size, burdening the worker who exports/imports the documents to the file/database, resulting in a timeout response with an aborted request response.


##

## Simulation


For **export** case:

- Access Master Data CRM (for example https://my-account-here.vtexcrm.com.br);
- Access a Form Application with fields that contain a very large amount of data per field (ex: images, videos..);
- Click on the "**Export XLS**" button:
 ![](https://vtexhelp.zendesk.com/attachments/token/p7ycuur8ck3Qtw2zmSUBNDmxE/?name=image.png)

- On "**Data Export**" popup, click on "**Select all fields**" to check it:
 ![](https://vtexhelp.zendesk.com/attachments/token/IIc8z6df21Cl6djTt5Toz4udk/?name=image.png)

- Go back to the Applications page;
- Click on the "**Exports**" button:
 ![](https://vtexhelp.zendesk.com/attachments/token/NsI7JG4oWcuHAhDewa7PoEx1M/?name=image.png)

- You can follow the request on "**Export Status**" (for example: https://my-account-here.vtexcrm.com.br/ExportStatus/Index);
- The email will not be sent to the user.

For **import** case:

- Access Master Data CRM (for example https://my-account-here.vtexcrm.com.br);
- Click on the "**Import**" button:
 ![](https://vtexhelp.zendesk.com/attachments/token/3HUzAWSplEKGFAap3yU0jjmdf/?name=image.png)

- Choose the Data Entity and the .xls file:
 ![](https://vtexhelp.zendesk.com/attachments/token/KFolvCXhUiqAhZV23iKDhTws0/?name=image.png)

- Click on the "**Import**" button;
- The import will start, it will be processing, and then you will be redirected to `Import/ExecuteImport` (for example https://my-account-here.vtexcrm.com.br/Import/ExecuteImport), and the following error will be displayed:

    This page isn’t workingmy-account-here.vtexcrm.com.br took too long to respond.HTTP ERROR 504

 ![](https://vtexhelp.zendesk.com/attachments/token/3brNPf70M3FBLGPiVwWsSHx94/?name=image.png)


##

## Workaround


There are 3 easy ways to use workarounds in this case.

Filter only the documents you need, if you don't need the whole entity, and then, export them:
 ![](https://vtexhelp.zendesk.com/attachments/token/CojS7MzbOiDkaQ9HgdbrxlzHD/?name=image.png)

Only select the fields you really need, if you don't need the whole entity, and then, export them:
 ![](https://vtexhelp.zendesk.com/attachments/token/pTOU7TEWidoOrtstbDALphW6k/?name=image.png)

Separate the spreadsheet to be imported. For example, a worksheet with 60,000 documents, divide it into 6 spreadsheets of 10,000 documents and try to import it again.
Remember that we don't have an exact number. Dividing the file into up to 10k documents was a suggested example. It will depend on the number of fields/columns, the size of each information in the field/column, the file size, the worker, etc. There are some factors that can affect the expected import.





