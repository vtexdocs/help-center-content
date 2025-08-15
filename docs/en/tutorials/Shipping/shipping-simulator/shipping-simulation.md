---
title: 'Shipping Simulator'
id: tutorials_144
status: PUBLISHED
createdAt: 2017-04-27T22:16:36.879Z
updatedAt: 2024-06-18T19:48:13.737Z
publishedAt: 2024-06-18T19:48:13.737Z
firstPublishedAt: 2017-04-27T23:00:45.450Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: shipping-simulation
legacySlug: freight-simulation
locale: en
subcategoryId: 1O8AEORWOcgIiMosGoousQ
---

The **Shipping Simulator** in the Admin simulates and analyzes available shipping options. The simulation checks the shipping conditions which enables the retailer to check availability of items, delivery methods, costs, and deadlines. 

The simulator can also be used to validate the **[Shipping Strategy](https://help.vtex.com/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)** settings before enabling the logistics process (Inventory, Dock, and [Shipping Policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140)) considering:

* **Item Availability**: the simulator checks if the item is in stock and whether it is possible to ship it (checks if there are carriers for that region, for example). If one of the criteria is not met, the simulator assumes that the item is unavailable.
* **White Label Sellers Availability:** the simulator selects the white label seller that is closest to the shipping address (the logistics settings are calculated in the _White Label Seller’s_ environment, not in the main account). 

> ⚠️ There may be a discrepancy between the final price indicated by the simulator and the actual price in your store since the simulation does not take into account the following: <ul> <li>Promotions applied to the items. <li>Shipping discounts configured through promotions. <li>The Total Delivery Time shown in the simulation results does not take into account the field **Expected Delivery Date (pre-sale)**  [in the item’s information in the system.](https://help.vtex.com/en/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY) </ul>

## Simulating the shipping

1. In the VTEX Admin, go to **Shipping > Shipping Strategy**, or type *Shipping Strategy* in the search bar at the top of the page.  
 2. Click on `Shipping simulator`.
 3. Select your `Country`.  
 4. Select the desired `Trade Policy`.
 5. Select the `product` by name or ID.  
 6. Select the SKU `quantity`.  
 7. Fill in the `Price`. This field is optional.

 > The simulator does not take into account the price registered in the Catalog module. Therefore, the calculation does not consider any current promotions for those SKUs, or shipping taxes for the shopping cart price, if there is any. This may result in a different rate from the real one in your store. To avoid this, we suggest that you manually enter the SKU’s exact rate with the applied promotions, which will make the simulator result more accurate.

 8. Click on the `+` icon to add more than one product to the simulation.
If you want, you can check the `Simulate items individually` box.

 > This functionality is useful when items do not have compatible logistics configurations that allow shipping to be made by the same carrier.

 9. Enter the **Zip code** for which you want to perform the simulation, or fill in the **Address**.

 > For the simulation to be made based on **Address** coordinates, it is necessary to configure a Google geolocation key. You can get this key on the [Google Developers Portal.](https://developers.google.com/maps/documentation/javascript/get-api-key) Once you have the key, go to **Store settings > Shipping > Settings**, or type *Shipping* in the search bar at the top of the page and select *Store settings / Shipping*. Fill in the **Google Geolocation API** field with the key.

 10. Click on the `Shipping simulation` button.

> ℹ️ The items measurements in the simulation result appear in centimeters and grams; however, the actual values for the Checkout are the measurement units registered in the SKU and [product registration fields](https://help.vtex.com/en/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke).

## Simulation details

The shipping simulation shows all the shipping possibilities and availability for the items included in the simulation and describes [delivery details for an order](https://help.vtex.com/en/tutorial/pagina-de-detalles-del-pedido--2Y75n54Cc9VizrlG1N6ZNl) or shipping cost and delivery time taking into account the factors below.

* **Excluded carriers**: when running the simulation, some carriers may be unavailable because they do not meet the [Shipping Policy’s](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) criteria  (see[excluded carriers](#excluded-carrier) for more information).
* **Simulation sharing**: the simulation can be shared by clicking `share shipping simulation` in the upper right corner of the page. When you click, a share link is copied to your clipboard. This feature makes it easy to get the VTEX team, or your store’s team, to resolve issues on specific orders. Only users who have access to the VTEX environment can view the share link.
* **Shipping rate:** in simulations that have more than one SKU, the `shipping rate` is proportionally divided according to the weight of each SKU in the package. For example, consider a simulation with 2 SKUs (one weighs 2kg, and the other one weighs 3kg). Let us assume that the shipping rate with Carrier A is US 10 in total. In this case, the cost for the lighter SKU is US 4, and the cost for the heavier one is US 6. To learn more, check [How proportional shipping costs are calculated](https://help.vtex.com/en/tutorial/como-e-feito-o-rateio-de-frete--frequentlyAskedQuestions_155?&utm_source=autocomplete).
* **Package dimensions**: in simulations where the SKUs have more than 1 unit, the `dimensions` described next to the SKU on the simulation page do not change. The system will take into account that the total package dimensions increased.

### Excluded carriers

 The most common reasons why a carrier is not available for simulation are listed below along with solutions for them. 

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
   <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i">**Reason**</em>
            </th>
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i">Solution</em>
            </th>
      </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">The total weight of the cart exceeds the carrier limit.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">You can meet the limit by using cargo splitting. See cargo splitting for more information. Also, check if there are any errors in the [product settings in the catalog](https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru).
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">The weight or size of the item is not supported by the carrier.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Check the settings in the s [hipping rate template](https://help.vtex.com/en/tutorial/como-montar-a-planilha-de-frete--tutorials_127) for the ***WeightStart***,***WeightEnd***, and ***MaxVolume*** fields. Also, check if there are any errors in the [ product settings in the catalog](https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru).
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">The weight of the kit exceeds the weight accepted by the carrier. Note: items that make up a kit or promotion cannot be separated into different packages.
   </td>
  <td class="t-body pa5" style="min-width: 15rem;">Check the settings in the shipping rate template for the ***WeightStart*** and ***WeightEnd*** fields. Also, check if there are any errors in the [ product settings in the catalog](https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru)
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">Delivery scheduling options are not available.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Check the [ scheduled delivery](https://help.vtex.com/en/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi)window settings and the hours of operation for the [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140).The delivery windows may be blocked. Make sure that the correct windows are active.
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">The carrier does not offer service in that zip code.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Check the settings in the [shipping rate template](https://help.vtex.com/en/tutorial/como-montar-a-planilha-de-frete--tutorials_127) for the ***ZipCodeStart*** and ***ZipCodeEnd*** fields.You should also check the [shipping rates](https://help.vtex.com/en/tutorial/editing-freight-values--tutorials_141) in the **Shipping** module.
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">The carrier was excluded due to priority criteria.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">The priority criteria that the system calculates at checkout are:
<ul>
<li> Cheapest shipping.
<li>Fastest shipping.
<li>A combination of the best cost-benefit and shipping time.
</ul>
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">The carrier is **inactive**.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Check the [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) in the system to make sure the carrier is active.
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">The price of the items does not meet carrier specifications.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Check the settings in the [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) to see the price limit that is accepted.
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">The carrier’s hours of operation do not meet the shipping schedule.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Check the hours of operation in the [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140).
 </td>
  </tr>
</table>
