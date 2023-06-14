---
title: 'We have a problem validating the ClientId field of the Giftcard on admin'
id: 4S7CziQfj5P2NLAgUKnJnP
status: PUBLISHED
createdAt: 2022-03-28T00:29:38.482Z
updatedAt: 2022-11-25T22:07:33.502Z
publishedAt: 2022-11-25T22:07:33.502Z
firstPublishedAt: 2022-03-28T00:29:39.028Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: we-have-a-problem-validating-the-clientid-field-of-the-giftcard-on-admin
locale: en
kiStatus: Backlog
internalReference: 454388
---

## Summary


We have a validation issue in the ClientId field on the Giftcards screen. The field that was originally called CPF/CNPJ in Portuguese, was translated to English as clientId. But, when the user wants to create a new Giftcard through UI, the field is automatically formatted by inserting the characters ".", "-" and "/" to make the data entered comply with CPF or CNPJ standards



## Simulation



1. Go to a test account and change the language to English and open the Giftcards page
2. Create a new Giftcard by filling in any number in the clientId field and you will see that the numbers will automatically be formatted



## Workaround


The workaround is to create giftCards through API

