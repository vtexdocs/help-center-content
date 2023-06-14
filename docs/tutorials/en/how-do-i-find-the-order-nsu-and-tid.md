---
title: 'How do I find the order NSU and TID?'
id: frequentlyAskedQuestions_477
status: PUBLISHED
createdAt: 2019-01-24T20:45:53.477Z
updatedAt: 2023-03-30T15:22:23.805Z
publishedAt: 2023-03-30T15:22:23.805Z
firstPublishedAt: 2019-01-24T22:08:43.214Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: how-do-i-find-the-order-nsu-and-tid
legacySlug: how-do-i-find-the-order-nsu-and-tid
subcategory: 3Gdgj9qfu8mO0c0S4Ukmsu
---

NSU and TID are payment data that remain stored on the Orders module. This information is required for queries on the operator or payment gateway, for example. The definitions of each data item are given below.

- **NSU**: Unique sequence number is the identification number of a sales transaction using cards. It is attributed to each tax document issued.
- **TID**: Transaction ID is an identification (or authorization) number of the e-commerce transaction at the operator. This code is not generated in VTEX, but is sent by the operator at the time of authorization. That is, VTEX sends the order data and the gateway or the operator returns the TID.

## Where they are found

This information is notified to VTEX during the transactions and organized for a simple view in **+ information** in the [details of the order](/en/tutorial/how-to-view-the-orders-details).
