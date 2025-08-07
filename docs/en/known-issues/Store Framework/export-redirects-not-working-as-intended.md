---
title: "Export Redirects not working as intended"
id: 5WoiJDQCSMDCwCn1auNwC4
status: PUBLISHED
createdAt: 2022-04-05T12:53:18.824Z
updatedAt: 2024-01-29T18:40:08.833Z
publishedAt: 2024-01-29T18:40:08.833Z
firstPublishedAt: 2022-04-05T12:53:19.875Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: export-redirects-not-working-as-intended
locale: en
kiStatus: Backlog
internalReference: 537962
---

## Summary



When you try to export the redirect, either through the terminal or through the page on the CMS it brings different sizes of files, with possible different results inside, this isn't the expected behavior since there are no changes done on the redirects that could explain the differences.



##

## Simulation



(Terminal) Follow the steps on the documentation: https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-managing-url-redirects

Check the files returned and you can see in some cases the difference between the two files extracted.

(Admin UI) Go the the admin > CMS > Redirects change between the pages on the pagination and click on export you will see the differences in the files that are returned.


##

## Workaround


N/A





