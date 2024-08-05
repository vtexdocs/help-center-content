---
title: "Transaction canceled by timeout: 'Timeout no request para o Sistema de Parcelamento'"
id: 68L2ka1QJ3yEHTsId1arF7
status: PUBLISHED
createdAt: 2022-03-02T12:15:17.495Z
updatedAt: 2022-11-25T22:05:34.933Z
publishedAt: 2022-11-25T22:05:34.933Z
firstPublishedAt: 2022-03-02T12:15:18.179Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: transaction-canceled-by-timeout-timeout-no-request-para-o-sistema-de-parcelamento
locale: en
kiStatus: Backlog
internalReference: 533844
---

## Summary



Transaction canceled by timeout, checking the logs in Splunk you can see the following message:

    exception_type=Vtex.Commerce.Checkout.Exceptions.CheckoutException exception_message="Timeout no request para o Sistema de Parcelamento" account_id="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" message="Timeout no request para o Sistema de Parcelamento"


In the transaction logs you can see the following message:

    An external application called to cancel this transaction Id = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx with Value xxxx RequestId = xxxx-xx-xxTxx:xx:xx-xxxx. Priority: default. Author: vtexappkey-appvtex.




## Simulation


Cannot simulate.



## Workaround


There is no workaround, the transaction is immediately canceled when this happens.

