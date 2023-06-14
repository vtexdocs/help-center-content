---
title: 'Changes to the "my account" page do not appear immediately in the domain "vtexcommercestable.com.br"'
id: iUmuXOYVj97sTpqQnJqAU
status: PUBLISHED
createdAt: 2019-03-19T13:23:11.941Z
updatedAt: 2019-12-31T15:17:19.234Z
publishedAt: 2019-12-31T15:17:19.234Z
firstPublishedAt: 2019-03-19T13:34:24.115Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal (CMS)
slug: changes-to-the-my-account-page-do-not-appear-immediately-in-the-domain
kiStatus: Closed
internalReference: 
---

## Summary

When you change data on "my account" page through the "vtexcommercestable.com.br" domain, new information entered can not be viewed immediately - when the page reloads, the old data is still displayed.

This problem is limited to the legacy version of the account page.

## Simulation

1. Access {store}.vtexcommercestable.com.br/account;
2. Sign in and wait to be redirected to the "my account" page;
3. Change the data and wait for the page to reload;
4. The data displayed are those from before the change.

## Workaround

This happens because the previous data were in the browser cache, which after reloading the page delivered the content without consulting the server.

To work around the browser cache, simply refresh the page with `Ctrl/Cmd + Shift + R`. As a result, the page will not use the cache and the data displayed will be the new one.

This happens only in "vtexcommercestable.com.br" environment and although it's related to the store's production version, it will not happen in your final domain.

The scenario in question is permanently fixed in the new "My Account" App that will replace the legacy version soon.

