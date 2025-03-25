---
title: 'Not possible to upload new media/document in a development workspace when entity has more than 10k documents'
id: zhDX1xoXAifH9tYroXCFn
status: PUBLISHED
createdAt: 2023-04-24T20:01:04.211Z
updatedAt: 2024-06-28T16:07:27.058Z
publishedAt: 2024-06-28T16:07:27.058Z
firstPublishedAt: 2023-04-24T20:01:04.779Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: not-possible-to-upload-new-mediadocument-in-a-development-workspace-when-entity-has-more-than-10k-documents
locale: en
kiStatus: Fixed
internalReference: 795940
---

## Summary



It is not possible to upload a new media/document in some entity through media gallery (admin/new-cms/media-gallery) or site editor (admin/cms/site-editor) in a develop workspace when an entity has more than 10k documents because we don't use scroll from Master Data on these scenarios


##

## Simulation




- You must have at least 10k documents in the file manager (these two entities: `vtex_admin_cms_graphql_content`
`vtex_admin_cms_graphql_contentVariant`


- Create a dev workspace (`vtex use devWorkspace`)
- Access: admin/new-cms/media-gallery, in this new dev workspace
- Try to upload a new image
- Image won't be uploaded triggering the scroll error on Master Data

*The same thing happens when you use media gallery through site editor


##

## Workaround




- Upload the images in a production workspace or master and then, you can select them in a develop workspace once they are created
- Do all processes in a production environment/workspace instead of a dev environment (`vtex use prodWorkspace --production`)





