---
title: "AddressId mismatch causes 'invalid address for an item' error"
id: 5bSac85eHb9NmrOhcTjHNw
status: PUBLISHED
createdAt: 2024-03-01T19:28:52.074Z
updatedAt: 2024-03-01T19:28:52.875Z
publishedAt: 2024-03-01T19:28:52.875Z
firstPublishedAt: 2024-03-01T19:28:52.875Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: addressid-mismatch-causes-invalid-address-for-an-item-error
locale: en
kiStatus: Backlog
internalReference: 992503
---

## Summary


The `shippingData` cart attachment supports the `addressId` field within a few different objects: `logisticsInfo`, `address`, and `selectedAddresses`.
The `addressId` field is also persisted in the user's saved addresses, kept within Master Data's AD entity.

When placing an order, the Checkout API compares the selected shipping address in the orderForm with the ones available within the user's profile.
If a match occurs, the `addressId` within `address` and `selectedAddresses` from the orderForm is replaced with the existing value from their profile.

However, at a later point in the API's validations, it will also compare this `addressId` with the one in the `logisticsInfo` object.
As the one in `logisticsInfo` is not replaced by the aforementioned process, they may not match, and this later validation will fail.
This triggers an "**invalid address for an item**" / "endereço inválido para um item", preventing the purchase from being completed.



##

## Simulation



- Save two different addresses within a user's profile, and take note of their `addressId` values.
- Assemble a Place Order request. Use one of your addresses created in the previous step, but use the `addressId` of the other one.
- Send the request. The response will contain the error message "invalid address for an item".


##

## Workaround


When sending the Place Order request with a previously saved address, ensure the value used for `addressId` matches the actual address data.
Alternatively, you may also omit the `addressId` from the request.




