---
title: Portal Legacy CMS Redirect with parameters in URL does not work
id: 6jcBApKHEZnkLuzoIac03u
status: PUBLISHED
createdAt: 2022-03-16T22:06:03.075Z
updatedAt: 2022-11-25T22:10:57.574Z
publishedAt: 2022-11-25T22:10:57.574Z
firstPublishedAt: 2022-03-16T22:06:03.570Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: portal-legacy-cms-redirect-with-parameters-in-url-does-not-work
kiStatus: No Fix
internalReference: 444496
---

## Summary


Portal Legacy CMS Redirect won't work if the URL From has parameters. If the parameter is a utm_source, it will work. If the parameter is any other type, it will not work.



## Simulation


- Register a redirect in legacy CMS containing `?something`
- Check the redirect not working.



## Workaround


There is no workaround for Portal Web Store.

