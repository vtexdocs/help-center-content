---
title: 'Request routing is inconsistent when running A/B tests'
id: 5ukS8DTwmWsM0fNWQLYFQ1
status: PUBLISHED
createdAt: 2023-11-08T21:42:53.184Z
updatedAt: 2023-11-08T21:45:26.642Z
publishedAt: 2023-11-08T21:45:26.642Z
firstPublishedAt: 2023-11-08T21:42:53.723Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: request-routing-is-inconsistent-when-running-ab-tests
locale: en
kiStatus: Backlog
internalReference: 931246
---

## Summary


Store navigation HTTP requests do not honor the workspace selection cookie during the session. In fact, during a single session, a user can receive responses from all workspaces being tested.

## Simulation

1. Create an A/B test in your store using the VTEX IO CLI
2. Open the "Application" tab in Chrome DevTools (or equivalent in your browser)
    1. Navigate through the store and clear your `VtexWorkspace` cookie after every click
    2. You should see values change eventually, even though the session cookie did not change
3. Open the "Network" tab in Chrome DevTools (or equivalent in your browser)
    1. Navigate through the store and observe the HTTP requests that are made
    2. You should see that the `workspace` query string is set to different values throughout the session

## Workaround

There is no workaround available. A/B testing is not recommended and their results should not be considered correct until this Known Issue is fixed.


