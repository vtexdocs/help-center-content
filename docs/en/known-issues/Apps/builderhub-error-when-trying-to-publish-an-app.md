---
title: "Builder-hub error when trying to publish an app"
id: 5qBBBft0fcEZF2OxA3SCib
status: PUBLISHED
createdAt: 2025-07-18T12:49:09.655Z
updatedAt: 2025-07-24T17:44:11.902Z
publishedAt: 2025-07-24T17:44:11.902Z
firstPublishedAt: 2025-07-18T12:49:10.828Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: builderhub-error-when-trying-to-publish-an-app
locale: en
kiStatus: Backlog
internalReference: 1262332
---

## Summary


When trying to publish an app, you may encounter a builder-hub error. This intermitency normally happens in apps with self-dependency. You'll see an error such as:


    error: node@4.x builder failed to install dependencies through yarn (retries=3)yarn errors:An unexpected error occurred: "http://.vtexassets.com/_v/public/typings/v1//public/@types/: Request failed \"500 Internal Server Error\"". vtex.builder-hub@0.309.0



##

## Simulation


It is not a simple problem to reproduce; it is intermittent.


##

## Workaround


This may be solved after some retries, but if it persists, open a ticket to Product Support to solve it





