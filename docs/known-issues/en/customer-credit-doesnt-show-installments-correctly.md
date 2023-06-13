---
title: Customer Credit doesn't show installments correctly
id: 5qhiwp1EhfJepX6ZFqDsiG
status: PUBLISHED
createdAt: 2022-03-28T02:52:15.222Z
updatedAt: 2022-11-25T22:45:55.160Z
publishedAt: 2022-11-25T22:45:55.160Z
firstPublishedAt: 2022-03-28T02:52:15.598Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: customer-credit-doesnt-show-installments-correctly
kiStatus: Backlog
internalReference: 501730
---

## Summary


Customer credit does not display the different values between rules with the same number of installments and different periods. To understand better this problem, we should observe the gateway and Customer Credit behavior:

**Gateway**
When the gateway has more than one rule with the same number of installments, it displays only the most advantageous rule in terms of value at checkout.
Ex: **Rule A** has 2x installments and 1% of interest and **rule B** has 2x installments and 2% of interest. The gateway only sends **rule A** to the checkout because **rule B** would offer the same benefit for a higher price.
With this example we understand that the gateway sends only one payment option of 2x (one option in 3x, one in 4x…) among all the registered ones.

**Customer Credit**
It is up to the customer credit to create the various payment options according to the configured periods.
Example: **rule C**-> 2x to pay within 15 and 30 days and **rule D**-> 2x to pay within 30 and 45 days and 2% interest.
However,  the Customer Credit does not bring the prices with interest because the price was brought by the gateway and the gateway ignored the values with “disadvantageous” interest previously.
The result of these two behaviors is several rules with equal installments, different periods and equal amounts (the interest set in the rule is ignored).


It is important to say that the gateway behavior is expected. But Customer Credit must be resilient to bring in the interest even knowing that the gateway would ignore the interest beforehand.




## Simulation



1. Create two payment conditions of Customer Credit with the same number of installments and different periods.
2. Then, configure interest for one fo them.
3. Create an account of Customer Credit with available credit.
4. Go to checkout and observe the two options with the same value, without interests.




## Workaround


N/A

