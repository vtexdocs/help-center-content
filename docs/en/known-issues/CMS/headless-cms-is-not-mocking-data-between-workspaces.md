---
title: "Headless CMS is not mocking data between workspaces"
id: iDUOWMDKXPb6ZjO19kmO7
status: PUBLISHED
createdAt: 2025-04-24T19:24:19.019Z
updatedAt: 2025-04-24T19:24:20.160Z
publishedAt: 2025-04-24T19:24:20.160Z
firstPublishedAt: 2025-04-24T19:24:20.160Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: headless-cms-is-not-mocking-data-between-workspaces
locale: en
kiStatus: Backlog
internalReference: 1215583
---

## Summary


The feature that mocks the data between workspaces inside the Headless CMS is currently not working. Right now, the drafts that you create in a workspace can also be seen on the master.


##

## Simulation


Try to create a new draft on a workspace, just as in the example below, you'll see that the mock version will be saved:
 ![](https://vtexhelp.zendesk.com/attachments/token/ALJXihZcrD2L1K4FwrXfqZpML/?name=image.png)

After editing, try saving your changes, the mock version will become a normal draft:
 ![](https://vtexhelp.zendesk.com/attachments/token/mrwjyqtC4ALC3DIlVXwP9sXXA/?name=image.png)

But if you access the master environment of your store, the draft will also be there:
 ![](https://vtexhelp.zendesk.com/attachments/token/DgHHvGNcu18BBx5CZqXoPmw9Z/?name=image.png)

This draft can also be published


##

## Workaround


N/A





