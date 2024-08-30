---
title: 'Merchant not being able to open account for some clients in Customer Credit API'
id: 4NGCingtQxzFV1gMbxFzT1
status: PUBLISHED
createdAt: 2023-09-25T13:22:58.063Z
updatedAt: 2023-09-25T13:22:58.651Z
publishedAt: 2023-09-25T13:22:58.651Z
firstPublishedAt: 2023-09-25T13:22:58.651Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: merchant-not-being-able-to-open-account-for-some-clients-in-customer-credit-api
locale: en
kiStatus: Backlog
internalReference: 906509
---

## Summary


For some reason, when trying to open a new account for specific clients through the API, it returns the following error:

{
"code": 1099,
"message": "The Credit Account is already open."
}


In this scenario, the data of the client (Name, document, etc.) has never been used before on any other account.


##

## Simulation


This happens inconsistently, so it will only happen every other attempt.


##

## Workaround


Create the account via Admin UI.





