---
title: '403 error for all URLs containing develop-'
id: X6JDmLhD0StgHPGXJd9cZ
status: PUBLISHED
createdAt: 2024-02-01T13:46:53.024Z
updatedAt: 2024-02-01T13:46:54.008Z
publishedAt: 2024-02-01T13:46:54.008Z
firstPublishedAt: 2024-02-01T13:46:54.008Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: 403-error-for-all-urls-containing-develop
locale: en
kiStatus: Backlog
internalReference: 975182
---

## Summary


It is expected that a URL can contain any word without generating an error, but the word "**develop"** followed by the "**-**" character generates an automatic 403 error.
For exemple, a product with the text link  `how-to-develot-a-culture-of-custumer-centricity` will display a 403 erro, since its contain the string "develop-".


##

## Simulation



1. Put the string "develop-" in a text link
2. Load the product
3. See the 403 error


##

## Workaround


Not use the string "develop-"





