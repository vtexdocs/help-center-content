---
title: 'Integration Guide for non-VTEX platform-hosted Marketplaces'
id: SMBUYFVEfZr0m0ttOULxj
status: PUBLISHED
createdAt: 2019-09-16T12:59:18.174Z
updatedAt: 2022-10-30T20:49:19.369Z
publishedAt: 2022-10-30T20:49:19.369Z
firstPublishedAt: 2019-10-14T19:49:14.349Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: integration-guide-for-marketplaces-marketplace-non-vtex
legacySlug: integration-guide-for-marketplaces-marketplace-non-vtex
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

<div class="alert alert-warning">
Check out the updated version of this <a href="https://developers.vtex.com/vtex-developer-docs/docs/external-marketplace-integration-guide">marketplace integration guide</a> in our Developer Portal. 
</div> 

This document assists in integrating a non-VTEX-hosted Marketplace with a VTEX-hosted Seller.

The actions required to perform this integration on the Marketplace side can be divided into two blocks:
- ** A) ** Actions regarding __catalog__ updates (change in catalog, price or SKU inventory);  

- ** B) ** Actions regarding the sending and processing of __orders__ (cart simulation, order submission, dispatch authorization, receipt of invoice, carrier tracking and cancellation).

In this article, you get an overview of the process of integrating both blocks, as well as access to the links with the each action's specific step-by-step.

> **Some Concepts**
**Seller** - Product owner, responsible for fulfillment, i.e. for complying with SKU delivery.<br/> 
**Marketplace/Affiliate** - Window display owner (where the end customer sees the product), responsible for displaying and selling the SKU.<br/> 
**SKU** - Item to be exchanged and sold between Marketplace and Seller.<br/> 
**Trade Policy** - Product assortment, pricing and logistics settings that determine the characteristics of a sales channel.<br/> 
**Endpoint** - Access point for an internet service, service ready to receive a request and return a reply.<br/> 
**MarketplaceServicesEndpoint** - Access point where VTEX Sellers give order information to the Marketplace, such as invoice and the order tracking code.<br/> 

## A) Flow referring to Catalog updates

- Within the VTEX-hosted store (*Seller*), an *affiliate* (ie **Marketplace**) will be added, affiliate who is interested in receiving the catalog and SKU updates.  

- The **Marketplace** must implement an endpoint where it will receive  notifications about any price, inventory or catalog changes from the seller.  

- In VTEX *Seller*, each time a SKU marketed by **Marketplace** undergoes a price, inventory or catalog change, the affiliate notification endpoint will be called.  

- When the **Marketplace** is notified by the *Seller* that a SKU has changed, the **Marketplace** should check whether it currently sales that SKU.

> if yes: the **Marketplace** uses the Catalog's API to get and save the SKU data from the Seller.  
> if no: the **Marketplace** uses the Catalog's API to get the SKU data from the Seller and then decide whether that data will be included in the store or not.

### API REST - Actions pursuant to Catalog updates

1) Marketplace receives notifications on price, inventory or catalog changes.  

2) Marketplace searches for Seller's SKU data using the Catalog's API.   

3) Marketplace searches for SKU price, inventory and shipping data using the Fulfillment API.  

<div class = "alert alert-info">
For more information, see the documentation for developers <a href="https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide">External Marketplace</a>.
</div>

## B) Flow referring to Order sending and processing

The integrations flow referring to the shipping and processing of orders can be divided into 3 stages, each with its specific actions:

### Cart Simulation
- Products are either added or to the **Marketplace** cart or changed in the cart.    

- **Marketplace** needs to simulate the cart to check the *Seller's* price and inventory. 

> OBS: when the client proceed to checkout, another cart simulation must be made.  

### Order sending and shipping authorization
- Order is closed in **Marketplace**.    
- **Marketplace** adds the order to the *Seller's* endpoint.  
- Order payment is completed in the **Marketplace**.   
- **Marketplace** calls the *Seller's* endpoint to authorize the order's dispatch.  

### Implementation of Marketplace Services Endpoint Actions 

- *Seller* calls the *Marketplace Services Endpoint* to perform three possible final actions:  
- Give invoice details.  
- Give the carrier tracking code.  
- Submit cancellation request.  

### API REST - Actions referring to Order shipping and processing

1) Cart simulation.  
2) Place order with the Seller.  
3) Authorize order dispatch with the Seller.  
4) Report Invoice.  
5) Report carrier tracking.  
6) Submit cancellation request.  

<div class = "alert alert-info">
For more information, see the documentation for developers <a href="https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide">External Marketplace</a>.
</div>
