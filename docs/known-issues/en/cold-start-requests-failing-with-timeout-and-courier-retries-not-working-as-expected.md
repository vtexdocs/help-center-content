---
title: Cold Start requests failing with timeout and courier retries not working as expected
id: 61zSmTqfPSZTjL7PrAH737
status: PUBLISHED
createdAt: 2023-04-13T12:42:46.846Z
updatedAt: 2023-05-08T17:40:53.055Z
publishedAt: 2023-05-08T17:40:53.055Z
firstPublishedAt: 2023-04-13T12:42:47.259Z
contentType: knownIssue
productTeam: App Platform
author: 2mXZkbi0oi061KicTExNjo
tag: App Platform
slug: cold-start-requests-failing-with-timeout-and-courier-retries-not-working-as-expected
kiStatus: Backlog
internalReference: 789499
---

## Summary


When an app does not receive requests for some time, it goes into cold start. Courier then makes several attempts to send events until the app "wakes up". When the app doesn’t “wake up” the requests to it can fail due to a timeout. As a result, it turns out that some events never seem to be sent. This is an intermittent behavior.


##

## Simulation


Find an app that is into cold start
Follow its logs via OpenSearch
Sometimes it is possible to see that one or more events will never be sent.


##

## Workaround


There is no workaround available.





