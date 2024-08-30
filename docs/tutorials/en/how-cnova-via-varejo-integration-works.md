---
title: 'How CNova/Via Varejo integration works'
id: 1vFbUZUL80SQ0SoySGO8E6
status: PUBLISHED
createdAt: 2018-07-09T17:57:16.106Z
updatedAt: 2021-03-05T20:19:54.695Z
publishedAt: 2021-03-05T20:19:54.695Z
firstPublishedAt: 2018-07-09T18:32:09.384Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: how-cnova-via-varejo-integration-works
locale: en
legacySlug: how-cnova-via-varejo-integration-works
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

The scope of this article is to describe the entire integration flow with CNove/Via Varejo. By doing so, it sheds light on how the integration works as well as on the expected behaviour for each step. The tutorial is divided into five steps:

1.	Products
2.	Stock
3.	Price
4.	Promotions
5.	Order

## 1. Products

### The fields that are sent

The integration sends out product, stock and prices (divided into) in separate entities. Once the products are successfully sent out, it is possible to immediately track these on CNova/Via Varejo. The integration sends the following fields: 

<br />

| Product     | SKU     |
| ---------- | ---------- |
|    Name*    | EAN       |   
| Description* | Weight*       |    
|     Brand* | Height*       | 
| Category within VTEX* | Width* |
| Specs | Length* |
|     -     | Photos*       |      
| -       | Specs |

<br />


**The fields marked with * are mandatory.**

 Upon being successfully sent for the first time, CNova/Via Varejo receive the products and undergo an internal cataloguing process.  Once approved by CNova/Via Varejo, no product field may be updated through/by VTEX. If a change in product information is warranted, it must be done directly in CNova/Via Varejo. Or alternatively, delete the product in CNova/Via Varejo and redo the entire integration process from the beginning with the information already updated.
i.e.: if the product description has been altered, the integration will not update the description shown on the marketplace.

Within CNova/Via Varejo, products have one of two possible status: 
-	**Active:** available to sell
-	**Inactive:** unavailable to sell, resulting in the product not appearing on the marketplace.

There, these are grouped according to a product that has several variations/SKUs. 
e.g.: Black Coffeemaker (product) | 127V and 220V (variations/SKUs)

The category is sent in breadcrumb format.
e.g.: Kitchen > Appliances > Coffeemaker 

## 2. Stock

When a product is sent for the first time, the stock is also sent. However, it is then discarded by CNova/Via Varejo, since these only accept to receive stocks for products that are already catalogued. This policy exists so that the available marketplace stock is always as up-to-date as possible. 

However, when this approval is enacted, CNova/Via Varejo do not notify VTEX about it. Therefore, our integration has no way of knowing when we can send stocks anew. This way, the stock integration is dependent on an update being done directly in Inventory & shipping. 

After the products receive their first batch of stock, the update is done one SKU at a time, whenever a stock alteration occurs in VTEX.

## 3. Price

When a product is sent for the very first time, the price is sent along with it. However, it is then discarded by CNova/Via Varejo, since these only accept to receive prices for products that are already catalogued. This policy exists so that the price available on the marketplace is always as up-to-date as possible. 

However, when this approval is enacted, CNova/Via Varejo do not notify VTEX about it. Therefore, our integration has no way of knowing when we can send prices again. This way, the pricing integration is dependent on an update being done directly in Prices. 

After the products receive their first batch of prices, the update is done one SKU at a time, whenever prices are modified in VTEX. However, for prices that have a due date, when this date expires the system notifies the affiliates. This way, the base price will only be sent together with the next change in prices.

The integration sends the catalogue prices/net prices along with the final price to each SKU. The final price is sent according to the fulfilment simulation result. In a standard scenario, the price which is sent will always be the one used for the commercial policy associated with the integration. There are however factors that can influence the final price, such as special offers and fixed prices.

