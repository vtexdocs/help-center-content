---
title: 'User receives error message on first registration in My account'
id: 1eFTt4iIxZsBPxd3UQ436r
status: PUBLISHED
createdAt: 2022-07-21T15:40:25.508Z
updatedAt: 2022-11-25T22:01:57.125Z
publishedAt: 2022-11-25T22:01:57.125Z
firstPublishedAt: 2022-07-21T15:40:26.082Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: user-receives-error-message-on-first-registration-in-my-account
locale: en
kiStatus: Backlog
internalReference: 619909
---

## Summary


When a new user registers in **My Account**, the page executes two requests, one sending the data and the other consulting the `userid` of that user, but in this second request the return is 404 not found, and the page displays an error message to the user.



## Simulation


** **

1. Enter the home
2. Access my account with an unregistered user.
3. Log in
4. At this moment, the UI will display an error message "`There was an error communicating with the system, try to reload the page`".
5. In the console, it will be possible to see a _**graphql**_ request for profile system returning 404.



## Workaround


There is no workaround to avoid the error.
NOTE; however, when reloading the page, the flow usually follows.

