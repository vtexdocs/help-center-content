---
title: "Error when trying to export a large number of vouchers"
id: 1IGraA4i3GkEMow4iaO6MI
status: PUBLISHED
createdAt: 2017-04-03T19:51:03.949Z
updatedAt: 2022-12-22T20:45:07.101Z
publishedAt: 2022-12-22T20:45:07.101Z
firstPublishedAt: 2017-04-03T20:08:14.092Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: error-when-trying-to-export-a-large-number-of-vouchers
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The voucher export (/admin/Site/Vale.aspx) today doesn't use asynchronous processing (with file sent by email) and this ends up causing large exports to return error to the user.

## Simulation

1. In admin, access the Catalog module.
2. Browse through the menu Control of Campaigns > Vouchers.
3. To export a large number of vouchers (more than 1000, approximately).


## Workaround

- __Option 1__: In the list itself apply filters (for data/status), reducing the number of registers.
- __Option 2__: Redeem the vouchers through API.

