---
title: 'Incorrect canonical tag on HTTPS pages'
id: 45d21Kz3hYsie6MaO24ioC
status: PUBLISHED
createdAt: 2018-01-24T14:54:21.165Z
updatedAt: 2022-12-22T20:46:22.053Z
publishedAt: 2022-12-22T20:46:22.053Z
firstPublishedAt: 2018-01-24T15:12:46.679Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: incorrect-canonical-tag-on-https-pages
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

Upon activating a specific HTTPS folder, the _canonical_ HTML tag continues to render a HTTP page link, when it should in fact follow the page protocol in question (which changes to HTTPS).

## Simulation

1. Activate HTTPS in a single folder of the site ([guide](https://help.vtex.com/tutorial/--frequentlyAskedQuestions_4378));
2. Check the _canonical_ tag in the rendered HTML.

![image](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Marketing%20&%20Merchandising/incorrect-canonical-tag-on-https-pages_1.png)

## Workaround

This type of behavior only occurs when specific folder have HTTPS activated.

By activating **sitewide** HTTPS (([guide](http://help.vtex.com/en/tutorial/--1igIyCv5IiGWGIekqYYI02)), the _canonical_ tags remain correct, rendering the link in HTTPS.

