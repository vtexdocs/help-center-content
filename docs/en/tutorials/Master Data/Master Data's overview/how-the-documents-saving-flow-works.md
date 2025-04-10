---
title: 'How the documents saving flow works'
id: 1abjrkwcROMUyiEoEkmCWE
status: ARCHIVED
createdAt: 2017-12-10T17:32:00.685Z
updatedAt: 2022-08-04T22:35:40.821Z
publishedAt: 
firstPublishedAt: 2017-12-10T17:39:18.212Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slugEN: how-the-documents-saving-flow-works
locale: en
legacySlug: how-the-documents-saving-flow-works
subcategoryId: 5gtjaqCG7eIseyCI0aSqc2
---

The image below shows the flow of the saving of documents in Master Data. We'll explain each step.

![Save flow](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Master%20Data/Master%20Data's%20overview/how-the-documents-saving-flow-works_1.png)

#### Save API call
It happens when the user calls the saving documents APIs (POST, PUT or PATCH).
#### Resolve ID
Add an ID to the document. If the ID doesn't exist in the content, Master Data tries to get the document by index (alternate key). If the document by index doesn't exist, a new ID is created.
#### Validate Schema
Validate the content with JSON Schema (if the parameter `_schema` exists in the query).
#### Lock
After this step only one operation could be executed by ID or alternate key.
#### Get fields changed
Get the last version of document in database and compare with the content. If there is some change, it moves to the next step.
#### Validate Condition Clause
If you pass the parameter `_where` in query, Master Data will validate at this moment.
#### Persistence in database
Save the document in database.
#### Enqueue to worker process
Enqueue the operation. Some moments after, the *Background Worker* will start the backgroud operations (validation with other schemas and indexing).
