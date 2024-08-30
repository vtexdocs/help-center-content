---
title: 'MELI FULL orders not creating Invoice in VTEX'
id: 6SNkDcqCWeDDPm01RrM0FQ
status: PUBLISHED
createdAt: 2024-02-05T11:14:30.020Z
updatedAt: 2024-02-05T11:14:31.187Z
publishedAt: 2024-02-05T11:14:31.187Z
firstPublishedAt: 2024-02-05T11:14:31.187Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: meli-full-orders-not-creating-invoice-in-vtex
locale: en
kiStatus: Backlog
internalReference: 976614
---

## Summary



Currently we have an issue with MELI FULL orders, if the order presented any error during the creating in VTEX, such as SLA error, out of stock, etc. the process to create the invoice in VTEX is not executed. Basically the XML inside embeddedInvocie of OMS is not being created in these cases.


##

## Simulation



If the order presented any error during it's creation, the XML will not placed inside VTEX OMS.


##

## Workaround


to avoid this error the orders should not be stucked in VTEX Bridge, for that always configure the necessary SLAs to avoid this error





