---
title: "Uploading more than one existing file at a time does not update all files in File Manager"
id: 3uuWWVR3g8hFuXnPQ2Yaa8
status: PUBLISHED
createdAt: 2021-09-27T20:50:23.329Z
updatedAt: 2022-12-22T20:41:03.382Z
publishedAt: 2022-12-22T20:41:03.382Z
firstPublishedAt: 2021-09-27T20:57:22.900Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: uploading-more-than-one-existing-file-at-a-time-does-not-update-all-files-in-file-manager
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When you upload two or more existing files to File Manager simultaneously, only the first file is updated.

## Simulation

1. In the Admin, click on the **CMS** module.
2. Click **Layout**.
3. Click on the **CMS** folder.
4. Click on the **Files Manager** folder.
5. Click on one of the **Files Manager**’s folders.
6. Click on the `Add` button and select two or more files with the same name of existing files.
7. Click `Save File`. 

After saving, the following message will be displayed:

![File manager](//images.contentful.com/alneenqid6w5/4Z7tY3FKCDV1Cz6Whji6HI/d730b6accf6caeb81b373745b20c337d/image.png)

This means that only one file was identified; the others are not being validated. All files are uploaded, but only one will replace its previous version.

## Workaround

A possible workaround is to update one file at a time.

