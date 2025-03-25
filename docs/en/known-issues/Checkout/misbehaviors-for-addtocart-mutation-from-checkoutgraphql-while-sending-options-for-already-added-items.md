---
title: "Misbehaviors for addToCart mutation from checkout-graphql while sending 'options' for already added items"
id: 1lMWbgmBsOis9gAKcMm8ob
status: PUBLISHED
createdAt: 2022-05-03T20:42:18.655Z
updatedAt: 2023-11-16T16:46:29.538Z
publishedAt: 2023-11-16T16:46:29.538Z
firstPublishedAt: 2022-05-03T20:42:18.940Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: misbehaviors-for-addtocart-mutation-from-checkoutgraphql-while-sending-options-for-already-added-items
locale: en
kiStatus: Fixed
internalReference: 452053
---

## Summary


While using the "_addToCart"_ mutation from the "_checkout-graphql"_ in a cart where a given item was already added without "_options_", trying to include it again, this time with "_options_", won't work correctly. The mutation won't register the sent "_options_" and will also return an error if they are related to "_subscription_" information.

In this context, the "_options_" property is used to declare "_assemblyOptions_", both for "_composition_" or "_inputValues_", which is also used in place of "_itemAttachments_" and to include "_subscriptionsData_".

Present behaviors:
- _addToCart_ **without** sending "_options_" to an already added item **also without** "_options_" will simply update their quantity **to** the given number
- _addToCart_ with or without sending "_options_" to an already added item **with**"_options_" will work to include **new**/repeated items with the given quantity

Where the issue happens:
- _addToCart_ sending "options" to an already added item without "options"

The "_options_" won't be registered (neither updating or working as a new item) on the orderForm, but they'll work to update the quantity for the already added item – in the same way as the first behavior described.

The worst scenario happens if you are sending an "_option_" related to subscription information. The "_addToCart"_ mutation has a chained action to update the "_subscriptionsData_" section from the orderForm with the information from this "_option_", and in this case, it'll fail, returning errors for the operation – but also doing the previous action, which updates the quantity.

For the record, the mutation "_updateItems"_ doesn't work to add items nor to add/remove "_options_" to an already added item.



## Simulation


Considering this mutation:

    mutation ($orderFormId: ID, $items: [ItemInput]) {  addToCart(orderFormId: $orderFormId, items: $items) {    ...  }}


First request, which works well:

    {  "items": [    {      "id": 123,      "quantity": 1,      "seller": "1"    } ]}

Second request, including the same item but with subscription information:

    {  "items": [    {      "id": 123,      "index": 0,      "quantity": 1,      "seller": "1",      "options": [        {          "assemblyId": "vtex.subscription",          "inputValues": {            "vtex.subscription.key.frequency": "1 month"          }        }     ]    }  ]}

The response:

    {  "data": null,  "errors": [    {      "message": "Request failed with status code 400",      ...          "response": {            "data": {              "Fields": {},              "operationId": "acdb9ef5-59dc-49a7-9d79-d3fb895d81fe",              "error": {                "code": "1",                "message": "Assinatura inválida",                "exception": null              }            },            ...    } ]}


## Workaround


N/A

