---
title: "When a schedule price expires, the fixed price is not reenabled"
id: 75RY8MaDPaiOGOoY2mwycg
status: PUBLISHED
createdAt: 2017-06-23T16:23:03.818Z
updatedAt: 2022-12-22T15:18:16.938Z
publishedAt: 2022-12-22T15:18:16.938Z
firstPublishedAt: 2017-06-23T17:43:31.782Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Pricing & Promotions
slugEN: when-a-schedule-price-expires-the-fixed-price-is-not-reenabled
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

There are two prices: a fixed price that is always in effect and a scheduled price, which is valid for a limited data range, which will be active concurrently with the fixed price.

![precio-agendado-no-reactiva](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Marketing%20&%20Merchandising/when-a-schedule-price-expires-the-fixed-price-is-not-reenabled_1.png)

When the scheduled price expires, the fixed price should be reenabled, since it will be the new and only price valid for this SKU. This re-enablement occurs for most of prices, but it is not happening for all cases; the product continues published on the web, in general with a price lower than the fixed price that was not automatically reenabled. 

Reindexing the price manually does not work either. There are often multiple cases in which the fixed price is not reenabled and all prices should be checked one by one, in order to identify which ones should be manually updated to show the new price.

## Simulation

1. Access the SKU's price page entering {STORENAME}.vtexcommercestable.com.br/admin/Site/SkuTabelaValor.aspx?id={IdDelSKU};
2. Create a **AA price** for a trade policy XX, valid from the year 1000 to the year 4000;
3. Create a second __BB price__ lower that AA price, for the same trade policy XX, valid from yesterday to tomorrow;
4. When the BB price expires, the AA price should be reactivated and become visible in the product's info (intermittent scenario).

## Workaround

This is an intermittent scenario. The momentary solution is to change the date of the fixed price (marked as valid up to 1/1/4000) and save it. Soon afterwards the price of the published product will be reindexed and updated. 

