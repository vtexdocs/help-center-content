---
title: 'Consumption tags used in the billing module'
id: 4v33NVnAEe6HTgbF6sOBF2
status: PUBLISHED
createdAt: 2024-10-04T20:18:55.246Z
updatedAt: 2024-10-31T18:40:41.214Z
publishedAt: 2024-10-31T18:40:41.214Z
firstPublishedAt: 2024-10-04T21:40:07.736Z
contentType: tutorial
productTeam: Billing
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: consumption-tags-used-in-the-billing-module
locale: en
legacySlug: consumption-tags-used-in-the-billing-module
subcategoryId: 22TaEgFhwE6a6CG2KASYkC
---

VTEX considers the total amount of orders approved in the [payment transaction flow](https://help.vtex.com/en/tutorial/fluxo-da-transacao-no-pagamentos--Er2oWmqPIWWyeIy4IoEoQ) as the [store revenue](https://help.vtex.com/en/tutorial/o-que-a-vtex-considera-como-receita-para-apuracao--58j4cfoXfisWyemASACwSq) and calculates the invoice accordingly. However, different rates may apply to orders of the same value because the billing module operates based on tags.

Consumption tags are categories that define the characteristics of an order and indicate the business rules applied to the sale. The order is analyzed based on specific criteria and is assigned tags that determine the take rate to be charged.

This article presents the existing tags in the billing module. By providing this content, we aim to increase transparency in your commercial relationship with VTEX.

>⚠️ The order tagging system does not charge your store's customers in any way. It serves only as a data source that the billing module uses to calculate the invoice.

## First steps for assigning consumption tags

For an order to be tagged, it must meet the following conditions:

* Have all [order details](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa) ([incomplete](https://help.vtex.com/en/tutorial/entendendo-os-pedidos-incompletos--tutorials_294) orders do not receive tags).
* Have payment information, including the authorization date of the financial transaction.

>ℹ️ Orders placed through [Multilevel Omnichannel Inventory (MOI)](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4), known as chain orders, do not include payment information. Therefore, they cannot be tagged or charged.

## Changing orders and tags

The order is only tagged once it is completed. However, if the order is [changed](https://help.vtex.com/en/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw#status-of-the-order-to-be-changed), it is tagged again, as the change may impact the conditions affecting the take rate to be charged.

>❗ You can change an order multiple times, which may result in updates to the tags applied by the billing module. While the order is in the `Awaiting fulfillment` status, this process of changes and tag updates can continue.

## Tagging groups

On VTEX, tags are categorized into three main groups: 

* [Tags by sales channel:](#tags-by-sales-channel) Refers to the channel where the order is placed.
* [Tags by order origin:](#tags-by-order-origin) Refers to the [marketplace and seller](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) context.
* [Tags by customer type:](#tags-by-customer-type) Refers to the legal status of the customer, whether an individual or a company.

The following sections provide details about each of these groups.

## Tags by sales channel

Below are the tags related to the channel through which the order is placed:

* **IsInStore:** For orders placed through [VTEX Sales App](https://help.vtex.com/en/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc).
* **IsInfiniteShelf:** For orders placed through **VTEX Sales App** [endless aisle](https://help.vtex.com/en/tracks/unified-commerce-strategies--3WGDRRhc3vf1MJb9zGncnv/40KMlmGI5tN0r0KPCDWgGn) feature; used when the [inventory](https://help.vtex.com/en/tutorial/gerenciar-inventario--tutorials_139) item is not stored locally.
* **IsSalesAppDeliveredByMainAccount:** For orders placed through [VTEX Sales App](https://help.vtex.com/en/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc); used when the item sold belongs to the [main account](https://help.vtex.com/en/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#vtex-account-types) and the sale is made within the main account environment.
* **IsSocialSelling:** For orders placed through [Social Selling](https://help.vtex.com/en/tutorial/como-usar-o-app-carrinho-compartilhavel--3ePPpkmeZ96GXbeIoGZbTN).

  >ℹ️ The `IsSocialSelling` tag is only valid for [Social Selling](https://help.vtex.com/en/tutorial/como-usar-o-app-carrinho-compartilhavel--3ePPpkmeZ96GXbeIoGZbTN) orders placed through **VTEX Sales App**.

* **IsCallCenter:** For orders placed through **VTEX Sales App**; used when the sale was promoted by a sales associate, attendant, or consultant, as in [telesales](https://help.vtex.com/en/tutorial/como-configurar-as-funcionalidades-de-televendas--76FNgQP2Glc4umMJ5Yr50R).
* **IsOnHands:** For orders placed through **VTEX Sales App**; used when the order was placed in the physical store and the inventory item was stored locally. This tag is applied in the marketplace environment.
* **IsOnHandsFulfillment:** For orders placed through **VTEX Sales App**; used when the item sold belongs to the seller. This tag is applied in the seller environment.

>ℹ️ When the store acts as both a marketplace and a seller, the order is tagged as `IsOnHandsFulfillment`.

## Tags by order origin

The image below shows how the order is tagged based on its origin, both for the marketplace and the seller:

![marcacao_pedidos_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Billing/Contracts/consumption-tags-used-in-the-billing-module_1.png)

>⚠️ Due to commercial agreements, VTEX grants a type of certification to certain channels. When an order is generated in a channel that does not have this level of certification, there are no consumption tags by origin, and the order is tagged as `IsB2C`. In other words, only certified channels have consumption tags by origin.

The flow from `IsMarketplace` tags orders in the seller environment, while the flow from `IsSeller` tags orders in the marketplace environment. Each of these tags is described below.

### Marketplace

See below the tags available for orders in the seller environment, depending on the marketplace where the order was placed:

* **IsMarketplace:** The order was created in a [marketplace](https://help.vtex.com/en/tutorial/o-que-e-um-marketplace--680lLJTnmEAmekcC0MIea8) — this could be a [certified marketplace](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-certified-marketplaces), [partner marketplace](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-partner-marketplaces), [VTEX marketplace](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#operating-as-a-vtex-marketplace) (store acting as the marketplace), or an [external marketplace](https://developers.vtex.com/docs/guides/external-marketplace-integration-guide).  Every `IsMarketplace` order will be tagged as either `IsCertifiedMarketplace` or will be an external marketplace. This initial tag is only for system purposes.
* **IsCertifiedMarketplace:** The order was placed in a [certified marketplace](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-certified-marketplaces), [partner marketplace](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-partner-marketplaces), or [VTEX marketplace](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-marketplace-vtex) (store acting as a marketplace).  Once the order is assigned this tag, it receives either the `IsInternalCertifiedMarketplace` or `IsExternalCertifiedMarketplace` tag.
    * **IsExternalCertifiedMarketplace:** The order was placed in a [certified marketplace](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-certified-marketplaces) (Amazon, Mercado Libre, etc.) or a [partner marketplace](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-partner-marketplaces) (Shopee, Facebook, etc.).
    * **IsInternalCertifiedMarketplace:** The order was placed in a [VTEX marketplace](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#operating-as-a-vtex-marketplace), so the store acted as a marketplace for a seller. This tag may include another tagging level.
        * **IsInternalCertifiedMarketplaceAndIsParentAccount:** The order was placed in a VTEX marketplace where the marketplace is the main account, and the seller is a [subaccount](https://help.vtex.com/en/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#additional-environment) (i.e., an additional environment).

### Seller

See below the consumption tags available in the marketplace environment, depending on the seller that sold the order:

* **IsSeller:** The order was placed in a marketplace where the item sold belongs to the [seller](https://help.vtex.com/en/tutorial/o-que-e-um-seller). Every `IsSeller` order will necessarily be tagged as either `IsExternalSeller` or `IsCertifiedSeller`, and this initial tag is only for system purposes.
* **IsExternalSeller:** The order was placed in a [VTEX marketplace](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#operating-as-a-vtex-marketplace) (store acting as a marketplace), and the seller of the item is an [external seller](https://developers.vtex.com/docs/guides/external-seller-integration-guide).
* **IsCertifiedSeller:** The order was placed in a [certified marketplace](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-certified-marketplaces), [partner marketplace](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-partner-marketplaces), or VTEX marketplace (store acting as a marketplace) in which the seller who owns the item sold is a [VTEX seller](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#operating-as-a-vtex-seller). Every `IsCertifiedSeller` order will also have the `IsInternalCertifiedSeller` tag.
    * **IsInternalCertifiedSeller:** This tag is used for system purposes only. Every `IsInternalCertifiedSeller` order will also receive the `IsInternalCertifiedSellerAndIsChildAccount` or `IsSellerPortal` tag.
        * **IsInternalCertifiedSellerAndIsChildAccount:** The order was placed in a VTEX marketplace where the marketplace is the main account, and the seller of the sold item is its [franchise account](https://help.vtex.com/en/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa#relationship-between-white-label-sellers-and-franchise-accounts).
        * **IsSellerPortal:** The order was placed in a VTEX marketplace where the marketplace is the main account, and the seller of the item is its [Seller Portal account](https://help.vtex.com/en/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#vtex-account-types).

## Tags by customer type

Below are the tags related to the order customer type:

* **IsB2B:** The customer is a legal entity, and the order was placed in the [B2B](https://help.vtex.com/en/tutorial/configurando-b2b-na-vtex--tutorials_238) (Business to Business) context.
* **IsB2C:** The customer is an individual, and the order was placed in the B2C (Business to Customer) context.

