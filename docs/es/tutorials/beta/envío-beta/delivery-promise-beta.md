---
title: 'Delivery Promise (Beta)'
id: p9EJH9GgxL0JceA6dBswd
status: PUBLISHED
createdAt: 2024-08-22T15:58:58.240Z
updatedAt: 2025-08-29T20:07:18.463Z
publishedAt: 2025-08-29T20:07:18.463Z
firstPublishedAt: 2024-08-22T18:57:59.895Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: delivery-promise-beta
legacySlug: delivery-promise-beta
locale: es
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

> ℹ️ Esta funcionalidad se encuentra en la versión Beta, por lo tanto, estamos trabajando para mejorarla. Si tienes alguna duda, ponte en contacto con <a href= "https://help.vtex.com/es/support">nuestro Soporte</a>.

**Delivery Promise (Beta)** es la nueva solución de VTEX para que el cliente, durante la experiencia de compra en tu tienda, vea solo los productos que puede comprar, teniendo en cuenta tanto la disponibilidad de los productos en stock como los tipos de envío válidos para la dirección de entrega.

Con la funcionalidad **Delivery Promise (Beta),** tu tienda puede ofrecer a los clientes una "promesa de envío" de todos los productos visitados, como se muestra en el video a continuación:

<iframe width="560" height="315" src="https://www.youtube.com/embed/bqapGY0wo24" title="VTEX Delivery Promise" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> ❗ Por el momento, la funcionalidad **Delivery Promise (Beta)** no permite filtrar la vitrina de la tienda por plazo de envío. Para más información sobre filtros, consulta la sección [Funcionalidades disponibles](#funcionalidades-disponibles).

El artículo se estructura en las siguientes secciones:

* [Funcionalidades disponibles](#funcionalidades-disponibles)
* [Beneficios](#beneficios)
* [Requisitos y restricciones](#requisitos-y-restricciones)

## Funcionalidades disponibles

Cuando el cliente proporciona su dirección, se realiza una selección inicial de los productos para mostrar únicamente los que se puedan entregar en esa ubicación o recoger en puntos de recogida en un radio de hasta 50 km de distancia de la misma (límite determinado en Checkout).

Además de poder comprar todos los productos vistos, los clientes tienen la opción de filtrar los productos de la vitrina para que solamente se muestren aquellos resultados que cumplen determinados criterios, como veremos a continuación. Esto permite al cliente dirigir la experiencia de navegación de acuerdo con sus propios objetivos: 

* Productos disponibles para el código postal deseado.
* Fecha límite para recibir el producto.
* Productos disponibles en tiendas cercanas al cliente.
* Tipo de envío más rápido para el pedido.
* [Punto de recogida](/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) donde el cliente desea retirar el pedido.

En esta etapa, **Delivery Promise (Beta)** permite a los clientes de tu tienda aplicar los siguientes filtros a los productos mostrados en la navegación:

* **Entregar a:** productos disponibles para entrega en la dirección proporcionada.
* **Recogida:** productos disponibles para recogida en puntos de recogida en un radio de hasta 50 km alrededor de la dirección proporcionada.
* **Recogida en tiendas cercanas:** productos disponibles para recogida en puntos de recogida en un radio de 10 km alrededor de la dirección proporcionada.
* **Recogida en {{nombre}}:** productos disponibles para recogida en un determinado punto de recogida.

> ℹ️ Los filtros mencionados anteriormente son componentes nativos de Intelligent Search. Si deseas desarrollar componentes personalizados para tu tienda, ponte en contacto con tu equipo de desarrollo o con un [partner de implementación](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#partners-de-implementacion).

## Beneficios

**Delivery Promise (Beta)** está recomendada para todo tipo de operaciones, ya que la solución garantiza diversos beneficios para cualquier modelo de negocio. Consulta las condiciones de arquitectura de tienda para participar de la fase beta (en curso) en la sección [Requisitos y restricciones](#requisitos-y-restricciones).

Para operaciones [omnichannel](/es/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv), cuanto mayor sea la cobertura de la red logística y el número de sellers y [cuentas franquicia](/es/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) asociados a la operación, mayores serán los beneficios obtenidos. Consultas los principales beneficios en la tabla a continuación:

| **Beneficio** | **Detalles** |
| :---: | :--- |
| Menor abandono de carritos | Es común que los clientes abandonen la compra después de ingresar su ubicación en la etapa del carrito, tras descubrir que no es posible realizar el envío a su región o que el plazo de entrega no cumple con sus expectativas.Con **Delivery Promise (Beta)**, para cada producto que el cliente ve en la vitrina, se considera tanto la disponibilidad de stock como la viabilidad del envío a la ubicación del cliente. Además de esto, la información de envío se muestra desde el inicio de la jornada de compra del cliente. |
| Mayor surtido de productos en la vitrina | Debido a limitaciones en funcionalidades como la [regionalización de sellers](/es/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw), [sellers de extensa cobertura](/es/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI) y el [algoritmo de selección de sellers](/es/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa), sin **Delivery Promise (Beta)**, el surtido de productos que se muestra al cliente en la vitrina no refleja la totalidad de productos de los sellers.Con **Delivery Promise (Beta)**, el cliente puede ver el surtido completo de productos de todos los sellers, siempre que dichos productos:<ul><li>Estén correctamente configurados.</li><li>Tengan disponibilidad de stock.</li><li>Dispongan de un tipo de envío válido a la dirección ingresada por el cliente.</li></ul> |
| Mejor experiencia de compra | **Delivery Promise (Beta)** promueve una mejor experiencia de compra para el cliente como un todo:<ul><li>Elimina la frustración de descubrir en el checkout que no se puede realizar la compra.</li><li>Permite al cliente visualizar un mayor número de productos.</li><li>Permite que el cliente navegue por la vitrina según sus objetivos, como priorizar el tipo de envío o comprar en una tienda física.</li></ul> |
| Fomentar ventas en tiendas físicas  | **Delivery Promise (Beta)** garantiza que el cliente encuentre determinados productos en las tiendas físicas, lo que estimula la visita a dichas tiendas y aumenta las oportunidades de venta. |

## Requisitos y restricciones

Para el correcto funcionamiento de **Delivery Promise (Beta)**, es necesario que el cliente proporcione su ubicación desde el inicio de la compra, de manera que la vitrina muestre únicamente productos con tipos de envío válidos. Esto requiere la instalación de [Intelligent Search](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG), que solicita la dirección del cliente. 

Para participar en la fase beta actual de **Delivery Promise (Beta)**, deben cumplirse las siguientes condiciones:

* <i class="far fa-check-circle"></i> **Requisito:** usar [Intelligent Search](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG).
* <i class="far fa-check-circle"></i> **Requisito:** tener la implementación del frontend de [Store Framework](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework).

## Conoce más

* [Delivery Promise: FAQ](/es/tutorial/delivery-promise-faq--2frHHK5uPsQrLK5XbYHALN)
* [Setting up Delivery Promise components (Beta)](https://developers.vtex.com/docs/guides/setting-up-delivery-promise-components)
* [Delivery promise for headless stores (Beta)](https://developers.vtex.com/docs/guides/delivery-promise-for-headless-stores)
* [Delivery Promise](https://developers.vtex.com/docs/guides/faststore/features-delivery-promise)
