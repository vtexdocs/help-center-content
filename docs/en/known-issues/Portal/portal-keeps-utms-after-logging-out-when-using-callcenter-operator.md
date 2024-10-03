---
title: "Portal keeps UTM's after logging out when using Callcenter Operator."
id: 4dogeU7iMoTXBWwv5DyR8u
status: PUBLISHED
createdAt: 2022-03-18T19:04:54.519Z
updatedAt: 2024-02-16T20:27:34.500Z
publishedAt: 2024-02-16T20:27:34.500Z
firstPublishedAt: 2022-03-18T19:04:55.239Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: portal-keeps-utms-after-logging-out-when-using-callcenter-operator
locale: en
kiStatus: No Fix
internalReference: 534838
---

## Summary


Portal keeps UTM's  after logging out when using Callcenter Operator.



## Simulation



- Login with a Call Center Operator;
- With this Call Center Operator, log in with client information;
- Use a utmi_cp at the URL;
- Logout from this client/user (keeping the Call Center Operator logged);
- Login with another client/user;
- Check that this new user will have the same utmi_cp inserted for the last user.



## Workaround



- Use cartman to remove the UTM's information.

