---
title: 'The Cielo 3DS2 app is returning an "approved" status even in scenarios when the authentication has failed.'
id: 58hSiWFhn6sHQofJAUoHqv
status: PUBLISHED
createdAt: 2023-05-05T14:48:56.148Z
updatedAt: 2023-05-08T18:34:51.470Z
publishedAt: 2023-05-08T18:34:51.470Z
firstPublishedAt: 2023-05-05T14:48:57.492Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-cielo-3ds2-app-is-returning-an-approved-status-even-in-scenarios-when-the-authentication-has-failed
locale: en
kiStatus: Backlog
internalReference: 820060
---

## Summary


Today, our cielo-authentication-app v1.2.1 is returning an "approved" status in the final step of the flow when calling the authorization step that evaluates whether the authentication has failed or not. However, the app only triggers the fail step when there is an error thrown in the this step. As a result, even if the status is "failed" in the previous step, but there is no error thrown in the current /authorize step, the status is still considered "approved," allowing us to make a request to the acquirer. This is not the expected behavior, as we should be denying the payment authorization and changing the transaction to "authorization denied" in this scenario.


##

## Simulation


Place an order with the app enabled and use a valid card that will fail the enrollment step. You can then check the developer tools and observe that even though the call to /authorization fails, the status is still being sent as "approved."


##

## Workaround


N/A





