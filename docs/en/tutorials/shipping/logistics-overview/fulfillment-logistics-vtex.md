---
title: 'Fulfillment & Logistics on VTEX'
id: 53udnvI5eBy8DKo8FOjMoP
status: PUBLISHED
createdAt: 2022-01-05T21:24:22.705Z
updatedAt: 2023-03-29T20:29:49.016Z
publishedAt: 2023-03-29T20:29:49.016Z
firstPublishedAt: 2022-01-05T21:37:17.296Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: fulfillment-logistics-vtex
legacySlug: logistics
locale: en
subcategoryId: 63f22GypJIBLnMGh1QZUi0
---

Logistics or fulfillment is the process of planning and executing the transportation and storage of merchandise; and shipping orders to customers. It is directly related to the customer experience and to the store's business strategy, therefore, your [logistics configuration](/en/tutorial/logistics--53udnvI5eBy8DKo8FOjMoP#configuring-the-logistics-process) is critical to your business. 

The VTEX platform allows you to register and control your inventory, manage shipping rates, control item availability, and track deliveries. 

> ℹ️ If you have not made the first steps in the **Shipping** module, check out this complementary content: The article [Getting started with Logistics](/en/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/6Y8C1JuPtO5E61Ew91tq1a). Our [Logistics Glossary](/en/tutorial/logistics-glossary--16DSSiXn548rsidi0A8Hby), in which you can find the definitions of logistics terms used at VTEX. The logistics settings available via [API](https://developers.vtex.com/vtex-rest-api/reference/logistics-api-overview).

To find out which logistics configurations are necessary and how to perform them, you must first understand the steps in the purchase flow of a product.

1. The process starts at the storefront: the customer selects the desired products and proceeds to checkout.
2. At checkout, the customer enters their location, and the platform checks the available shipping methods. At this stage of the purchase process, the platform calculates the best [shipping strategy](/en/tutorial/shipping-strategy--58vLBDbjYVQzJ6rRc5QNz3) for the customer. To do this, VTEX: 
    * Checks the availability of the items and where they will be picked up ([warehouse](/en/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb));
    * Selects the [loading dock](/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj) and the time when the carrier must collect the items;
    * Analyzes the [shipping policies](/en/tutorial/shipping-policy--tutorials_140) that meet the customer's shipping conditions. Through the shipping policies, the platform analyzes the carriers that can deliver the order and the available [pickup points](/en/tutorial/how-pickup-points-work--2fljn6wLjn8M4lJHA6HP3R). 
3. After the calculation, the platform displays the delivery methods available to the customer (with their respective delivery times and prices). The customer chooses between pickup and delivery and places the order. 
Once the order is placed, the [reservation of the products is authorized](/en/tutorial/how-does-reservation-work--tutorials_92#authorized-reservation). With this, the platform ensures that the items cannot be sold again. 

4. Once the [payment](/en/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB) is confirmed, the [reservation is also confirmed](/en/tutorial/how-does-reservation-work--tutorials_92#confirmed-reservation).
5. After the payment is confirmed and the [grace period for order cancellation](/en/tutorial/setting-the-grace-period-for-order-cancellation--jYFdnPDtNm4WCEkYWqqC) expires, the platform waits for the retailer to handle the items. When the retailer [starts handling the order](/en/tutorial/moving-order-to-start-handling-status--tutorials_198), they indicate to the platform that the order items and their invoices are being prepared. From this stage, the [reservation is acknowledged](/en/tutorial/how-does-reservation-work--tutorials_92#acknowledged-reservation).
6. The store uploads the order [invoice](/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) on the platform.  
7. The shipping process begins:
    * For orders that are shipped to the customer's address (delivery), the store sends the packages to the [loading dock](/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj) where they will be collected by the [carrier](/en/tutorial/carries-on-vtex--7u9duMD5UQa2QQwukAWMcE). The carrier (chosen through the [shipping policies](/en/tutorial/shipping-policy--tutorials_140)) delivers the order.
    * For orders that are shipped to [pickup points](/en/tutorial/how-pickup-points-work--2fljn6wLjn8M4lJHA6HP3R) (pickup), the store must make the packages ready for customer pick up. To do this, the packages are collected from the [warehouse](/en/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb) and transported to the pickup point. Transportation from the loading dock to the pickup point is configured using a [shipping policy](/en/tutorial/shipping-policy--tutorials_140).

8. After invoicing and shipping, the store is responsible for updating the inventory, which also means removing the items from inventory.

> ℹ️ Please note that the shipping process depends on the configuration made on the platform. Here, we present the scenarios for each type of shipping (delivery and pickup), but there are other possible flows in the shipping process. For example, when the customer chooses pickup and the selected pickup point is the warehouse, there is no need to transport the packages.

![Envio EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/logistics-overview/fulfillment-logistics-vtex_1.svg)

## Configuring the logistics process

The logistics process must be configured according to your store needs. These configurations are made in the **Shipping** module. Check out the features available in the module and how each one impacts your business:
<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">[Shipping Strategy](/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)](/en/tutorial/shipping-strategy--58vLBDbjYVQzJ6rRc5QNz3)
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Manage warehouses, loading docks, and shipping policies. Based on the configured shipping strategies, the platform calculates the shipping possibilities and displays them to the customer at checkout.
<body>
<ul>
<li>[Warehouse](/en/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb);</li>
<li>[Loading dock](/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj);</li>
<li>[Shipping policy](/en/tutorial/shipping-policy--tutorials_140).</li>
</body>
</ul>
   </td>
  </tr>
   <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Delivery capacity](/en/tutorial/managing-delivery-capacity--2y217FQZCjD0I1n62yxVcz)<span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Manage scheduled deliveries. You can track deliveries that are already scheduled and check the delivery periods that are still available.
<body>
<ul>
<li>[Scheduled delivery](/en/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi).</li>
</body>
</ul>
   </td>
  </tr>
   <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Shipping rates](/en/tutorial/shipping-rates--1Balpg3rv0854udEPedvMM)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Manage your store's shipping costs.
<body>
<ul>
<li>[Managing shipping rates](/en/tutorial/managing-shipping-rates--tutorials_141);</li>
<li>[Total shipping cost](/en/tutorial/total-shipping-cost--5bwhIO108VA5Y2YOpef9lV);</li>
<li>[Additional shipping cost](/en/tutorial/additional-shipping-costs--2vqGwMn0LabkOHY6zSHYNV).</li>
</body>
</ul>
   </td>
  </tr>
   <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Inventory management](/en/tutorial/managing-stock-items--tutorials_139)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Manage the availability of the items in the inventory. You can track item activity and reservations.
<body>
<ul>
<li>[Product reservations](/en/tutorial/how-does-reservation-work--tutorials_92#how-to-track-reservation-status);</li>
<li>[How reservations work](/en/tutorial/how-does-reservation-work--tutorials_92)<span style="text-decoration:underline;">.</span>
</li>
</body>
</ul>
   </td>
  </tr>
   <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Shipping simulator](/en/tutorial/shipping-simulation--tutorials_144)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Shipping simulation tool that allows you to reproduce shipping scenarios (item availability, types of delivery and pickup). 
   </td>
  </tr>
   <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Geolocation shipping](/en/tutorial/registering-geolocation--tutorials_138)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Add delivery addresses using latitude and longitude information.

