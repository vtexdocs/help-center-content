---
title: "Error exporting entity with too many documents"
id: 1uLEk6e9z3011GaoJ4DNU0
status: PUBLISHED
createdAt: 2023-07-07T15:59:46.214Z
updatedAt: 2023-07-07T15:59:46.899Z
publishedAt: 2023-07-07T15:59:46.899Z
firstPublishedAt: 2023-07-07T15:59:46.899Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-exporting-entity-with-too-many-documents
locale: en
kiStatus: Backlog
internalReference: 857894
---

## Summary


Exporting a large number of documents from an entity results in excessive processing, causing errors in the process queue and preventing the export of the document list.


##

## Simulation



1. Access the Master Data CRM platform and navigate to the desired entity's form.
2. Locate the "Export XLS" button within the interface and click on it.
3. Locate and click on the "Export XLS" button.
4. Initiate the export process by confirming the selection and starting the export.
5. To monitor the progress of the export, navigate to the Applications tab within the platform.
6. Look for the "Exports" button and click on it to view the list ongoing.
7. Observe the export status, and check for any errors or issues encountered during the export process.



##

## Workaround


A workaround for this issue is to utilize the scroll API.

