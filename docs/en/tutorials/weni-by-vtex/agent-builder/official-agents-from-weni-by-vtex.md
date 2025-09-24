---
title: 'Official agents from Weni by VTEX'
id: 7E8wlD3T41CiOexDVH1SIy
status: PUBLISHED
createdAt: 2025-07-18T17:25:54.700Z
updatedAt: 2025-09-12T12:59:45.816Z
publishedAt: 2025-09-12T12:59:45.816Z
firstPublishedAt: 2025-07-29T16:33:54.447Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: official-agents-from-weni-by-vtex
legacySlug: weni-by-vtexs-official-agents
locale: en
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
---

This article describes the official collaborator agents from Weni by VTEX and provides the credentials required to assign them to the Agent Builder.

| Official agents | Description | Required credentials |
| :-------------: | :------------- | :------------- |
| Order Status (Pick and Pack) | Provides details about orders processed by [VTEX Pick and Pack](/en/tutorial/vtex-pick-and-pack--1OOops3WrUyz7e0bnhkfXU), such as payment and tracking information. | -- |
| Reverse Agent (Aftersale) | Returns information about exchanges and returns based on the order number. | `Token Aftersale API`: Aftersale API token. |
| Order Cancellation (VTEX) | Exclusively enables order cancellation. Order cancellation is enabled when this agent is added and disabled when removed.  | -- |
| Utility Agent | Provides various information based on conversations with customers, such as weather forecast, currency conversion, and address lookup from the postal code.  | -- |
| Exchange Order Status (Troquecommerce) | Retrieves the status of order exchanges and returns in Troquecommerce using the customer's document, company registration number, or email. | `Subdomain (Troquecommerce)`: Your Troquecommerce account. `Token Troquecommerce`: Your Troquecommerce token. |
| Tracking Agent (Correios from Brazil) | Returns tracking information using the Correios tracking code. | `Correios API Token`: Correios API token. |
| Feedback Recorder | Collects customer feedback at the end of conversations. | -- |
| Product Concierge (No Catalog) | Provides custom recommendations to customers based on their needs and preferences. | `BASE_URL`: Your VTEX account URL. `LOCALE`: The domain's locale. It's a code indicating the language and locale, such as `pt-BR` or `en-US`. `STORE_URL`: Your store URL. |
| Payment Agent (without catalog) | Generates a cart for the customer to pay based on the products in their order. | `Base URL`: Your VTEX account URL. `Store URL`: Your store URL. |
| Monitoring Agent | Triggered when you can't answer a question due to a lack of information, when it's out of scope, or when you're unsure which agent should be used. | -- |
| Product Concierge (Synerise) | Helps users find products by name, brand, or other characteristics (such as category and color), returning prices, links, and images. | `Synerise API Key`: Synerise API key. `Synerise Index`: Synerise index.|
| Orders Agent Commerce IO | Provides order details, such as payment and tracking information. This agent doesn't handle cancellations. | -- |
| Order Status (Cademeupedido) (Brazil) | Provides order details, such as payment and tracking information. | `CadeMeuPedido Base URL`: Your Cademeupedido account URL. `CadeMeuPedido Subdomain`: Your Cademeupedido subdomain. |
| Product Concierge With Regionalization | Provides custom recommendations based on the customer's location, needs, and preferences. | `Base URL`: Your VTEX account URL. `Store URL`: Your store URL. |
| Order Status (VTEX) | Provides order details, such as payment and tracking information. This agent doesn't handle cancellations. | `VTEX Base URL`: Your VTEX account URL. `VTEX API App Key`: [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) key. `VTEX API App Token`: [VTEX API](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) token.|
