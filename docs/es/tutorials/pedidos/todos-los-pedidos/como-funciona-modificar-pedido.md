---
title: 'Cómo funciona Modificar pedido'
id: 56TO0bOFXsfmpc7YZ3wIUZ
status: PUBLISHED
createdAt: 2023-11-27T14:51:09.723Z
updatedAt: 2025-06-11T14:18:22.910Z
publishedAt: 2025-06-11T14:18:22.910Z
firstPublishedAt: 2023-11-27T22:39:50.675Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: how-order-modification-works
legacySlug: como-funciona-modificar-pedido-beta
locale: es
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

La funcionalidad **Modificar pedido** brinda la posibilidad de editar un pedido de múltiples maneras, ya sea para atender las preferencias del cliente, abordar la falta de disponibilidad de productos u otras razones. Los principales tipos de modificaciones en el pedido son:

- **Agregar:** una cantidad de ítems o nuevos productos.
- **Remover:** una cantidad parcial o total de ítems.
- **Modificar peso:** posibilidad de modificar el peso de los ítems, aumentándolo o disminuyéndolo según necesidad.
- **Sustituir ítems:** permite reemplazar unos ítems por otros, incluyendo aquellos con precios basados en peso.
- **Modificar precio:** modificar el valor total del pedido.

En la siguiente guía puedes consultar las instrucciones sobre [Cómo modificar pedidos](/es/docs/tutorials/como-modificar-pedidos). Este artículo aborda otros aspectos sobre **Modificar pedido** y se organiza de la siguiente forma:

