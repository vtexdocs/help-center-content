---
title: 'Order flow and status'
id: tutorials_196
status: PUBLISHED
createdAt: 2017-04-27T22:14:33.518Z
updatedAt: 2024-04-01T15:37:30.788Z
publishedAt: 2024-04-01T15:37:30.788Z
firstPublishedAt: 2017-04-27T23:02:47.616Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: order-flow-and-status
locale: en
legacySlug: order-flow-on-the-oms
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

The order flow describes the status, possibilities, and actions throughout the life cycle of an order. With the flow, retailers can also track the mapped order status on the platform.

This article will present the following information:
- The different [types of order flows](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196#flow-types) available on the platform: [marketplace flow](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196#marketplace-flow), [seller flow](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196#seller-flow), [chain flow](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196#chain-flow), and [complete flow](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196#complete-flow).
- A [table with all the order statuses available on the Admin and via API](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196#order-status-details).
- [Scenarios in which orders are canceled](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196#order-cancellation).

>ℹ️ Learn how to track an order flow in the article [Order tracking](https://help.vtex.com/en/tutorial/acompanhamento-de-pedidos--et0Ei7F3bjcrEmVAR2kKS).

## Flow types

There are four possible order flows on the VTEX platform:

- [Marketplace flow](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196#marketplace-flow): The order flow visible to the [store responsible for the sale only](https://help.vtex.com/en/tutorial/o-que-e-um-marketplace--680lLJTnmEAmekcC0MIea8).
- [Seller flow](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196#seller-flow): The order flow visible to the [store responsible for handling the order](https://help.vtex.com/en/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w).
- [Complete flow](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196#complete-flow): The order flow visible to the store responsible for the order's sale and delivery. In this case, the store acts both as a seller and marketplace.
- [Chain flow](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196#chain-flow): The order flow visible to the store that acts as an intermediary between the marketplace and the seller. This flow is similar to the marketplace flow. However, the payment is made only in the marketplace, not in the store that acts as a chain. This flow occurs in [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) sales scenarios.

>⚠️ For incomplete orders, check out the article [How incomplete orders work](https://help.vtex.com/en/tutorial/entendendo-os-pedidos-incompletos--tutorials_294) to understand their flow and cancellation.

### Marketplace flow

![pedido_marketplace_en](https://images.ctfassets.net/alneenqid6w5/5XrrV8mQNzqESn0XKJHJW7/315b6d8c70b8631d2be02c4dd659af98/pedido_marketplace_en.png)

The marketplace flow is integrated with the seller flow. When an order delivered by an external seller (which is not the main seller) is finalized, this is the flow visible to the marketplace:

1. Starts with the status `Waiting for seller confirmation` and automatically switches to the status `Payment pending`. Since the marketplace is responsible for receiving payment, there are two possible upcoming statuses: 
    * **If the marketplace receives the payment:** The status changes to `Payment approved`. 
    * **If the marketplace does not receive the payment:** The order cancellation process is initiated, and the status changes to `Canceling`.
2. Once the payment has been approved and the [grace period](https://help.vtex.com/en/tutorial/configurar-o-tempo-de-carencia-para-cancelamento-do-pedido--jYFdnPDtNm4WCEkYWqqC) for cancellation (stage visible to the seller) has expired, the marketplace must wait for the seller to start handling the order. This is an active action indicating that the seller has started preparing the order packages. If the seller does not perform this action, [the order remains in the status Ready for handling](https://help.vtex.com/en/faq/pedido-esta-travado-em-pronto-para-manuseio-o-que-fazer--frequentlyAskedQuestions_771).
3. Once the seller confirms the order handling, the marketplace order status can remain as `Verifying invoice` if there are any errors. Check out the [most common reasons](https://help.vtex.com/en/tutorial/por-que-o-pedido-esta-no-status-verificando-fatura--5VJjxRjeH6SimiG0Wkk2gm) for the order to remain in this status. Remember that if the order is only partially invoiced, its status may go back to `Payment approved`, and the retailer must add the invoices correctly. The total sum of the invoices must equal the total order value. 
4. After confirming the order handling, the order is prepared for shipping by the seller.
5. When the seller adds the invoices correctly, the status changes to `Invoiced`. This status means that the purchase transaction has been successfully completed, and you can no longer change the order status. The payment is settled when the order is at this status.
6. The seller must complete the fulfillment process.

Learn how to identify orders from marketplaces in the article [Viewing marketplace orders in All Orders](https://help.vtex.com/en/tutorial/lista-de-pedidos-beta--2QTduKHAJMFIZ3BAsi6Pi).

### Seller flow

![pedido_fluxo_seller_en](//images.ctfassets.net/alneenqid6w5/wAez6nwupt5Fw7OosaTUH/9cc2dbb00ed43160d6e4699594107b22/pedido_fluxo_seller_en.png)

This is the order flow visible to the store responsible for shipping the order products. In this case, the order was placed through another store (online marketplace), and the seller flow starts once the order is confirmed.

1. When the seller receives the order, its initial status is `Order accepted`.
2. Then the order status automatically changes to `Waiting for fulfillment authorization`. This is a waiting status for the marketplace to indicate that the order payment has been confirmed. 

  >❗ The platform allows you to manually change the status <i>Waiting for fulfillment authorization</i> by clicking <i>Authorize fulfillment</i>. However, when the seller does that manually, it does not necessarily mean that the marketplace has authorized the order fulfillment, which can lead to a mismatch of information. So use this option with caution. We recommend using it only if the marketplace has authorized the order fulfillment.

3. The status automatically changes to `Cancellation window`. The order will remain at this status until the [cancellation window is closed](https://help.vtex.com/en/tutorial/configuracoes-gerais/#orders).

  >ℹ️ The <i>Cancellation window</i> allows the customer to cancel the purchase without the store's approval, within a period of time previously configured by the store. After this period, the store must authorize the customer's cancellation request.

4. At this stage, there are two possible statuses:
    * **Order not canceled:** If the cancellation window period expires and the customer does not request the purchase cancellation, the status changes to `Ready for handling`. This status indicates to the seller that they can begin handling the order for delivery.
    * **Canceled order**: If the customer has requested the order cancellation within the grace period, the order status will change to `Canceling`.
5. The order will remain in the status `Ready for handling` until the seller changes it by confirming they have started the order handling. The seller can confirm it manually in the Admin, or via ERP API integration using the [Start handling order](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/start-handling) request.

  >❗ By confirming the order handling, the seller takes responsibility for reserving the order items. From that moment on, if there are any updates in the inventory, the VTEX platform dismisses these SKUs' reservation. Therefore, update the inventory only after the order has been invoiced. By doing so, you avoid inventory discrepancies in the [integration with your store's backoffice](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide).

6. Once the order is handled, it is time to invoice it. You have to add the invoice to the platform to move to the next stage. In case there are any errors, the order status can remain at `Verifying invoice`. Check out the [most common reasons](https://help.vtex.com/en/tutorial/por-que-o-pedido-esta-no-status-verificando-fatura--5VJjxRjeH6SimiG0Wkk2gm) for the order to remain in this status. Remember that if the order is only partially invoiced, its status may go back to 'Payment approved', and the retailer must add the invoices (the sum of which corresponds to the total value of the order).
7. The last status of this flow is `Invoiced`. After that, the seller must deliver the order.

>❗ Please note that:
>
> * The **order can be canceled** at various stages of the order flow, either by the customer or the store. In this case, once requested, the cancellation process occurs automatically, as well as the order refund to the customer. The cancellation process is finished when the order status is <i>Canceled</i>.
>
> * Sellers have the autonomy to manually change the order status when the order is <i>Waiting for fulfillment authorization</i>. In this case, the seller assumes the responsibility of delivering the order without the marketplace confirmation and without receiving the order payment. If the order status has been changed manually, it is the seller's responsibility to check whether the order is ready for handling and the payment has been confirmed.
> 

### Complete flow

![pedido_fluxo_completo_en_2](//images.ctfassets.net/alneenqid6w5/hQ09aEM1eaW28N7TRG0PY/4dffff0e3ad8bd51e4bdcacb14a10b50/pedido_fluxo_completo_en.png)

The complete order flow is visible to the store that sells and delivers the order. It is composed of the marketplace flow followed by the seller flow.

1. The initial stage of the order flow is `Waiting for seller confirmation`, to indicate the seller has received the order.
2. The order automatically moves to the `Payment pending` status. 
3. The system waits for the payment confirmation and changes the status to one of the following:
    * **The order payment is approved:** The order status changes to `Payment approved` and then `Cancellation window`. This status delimits the customer's grace period to cancel the purchase without the store's approval. The order will remain in this status until the [end of the period configured](https://help.vtex.com/en/tutorial/configuracoes-gerais/#orders).
    * **The payment of the order is not approved:** The platform initiates the cancellation process. This happens automatically as the order status goes from `Payment denied` to `Canceling`. Once the platform completes the cancellation, the status changes to `Canceled`, which is the last stage of the flow. With the payment approved and the cancellation window expired, the order status changes to `Ready for handling`.
4. This status shows the retailer that the payment has been confirmed, and they can start handling the order. The store must confirm the order handling has started for the order to advance in the flow. This confirmation can be done manually in the Admin or via an ERP [API](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) using the [Start handling order](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/start-handling) request.

  >❗ By confirming the order handling, the seller takes responsibility for reserving the order items. From that moment on, if there are any updates in the inventory, the VTEX platform dismisses these SKUs' reservation. Therefore, update their inventory only after the order has been invoiced. By doing so, you avoid inventory discrepancies in the [integration with your store's backoffice](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide).

5. Once the order handling starts, the order status changes to `Handling shipping` and the next step is to invoice the order. The system waits for the invoice with status `Verifying invoice`. You must [add the invoice](https://help.vtex.com/en/tutorial/como-faturar-um-pedido-manualmente-beta--7p1h852V5t54KyscpgxE2v) that corresponds to the total value of the order. 
6. Once this is done, the order status changes to the last status, which is `Invoiced` and the store must ship the order.

The retailer can cancel orders only before they have been `Invoiced`. Once invoiced, the customer can return items, but no longer change the order. Check out the articles [How to cancel orders](https://help.vtex.com/en/tutorial/como-cancelar-pedido--tutorials_186) and [Order cancellation requested by the customer](https://help.vtex.com/en/tutorial/como-funciona-o-cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo) to learn more about order cancellation from a store and customer perspectives.

### Order cancellation

Orders can be canceled for several reasons. Each type of cancellation is indicated by a different stage in the order flow:
- **[Incomplete orders](https://help.vtex.com/en/tutorial/entendendo-os-pedidos-incompletos--tutorials_294):** When the order is incomplete, the order flow cannot start. This prevents the seller from handling items and, consequently, no reservation of the inventory is made.
- **[Customer cancellation request](https://help.vtex.com/en/tutorial/como-funciona-o-cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo):** The customer cancels the order within the grace period or requests the order cancellation to the store. The order items are not reserved when the cancellation occurs within the grace period. However, the items will be reserved if the cancellation occurs after the order has been handled (after the `Start handling` status).
- **[Order cancellation by the store](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/4ts2ItvjYo8wm5gg76miS3):** When the seller or marketplace cancels the order.

Once there is a request to cancel an order, the platform processes the order cancellation automatically. The payment refund to the customer depends on the stage the payment is at and the payment method used.

Orders with [partial invoices](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) cannot be [canceled](https://help.vtex.com/en/tutorial/como-cancelar-pedido--tutorials_186). If the customer wants to replace or remove items from the order, it is possible to [change the order](https://help.vtex.com/en/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).

>ℹ️ Learn more about cancellation and refunds in the articles [Why was my cancelled order charged in the customer's invoice?](https://help.vtex.com/en/faq/por-que-meu-pedido-cancelado-foi-cobrado-na-fatura-do-cliente), and [Refund or cancellation](https://help.vtex.com/en/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m#reembolsocancelamento).

While the cancellation is being processed, the order status remains at `Canceling`. The order status changes to `Canceled` when the cancellation is complete.

>❗ Note that when the cancellation occurs before the store starts handling the order, the items have the [reservation cancelled](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92) in inventory.  However, if the cancellation is made after this stage, the [items will already be reserved](https://help.vtex.com/en/tutorial/como-a-reserva-funciona--tutorials_92#acknowledged-reservation) in the inventory. So the store must update the number of items in stock. This will make the order SKUs available for sale again.

Learn more about order cancellation in the article [Why was my order cancelled?](https://help.vtex.com/en/faq/por-que-meu-pedido-foi-cancelado--frequentlyAskedQuestions_493).

### Chain flow

![pedido_fluxo_chain_en](//images.ctfassets.net/alneenqid6w5/1H891HnUzdCfoEVuO3Ry3Q/7617928cd9328c928ecd09d05b08af2e/pedido_fluxo_chain_en.png)

The order flow seen by the intermediate store in a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) is similar to the marketplace order flow, except for receiving the payment for orders. In the `Payment pending` stage, instead of the chain receiving payment directly from the gateway, the marketplace informs the chain it has received the payment confirmation. 

## Important notes

- [Incomplete orders](https://help.vtex.com/en/tutorial/entendendo-os-pedidos-incompletos--tutorials_294): All orders are considered incomplete at the beginning of the flow. Orders are completed at the last stage of the purchase. If the order does not proceed to the last stage, there may have been an issue during payment (external to VTEX) or missing data.
- Orders can be changed until they start to be invoiced. Learn more about changing and replacing items in the articles [Order replacement](https://help.vtex.com/en/tutorial/substituicao-de-pedidos--2IK9mwQjBKseQmE8K8saO8) and [Changing items from a completed order](https://help.vtex.com/en/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).
- If the customer requests an order cancellation and the retailer denies it, the order can proceed to the `Payment pending` status.
- For order flows at the stage `Ready for handling`, the store must actively confirm the information for the order to advance in the flow. 
- The number of items in stock is updated automatically. Learn more about product reservation and inventory updates in the article [How the reservation works](https://help.vtex.com/en/tutorial/como-a-reserva-funciona--tutorials_92). 

## Order status details

Here is a table with more details about each order status. The table is divided into the following columns:

- **Status (Orders management):** Status identified in the Admin.
- **Status (API)**: Status identification via API.
- **Viewed by**: The flow in which the status is visible (marketplace, seller, chain, and complete).
- **Meaning:** The detailed status meaning.

>⚠️ Note that the complete order flow (visible to the stores responsible for selling and delivering orders) matches the marketplace and seller flows. Some statuses are visible via API, but not in the order flow in **All Orders** module.

<style type="text/css">
.tg  {border-collapse:collapse;border-color:#ccc;border-spacing:0;}
.tg td{background-color:#fff;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
  font-family:Fabriga, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{background-color:#f0f0f0;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
  font-family:Fabriga, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-cly1{text-align:left;vertical-align:middle}
.tg .tg-9p9e{background-color:#FFF;color:#F71963;text-align:left;text-decoration:underline;vertical-align:top}
.tg .tg-36r3{background-color:#727273;color:#FFF;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-zr06{background-color:#FFF;text-align:left;vertical-align:middle}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-36r3"><span style="font-weight:700">Status Admin</span></th>
    <th class="tg-36r3"><span style="font-weight:700">Status API</span></th>
    <th class="tg-36r3"><span style="font-weight:700">Viewed by</span></th>
    <th class="tg-36r3"><span style="font-weight:700">Meaning</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">null</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, seller, chain and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Incomplete orders. The system can still launch the flow, or the order status is</span> <span style="font-weight:400;color:#3F3F40;background-color:#E3E4E6">CancellationData</span><span style="font-weight:400">, which means an error occurred.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">order-created*</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, chain and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Order created. The order data is being processed. This is the first status of an order, and indicates that the system has the necessary information to process it.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Order accepted</span></td>
    <td class="tg-zr06"><span style="font-weight:400">order-accepted</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">The seller received the order.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Canceling</span></td>
    <td class="tg-zr06"><span style="font-weight:400">cancel*</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, seller, chain and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">The order is being canceled. At this stage, the platform notifies the</span> <a href="https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG"><span style="font-weight:400;color:#F71963;background-color:transparent">Payments</span></a> <span style="font-weight:400">module about the cancellation. The order will remain in this status until the</span> <span style="font-weight:700">Payments</span> <span style="font-weight:400">module completes the cancellation process.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">on-order-completed</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, chain and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">The purchase has been processed at checkout. The order data is complete.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">on-order-completed-ffm</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">The purchase has been processed at checkout. The order data is complete.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Payment denied</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, complete flow and chain flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">The payment was denied.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Payment approved</span></td>
    <td class="tg-zr06"><span style="font-weight:400">payment-approved</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, chain and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">The order payment has been approved.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Payment pending</span></td>
    <td class="tg-zr06"><span style="font-weight:400">payment-pending</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, chain and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Waiting status for payment confirmation in the</span> <a href="https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG"><span style="font-weight:400;color:#F71963;background-color:transparent">Payments</span></a> <span style="font-weight:400">module. Regardless of whether the payment has been confirmed or not, this step is mandatory.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Cancellation requested</span></td>
    <td class="tg-zr06"><span style="font-weight:400">request-cancel</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace and complete flow</span></td>
    <td class="tg-9p9e"><a href="https://help.vtex.com/en/tutorial/cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo"><span style="font-weight:400;color:#F71963;background-color:transparent">The customer requested the order cancellation</span></a><span style="font-weight:400">.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Canceled</span></td>
    <td class="tg-zr06"><span style="font-weight:400">canceled</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, seller, chain and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">The order has been canceled, therefore, it was not completed. The payment transaction in the</span> <a href="https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG"><span style="font-weight:400;color:#F71963;background-color:transparent">Payments</span></a> <span style="font-weight:400">module is canceled at this point.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Window to change payment</span></td>
    <td class="tg-zr06"><span style="font-weight:400">window-to-change-payment</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Time period the payment can be changed.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Window to change seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">window-to-change-seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Time period the</span> <a href="https://help.vtex.com/en/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO"><span style="font-weight:400;color:#F71963;background-color:transparent">seller can be changed</span></a><span style="font-weight:400">.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Waiting for seller confirmation</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-for-authorization</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, complete flow and chain flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Waiting for the seller's authorization to proceed with the order flow.</span></td>
  </tr>
   <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-for-fulfillment</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Waits for order's fulfillment. Status exclusive for stores that have a Warehouse Management System (WMS). When the marketplace does not authorize the seller to fulfill the order within 30 days, this order is automatically canceled by the platform.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-ffmt-authorization</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Awaiting the marketplace authorization.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Waiting for fulfillment authorization</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-for-manual-authorization</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">It is a waiting status, in which the seller waits for the marketplace to authorize the order flow to continue.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Authorize fulfillment</span></td>
    <td class="tg-zr06"><span style="font-weight:400">authorize-fulfillment</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Internal process for approving the order handling. In this status, the platform confirms the</span> <a href="https://help.vtex.com/en/tutorial/como-a-reserva-funciona--tutorials_92#reserva-confirmada"><span style="font-weight:400;color:#F71963;background-color:transparent">item reservation</span></a><span style="font-weight:400">. When the marketplace does not authorize the seller to fulfill the order within 30 days, this order is automatically canceled by the platform.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Cancellation window</span></td>
    <td class="tg-zr06"><span style="font-weight:400">window-to-cancel</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Status of the customer order cancellation time frame. After payment approval, the customer has 30 minutes (set as default in the</span> <a href="https://help.vtex.com/en/tutorial/configuracoes-gerais/"><span style="font-weight:400;color:#F71963;background-color:transparent">Settings</span></a> <span style="font-weight:400">of the</span> <span style="font-weight:700">Orders management</span> <span style="font-weight:400">module) to cancel the order. During this period, the platform refunds the order automatically.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">ready-for-invoicing</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">The order is ready to be invoiced only for stores that have picking and packing in the fulfillment process.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Verifying invoice</span></td>
    <td class="tg-zr06"><span style="font-weight:400">invoice*</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, chain and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">The platform is verifying the invoice. If the order remains at this stage, there may have been a problem settling the payment or adding the invoice. Learn more in</span> <a href="https://help.vtex.com/en/tutorial/por-que-o-pedido-esta-no-status-verificando-fatura--5VJjxRjeH6SimiG0Wkk2gm"><span style="font-weight:400;color:#F71963;background-color:transparent">Why is the order in the "Verifying invoice" status?</span></a><span style="font-weight:400">.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Invoiced</span></td>
    <td class="tg-zr06"><span style="font-weight:400">invoiced</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, seller, chain and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">The flow was successfully completed and the order has been shipped. If the transaction was made via credit card, the payment settlement occurs at this point.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Ready for handling</span></td>
    <td class="tg-zr06"><span style="font-weight:400">ready-for-handling</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Status that indicates that you need to start order handling, prepare the invoice, and track the order. In this status, the platform</span> <a href="https://help.vtex.com/en/tutorial/como-a-reserva-funciona--tutorials_92"><span style="font-weight:400;color:#F71963;background-color:transparent">reserves</span></a> <span style="font-weight:400">the item. This is usually done by an</span> <a href="https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide#send-order-cancelations"><span style="font-weight:400;color:#F71963;background-color:transparent">ERP integration</span></a><span style="font-weight:400">, but you can do it manually through order management. The order will only go to the next stage once this one has been confirmed.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Start handling</span></td>
    <td class="tg-zr06"><span style="font-weight:400">start-handling*</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Authorization status to continue the order handling flow. It is used when authorized manually. If there is</span> <a href="https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide#send-order-cancelations"><span style="font-weight:400;color:#F71963;background-color:transparent">ERP integration</span></a><span style="font-weight:400">, this status waits for the ERP confirmation for the order flow to continue.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Cancellation requested</span></td>
    <td class="tg-zr06"><span style="font-weight:400">cancellation-requested</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Cancellation requested</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-for-mkt-authorization</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Chain</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Waiting for the marketplace authorization to send the authorization to the seller.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-seller-handling</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace from the main account waiting for the handling process to start, when it comes to a Multilevel Omnichannel Inventory operation. For the white label seller, the status that appears is authorize-fulfillment.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Handling shipping</span></td>
    <td class="tg-zr06"><span style="font-weight:400">handling</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">In this status, the order items are</span> <a href="https://help.vtex.com/en/tutorial/como-a-reserva-funciona--tutorials_92"><span style="font-weight:400;color:#F71963;background-color:transparent">reserved</span></a><span style="font-weight:400">. The order remains at this status until it receives an invoice notification, usually from the ERP.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Approve payment</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Indicated by the system. The flow does not stop at this status unless there is an error.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Waiting for the seller decision</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace and complete flow</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Waiting for the seller to decide if the order will be canceled.</span></td>
  </tr>
  <tr>
    <td class="tg-cly1">Request cancellation</td>
    <td class="tg-cly1">-</td>
    <td class="tg-cly1">Marketplace and complete flow</td>
    <td class="tg-cly1">Status initiating cancellation flow. There are two types of possible cancellatoins: by the </span> <a href="https://help.vtex.com/en/tutorial/como-cancelar-pedido--tutorials_186"><span style="font-weight:400;color:#F71963;background-color:transparent">store</span></a> <span style="font-weight:400"> and by the </span> <a href="https://help.vtex.com/en/tutorial/cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo"><span style="font-weight:400;color:#F71963;background-color:transparent">customer</span></a><span style="font-weight:400">.</span></td>
  </tr>
</tbody>
</table>

<br></br>

>ℹ️ The statuses marked with asterisks (*) in the table do not allow modification or cancellation because the platform changes them automatically.

