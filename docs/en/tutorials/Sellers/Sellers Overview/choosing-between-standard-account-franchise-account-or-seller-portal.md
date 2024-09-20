---
title: 'Choosing between standard account, franchise account or Seller Portal'
id: 4S90HzzhMyZESsHqrnUs78
status: PUBLISHED
createdAt: 2022-04-20T14:15:50.164Z
updatedAt: 2024-09-16T16:41:20.164Z
publishedAt: 2024-09-16T16:41:20.164Z
firstPublishedAt: 2022-04-27T21:42:35.010Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: choosing-between-standard-account-franchise-account-or-seller-portal
locale: en
legacySlug: choosing-between-standard-account-franchise-account-or-seller-portal
subcategoryId: 5tlIjp0ZkAU4EIk4OgyEmm
---

The VTEX platform promotes the collaboration between marketplaces and sellers in different scenarios so that you can plan multiple [marketplace strategies](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402). The marketplace is the environment where products are sold, and sellers are inventory owners also responsible for delivering orders.

There are three types of accounts on the VTEX platform and each one allows you to act with a different seller profile:

- **Standard account:** It has all the VTEX platform module configurations and acts as a standard seller, known as [VTEX seller](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#being-a-vtex-seller).
- **Franchise account:** It is associated with a standard account, inheriting its catalog. [Franchise accounts](https://help.vtex.com/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl) can configure their own logistics, payment and prices, and use the VTEX platform modules partially. This type of seller is called a [white label seller](https://help.vtex.com/en/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa).
- **Seller Portal:** The [Seller Portal](https://help.vtex.com/en/tutorial/seller-portal-primeiros-passos--6w1vBdRH2uuBGmUqgNQjwK) is a feature of the VTEX platform that allows sellers to connect and sell their products on marketplaces of the VTEX ecosystem, regardless of whether the seller already has a VTEX account. The Seller Portal allows partial access to the platform modules, and the seller type can be standard or [white label seller](https://help.vtex.com/en/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa).

>⚠️ The limit for each Seller Portal account is 100 thousand products. For more information, please contact our <a href="https://support.vtex.com/hc/pt-br/requests">Support.

The table below presents the main use cases for each account type:

| **Seller Portal** | **Standard account** | **Franchise account** |
| ---------- | ---------- | ---------- |
| The [Seller Portal](https://help.vtex.com/en/tutorial/seller-portal-primeiros-passos--6w1vBdRH2uuBGmUqgNQjwK) is recommended for external sellers that do not have a VTEX account but want to connect to a VTEX marketplace. This feature allows the VTEX marketplace to [share products](https://help.vtex.com/en/tutorial/seller-portal-produtos-compartilhados--6vUGj2UmOuLzQTK9pj04lu) with its sellers, reducing friction and simplifying the operation management. Each Seller Portal environment created integrates the seller with a single VTEX marketplace. | The standard account is recommended for stores that prefer to handle all the ecommerce operations, using [unified commerce](https://help.vtex.com/en/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) strategies. A standard account can act both as a VTEX seller and a VTEX marketplace, connecting to multiple marketplaces and [native connectors](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-native-connector-vtex). | A [franchise account](https://help.vtex.com/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl) is of strategic use for sales growth operations by integrating physical stores. It offers the advantage of inheriting the catalog of a standard account. Franchise accounts are usually used by franchisees and brand representatives. |

>ℹ️ Your business model and objectives will help determine the best operating option for you in the VTEX ecosystem. Learn more in the article [Marketplace strategies at VTEX](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402).

See below for comparisons explaining how the Seller Portal, standard accounts and franchise accounts relate to the modules and features of the VTEX platform:

## Account

| **Aspect** | **Seller Portal** | **Standard account** | **Franchise account** |
|---------- | ---------- | ---------- | ---------- |
| Creating an account | You can [create an account in the Seller Portal](https://help.vtex.com/en/tutorial/seller-portal-primeiros-passos-para-o-marketplace--6ccErY3mCcfoW0qGXf167) both in the VTEX Admin and via [API](https://help.vtex.com/en/tutorial/seller-portal-primeiros-passos-para-o-marketplace--6ccErY3mCcfoW0qGXf167#actions-through-rest-apis). First, the VTEX marketplace requests the Customer Success Manager (CSM) for access to the Seller Portal. Then, the marketplace sends an [invitation](https://help.vtex.com/en/tutorial/marketplace-convite-de-sellers-beta--6rb2FkcslmDueJ689Ulb9A) to the seller. After the invite has been accepted, the marketplace [activates](https://help.vtex.com/en/tutorial/marketplace-convite-de-sellers-beta--6rb2FkcslmDueJ689Ulb9A) the seller. | A contract must be signed between VTEX and the client. After the contract has been approved internally, a new environment is created for the client on the VTEX platform. | The client contacts the [support](https://help.vtex.com/en/support) team to [request a franchise account](https://help.vtex.com/en/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl#request-the-creation-of-a-franchise-account). To do that, it is required to have the email address of the [Sponsor user](https://help.vtex.com/en/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA) (Admin Master). |
| [Sponsor user](https://help.vtex.com/en/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA) (Admin Master) | There is only one Sponsor user. The invitation to the Seller Portal is sent by default to the email address of the Sponsor user, but this email can be changed. Only the Sponsor user can [create appKeys and appTokens](https://developers.vtex.com/vtex-rest-api/docs/getting-started-authentication). | There can be just one Sponsor user, access granted by default to the email of the person who signed the contract with VTEX. The Sponsor user can be changed and is the only one who can create appKeys and appTokens. | There can be just one Sponsor user and it is by default the same as the main account user. The Sponsor user can be changed and is the only one who can create appKeys and appTokens. |
| Managing user [access with roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) | Yes. | Yes. | Yes. |

## Catalog

| **Aspect** | **Seller Portal** | **Standard account** | **Franchise account** |
|---------- | ---------- | ---------- | ---------- |
| Inheriting the catalog | The Seller Portal allows the VTEX marketplace to define a product assortment to be [shared](https://help.vtex.com/en/tutorial/seller-portal-produtos-compartilhados--6vUGj2UmOuLzQTK9pj04lu) with the seller. The seller will then configure the product price and inventory. Sellers can manage these products on the **Shared Products** page in the Seller Portal. Sellers cannot modify the VTEX marketplace catalog and cannot sell products shared with other marketplaces. | Standard accounts do not inherit a catalog because they are responsible for creating and managing their own product assortment. All the features of the **Catalog** module are available for standard accounts. | Franchise accounts inherits the catalog of the main account and does not have the **Catalog** module available. Any changes in the catalog must be performed in the main account. |
| Creating a product | The Seller Portal allows sellers to create their own products. To do this, they must be [invited](https://help.vtex.com/en/tutorial/marketplace-convite-de-sellers-beta--6rb2FkcslmDueJ689Ulb9A) to the Seller Portal as a standard seller, not a [white label seller](https://help.vtex.com/en/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa). The products created by sellers need to be approved and [cataloged](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus--tutorials_396) by the VTEX marketplace. | Standard accounts can create products and use all the features of the **Catalog** module. | Franchise accounts cannot create products and do not have the **Catalog** module available. |
| Adapting product listings according to the VTEX marketplace criteria | Sellers can adjust their product listings according to the VTEX marketplace specifications. Moreover, the marketplace can [share products](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus--tutorials_396) with sellers, which means sellers can import product configurations. | Standard accounts can adjust their product listings according to the VTEX marketplace specifications. Besides, VTEX marketplaces can make adjustments to adapt  the seller's products to their catalog. | Franchise accounts do not have their own catalog, therefore cannot configure product classifications. |
| Associating products in a VTEX marketplace | VTEX marketplaces can associate existing products of their catalog with products sent by other sellers. | VTEX marketplaces can associate products sent by a standard seller with products sent by other sellers. | Not applicable to franchise accounts because they don't have their own catalog. |
| Overwriting an image | Yes, it is possible. | Yes, it is possible. | Not applicable to franchise accounts because they don't have their own catalog. |
| [Trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) | A single trade policy is allowed. | [Multiple trade policies](https://help.vtex.com/en/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X) are allowed. | A single trade policy is allowed. |
| [Kit](https://help.vtex.com/en/tutorial/cadastrando-kit--tutorials_215) feature | Kit feature cannot be used. | Kit feature can be used. |  Kit feature can be used. When stock is resupplied for a product included in a kit of the main account, the product will automatically be considered available in the franchise account, even if it wasn't supposed to be sold through the franchise account. |
| [Adding an attachment](https://help.vtex.com/en/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU) | Attachments cannot be added. | Attachments can be added. | Attachments can be added in the main account and will be reflected in franchise accounts. |

## Prices

| **Aspect** | **Seller Portal** | **Standard account** | **Franchise account** |
|---------- | ---------- | ---------- | ---------- |
| Inheriting prices from  another account | When the VTEX marketplace [invites](https://help.vtex.com/en/tutorial/marketplace-convite-de-sellers-beta--6rb2FkcslmDueJ689Ulb9A) a seller to the Seller Portal selecting the [White Label Seller](https://help.vtex.com/en/tutorial/white-label-seller--5orlGHyDHGAYciQ64oEgKa) option, the seller products inherit the marketplace prices. However, the seller can edit those prices. | Standard accounts do not inherit prices from another account. Prices must be added in the standard account environment. | Franchise accounts can inherit prices from the main account. |
| VTEX marketplaces can overwrite seller prices | When the seller created via invitation is a regular seller, its price can be overwritten, but not if it is a white label seller. | Yes. | No. The VTEX marketplace can only set trade rules for franchise accounts. |
| Possibility of using [Manual Pricing](https://help.vtex.com/en/tutorial/funcionalidades-de-televendas--UqhiccIRIK2KD0OqkzJaS#manual-pricing) | Yes. | Yes. | Yes. |

## Promotions

| **Aspect** | **Seller Portal** | **Standard account** | **Franchise account** |
|---------- | ---------- | ---------- | ---------- |
| Sellers can create [promotions](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N) | The seller creates and configures promotions directly in the Seller Portal. For more details about the creation process, refer to the document [Seller Portal: Create a promotion](https://help.vtex.com/en/tutorial/seller-portal-creating-a-promotion--kzNPEaiJE8EWkDzO9dbBI). | Can create and configure promotions, and run promotion simulations. | Can create and configure promotions, and run promotion simulations. |
| Determining the channel for promotions | Sellers create promotions. | Yes. | Yes. |
| The VTEX marketplace can create promotions for sellers’ products | Yes. | Yes. | Yes. |

## Payments

| **Aspect** | **Seller Portal** | **Standard account** | **Franchise account** |
|---------- | ---------- | ---------- | ---------- |
| Reflecting all [payment](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/7pAEMAo4iqNHwYOarZ3zgm) methods in the VTEX Marketplace | Yes. | Yes. | Yes. |
| Configuring payments so that orders with products sold by more than one seller make available only payment methods common to all sellers (lowest common multiple) | Yes. | Yes. | Yes. |
| The seller handles the payment transaction | Yes. | Yes. | Yes. |
| Gift card provider available | No. | Yes. | Yes. |
| Accepting [private-label store card payments](https://help.vtex.com/en/tutorial/setting-up-private-label-payments--428FgVdSGQUeAOoogkaIw4) | No. | Yes. | Yes, but only if all the order products belong to the franchise account. If the order is fulfilled by different sellers ([order split](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx)), paying with private-label cards is not acceptable |
| Possibility of using the  [Subscriptions](https://help.vtex.com/en/tutorial/como-gerenciar-assinaturas--6Jk50FPbv6iuz1OsFypv8x) module | No. | Yes. | Yes. |
| Using the VTEX [GiftCard](https://help.vtex.com/en/tutorial/gift-card--tutorials_995) | Yes. The [GiftCard](https://help.vtex.com/en/tutorial/gift-card--tutorials_995) must be configured in the VTEX marketplace account. The payment option must be enabled in [**Seller Management**](https://help.vtex.com/en/tutorial/adicionar-seller--tutorials_392) for the seller to accept the voucher. | Yes. The GiftCard must be configured in the VTEX marketplace account. The payment option must be enabled in **Seller Management** for the seller to accept the voucher. | Yes. The GiftCard must be configured in the main account. The payment option must be enabled in **Seller Management** for the seller to accept the voucher. |

## Logistics

| **Aspect** | **Seller Portal** | **Standard account** | **Franchise account** |
| ---------- | ---------- | ---------- | ---------- |
| Segmenting [shipping strategies](https://help.vtex.com/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) for different marketplaces | No. The seller uses a single VTEX marketplace. | Yes. | No. Only available for the main account. |
| Platform provided with native safety stock | No. | No. | No. |
| Delivery capacity for [scheduled delivery](https://help.vtex.com/en/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi) | Yes. | Yes. | Yes. |
| Configuring [pickup points](https://help.vtex.com/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) | Yes. | Yes. | Yes. |
| [Geolocation](https://help.vtex.com/en/tutorial/gerenciar-geolocalizacao--tutorials_138) | Yes. | Yes. | Yes. |
| Prioritizing a seller to fulfil the order | No. | No. | No. |

## Master Data

| **Aspect** | **Seller Portal** | **Standard account** | **Franchise account** |
| ---------- | ---------- | ---------- | ---------- |
| Sellers can access customer data when selling on the VTEX marketplace | Sellers do not have access to customer email or data. The information exchange takes place between the customer and the VTEX marketplace. | When the standard account sells in its own environment, it works both as a seller and a marketplace, therefore can access the customer data. A VTEX seller operating in a different VTEX marketplace does not have access to customer data. | Franchise accounts do not have access to customer email or data. |

## CMS/IO/Fast Store

| **Aspect** | **Seller Portal** | **Standard account** | **Franchise account** |
| ---------- | ---------- | ---------- | ---------- |
| Possibility of having storefront | No. | Yes. | No. |

## Intelligent Search

| **Aspect** | **Seller Portal** | **Standard account** | **Franchise account** |
|---------- | ---------- | ---------- | ---------- |
| Ranking search results in the VTEX marketplace using [Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) so that it displays 1P (first-party) results before 3P (third party) results. | No. | No. | No. |

## Seller

| **Aspect** | **Seller Portal** | **Standard account** | **Franchise account** |
|---------- | ---------- | ---------- | ---------- |
| Connecting a seller to a VTEX marketplace | The seller receives an [invite](https://help.vtex.com/en/tutorial/marketplace-convite-de-sellers-beta--6rb2FkcslmDueJ689Ulb9A) sent by the VTEX marketplace. | The VTEX marketplace connects to a VTEX seller by [adding](https://help.vtex.com/en/tutorial/adicionar-seller--tutorials_392) it in **Seller Management**. | A franchise account is automatically created as a seller of the main account. |
| VTEX marketplaces can edit seller information in **Seller Management** | Yes. | Yes. | Yes. |
| VTEX marketplaces can add a seller commission in **Seller Management** | Yes. | Yes. | Yes. |
| Linking SKUs from a seller to the ones from the VTEX marketplace | Yes. | Yes. | Yes. |
|  VTEX marketplace can integrate products received by sellers on the [**Received SKUs**](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus--tutorials_396) page | Products created by a seller must be manually cataloged on the **Received SKUs** page. When a VTEX marketplace [shares products](https://help.vtex.com/en/tutorial/seller-portal-produtos-compartilhados--6vUGj2UmOuLzQTK9pj04lu) with a seller, [VTEX matcher](https://help.vtex.com/en/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424) automatically approves them, and they can be seen in **Received SKUs**. | Yes. The VTEX Matcher feature analyzes the SKUs sent by sellers and accelerates the [cataloging process](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus--tutorials_396). | No, because the catalog is inherited from the main account. |
| [Mapping categories, brands and specifications](https://help.vtex.com/en/tutorial/mapeando-categorias-e-marcas-para-marketplace--tutorials_1521) in the VTEX marketplace | A product must be mapped when it is created by a seller. [Shared products](https://help.vtex.com/en/tutorial/seller-portal-produtos-compartilhados--6vUGj2UmOuLzQTK9pj04lu) do not need mapping. | Yes. | No, because the catalog is inherited from the main account. |

## Marketplace

| **Aspect** | **Seller Portal** | **Standard account** | **Franchise account** |
|---------- | ---------- | ---------- | ---------- |
| Integrating with an [external marketplace](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-an-external-marketplace) | No. | Yes. | A franchise account cannot integrate with an external marketplace. However, franchise accounts can sell in external marketplaces using the [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature. |
| Integrating with multiple VTEX marketplaces | Each Seller Portal environment is connected to a single VTEX marketplace. | Yes. | Franchise accounts selling on the VTEX marketplace of the main account cannot integrate with other marketplaces. However, they can sell products on VTEX marketplaces that use the [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature. |

## ERP

| **Aspect** | **Seller Portal** | **Standard account** | **Franchise account** |
|---------- | ---------- | ---------- | ---------- |
| [Integrating with market ERPs](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) | A Seller Portal environment can integrate with [ERPs](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) only via [APIs](https://developers.vtex.com/vtex-rest-api/reference/marketplace-api-overview). The integration allows configuring price, inventory and orders. Products must be manually created in the Seller Portal or shared with the VTEX marketplace. | Yes. | Yes. |
