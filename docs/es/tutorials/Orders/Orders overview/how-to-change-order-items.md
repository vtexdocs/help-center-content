---
title: 'Cómo modificar ítems de un pedido'
id: 7jekq618QxgbsOxKkXBjE8
status: ARCHIVED
createdAt: 2020-12-28T21:11:48.378Z
updatedAt: 2023-03-31T22:07:17.538Z
publishedAt: 
firstPublishedAt: 2020-12-28T21:20:33.832Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: como-modificar-items-del-pedido
locale: es
legacySlug: como-modificar-items-del-pedido-beta
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

La página **Detalles del pedido** permite que los administradores de la tienda acompañen el ciclo de vida de pedidos específicos, analizando todas sus interacciones, datos y contextos. Aprenda más sobre cómo funciona la nueva página de [Detalles del pedido](https://help.vtex.com/es/tutorial/pagina-de-detalles-del-pedido-beta--2Y75n54Cc9VizrlG1N6ZNl). 

Hay dos formas de modificar un pedido:

* [Por el Admin VTEX:](#como-cambiar) esta opción se puede utilizar si el status del pedido es `Preparando entrega`.  
* [Por la API de cambio de pedidos:](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/changes) además de cambiar los ítems, se puede crear descuentos y modificar el precio del pedido. El cambio solo se puede realizar si el status del pedido en la API de pedidos es `handling` o `waiting-for-fulfillment`.  

>⚠️ Tras el cambio, el cliente recibe una notificación por email si la plantilla `Change of information` ([plantillas de emails transaccionales referentes al pedido)](https://help.vtex.com/es/tutorial/plantillas-de-emails-transaccionales-del-pedido--3g2S2kqBOoSGcCaqMYK2my) está activada en el Centro de mensajes.  El cliente recibe los mensajes con la información que se ha rellenado en el formulario de cambio de ítems.

Es posible editar ítems que aún no fueron facturados en un pedido. Para agregar nuevos ítems, remover ítems o modificar la cantidad de cada uno, realice los siguientes pasos.  

>ℹ️ Para realizar el cambio, el pedido debe tener el status `  «Preparando entrega»` equivalente al status `«handling» ` en la [API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/changes). Para obtener más información sobre los estados de los pedidos, lea nuestro artículo [Tabla de estados de pedidos](https://help.vtex.com/es/tutorial/tabla-de-estados-de-pedidos-oms--frequentlyAskedQuestions_773).
> Consulte la sección de [Restricciones](https://help.vtex.com/es/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190#restricciones) para conocer las condiciones de uso de la funcionalidad.

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

Al [cambiar o eliminar ítems de un pedido](https://help.vtex.com/es/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190), el valor total del pedido cambia. En estos casos, es necesario [facturar el pedido](https://help.vtex.com/es/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) enviando la [factura parcial](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) correspondiente al importe que se liquidará por el pedido después del cambio. 

El valor total del pedido se actualizará después de que se inserte la factura, y corresponde al valor capturado por el gateway de pagos de VTEX. Si el cliente devuelve un ítem, el reembolso se realizará automáticamente a través del sistema de Pagos de VTEX.

>ℹ️ La funcionalidad de facturas parciales está disponible para toda la base de clientes VTEX, pero la liquidación parcial en el gateway se encuentra en la versión Beta. Además, para que las facturas parciales disparen liquidaciones parciales en la transacció, es necesario utilizar un conector que utilice el [Payment Provider Protocol](https://help.vtex.com/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). Los conectores legados no admiten la funcionalidad.
