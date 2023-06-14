---
title: "Trigger's Source E-mail field doesn't accept placeholder"
id: 4EW6n1Ymus8CGSEW2CuK44
status: PUBLISHED
createdAt: 2017-12-12T17:50:04.943Z
updatedAt: 2022-12-22T20:48:42.548Z
publishedAt: 2022-12-22T20:48:42.548Z
firstPublishedAt: 2017-12-12T17:53:10.088Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: triggers-source-email-field-doesnt-accept-placeholder
kiStatus: Backlog
internalReference: 
---

## Summary

In the trigger settings, you can insert an e-mail in the "Source e-mail" field, but it does not accept a placeholder, even if it's an e-mail type.

## Simulation

1. Access or create a trigger;
2. Click __actions__ if positive;
3. Fill in the "Source email" field with a placeholcer. For example: "{!email}";
4. Run the trigger;
5. The email will not be sent.

## Workaround

The "Source e-mail display name" field accepts placeholders and can be used to cover most scenarios in which you'll need a placeholder in this field.

