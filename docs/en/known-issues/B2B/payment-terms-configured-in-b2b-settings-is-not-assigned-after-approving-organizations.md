---
title: "Payment Terms configured in B2B Settings is not assigned after approving Organizations"
id: 7pUMnYPWPHlhPzlWwTtWsL
status: PUBLISHED
createdAt: 2024-02-26T22:29:03.516Z
updatedAt: 2024-02-26T22:29:04.387Z
publishedAt: 2024-02-26T22:29:04.387Z
firstPublishedAt: 2024-02-26T22:29:04.387Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: payment-terms-configured-in-b2b-settings-is-not-assigned-after-approving-organizations
locale: en
kiStatus: Backlog
internalReference: 989507
---

## Summary


The payment terms configured in B2B Organizations Settings is not saved in the Organization Details.


##

## Simulation



- Configure a default payment terms in B2B Organizations Settings;
- Create an Organization Request;
- Approve the Organization Request;
- Check the Organization details; it won't have any payment terms assigned.


##

## Workaround



- Assign the payment terms to the organization via admin;
- Create a trigger for the organizations entity's schema.