e.g. 1: sale with a 10% discount applied to a specific category
e.g. 2: SKU “X” has a value of 10,00 BRL in the commercial policy used in CNova/Via Varejo and has a fixed price of 15,00 BRL for this same policy. The integration will send the 15,00 BRL value.
>⚠️ Note: since payment is handled in the marketplace, it also determines the payment rules. As a consequence, we are unable to send prices that are differentiated according to the payment method. 
>
>
> 
> *e.g.: if installment payment are configured with interest rates in VTEX, the sent price would continue to be whichever one the fulfillment simulation gives.*


## 4. Benefits

Only special offers that can be calculated in the fulfillment simulation are applied. In this case, the following conditions can be applied:

| Discount Type| Items| Conditions |
| ---------- | ---------- | ---------- |
| Percentage | Categories | Min./max Order Value|
| Nominal    | Brands     | Min./max. Item Value |
| Nominal Shipping| Collections | Price of/by |
| Percentual Shipping| Products| ZIP code |
| Maximum Shipping| - | Type of Shipping |
| Free Shipping| - | - |

## 5. Order 

### A) Ordering

When placing an order in the marketplace, several factors may influence it, such as delivery, price and availability.

#### Delivery:

There are two factors that would influence the delivery in this integration: Shipping Cost and Shipping Time. The sum of these two will be the Total Delivery Time. 
>ℹ️ e.g.:
>
>
> 
> Standard Shipping = 3 days
>
>
> 
> Latency Time = 2 days
>
>
> 
> Total Delivery Time = 5 days

- __Shipping__

