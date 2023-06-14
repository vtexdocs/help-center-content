---
title: 'Simultaneous sending of information generates data loss in the API'
id: 432vwNufq6uolmYjTbClKw
status: CHANGED
createdAt: 2022-05-12T14:51:58.006Z
updatedAt: 2022-06-29T13:12:42.259Z
publishedAt: 2022-05-12T14:51:58.294Z
firstPublishedAt: 2022-05-12T14:51:58.294Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: simultaneous-sending-of-information-generates-data-loss-in-the-api
kiStatus: Backlog
internalReference: 280390
---

## Summary


Simultaneous requests to the orderForm API to include "itemAttachment" (item attachments, in fact) and also to change the item's value (through a telesales user) will cause the data of that same moment to be lost.

This is because this API is not prepared to receive simultaneous requests, with a "lock" feature, so that the data received is processed in series.

The context of a second request may not take into account the first that has just been received. Even if the first one has been registered, the second one can end up regressing the new data, thus ignoring the previous request.

Scenario discussed among the product team here.



## Simulation


- have a cart with several items that have "itemAttachment"
- populate these multiple attachments with simultaneous requests, so that there is overlap between requests

or

- enter a telesales user and try to manually change the price in the cart
- in some moments at the time of this change, the price stays with the previous state



## Workaround


To avoid the scenario, the data must be sent one at a time, with a new request only after the previous request's response.


In graphic example, scenario with overlap, which generates problems:


    |||||
     |||||
      |||||
       |||||

 ![](https://vtexhelp.zendesk.com/attachments/token/0co217uwUcybC3IMTozKcycLF/?name=inline-443505361.png)
​
Suggested, non-overlapping scenario with one request after another:

    |||||
       |||||
           |||||
              |||||

(consider each line as a request, and the `|||||`​ as the time of the request, representing its beginning and end, just like a "waterfall" of requests)

