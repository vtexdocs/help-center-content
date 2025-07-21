---
title: "Searchable flag does not work on legacy CMS Collection"
id: 47spDrddLoEmRbYmlj7wY2
status: PUBLISHED
createdAt: 2022-01-21T14:52:14.951Z
updatedAt: 2022-11-25T22:11:05.005Z
publishedAt: 2022-11-25T22:11:05.005Z
firstPublishedAt: 2022-03-16T16:36:34.866Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: searchable-flag-does-not-work-on-legacy-cms-collection
locale: en
kiStatus: Backlog
internalReference: 322552
---

## Summary


Searchable flag does not work on legacy CMS Collection. Our doc explains that when we use this flag, if we search for the collection name, it should return the itens associated to this collection.



## Simulation


- Create a collection on the legacy CMS;
- Use the flag "searchable";
- Check on the front / search result that if we search for the collection name, it will not render the collections itens.



## Workaround


There are 2 workarounds:
- Use a redirect to the collections URL;
- Create a landing page and associate it to the collection search result: https://help.vtex.com/pt/tutorial/como-criar-landing-pages-com-urls-customizadas--q0p2UU6sBaYcEMsq24YSi

