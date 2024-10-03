---
title: 'Cambiar ítems de un pedido finalizado'
id: tutorials_190
status: PUBLISHED
createdAt: 2017-04-27T22:15:22.411Z
updatedAt: 2024-04-01T17:40:33.284Z
publishedAt: 2024-04-01T17:40:33.284Z
firstPublishedAt: 2017-04-27T23:00:47.264Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: changing-items-from-a-complete-order
locale: es
legacySlug: como-hacer-la-alteracion-de-items, modificar-pedidos-completados
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

La funcionalidad **Cambiar ítems** permite al administrador de la tienda modificar los ítems de un pedido. Con este recurso, la tienda puede resolver eventuales cambios en el pedido, motivados por errores por parte del cliente, falta de disponibilidad de productos, inclusión de descuentos, entre otros casos.

Hay dos formas de modificar un pedido:

* [Admin VTEX:](#como-cambiar) esta opción se puede utilizar si el status del pedido es `Preparando entrega`.
* [API de cambio de pedidos:](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/changes) además de cambiar los ítems, se puede crear descuentos y modificar el precio del pedido. El cambio solo se puede realizar si el status del pedido en la API de pedidos es `handling` o `waiting-for-fulfillment`.

>⚠️ Tras el cambio, el cliente recibe una notificación por email si la plantilla `Change of information` ([plantillas de emails transaccionales referentes al pedido)](https://help.vtex.com/es/tutorial/plantillas-de-emails-transaccionales-del-pedido--3g2S2kqBOoSGcCaqMYK2my) está activada en el Centro de mensajes. El cliente recibe los mensajes con la información que se ha rellenado en el formulario de cambio de ítems.

## Restricciones

Antes de realizar cambios en el pedido, ten en cuenta las restricciones de la funcionalidad:

* Solo es posible modificar pedidos de [Multilevel Omnichannel Inventory](https://help.vtex.com/es/business-guides/offer-the-products-from-your-physical-stores-in-external-marketplaces--6s64bV8Dqb5QN6sqIfPzcA) cuando hechos en un [marketplace externo](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces).
* No es posible modificar [pedidos incompletos](https://help.vtex.com/es/tutorial/como-encontrar-un-pedido--tutorials_294).
* Un pedido puede modificarse hasta 50 veces.
* No es posible aplicar descuentos iguales o superiores al valor del pedido. 
* Una solicitud de cambio solo se produce si hay cambios en la cantidad de ítems o la sustitución de al menos un SKU en el pedido.
* No está permitido cambiar ítems que no sean del propio _marketplace_ o de una cuenta franquicia.
* Es necesario que el [adquirente](https://help.vtex.com/es/tutorial/que-es-un-adquirente--7N1oRTG8dGmOiIugC0cs4E) acepte el nuevo valor de la transacción para que se produzca el cambio.
* El aumento del precio solo se permite si el pedido se ha pagado con [tarjeta de crédito pagaré](https://help.vtex.com/es/tutorial/configurar-pagos-con-pagare--5pW7avTwtyQcMu4uiW8quQ), [efectivo](https://help.vtex.com/es/tutorial/configurar-pagos-con-pagare--5pW7avTwtyQcMu4uiW8quQ) o [control de crédito](https://help.vtex.com/es/tutorial/customer-credit-vision-general--1uIqTjWxIIIEW0COMg4uE0). Además, el [adquirente](https://help.vtex.com/es/tutorial/que-es-un-adquirente--7N1oRTG8dGmOiIugC0cs4E) debe permitir transacciones sin el uso del código CVV y dos operaciones de cobro en el mismo pedido.
* La [reserva](https://help.vtex.com/es/tutorial/como-se-maneja-la-reserva--tutorials_92) de los ítems en el _stock_ no es automática. Es necesario actualizar manualmente la cantidad de ítems que siguen disponibles en el _[stock](https://help.vtex.com/es/tutorial/gestionar-items-en-inventario--tutorials_139)_.
* No es posible [cancelar](https://help.vtex.com/es/tutorial/como-cancelar-pedido--tutorials_186) pedidos [parcialmente facturados](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). Si el cliente desea sustituir o remover ítems del pedido, es posible cambiar el pedido.
* No se puede modificar un pedido con una transacción finalizada. Por ejemplo, para los cambios en el valor de un pedido con descuento, el OMS considera que, si el status que se muestra en Detalles de la transacción es distinto de «Finished», todavía puedes cambiar el valor de la transacción, aunque el valor ya se haya liquidado.  
* No es posible realizar cambios en  pedidos procedentes de _[marketplaces integrados con VTEX](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-en-vtex--tutorials_402)_ (ya sean conectores nativos o conectores de _partners_).
* Solo se pueden modificar los pedidos que están en preparación.
* Para los casos en los que hay un cambio a un valor superior respecto al valor inicial del pedido:
    * Si el [conector](https://help.vtex.com/es/tutorial/que-es-el-conector--3lze0Cu0bmyC6u2o2iaeEA) no permite cambios en el valor del pedido (para valores mayores), se realizará una nueva transacción con el valor sobrante. De este modo, la transacción no estará vinculada al pedido original. Si necesitas hacer una consulta, busca las transacciones por el valor, la fecha de cambio y el nombre del cliente.
    * La captura de valores adicionales solo se produce después de la facturación del pedido. Por lo tanto, ten cuidado con este tipo de operaciones, que son susceptibles de fraude debido a que los valores adicionales solo se liquidarán posteriormente.

## Cómo cambiar

Para realizar cambios en los ítems, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.  
2. Busca el pedido en la barra de búsqueda o [usa los filtros](https://help.vtex.com/es/tutorial/como-filtrar-pedidos--tutorials_192) y selecciona el pedido deseado.    
3. Haz clic en el pedido para acceder a la página de **Detalles del pedido**.       
4. En la sección «Ítems para facturar», haga clic en **Modificar**.  

    > Solo se pueden modificar los pedidos con status Preparando envío. Solo debes cambiar el status del pedido después de recibir la confirmación de tu operación de ecommerce. Si tu pedido no tiene el status Preparando envío, en la sección Status del pedido, haz clic en **Iniciar preparación**, selecciona las casillas de verificación y haz clic en **Proceder con el status**.    

5. Rellena el formulario con los cambios deseados.  
<ul>
<li><b>Para agregar nuevos productos</b>, escribe el nombre del SKU en la barra de búsqueda.</li>    
<li><b>Para cambiar el número de unidades de cada producto</b> ajusta el control, aumentando o disminuyendo.</li>    
<li><b>Para cambiar el valor</b> selecciona entre las opciones Descuento o Aumento, e introduce el valor actualizado.</li>    
<li><b>Comenta el motivo de los cambios</b> El comentario ingresado en este campo se registra en el historial de ítems modificados. Recomendamos describir lo que fue comunicado por el cliente que solicitó el cambio.</li>
  </ul>    
6. Haga clic en `Solicitar`.  

Las alteraciones en el pedido serán actualizadas en la sección *Ítems para facturar* y en *Historial de ítems modificados*.

### Facturas Parciales

Al cambiar o eliminar ítems de un pedido, el valor total del pedido cambia. En estos casos, es necesario [facturar el pedido](https://help.vtex.com/es/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) enviando la [factura parcial](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) correspondiente al importe que se liquidará por el pedido después del cambio. 

El valor total del pedido se actualizará después de que se inserte la factura, y corresponde al valor liquidado por el gateway de pagos de VTEX. Si el cliente devuelve un ítem, el reembolso se realizará automáticamente a través del sistema de Pagos de VTEX.

>ℹ️ La funcionalidad de facturas parciales está disponible para toda la base de clientes VTEX, pero la liquidación parcial en el gateway se encuentra en la versión Beta. Además, para que las facturas parciales disparen liquidaciones parciales en la transacció, es necesario utilizar un conector que utilice el [Payment Provider Protocol](https://help.vtex.com/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). Los conectores legados no admiten la funcionalidad.
