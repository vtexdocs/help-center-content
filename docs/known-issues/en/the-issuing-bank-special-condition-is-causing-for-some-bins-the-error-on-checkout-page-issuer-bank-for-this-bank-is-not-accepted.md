---
title: The Issuing Bank Special Condition is causing for some BINs the error on checkout page "Issuer bank for this bank is not accepted"
id: 7HgNpwcvqQDwSfJfv9KpY8
status: PUBLISHED
createdAt: 2022-03-25T19:04:12.310Z
updatedAt: 2022-11-25T22:04:57.905Z
publishedAt: 2022-11-25T22:04:57.905Z
firstPublishedAt: 2022-03-25T19:04:13.255Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: the-issuing-bank-special-condition-is-causing-for-some-bins-the-error-on-checkout-page-issuer-bank-for-this-bank-is-not-accepted
kiStatus: Backlog
internalReference: 391549
---

## Summary


Using the special conditions in the payment method to filter the issuer is causing the checkout to display an error "Issuing bank is not accepted". The problem is intermittent and was first noticed when using the Custom Payment Co-branded card but it also happened in the Credit Card Payment Method.



## Simulation


N/A



## Workaround


Remove the issuing bank's Special condition from the Payment condition.

