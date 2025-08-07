---
title: "Redirects module allows the inclusion of redirects without a predetermined pattern"
id: CPYuvozpHXr86gQliImSV
status: PUBLISHED
createdAt: 2024-10-04T17:26:34.553Z
updatedAt: 2025-04-10T14:32:49.765Z
publishedAt: 2025-04-10T14:32:49.765Z
firstPublishedAt: 2024-10-04T17:26:36.228Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: redirects-module-allows-the-inclusion-of-redirects-without-a-predetermined-pattern
locale: en
kiStatus: Backlog
internalReference: 729503
---

## Summary


The Redirects module allows the inclusion of URLs without a predetermined pattern, as there is no validation of the correct format. Users who include querystring-initiated redirects, for example, will be able to upload the spreadsheet or insert it directly via the UI, and, consequently, this can cause inconsistencies in the module's operation, data presentation on the front, etc.

The more common inconsistency is being unable to access some redirects when clicking on them.


##

## Simulation


- Create, via UI or spreadsheet, redirects with querystrings (for example, any URL that contains `?` )
- Try accessing it


##

## Workaround


There is no workaround for this case, but if you want to delete the redirect and are not able to access it, you need to run the rewriter query:

    mutation{ redirect{ delete(path: "/{word}"){ id } }}





