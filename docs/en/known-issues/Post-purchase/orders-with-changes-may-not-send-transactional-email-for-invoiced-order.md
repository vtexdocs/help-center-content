---
title: 'Orders with changes may not send transactional email for Invoiced Order'
id: 1tyY0JutqQyJB18U9WTRXX
status: PUBLISHED
createdAt: 2019-02-17T20:45:54.094Z
updatedAt: 2022-12-22T15:19:12.863Z
publishedAt: 2022-12-22T15:19:12.863Z
firstPublishedAt: 2019-02-17T20:49:23.497Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: Pricing & Promotions
slugEN: orders-with-changes-may-not-send-transactional-email-for-invoiced-order
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When an order goes through changes (meaning, changes in orders already completed - [https://help.vtex.com/en/tutorial/change-making-changes-to-an-order]), it may happen that the Invoiced Order email is not sent by the system.

The grouping that is made to issue the invoice does not respect the changes, leading to this scenario and bringing the possibility that the Invoiced Order email is not successfully sent.

This doesn't happen with all orders that receive changes, but only with the ones that go through more than one change or when the grouping created by the system for the invoice issuance cannot consider the changes correctly.

## Simulation

- Make an order;
- Make changes in the order, increasing value and adding a discount (decreasing value);
- Note that the Invoiced Order transactional email won't be sent.

## Workaround

Currently there is no workaround.

