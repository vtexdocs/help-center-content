---
title: "My Account" page does not work on domain "myvtex.com"
id: 1EW2Fuwbt3vO9uF8b9zRz4
status: PUBLISHED
createdAt: 2019-03-19T13:18:13.540Z
updatedAt: 2019-12-31T15:17:09.999Z
publishedAt: 2019-12-31T15:17:09.999Z
firstPublishedAt: 2019-03-19T13:21:54.767Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal (CMS)
slug: my-account-page-does-not-work-on-domain-myvtex-com
kiStatus: Closed
internalReference: 
---

## Summary

When trying to change data on "My Account" page (`/account`) through `myvtex.com` domain, they are not updated correctly.

This problem is limited to the legacy version of the account page.

## Simulation

1. Access `{store}.myvtex.com/account`;
2. Sign in and wait to be redirected to "My Account" page;
3. Try to change the data.

You may notice that there is a 404 error in DevTools requests.

## Workaround

This happens only in "myvtex.com" environment and can be bypassed by using "vtexcommercestable.com.br".

Since the store's final domain is based on "vtexcommercestable", this problem will not happen in production.

This scenario is permanently fixed in the new "My Account" App that will replace the legacy version soon.

