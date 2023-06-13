---
title: Customer GiftCard not located in the administrative module when performing a CPF query
id: 57ReN0F8H6iAsimuMoUe8Q
status: PUBLISHED
createdAt: 2017-07-27T15:42:13.805Z
updatedAt: 2022-12-22T15:07:19.226Z
publishedAt: 2022-12-22T15:07:19.226Z
firstPublishedAt: 2017-07-27T17:11:11.501Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_31
tag: Portal (CMS),Payments
slug: customer-giftcard-not-located-in-the-administrative-module-when-performing--cpf-query
kiStatus: Backlog
internalReference: 
---

## Summary

When performing a GiftCard query in the Admin by ID (document), the customer's voucher is not listed.

![vale](//images.contentful.com/alneenqid6w5/78Mt2DDgaIwg2I66gSYGgM/66de95f8e3b3b73d20a0165f4da67f88/vale.png)

## Simulation

When performing a query by ID, the system includes a mask in the following format: 999.999.999-99. However, when a Voucher is created by API, the ID is registered in the following format: 99999999999 (without dots or hyphens).

To simulate this scenario:

1. Create a Gift Card using the API and link it to a customer (Documentation for creating Gift Cards: https://documenter.getpostman.com/view/18468/giftcard-system/6YtyvrM);
2. Enter the Gift Cards administrative module and query the client's ID;
3. The voucher will not be listed because the queried ID will follow the standard 999.999.999-99 and the registered ID will follow the standard 99999999999.

## Workaround

To work around the problem, you can remove the dots and the hyphen in the field itself.

To query an ID with no dots or hyphens (created using the API), follow these steps:
1. Enter the ID in the query field;
2. Remove the dots and the hyphen;
3. Click "Search".

![vale animado](//images.contentful.com/alneenqid6w5/p5ybSG51tYmIe2qCu2GGg/2c68720ce41c517630b7049c49daf3f9/vale.gif)

