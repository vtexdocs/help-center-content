---
title: 'Upload file not working on admin/portal/#/sites/default/code'
id: 5pFAkaymcuOQMAqUDGPQZK
status: PUBLISHED
createdAt: 2023-09-12T13:37:36.429Z
updatedAt: 2023-09-12T13:37:37.323Z
publishedAt: 2023-09-12T13:37:37.323Z
firstPublishedAt: 2023-09-12T13:37:37.323Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: upload-file-not-working-on-adminportalsitesdefaultcode
locale: en
kiStatus: Backlog
internalReference: 897956
---

## Summary


When trying to upload a new file on admin/portal/#/sites/default/code nothing happens. Checking the console on devTools we can see an error message:
"eventTrackerService is not defined"


##

## Simulation



1. Go to admin/portal/#/sites/default/code
2. Go to New -> Upload File -> select the file you wish to import -> click on create
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
3. Check that nothing happens.


##

## Workaround


The WA is to create the file directly on this UI.
Go to New -> File -> Name your file and click on create -> Insert the code and click on save.





