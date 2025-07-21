---
title: "Divergence on the Advanced Store Settings on new accounts or workspaces"
id: 1Jt8McqXjYAxfJNkBZHt4j
status: PUBLISHED
createdAt: 2024-07-11T18:16:01.106Z
updatedAt: 2024-07-11T18:16:02.006Z
publishedAt: 2024-07-11T18:16:02.006Z
firstPublishedAt: 2024-07-11T18:16:02.006Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: divergence-on-the-advanced-store-settings-on-new-accounts-or-workspaces
locale: en
kiStatus: Backlog
internalReference: 1064235
---

## Summary


On new workspaces or accounts that never changed the advanced configurations of the Store Settings can verify an inconsistency between the information on the UI and the flag applied to the account.


##

## Simulation



- Create a new workspace
- Go to the Store Settings in the Advanced tab
- See that some flags are set on the UI
- Verify the configurations using the settings plugin with the following command `vtex settings get vtex.store`.
- See that the flags are not applied.


##

## Workaround


Click on the "Save" button on the UI




