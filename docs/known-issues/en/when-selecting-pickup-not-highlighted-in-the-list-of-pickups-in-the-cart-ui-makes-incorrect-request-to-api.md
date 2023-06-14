---
title: 'When selecting pickup not highlighted in the list of pickups in the cart, UI makes incorrect request to API'
id: 42NRIpmVxU7XgOMGHlO6zI
status: PUBLISHED
createdAt: 2022-02-22T18:21:47.541Z
updatedAt: 2022-11-25T21:49:25.969Z
publishedAt: 2022-11-25T21:49:25.969Z
firstPublishedAt: 2022-02-22T18:21:48.067Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: when-selecting-pickup-not-highlighted-in-the-list-of-pickups-in-the-cart-ui-makes-incorrect-request-to-api
kiStatus: Fixed
internalReference: 529850
---

## Summary


When you select a pickup option that it's not highlighted, the UI makes an incorrect request to the API, and with that, the request receives an error and does not refresh the data from this selected pickup.

Note: this happens only in the cart; in the checkout, the requests are ok.



## Simulation


Use a store that has a lot of pickup options (you need to select one that it's not highlighted); in the cart, choose this one and see that the request it's going to be `api/checkout/pub/orderForms/simulation?sc=undefined&rnbBehavior=0` receiving an error message with `Message: "An error has occurred."`

##


## Workaround


N/A

