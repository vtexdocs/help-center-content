---
title: "Cart does not update in FastStore if external request is made to update orderForm"
id: 7ef1GxxapbH2XKKf7HBuAM
status: PUBLISHED
createdAt: 2024-10-31T15:08:54.129Z
updatedAt: 2024-11-01T14:04:48.204Z
publishedAt: 2024-11-01T14:04:48.204Z
firstPublishedAt: 2024-10-31T15:08:55.456Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: cart-does-not-update-in-faststore-if-external-request-is-made-to-update-orderform
locale: en
kiStatus: Backlog
internalReference: 1127034
---

## Summary


The FastStore cart is created/updated via _ValidateCartMutation_.

If an external request occurs that updates/complements/enriches the cart, such as `POST /attachments/marketingData`, the cart loses its reference and it is not possible to add another product on the first attempt. External calls that change the orderForm can leave the cart stale, which means that the items in the cart have changed outside the customer's standard flow in the store and no longer have the same cart state as the customer has stored in the browser. When this happens, the first _validateCartMutation_ request is ignored (for example, the customer adding another product), and then the current version of the orderForm is returned, and this new product is not added to the cart.

We noticed that this behavior occurs in both v2 and v3 of the `@faststore/api` package.


##

## Simulation


You can validate this behavior by making the following requests:

1. Add a product to the cart via `POST ValidateCartMutation`;
2. Add marketing data via `POST api/checkout/pub/orderForm/U050MGX0CQ3/attachments/marketingData`;
3. Add another product to the cart via `POST ValidateCartMutation`.

When you add the second item to the cart, it will not be added. It will have to be added again.


##

## Workaround


After each and every request that updates the cart (step 2 in the example above), it will be necessary to retrieve the current cart information and update it, as suggested by the implementation below:

```
await axios.post('/api/marketingdata', payload)

// update cart store
const updatedCart = cartStore.read()
cartStore.set(updatedCart)
```

This will make sure that the cart is up to date so that when the customer adds more products, the cart is with up-to-date information.


