---
title: 'XML <price> related tags do not load contents for unavailable items'
id: 7u2WDGV9FJl4fXwfOhRx8N
status: PUBLISHED
createdAt: 2024-01-31T19:11:20.119Z
updatedAt: 2024-01-31T19:11:20.846Z
publishedAt: 2024-01-31T19:11:20.846Z
firstPublishedAt: 2024-01-31T19:11:20.846Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: xml-price-related-tags-do-not-load-contents-for-unavailable-items
locale: en
kiStatus: Backlog
internalReference: 974722
---

## Summary


The XML integration loads any tag related to price, such as minPrice, maxPrice, currentPrice, are loaded as a null value tag (<![CDATA[]]>) when the item is not available and also set to show if unavailable.


##

## Simulation


1 - Configure an unavailable SKU in your store to "show even if unavailable".
2 - for a valid XML integration config https://myaccountname.myvtex.com/admin/Site/XmlForm.aspx, set up the "Availability" tag and any availability tag to show.
3 - Use either a GET request or load the created XML URL in your browser.

The result will be an unavailable item, still showing in the XML, but without any price tags:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)


##

## Workaround


There is no workaround. The only option to not integrate items without price is to turn off the "showIfNotAvailable" option.





