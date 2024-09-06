---
title: 'Voucher cannot be configured for restricted use in the case of a CNPJ'
id: 4k3FdaYP3WUqYsAeUSGY22
status: PUBLISHED
createdAt: 2017-04-11T21:26:42.491Z
updatedAt: 2022-12-22T20:54:14.031Z
publishedAt: 2022-12-22T20:54:14.031Z
firstPublishedAt: 2017-04-11T21:40:39.506Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_35
tag: Portal (CMS)
slug: voucher-cannot-be-configured-for-restricted-use-in-the-case-of-a-cnpj
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

A store needs to share a voucher with the members of a specific group, e.g. a company. However the restriction option cannot be applied for a CNPJ.

So when a voucher is configured in the __Restricted__ as `Yes`, the restriction is only applied to a CPF.

If a CNPJ only has one CPF associated with it, the voucher will function.

## Simulation

1. Access the __Catalog__ module.
2. Click on __Campaign Controls__.
3. Click on __Voucher__.
4. Create or change a voucher.
5. Insert CNPJ.
6. Mark as Restricted.
7. Mark as Reusable.

The voucher will not be effective if used by users registered in the store whose records show information on this CNPJ.

## Workaround

The workaround would be to maintain a restriction by CPF.

This system, included in the Portal, is being replaced. It is now possible to use the new Giftcard Hub with APIs.

See our document on [integration with gift 
card](/en/tutorial/how-to-integrate-with-a-gift-card/).

Also our [technical documentation on APIs](/en/developer-docs/).

