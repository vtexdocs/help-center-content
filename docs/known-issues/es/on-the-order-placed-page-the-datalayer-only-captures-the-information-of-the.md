---
title: 'En la página Order Placed, el DataLayer sólo captura la información del primer pago dentro de la transacción (transactionPaymentType)'
id: 5cTy3dCZ6x7FNMKvBbc9s8
status: PUBLISHED
createdAt: 2023-01-04T21:06:17.111Z
updatedAt: 2023-01-10T19:08:17.450Z
publishedAt: 2023-01-10T19:08:17.450Z
firstPublishedAt: 2023-01-04T21:14:00.744Z
contentType: knownIssue
productTeam: Order Management
author: authors_84
tag: Order Management
slug: en-la-pagina-order-placed-el-datalayer-solo-captura-la-informacion-del
locale: es
kiStatus: Fixed
internalReference: 727339
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>

Al finalizar la compra, el cliente va a la página conocida como **Order Placed**, en esta página tenemos un evento **Request Capture** *(`RequestType: "orderPlaced"`) de nuestra plataforma que captura algunos detalles del pedido y sirve para alimentar de información el **DataLayer**.

El problema que tenemos en este momento es que en el objeto "**transactionPaymentType**", **en el caso de pedidos con más de un pago**, sólo estamos mostrando el primero, lo que deja la información incompleta para quienes utilizan este tipo de datos.

\*``Podemos ver este evento (_`RequestType: "orderPlaced"`_) abriendo el inspector del navegador, buscando la pestaña "**Network**", y filtrando por "**events**" es posible ver este detalle en la sección **Payload**.__

```
    *Encabezados
    URL de la petición: https://rc.vtex.com.br/api/events
    Método de petición: POST

    *Carga de pago
    Objeto con todos los detalles
``` 

## Simulación

1. Completar pedidos con más de un pago
2. Cuando llegue a la página de confirmación del pedido (**Order Placed**), abra el inspector en la pestaña **Network** y valide el evento `RequestType: "orderPlaced"`.
3. Dentro de esos detalles, busca el objeto transactionPaymentType. Ahí verás que sólo aparece un elemento. Lo correcto sería mostrar todos los detalles relativos a los otros pagos

## Workaround

En este momento no tenemos una solución a este problema, sin embargo, en caso de que necesite más detalles de la transacción, con el ID es posible consultar más información con nuestras APIs.

