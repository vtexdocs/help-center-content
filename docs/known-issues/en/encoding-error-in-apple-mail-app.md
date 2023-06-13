---
title: Encoding error in Apple Mail App
id: 1ppf3Edw6gSikk0KY44gmS
status: PUBLISHED
createdAt: 2018-06-26T17:54:35.967Z
updatedAt: 2022-12-22T20:49:03.198Z
publishedAt: 2022-12-22T20:49:03.198Z
firstPublishedAt: 2018-06-26T18:12:03.953Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data,Message Center
slug: encoding-error-in-apple-mail-app
kiStatus: Backlog
internalReference: 
---

## Summary

Apple Mail APP has a bug in the email subject encoding when it has a special character. The subject contains =?UTF-8?Q?S at its beginning.

Apple community link:
https://discussions.apple.com/thread/2811597?tstart=0

## Simulation

Mount an email sending trigger that has a special character in the "Subject" of the email.

Result:

![png](//images.ctfassets.net/alneenqid6w5/2O4zWlYa1WoaQ0sUMUKS2Q/2862790a2e5124fcb612a7f17774a339/png.png)

## Workaround

Do not use special characters in e-mail subjects.


