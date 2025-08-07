---
title: "[MELI] Attribute is being sent to MELI without being mapped from seller"
id: CILYWlvEAlXkcvEYuZ99m
status: PUBLISHED
createdAt: 2023-10-30T10:09:31.578Z
updatedAt: 2023-11-30T11:05:05.907Z
publishedAt: 2023-11-30T11:05:05.907Z
firstPublishedAt: 2023-10-30T10:09:32.150Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-attribute-is-being-sent-to-meli-without-being-mapped-from-seller
locale: en
kiStatus: Fixed
internalReference: 791380
---

## Summary



We currently have an issue which still needs more investigation and details, But there are some categories mapped inside the Mapper feature, and for some attributes which were not mapped but they are currently being sent to MELI.

This will result in some SKUs being exported and some won't as the first SKU includes and undesired attribute, and second SKU won't be exported as MELI have rules that requires all variantion inside the same product must have same attribute combinations.


##

## Simulation



Inside bridge product menu, you will see an error for some SKUs as seen below:
**Variations with different attribute combinations are not allowed.**

This is due to first SKU exported with undesired attribute, and the rest of SKUs are not being sent to that attribute.


##

## Workaround


Is there a workaround for this bug? If yes, describe it here. If not, write "N/A" or "There is no workaround available.". Do not remove this section if there is no workaround, please.





