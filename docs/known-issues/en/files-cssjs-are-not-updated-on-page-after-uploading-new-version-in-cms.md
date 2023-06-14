---
title: 'Files (CSS/JS) are not updated on page after uploading new version in CMS'
id: 4qNIpSPGo8a8ugyemwYAuK
status: PUBLISHED
createdAt: 2018-02-09T19:04:53.387Z
updatedAt: 2022-12-22T20:45:29.669Z
publishedAt: 2022-12-22T20:45:29.669Z
firstPublishedAt: 2018-02-09T21:44:00.676Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: files-cssjs-are-not-updated-on-page-after-uploading-new-version-in-cms
kiStatus: Backlog
internalReference: 
---

## Summary

After uploading the updated version of any file relevant to the layout of your website (CSS, JS or even images), the version displayed on the front-end may not be the latest one.

This happens while the template is cached. The request to these files is made with a versioning parameter, in which its value is a *timestamp* of the original file - for example, `/arquivos/style.css?v=636492689128330000`. As long as the *timestamp* is the same, the file will also remain the same.

The main cause of this scenario is that the template doesn't know that a file has been changed, so updating the files is not enough for its cache to expire.

## Simulation

In a given template, update a CSS or Javascript file, uploading it again with the same name, so that it overwrites the old one.

Note that the *timestamp* parameter in the request will not change, and the contents of the file will be the same.

## Workaround

Changing the templates that call the updated files is enough to update the *timestamp*, which will then bring the latest version of the files.

One suggestion to make the workaround easier every time you change a layout file is to create a version control subtemplate that is present in all the templates used in the store. For the content of this subtemplate an HTML comment will suffice, with information that will be updated with each new version of the files.

When the subtemplate is changed, all the templates that read it will be updated, along with the files.

