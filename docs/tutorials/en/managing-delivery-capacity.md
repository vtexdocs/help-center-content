---
title: 'Managing delivery capacity'
id: 2y217FQZCjD0I1n62yxVcz
status: PUBLISHED
createdAt: 2021-04-19T14:43:24.606Z
updatedAt: 2024-03-25T20:04:31.192Z
publishedAt: 2024-03-25T20:04:31.192Z
firstPublishedAt: 2021-05-24T17:00:14.134Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: managing-delivery-capacity
locale: en
legacySlug: managing-delivery-capacity
subcategory: 1UL6Q7nUN6SkA2g2SUsECi
---

You can track the availability of delivery windows and the number of items/orders that can still be placed in each delivery window on the **Delivery capacity** page. 

To manage your **Delivery capacity**, you must previously configure your [shipping policies](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) and enable [scheduled deliveries](https://help.vtex.com/en/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi). 

<div class="alert alert-warning">
For <a href="https://help.vtex.com/en/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi">Scheduled delivery</a> and <a href="https://help.vtex.com/en/tutorial/managing-delivery-capacity--2y217FQZCjD0I1n62yxVcz">Delivery capacity</a> to perform correctly, you must follow the rules below:<p><ul><li>The result from {<a href="https://help.vtex.com/en/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC">account name</a>} + {shipping policy ID} cannot exceed 60 characters.</li><li>Do not use spaces in <a href="https://help.vtex.com/en/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT">shipping policy IDs</a>.</li></ul></p>
</div>

In the VTEX Admin, go to **Shipping > Delivery capacity**, or type **Delivery capacity** in the search bar at the top of the page. The **Delivery capacity** displays a list of your store's delivery windows. The list is based on the shipping policy selected in the `Shipping policy` filter and the time frame specified in the `Date` filter.

Once you have selected a shipping policy and a date, you will see the delivery windows available for those specifications. Each row in the list represents a delivery window and displays the following data:

*   **Delivery Date**: the dates available for delivery.
*   **Delivery Time**: the times available for delivery.
*   **Capacity**: the total delivery capacity.
*   **Booked**: the number of items/orders already booked (purchase confirmed, not payment).
*   **Available**: number of items/orders that can still be scheduled (the total capacity minus the booked items).
*   **Status**: classified as visible or not visible, depending on the availability of the delivery window. The delivery window will be shown as visible for your customers if its capacity hasn’t been reached yet.

<div class = "alert alert-info">
By clicking on <b>EDIT SHIPPING POLICY</b>, you’ll be redirected to the shipping policy page selected in the Shipping policy filter, where you can edit it.
</div>
