---
title: 'Importing Amazon FBA Onsite orders'
id: 7gNpMDDchHo29fu3Sbvl1n
status: PUBLISHED
createdAt: 2024-08-30T13:13:15.945Z
updatedAt: 2024-08-30T14:25:39.575Z
publishedAt: 2024-08-30T14:25:39.575Z
firstPublishedAt: 2024-08-30T13:59:25.499Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: importing-amazon-fba-onsite-orders
legacySlug: importing-amazon-fba-onsite-orders
locale: en
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

There are four types of logistics configuration to fulfill orders placed on Amazon:  

- [Self Ship](#self-ship)
- [FBA Onsite](#fba-onsite)  
- FBA Classic, to learn about the program and integration with VTEX, check the documentation [Amazon FBA Classic Order Import](/en/docs/tutorials/importing-amazon-classic-fba-orders).  
- DBA, to learn more about the program and the integration with VTEX by reading the [Amazon DBA order import](/en/docs/tutorials/importing-amazon-dba-orders) documentation.  

The seller can use Self Ship, FBA Onsite, FBA Classic, and DBA simultaneously or only one of the logistics options, considering the eligibility of the products for the respective programs.  
Regardless of using only one or more logistics options, through the VTEX Admin, you can track and manage all orders placed.  

## Self Ship  

*Selfship* is the logistics strategy in which the seller is responsible for the entire fulfillment process, from product picking to delivery. To configure this option, you should follow the steps described in the[ Creating a trade policy](/en/docs/tutorials/creating-a-trade-policy) and [Defining a shipping policy in Amazon](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/37hdzaRUhJqRfXH1bIRXAa#definicao-da-estrategia-de-envio) steps.  

## FBA Onsite (Fulfillment by Amazon) 

[FBA (Fulfillment by Amazon Onsite), or FBA Onsite](https://venda.amazon.com/cresca/fba-onsite), is a logistics service offered by Amazon in which the shipment of products to the end consumer is the responsibility of Amazon.  

Each time a sale is completed, the seller is responsible for preparing the product for shipment, and Amazon takes care of picking it up from the seller’s distribution center, delivery, and after-sales service.  

Follow the steps to activate this service in the VTEX integration:  

  1.	[Creating a product specification](#creating-a-product-specification)  
  2.	[Defining a shipping strategy for FBA Onsite orders](#defining-a-shipping-strategy-for-fba-onsite-orders)  
  3.	[Configuring FBA Onsite in the Amazon integration](#configuring-fba-onsite-in-the-amazon-integration)  

### 1. Creating a product specification  

First, to set up your FBA Onsite products, you need to [add a product specification](/en/docs/tutorials/adding-specifications-or-product-fields) called **AMAZON_CHANNEL** so that you indicate your product's shipping type to Amazon. In this way, you indicate to Amazon the type of shipment of the product.  

The values required will vary according to product segmentation:  

- **MFN:** Value that corresponds to the products the seller will deliver. Valid for Self Ship or DBA programs.  
- **AFN:** Value that corresponds to the products Amazon will deliver.  

After creating the product specification, your product will be available for FBA Onsite orders. If you want to change the shipping type of this product, you need to change the specification value.  

### 2. Defining a shipping strategy for FBA Onsite orders  

> ℹ️ You need to ensure that the [trade policy](/en/docs/tutorials/how-trade-policies-work) you choose is specifically for Amazon to guarantee that another integration will not use the inventory you create.   

To proceed with the configuration, it is necessary to determine a [shipping strategy](/en/docs/tutorials/shipping-strategy) exclusively for FBA Onsite orders, that is, to specify the delivery operation of your products.  

Follow the steps below to create a specific shipping strategy:  

  1.	Create a [shipping policy](/en/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio) associated with the trade policy used in the Amazon integration.  
  2.	Create a [dock](/en/docs/tutorials/managing-loading-docks) associated with the trade policy used in the Amazon integration.  
  3.	Create a [warehouse](/en/docs/tutorials/managing-warehouses) associated with the loading dock you created in the previous step.  
  4.	Go to the [Inventory Management](/en/docs/tutorials/managing-stock-items) page, find the warehouse created in the previous step, and activate the **Unlimited inventory field**.  

### 3. Configuring FBA Onsite in the Amazon integration  

Follow the steps below to complete the configuration:  

1. In the VTEX Admin, go to **Marketplace > Marketplaces and Integrations.**
2. Search for the **Amazon integration** and click to open the configuration page.
3. Click on **Edit.**
4. Click on FBA Onsite to enable this feature in the integration.
5. Fill in the **Dock ID** field with the ID of the dock created exclusively for FBA Onsite.  
6. Click `Save`.  

After saving the settings, FBA Onsite will be active in the Amazon integration, and all orders placed will be displayed in the VTEX Admin with the suffix **FBAOS**.

