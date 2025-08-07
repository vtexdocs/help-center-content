---
title: "Sales channel configured in B2B Settings is not assigned after approving Organizations"
id: 7kxMtk2YHJdk5uPdj5wBs5
status: PUBLISHED
createdAt: 2023-07-21T20:03:44.671Z
updatedAt: 2023-07-21T20:03:45.295Z
publishedAt: 2023-07-21T20:03:45.295Z
firstPublishedAt: 2023-07-21T20:03:45.295Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: sales-channel-configured-in-b2b-settings-is-not-assigned-after-approving-organizations
locale: en
kiStatus: Backlog
internalReference: 866933
---

## Summary


The sales channel configured in B2B Organizations Settings is not saved in the Organization Details.


##

## Simulation



- Configure a default sales channel in B2B Organizations Settings;
- Create an Organization Request;
- Approve the Organization Request;
- Check the Organization details; it won't have any sales channel assigned.


##

## Workaround



- Assign the sales channel to the organization via admin;
- Create a trigger for the organizations entity's schema:

    "v-triggers": [{ "name": "define-salesChannel-default", "active": true, "condition": "salesChannel is null", "action": { "type": "save", "dataEntity": "organizations", "json": { "id": "{!id}", "salesChannel": "{add here the salesChannelId defined in B2B Organizations Settings}" } } }]





