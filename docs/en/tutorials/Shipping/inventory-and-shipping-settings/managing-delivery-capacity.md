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
slugEN: managing-delivery-capacity
legacySlug: managing-delivery-capacity
locale: en
subcategoryId: 1UL6Q7nUN6SkA2g2SUsECi
---

You can track the availability of delivery windows and the number of items/orders that can still be placed in each delivery window on the **Delivery capacity** page. 

To manage your **Delivery capacity**, you must previously configure your [shipping policies](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) and enable [scheduled deliveries](https://help.vtex.com/en/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi). 

> ⚠️ For [Scheduled delivery](https://help.vtex.com/en/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) and [Delivery capacity](https://help.vtex.com/en/tutorial/managing-delivery-capacity--2y217FQZCjD0I1n62yxVcz) to perform correctly, you must follow the rules below:<ul><li>The result from {[account name](https://help.vtex.com/en/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC)} + {shipping policy ID} cannot exceed 60 characters.</li><li>Do not use spaces in [shipping policy IDs](https://help.vtex.com/en/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT).</li></ul>

In the VTEX Admin, go to **Shipping > Delivery capacity**, or type **Delivery capacity** in the search bar at the top of the page. The **Delivery capacity** displays a list of your store's delivery windows. The list is based on the shipping policy selected in the `Shipping policy` filter and the time frame specified in the `Date` filter.

Once you have selected a shipping policy and a date, you will see the delivery windows available for those specifications. Each row in the list represents a delivery window and displays the following data:

*   **Delivery Date**: the dates available for delivery.
*   **Delivery Time**: the times available for delivery.
*   **Capacity**: the total delivery capacity.
*   **Booked**: the number of items/orders already booked (purchase confirmed, not payment).
*   **Available**: number of items/orders that can still be scheduled (the total capacity minus the booked items).
*   **Status**: classified as visible or not visible, depending on the availability of the delivery window. The delivery window will be shown as visible for your customers if its capacity hasn’t been reached yet.

> ℹ️ By clicking on **EDIT SHIPPING POLICY**, you’ll be redirected to the shipping policy page selected in the Shipping policy filter, where you can edit it.
