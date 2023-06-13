---
title: Quantity selector component doesn't return to the limit value when user quickly clicks
id: 4QRAzY1A0UD8hOUEkxAawz
status: PUBLISHED
createdAt: 2022-09-16T16:27:15.880Z
updatedAt: 2022-11-25T22:13:30.254Z
publishedAt: 2022-11-25T22:13:30.254Z
firstPublishedAt: 2022-09-16T16:27:16.745Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: quantity-selector-component-doesnt-return-to-the-limit-value-when-user-quickly-clicks
kiStatus: Backlog
internalReference: 659909
---

## Summary


Basically, there is a function that receives the updated state of the value being controlled on the screen by the user (it is a useState). This function is used throughout the component to handle quantity state updates. In order for this state to be updated automatically when the user exceeds the quantity returned in the context, related to the availability of the item, it is passed inside a useEffect.

The problem is that the item availability query seems to be slower than the user click. Note that for the user to exceed the limit quantity (based on the availability of the item) he has to click faster.

It's important to mention that it's a frontend issue and it does not let the user insert more items in the cart than the available limit.



## Simulation


Evidence: https://youtu.be/AJbtF4qeJ5k

If the limit quantity is 3 when I go over to 4 the status is updated based on availability and the quantity returns to 3. The user can only go over to 5 if he clicks the increment button faster than the availability query time of the item + the component state update to 3. As the click is faster, the variable that contains the value remains with the same value. In this example, 5.



## Workaround


N/A