- [Modificaciones a través del Admin VTEX y API](#modificaciones-a-traves-del-admin-vtex-y-api)
- [Características generales](#caracteristicas-generales)
- [Cambios de precio](#cambios-de-precio)

## Modificaciones a través del Admin VTEX y API

Hay dos formas de modificar un pedido, detalladas en la tabla a continuación:

| **A través de** | **Descripción** | **Status que admite modificaciones** |
|:---:|:--- |:--- |
| Admin VTEX | La modificación se realiza desde [la página donde se muestran los detalles del pedido](/es/docs/tutorials/pagina-de-detalles-del-pedido), a la que se accede seleccionando el pedido deseado en **Pedidos > Todos los pedidos**.También puedes acceder al pedido mediante la barra de búsqueda situada en la parte superior del Admin VTEX. Haz clic en la barra, selecciona la opción **Pedidos** y utiliza alguno de los siguientes criterios:<ul><li>ID del pedido</li><li>Nombre del cliente</li><li>Email del cliente</li><li>Documento del cliente</li></ul>**Artículo en el Help Center:** [Cómo modificar pedidos](/es/docs/tutorials/como-modificar-pedidos) | <ul><li>`preparando envío`</li></ul> |
| API | Se modifica por los endpoints:<ul><li>[Create order modifications](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes)</li><li>[Preview order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview)</li><li>[Get order modifications detail](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-)</li><li>[Get order modifications history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes)</li><li>[Retry order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry)</li><li>[Cancel order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/cancel)</li><li>[Get Order modifications settings](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/changes/settings)</li><li>[Update Order modifications settings](https://developers.vtex.com/docs/api-reference/orders-api#put-/api/order-system/orders/changes/settings)</li></ul> | <ul><li>`handling`</li><li>`waiting-for-fulfillment`</li><li>`ready for invoicing`</li></ul> |

El historial de modificaciones en el pedido se registra en la [página de detalles](/es/docs/tutorials/pagina-de-detalles-del-pedido), en la sección **Historial de ítems modificados**. Para consultar esta información a través de la API, utiliza el endpoint [Get order modifications history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes).

## Características generales

La funcionalidad **Modificar pedidos** tiene características específicas, como se muestra en la tabla a continuación:

| **Tema** | **Descripción** |
|:---:|:--- |
| Número de modificaciones en el pedido | No hay un límite específico respecto a la cantidad de veces que el pedido puede modificarse. |
| Pedidos incompletos | No es posible modificar [pedidos incompletos](/es/docs/tutorials/como-encontrar-un-pedido), es decir, aquellos que carecen de la información necesaria para su procesamiento en la plataforma VTEX. |
| Cuentas franquicia | Es posible modificar pedidos en los que el seller sea una cuenta franquicia. |
|  Marketplace VTEX, certificado, partner y externo | La modificación de pedidos se comporta de forma diferente en los distintos escenarios de marketplaces en VTEX:<ul><li>Es posible modificar pedidos de tiendas que operan tanto como [sellers VTEX](/es/docs/tutorials/estrategias-de-marketplace-en-vtex#como-seller-vtex) como [marketplaces VTEX](/es/docs/tutorials/estrategias-de-marketplace-en-vtex#ser-un-marketplace-vtex).</li><li>Es posible modificar pedidos de [Multilevel Omnichannel Inventory (MOI)](/es/docs/tutorials/multilevel-omnichannel-inventory) cuando se realizan en [marketplaces externos](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces).</li><li>No es posible modificar pedidos realizados en [marketplaces certificados](/es/docs/tutorials/estrategias-de-marketplace-en-vtex#integrado-con-un-marketplace-certificado) y [marketplaces partners](/es/docs/tutorials/estrategias-de-marketplace-en-vtex#integrado-con-un-marketplace-partner).</li></ul> |
| Reserva | La [reserva](/es/docs/tutorials/como-se-maneja-la-reserva) de ítems en escenarios de modificación de pedidos es automática. |
| Actualización de stock | Al modificar un pedido, el [stock de la tienda](/es/docs/tutorials/gestionar-items-en-inventario) no se actualiza automáticamente; esto debe hacerlo la tienda en el Admin VTEX en **Catálogo > Stock > Gestión del stock**, o a través de la API, utilizando el endpoint [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-). |
| Permiso en Licence Manager | Para que un usuario pueda modificar pedidos, su rol debe estar asociado con al menos uno de los siguientes [recursos de Licence Manager](/es/docs/tutorials/recursos-del-license-manager):<ul><li>`Orders Full Access`</li><li>`Change order`</li></ul> |

## Cambios de precio

Cuando la modificación de ítems en el pedido aumenta o disminuye el valor original de la compra, la comunicación del módulo **Pedidos** se envía automáticamente a **Pagos** y ocurre de la siguiente manera:

- **Precio inferior tras las modificaciones:** el comportamiento depende del status del pago en el [flujo de transacciones](/es/docs/tracks/flujo-de-una-transaccion).
    - Cuando el pago ya fue liquidado (status `settled`), se envía una notificación al [gateway](/es/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#gateway) de pago para reembolsar el valor que se debe devolver al cliente.
    - Si no se ha liquidado el pago, se envía una notificación al gateway para modificar el total del pedido.
- **Precio más alto tras las modificaciones:** se envía una notificación al gateway de pagos para pedir al cliente que pague el valor adicional.

Consulta la tabla siguiente para obtener más información sobre el pago y la facturación al modificar pedidos:

| **Tema** | **Información** |
|:---:|:--- |
| Condiciones para aumentar el precio del pedido | Solo es posible aumentar el precio del pedido cuando cumple alguno de los siguientes criterios:<ul><li>El pedido se realizó utilizando una tarjeta de crédito, [pagarés](/es/docs/tutorials/configurar-pagos-con-pagare) o [customer credit](/es/docs/tutorials/customer-credit-vision-general).</li><li>El [adquirente](/es/docs/tutorials/que-es-un-adquirente) del pedido permite transacciones sin el código CVV.</li><li>El adquirente del pedido permite dos transacciones de cobro sobre el mismo pedido.</li></ul>Si el [conector](/es/docs/tutorials/que-es-el-conector) no permite cambios a valores mayores, se realizará una nueva transacción con el valor excedente, y la transacción no tendrá ningún vínculo con el pedido original. |
| Modificaciones en pedido liquidado | En el [flujo de la transacción](/es/docs/tracks/flujo-de-una-transaccion), el pedido puede cambiar de status `settled` (liquidado), siempre que cumpla las siguientes condiciones:<ul><li>El pedido se realizó con tarjeta de crédito.</li><li>La liquidación del pago tiene lugar antes de que el pedido sea [facturado](/es/docs/tutorials/como-facturar-manualmente-un-pedido).</li><li>El conector de pago está configurado para permitir reembolsos parciales. Actualmente, [Adyen](/es/tutorial/configuring-payment-with-adyenv3--7xAz67E2Eg63LWCQNjVdwv) es el único conector de pago que admite esa operación.</li></ul>Los pedidos en que la transacción se encuentra con el status `finished` (finalizado) no pueden modificarse. |
| Transacción compartida entre sellers y marketplace | Es posible realizar modificaciones en pedidos que involucren a más de un seller y cuyos pagos tengan lugar en el entorno del marketplace, es decir, escenarios con [split de pagos](/es/docs/tutorials/split-de-pagos). |
| Descuentos | No es posible modificar el pedido aplicando descuentos superiores o iguales al valor total del pedido original. |
| Factura | Con respecto a la [factura](/es/docs/tracks/facturar-un-pedido), la modificación de pedidos se comporta de la siguiente manera:<ul><li>Si el pedido ya ha sido [facturado](/es/docs/tutorials/como-facturar-manualmente-un-pedido) por completo, no podrá modificarse.</li><li>Pueden modificarse pedidos aún no facturados o [parcialmente facturados](/es/docs/tracks/facturas-parciales).</li><li>El valor de las facturas parciales del pedido modificado debe ser igual o superior al valor de una factura ya emitida.</li><li>Si el valor total del pedido modificado es inferior al valor de una factura ya emitida, no podrá modificarse.</li></ul>En general, es la facturación del pedido lo que desencadena la liquidación del pago. Este comportamiento es diferente para las tiendas que han configurado la [liquidación automática](/es/docs/tutorials/configurar-tiempo-maximo-para-la-liquidacion-automatica). |

