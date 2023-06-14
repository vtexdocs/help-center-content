---
title: 'The API to create/update gift card providers is always updating the current provider when it has never added a new provider before.'
id: 4W5sYMJegRRJIGqa4yhvUQ
status: PUBLISHED
createdAt: 2023-03-10T19:05:01.536Z
updatedAt: 2023-03-10T19:05:02.545Z
publishedAt: 2023-03-10T19:05:02.545Z
firstPublishedAt: 2023-03-10T19:05:02.545Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: the-api-to-createupdate-gift-card-providers-is-always-updating-the-current-provider-when-it-has-never-added-a-new-provider-before
kiStatus: Backlog
internalReference: 768954
---

## Summary


When attempting to add a new provider id for the first time on an account, instead of adding a new provider, the current native provider (VtexGiftCard) gets updated.


##

## Simulation


Use our API to update a provider when the account has never added a new provider.


##

## Workaround


To add a new provider, you must first save the information of our native gift card provider. Once you have saved the info, you can then add the new provider successfully.




