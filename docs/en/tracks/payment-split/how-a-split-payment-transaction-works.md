---
title: 'How a split payment transaction works'
id: 4ztN7yya2GoRbSnz8WGEUA
status: ARCHIVED
createdAt: 2020-11-05T17:41:50.805Z
updatedAt: 2021-06-28T19:53:24.634Z
publishedAt: 
firstPublishedAt: 2020-11-06T19:14:38.444Z
contentType: trackArticle
productTeam: Financial
slug: how-a-split-payment-transaction-works
locale: en
trackId: 1ouDg8q56Kuz1AgtJUY9nv
trackSlugEN: payment-split
---

The payment split transaction flow follows the same steps as a normal transaction flow. However, it is a slightly more complex operation.  

The reason behind this complexity is that the value of the shopping cart - the total amount of the purchase, including products and shipping - needs to be divided among the three payment processors: acquirer, marketplace, and seller.

Before we proceed, let’s look at some of the concepts related to this segmentation.   

## MDR
When processing a transaction, acquirers deduct a percentage of the total purchase amount. This fee is called the Merchant Discount Rate (MDR). 

>ℹ️ MDR is applied in __all__ transactions processed by the acquirer.  

In the case of split payment, both the marketplace and the seller(s) may be responsible for this fee. Also, both recipients can be responsible for the payment.     

## Commission
The percentage of the total amount of the purchase that is withheld by the marketplace.  

In other words, every time that a seller sells a product on a marketplace, a portion of the total value of that purchase is given to that same marketplace. 

## Chargeback

The chargeback occurs when the seller loses a [dispute](https://help.vtex.com/pt/tutorial/o-que-e-uma-disputa--7KJsfF1qZILm59C0PQtdF6 "disputa") and needs to refund a customer. It is not a regular transaction flow event, but it can happen.

That said, the chargeback must be made by one of the recipients or by both. 

## Practical example
In the context of a payment split, suppose that a purchase has a total value of $ 100. The sum of all products in the cart is $ 90, to which a $ 10 shipping fee is added. 

This amount will be divided between the marketplace, seller and acquirer. Here, we consider that the marketplace is the one to pay the MDR to the acquirer.

Thus, the amount will be sent to the marketplace, which will split it accordingly. Note that the marketplace can apply different percentage fees on product values and on shipping.

A possible scenario:

- Apply a 5% commission on the product value, where you multiply $ 90 * 5%, resulting in $ 4.50 for the marketplace.
- Apply a 20% commission on shipping, which results in $ 2.00.
- The acquirer sets the MDR rate. If we consider a 2% fee over $ 100, the acquirer will get $ 2.00.

In our example, the marketplace would retain US$ 6.50 in fees, while the seller would get the remaining $ 93.50.

The $ 6.50 will be split between the marketplace and the acquirer. As the MDR was set at $ 2.00, the marketplace is left with $ 4.50.

Check the diagram below:

![Payment Split](//images.ctfassets.net/alneenqid6w5/71DjeU0CjjxlDE1qrwr3n9/c228dc62dc40e68c34337c0d21fc8cce/Split-EN.png)
