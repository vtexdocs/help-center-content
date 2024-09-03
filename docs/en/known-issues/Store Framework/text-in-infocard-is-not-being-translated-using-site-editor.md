---
title: 'Text in InfoCard is not being translated using site editor'
id: 5HYTZvxkPoTZltMkZcVfVO
status: PUBLISHED
createdAt: 2024-06-13T18:47:41.470Z
updatedAt: 2024-07-03T13:58:33.037Z
publishedAt: 2024-07-03T13:58:33.037Z
firstPublishedAt: 2024-06-13T18:47:42.396Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: text-in-infocard-is-not-being-translated-using-site-editor
locale: en
kiStatus: Backlog
internalReference: 1049491
---

## Summary


When trying to translate a text using the site editor for the info card component, the changes won't apply in the store front.


##

## Simulation



1. Open site editor
2. Select info card component
3. Change the text label
4. Save changes
5. Visualize the page and the text will be the same no matter the locale selected


##

## Workaround


Make sure the headline is empty in both the store code and site editor.
If you are not sure if it's empty in the site editor, you can reset the content by going through the site editor version > reset.

Follow the documentation here and the contexts here to set the label as desired instead.

If this still doesn't solve you can you a rich text and an image component separately inside the info card.




