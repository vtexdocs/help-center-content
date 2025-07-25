---
title: 'Price filter considers prize (zero) from unavailable products'
id: 10L0KKaGrewOQQWSw6Sms0
status: PUBLISHED
createdAt: 2017-04-06T18:12:42.797Z
updatedAt: 2022-12-22T20:48:36.171Z
publishedAt: 2022-12-22T20:48:36.171Z
firstPublishedAt: 2017-04-06T19:27:27.431Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slugEN: price-filter-considers-prize-zero-from-unavailable-products
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The range $ 0 until $ X in price range filter is considering unavailable products. 

## Simulation

1. Enter the module "E-commerce"
2. "Products Management" tab > "Category"
3. Select a category
4. Click "Actions"> "Price Range"
5. Write the ranges you want starting with "$ 0 to $ X"
6. On the front of the store when filtering through the range "$ 0 to $ X" will appear the products unavailable even if they have higher prices.

![bug da faixa de preço zero](https://p5.zdusercontent.com/attachment/694212/qR2zoAXjv3j5Ii3wXAkpunOCN?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..va0hXw2swHITvRSOQZxq7w.09rH8abK-XD7syiGh8lN0tqRsLfdWufxOf6XY53roNhzBTsw7VhL5nv4xX5nFlUN3Gv8v7ZwJnlH2N62s1Ifr_eQ7Tgiz8udNf-pUXNpUhDiZOTYJlKiIjBeF6L7M77xQDpqJUztSMT8SLHCP010pjpS_QNSQSEYzrrLiVIZqLnK0gSdMCISox6V3F2-gDywAOPt-mt5E3UwpEb3wLtuU31fxNccKc7fycqp_IYHTofQ7H0OMyb7NnAyioi8K_vw6zprhQ4qwetB1iHUUmiON2zXuL78R-V_2zm5_jydBEo.i8ajgYmXxaopzfHWw-m86A)



## Workaround

When entering the lowest price range do not start with $ 0 (zero) put $ 0.01 or $ 1. By doing that the unavailable products will not be considered in this price range.

