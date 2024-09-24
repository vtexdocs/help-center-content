---
title: 'Cómo funcionan los pedidos incompletos'
id: tutorials_294
status: PUBLISHED
createdAt: 2017-04-27T22:09:39.566Z
updatedAt: 2023-03-29T23:26:00.473Z
publishedAt: 2023-03-29T23:26:00.473Z
firstPublishedAt: 2017-04-27T23:03:13.801Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: understanding-incomplete-orders
locale: es
legacySlug: como-encontrar-un-pedido
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Siempre que un pedido no esté listado en [Todos los pedidos](https://help.vtex.com/es/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi) sin ningún filtro, él puede estar como incompleto.

El estado de incompleto es cuando el pedido no está con todas informaciones completas para su finalización en la plataforma.

Además, todos los pedidos incompletos no tienen Workflow y ese es un comportamiento esperado por el sistema. 

Como un pedido incompleto fue interrumpido, activar un Workflow para una situación inactiva no sería funcional. 

>❗ En el caso de un pedido incompleto, recomendamos que se vuelva a hacer el pedido en la tienda. Los pedidos incompletos sirven únicamente como registro, por lo que la plataforma no realizará nuevas solicitudes para este tipo de pedidos. Por lo tanto, si un pedido está incompleto y el cliente quiere realizarlo, debe crear un nuevo pedido con los mismos ítems.

De este modo, el proceso continúa como de costumbre.

## Motivos más comunes

### Pedido negado en la autorización previa por la operadora de tarjeta de crédito

Después de finalizada la compra, realizamos el procesamiento en tiempo real con la operadora de crédito. Si se niega el pago, regresamos el mensaje de que el pago fue negado y requerimos que se elija una nueva forma de pago. En este momento, registramos el pedido como incompleto.

Si el cliente elige una nueva forma de pago y esta es aprobada, se creará e inscribirá un nuevo en **Todos los pedidos**.

### Pago efectuado en un ambiente externo 

Cuando se está efectuando el pago en un ambiente externo como Paypal, por ejemplo, el pedido quedará como incompleto hasta que nuestro módulo de Pagos reciba una respuesta de aprobado.

### Desistencia del cliente

La desistencia de la finalización de compra por el cliente después de hacer clic en el botón finalizar compra.

## ¿Cómo identificar esos pedidos?

En los [filtros](https://help.vtex.com/es/tutorial/filtrar-todos-pedidos--tutorials_192) de la página **Todos los pedidos**, en la pestaña **Status**, existe la opción **Status completado**. Basta señalar la opción `Incompleto` para que se listen todos los pedidos en esa situación.

