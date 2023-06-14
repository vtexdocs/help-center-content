---
title: 'Tags title and description are ignored in static template'
id: 2ElYglcUPOQieoUUG6akqo
status: PUBLISHED
createdAt: 2017-09-05T20:55:36.892Z
updatedAt: 2022-12-22T20:43:24.475Z
publishedAt: 2022-12-22T20:43:24.475Z
firstPublishedAt: 2017-09-05T21:21:03.197Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slug: tags-title-and-description-are-ignored-in-static-template
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

In static templates that are not for product, department, category or brand the title and description tags - when inserted directly into the template - are ignored by the system.

The title default becomes the name of the highest level folder plus the name of the website.

Example:

Website: `OnlineStore`

Folders:
- `Institutional`
- `Frequently Asked Questions`
           
The `Frequently Asked Questions` page will be titled "Institutional - OnlineStore".

## Simulation

1. Create a first-level or lower folder.
2. Place the tags `<title>` and `<description>` inside the `<head>`

## Workaround

1. Create a [custom control](/en/faq/what-is-the-purpose-of-the-customized-control) with type HTML and insert the tags `<title>` and `<description>`.
2. Insert the custom control into the `<head>` of the static template.

