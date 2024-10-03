---
title: 'Creating and deleting a large number of redirects breaks the redirects page'
id: 5uFuid4a5f7uiRVW9LdT5Q
status: PUBLISHED
createdAt: 2024-04-02T19:45:07.540Z
updatedAt: 2024-04-02T19:45:08.762Z
publishedAt: 2024-04-02T19:45:08.762Z
firstPublishedAt: 2024-04-02T19:45:08.762Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: creating-and-deleting-a-large-number-of-redirects-breaks-the-redirects-page
locale: en
kiStatus: Backlog
internalReference: 1010392
---

## Summary


Dealing with a massive amount of redirects can breaks the UI's page. If you have a lot of redirects or need to delete this huge amount this could lead to a bug where the UI's page is loading forever and never return the redirects information. We think that this may happen because when we delete a huge amount of redirects the first pages from the `listRedirects` query are blank and the UI will look for this first pages to load the first redirects and will never found this.

This can also impact the CLI import/export.


##

## Simulation



- Create a huge amount of redirects
- Try deleting them (through the UI or using the rewriter)
- When returning to the UI page the redirects will not load


##

## Workaround


N/A





