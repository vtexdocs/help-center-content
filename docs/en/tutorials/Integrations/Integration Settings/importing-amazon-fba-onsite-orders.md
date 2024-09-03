---
title: ' Importing Amazon FBA Onsite orders'
id: 7gNpMDDchHo29fu3Sbvl1n
status: PUBLISHED
createdAt: 2024-08-30T13:13:15.945Z
updatedAt: 2024-08-30T14:25:39.575Z
publishedAt: 2024-08-30T14:25:39.575Z
firstPublishedAt: 2024-08-30T13:59:25.499Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slug: importing-amazon-fba-onsite-orders
locale: en
legacySlug: importing-amazon-fba-onsite-orders
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

There are four types of logistics configuration to fulfill orders placed on Amazon:  

- [Self Ship](#self-ship)
- [FBA Onsite](#fba-onsite)  
- FBA Classic, to learn about the program and integration with VTEX, check the documentation [Amazon FBA Classic Order Import](https://help.vtex.com/en/tutorial/importacao-de-pedidos-amazon-fba-classic--2MJZgBen3hpK4xkXqcv8TO).  
- DBA, to learn more about the program and the integration with VTEX by reading the [Amazon DBA order import](https://help.vtex.com/pt/tutorial/importacao-de-pedidos-amazon-dba--1um6EfKlALGsHzERbH7jig) documentation.  

The seller can use Self Ship, FBA Onsite, FBA Classic, and DBA simultaneously or only one of the logistics options, considering the eligibility of the products for the respective programs.  
Regardless of using only one or more logistics options, through the VTEX Admin, you can track and manage all orders placed.  

## Self Ship  

*Selfship* is the logistics strategy in which the seller is responsible for the entire fulfillment process, from product picking to delivery. To configure this option, you should follow the steps described in the[ Creating a trade policy](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) and [Defining a shipping policy in Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/37hdzaRUhJqRfXH1bIRXAa#definicao-da-estrategia-de-envio) steps.  

## FBA Onsite (Fulfillment by Amazon) 

[FBA (Fulfillment by Amazon Onsite), or FBA Onsite](https://venda.amazon.com/cresca/fba-onsite), is a logistics service offered by Amazon in which the shipment of products to the end consumer is the responsibility of Amazon.  

Each time a sale is completed, the seller is responsible for preparing the product for shipment, and Amazon takes care of picking it up from the seller’s distribution center, delivery, and after-sales service.  

Follow the steps to activate this service in the VTEX integration:  

  1.	[Creating a product specification](#creating-a-product-specification)  
  2.	[Defining a shipping strategy for FBA Onsite orders](#defining-a-shipping-strategy-for-fba-onsite-orders)  
  3.	[Configuring FBA Onsite in the Amazon integration](#configuring-fba-onsite-in-the-amazon-integration)  

### 1. Creating a product specification  

First, to set up your FBA Onsite products, you need to [add a product specification](https://help.vtex.com/en/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106) called **AMAZON_CHANNEL** so that you indicate your product's shipping type to Amazon. In this way, you indicate to Amazon the type of shipment of the product.  

The values required will vary according to product segmentation:  

- **MFN:** Value that corresponds to the products the seller will deliver. Valid for Self Ship or DBA programs.  
- **AFN:** Value that corresponds to the products Amazon will deliver.  

After creating the product specification, your product will be available for FBA Onsite orders. If you want to change the shipping type of this product, you need to change the specification value.  

### 2. Defining a shipping strategy for FBA Onsite orders  

>ℹ️ You need to ensure that the <a href=https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV>trade policy</a> you choose is specifically for Amazon to guarantee that another integration will not use the inventory you create.   

To proceed with the configuration, it is necessary to determine a [shipping strategy](https://help.vtex.com/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) exclusively for FBA Onsite orders, that is, to specify the delivery operation of your products.  

Follow the steps below to create a specific shipping strategy:  

  1.	Create a [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio) associated with the trade policy used in the Amazon integration.  
  2.	Create a [dock](https://help.vtex.com/en/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW) associated with the trade policy used in the Amazon integration.  
  3.	Create a [warehouse](https://help.vtex.com/en/tutorial/gerenciar-estoque--tutorials_137) associated with the loading dock you created in the previous step.  
  4.	Go to the [Inventory Management](https://help.vtex.com/en/tutorial/managing-stock-items--tutorials_139) page, find the warehouse created in the previous step, and activate the **Unlimited inventory field**.  

### 3. Configuring FBA Onsite in the Amazon integration  

Follow the steps below to complete the configuration:  

1. In the VTEX Admin, go to **Marketplace > Marketplaces and Integrations.**
2. Search for the **Amazon integration** and click to open the configuration page.
3. Click on **Edit.**
4. Click on FBA Onsite to enable this feature in the integration.
5. Fill in the **Dock ID** field with the ID of the dock created exclusively for FBA Onsite.  
6. Click `Save`.  

After saving the settings, FBA Onsite will be active in the Amazon integration, and all orders placed will be displayed in the VTEX Admin with the suffix **FBAOS**.

