---
title: "Users with more than one order registered on BK entity with different emails can not see the orders on My Account page"
id: 43NLxAbOtyVzOCdS9Dns8c
status: PUBLISHED
createdAt: 2024-02-21T22:30:42.218Z
updatedAt: 2024-02-21T22:30:43.137Z
publishedAt: 2024-02-21T22:30:43.137Z
firstPublishedAt: 2024-02-21T22:30:43.137Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: users-with-more-than-one-order-registered-on-bk-entity-with-different-emails-can-not-see-the-orders-on-my-account-page
locale: en
kiStatus: Backlog
internalReference: 986324
---

## Summary


Due profile unification some users can have orders with diffents emails, and this a problem to show the orders on my account (my orders) page.

The my orders request this info on BK entity of Master Data to remove the impact of indexing delay, but the BK has the history and orders with different emails. But the OMS has the code line to check if the email returned is correct, checking the consultant email and the email registered on orders.


##

## Simulation


Two orders created with different emails, example joao@gmail.com and joao2@gmail.com, when this user has the unification profile only one email will be valid.
After that if the joao2@gmail.com log in on my account page, it will not be possible to see the orders because there is an old order without character "2" on email, so different main key (email.)




##

## Workaround


There is no workaround for now.





