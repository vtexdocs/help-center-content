---
title: 'Payments Gateway does not correctly send subaccount information in the payload to the connector'
id: 49kjQUzk5LmPmfeCxpqdzg
status: PUBLISHED
createdAt: 2023-05-02T19:55:08.282Z
updatedAt: 2023-05-11T14:52:50.914Z
publishedAt: 2023-05-11T14:52:50.914Z
firstPublishedAt: 2023-05-02T19:55:08.857Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: payments-gateway-does-not-correctly-send-subaccount-information-in-the-payload-to-the-connector
kiStatus: Backlog
internalReference: 801012
---

## Summary


The problem lies in the formulation of the URLs that are sent to the payment provider. Therefore, what happens is that in scenarios where these URLs are different, such as in the case of a franchised account that processes payment and stores in a fast store, the difference between the URLs generated in the payment and the URL expected by the checkout causes the app not to render.

Thus, the problem extends to the architecture of VTEX accounts, since the partner reported that the app worked in legacy or VTEX IO scenarios without franchised accounts. In summary, what happens is that when the InBound URL is sent, it goes with the main account since it is the one that processes the payment. However, the URL of the checkout that placed the order is from the fast store, and when the gateway returns the URL to render the payment app, it is different from the checkout URL, causing the app not to work.


##

## Simulation


Place an order in a fast store checkout that is a subaccount or franchise where a 3DS2 app is set up.


##

## Workaround


N/A





