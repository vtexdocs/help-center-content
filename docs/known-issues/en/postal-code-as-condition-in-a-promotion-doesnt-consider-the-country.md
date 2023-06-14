---
title: "Postal Code as condition in a promotion doesn't consider the country"
id: 5rPGioNAiWaEmAIMQSACaM
status: PUBLISHED
createdAt: 2017-04-05T12:24:01.042Z
updatedAt: 2022-12-22T15:18:27.889Z
publishedAt: 2022-12-22T15:18:27.889Z
firstPublishedAt: 2017-05-26T19:46:14.665Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_41
tag: Pricing & Promotions
slug: postal-code-as-condition-in-a-promotion-doesnt-consider-the-country
kiStatus: Backlog
internalReference: 
---

## Summary

When you fill in the Postal Code field as a condition in the promotion, you can not select the country, which creates a difficulty for the creation of promotions.

This field does not have a UI handling, such as a mask or character quantity lock, which affects the feature usability.

## Simulation

- Access the __Pricing__ module
- Submit a promotion
- Put the Postal Code as a condition of promotion
- Register a Postal Code from São Paulo (04500000) without the starting zero (4500000)

The effect of this is that another region (45000000) will receive the benefit.

__Note__: The Logistics module already understands that if a Brazil Postal Code is filled with 7 characters, a 0 should be placed at the beginning of the chain, not at the end. __This known issue is restricted to the promotion environment.__

## Workaround

We do not have a palliative measure for this scenario. What can be done is to fill out the Postal Codes very carefully so that no character is missing and the scenario set forth above does not occur.