Upon placing an order, by default, CNova/Via Varejo consult the shipping table registered on VTEX and we return with just one shipping option to them, always starting with the cheapest. It’s worth mentioning that, in order for this query to work, it’s necessary to register the [Shipping API] (https://help.vtex.com/en/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/69cLhDK7PGOqgSs2EyqMke#api-de-frete) in the CNova/Via Varejo panel.
The shopkeeper also has the possibility to register a contingency table in CNova/Via Varejo. This way, if by any chance the integration is unable to query for shipping in VTEX, due to a temporary instability for example, or if the Shipping API is not registered in the CNova/Via Varejo panel, the information from this contingency table may be used. As such, CNova/Via Varejo would pass the order to us and the integration would try to *match* the calculated shipping cost with the carrier that fits most with VTEX (we used the name of the chosen carrier as parameter). If the integration is unable to find a carrier alike, we integrate the order using the cheapest available carrier.

- __Shipment Lead Time__

The shipment lead time is based on the sum of the ‘Latency Time’ field in Stock together with the ‘Latency Time’ from Doca, and we send the same prep time massively for all products.

>ℹ️ e.g.:
>
>
> 
> **Stock A**
>
>
> 
> - Doca 1: Latency Time = 3 days
>
>
> 
> **Stock B**
>
>
> 
> - Doca 1: : Latency Time = 5 days
>
>
> 
>
>
> 
> **Doca 1:**
>
>
> 
> - : Latency Time = 2 days
>
>
> 
>
>
> 
> An order with a Shipping Time = 3 days, would amount to a different Total Delivery Time depending on where the product is shipped from.
>
>
> 
>
>
> 
> **Forwarding from stock A:**
>
>
> 
> - Prep Time = 3 + 2 (doca 1) = 5 days
>
>
> 
> - Shipping Time = 3 days
>
>
> 
> - Total delivery time = 8 days
>
>
> 
> ** Forwarding from stock B:**
>
>
> 
> - Prep Time = 5 + 2 (doca 1) = 7 days
>
>
> 
> - Shipping Time = 3 days
>
>
> 
> - Total delivery time = 10 days


>⚠️ Note: in case of using the contingency table to calculate shipping, CNova does not consult with VTEX. This way, the only factor to be taken into consideration for **Total Delivery Time**, would be the **Shipping** provided by them, not considering the **Prep Time**. Caution should be exercised with this, since it can give rise to divergences in the **Total Delivery Time**.

#### Price and availability:

When placing an order, CNova/Via Varejo do not consult the product’s price, not its stock availability. Only the last price/stock availability sent is taken into account. 

### B) Integrating the order

CNova/Via Varejo orders have their own status. An explanation comparing the CNova/Via Varejo status with VTEX status is as follows: [Understand more about VTEX order status here]. (http://help.vtex.com/pt/tutorial/fluxo-de-pedido#fluxo-do-pedido-do-seller)
<br />

| VTEX Status | CNova/Via Varejo Status | Status Description CNova/Via Varejo |
| ---------- | ---------- | ---------- |
| Awaiting dispatch authorization| NEW | New Order |
| Awaiting dispatch authorization | RAA | Approval risk – pending payment |
| Awaiting dispatch authorization | PEN | Pending payment|
| Grace Period for Cancellation / Ready for handling / Preparing delivery | PAY | Payment approved |
| Billed       | SHP       | Invoice issued + Order shipped       |
| Billed       | DLV       | Order delivered       |
| Cancelled       | CAN       | Order cancelled       |

<br />

Before even integrating an order, CNova/Via Varejo book that same order ([see here how VTEX booking works]( https://help.vtex.com/pt/tutorial/como-a-reserva-funciona)). Simultaneously, VTEX reads an order feed from CNova/Via Varejo and integrates only those having the status __NEW__ and __PAY__. Any order that has already advanced beyond this status will not integrated nor will it show in the order logs in the Integrations tab.  
Orders are integrated with the same ID used with CNova/Via Varejo.
If an order is not integrated on the first attempt, the integration will automatically try again an infinite number of times as long as the order status is either Pay or New. [To know more about known errors in CNova/Via Varejo, click here.] (https://help.vtex.com/pt/faq/erros-de-pedidos-no-bridge-como-resolver#cnovavia-varejo) 

### C) Interacting with the order

Once the order is integrated, all actions in CNova/Via Varejo (prior to “billed” status) that match with the order progress are reflected in VTEX. CNova/Via Varejo is active in this regard.

_`e.g. 1:` upon payment approval in CNova/Via Varejo, the flow progresses to VTEX._

_`e.g. 2:` upon order cancellation in CNova/Via Varejo, the order is cancelled in VTEX._

_`e.g. 3:` once the order is billed in CNova/Via Varejo, it is not billed in VTEX._

The only case of active interaction with VTEX is, at present, billing the order. Therefore, upon filling out the invoice and billing the order in VTEX, the order is subsequently billed in CNova/Via Varejo.
However, not all actions undertaken in VTEX will mirror in CNova/Via Varejo.

_`e.g. 1:` if an order is cancelled in VTEX, the integration will be unable to cancel it in CNova/Via Varejo.

_`e.g. 2:` if a payment was not approved in CNova/Via Varejo, and you try to force the order flow progress in VTEX, the order will move forward in VTEX, but will retain the same status in CNova/Via Varejo.

### D) Invoicing the order

When billing the order in VTEX, the integration updates the status in CNova/Via Varejo to __SHP__ and afterwards to __DLV__. However, for this to happen, some field must be filled out according to each status. [understand more about filling out these fields here] (http://help.vtex.com/pt/tutorial/guia-de-integracao-de-erps-pedidos#fatura) 

- The following are warranted in order to change the status to __SHP__:
  - `invoice Key`, `tracking Number`, `courier` and `Company Registration Number` (this field should be filled out in [integration configurations](https://help.vtex.com/pt/faq/integrando-com-viavarejo-cnova)) 

- The following are warranted in order to change the status to __DLV__:
  - `courier Status: ` this is a field that can be populated automatically (via [tracking updates of carriers themselves] (https://help.vtex.com/pt/faq/quais-transportadoras-disponibilizam-o-rastreio-de-frete)) or manually (via the API or the Orders Management interface). When the field shows __finished=true__ then the order status is declared delivered and the integration sends this update to the marketplace. If the field shows __finished=false__, the order status will not be changed to __delivered__, retaining its prior status.
