---
title: 'UI shows an error when exporting catalog files if the email template sender has its own SMTP'
id: 6MCsAvrOHbLTYjuxRHDsuU
status: PUBLISHED
createdAt: 2023-03-15T19:04:48.152Z
updatedAt: 2023-03-15T19:04:59.595Z
publishedAt: 2023-03-15T19:04:59.595Z
firstPublishedAt: 2023-03-15T19:04:48.719Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: ui-shows-an-error-when-exporting-catalog-files-if-the-email-template-sender-has-its-own-smtp
kiStatus: Backlog
internalReference: 771942
---

## Summary



When exporting catalog data using the "Import and Export" module, the UI will show the following message: "There was an unexpected issue: An error has occurred: Error to send email for account (accountname)" indicating that there was an error sending the file to the user's email. However, the email is sent correctly along with the export document.

This behavior only happens when the sender registered in the "Emails Templates" module has its own SMTP settings.


##

## Simulation



1-Register a valid sender with its own provider in the Message Center configurations.
2-Set this sender in the Message Center "Export" template.
3-Try to export any catalog data from the "Import and Export" module.
4-Observe if the message "There was an unexpected issue: An error has occurred: Error to send email for account (accountname)" will be shown.
5-When accessing your email box you will see that the file arrived correctly.


##

## Workaround



Use the VTEX sender instead of using an own SMTP.





