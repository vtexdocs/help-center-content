---
title: 'How the integration with Buscapé works'
id: 689SI30FCEGYAeiIY66yAe
status: DRAFT
createdAt: 2018-09-28T17:13:22.994Z
updatedAt: 2021-08-16T13:40:18.167Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:21:14.733Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: how-the-integration-with-buscape-works
locale: en
legacySlug: how-the-integration-with-buscape-works
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

This article aims to describe the flow of the integration between VTEX and __Buscapé__. By explaining how it works, it will become easier to understand the expected behavior of each step:

1. [Products](/en/tutorial/how-the-integration-with-buscape-works#1-products)
2. [Inventory](/en/tutorial/how-the-integration-with-buscape-works#2-inventory)
3. [Price](/en/tutorial/how-the-integration-with-buscape-works#3-price)
4. [Promotions](/en/tutorial/how-the-integration-with-buscape-works#4-benefits)
5. [Order](/en/tutorial/how-the-integration-with-buscape-works#5-order)

This structure was designed to facilitate understanding, since the integration sends to Buscapé _product_, _inventory_ and _price_ as separate entities.

It is also important to note that Buscapé works in two different ways:

__Ad Comparator:__ In this mode, it only redirects the user to your website, where the purchase will be made.
__Marketplace:__ In this mode, the sale of the product advertised by the seller is made directly by Buscapé and the order is integrated into VTEX.

This means that some of the flows mentioned in this article apply only to one mode, while others are valid to both modes.


## 1. Products
### The fields that are sent
For products to be displayed in Buscapé, the integration sends the following _product_ and _SKU_ fields:

| Product | SKU |
| ---------- | ---------- |
| Name* | Name* |
| Description* | EAN |
| Category¹ | Weight* |
| Specifications | Height* |
| - | Width* |
| - | Length* |
| - | Pictures |
| - | Specifications |
| - | Manufacturer's Code |

_Caption:_<br />
`*` Required fields.<br />
`¹` The category is sent in breadcrumb format. _Ex: Male > Shirts > Long Sleeve_

If the submission is successful, the SKU will also go through a cataloging process done by the Buscapé team. Only after that will the SKU be available for sale in the marketplace.


### Product display

After correct submission and after Buscapé's cataloging process has finished, all variations/SKUs of the same product are displayed together in the same grouping (provided it is correctly registered in VTEX).

>ℹ️ Ex: Blue Shirt (product) | S, M, L (variations/SKUs)


### Product updates
Once the integration sends the Product and SKU information for the first time, they can be updated later.

You only need to make the changes through VTEX Admin (or your ERP) as you normally do. The integration automatically sends all updates: if, for example, you change inside VTEX the description of a product that was sent to Buscapé, the integration will automatically reflect this change in the marketplace. Images are also considered in the upgrade process.


### Product status
If everything is OK, the products sent to Buscapé can have the following statuses:

- __Active:__ when the item is available for sale;
- __Unavailable:__ when the item is *not* available for sale.

The Buscapé statuses reflect product inventory changes in VTEX. This means that as long as there is inventory, the product will be active in the marketplace.


## 2. Inventory

Inventories are sent for the first time along with the first products sent. From there, the ads' inventory in Buscapé is updated automatically, SKU by SKU, whenever there is any change in VTEX. The update only takes a few seconds to reflect in the marketplace, but inventory logs may take a few minutes to be displayed in VTEX Admin.

>ℹ️ To access the logs, click on the **Integrations** section of the Admin side menu. A list of options will open, and then you must click the **Inventory** option.


## 3. Price
Prices are first sent along with the first products sent. From there, ads' prices in Buscapé are updated automatically, SKU by SKU, whenever there is any change in VTEX. The update takes only a few seconds to reflect in the marketplace, but price logs may take a few minutes to appear in VTEX Admin.

However, the system does not notify affiliates when the end date of a price with expiration date arrives. This means that when it expires, the integration does not update the price displayed in Buscapé. The change will only happen when the base price is changed manually in VTEX.

For each SKU, the integration sends the __final price__ and the __list price__ (also known as `price from`) based on the response from the checkout simulation. Usually, the price that is sent is always the one determined by the trade policy associated with the integration. However, __Benefits__ and __Fixed prices__ may influence the final price.

>ℹ️ **Example 1:**
>
>
> 
> A benefit that offers a 10% discount for ticket payment.

>ℹ️ **Example 2:**
>
>
> 
> In the sales policy used in Buscapé, an SKU is priced at $ 10 and has a fixed price of $ 15. The value that the integration sends to the marketplace is $ 15.

The integration sends prices according to the payment method. This means that if there are interests set for installment payments, the price sent to Buscapé will also bear interest.


## 4. Benefits
Since the integration sends the product's __list price__ to the marketplace, benefits can be identified by Buscapé users.

Regarding benefit types, the integration only applies those that can be calculated in the checkout simulation. In such cases, the following conditions apply:

| Discount type | Items | Conditions |
| ---------- | ---------- | ---------- |
| Percentage | Categories | Min/Max Order Value |
| Nominal | Brands | Min/Max Item Value |
| - | Collections | Price from/for |
| - | Products | By payment method¹ |

`¹` Only works in the case of Bank Slips. If a credit card based benefit is created, for example, it will not work.


## 5. Order
### A) Ordering
Order details are directly influenced by factors such as delivery, price and availability.

#### Shipping
Buscapé does __not__ do real-time shipping simulations in VTEX. The calculation is based on a shipping spreadsheet, which must be inputed directly into the marketplace. To find out how to do this, contact Buscapé team.

The marketplace provides the order with the shipping already calculated based on the spreadsheet and with the type of delivery chosen (in Buscapé checkout, you can choose between `Normal` and ` Express` delivery types). These delivery types are rendered according to the values entered in their shipping spreadsheet. So the integration tries to find the carrier that best fits this value (the parameter used is _[type of carrier](/tutorial/como-funciona-o-tipo-de-entrega?locale=en)_), following the logic below:

- Order with `Normal` delivery = the integration chooses the carrier with the cheapest shipping in VTEX;
- Order with 'Express' delivery = the integration chooses the carrier with the fastest shipping in VTEX.

#### Price and availability

At the time the order is made, Buscapé __does not check in real__ time the price or inventory availability of the products in VTEX. The marketplace considers only the latest information sent about _price_ and _inventory_.


### B) Integrating the order
Orders made in Buscapé have a status of their own. In the table below you will find the explanation for each of them as well as the correspondence with the order status in VTEX.

| VTEX status | Buscapé status | Buscapé status description |
| ---------- | ---------- | ---------- |
| Waiting for clearance to send | new / accept / pending | New order / Pending payment approval / Awaiting payment method |
| Cancellation grace / Ready for handling / Preparing delivery | approved | Payment approved |
| Invoiced | invoiced | Invoice issued |
| Invoiced | sent | Order sent |
| Invoiced | delivered | Order delivered |
| Canceled | canceled | Order canceled |


VTEX reads Buscapé's order feed and integrates those that have status __New__, __Accept__, __Pending__ or __Approved__ into the marketplace. Orders that have any other status __are not integrated__ and __do not appear in the logs__ of the order integration (Integrations section in VTEX Admin).

After the integration happens, the orders continue to be treated with the same ID used in Buscapé.

During this process, the order may fail to be integrated for some reason. You can check what went wrong by clicking _Orders_, which is below the _Integrations_ item in the _Marketplace_ section of the Admin side menu. To solve the problem, follow the recommendations for the [main Buscapé order integration errors](/faq/erros-de-pedidos-no-bridge-como-resolver?locale=en#buscape) and take the necessary action. __After everything is done, you must ask Buscapé to send the order back to VTEX, since it can not be reprocessed directly in the Admin integration panel.__


### C) Interacting with the order

After the order has been successfully integrated, you can interact with it both through VTEX Admin and through the Buscapé administration panel. However, some actions may or may not be applied on both sides.

#### Actions that are reflected on both VTEX and Buscapé:

- Cancellation of order in Buscapé (integration cancels it in VTEX as well);
- Order invoiced in VTEX (the integration invoices it and updates the order status in Buscapé, as explained below in item `D`).

#### Actions that are not reflected on both platforms:
- Cancellation of order in VTEX (the integration __can not cancel it__ in Buscapé);
- Order billed in Buscapé (the integration __can not invoice it__ in VTEX).


### D) Invoicing the order
When invoicing the order in VTEX, the integration updates the status in Buscapé to __invoiced__, __sent__ and, finally, __delivered__. However, for this to happen, some specific fields need to be populated according to each status. You can see more details on completing these fields in our [ERP Integration Guide](https://developers.vtex.com/docs/erp-integration-set-up-order-processing).

To change the status to __invoiced__ you will need:
- `invoiceKey`,` invoiceNumber` and `issuanceDate`

To change the status to __sent__ you will need:
- `trackingNumber` and `courier`

To change the status to __delivered__ you will need:
- `courierStatus`: this field can be automatically populated (via [updates in the tracking of the carriers themselves](/tutorial/quais-transportadoras-disponibilizam-o-rastreio-de-frete?locale=en)) or manually populated (via API or Orders). When the field returns `finished=true`, then the status of the order is declared as __delivered__ and the integration sends this information to the marketplace. If the field returns `finished=false`, the status of the order will not be changed to __delivered__, remaining in the previous one.
