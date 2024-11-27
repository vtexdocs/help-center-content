---
title: "Automatic field doesn't calculate the field correctly when set to "Calculate during the first hour of the day'"
id: 6DieNCI6paEUeg06cKsCYI
status: PUBLISHED
createdAt: 2018-12-17T18:37:45.246Z
updatedAt: 2022-12-22T20:45:49.754Z
publishedAt: 2022-12-22T20:45:49.754Z
firstPublishedAt: 2018-12-17T19:10:10.371Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slugEN: automatic-field-doesnt-calculate-the-field-correctly-when-set-to-calculate-during-the-first-hour-of-the-day
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The automatic field works correctly when set to recalculate itself when there is a new entry.  It stops working however, when set to one of the "first hour" options. ![inline1511102536](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Master%20Data/automatic-field-doesnt-calculate-the-field-correctly-when-set-to-calculate-during-the-first-hour-of-the-day_1.png)

## Simulation


1. Access https://{{account}}.ds.vtexcrm.com.br
2. Click on the "Automatic Field" tab
3. Choose the  data type
4. Select "First hour of the day" from the dropdown.

## Workaround

You can develop a middleware using VTEX.IO to emulate the automatic field's logic and have it set the field's value accordingly.

