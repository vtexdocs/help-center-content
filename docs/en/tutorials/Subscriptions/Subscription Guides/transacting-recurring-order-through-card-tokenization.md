---
title: 'Transacting a recurring order through card tokenization'
id: ONKkNx2M8KQOcCYySOm6S
status: ARCHIVED
createdAt: 2017-10-29T16:22:10.308Z
updatedAt: 2020-02-11T15:10:58.194Z
publishedAt: 
firstPublishedAt: 2017-10-29T16:26:41.089Z
contentType: tutorial
productTeam: Post-purchase
author: authors_39
slugEN: transacting-recurring-order-through-card-tokenization
locale: en
legacySlug: transacting-recurring-order-through-card-tokenization
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

A card is tokenized as follows: when the first purchase is closed and recurring orders marked, the Payments communicates with the acquirer, which saves the card data and creates a token. This token returns to the Payments, and VTEX then saves the information. 

Each time we make a transaction with the same token, the acquirer will realize that this is a recurring order and will not request the card details again, as they are already saved in the database. Examples of acquirers that use this model are Braspag and Adyen.
