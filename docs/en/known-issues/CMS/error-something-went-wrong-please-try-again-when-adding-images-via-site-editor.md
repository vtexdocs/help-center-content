---
title: 'Error "Something went wrong. Please try again." when adding images via Site Editor'
id: r3QVP1kp8HApP83bOi6t9
status: PUBLISHED
createdAt: 2023-11-07T22:33:02.296Z
updatedAt: 2023-11-07T22:34:52.005Z
publishedAt: 2023-11-07T22:34:52.005Z
firstPublishedAt: 2023-11-07T22:33:03.046Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: error-something-went-wrong-please-try-again-when-adding-images-via-site-editor
locale: en
kiStatus: Backlog
internalReference: 932126
---

## Summary


When adding images via Site Editor, the message "`Something went wrong. Please try again.`" can occasionally occur.
This is due to the number of images per block. At the moment, we don't have an exact number of images that causes this issue, but we have noticed this behavior above 20 images in the same block.


##

## Simulation



- Access the CMS Site Editor (for example https://my-account-here.myvtex.com/admin/cms/site-editor);
- Select the block with the new images to be added;
- When the addition is saved, the message "`Something went wrong. Please try again.`" will appear in the bottom right-hand corner:
 ![](https://vtexhelp.zendesk.com/attachments/token/97C4wewa6iz3f7bsmHtdnXu1H/?name=image.png)


##

## Workaround


You can add the images directly to the theme, or break them into blocks with flex layout (ref https://developers.vtex.com/docs/apps/vtex.flex-layout).




