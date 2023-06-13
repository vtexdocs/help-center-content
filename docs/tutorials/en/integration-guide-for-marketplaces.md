---
title: Integration guide for marketplaces
id: 3yYUDMTpNSYueYSOuOyui8
status: PUBLISHED
createdAt: 2017-10-14T20:33:44.462Z
updatedAt: 2020-12-03T15:48:06.203Z
publishedAt: 2020-12-03T15:48:06.203Z
firstPublishedAt: 2017-10-14T21:29:43.102Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: integration-guide-for-marketplaces
legacySlug: integration-guide-for-marketplaces
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

<div class="alert alert-warning">
Check out the updated version of this <a href="https://developers.vtex.com/vtex-developer-docs/docs/external-marketplace-integration-guide">marketplace integration guide</a> in our Developer Portal. 
</div> 

## Marketplaces and sellers

E-commerce model between Marketplace and Seller, may stores are hosted or not on VTEX platform. Sales between Marketplace and Seller involve a negotiation between the two parts, the owner of the product (the Seller) and the owner of the showcase (the Marketplace). This negotiation usually involves commercial policy of traded items (SKUs) and maintenance of payment.

The VTEX besides offering integrations with the biggest market players, also offers a set of APIs and instructions to third parties integrate themselves. 

- _Seller_ - Responsible for accomplish the order's delivery (the owner of the product).  
- _SKU_ - Defines a variation of a product, Example: 110V white refrigerator.  
- _Marketplace_ - Showcase where the SKUs are exposed (the owner of the showcase).  
- _SLA_ - Service agreement, Example: deadline and cost of delivery.  
- _API_ - Service interfaces for communication between computer systems.

### Support tools to the integrator

### Postman

Chrome browser extension, in this tool is possible to test, store history, save access requests collections from all APIs of the VTEX modules (OMS, Logistics, Pricing, GCS, Catalog, Payments, etc.), besides it allows to export and import requests from other developers.

[[Developer] - VTEX API Collection](http://help.vtex.com/developer-docs/)

It's very important the integrator get the knowledge of this kind of tools, or other similar tools before start an integration process using the REST VTEX APIs.

### Credentials of access on the REST APIs

Every call made to REST APIs from VTEX must be made in “https” and must have in its header the authentication keys. The authentication keys of the header (to access the REST APIs) must be requested to the store administrator or to the operations team that is deploying the store.

<div class="alert alert-warning"><strong>Warning</strong>An exclusive key and token must be created to each integrator, a key from the own store mustn't be used.</div>

## Integration models

### Seller selling in marketplace hosted on VTEX platform

This model allows a seller not hosted on VTEX platform, exhibit and sell their products (SKUs) in Marketplaces hosted on VTEX platform. To implement this model, the Seller shall exhibit some endpoints that will be called by the Marketplace and call some endpoints exposed by the Marketplace, following the VTEX protocol. In this model the Marketplace controls all the payment process.  Find the instructions to do this integration below:

[[Guide] Seller Selling in Marketplace Hosted on VTEX Platform](https://help.vtex.com/en/tutorial/integration-guide-for-marketplaces-seller-non-vtex--yMji0ow0rQuYgQsg26Kus)

### Seller selling in marketplace hosted on VTEX platform and processing the payment

This model allows a seller not hosted on VTEX platform, exhibit and sell their products (SKUs) in Marketplaces hosted on VTEX platform. To implement this model, the Seller shall exhibit some endpoints that will be called by the Marketplace and call some endpoints exposed by the Marketplace, following the VTEX protocol. In this model the Marketplace sends payment data to be processed at the Seller. Following are the instructions to do this integration.

[[Guide] Seller Selling in Marketplace Hosted on VTEX Platform and Processing the Payment](https://help.vtex.com/en/tutorial/integration-guide-for-marketplaces-seller-non-vtex-with-payment--bNY99qbQ7mKsSMMuq2m4g)

### Marketplace selling to seller hosted on VTEX platform

This model allows a seller not hosted on VTEX platform, exhibit and sell their products (SKUs) from Sellers hosted on VTEX platform. To implement this model, the Marktplace shall exhibit some endpoints that will be called by the Seller and call some endpoints exposed by the Seller, following the VTEX protocol. In this model the Marketplace controls all the payment transaction. Following are the instructions to do this integration.

[[Guide] Marketplace non VTEX Selling to Seller Hosted on VTEX Platform](https://help.vtex.com/en/tutorial/integration-guide-for-marketplaces-marketplace-non-vtex--SMBUYFVEfZr0m0ttOULxj)

### Marketplace selling to seller hosted on VTEX platform sending payment

This model allows a marketplace not VTEX exhibit and sell products (SKUs) from Sellers hosted on VTEX platform. To implement this model, the Marktplace shall exhibit some endpoints that will be called by the Seller and call some endpoints exposed by the Seller, following the VTEX protocol. In this model the Marketplace creates the payment transaction in the Seller. Following are the instructions to do this integration.

[[Guide] Marketplace Selling to Seller Hosted on VTEX Platform Sending Payment](http://help.vtex.com/en/tutorial/integration-guide-for-marketplaces-marketplace-non-vtex-with-payment)
