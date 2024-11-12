---
title: 'Webops app is not fully integrated with Headless CMS'
id: 577fIocKB9BYYCOkN9dZfW
status: PUBLISHED
createdAt: 2024-06-12T19:42:12.627Z
updatedAt: 2024-11-04T13:13:01.598Z
publishedAt: 2024-11-04T13:13:01.598Z
firstPublishedAt: 2024-06-12T19:42:13.699Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: webops-app-is-not-fully-integrated-with-headless-cms
locale: en
kiStatus: Fixed
internalReference: 1048810
---

## Summary


The app `vtex.webops` is not fully integrated with the headless CMS, this is related to externally hosted Github repositories and the publishing process


##

## Simulation


Try making an update on the headless CMS using the webops app, this will fail and there's not going to be a commit on the repository


##

## Workaround


The workaround is to manually create a commit in your store's Git repository to trigger the store build and apply the changes made in the Headless CMS.




