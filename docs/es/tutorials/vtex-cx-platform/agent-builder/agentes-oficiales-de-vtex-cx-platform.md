---
title: "Agentes oficiales de VTEX CX Platform"
id: 7E8wlD3T41CiOexDVH1SIy
status: PUBLISHED
createdAt: 2025-07-18T17:25:54.700Z
updatedAt: 2026-06-18T00:00:00.000Z
publishedAt: 2025-09-12T12:59:45.816Z
firstPublishedAt: 2025-07-29T16:33:54.447Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: official-agents-from-vtex-cx-platform
legacySlug: agentes-oficiales-de-weni-by-vtex
locale: es
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
---

Este artículo presenta los agentes oficiales del VTEX CX Platform y las credenciales necesarias para asignarlos a un equipo en Agent Builder. Para obtener más información sobre cómo configurar los agentes en tu tienda, accede a [Asignar y probar agentes](https://help.vtex.com/pt/docs/tutorials/atribuir-e-testar-agentes).

Modelos de agentes oficiales:

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

| Sistema | MCP (Model Context Protocol) | Descripción | Credenciales necesarias |
| :---: | :--- | :--- | :---: |
| -- | CSAT (Customer Satisfaction Score) | Solicita que los clientes evalúen su satisfacción con la empresa, producto o servicio en una escala del 1 al 5. | -- |
| -- | NPS (Net Promoter Score) | Pregunta a los clientes, en una escala del 0 al 10, cuál es la probabilidad de que recomienden la empresa, producto o servicio. | -- |

## Find Pickup Points

| Sistema | MCP (Model Context Protocol) | Descripción | Credenciales necesarias |
| :---: | :--- | :--- | :--- |
| VTEX | VTEX Pickup Points | Permite que los clientes encuentren tiendas y puntos de recogida cercanos usando el código postal. | `VTEX Account`: nombre de tu cuenta VTEX. |

## Monitoring Agent

| Sistema | MCP (Model Context Protocol) | Descripción | Credenciales necesarias |
| :---: | :--- | :--- | :---: |
| -- | -- | Registra preguntas sin respuesta o fuera del alcance del proyecto y genera datos para informes en el módulo [**Analytics**](https://help.vtex.com/pt/docs/tutorials/analytics). | -- |

## Order Cancellation

| Sistema | MCP (Model Context Protocol) | Descripción | Credenciales necesarias |
| :---: | :--- | :--- | :--- |
| VTEX | order_cancellation_vtex | Permite que los clientes cancelen pedidos directamente desde el chat. | `VTEX Base URL`: URL de tu cuenta VTEX. <br> `VTEX App Key`: clave de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `Weni API Token`: token de [Weni](https://help.vtex.com/pt/docs/tutorials/configuracoes-gerais-do-projeto#token-de-acesso-da-organizacao). |

## Order Status

| Sistema | MCP (Model Context Protocol) | Descripción | Credenciales necesarias |
| :---: | :--- | :--- | :--- |
| [Intelipost](https://secure.intelipost.com.br/login/) | Order Status (Intelipost) | Consulta Intelipost para informar el status, rastreo y otros datos relevantes sobre el pedido del cliente. | `API Key Intelipost`: clave de la API Intelipost. <br> `VTEX Base URL`: URL de tu cuenta VTEX. <br> `VTEX App Key`: clave de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |
| [Cadê Meu Pedido](https://www.cademeupedido.com.br/login) | Cadê Meu Pedido | Consulta Cadê Meu Pedido para informar detalles del pedido, como facturación y rastreo. | `CadeMeuPedido Base URL`: URL de tu cuenta en Cadê Meu Pedido. <br> `CadeMeuPedido Subdomain`: subdominio de tu cuenta en Cadê Meu Pedido. |
| VTEX | Orders Agent - VTEX B2B | Consulta el status y los detalles de pedidos B2B en VTEX. Permite el acceso solo a usuarios autenticados con permiso para visualizar pedidos y debe usarse con el Organizations Agent para la autenticación. | `VTEX Account Name`: nombre de tu cuenta VTEX. <br> `VTEX App Key`: clave de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |
| VTEX | Pick and Pack | Consulta datos de VTEX Pick and Pack para responder preguntas del cliente sobre pedidos. | `API Key Pick and Pack`: token de la API de [Pick and Pack](https://help.vtex.com/pt/docs/tutorials/vtex-pick-and-pack-configuracoes#chave-de-api). <br> `VTEX Base URL`: URL de tu cuenta VTEX. <br> `VTEX App Key`: clave de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |
| VTEX | VTEX Default | Consulta información estándar sobre pedidos de VTEX para responder a los clientes. | `VTEX Account`: nombre de tu cuenta VTEX. <br> `VTEX App Key`: clave de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |

## Organizations Agent

| Sistema | MCP (Model Context Protocol) | Descripción | Credenciales necesarias |
| :---: | :--- | :--- | :--- |
| VTEX | Organizations Agent | Autentica usuarios B2B, verifica permisos de administrador y ayuda en la selección de organizaciones para compras. El agente gestiona el flujo desde la autenticación hasta la creación de la sesión. | `VTEX Account`: nombre de tu cuenta VTEX. <br> `VTEX_API_APPKEY`: clave de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX_API_APPTOKEN`: token de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |

## Payment Agent

| Sistema | MCP (Model Context Protocol) | Descripción | Credenciales necesarias |
| :---: | :--- | :--- | :--- |
| VTEX | B2B Checkout | Gestiona el carrito y el checkout en tiendas B2B en VTEX. Permite agregar, actualizar y eliminar ítems, mostrar el carrito, generar el enlace de checkout y procesar pedidos con pago por pagaré de acuerdo con los permisos y los métodos de pago del cliente autenticado. Debe usarse con el Organizations Agent para la autenticación. | `VTEX Account`: nombre de tu cuenta VTEX. <br> `Checkout URL`: URL del checkout en tu tienda. <br> `VTEX App Key`: clave de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |
| VTEX | Checkout URL | Gestiona el carrito y el checkout en VTEX. Permite agregar, actualizar y eliminar ítems, mostrar el carrito y generar el enlace de checkout para que el cliente complete la compra en el navegador. También funciona con carritos creados antes de la conversación actual. | `VTEX Account`: nombre de tu cuenta VTEX. <br> `Checkout URL`: URL del checkout en tu tienda. |
| VTEX | One-click Payment | Gestiona el carrito, consulta opciones de entrega y recogida, y procesa pagos con tarjeta de crédito guardada en VTEX a través de OneClickPayment. Recopila el CVV de forma segura mediante WhatsApp Flow. Si no hay una tarjeta guardada o el canal no es WhatsApp, envía el enlace de checkout para que el cliente complete la compra en el navegador. | `VTEX Account`: nombre de tu cuenta VTEX. <br> `Checkout URL`: URL del checkout en tu tienda. <br> `VTEX App Key`: clave de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `WhatsApp CVV Flow ID`: identificador de tu formulario WhatsApp Flows. |
| VTEX | Pix & One-click Payment | Permite que el cliente pague con tarjeta de crédito guardada o Pix. Para tarjeta de crédito, completa el checkout a través de OneClickPayment y recopila el CVV de forma segura mediante WhatsApp Flow. Para Pix, envía el botón de pago con el código para copiar y pegar. En el webchat, envía el enlace de checkout para tarjeta de crédito y el código Pix en texto. | `VTEX Account`: nombre de tu cuenta VTEX. <br> `Checkout URL`: URL del checkout en tu tienda. <br> `VTEX App Key`: clave de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `WhatsApp CVV Flow ID`: identificador de tu formulario WhatsApp Flows. |
| VTEX | Pix Payment | Permite que el cliente pague con Pix mediante el código para copiar y pegar enviado en el chat o con tarjeta de crédito a través del enlace de checkout. Para tarjeta de crédito, el agente puede mostrar opciones de entrega, y el cliente ingresa los datos de pago en la página de finalización de la compra. | `VTEX Account (account name ou URL)`: nombre de tu cuenta VTEX. <br> `Checkout URL`: URL del checkout en tu tienda. <br> `Store URL`: URL de tu tienda. <br> `VTEX App Key`: clave de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |

## Product Concierge

| Sistema | MCP (Model Context Protocol) | Descripción | Credenciales necesarias |
| :---: | :--- | :--- | :--- |
| Synerise | Default | Ayuda a los clientes a encontrar productos por nombre, marca o características, como categoría y color. Devuelve precios, enlaces e imágenes. | `Synerise API Key`: clave de la API de Synerise. <br> `Synerise Index`: índice de Synerise. |
| VTEX | Agent | Ayuda a los clientes a descubrir, explorar y elegir productos del catálogo de la tienda. Se recomienda para preguntas sobre productos, precios, disponibilidad, recomendaciones o navegación en el catálogo. | `VTEX Account`: nombre de tu cuenta VTEX. <br> `Store Domain URL`: URL de tu tienda. |
| VTEX | Agent - B2B | Busca productos en tiendas B2B de acuerdo con la información de `segment` y `session` del usuario autenticado. Debe usarse con el Organizations Agent para la autenticación. | `VTEX Account`: nombre de tu cuenta VTEX. <br> `Store Domain URL`: URL de tu tienda. |
| VTEX | Agent - Regionalized | Busca productos en el catálogo de forma regionalizada, utilizando la ubicación del cliente para mostrar la disponibilidad y el precio. El agente solicita la ubicación cuando no está disponible en las cookies de la tienda. | `VTEX Account`: nombre de tu cuenta VTEX. <br> `Store Domain URL`: URL de tu tienda. |
| VTEX | Fashion Segment | Busca productos del segmento de moda usando filtros y colecciones para refinar los resultados. | `VTEX Account`: nombre de tu cuenta VTEX. <br> `Store Domain URL`: URL de tu tienda. |

## Promotions Agent

| Sistema | MCP (Model Context Protocol) | Descripción | Credenciales necesarias |
| :---: | :--- | :--- | :--- |
| VTEX | Promotions | Consulta promociones públicas y automáticas activas de la tienda VTEX. Se recomienda para preguntas sobre promociones, descuentos, cupones, envío gratuito o condiciones especiales. Devuelve datos estructurados para que el manager los presente al cliente. | `VTEX Account`: nombre de tu cuenta VTEX. <br> `VTEX App Key`: clave de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |

## Return and Exchange

| Sistema | MCP (Model Context Protocol) | Descripción | Credenciales necesarias |
| :---: | :--- | :--- | :--- |
| Troquecommerce | Troquecommerce | Consulta el status de cambios y devoluciones de pedidos en Troquecommerce a partir del CPF, CNPJ o correo electrónico del cliente. | `Subdomain (Troquecommerce)`: cuenta en Troquecommerce. <br> `Token Troquecommerce`: token en Troquecommerce. |
| Reversso | Reversso - Returns Agent | Gestiona devoluciones y cambios de productos usando la API de Reversso. | `Reversso MCP Endpoint URL`: URL del endpoint MCP Reversso. |
| Aftersale | Reverse Agent (Aftersale) | Gestiona devoluciones y cambios de productos usando la API de Aftersale. | `Token Aftersale API`: token de la API Aftersale. |

## User Manager

| Sistema | MCP (Model Context Protocol) | Descripción | Credenciales necesarias |
| :---: | :--- | :--- | :--- |
| VTEX | VTEX B2B User Manager | Registra, busca y elimina usuarios en organizaciones VTEX B2B a través de GraphQL. Requiere autenticación previa mediante el Organizations Agent. | `VTEX Account`: nombre de tu cuenta VTEX. <br> `VTEX App Key`: clave de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token de la [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |

## Utility Agent

| Sistema | MCP (Model Context Protocol) | Descripción | Credenciales necesarias |
| :---: | :--- | :--- | :---: |
| -- | -- | Proporciona funciones de utilidad para conversaciones con clientes, como conversión de moneda y pronóstico del tiempo. | -- |