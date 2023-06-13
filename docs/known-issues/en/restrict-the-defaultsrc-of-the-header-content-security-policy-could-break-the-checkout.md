---
title: Restrict the default-src of the header Content Security Policy could break the Checkout
id: 5fQXzMrLchSUENa53MXgf
status: PUBLISHED
createdAt: 2023-03-02T17:29:31.623Z
updatedAt: 2023-03-02T17:29:32.102Z
publishedAt: 2023-03-02T17:29:32.102Z
firstPublishedAt: 2023-03-02T17:29:32.102Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: restrict-the-defaultsrc-of-the-header-content-security-policy-could-break-the-checkout
kiStatus: Backlog
internalReference: 763359
---

## Summary


Restricting the Content Security Policy header can cause checkout files not to be loaded. For example, the `default-src 'self'` configuration can cause files coming from vtex.com not to be loaded


##

## Simulation



1. Set **default-src** of the Content Security Policy
2. try to buy something through checkout
3. See the error on the console

    Content Security Policy: the page's settings blocked the loading of a resource at 



##

## Workaround


Remove the header




