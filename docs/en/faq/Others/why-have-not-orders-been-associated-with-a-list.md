---
title: 'Why have not orders been associated with a list?'
id: 1Ksug2wESM5kpANvTdjJNe
status: PUBLISHED
createdAt: 2019-01-29T18:03:47.228Z
updatedAt: 2019-12-31T14:24:14.246Z
publishedAt: 2019-12-31T14:24:14.246Z
firstPublishedAt: 2019-01-29T18:05:13.013Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: authors_59
slug: why-have-not-orders-been-associated-with-a-list
locale: en
legacySlug: why-have-not-orders-been-associated-with-a-list
---

If orders placed in your store are not being associated with their respective lists, it's possible that the purchase button on your page is customized.

On buttons used to close the purchase that don't use the VTEX native control, you must pass the `&gr={listId}` parameter to associate the order with the list that the client wants.

Using the [VTEX native control](/en/tutorial/buy-button-control) (`<vtex.cmc:BuyButton/>`) to render the purchase button, the order is correctly associated with the desired list.
