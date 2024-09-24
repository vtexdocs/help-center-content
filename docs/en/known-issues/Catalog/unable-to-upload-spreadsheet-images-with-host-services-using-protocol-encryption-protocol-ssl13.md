---
title: 'Unable to upload spreadsheet Images with host services using protocol encryption protocol SSL1.3'
id: sqoXJSms7bhmdNe0Id111
status: PUBLISHED
createdAt: 2023-06-28T12:23:54.884Z
updatedAt: 2023-06-28T12:25:18.545Z
publishedAt: 2023-06-28T12:25:18.545Z
firstPublishedAt: 2023-06-28T12:23:55.364Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: unable-to-upload-spreadsheet-images-with-host-services-using-protocol-encryption-protocol-ssl13
locale: en
kiStatus: Backlog
internalReference: 851911
---

## Summary


When the images host of the spreadsheet uses a protocol encryption protocol SSL1.3, a error appears when trying to upload the spreadsheet:

"Fail to process record. Make sure your worksheet data is consistent and try again. Error details: An error ocurred while sending the request."

This error happens because our windows service only allows older versions like 1.2 or 1.1.



##

## Simulation



1. Use a host with a more recent protocol version;
2. Try to upload a image, using spreadsheet, that is hosted there;
3. Check that the error message appears.


##

## Workaround


Use a different host or validate with the host to use an older version.