This feature is typically used for addresses in rural and industrial areas or in risk areas (where it is necessary to exclude certain delivery areas within a region).
   </td>
  </tr>
   <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Holidays](/en/tutorial/registering-holidays--2ItOthSEAoyAmcwsuiO6Yk)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Add days that will not be considered business days in your store. 

Days registered as holidays are not considered in the delivery time of orders.
<body>
<ul>
<li>[Add holiday](/en/tutorial/registering-holidays--2ItOthSEAoyAmcwsuiO6Yk)</li>
</body>
</ul>
   </td>
  </tr>
   <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Configurations</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Manage specific configurations of logistics routes. These configurations allow you to detail the delivery conditions that will be available to the customer. The possible configurations in this section are:
<body>
<ul>
<li>[Additional shipping cost](/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV?&utm_source=autocomplete#adicional-de-frete): extra cost charged on top of the [shipping rate](/en/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM);</li>
<li>[Shipment group](/en/tutorial/como-funciona-a-remessa): a group of bundled packages shipped together.</li>
<li>[Modality](/en/tutorial/como-funciona-o-modal): type of items accepted for delivery.</li>
<li>[Cargo splitting](/en/tutorial/como-funciona-a-divisao-de-carga): how products must be split for delivery.</li>
<li>[Critical inventory level alert](/en/tutorial/configurar-o-alerta-de-estoque-critico): an alert for when the quantity of items is below the expected level.</li>
</body>
</ul>
   </td>
  </tr>
   <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Pickup points](/en/tutorial/como-funcionam-pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Manage pickup points. With this feature, stores can allow customers to pick up their orders at physical pickup points.
<body>
<ul>
<li>[Configuring pickup points](/en/tutorial/configurar-pontos-de-retirada-pickup-points)</li>
</body>
</ul>
   </td>
  </tr>
</table>

