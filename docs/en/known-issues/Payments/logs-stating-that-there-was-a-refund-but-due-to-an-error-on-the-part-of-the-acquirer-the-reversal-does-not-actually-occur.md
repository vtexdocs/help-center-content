---
title: "Logs stating that there was a refund, but due to an error on the part of the acquirer, the reversal does not actually occur"
id: Bpa1ncKcUuKd7i5isR2D4
status: PUBLISHED
createdAt: 2022-03-17T21:07:16.944Z
updatedAt: 2023-05-17T17:24:11.178Z
publishedAt: 2023-05-17T17:24:11.178Z
firstPublishedAt: 2022-03-17T21:07:17.323Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: logs-stating-that-there-was-a-refund-but-due-to-an-error-on-the-part-of-the-acquirer-the-reversal-does-not-actually-occur
locale: en
kiStatus: Backlog
internalReference: 545331
---

## Summary


Even with transaction logs informing that the chargeback was made, an error occurred in the acquirer.
To check the behavior it is possible to see that in the transaction events there is a reversal message:

Reversal of xx,xx (currency)

Looking for the TID on the acquirer's dashboard, it is possible to prove that the chargeback was not made if there is an error message in the cancellation.




## Simulation


Cannot simulate.



## Workaround


Send the list with the TID to the OPS team and, in case of partial cancellation, inform the amount to be reversed so that they can contact the acquirer and in this way forward this list so that they can manually reverse it on their side and I will return with the cancellation letters for each of these orders so that we have proof of cancellation.

