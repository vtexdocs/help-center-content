---
title: "Divergence in the number of used permissions in the Security Monitor"
id: 21Ugmdg5V0529OWGgt8HuU
status: PUBLISHED
createdAt: 2025-05-07T20:02:19.848Z
updatedAt: 2025-05-07T20:02:20.531Z
publishedAt: 2025-05-07T20:02:20.531Z
firstPublishedAt: 2025-05-07T20:02:20.531Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: divergence-in-the-number-of-used-permissions-in-the-security-monitor
locale: en
kiStatus: Backlog
internalReference: 1222306
---

## Summary


The Security Monitor shows a divergence number of used permissions in the _finding of Excessive Permissions_ for App Keys shared between accounts and subaccount(s) (multiaccount architecture).


##

## Simulation


Conditions to reproduce the issue:

- Account with multiaccount architecture;
- Exists App Key shared between account and its subaccount(s);
- Account that uses the VTEX Shield and has the Security Monitor;
- This shared App Key is being reported as a finding of type Excessive Permission in the Security Monitor.

Steps:
In the accounts with the shared App Key

- Open the Security Monitor;
- In any of the tabs (Open, Snoozed and Closed) insert the App Key in the search bar;
- Click on the result with type _Excessive Permissions_;
- You'll see on the opened modal that the number of _used permissions_ is divergent between the accounts.

As we are dealing with a shared App Key, it should exhibit the number of the _used permissions_ in all the accounts/subaccounts, not only the number regarding the account where we're looking at.


##

## Workaround


There is no workaround available.





