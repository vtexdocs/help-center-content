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

En la siguiente guía puedes consultar las instrucciones sobre [Cómo modificar pedidos](https://help.vtex.com/es/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw). Este artículo aborda otros aspectos sobre **Modificar pedido** y se organiza de la siguiente forma:

- [Modificaciones a través del Admin VTEX y API](#modificaciones-a-traves-del-admin-vtex-y-api)
- [Características generales](#caracteristicas-generales)
- [Cambios de precio](#cambios-de-precio)

## Modificaciones a través del Admin VTEX y API

Hay dos formas de modificar un pedido, detalladas en la tabla a continuación:

| **A través de** | **Descripción** | **Status que admite modificaciones** |
|:---:|:--- |:--- |
| Admin VTEX | La modificación se realiza desde [la página donde se muestran los detalles del pedido](https://help.vtex.com/es/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl), a la que se accede seleccionando el pedido deseado en **Pedidos > Todos los pedidos**.También puedes acceder al pedido mediante la barra de búsqueda situada en la parte superior del Admin VTEX. Haz clic en la barra, selecciona la opción **Pedidos** y utiliza alguno de los siguientes criterios:<ul><li>ID del pedido</li><li>Nombre del cliente</li><li>Email del cliente</li><li>Documento del cliente</li></ul>**Artículo en el Help Center:** [Cómo modificar pedidos](https://help.vtex.com/es/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw) | <ul><li>`preparando envío`</li></ul> |
| API | Se modifica por los endpoints:<ul><li>[Create order modifications](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes)</li><li>[Preview order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview)</li><li>[Get order modifications detail](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-)</li><li>[Get order modifications history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes)</li><li>[Retry order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry)</li><li>[Cancel order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/cancel)</li><li>[Get Order modifications settings](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/changes/settings)</li><li>[Update Order modifications settings](https://developers.vtex.com/docs/api-reference/orders-api#put-/api/order-system/orders/changes/settings)</li></ul> | <ul><li>`handling`</li><li>`waiting-for-fulfillment`</li><li>`ready for invoicing`</li></ul> |

El historial de modificaciones en el pedido se registra en la [página de detalles](https://help.vtex.com/es/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl), en la sección **Historial de ítems modificados**. Para consultar esta información a través de la API, utiliza el endpoint [Get order modifications history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes).

## Características generales

La funcionalidad **Modificar pedidos** tiene características específicas, como se muestra en la tabla a continuación:

| **Tema** | **Descripción** |
|:---:|:--- |
| Número de modificaciones en el pedido | No hay un límite específico respecto a la cantidad de veces que el pedido puede modificarse. |
| Pedidos incompletos | No es posible modificar [pedidos incompletos](https://help.vtex.com/es/tutorial/entendendo-os-pedidos-incompletos--tutorials_294), es decir, aquellos que carecen de la información necesaria para su procesamiento en la plataforma VTEX. |
| Cuentas franquicia | Es posible modificar pedidos en los que el seller sea una cuenta franquicia. |
|  Marketplace VTEX, certificado, partner y externo | La modificación de pedidos se comporta de forma diferente en los distintos escenarios de marketplaces en VTEX:<ul><li>Es posible modificar pedidos de tiendas que operan tanto como [sellers VTEX](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#como-seller-vtex) como [marketplaces VTEX](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-un-marketplace-vtex).</li><li>Es posible modificar pedidos de [Multilevel Omnichannel Inventory (MOI)](https://help.vtex.com/es/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) cuando se realizan en [marketplaces externos](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces).</li><li>No es posible modificar pedidos realizados en [marketplaces certificados](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-marketplace-certificado) y [marketplaces partners](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-marketplace-partner).</li></ul> |
| Reserva | La [reserva](https://help.vtex.com/es/tutorial/how-does-reservation-work--tutorials_92) de ítems en escenarios de modificación de pedidos es automática. |
| Actualización de stock | Al modificar un pedido, el [stock de la tienda](https://help.vtex.com/es/tutorial/inventory-management--tutorials_139) no se actualiza automáticamente; esto debe hacerlo la tienda en el Admin VTEX en **Catálogo > Stock > Gestión del stock**, o a través de la API, utilizando el endpoint [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-). |
| Permiso en Licence Manager | Para que un usuario pueda modificar pedidos, su rol debe estar asociado con al menos uno de los siguientes [recursos de Licence Manager](https://help.vtex.com/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3):<ul><li>`Orders Full Access`</li><li>`Change order`</li></ul> |

## Cambios de precio

Cuando la modificación de ítems en el pedido aumenta o disminuye el valor original de la compra, la comunicación del módulo **Pedidos** se envía automáticamente a **Pagos** y ocurre de la siguiente manera:

- **Precio inferior tras las modificaciones:** el comportamiento depende del status del pago en el [flujo de transacciones](https://help.vtex.com/es/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y).
    - Cuando el pago ya fue liquidado (status `settled`), se envía una notificación al [gateway](https://help.vtex.com/es/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#gateway) de pago para reembolsar el valor que se debe devolver al cliente.
    - Si no se ha liquidado el pago, se envía una notificación al gateway para modificar el total del pedido.
- **Precio más alto tras las modificaciones:** se envía una notificación al gateway de pagos para pedir al cliente que pague el valor adicional.

Consulta la tabla siguiente para obtener más información sobre el pago y la facturación al modificar pedidos:

| **Tema** | **Información** |
|:---:|:--- |
| Condiciones para aumentar el precio del pedido | Solo es posible aumentar el precio del pedido cuando cumple alguno de los siguientes criterios:<ul><li>El pedido se realizó utilizando una tarjeta de crédito, [pagarés](https://help.vtex.com/es/tutorial/setting-up-payments-notes--5pW7avTwtyQcMu4uiW8quQ) o [customer credit](https://help.vtex.com/es/tutorial/customer-credit-overview--1uIqTjWxIIIEW0COMg4uE0).</li><li>El [adquirente](https://help.vtex.com/es/tutorial/what-is-an-acquirer--7N1oRTG8dGmOiIugC0cs4E) del pedido permite transacciones sin el código CVV.</li><li>El adquirente del pedido permite dos transacciones de cobro sobre el mismo pedido.</li></ul>Si el [conector](https://help.vtex.com/es/tutorial/o-que-e-conector--3lze0Cu0bmyC6u2o2iaeEA) no permite cambios a valores mayores, se realizará una nueva transacción con el valor excedente, y la transacción no tendrá ningún vínculo con el pedido original. |
| Modificaciones en pedido liquidado | En el [flujo de la transacción](https://help.vtex.com/es/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y), el pedido puede cambiar de status `settled` (liquidado), siempre que cumpla las siguientes condiciones:<ul><li>El pedido se realizó con tarjeta de crédito.</li><li>La liquidación del pago tiene lugar antes de que el pedido sea [facturado](https://help.vtex.com/es/tutorial/como-faturar-um-pedido--7p1h852V5t54KyscpgxE2v).</li><li>El conector de pago está configurado para permitir reembolsos parciales. Actualmente, [Adyen](https://help.vtex.com/es/tutorial/configuring-payment-with-adyenv3--7xAz67E2Eg63LWCQNjVdwv) es el único conector de pago que admite esa operación.</li></ul>Los pedidos en que la transacción se encuentra con el status `finished` (finalizado) no pueden modificarse. |
| Transacción compartida entre sellers y marketplace | Es posible realizar modificaciones en pedidos que involucren a más de un seller y cuyos pagos tengan lugar en el entorno del marketplace, es decir, escenarios con [split de pagos](https://help.vtex.com/es/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx). |
| Descuentos | No es posible modificar el pedido aplicando descuentos superiores o iguales al valor total del pedido original. |
| Factura | Con respecto a la [factura](https://help.vtex.com/es/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT), la modificación de pedidos se comporta de la siguiente manera:<ul><li>Si el pedido ya ha sido [facturado](https://help.vtex.com/es/tutorial/como-faturar-um-pedido--7p1h852V5t54KyscpgxE2v) por completo, no podrá modificarse.</li><li>Pueden modificarse pedidos aún no facturados o [parcialmente facturados](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe).</li><li>El valor de las facturas parciales del pedido modificado debe ser igual o superior al valor de una factura ya emitida.</li><li>Si el valor total del pedido modificado es inferior al valor de una factura ya emitida, no podrá modificarse.</li></ul>En general, es la facturación del pedido lo que desencadena la liquidación del pago. Este comportamiento es diferente para las tiendas que han configurado la [liquidación automática](https://help.vtex.com/es/tutorial/configuring-maximum-automatic-payment-settlement-time-frame--7dwcaxrcgcFJUk7umqPBw2). |

