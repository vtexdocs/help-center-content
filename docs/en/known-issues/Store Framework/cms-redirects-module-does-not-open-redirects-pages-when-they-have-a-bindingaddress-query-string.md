---
title: "CMS Redirects module does not open redirects pages when they have a bindingAddress query string"
id: 2qYP0Jfxx6TxmR75YjALtk
status: PUBLISHED
createdAt: 2024-10-10T19:11:34.872Z
updatedAt: 2024-11-28T17:29:31.405Z
publishedAt: 2024-11-28T17:29:31.405Z
firstPublishedAt: 2024-10-10T19:11:36.240Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: cms-redirects-module-does-not-open-redirects-pages-when-they-have-a-bindingaddress-query-string
locale: en
kiStatus: Backlog
internalReference: 1115321
---

## Summary


When you're navigating a store with a binding address query string (mostly crossborder stores), and try to open a specific redirect through the CMS Redirects module, the page does not open. This happens because the query made to rewriter counts the querystring as part of the variable to search:
 ![](https://vtexhelp.zendesk.com/attachments/token/jls5hNgRD8iSjCKauOrfX6oxS/?name=image.png)

This wrong search leads to the KI: 729503 which affects redirects built with query strings.


##

## Simulation


Try to open a redirect in a crossborder store or any store with a bindingAddress query string.


##

## Workaround


Manage your redirects through CLI or Spreadsheet





