---
title: 'Delivery Promise (beta)'
id: p9EJH9GgxL0JceA6dBswd
status: PUBLISHED
createdAt: 2024-08-22T15:58:58.240Z
updatedAt: 2025-11-04T20:48:04.877Z
publishedAt: 2025-11-04T20:48:04.877Z
firstPublishedAt: 2024-08-22T18:57:59.895Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: delivery-promise-beta
legacySlug: delivery-promise-beta
locale: es
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

> ℹ️ Esta funcionalidad se encuentra en fase beta, lo que significa que estamos trabajando para optimizarla. Si tienes dudas, ponte en contacto con [nuestro Soporte](https://help.vtex.com/es/support).

**Delivery Promise (beta)** es la nueva solución de VTEX para que el comprador, durante la experiencia de compra en tu tienda, vea solo los productos que puede adquirir, considerando tanto la disponibilidad de los productos en stock como las formas de envío válidas para la dirección de entrega.

Con **Delivery Promise (beta)**, tu tienda puede hacer una “promesa de entrega” al comprador para todos los productos que ve y permite filtrar los productos mostrados.

## Recursos disponibles

Cuando el comprador proporciona su dirección, se muestra una selección inicial solo con los productos que pueden entregarse en esa ubicación o recogerse en puntos de recogida elegibles dentro de un [radio configurado](https://help.vtex.com/es/docs/tutorials/registro-de-puntos-de-recogida) o [hasta el límite predeterminado de 50 km de distancia de la ubicación](https://help.vtex.com/es/docs/tutorials/puntos-de-recogida).

Además de poder comprar todos los productos que se le muestran, el comprador puede filtrar los productos en la vitrina para ver solo los resultados que cumplan determinados criterios. Esto permite al comprador una experiencia de navegación personalizada de acuerdo con sus propios objetivos:

* Productos disponibles para el código postal deseado.  
* Forma de envío más rápida para recibir el pedido.  
* [Punto de recogida](https://help.vtex.com/es/docs/tutorials/puntos-de-recogida) donde el cliente desea retirar el pedido.

La experiencia de [filtros](#filtros) por código postal, forma de envío, plazo, punto de recogida y de los componentes de [tags y badges](https://docs.google.com/document/d/1YsqrFnTEWt7sAs3NB5EufdjjuWxOfO9VUKGXKwb5pr4/edit?pli=1&tab=t.0#heading=h.bghz8otc5ioi) se aplica a productos de sellers VTEX, de [Seller Portal](https://help.vtex.com/es/docs/tutorials/seller-portal-primeros-pasos-para-el-marketplace) y externos.

> ⚠️ Los sellers externos deben configurar la [API Delivery Promise Notification](https://developers.vtex.com/docs/api-reference/delivery-promise-notification-api#put-/delivery-promises/external-sellers/-sellerId-/products) para informar a Delivery Promise sobre la disponibilidad de productos.

### Filtros

En esta etapa, **Delivery Promise (beta)** ofrece a los compradores de tu tienda la opción de filtrar los productos que se muestran en la navegación usando los siguientes filtros:

* **Envío a:** productos disponibles para envío a la dirección proporcionada.  
* **Recogida:** productos disponibles para recogida en puntos de recogida dentro de un [radio configurado](https://help.vtex.com/es/docs/tutorials/registro-de-puntos-de-recogida) o hasta la distancia predeterminada de [50 km](https://help.vtex.com/es/docs/tutorials/puntos-de-recogida) de la dirección proporcionada.  
* **Recogida en tiendas cercanas:** productos disponibles para recoger en puntos de recogida en un radio de hasta 10 km de la dirección proporcionada.  
* **Recogida en {{nome}}:** productos disponibles para recogida en el [punto de recogida](https://help.vtex.com/es/docs/tutorials/registro-de-puntos-de-recogida) que elija el comprador.  
* **Plazo de envío ([Opciones de envío](https://help.vtex.com/es/docs/tutorials/opciones-de-envio-beta))**: productos disponibles según el plazo, la forma de entrega y las zonas geográficas configuradas por retailer en el módulo de [**Opciones de envío**](https://help.vtex.com/es/docs/tutorials/opciones-de-envio-beta).  
* **Plazo de envío dinámico**: productos disponibles definidos por plazos dinámicos (**Mismo día** y **Día siguiente**), que consideran los horarios de navegación del comprador y los plazos registrados en [**Opciones de envío**](https://help.vtex.com/es/docs/tutorials/opciones-de-envio-beta) de la cuenta principal de la tienda para la fecha de entrega y de recogida.

Además de los filtros, **Delivery Promise (beta)** ofrece componentes que pueden mostrarse en la página de listado de productos de la tienda y en storefront con opciones de entrega y plazo dinámico y con detalles de la forma de entrega y recogida disponibles para cada producto.

![delivery-promise-beta_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/envío-beta/delivery-promise-beta_1.png)

![delivery-promise-beta_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/envío-beta/delivery-promise-beta_2.png)

![delivery-promise-beta_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/envío-beta/delivery-promise-beta_3.png)

>ℹ️ Algunos de los filtros anteriormente mencionados son componentes nativos de [FastStore](https://developers.vtex.com/docs/guides/faststore/features-delivery-promise) v3 o de [Store Framework](https://developers.vtex.com/docs/guides/setting-up-delivery-promise-components). Si deseas [desarrollar componentes personalizados para los filtros y la selección de dirección de tu tienda](https://developers.vtex.com/docs/guides/delivery-promise-for-headless-stores) o implementar componentes con información sobre la entrega, ponte en contacto con tu equipo de desarrollo o con un [partner de implementación](https://help.vtex.com/es/docs/tracks/cuentas-y-arquitectura).

## Beneficios

Delivery Promise (beta) se recomienda para todo tipo de operación, ya que la solución garantiza diversas ventajas para cualquier modelo de negocio. Consulta las condiciones de arquitectura de tienda para participar de la fase beta (en curso) en la sección [Requisitos](https://help.vtex.com/es/docs/tutorials/delivery-promise-beta).

Para operaciones [omnichannel](https://help.vtex.com/es/docs/tracks/comercio-unificado-101), cuanto mayor sea la cobertura de la red logística y el número de sellers y [cuentas franquicia](https://help.vtex.com/es/docs/tutorials/que-es-una-cuenta-franquicia) asociados a la operación, mayores serán los beneficios obtenidos. La siguiente tabla presenta los principales:

| Beneficio | Información |
| ----- | ----- |
| Menor abandono de carrito | Es común que los compradores abandonen la compra después de ingresar su ubicación en la etapa del carrito, cuando descubren que no es posible realizar el envío a su ubicación o que el plazo de envío no cumple con sus expectativas. Con Delivery Promise (beta), el comprador navega por la vitrina de forma dirigida según sus objetivos, que pueden ser priorizar el tipo de envío, el plazo de envío o recoger la compra en una tienda física. <br><br> El comprador ve en la vitrina únicamente los productos con stock disponible y envío viable a la ubicación ingresada. Además, la información de envío se muestra desde el inicio de la jornada de compra del cliente. |
| Vista del surtido completo de todos los sellers en la vitrina | Con Delivery Promise (beta), el comprador puede ver el surtido completo de productos de todos los sellers que cumplan las siguientes dos condiciones, siempre que se hayan configurado correctamente: <ul><br> <li>Disponibilidad en stock. <li>Forma de envío válida para la dirección proporcionada por el comprador.</ul> |
| Mejor experiencia de compra | Delivery Promise (beta) promueve una mejor experiencia de compra en general: <ul><br> <li>Elimina la frustración de descubrir en el checkout que no es posible realizar la compra.  <li>Permite que el comprador vea un mayor número de productos.</ul>  |
| Incentivo a la venta en tiendas físicas | Delivery Promise (beta) permite que el comprador tenga la certeza de encontrar determinados productos en las tiendas físicas mediante el filtro por punto de recogida, lo que incentiva las visitas a las tiendas y aumenta las oportunidades de venta para tiendas y franquicias. |

[**Requisitos**](https://help.vtex.com/pt/tutorial/delivery-promise-beta--p9EJH9GgxL0JceA6dBswd#requisitos-e-restricoes)

Para el correcto funcionamiento de **Delivery Promise (beta)**, es necesario que el cliente proporcione su ubicación desde el inicio de la jornada de compra, de manera que la vitrina muestre únicamente productos con formas de entrega válida. Esto requiere la instalación de [Intelligent Search](https://help.vtex.com/es/docs/tracks/vtex-intelligent-search), que solicita al cliente su dirección.

Para participar en la fase actual de **Delivery Promise (beta)**, es necesario ponerte en contacto con [nuestro Soporte](https://supporticket.vtex.com/support) y cumplir las siguientes condiciones:

* Usar [Intelligent Search](https://help.vtex.com/es/docs/tracks/vtex-intelligent-search);  
* Los sellers externos deben adaptarse al protocolo de notificaciones de [Delivery Promise Notification API](https://developers.vtex.com/docs/api-reference/delivery-promise-notification-api).

## Más información

* [Delivery Promise: preguntas frecuentes](https://help.vtex.com/es/docs/tutorials/delivery-promise-faq)  
* [Setting up Delivery Promise components (Beta)](https://developers.vtex.com/docs/guides/setting-up-delivery-promise-components) (Store Framework)  
* [Delivery promise for headless stores (Beta)](https://developers.vtex.com/docs/guides/delivery-promise-for-headless-stores)  
* [Implementing Delivery Promise (FastStore)](https://developers.vtex.com/docs/guides/faststore/delivery-promise-implementation)
