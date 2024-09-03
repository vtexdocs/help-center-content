---
title: 'Headless CMS ignores array validation settings'
id: 1szfagZFJHmevSWDTyd45e
status: PUBLISHED
createdAt: 2024-06-07T14:22:41.366Z
updatedAt: 2024-06-07T14:22:41.992Z
publishedAt: 2024-06-07T14:22:41.992Z
firstPublishedAt: 2024-06-07T14:22:41.992Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: headless-cms-ignores-array-validation-settings
locale: en
kiStatus: Backlog
internalReference: 1046372
---

## Summary


When trying to configure array validation rules in the Headless CMS, such as minimum and maximum array items, the validation errors are not shown to the user and it is possible to save the schema without passing validation.

The expected scenario would be to block the screen and show a message like:

    "keyword": "minItems", "message": "must NOT have fewer than 3 items",



##

## Simulation


Try adding a section that has a validation rule. If you don't respect the validation the hCMS will let you publish the content normally.


##

## Workaround


N/A





