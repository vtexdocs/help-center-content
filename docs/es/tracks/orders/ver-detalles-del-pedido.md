---
title: 'Ver detalles del pedido'
id: 204AjAQseJe8RLUi8GAhiC
status: PUBLISHED
createdAt: 2019-11-14T15:12:10.952Z
updatedAt: 2023-11-08T14:56:01.508Z
publishedAt: 2023-11-08T14:56:01.508Z
firstPublishedAt: 2019-11-18T12:20:18.851Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: seeing-order-details
locale: es
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugES: pedidos
---

En el menú lateral del Admin de VTEX, dentro del área de pedidos, se encuentra la sección Pedidos__. Al hacer clic allí, usted encontrará la opción __Todos los pedidos__, donde puede ver la lista de pedidos de la tienda.

En la vista predeterminada de esta pantalla, se enumeran todos los pedidos de la tienda,  de los más recientes. Puede cambiar la clasificación haciendo clic en los nombres de las columnas, así como obtener órdenes utilizando datos específicos y también exportando estos datos.

Además, la búsqueda ofrece un filtro muy flexible, que explicaremos en detalle en el [proximo artículo](/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/3cjk655ZzDGICH4rVfgu7O).

Para comprender la lista de pedidos en detalle, consulte el artículo [Visión general de la lista de pedidos](/es/tutorial/listado-de-pedidos--tutorials_200)

Además de buscar pedidos en **Pedidos > Todos los pedidos**, puede buscar pedidos desde cualquier página del Admin VTEX utilizando la barra de búsqueda global en la parte superior de la página. Por defecto, la búsqueda está configurada en `Páginas`. Para buscar un pedido, haga clic en la barra, seleccione la opción `Pedidos` y utilice cualquiera de los siguientes criterios:

- ID del pedido
- Nombre del cliente
- Email del cliente
- Documento del cliente

## Ver los detalles de un pedido

Hacer clic en un pedido lleva a la pantalla [detalles del pedido](/es/tutorial/order-details-page-interface--2Y75n54Cc9VizrlG1N6ZNl), donde puede revisar un rango de información del pedido y realizar algunas acciones, tales como:
- Volver a enviar el último correo electrónico al cliente.
- Cancelar manualmente el pedido.
- Facturar los artículos del pedido.
- Aprobar manualmente el pago.

Aquí se explica cómo interpretar la información en cada área de la pantalla de detalles del pedido.

### Datos del cliente

La información de identidad del cliente que se muestra en el card, así como el correo electrónico y el teléfono, es su forma de identificar a ese cliente.

El botón __Reenviar el último email__, cuando se hace clic, reenvía la última comunicación por correo electrónico al cliente. Para asegurarse de qué email es, usted puede verlos todos en el área Línea de Tiempo en la parte inferior de la página.

En la plataforma VTEX también hay una funcionalidad para unificar la comunicación por email con el cliente, el Conversation Tracker.

Todos los datos del cliente se ingresan en el momento del cierre del pedido y no se pueden cambiar aquí. Para ver y administrar estos datos, usted puede acceder al Master Data.]

<div class="alert alert-info">
Si su tienda solo actúa como seller de un pedido, no se mostrará el correo electrónico del cliente. Entendemos que la relación del cliente es con el marketplace, por lo que no es recomendable compartir sus datos con el seller sin consentimiento previo.
  </div>

### Valor total

Se muestran detalles de los valores del pedido, como descuentos, envío, valor del producto, cupón, etc.

### Promociones y marketing

Este card muestra las promociones que se aplicaron sobre el monto del pedido, así como las asociaciones utilizadas para ese pedido.

### Estado del pedido

Este es el status actual del pedido de acuerdo con el momento en que el pedido se encuentra dentro del [flujo del pedido](/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/4811ExCe3WrEiRMV3sy9n8).

### Flujo

El flujo de pedidos se puede ver a través de un __Diagrama__ o de __Interacciones__. Para una descripción más simple, recomendamos usar el Diagrama. Las interacciones son principalmente útiles para interpretar errores o encontrar detalles de flujo específicos.

### Items para facturar

Muestra información relacionada con los items del pedido. Al hacer clic en los tres puntos, usted puede modificar la factura y tomar algunas medidas relacionadas con el pedido. Sin embargo, se recomienda que redoble su atención al realizarlos.

El botón __Facturar paquete__ envía los documentos fiscales de la compra al email del cliente y solo debe activarse cuando la transacción completa ya está aprobada.

El card __Dirección de entrega__ muestra la información sobre la entrega del pedido.

Esta información se ingresó al momento del cierre del pedido y no se puede cambiar. Al igual que los datos del cliente, los datos de entrega se pueden ver y administrar en el Master Data.

### Pago

Muestra un resumen de la información de pago del pedido.

### Linea del tiempo

Ilustra todo el proceso de transición de los estados de un pedido, incluido el método de pago utilizado y los correos electrónicos intercambiados con el cliente.

Una feature que puede ser útil para su operación es la de __comentarios__: usted puede ingresar comentarios en la línea de tiempo, visibles solo para la tienda, nunca para el cliente.
