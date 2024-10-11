---
title: 'Problem in putting discounts in size order'
id: 7JlXcIcicgQwkOkCuce4Ow
status: PUBLISHED
createdAt: 2017-04-03T20:07:11.542Z
updatedAt: 2022-12-22T20:45:13.711Z
publishedAt: 2022-12-22T20:45:13.711Z
firstPublishedAt: 2017-04-03T20:24:06.588Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: problem-in-putting-discounts-in-size-order
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

Ordering the site is not working properly, since when you enter a filter for the best price or top recommendations, the products appear in a random order, or according to the previous filter, and the filter requested is not obeyed.

Filters are rendered automatically when the control `<vtex.cmc:searchResult/>` is used.

## Simulation

- Open a page of the store window.
- Use the filter to put the store window in order.
- or force it directly in the URL with www.{AccountName}.com.br/categoria?PS=12&O=OrderByReviewRateDESC.


## Workaround

Omit this filter option from the combo rendered by the control `<vtex.cmc:searchResult/>` via JavaScript.

