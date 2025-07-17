---
title: "XML price formatting unsupported by Google Shopping"
id: epKPG9W2zuecMoW2KCuyk
status: PUBLISHED
createdAt: 2018-04-11T21:23:55.057Z
updatedAt: 2022-12-22T20:48:44.773Z
publishedAt: 2022-12-22T20:48:44.773Z
firstPublishedAt: 2018-04-11T22:29:06.698Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: xml-price-formatting-unsupported-by-google-shopping
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The VTEX XML service renders the price tags in the format `$ 99999,99`, with a comma as decimal separator.

Recently, Google Shopping stopped accepting the comma as a separator, being necessary to send it as a dot.

## Simulation

1. From the admin menu, access the Catalog.
2. From the Catalog menu, enter Settings > XML.
3. Access an XML file that is compatible with Google Shopping.
4. Search for one of the `<g:price>` tags.

## Workaround

Not being a format available in XML, the current solution is to use the API integration with Google Shopping, which is available as a native marketplace integration in VTEX.


