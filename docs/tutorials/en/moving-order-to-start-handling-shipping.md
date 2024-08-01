---
title: 'Moving order to Handling Shipping'
id: tutorials_198
status: PUBLISHED
createdAt: 2017-04-27T22:14:17.090Z
updatedAt: 2023-06-15T13:32:59.728Z
publishedAt: 2023-06-15T13:32:59.728Z
firstPublishedAt: 2017-04-27T23:02:47.756Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: moving-order-to-start-handling-shipping
locale: en
legacySlug: moving-order-to-start-handling-status
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

The `Ready for Handling` status is the warning to the ERP that it should move the order to clear the reservation. After the ERP notifies VTEX that it has integrated the order and that the items' stock has been updated, the status is changed to `Handling Shipping`.

The reservation clearing does not happen automatically. It should be controlled by your ERP. For more information, see [How the reservation works](https://help.vtex.com/en/tutorial/como-se-maneja-la-reserva--tutorials_92).

See below for possible ways to update this status.

## Through integration and API

Integrations automate this process. They happen when other systems consult VTEX order to track the shipment flow. This integration can be done via API REST, according to our [ERP integration guide](https://developers.vtex.com/docs/erp-integration-set-up-order-processing).

Once that is done, you will be able to call the API [Start handling order](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/start-handling).

## Through VTEX Admin

If the store doesn't have an ERP or some system that integrates the orders, it's possible to manually move the flow to the next stages. The step-by-step for that is described below:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.
2. Select the desired order in the `Ready for Handling` status.
3. In the **Order Status** section, click `Ready for handling`.
4. Select the three checkboxes:
    - <a class="far fa-check-square"></a> I understand that I will interfere with the progress of the order.
    - <a class="far fa-check-square"></a> I understand that this action cannot be undone.
    - <a class="far fa-check-square"></a> I understand the consequences of this action in the order flow.
5. Click `Proceed with status`.

<div class="alert alert-warning">
When you manually start an order handling, the order can not be integrated with the ERP later on.
</div>
