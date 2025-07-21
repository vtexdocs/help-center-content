---
title: "Manual merchandising rules do not work when Global trigger is enabled"
id: 3doeP1bZWa4mBjWUEiAht8
status: PUBLISHED
createdAt: 2024-12-06T20:21:13.547Z
updatedAt: 2024-12-06T20:47:13.251Z
publishedAt: 2024-12-06T20:47:13.251Z
firstPublishedAt: 2024-12-06T20:21:14.324Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: manual-merchandising-rules-do-not-work-when-global-trigger-is-enabled
locale: en
kiStatus: Backlog
internalReference: 1147282
---

## Summary


Manual merchandising rules do not work when Global trigger is enabled.

This scenario can happen when updating a Merchandising Rule by enabling Global trigger without deleting existing trigger rules previously.


##

## Simulation


Follow the steps hereafter to simulate the scenario:

1. Click **Edit** to edit a specific Merchandising Rule.
2. Enable **Global Trigger**.
3. Click **Save** to save the updates.

After updating the Merchandising Rules, search for any term and the Merchandising Rule does not activate. However, when searching for any term that fit with the previous Trigger Rules, the merchandising rule can be activated.


##

## Workaround


As a workaround, follow the steps hereafter:

1. Edit a Merchandising Rule.
2. Disable **Global Trigger**.
3. Click **Save** to apply the changes. When saving the changes, the existing trigger rules will be displayed.
4. In the **Trigger Rules** block of the editing form, click **Clear Rules** to delete the existing trigger rules.
5. Then, enable **Global Trigger**.
6. Click **Save** to apply the changes.



