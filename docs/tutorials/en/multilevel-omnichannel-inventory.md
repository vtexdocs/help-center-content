---
title: 'Multilevel Omnichannel Inventory'
id: 7M1xyCZWUyCB7PcjNtOyw4
status: PUBLISHED
createdAt: 2020-11-30T19:44:58.255Z
updatedAt: 2024-07-24T14:21:41.092Z
publishedAt: 2024-07-24T14:21:41.092Z
firstPublishedAt: 2020-12-08T19:12:43.325Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: multilevel-omnichannel-inventory
locale: en
legacySlug: recursive-marketplace-v2
subcategory: 5RAUzLD6X9Wa1maenj1eGA
---

__Multilevel Omnichannel Inventory__ is the configuration on the VTEX platform that allows a master account to make the inventory from [white label sellers](https://help.vtex.com/en/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa) and [franchise accounts](https://help.vtex.com/en/tutorial/what-are-franchise-account-and-seller-white-label--5orlGHyDHGAYciQ64oEgKa) available for sale on marketplaces. This article covers the following information about the feature:  

* [Account Architecture](#account-architecture)  
* [Benefits](#benefits)  
* [Restrictions](#restrictions)  
* [How to configure it](#how-to-configure-it)  

<div class="alert alert-info">
Read our <a href="https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory">Developer Portal</a> article to learn more about the Multilevel Omnichannel Inventory order architecture and how to configure it via REST API. 
</div>

## Account Architecture

The [marketplace](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) is the environment where the product is sold, also called storefront, whereas the [seller](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#selling-on-marketplaces) owns the inventory and ships the orders.  

When stores sell their products in a marketplace, we have a two-level relationship between seller and marketplace. But VTEX's architecture allows stores to operate both as marketplaces and sellers, expanding the range of possible combinations. 

A main account seller may act as a marketplace for [white-label](https://help.vtex.com/en/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa) sellers. This is the case of store chains configured as [franchise accounts](https://help.vtex.com/en/tutorial/what-are-franchise-account-and-seller-white-label--5orlGHyDHGAYciQ64oEgKa?&utm_source=help) and physical stores, which are, by definition, sellers in another VTEX store. 

The main seller may also sell its products in a marketplace.

In this case, there is a three-tier architecture between the marketplace, the main seller, and its white-label sellers, as shown in the image below.

![Arquitetura Multilevel omichannel inventory](https://images.ctfassets.net/alneenqid6w5/7k6hYv3kWxBVZrPFkUbsCK/fd36e953d3a8f70d068bcd69991e998c/Screen_Shot_2022-09-30_at_18.57.26.png)

By default, products from physical stores, or white-label sellers (level 3 in the image), are not available for selling in the marketplace (level 1 in the image). But you can make them available using the _Multilevel Omnichannel Inventory_ capability. 

> **Multilevel Omnichannel Inventory** is the VTEX configuration that allows white-label sellers and franchise accounts to make their inventory available on marketplaces where the main account of the direct seller is connected.

Therefore, a marketplace can sell the products from its direct sellers and the physical stores and white-label sellers linked to those sellers. 

It means that when the main account seller configures an integration with a marketplace, the franchise accounts are also automatically integrated. There is no need to manage each franchise individually to configure its integration with the marketplace.

<div class="alert alert-info">
Currently, only one level of recursion is allowed. Thus, the marketplace can sell products from white-label sellers integrated with a direct seller.
</div>

## Benefits

This capability brings competitive advantages to the marketplace, such as:

* Providing more diversified products to end customers.  
* Preventing stockouts since more stores are supplying products.  
* Sending the entire inventory from an omnichannel operation to other marketplaces, increasing the number of pickup points, for example.  
* Working with new business models and connecting different brands with collaborative relationships between marketplaces and sellers.  
* Reaching new markets and consumer niches.  
* Orchestrating orders from multiple channels with visibility across the entire supply chain.  

To learn more details about order architecture applied in Multilevel Omnichannel Inventory, read our [article for developers](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory).

## Restrictions

Some of the features available in the traditional marketplace model are not available for a _Multilevel Omnichannel Inventory_ scenario. It is important to understand these restrictions before enabling the configuration.

### Availability

This Multilevel Omnichannel Inventory feature is only available for [VTEX marketplaces](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#being-a-vtex-marketplace). To use it, the marketplace (level 1) must configure it for each direct seller (level 2) they want to include. You can do this by adding new sellers or editing the configuration of existing sellers in your store. Learn more in the [How to configure it](#how-to-configure-it) section, or in our [article on the Developer Portal](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory).

### Splitting payouts

You cannot split payouts among the entire supply chain (marketplace, direct seller, and white-label sellers). Multilevel Omnichannel Inventory orders are restricted to having the order payment made in the marketplace. The reconciliation and transfer of values to level 3 sellers must be done outside the VTEX system, as there is no native support for that.

You can only use the [payment split](https://help.vtex.com/en/tutorial/split-payment) solution to split payouts between the marketplace and direct seller (level 2) levels. In this case, we recommend using [payout splits](https://help.vtex.com/en/tutorial/split-payment). Direct sellers will receive the amounts for their own items and white-label seller items, deducting the commissions agreed with the marketplace.

This solution may be effective when direct sellers are in the same economic group as their white-label sellers, making it possible to include all payouts in a single bank account.

Note that when direct sellers are not responsible for white-label sellers’ payouts, the payout split solution will be limited because it does not allow splitting payouts directly with white-label sellers.

### Payment methods

Once the configuration is done, only marketplace payment methods will be displayed as an option at checkout. Payment methods from direct sellers (level 2) and white-label sellers (level 3) are not imported to the account architecture. Therefore, the checkout only displays the marketplace's payment methods, even if the direct seller's affiliate is configured to use their payment methods.  

<div class="alert alert-warning">
The franchise account <a href="https://help.vtex.com/en/tutorial/como-configurar-afiliado--tutorials_187">affiliate</a> must always have the setting for using payment methods disabled.
</div>

### Changing sellers

If a white-label seller (level 3) is assigned to fulfill an order and rejects it, this order will not be assigned to another white-label seller. Consequently, the customer will have to place a new order in the marketplace. Learn more about [Change Seller](https://help.vtex.com/en/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO).

### Stores editing completed orders

VTEX Stores cannot change orders made in VTEX marketplaces when they were placed in a Multilevel Omnichannel Inventory scenario. It is necessary to cancel the order and create a new one. For more information, see [Change chain orders in external marketplaces](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces).

### Customers editing completed orders

Customers cannot change orders in the **My Orders** section. Changes can only be made through customer service or via API.

### Manual Price

The Manual Price feature does not apply to Multilevel Omnichannel Inventory. Therefore, you cannot manually change prices in the cart, so you have to update prices via:  

- [ERP Integration](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide)   
- [Pricing API REST](https://developers.vtex.com/vtex-rest-api/reference/createupdatepriceorfixedprice).  
- [Pricing page in the VTEX Admin](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu)  

### New user information

When a new user places an order, their data is not recorded in the Profile System of the direct seller of the products (level 2 in the diagram above). This means that the seller has no visibility of this user. The user profile data will only be saved in the marketplace, which should carry out all communication with the user. Learn more in the article [Shared information between a marketplace and a seller on VTEX](https://help.vtex.com/en/tutorial/informacoes-compartilhadas-entre-marketplace-e-seller-na-vtex--3o7WGiBtfnKKZ3Ddug26k3). 

### Regionalization

A marketplace (level 1) cannot configure the display of prices and availability of white-label seller products (level 3) using the [regionalization feature](https://help.vtex.com/en/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc). 

### UTMs, coupons and gift cards 

The use of [coupons](https://help.vtex.com/en/tutorial/cupons-beta--1aAEN3ADpz19ss5JCIEBdL), [gift cards](https://help.vtex.com/en/tutorial/gift-card--tutorials_995) and benefits linked to [UTMs](https://help.vtex.com/en/tutorial/what-are-utm-source-utm-campaign-and-utm-medium--2wTz7QJ8KUG6skGAoAQuii) are restricted to marketplaces (level 1). The ones configured on direct sellers (level 2) and franchise accounts or white-label sellers (level 3) will not be applied. 

### Orders integrated asynchronously with price divergence

The store is unable to process orders that have been integrated asynchronously with divergent values for Multilevel Omnichannel Inventory. The [Order Authorization](https://help.vtex.com/en/tutorial/como-funciona-a-autorizacao-de-pedidos--3MBK6CmKHAuUjMBieDU0pn) feature does not support [price divergence rules](https://help.vtex.com/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW#) for this scenario. 

### Price Table

You can't create price tables using the [Price Table](https://help.vtex.com/en/tutorial/criar-tabelas-de-precos--58YmY2Iwggyw4WeSCGg24S) feature. Prices must be entered via integration with the ERP or via spreadsheets. 

## How to configure it

The marketplace must configure the __Multilevel Omnichannel Inventory__ in the VTEX Admin or via the [Rest API](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory). This configuration can be done for integrated sellers and newly integrated ones. 

<div class="alert alert-info">
Note that the marketplace must configure the Multilevel Ominichannel Inventory for each direct seller (level 2) to which they want to apply the feature, but not for each white-label seller or franchise account (level 3).
</div>

### Integrated sellers

The marketplace should follow the steps below to configure it on already integrated sellers:

1. In the VTEX Admin, go to **Marketplace > Sellers > Management.**
2. In the row corresponding to the seller whose white label sellers you want to view, click <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
3. Click Seller Details.
4. Fill in the **Fulfillment EndPoint** field following the example: `https://{{sellerAccount}}.vtexcommercestable.com.br/api/checkout?affiliateid={{affiliateId}}&sc={{tradePolicyId}}`  
5. Replace the fields that are between curly brackets with the values described below, removing the curly brackets:  

    - **sellerAccount**: The seller’s [account name](https://help.vtex.com/en/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) on the VTEX platform.   
    - **affiliateId**: Three-digit code corresponding to the [affiliate](https://help.vtex.com/en/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) created by the seller. The seller should report this value to the marketplace.   
    - **tradePolicyId**: [Trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) ID created by the seller in its own VTEX environment to sell in the marketplace. The seller must report this value to the marketplace.   
6. Click **Save.**  

### Newly integrated sellers

If the marketplace wants to [add a new seller](https://help.vtex.com/en/tutorial/adicionar-seller--tutorials_392) configuring a Multilevel Omnichannel Inventory from scratch, please follow the instructions in [Add seller](https://help.vtex.com/en/tutorial/adicionar-seller--tutorials_392), and fill in the `Fulfillment Endpoint` field following steps 4 and 5 of the tutorial in the [Integrated sellers section](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4#integrated-sellers). 

### Example

Suppose your marketplace is already integrated with the seller "Store ABC" and you want to sell the products of white-label sellers integrated with this seller.

Currently, the value in the seller's Fulfillment Endpoint field has the following format and is identified by accessing **Marketplace > Sellers > Seller Management:**

`https://storeabc.vtexcommercestable.com.br/api/fulfillment?affiliateId=mkp&sc=2`

To enable the Multilevel Omnichannel Inventory capability, the new field value should contain the **checkout** endpoint instead of the fulfillment endpoint:

`https://storeabc.vtexcommercestable.com.br/api/checkout?affiliateid=mkp&sc=2`

Note that the values entered in the `sellerAccount,` `affiliateId` and `tradePolicyId` fields already filled in on the fulfillment endpoint remain the same on the checkout endpoint. What changes is the `/checkout` string. 

