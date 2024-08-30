---
title: 'Redirects are being counted multiple times'
id: 51JfHBdp72duH5cBWMYl0t
status: PUBLISHED
createdAt: 2024-07-16T19:48:36.586Z
updatedAt: 2024-08-05T16:47:07.922Z
publishedAt: 2024-08-05T16:47:07.922Z
firstPublishedAt: 2024-07-16T19:48:37.314Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: redirects-are-being-counted-multiple-times
locale: en
kiStatus: Fixed
internalReference: 1066548
---

## Summary


When trying to upload a file with more than 200 redirects, the front gets into a loop and reads those redirects three times. This can lead to more redirects on the error message on the screen or in the loading modal. The redirects are not being duplicated, but we are reading them more than once.


##

## Simulation


Try uploading a file with 930 redirects, for example. The loading modal will appear with a higher number than 930:
 ![](https://vtexhelp.zendesk.com/attachments/token/vypbPdcFp4KtjVvI5rL4tHQXU/?name=image.png)

if the file contains an error, you can find a similar error message as this:
 ![](https://vtexhelp.zendesk.com/collaboration/graphql/attachments/download/s3-145778c5-53eb-4002-9b91-1b43f7394896/image.png)
This is just a front error, and it is not impacting the upload of redirects itself.


##

## Workaround


N/A





