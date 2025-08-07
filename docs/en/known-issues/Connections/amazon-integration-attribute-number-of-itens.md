---
title: "Amazon integration attribute Number of itens"
id: 75Afw210mMY9h6dbk3AV8V
status: PUBLISHED
createdAt: 2022-04-07T12:18:04.361Z
updatedAt: 2024-02-16T20:25:56.485Z
publishedAt: 2024-02-16T20:25:56.485Z
firstPublishedAt: 2022-04-07T12:18:05.650Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-integration-attribute-number-of-itens
locale: en
kiStatus: No Fix
internalReference: 557788
---

## Summary



We per contact with Amazon, they changed the required attribute for some categories, and the number_of_itens, became a mandatory field for some categories, due to that we need to fix our integration to send this value to Amazon.



## Simulation



Inside bridge menu, in products section, you will see an error: A value is missing from one or more required columns from this group: [number_of_items = null]



## Workaround


Change global category until we fix this one.

