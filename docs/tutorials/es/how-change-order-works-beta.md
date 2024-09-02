---
title: 'Cómo funciona Modificar pedido (Beta)'
id: 56TO0bOFXsfmpc7YZ3wIUZ
status: PUBLISHED
createdAt: 2023-11-27T14:51:09.723Z
updatedAt: 2024-04-09T17:58:34.469Z
publishedAt: 2024-04-09T17:58:34.469Z
firstPublishedAt: 2023-11-27T22:39:50.675Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: como-funciona-modificar-pedido-beta
locale: es
legacySlug: como-funciona-modificar-pedido-beta
subcategory: 3LQ1Tl0u4frEOd45BkjFAm
---

<div class="alert alert-info">
Esta funcionalidad se encuentra en la versión beta, por lo tanto, estamos trabajando para mejorarla. Si deseas utilizar <b>Modificar pedido (Beta)</b>, ponte en contacto con <a href="https://help.vtex.com/es/support">nuestro Soporte</a> e informa el nombre del <a href="https://help.vtex.com/es/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC">account name(s)</a> en que deseas activarla.
</div>

La funcionalidad **Modificar pedido (beta)** brinda la posibilidad de editar un pedido de múltiples maneras, ya sea para atender las preferencias del cliente, abordar la falta de disponibilidad de productos u otras razones. Los principales tipos de modificaciones en el pedido son:

- **Agregar:** una cantidad de ítems o nuevos productos.
- **Remover:** una cantidad parcial o total de ítems.
- **Modificar peso:** posibilidad de modificar el peso de los ítems, aumentándolo o disminuyéndolo según necesidad.
- **Sustituir ítems:** permite reemplazar unos ítems por otros, incluyendo aquellos con precios basados en peso.
- **Modificar precio:** modificar el valor total del pedido.

