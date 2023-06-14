---
title: Street, Neighborhood, Complement and Reference fields are not requested in the address step at checkout
id: 2wY4t0iIie4pjpJrs0Af3F
status: PUBLISHED
createdAt: 2022-04-19T18:20:30.913Z
updatedAt: 2022-11-25T21:53:33.585Z
publishedAt: 2022-11-25T21:53:33.585Z
firstPublishedAt: 2022-04-19T18:20:31.606Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: street-neighborhood-complement-and-reference-fields-are-not-requested-in-the-address-step-at-checkout
kiStatus: Backlog
internalReference: 563507
---

## Summary


When the address is entered via the postal code API and this data is updated in the shippingData before reaching the checkout. If our postal API doesn't return all the complete data, e.g. street, neighborhood, etc. They will be missing from shippingData. The problem is that when the customer uses the geolocation component in his checkout, he does not perform the missing validation of these fields, leaving the user to go to the payment step without filling in the data that is not complete.



## Simulation


Make the call to `api/checkout/pub/postal-code/BRA` informing the postal code `75345-000` before arriving at Checkout.

Update the shippingData with the data that is returned from this API. When arriving at Checkout, the component will only ask to fill in the number and receiver field, thus allowing the user to go to the payment step with these missing data.



## Workaround


N/A

