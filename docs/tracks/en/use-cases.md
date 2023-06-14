---
title: 'Use cases'
id: 5k74U1EJm6FzirFczMYHBk
status: PUBLISHED
createdAt: 2020-11-18T13:40:47.138Z
updatedAt: 2020-11-18T17:37:59.283Z
publishedAt: 2020-11-18T17:37:59.283Z
firstPublishedAt: 2020-11-18T17:37:59.283Z
contentType: trackArticle
productTeam: Financial
slug: use-cases
trackId: 1LqUFHQZ3ZQyV5TmugbGNm
trackSlugEN: clustered-payment-conditions
---

Let’s look at some practical examples of how cluster conditions work.

## Exclusive payment conditions

The store can apply such a payment condition to only one customer in its database.
To this end, you can create a cluster from a property that is exclusive to each customer.

## Custom Fields  
The store does not need to only use Master Data’s native fields but can also create the properties that suit the desired business strategies.

Let's think about this from a customer credit perspective, in which a store grants credit to its customers. Every purchase made with this credit generates an invoice that needs to be paid.

No matter how much the store trusts its clients, unforeseen events happen, and these invoices are not always paid on time.

The store can segment customers according to the moment they pay such invoices. In this case, the store would create a property called "Payment", which would be filled with the following values:

- “in advance”
- “on-time”
- “delayed”

This way, it would be possible to apply a payment condition to only those clients that correspond to the values "in advance" and "on-time".

Create two conditions - "Payment + is + in advance", "Payment is on-time" - and set the deadline and installment rule to apply to both.
