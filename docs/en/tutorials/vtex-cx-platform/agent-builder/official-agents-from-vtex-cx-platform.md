---
title: "Official agents from VTEX CX Platform"
id: 7E8wlD3T41CiOexDVH1SIy
status: PUBLISHED
createdAt: 2025-07-18T17:25:54.700Z
updatedAt: 2026-06-12T00:00:00.000Z
publishedAt: 2025-09-12T12:59:45.816Z
firstPublishedAt: 2025-07-29T16:33:54.447Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: official-agents-from-vtex-cx-platform
legacySlug: agentes-oficiais-da-weni-by-vtex
locale: en
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
---

This article presents the official VTEX CX Platform agents and the credentials required to assign them to a team in Agent Builder. For more information on how to configure the agents in your store, see [Assigning and testing agents](https://help.vtex.com/docs/tutorials/assigning-and-testing-agents-in-agent-builder).

Official agent templates:

- [Feedback Recorder](#feedback-recorder)
- [Find Pickup Points](#find-pickup-points)
- [Monitoring Agent](#monitoring-agent)
- [Order Cancellation](#order-cancellation)
- [Order Status](#order-status)
- [Organizations Agent](#organizations-agent)
- [Payment Agent](#payment-agent)
- [Product Concierge](#product-concierge)
- [Promotions Agent](#promotions-agent)
- [Return and Exchange](#return-and-exchange)
- [User Manager](#user-manager)
- [Utility Agent](#utility-agent)

## Feedback Recorder

| System | MCP (Model Context Protocol) | Description | Required credentials |
| :---: | :--- | :--- | :---: |
| -- | CSAT (Customer Satisfaction Score) | Prompts customers to rate their satisfaction with the company, product, or service on a scale of 1 to 5. | -- |
| -- | NPS (Net Promoter Score) | Asks customers, on a scale of 0 to 10, how likely they are to recommend the company, product, or service. | -- |

## Find Pickup Points

| System | MCP (Model Context Protocol) | Description | Required credentials |
| :---: | :--- | :--- | :--- |
| VTEX | VTEX Pickup Points | Allows customers to find nearby stores and pickup points using a postal code. | `VTEX Account`: Your VTEX account name. |

## Monitoring Agent

| System | MCP (Model Context Protocol) | Description | Required credentials |
| :---: | :--- | :--- | :---: |
| -- | -- | Logs unanswered questions or out-of-scope questions and generates data for reports in the [**Analytics**](https://help.vtex.com/pt/docs/tutorials/analytics). | -- |

## Order Cancellation

| System | MCP (Model Context Protocol) | Description | Required credentials |
| :---: | :--- | :--- | :--- |
| VTEX | order_cancellation_vtex | Allows customers to cancel orders directly via chat. | `VTEX Base URL`: Your VTEX account URL. <br> `VTEX App Key`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) key. <br> `VTEX App Token`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) token. <br> `Weni API Token`: [Weni](https://help.vtex.com/pt/docs/tutorials/configuracoes-gerais-do-projeto#token-de-acesso-da-organizacao) token |

## Order Status

| System | MCP (Model Context Protocol) | Description | Required credentials |
| :---: | :--- | :--- | :--- |
| [Intelipost](https://secure.intelipost.com.br/login/) | Order Status (Intelipost) | Queries Intelipost to provide status, tracking, and other relevant order information. | `API Key Intelipost`: Your Intelipost API key. <br> `VTEX Base URL`: Your VTEX account URL. <br> `VTEX App Key`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) key. <br> `VTEX App Token`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) token. |
| [Cadê Meu Pedido](https://www.cademeupedido.com.br/login) | Cadê Meu Pedido | Queries Cadê Meu Pedido to provide order details, such as billing and tracking. | `CadeMeuPedido Base URL`: Your Cadê Meu Pedido account URL. <br> `CadeMeuPedido Subdomain`: Your Cadê Meu Pedido account subdomain. |
| VTEX | Orders Agent - VTEX B2B | Queries B2B order status and details in VTEX. Allows access only to authenticated users with permission to view orders and must be used with the Organizations Agent for authentication. | `VTEX Account Name`: Your VTEX account name. <br> `VTEX App Key`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) key. <br> `VTEX App Token`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) token. |
| VTEX | Pick and Pack | Queries VTEX Pick and Pack data to answer customer questions about orders. | `API Key Pick and Pack`: Your [Pick and Pack](https://help.vtex.com/pt/docs/tutorials/vtex-pick-and-pack-configuracoes#chave-de-api) API token. <br> `VTEX Base URL`: Your VTEX account URL. <br> `VTEX App Key`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) key. <br> `VTEX App Token`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) token. |
| VTEX | VTEX Default | Queries standard VTEX order information to respond to customers. | `VTEX Account`: Your VTEX account name. <br> `VTEX App Key`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) key. <br> `VTEX App Token`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) token. |

## Organizations Agent

| System | MCP (Model Context Protocol) | Description | Required credentials |
| :---: | :--- | :--- | :--- |
| VTEX | Organizations Agent | Authenticates B2B users, verifies administrator permissions, and assists in selecting organizations for purchases. The agent manages the flow from authentication to session creation. | `VTEX Account`: Your VTEX account name. <br> `VTEX_API_APPKEY`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) key. <br> `VTEX_API_APPTOKEN`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) token. |

## Payment Agent

| System | MCP (Model Context Protocol) | Description | Required credentials |
| :---: | :--- | :--- | :--- |
| VTEX | B2B Checkout | Manages cart and checkout in VTEX B2B stores. Allows adding, updating, and removing items, displaying the cart, generating the checkout link, and processing orders with promissory note payment, based on the authenticated customer permissions and payment methods. Must be used with the Organizations Agent for authentication. | `VTEX Account`: Your VTEX account name. <br> `Checkout URL`: Your store's checkout URL. <br> `VTEX App Key`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) key. <br> `VTEX App Token`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) token. |
| VTEX | Checkout URL | Manages the cart and checkout on VTEX. Allows adding, updating, and removing items, displaying the cart, and generating the checkout link for the customer to complete the purchase in the browser. Also works with carts created before the current conversation. | `VTEX Account`: Your VTEX account name. <br> `Checkout URL`: Your store's checkout URL. |
| VTEX | One-click Payment | Manages the cart, queries delivery and pickup options, and processes payments with a saved credit card on VTEX via OneClickPayment. Securely collects the CVV through WhatsApp Flow. If there's no saved card or the channel isn't WhatsApp, it sends the checkout link for the customer to complete the purchase in the browser. | `VTEX Account`: Your VTEX account name. <br> `VTEX App Key`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) key. <br> `VTEX App Token`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) token. |
| VTEX | Pix & One-click Payment | Allows the customer to pay with a saved credit card or Pix (Brazilian payment method). For credit cards, it completes checkout via OneClickPayment and securely collects the CVV through WhatsApp Flow. For Pix, it sends the payment button with the copy-and-paste code. In Shopping Assistant, it sends the checkout link for payment with a credit card or the Pix code in text. | `VTEX Account Name`: Your VTEX account name. <br> `VTEX App Key`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) key. <br> `VTEX App Token`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) token. |
| VTEX | Pix Payment | Allows the customer to pay with Pix via the copy-and-paste code sent in the chat or with a credit card via the checkout link. For credit cards, the agent can display delivery options, and the customer provides payment details on the checkout page. | `VTEX Account`: Your VTEX account name. <br> `VTEX App Key`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) key. <br> `VTEX App Token`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) token. |

## Product Concierge

| System | MCP (Model Context Protocol) | Description | Required credentials |
| :---: | :--- | :--- | :--- |
| Synerise | Default | Helps customers find products by name, brand, or characteristics, such as category and color. Returns prices, links, and images. | `Synerise API Key`: Synerise API key. <br> `Synerise Index`: Synerise index. |
| VTEX | Agent | Helps customers discover, explore, and choose products from the store catalog. Recommended for questions about products, prices, availability, recommendations, or catalog navigation. | `VTEX Account`: Your VTEX account name. <br> `Store Domain URL`: Your store URL. |
| VTEX | Agent - B2B | Searches for products in B2B stores according to the authenticated user's `segment` and `session` information. Must be used with the Organizations Agent for authentication. | `VTEX Account`: Your VTEX account name. <br> `Store Domain URL`: Your store URL. |
| VTEX | Agent - Regionalized | Searches for products in the catalog regionally, using the customer's location to display availability and prices. The agent requests the location when it isn't available in the store cookies. | `VTEX Account`: Your VTEX account name. <br> `Store Domain URL`: Your store URL. |
| VTEX | Fashion Segment | Searches for fashion segment products using filters and collections to refine results. | `VTEX Account`: Your VTEX account name. <br> `Store Domain URL`: Your store URL. |

## Promotions Agent

| System | MCP (Model Context Protocol) | Description | Required credentials |
| :---: | :--- | :--- | :--- |
| VTEX | Promotions | Queries active public and automatic promotions from the VTEX store. Recommended for questions about promotions, discounts, coupons, free shipping, or special conditions. Returns structured data for the manager to present to the customer. | `VTEX Account`: Your VTEX account name. <br> `VTEX App Key`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) key. <br> `VTEX App Token`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) token. |

## Return and Exchange

| System | MCP (Model Context Protocol) | Description | Required credentials |
| :---: | :--- | :--- | :--- |
| Troquecommerce | Troquecommerce | Queries the status of order returns and exchanges in Troquecommerce based on the customer's CPF, CNPJ, or email. | `Subdomain (Troquecommerce)`: Troquecommerce account. <br> `Token Troquecommerce`: Troquecommerce token. |
| Reversso | Reversso - Returns Agent | Manages product returns and exchanges using the Reversso API. | `Reversso MCP Endpoint URL`: Reversso MCP endpoint URL. |
| Aftersale | Reverse Agent (Aftersale) | Manages product returns and exchanges using the Aftersale API. | `Token Aftersale API`: Aftersale API token. |

## User Manager

| System | MCP (Model Context Protocol) | Description | Required credentials |
| :---: | :--- | :--- | :--- |
| VTEX | VTEX B2B User Manager | Registers, searches, and removes users in VTEX B2B organizations via GraphQL. Requires prior authentication through the Organizations Agent. | `VTEX Account`: Your VTEX account name. <br> `VTEX App Key`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) key. <br> `VTEX App Token`: Your [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) token. |

## Utility Agent

| System | MCP (Model Context Protocol) | Description | Required credentials |
| :---: | :--- | :--- | :---: |
| -- | -- | Provides utility functions for customer conversations, such as currency conversion and weather forecast. | -- |
