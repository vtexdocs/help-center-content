---
title: "Image Spreadsheet not importing. Error message: Fail to process record."
id: 4HKn7B4b4Au5NFfg87Zu6T
status: PUBLISHED
createdAt: 2022-11-04T12:17:16.480Z
updatedAt: 2022-11-25T21:41:55.540Z
publishedAt: 2022-11-25T21:41:55.540Z
firstPublishedAt: 2022-11-04T12:17:17.206Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: image-spreadsheet-not-importing-error-message-fail-to-process-record
locale: en
kiStatus: Backlog
internalReference: 691803
---

## Summary



Sometimes, when trying to import a image spreadsheet with URLs from vteximg.com.br or vtexassets.com that are set as "https://' instead of "http://" the import fails. The error message is:

`"Fail to process record. Make sure your worksheet data is consistent and try again. Error details: An error ocurred while sending the request."`
 ![](https://vtexhelp.zendesk.com/attachments/token/fenodCFcwpVyXYWUj6kgoi1fx/?name=image.png)



## Simulation



1. Try to import a spreadsheet using URLs from vteximg.com.br or vtexassets.com that contain https://...
2. Check that the import fails
3. Try to import the same spreadsheet using now http://
4. Check that the import works.

PS: If on step 4 the import still fails, check if the image is set as .jpg and try again.



## Workaround


Use URLs with http:// when the images are from vteximg.com.br or vtexassets.com

