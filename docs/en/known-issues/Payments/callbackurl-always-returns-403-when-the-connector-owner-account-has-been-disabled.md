---
title: "CallbackUrl always returns 403 when the connector owner account has been disabled"
id: yHrPuhMrqMJpUQe5zK3p1
status: PUBLISHED
createdAt: 2023-03-21T18:37:46.361Z
updatedAt: 2023-03-21T18:37:46.871Z
publishedAt: 2023-03-21T18:37:46.871Z
firstPublishedAt: 2023-03-21T18:37:46.871Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: callbackurl-always-returns-403-when-the-connector-owner-account-has-been-disabled
locale: en
kiStatus: Backlog
internalReference: 775235
---

## Summary


For connectors using our PPP, the connector configuration includes a field called `accountName` that specifies the account used to publish the app. Typically, the `accountName` value is the same as the partner account name. However, when the partner publishes connectors with their infrastructure, they use a specific endpoint, which is not relative; this is how connectors using our IO infrastructure do.

This difference in publishing methods affects how the gateway builds the `callbackUrl`, which uses the `accountName` to determine the tenant. As a result, the URL construction is inflexible, and there are instances where the account associated with the accountName might be disabled and unable to accept requests. This leads to every request being denied with a 403 code since the gateway always uses this account to build the URL.


##

## Simulation


This scenario cannot be simulated unless a deactivated account is available.


##

## Workaround


There are some workarounds to this scenario, including changing the accountName where the connector was published and submitting a new publication request to switch the connector to our new "wrapper" solution. From the provider's side, they can replace the tenant with the current account when requesting a callback.





