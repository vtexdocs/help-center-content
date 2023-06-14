---
title: 'File Manager upload with two one more existent files does not update all the files, only the first'
id: 2LHdzsFFe83E1Tf0Z4j66y
status: PUBLISHED
createdAt: 2022-03-17T00:20:51.454Z
updatedAt: 2022-11-25T22:10:54.509Z
publishedAt: 2022-11-25T22:10:54.509Z
firstPublishedAt: 2022-03-17T00:20:52.317Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: file-manager-upload-with-two-one-more-existent-files-does-not-update-all-the-files-only-the-first
locale: en
kiStatus: Backlog
internalReference: 418253
---

## Summary


File Manager upload with two one more existent files does not update all the files, only the first



## Simulation


- Go to /admin/a, file manager, and add 2 or more files to upload;
- Now upload two other files with the same name:
- We will receive a warning telling usthat the file exists, asking us if we want to replace it.

This warning is telling us only about one file, the second one is not being validated.

- Both files upload, but only one will replace the older one.



## Workaround


Update one file per time.

