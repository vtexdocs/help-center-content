---
title: When trying to setup the Braspag anti-fraud, the user is directed to the Braspag affiliation screen
id: YcLMt8AUf9SVN9s3cbKSk
status: PUBLISHED
createdAt: 2022-03-28T01:55:40.554Z
updatedAt: 2022-11-25T22:08:02.641Z
publishedAt: 2022-11-25T22:08:02.641Z
firstPublishedAt: 2022-03-28T01:55:41.087Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: when-trying-to-setup-the-braspag-antifraud-the-user-is-directed-to-the-braspag-affiliation-screen
kiStatus: Backlog
internalReference: 334239
---

## Summary


We have two internal integrations with Braspag, one for anti-fraud and the other for an affiliation (both with the same name). When trying to click on anti-fraud to configure, the user is directed to the affiliation configuration fields. So it is not possible to configure Braspag anti-fraud through the Admin UI



## Simulation



1. Go to Affiliation settings in the admin
2. Trying to create a new Braspag anti-fraud afiliation
3. The form opened is the affiliation configuration and not anti-fraud configuration



## Workaround


The workaround is to configure the anti-fraud via API

