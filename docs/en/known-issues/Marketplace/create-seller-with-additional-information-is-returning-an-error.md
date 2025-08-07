---
title: "Create seller with Additional Information is returning an error"
id: 4dbB48N1vHHdXjL1M1zANe
status: PUBLISHED
createdAt: 2023-01-26T17:12:54.701Z
updatedAt: 2023-02-06T20:34:14.426Z
publishedAt: 2023-02-06T20:34:14.426Z
firstPublishedAt: 2023-01-26T17:12:55.159Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: create-seller-with-additional-information-is-returning-an-error
locale: en
kiStatus: Fixed
internalReference: 741110
---

## Summary



When trying to create a seller through Admin and fulfilling the optional Additional Information form, an error is returned like this:
`The seller has been successfully added, but some information could not be saved.`
 ![](https://vtexhelp.zendesk.com/attachments/token/FYe7irRht0psXP4PwkEH7fm05/?name=image.png)

Despite the message, the seller was not actually saved.


##

## Simulation



1. Go to seller management and click create new seller;
2. Fulfill all the information mandatory;
3. Fulfill at least one information that is optional on the section Additional Information;
4. Check that the error message will appear.


##

## Workaround


First create the seller without the Additional Information.
After the seller is created successfully, go back to it's setup and fulfill the Additional Information.





