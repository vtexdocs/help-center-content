---
title: 'Checkout orderPlaced Boleto Bank Invoice MOIP'
id: 6LfWcVU6fgXalUXslYATIc
status: PUBLISHED
createdAt: 2022-05-18T18:35:54.748Z
updatedAt: 2022-11-25T22:01:04.364Z
publishedAt: 2022-11-25T22:01:04.364Z
firstPublishedAt: 2022-05-18T18:35:55.124Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: checkout-orderplaced-boleto-bank-invoice-moip
locale: en
kiStatus: Backlog
internalReference: 376951
---

## Summary


The orderPlaced has an automatic feature that injects the PDF of the "Boleto - Bank Invoice" into an iframe inside the page of finished order.
But especially type Moip does not allow embedding the file in another page.

We also see this error below, where it will not be possible to display the boleto.
"`because its MIME type ('text/html') is not a supported MIME type stylesheet, and strict MIME checking is enabled.`"



## Simulation


Bank Invoice as type MOIP is the payment method should be selected to make an purchase.
And will  not see the Bank invoice type Moip because is not possible to see the file in the orderplaced page.




## Workaround


There is no workaround, the way to avoid for those who use moip is to hide the "Boleto - Bank Invoice" with CSS.

