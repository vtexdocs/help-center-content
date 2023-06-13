---
title: Postal Codes with district name without city
id: 1DrAs9AqCoakeaWoAKSYkm
status: PUBLISHED
createdAt: 2017-04-05T21:12:36.398Z
updatedAt: 2022-12-22T20:45:40.274Z
publishedAt: 2022-12-22T20:45:40.274Z
firstPublishedAt: 2017-05-18T19:59:58.193Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: postal-codes-with-district-name-without-city
kiStatus: Backlog
internalReference: 
---

## Summary

Some Postal Code codes do not carry the name of the city next to the district, but only the name of the district. The correct would be to bring the name of the district accompanied by the name of the city.

### Example 1

Galante is a district in the city of Campina Grande. When we simulate the Postal Code, we have the following return:

- CEP: 58446-000
- City: Galante

**The correct would be**:

- CEP: 58446-000
- City: Galante (Campina Grande)

### Example 2

Taperuaba is a district of the city of Sobral. When we simulate this Postal Code, we have the following return:

- CEP: 62106-000
- City: Taperuaba

**The correct would be**:

- CEP: 62106-000
- Town: Taperuaba (Sobral)

## Simulation

- Access the module **Logistics**;
- Click on **Freight Simulation**;
- Select any product;
- Insert the CEP 58446-000, for example;
- Click on **Simulate Freight**;
- At the address, the city will only appear as "Galante".

## Workaround

There is currently no workaround for this scenario. Records update is required to prevent customers from getting confused.

