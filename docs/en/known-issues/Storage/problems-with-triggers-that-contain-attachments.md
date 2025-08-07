---
title: "Problems with triggers that contain attachments"
id: 1JzIdsqvDUtbE3W0Hirf8Q
status: PUBLISHED
createdAt: 2025-04-25T13:43:23.677Z
updatedAt: 2025-05-30T14:59:26.634Z
publishedAt: 2025-05-30T14:59:26.634Z
firstPublishedAt: 2025-05-30T14:59:26.634Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: problems-with-triggers-that-contain-attachments
locale: en
kiStatus: Backlog
internalReference: 1215924
---

## Summary


When configuring a trigger to send an email containing an attachment, the system will send the email but fail to include the attachment.

This known issue typically affects accounts that have configured a form on their website where the user attached a curriculum (ex: Work with us), or product specifications.


##

## Simulation



1. Access the account's Dynamic Storage ( https://VTEX.ds.vtexcrm.com.br/)
2. Click on the Triggers tab and configure the actions accordingly
3. Click on Anexo (attachment) and select "Arquivo" (File) from the dropdown
4. The trigger will send the email successfully, but it will not contain the attachment.



##

## Workaround


Although there is no workaround at the moment that allows the file to be stored with VTEX and used as a trigger, the desired functionality can be reproduced in a different way: The user can configure the client facing form to accept a URL (where the file is stored externally. The end user can store the file in a separate service (GoogleDrive, Dropbox, S3) and copy and paste the URL into that field.





