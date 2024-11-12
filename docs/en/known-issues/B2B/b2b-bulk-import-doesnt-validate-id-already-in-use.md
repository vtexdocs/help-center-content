---
title: "B2B Bulk Import doesn't validate ID already in use"
id: 2zXPi9LJ2vP3wBkdF8xaVS
status: PUBLISHED
createdAt: 2024-11-04T14:32:24.901Z
updatedAt: 2024-11-04T14:32:26.116Z
publishedAt: 2024-11-04T14:32:26.116Z
firstPublishedAt: 2024-11-04T14:32:26.116Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-bulk-import-doesnt-validate-id-already-in-use
locale: en
kiStatus: Backlog
internalReference: 1128764
---

## Summary


When importing organizations and cost centers via bulk import, there is no validation to verify whether the ID is already in use. This allows starting the import and may cause the process to be stuck.


##

## Simulation



- Fill out the template file with an organization or a cost center ID already in use;
- Send the file for validation; the response is that the file is valid.


##

## Workaround


Use another ID when possible.




