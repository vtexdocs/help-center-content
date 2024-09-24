---
title: "Creating wrong redirects containing characters/queries that shouldn't be uploaded the upload/download of the csv through the CLI doesn't work"
id: 6ShJSvo6g8ZJFaejSo0gx3
status: PUBLISHED
createdAt: 2024-01-25T19:00:17.586Z
updatedAt: 2024-01-25T19:00:18.204Z
publishedAt: 2024-01-25T19:00:18.204Z
firstPublishedAt: 2024-01-25T19:00:18.204Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: creating-wrong-redirects-containing-charactersqueries-that-shouldnt-be-uploaded-the-uploaddownload-of-the-csv-through-the-cli-doesnt-work
locale: en
kiStatus: No Fix
internalReference: 971936
---

## Summary


After creating wrong redirects containing characters that should not be uploaded: ie.: #, queries, or redirects that should be created on the server level, the mass upload/download of the csv through the CLI doesn't work anymore.


##

## Simulation


Create a redirect for a query for example: /?binding=XXXXX
Delete the redirect by the graphql IDE (you won't be able to delete otherwise)
Try to download or upload the CSV of the redirects through the CLI and you want be able to do it.

 ![](https://vtexhelp.zendesk.com/attachments/token/etn94WlrSAYOFFj0rZfVwoowE/?name=image.png)


##

## Workaround


There is currently no workaround for this and the CLI mass download will be unusable.





