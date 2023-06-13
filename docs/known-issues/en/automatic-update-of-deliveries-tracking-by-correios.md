---
title: Automatic update of deliveries tracking by Correios
id: 7hKUU5Qp4AyCW2QaMQC0S6
status: PUBLISHED
createdAt: 2017-08-16T22:07:06.254Z
updatedAt: 2022-12-22T14:52:07.213Z
publishedAt: 2022-12-22T14:52:07.213Z
firstPublishedAt: 2017-08-16T23:00:56.342Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_4
tag: Order Management
slug: automatic-update-of-deliveries-tracking-by-correios
kiStatus: Backlog
internalReference: 
---

## Summary

The OMS has a tool for the automatic follow-up of mail deliveries (and those using other methods of transport), registering changes in the order, emailing the latest position to the customer and, finally, marking the package as delivered – this information is also passed on to the marketplaces.

Recent changes at the Post Office have made our integration stop working, and the service responsible for this task will have to be rewritten.

## Simulation

The only thing necessary is a valid tracking code for each order. On the following days, as this tracking code is updated, emails should be sent, and this will obviously not happen.

## Workaround

It's possible to send tracking updates via API, with emails continuing to be sent. The same is true for the delivery confirmation, which can also be done on the OMS interface.

![2017-08-16 195850](//images.contentful.com/alneenqid6w5/1IPsGBnkKYggY8m6smeqOA/a2a95afc6fb34e7bfe89c1cab2fdb612/2017-08-16_195850.jpg)

Delivery confirmation via OMS is also passed on to the marketplaces.

Another option is to use solutions developed by partners to track deliveries by Correios, such as [XP Agência's tracking system](https://rastreio.xpagencia.com.br/).

