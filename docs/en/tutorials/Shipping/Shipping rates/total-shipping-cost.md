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
locale: en
legacySlug: total-shipping-cost
subcategoryId: 7uJcyu0VawEm8ggqKu404u
---


The total shipping cost is the total price charged to the customer to deliver the order. This amount is the sum of the shipping rate and the costs of handling products from the warehouse to the loading dock. 

See how they are calculated:

* **[Shipping rate](/en/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM)**: is the rate listed in the shipping policy, and corresponds to the rate of a carrier or a pickup point. Does not consider warehouse and loading dock costs. It takes into consideration the following aspects:
    * A fixed shipping cost
    * [Additional shipping costs](/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV): such as weight- and price-based charges, insurance and shipping charges. 

    The shipping rate is calculated by adding the fixed cost to the additional charges. 

* **Loading dock fee**: you can add an extra cost for integrating a warehouse with a loading dock.
    * To do that, you must fill in the `Extra fee` field when adding or editing a loading dock on the Warehouse page.

So, in general, the total shipping cost is calculated as follows:

![Custo-final-envio-EN](https://images.ctfassets.net/alneenqid6w5/5qeoN5AQPvoWyOPcNW3J6q/4b04d0319eb18cd1ee0e9c03858c5bc1/Custo-final-envio-EN.svg)

<div class="alert alert-danger">
If the <b>price-based charge</b> is lower than the <b>insurance charge</b>, the system only considers the insurance charge. The price-based charge will not be taken into account for the total shipping cost.<p>
The best carrier is chosen based on its shipping rate, which does not consider loading dock and warehouse costs (if any). To simulate shipping options for customers, use the <a href="https://help.vtex.com/en/tutorial/simulacao-de-frete--tutorials_144">Shipping simulator</a>.
</div>

