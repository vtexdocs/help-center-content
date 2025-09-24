---
title: 'Agentes oficiales de Weni by VTEX'
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
legacySlug: agentes-oficiales-de-weni-by-vtex
locale: es
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
---

Este artículo describe los agentes colaboradores oficiales de Weni by VTEX y las credenciales necesarias para asignarlos a Agent Builder.

| Agentes oficiales | Descripción | Credenciales necesarias |
| :-------------: | :------------- | :------------- |
| Order Status (Pick and Pack) | Proporciona detalles sobre pedidos procesados por [VTEX Pick and Pack](/es/tutorial/vtex-pick-and-pack--1OOops3WrUyz7e0bnhkfXU), como información de pago y seguimiento. | -- |
| Reverse Agent (Aftersale) | Proporciona información sobre cambios y devoluciones a partir del número de pedido. | `Token Aftersale API`: token de la API de Aftersale. |
| Order Cancellation (VTEX) | Dedicado exclusivamente a la cancelación de pedidos. Al agregarlo, se activa la opción de cancelación de pedidos, mientras que al eliminarlo se desactiva.  | -- |
| Utility Agent | Proporciona diferentes datos con base en conversaciones con clientes, como pronóstico del clima, conversión de monedas e identificación de la dirección utilizando el código postal.  | -- |
| Exchange Order Status (Troquecommerce) | Consulta el status de cambios y devoluciones de pedidos en Troquecommerce utilizando el documento de identidad, nro. de registro de persona jurídica o email del cliente. | `Subdomain (Troquecommerce)`: tu cuenta en Troquecommerce. `Token Troquecommerce`: tu token en Troquecommerce. |
| Tracking Agent (Correios de Brasil) | Devuelve información sobre seguimiento a partir del código de seguimiento de Correios (Brasil). | `Correios API Token`: token de la API de Correios. |
| Feedback Recorder | Recopila feedback al final de las conversaciones con clientes. | -- |
| Product Concierge (sin catálogo) | Ofrece recomendaciones personalizadas a los clientes basándose en sus necesidades y preferencias. | `BASE_URL`: URL de tu cuenta VTEX. `LOCALE`: región del dominio. Es un código que indica el idioma y la región, como `es-MX` o `en-US`. `STORE_URL`: URL de tu tienda. |
| Payment Agent (sin catálogo) | Genera un carrito para que el cliente pague de acuerdo con los productos de los pedidos. | `Base URL`: URL de tu cuenta VTEX. `Store URL`: URL de tu tienda. |
| Monitoring Agent | Se activa cuando identificas que no puede responder una pregunta por falta de información, porque está fuera del alcance del conocimiento o porque no sabe el agente que debe usarse. | -- |
| Product Concierge (Synerise) | Ayuda a los usuarios a encontrar productos por nombre, marca u otras características (como categoría y color) y devuelve precios, links e imágenes. | `Synerise API Key`: clave de la API de Synerise. `Synerise Index`: índice de Synerise.|
| Orders Agent Commerce IO | Proporciona detalles de pedidos, como información sobre pago y seguimiento. Este agente no realiza cancelaciones. | -- |
| Order Status (Cademeupedido) | Proporciona detalles de pedidos, como información sobre pago y seguimiento. | `CadeMeuPedido Base URL`: URL de tu cuenta en Cademeupedido (Brasil). `CadeMeuPedido subdomain`: tu subdominio en Cademeupedido (Brasil). |
| Product Concierge With Regionalization | Ofrece recomendaciones personalizadas con base en la región, necesidades y preferencias de los clientes. | `Base URL`: URL de tu cuenta VTEX. `Store URL`: URL de tu tienda. |
| Order Status (VTEX) | Proporciona detalles sobre pedidos, como información sobre pago y seguimiento. Este agente no realiza cancelaciones. | `VTEX Base URL`: URL de tu cuenta VTEX. `VTEX API App Key`: clave de la [API de VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). `VTEX API App Token`: token de la [API de VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys).|
