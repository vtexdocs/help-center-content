---
title: 'Shipping step with postal code does not work for some countries (United Arab Emirates)'
id: 2nlXX0e1q1MLiSjCG1U1Uf
status: PUBLISHED
createdAt: 2024-06-21T16:31:14.956Z
updatedAt: 2024-07-16T13:10:07.140Z
publishedAt: 2024-07-16T13:10:07.140Z
firstPublishedAt: 2024-06-21T16:31:15.891Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-step-with-postal-code-does-not-work-for-some-countries-united-arab-emirates
locale: en
kiStatus: Fixed
internalReference: 312132
---

## Summary


The United Arab Emirates doesn't have postal codes, and the Checkout UI only accepts two inputs: postal code or geocoordinates.

If the store configures postal code input, when arriving at the shipping step at checkout, the United Arab Emirates country does not work correctly – and potentially others.

It is not possible to add anything to the component.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Checkout/shipping-step-with-postal-code-does-not-work-for-some-countries-united-arab-emirates_1.png)

##

## Simulation



- Go to the shipping step;
- No field to add the postal code is shown;


##

## Workaround


Add any dummy postal code via API, the fields will be shown then, for example, via console:

    vtexjs.checkout.sendAttachment('shippingData', { "selectedAddresses": [{ addressType: "residential", country: "ARE", postalCode: "0" }]}).done(r=>{ console.log(r)})

Result:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Checkout/shipping-step-with-postal-code-does-not-work-for-some-countries-united-arab-emirates_2.png)


## **Workaround**
For geocoordinates, it's possible to move with the purchase:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Checkout/shipping-step-with-postal-code-does-not-work-for-some-countries-united-arab-emirates_3.png)

