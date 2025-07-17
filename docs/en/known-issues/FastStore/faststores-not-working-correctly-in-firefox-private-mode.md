---
title: "Faststores not working correctly in Firefox Private Mode"
id: 3SMQiZFYt8SSVlOJLIMYvH
status: PUBLISHED
createdAt: 2023-05-19T14:56:53.172Z
updatedAt: 2023-05-19T14:56:53.938Z
publishedAt: 2023-05-19T14:56:53.938Z
firstPublishedAt: 2023-05-19T14:56:53.938Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststores-not-working-correctly-in-firefox-private-mode
locale: en
kiStatus: Backlog
internalReference: 828685
---

## Summary



There's a bug in Mozilla Firefox, especially in a private mode that affects the storage of indexedDB, and Faststore depends on that to work properly. With that, the whole website is not going to work because it depends on indexedDB information for proper usage.

Here are some FAQs related to the issue:

https://bugzilla.mozilla.org/show_bug.cgi?id=1639542
https://bugzilla.mozilla.org/show_bug.cgi?id=1267582
https://bugzilla.mozilla.org/show_bug.cgi?id=1639542
https://bugzilla.mozilla.org/show_bug.cgi?id=781982



##

## Simulation




- Open a store on Faststore in the incognito tab.
- You can validate that there is a limitation in the creation of the indexedDB storage, burdening the operation of the store.


##

## Workaround


No





