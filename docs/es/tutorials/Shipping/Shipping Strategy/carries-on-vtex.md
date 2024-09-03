---
title: 'Transportadoras en VTEX'
id: 7u9duMD5UQa2QQwukAWMcE
status: PUBLISHED
createdAt: 2019-01-24T20:45:39.775Z
updatedAt: 2023-07-31T22:14:54.618Z
publishedAt: 2023-07-31T22:14:54.618Z
firstPublishedAt: 2019-01-24T22:14:26.579Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: transportadoras-en-vtex
locale: es
legacySlug: que-es-una-transportadora
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Las transportadoras son empresas que realizan entregas de carga y paquetes. En el contexto del ecommerce, las transportadoras entregan los pedidos a los clientes. Cada transportadora tiene su propio perfil de operación, y los administradores de tiendas deben tenerlos en cuenta a la hora de configurar la logística de sus entregas.

El administrador de la tienda registra a las transportadoras en VTEX según sus condiciones de envío: tipos de entrega, plazos, precios, lugar de la operación, dimensiones aceptadas, tipos de producto y entrega programada. Con las condiciones de envío configuradas, la plataforma selecciona las mejores opciones de entrega para el cliente. 

En VTEX, el registro de las transportadoras se realiza a través de la creación de [políticas de envío](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140). Hay dos maneras de hacerlo:

* En el Admin VTEX: utilizando la sección **[Políticas de envío](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140)** de la página **[Estrategia de envío](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)**. 
* Mediante API: utilizando la API de [Shipping Policies](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies).

    En ambos casos, se utilizan las configuraciones definidas en la [Política de envío](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140), que se basa en el contrato que tu tienda tiene con una transportadora, un prestador de servicios o cualquier otro tipo de contrato de servicio de envío que tu tienda ofrezca a los clientes.

Hay casos en los que es necesario registrar más de una política de envío para la misma transportadora, por ejemplo:

* La transportadora ofrece diferentes [tipos de entrega](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega--tutorials_126) en un lugar.
* La transportadora ofrece los servicios de [entrega programada](https://help.vtex.com/pt/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi) y entrega no programada.
* La tarifa varía según el tipo de producto.

### Artículos relacionados
- [Estrategia de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)
- [Política de envio](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140)
