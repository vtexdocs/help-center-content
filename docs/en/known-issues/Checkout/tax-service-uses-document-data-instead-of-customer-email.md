---
title: "Tax service uses document data instead of customer email"
id: IOu1ZV40Q5yHjgbcS9C15
status: PUBLISHED
createdAt: 2022-03-23T17:50:15.754Z
updatedAt: 2024-02-16T20:28:42.991Z
publishedAt: 2024-02-16T20:28:42.991Z
firstPublishedAt: 2022-03-23T17:50:16.302Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-uses-document-data-instead-of-customer-email
locale: en
kiStatus: No Fix
internalReference: 548671
---

## Summary



The checkout, when assembling the payload for the tax service, uses the document data (whether corporate or not) in place of the email. In this way, the `clientEmail` variable retains the definition of the document that was received and not the email itself.



## Simulation


Make a simulation for the FFM by correctly passing the customer data in the `clientProfileData` and notice using the debug mode the request that is made to the tax service the `clientEmail` variable using the information that was passed in the `corporateDocument` or `document` (depending on the type of document)



## Workaround


Don't take into account the `clientEmail`, but the email that is inside the `clientData`. There the data is correct.

