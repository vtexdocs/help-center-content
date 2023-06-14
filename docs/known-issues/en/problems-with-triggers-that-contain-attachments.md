---
title: 'Problems with triggers that contain attachments'
id: 2ESGyVDhYIwIG8cEsGUMOy
status: PUBLISHED
createdAt: 2018-12-05T13:57:01.530Z
updatedAt: 2022-12-23T17:55:19.274Z
publishedAt: 2022-12-23T17:55:19.274Z
firstPublishedAt: 2018-12-05T16:08:44.694Z
contentType: knownIssue
productTeam: Master Data
author: TnXcuQydAAOuwWACo864E
tag: Master Data
slug: problems-with-triggers-that-contain-attachments
kiStatus: Backlog
internalReference: 
---

## Summary

When configuring a trigger to send an email containing an attachment, the system will send the email but fail to include the attachment.

This known issue typically affects accounts who have configured a form on their website where the user attached a curriculum (ex: Work with us), or product specifications.

## Simulation


1. Access the account's Dynamic Storage ( https://{{account}}.ds.vtexcrm.com.br/)
2. Click on the Triggers tab and configure the actions accordingly
3. Click on Anexo (attachment) and select "Arquivo" (File) from the dropdown
4. The trigger will send the email successfully but will not contain the attachment.

## Workaround

Althout there is no workaround at the moment that allows the file to be stored with VTEX and used as a trigger, the desired functionality can be reproduced in a different way:
The user can configure the client facing form to accept a URL (where the file is stored externally.  The end user can store the file in a seperate service (GoogleDrive, Dropbox, S3) and copy paste the Url into that field.