En la siguiente guía puedes consultar las instrucciones sobre [Cómo modificar pedidos (Beta)](https://help.vtex.com/es/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw). Este artículo aborda otros aspectos sobre **Modificar pedido (beta)** y se organiza de la siguiente forma:

- [Modificaciones a través del Admin VTEX y API](#modificaciones-a-traves-del-admin-vtex-y-api)
- [Características generales](#caracteristicas-generales)
- [Cambios de precio](#cambios-de-precio)

## Modificaciones a través del Admin VTEX y API

Hay dos formas de modificar un pedido, detalladas en la tabla a continuación:

| **A través de** | **Descripción** | **Status que admite modificaciones** |
|:---:|:--- |:--- |
| Admin VTEX | <p>La modificación se realiza desde <a href="https://help.vtex.com/es/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl">la página donde se muestran los detalles del pedido</a>, a la que se accede seleccionando el pedido deseado en <b>Pedidos > Todos los pedidos</b>.</p><p>También puedes acceder al pedido mediante la barra de búsqueda situada en la parte superior del Admin VTEX. Haz clic en la barra, selecciona la opción <b>Pedidos</b> y utiliza alguno de los siguientes criterios:</p><p><ul><li>ID del pedido</li><li>Nombre del cliente</li><li>Email del cliente</li><li>Documento del cliente</li></ul></p><p><b>Artículo en el Help Center:</b> <a href="https://help.vtex.com/es/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw">Cómo modificar pedidos (Beta)</a></p> | <ul><li><code>preparando envío</code></li></ul> |
| API | <p>Se modifica por los endpoints:</p><p><ul><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes">Create order change</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview">Preview order change</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-">Get order change detail</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes">Get order change history</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry">Retry order change</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/cancel">Cancel order change</a></li></ul></p> | <p><ul><li><code>ready-for-handling</code></li><li><code>handling</code></li><li><code>waiting-for-fulfillment</code></li><li><code>ready for invoicing</code></li></ul></p> |

El historial de modificaciones en el pedido se registra en la [página de detalles](https://help.vtex.com/es/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl), en la sección **Historial de ítems modificados**. Para consultar esta información a través de la API, utiliza el endpoint [Get order change history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes).

## Características generales

La funcionalidad **Modificar pedidos (beta)** tiene características específicas, como se muestra en la tabla a continuación:

| **Tema** | **Descripción** |
|:---:|:--- |
| Número de modificaciones en el pedido | No hay un límite específico respecto a la cantidad de veces que el pedido puede modificarse. |
| Pedidos incompletos | No es posible modificar <a href="https://help.vtex.com/es/tutorial/entendendo-os-pedidos-incompletos--tutorials_294">pedidos incompletos</a>, es decir, aquellos que carecen de la información necesaria para su procesamiento en la plataforma VTEX. |
| Cuentas franquicia | Es posible modificar pedidos en los que el seller sea una cuenta franquicia. |
|  Marketplace VTEX, certificado, partner y externo | <p>La modificación de pedidos se comporta de forma diferente en los distintos escenarios de marketplaces en VTEX:</p><p><ul><li>Es posible modificar pedidos de tiendas que operan tanto como <a href="https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#como-seller-vtex">sellers VTEX</a> como <a href="https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-un-marketplace-vtex">marketplaces VTEX</a>.</li><li>Es posible modificar pedidos de <a href="https://help.vtex.com/es/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4">Multilevel Omnichannel Inventory (MOI)</a> cuando se realizan en <a href="https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces">marketplaces externos</a>.</li><li>No es posible modificar pedidos realizados en <a href="https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-marketplace-certificado">marketplaces certificados</a> y <a href="https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-marketplace-partner">marketplaces partners</a>.</li></ul></p> |
| Reserva | La <a href="https://help.vtex.com/es/tutorial/how-does-reservation-work--tutorials_92">reserva</a> de ítems en escenarios de modificación de pedidos es automática. |
| Actualización de stock | Al modificar un pedido, el <a href="https://help.vtex.com/es/tutorial/inventory-management--tutorials_139">stock de la tienda</a> no se actualiza automáticamente; esto debe hacerlo la tienda en el Admin VTEX en <b>Catálogo > Stock > Gestión del stock</b>, o a través de la API, utilizando el endpoint <a href="https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-">Update inventory by SKU and warehouse</a>. |
| Permiso en Licence Manager | <p>Para que un usuario pueda modificar pedidos, su rol debe estar asociado con al menos uno de los siguientes <a href="https://help.vtex.com/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3">recursos de Licence Manager</a>:</p><p><ul><li><code>Orders Full Access</code></li><li><code>Change order</code></li></ul></p> |

## Cambios de precio

Cuando la modificación de ítems en el pedido aumenta o disminuye el valor original de la compra, la comunicación del módulo **Pedidos** se envía automáticamente a **Pagos** y ocurre de la siguiente manera:

- **Precio inferior tras las modificaciones:** se envía una notificación al [gateway](https://help.vtex.com/es/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#gateway) de pagos para revertir el valor que debe devolverse al cliente.
- **Precio más alto tras las modificaciones:** se envía una notificación al gateway de pagos para pedir al cliente que pague el valor adicional.

Consulta la tabla siguiente para obtener más información sobre el pago y la facturación al modificar pedidos:

| **Tema** | **Información** |
|:---:|:--- |
| Condiciones para aumentar el precio del pedido | <p>Solo es posible aumentar el precio del pedido cuando cumple alguno de los siguientes criterios:</p><p><ul><li>El pedido se realizó utilizando una tarjeta de crédito, <a href="https://help.vtex.com/es/tutorial/setting-up-payments-notes--5pW7avTwtyQcMu4uiW8quQ">pagarés</a> o <a href="https://help.vtex.com/es/tutorial/customer-credit-overview--1uIqTjWxIIIEW0COMg4uE0">customer credit</a>.</li><li>El <a href="https://help.vtex.com/es/tutorial/what-is-an-acquirer--7N1oRTG8dGmOiIugC0cs4E">adquirente</a> del pedido permite transacciones sin el código CVV.</li><li>El adquirente del pedido permite dos transacciones de cobro sobre el mismo pedido.</li></ul></p><p>Si el <a href="https://help.vtex.com/es/tutorial/o-que-e-conector--3lze0Cu0bmyC6u2o2iaeEA">conector</a> no permite cambios a valores mayores, se realizará una nueva transacción con el valor excedente, y la transacción no tendrá ningún vínculo con el pedido original.</p> |
| Modificaciones en pedido liquidado | <p>En el <a href="https://help.vtex.com/es/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y">flujo de la transacción</a>, el pedido puede cambiar de status <code>settled</code> (liquidado), siempre que cumpla las siguientes condiciones:</p><p><ul><li>El pedido se realizó con tarjeta de crédito.</li><li>La liquidación del pago tiene lugar antes de que el pedido sea <a href="https://help.vtex.com/es/tutorial/como-faturar-um-pedido--7p1h852V5t54KyscpgxE2v">facturado</a>.</li><li>El conector de pago está configurado para permitir reembolsos parciales. Actualmente, <a href="https://help.vtex.com/es/tutorial/configuring-payment-with-adyenv3--7xAz67E2Eg63LWCQNjVdwv">Adyen</a> es el único conector de pago que admite esa operación.</li></ul></p><p>Los pedidos en que la transacción se encuentra con el status <code>finished</code> (finalizado) no pueden modificarse.</p> |
| Transacción compartida entre sellers y marketplace | Es posible realizar modificaciones en pedidos que involucren a más de un seller y cuyos pagos tengan lugar en el entorno del marketplace, es decir, escenarios con <a href="https://help.vtex.com/es/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx">split de pagos</a>. |
| Descuentos | No es posible modificar el pedido aplicando descuentos superiores o iguales al valor total del pedido original. |
| Factura | <p>Con respecto a la <a href="https://help.vtex.com/es/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT">factura</a>, la modificación de pedidos se comporta de la siguiente manera:</p><p><ul><li>Si el pedido ya ha sido <a href="https://help.vtex.com/es/tutorial/como-faturar-um-pedido--7p1h852V5t54KyscpgxE2v">facturado</a> por completo, no podrá modificarse.</li><li>Pueden modificarse pedidos aún no facturados o <a href="https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe">parcialmente facturados</a>.</li><li>El valor de las facturas parciales del pedido modificado debe ser igual o superior al valor de una factura ya emitida.</li><li>Si el valor total del pedido modificado es inferior al valor de una factura ya emitida, no podrá modificarse.</li></ul></p><p>En general, es la facturación del pedido lo que desencadena la liquidación del pago. Este comportamiento es diferente para las tiendas que han configurado la <a href="https://help.vtex.com/es/tutorial/configuring-maximum-automatic-payment-settlement-time-frame--7dwcaxrcgcFJUk7umqPBw2">liquidación automática</a>.</p> |

