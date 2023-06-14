---
title: "Page's internal collection links have a nonexistent canonical URL"
id: 1sJzMe74vio2Wkm60q6m6i
status: PUBLISHED
createdAt: 2017-12-21T17:38:14.109Z
updatedAt: 2022-12-22T20:46:13.577Z
publishedAt: 2022-12-22T20:46:13.577Z
firstPublishedAt: 2017-12-21T18:42:13.086Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: pages-internal-collection-links-have-a-nonexistent-canonical-url
kiStatus: Backlog
internalReference: 
---

## Summary

When creating a URL in CMS and associating that URL by default with a collection, the creation of a collection friendly URL becomes possible.

When accessing the link, the search result is generated together with a lateral filter sidebar. When clicking on any of these filters, you'll notice that the ending of the URL has the collection ID added to it, together with other parameters.

When accessing any of these links and analyzing the canonical URL, it's clear that the parameters are being excluded while the collection ID is being kept at the end of the URL as a path, which in turn leads to this URL being nonexistent, thus affecting the store's SEO.

## Simulation

1. Access the link with the collection's content.
2. Access any link of the side filters.
3. Inspect the HTML and analyze the canonical tag.
4. Enter the URL indicated in the canonical tag, where you'll notice that the collection ID is displayed at the end of the URL but that the URL doesn't exist.

## Workaround

There currently no workaround for this case.

