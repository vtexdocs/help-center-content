---
title: 'Importing Amazon FBA Classic orders'
id: 2MJZgBen3hpK4xkXqcv8TO
status: PUBLISHED
createdAt: 2022-10-07T21:33:29.864Z
updatedAt: 2024-11-04T21:07:30.839Z
publishedAt: 2024-11-04T21:07:30.839Z
firstPublishedAt: 2022-10-07T21:52:55.581Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: importing-amazon-classic-fba-orders
legacySlug: importing-amazon-fba-classic-orders
locale: en
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

There are three types of logistics configuration to fulfill orders placed on Amazon:  

- [Self Ship](#self-ship)  
- [FBA Classic](#FBA-Classic-(-Fulfillment-by-Amazon)) 
- FBA Onsite, to learn about the program and integration with VTEX, check out the documentation on [Importing FBA Onsite orders](/en/docs/tutorials/importing-amazon-fba-onsite-orders) 
- DBA (learn more about the program and the integration with VTEX by reading the [Amazon DBA order import](/en/docs/tutorials/importing-amazon-dba-orders) documentation)  

The seller can use Self Ship, FBA, and DBA simultaneously or only one of the logistics options, considering the eligibility of the products for the respective programs. Regardless of using only one or more logistics options, through the VTEX Admin, you can track and manage all orders placed.  

## Self Ship  

*Selfship* is the logistics strategy in which the seller is responsible for the entire fulfillment process, from product picking to delivery. To configure this option, you should follow the steps described in the[ Creating a trade policy](/en/docs/tutorials/creating-a-trade-policy) and [Defining a shipping policy in Amazon](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/37hdzaRUhJqRfXH1bIRXAa#definicao-da-estrategia-de-envio) steps.  

## FBA Classic (Fulfillment by Amazon)  

[FBA (Fulfillment by Amazon), or FBA Classic](https://venda.amazon.com.br/cresca/fba), is a logistics service offered by Amazon in which Amazon handles the inventory and shipping to the end customer. In every purchase made, the products purchased are sorted, packaged, and shipped within 24 hours.  

You can set up this service in your store by creating a dedicated inventory and a product specification for FBA Classic orders.  

Follow the steps to activate this service in the VTEX integration:  

  1.	[Creating a product specification](#Creating-a-product-specification)  
  2.	[Defining a shipping strategy for FBA Classic orders](#Defining-a-shipping-strategy-for-FBA-Classic-orders)  
  3.	[Configuring FBA Classic in the Amazon integration](Configuring-FBA-Classic-in-the-Amazon-integration)  

### 1. Creating a product specification  

First, to set up your FBA Classic products, you need to [add a product specification](/en/docs/tutorials/adding-specifications-or-product-fields) called __AMAZON_CHANNEL__ so that you indicate your product's shipping type to Amazon. In this way, you indicate to Amazon the type of shipment of the product.  

The values required will vary according to product segmentation:  

- __MFN:__ Value that corresponds to the products the seller will deliver. Valid for Self Ship or DBA programs.  
- __AFN:__ Value that corresponds to the products Amazon will deliver.  

After creating the product specification, your product will be available for FBA Classic orders. If you want to change the shipping type of this product, you need to change the specification value.  

### 2. Defining a shipping strategy for FBA Classic orders   
> ℹ️ You need to ensure that the [trade policy](/en/docs/tutorials/how-trade-policies-work) you choose is specifically for Amazon to guarantee that another integration will not use the inventory you create. 

Then you need to create a dedicated [shipping strategy](/en/docs/tutorials/shipping-strategy) for FBA Classic orders, telling us how you want your products to be delivered. Doing so will not affect the shipping strategy already defined in the "Defining a shipping strategy" on Amazon step.  

Follow the steps below to create a specific shipping strategy:  

  1.	Create a [shipping policy](/en/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio) associated with the trade policy used in the Amazon integration.  
  2.	Create a [dock](/en/docs/tutorials/managing-loading-docks) associated with the trade policy used in the Amazon integration.  
  3.	Create a [warehouse](/en/docs/tutorials/managing-warehouses) associated with the loading dock you created in the previous step.  
  4.	Go to the [Inventory Management](/en/docs/tutorials/managing-stock-items) page, find the warehouse created in the previous step, and activate the Unlimited inventory field.

### 3. Configuring FBA Classic in the Amazon integration  

Follow the steps below to complete the configuration:  

1.	Access the VTEX Admin.  
2.	In __Marketplace__, select the __Integrations__ option.
3.	Click __Settings__.  
4.	Click the gear <i class="fas fa-cog"></i> in the Amazon integration card and select the `Edit` option.  
5.	Click `FBA Classic` <i class="fas fa-toggle-on"></i> to activate this feature in the integration.  
6.	Fill in the `__Dock ID__` field with the ID of the dock created exclusively for FBA Classic.  
7.	Click `Save`.  

After saving the settings, FBA Classic will be active in the Amazon integration, and all orders placed will be displayed in the VTEX Admin with the suffix `_FBA`.

