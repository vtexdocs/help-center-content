---
title: 'Text in Add to Cart Button are not being translated using site editor'
id: 7rA62h80a1LpDWjgd3SImp
status: PUBLISHED
createdAt: 2024-05-02T17:33:41.019Z
updatedAt: 2024-07-03T18:28:56.642Z
publishedAt: 2024-07-03T18:28:56.642Z
firstPublishedAt: 2024-05-02T17:33:42.188Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: text-in-add-to-cart-button-are-not-being-translated-using-site-editor
locale: en
kiStatus: Backlog
internalReference: 1026103
---

## Summary


When trying to translate a text using the site editor for the Add to Cart Button, the changes won't apply in the store front.


##

## Simulation



1. Open site editor
2. Select Add to Cart Button
3. Change the text label in the button to anything desired
4. Save changes
5. Visualize the page and the text will be the same no matter the locale selected


##

## Workaround


Make sure iconLabel is empty in both the store code and site editor.
If you are not sure if it's empty in the site editor, you can reset the content by going through the site editor version > reset.

Follow the documentation here and the contexts here to set the label as desired instead.




