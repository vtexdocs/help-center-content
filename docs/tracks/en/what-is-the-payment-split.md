---
title: 'What is the Payment Split?'
id: ctgx6ulwy40P0BV07LW9y
status: DRAFT
createdAt: 2020-11-05T17:15:47.387Z
updatedAt: 2021-06-28T19:53:35.022Z
publishedAt: 
firstPublishedAt: 2020-11-06T19:14:25.813Z
contentType: trackArticle
productTeam: Financial
slug: what-is-the-payment-split
trackId: 1ouDg8q56Kuz1AgtJUY9nv
trackSlugEN: payment-split
---

Payment Split is a VTEX payment solution focused on the dynamics between [marketplace](https://help.vtex.com/en/tutorial/o-que-e-um-marketplace--680lLJTnmEAmekcC0MIea8 "marketplace") and [seller](https://help.vtex.com/en/tutorial/o-que-e-um-seller "seller"). In other words, when a store chooses to sell its catalog products in another store. 

An example would be Carrefour, a marketplace that sells its products as well as products pertaining to other brands, aka their sellers.

When configured, the payment split allows the amount paid for an order to be automatically  divided between the __recipients__ - marketplace and seller(s).

However, this amount may or may not be equally divided among recipients. The distribution will be done according to the seller's predefined conditions and the commissions taken by the marketplace.

This track will explain how this solution works, including some essential concepts for this dynamic and how to configure it.   

<div class="alert alert-info">
If you are already familiar with the solution, go to “Configure payment split.”  
</div>

## Receivable 
Before we proceed, it is essential to understand what a receivable is - a concept that is not only addressed by VTEX but also used in numerous market scenarios.

A receivable is the amount of a successful [transaction](https://help.vtex.com/en/tutorial/o-que-e-uma-transacao--36vMP5PES4oUWMWQuskIQ6 "transaction") meaning that the receivable corresponds to the money that will be transferred to the seller.

In VTEX’s split payment scenario, this amount will be transferred to the seller according to the payment method used to pay for the order, and the receiving plan agreed upon with the [acquirer](https://help.vtex.com/en/tutorial/o-que-e-um-adquirente--7N1oRTG8dGmOiIugC0cs4E "acquirer").

Currently, Split supports the following payment methods:

- Credit card
- Debit card

<div class="alert alert-info">
For credit cards, the payment split supports payments made using two different cards.
</div>  

## Transaction
When a customer finishes a purchase and pays for it, this amount will not necessarily be captured and sent to the seller in real-time. 

<div class="alert alert-info">
There are exceptions to this rule, such as the FedNow instant payment service or Clearing House’s RTP Network - a real-time payments platform that all federally insured U.S. depository institutions are eligible to use for payments innovation.
</div>  

On VTEX, the default behavior is for purchase data to be gathered in a transaction, which then goes through several validation steps meant to ensure that all data is valid. This verification process is what we call the [transaction flow](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y "transaction flow"). 

The receivable results from this process after all the information was validated and the payment was approved and settled. 

However, each payment method has its peculiarities, and so, the transaction flow adjusts to these characteristics. 

The transaction flow also has its own characteristics when the payment split is enabled. We will better explain this process below. 
