---
title: "Delay when editing Checkout files"
id: 4uKQzzpNfbYLKZdhTW4f0O
status: PUBLISHED
createdAt: 2019-09-16T17:25:55.922Z
updatedAt: 2022-12-22T20:45:22.907Z
publishedAt: 2022-12-22T20:45:22.907Z
firstPublishedAt: 2019-09-19T23:45:08.460Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: delay-when-editing-checkout-files
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

You can edit store files directly from your browser when these are added through Checkout Admin.
 
In some cases, it is recommended that you select all the content, copy it to an external editor, and then paste the content back onto Admin to complete any updates.

However, this process can be quite slow when the file is large, especially when the languages used are CSS and Javascript.

In some situations, Admin file access may be completely compromised.

## Simulation

Try accessing or editing any file through the Admin screen.

## Workaround

To get already uploaded files, you can always access your public route from “/files/file.xyz”.

To update or upload a new file, the user can use the “Available” option in the menu __New >__ File __Upload__. In this case, simply fill in the destination name and select the file you want to upload.
 
However, if the file name already exists in the store, the new content will overwrite the previous one and complete the update as such.

