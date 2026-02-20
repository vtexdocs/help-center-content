---
title: 'Total shipping cost'
id: 5bwhIO108VA5Y2YOpef9lV
status: PUBLISHED
createdAt: 2021-08-25T12:30:32.699Z
updatedAt: 2021-08-25T14:39:54.346Z
publishedAt: 2021-08-25T14:39:54.346Z
firstPublishedAt: 2021-08-25T13:08:08.704Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: total-shipping-cost
legacySlug: total-shipping-cost
locale: en
subcategoryId: 7uJcyu0VawEm8ggqKu404u
---


The total shipping cost is the total price charged to the customer to deliver the order. This amount is the sum of the shipping rate and the costs of handling products from the warehouse to the loading dock. 

See how they are calculated:

* **[Shipping rate](/en/docs/tutorials/shipping-rates)**: is the rate listed in the shipping policy, and corresponds to the rate of a carrier or a pickup point. Does not consider warehouse and loading dock costs. It takes into consideration the following aspects:
    * A fixed shipping cost
    * [Additional shipping costs](/en/docs/tutorials/additional-shipping-costs): such as weight- and price-based charges, insurance and shipping charges. 

    The shipping rate is calculated by adding the fixed cost to the additional charges. 

* **Loading dock fee**: you can add an extra cost for integrating a warehouse with a loading dock.
    * To do that, you must fill in the `Extra fee` field when adding or editing a loading dock on the Warehouse page.

So, in general, the total shipping cost is calculated as follows:

![Custo-final-envio-EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/shipping-rates/total-shipping-cost_1.svg)

> ❗ If the **price-based charge** is lower than the **insurance charge**, the system only considers the insurance charge. The price-based charge will not be taken into account for the total shipping cost. The best carrier is chosen based on its shipping rate, which does not consider loading dock and warehouse costs (if any). To simulate shipping options for customers, use the [Shipping simulator](/en/docs/tutorials/shipping-simulation).

