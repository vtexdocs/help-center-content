---
title: 'Incomplete Image Links in Critical CSS Optimization'
id: 1965M3rMbB30pTOCiMMxXj
status: PUBLISHED
createdAt: 2024-10-02T17:52:53.482Z
updatedAt: 2024-10-02T17:53:09.426Z
publishedAt: 2024-10-02T17:53:09.426Z
firstPublishedAt: 2024-10-02T17:52:54.232Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: incomplete-image-links-in-critical-css-optimization
locale: en
kiStatus: Backlog
internalReference: 1110160
---

## Summary


When the critical CSS optimization feature is enabled in Store Framework stores, image links added via CSS are inserted with only the path (path) and not the full URL. This can lead to 404 errors when attempting to access these links through the site's URL.


##

## Simulation



- Access a store that uses the Store Framework.
- Enable the critical CSS optimization feature in the settings.
- Add images via CSS using full links.
- Check the generated CSS file and observe that image links appear only with the path, lacking the complete domain.


##

## Workaround


Currently, there is no workaround for this bug. It is recommended to avoid using images via CSS due to several reasons, including SEO implications and accessibility concerns. Instead, users should add images using image blocks. For icons, it’s advisable to use the method provided here to ensure proper rendering and SEO compliance.





