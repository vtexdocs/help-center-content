---
title: 'Fields not marked as mandatory in Master Data lead to Checkout error'
id: 1iB9Zy7FPH2ge6L7AVyHxN
status: PUBLISHED
createdAt: 2019-09-17T21:45:28.631Z
updatedAt: 2022-12-22T20:45:54.022Z
publishedAt: 2022-12-22T20:45:54.022Z
firstPublishedAt: 2019-09-24T14:41:50.884Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: fields-not-marked-as-mandatory-in-master-data-lead-to-checkout-error
kiStatus: Backlog
internalReference: 
---

## Summary

In obtaining the addresses a customer may have, checkout is not validating records lacking the required fields, especially the "Country" field. This means that when displaying options to select the address, an error is generated when the customer chooses an address lacking this data, such as for example "Country". This confuses the customer, who is directly harmed by this behavior.

Message: Multiple countries are not allowed in "addresses"
Remember that in the "addresses" (AD) data entity within Master Data, these fields are open, meaning they may be set as non-mandatory, and may be blank. Therefore, at times when this information is sent through integrations (using our APIs), records that do not have the "Country" data for example, may be required, resulting in the error mentioned above.

__Expected behavior__

Prevent this error from occurring by ensuring the mandatory prerequisite of this type of field, for example of the "Country" field, either when adding the data in Master Data or when the Checkout obtains the address information, or ignore inconsistent addresses.

__Current behavior__

The checkout receives the information from the addresses that are associated with that customer/profile to show them when informing shipping options (../checkout/#/shipping/).

The options are shown, and although OrderForm JSON (selectedAddresses. [0] .country) does not contain the country, the addresses in the UI show the country. This means that the customer or store manager cannot easily realize that critical information is required to continue the purchase.

## Simulation

Ex.:
1. Identify a user who has more than one associated Master Data address and has no country information on record.
2. Add any product to the cart and identify yourself with that customer's email.
3. Try change the shipping data, playing around with address selection (assuming the user will have more than one address).
4. When the address which does not have a country field is selected, the error will appear.


## Workaround

Ensure that the addresses in Master Data have the country field containing the corresponding information, meaning that these fields must not be empty or without valid information.

Note that the country must be expressed in the 3-digit ISO-Code standard.

