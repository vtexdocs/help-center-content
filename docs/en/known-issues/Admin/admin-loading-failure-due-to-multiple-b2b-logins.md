---
title: "Admin loading failure due to multiple B2B logins"
id: 2RXPpq6UovaZPLIlA0Kxfb
status: PUBLISHED
createdAt: 2025-05-07T13:01:56.184Z
updatedAt: 2025-05-07T13:01:56.848Z
publishedAt: 2025-05-07T13:01:56.848Z
firstPublishedAt: 2025-05-07T13:01:56.848Z
contentType: knownIssue
productTeam: Admin
author: 2mXZkbi0oi061KicTExNjo
tag: Admin
slugEN: admin-loading-failure-due-to-multiple-b2b-logins
locale: en
kiStatus: Backlog
internalReference: 1221787
---

## Summary



This problem occurs in accounts configured for B2B flow, when the same user accesses the webstore and admin using different e-mail addresses (or even the same ones, in different sessions).
As both interfaces share the same base domain (`*.myvtex.com`), the authentication cookies saved by the browser - especially the `VtexIdClientAutCookie` - conflict.
During the loading of some admin screens, such as the Orders module, the system uses session tokens based on these cookies to validate permissions. When multiple logins are active in the same domain, the token may not match the expected session, resulting in a 500 error in the interface calls.
This scenario is common, for example, when a B2B user logs into the store with a personal email and simultaneously accesses the admin with a corporate email, the overlapping of cookies causes authentication failures and blocks parts of the UI from loading.


##

## Simulation




- Access the webstore by logging in with the e-mail `xxxx@example.com`,


- in another tab, access the admin by logging in with a different e-mail, such as `xxxx@othereExample.com`


- Navigate to the Orders module in the admin.

- Please note that the loading of orders may fail, resulting in error 500 due to a session cookie conflict.



##

## Workaround



To fix this, log out of both environments (webstore and admin) and log back in using the same e-mail address in both. This ensures that cookies are synchronized correctly, eliminating the conflict.





