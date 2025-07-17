---
title: "Buy Together Promotion with lots of SKUs may let the eligible products not to load on the front (timeout)"
id: e1OJuUhZhYidnoRaDoDRc
status: PUBLISHED
createdAt: 2022-01-21T17:36:41.181Z
updatedAt: 2024-02-16T20:29:59.287Z
publishedAt: 2024-02-16T20:29:59.287Z
firstPublishedAt: 2024-01-23T15:09:22.474Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: buy-together-promotion-with-lots-of-skus-may-let-the-eligible-products-not-to-load-on-the-front-timeout
locale: en
kiStatus: No Fix
internalReference: 301463
---

## Summary


Buy Together Promotion with lots of SKUs may let the eligible products not load on the front due to timeout. The product pages use the product control `<vtex.cmc:BuyTogether/>`. This control is responsible to bring information of all the eligible SKUs set on the promotion to the product page.

The problem is if the customer sets lots of SKUs on this promotion, the Portal will have to bring this information (price, stock, etc) of all the products from these SKUs to the product page. And Portal does this by simulating its products with the checkout. If we have a promotion that was set with for example with 50 SKUs, and these SKUs are from products that have at least 5 SKUs per product) and they are available for example 3 Sales Channels, Portal will have to simulate with the checkout every SKU for every SC of every product eligible on this promo just to show this specific product page. In this example, Portal will have to make 750 simulations with the checkout ( 50 SKUs set on the promo, assuming that these SKus are from products that have 5 SKUs, it is 250 SKUs, and everyone should be simulated for every SC, what gives to us 750 simulations).

ps: we do not have a correct number to set on the SKU List, as it will depend on every client. If the client has products with few SKUs and only an SC available, they will be able to use more SKUs on this kind of Promo.


##

## Simulation


- Create a Buy Together Promotion
- Put on the SKU List 1 or on the SKU list 2 a lot of SKUs, like more than 50.
- Try to load the Product page that uses the control `<vtex.cmc:BuyTogether/>`, the page should not load due to a time-out.


##

## Workaround


They have two ways to "solve" this problem:
- Remove the template control <vtex.cmc:BuyTogether/>, this will make the product page not to load the information about this product available on this promotion;
- Use fewer SKUs on the list of the Buy Together promotion. One more time, unfortunately, we do not have a specific number that works. I advise the client to try with something like 10 and start increasing and testing.

