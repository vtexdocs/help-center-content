---
title: "PS – Only one agent receives email notification in active call"
id: 6yCJx946wLRzLt7zIFk18n
status: PUBLISHED
createdAt: 2025-04-30T13:10:26.340Z
updatedAt: 2025-04-30T13:10:27.044Z
publishedAt: 2025-04-30T13:10:27.044Z
firstPublishedAt: 2025-04-30T13:10:27.044Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: ps-only-one-agent-receives-email-notification-in-active-call
locale: en
kiStatus: Backlog
internalReference: 1218130
---

## Summary


During tests with Personal Shopper, it was observed that only one of the agents assigned to an active session received the email notification, while the other did not. This behavior occurs when **manual agent assignment** is enabled and has been reported in **multiple accounts**, not just one.


##

## Simulation



1. Enable manual agent assignment in the account.
2. Assign two agents to an active Personal Shopper session.
3. Start a call with a customer from the Admin channel.
4. Observe the following behavior:
  - Only one of the agents receives the email notification.
  - The other agent receives no notification.


##

## Workaround



1. Access the account Admin.
2. Identify the Shopper user who is not receiving email notifications.
3. Delete the user from the corresponding configuration.
4. Recreate the user using the same email address and original configuration.
5. Save the changes.
6. Run a new test to confirm that email notifications are sent correctly.





