---
title: "Marketplace doesn't consider installment rule for products that have a commercial condition in the seller"
id: 57fIYUFmvuyYaq8W6KkieC
status: PUBLISHED
createdAt: 2017-06-16T21:18:22.276Z
updatedAt: 2022-12-22T15:05:04.302Z
publishedAt: 2022-12-22T15:05:04.302Z
firstPublishedAt: 2017-06-16T21:30:20.109Z
contentType: knownIssue
productTeam: Channels
author: authors_35
tag: Checkout,Payments
slug: marketplace-doesnt-consider-installment-rule-for-products-that-have-a-commercial-condition-in-the-seller
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

Integrations between VTEX and VTEX stores can be configured in such a way that every payment rule can be done directly in the seller's environment. This means that the seller can create payment terms according to its business rule. One such rule is the business condition that is defined in the catalog and associated with each SKU. To better understand this feature, click [here](http://help.vtex.com/en/tutorial/how-to-register-a-commercial-condition).

This feature is commonly used to create scenarios like: The **X** refrigerator should have a different installment rule and be transacted only by affiliate **XPTO**.

The known issue is evident in the following example, in which the marketplace can not reflect the same rules of installment as the seller:

## Marketplace - Up to 12x without interest
![Marketplace Marketplace](https://images.contentful.com/alneenqid6w5/c7CtSlVToIIQScyiM4AiS/e9f1415ccbe79d8fe34af8e9901b6570/Geladeira_Marketplace.png)

## Seller - Up to 10x without interest
![2017-06-16 18 15 44-Refrigerator 540 Liters Evox Brastemp Side Inverse - Brastemp](https://images.contentful.com/alneenqid6w5/6HZs1prIVaUsOYCWeEMG8U/169a380f8e4c43cd0c644d280da0d126/2017-06-16_18_15_44-Geladeira_540_Litros_Evox_Brastemp_Side_Inverse_-Brastemp.png)

The display in the marketplace is wrong. The installments in 11x and 12x do not show interest, when in reality they should.

There is currently a restriction in checkout. It does not recognize the commercial conditions of a SKU in a seller for payment split purposes (order in the marketplace with payment in the seller).

## Simulation

1. The seller must create a commercial condition and associate it to a SKU being shipped to a marketplace
2. The seller must create a payment condition whose special condition includes the commercial policy of that integration and also the commercial condition associated with that SKU.
3. The marketplace can not reflect this setting.

## Workaround

As long as the checkout does not develop the feature necessary to reflect a seller's commercial conditions, the best alternative route is for the seller to create a new trade policy for that integration and to include in that policy the payment settings that satisfy the business rule in question.

