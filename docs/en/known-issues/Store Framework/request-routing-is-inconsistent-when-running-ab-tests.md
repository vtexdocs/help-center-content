---
title: "Request routing is inconsistent when running A/B tests"
id: 5ukS8DTwmWsM0fNWQLYFQ1
status: PUBLISHED
createdAt: 2023-11-08T21:42:53.184Z
updatedAt: 2025-03-14T14:05:38.931Z
publishedAt: 2025-03-14T14:05:38.931Z
firstPublishedAt: 2023-11-08T21:42:53.723Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: request-routing-is-inconsistent-when-running-ab-tests
locale: en
kiStatus: Fixed
internalReference: 931246
---

## Summary


Store navigation HTTP requests do not honor the workspace selection cookie during the session. In fact, during a single session, a user can receive responses from all workspaces being tested.

The issue occurs when the `VtexWorkspace` cookie expires or is deleted during user browsing. When it happens, a new workspace cookie is generated, which can be the same as before or a different one. If it changes and the user doesn't refresh the page, the issue may occur. If the user is still browsing at the expiration time, subsequent interactions may remain associated with the old workspace, causing the problem. However, this scenario is relatively rare, depending on long sessions and the cookie's expiration without a page refresh.


##

## Simulation



1. Create an A/B test in your store using the VTEX IO CLI
2. Open the "Application" tab in Chrome DevTools (or equivalent in your browser)
  1. Navigate through the store and clear your `VtexWorkspace` cookie or wait for it to expire
  2. You should see values change eventually, even though the session cookie did not change
3. Open the "Network" tab in Chrome DevTools (or equivalent in your browser)
  1. Navigate through the store and observe the HTTP requests that are made
  2. You should see that the `workspace` query string is set to different values throughout the session


##

## Workaround


There is no workaround available.





