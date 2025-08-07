---
title: 'Cambio de pedido'
id: 2IK9mwQjBKseQmE8K8saO8
status: PUBLISHED
createdAt: 2018-02-20T19:29:21.502Z
updatedAt: 2024-07-08T14:22:27.104Z
publishedAt: 2024-07-08T14:22:27.104Z
firstPublishedAt: 2018-02-20T20:24:08.083Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: order-replacement
locale: es
legacySlug: permitir-cambios-de-pedidos-ya-cerrados, como-funciona-la-sustitucion-de-pedidos
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

**Cambio de pedidos** es la funcionalidad que permite a un cliente cambiar los datos de un pedido sin tener que ponerse en contacto con el equipo de soporte o realizar un nuevo pedido.

[Sustituir ítems](/es/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190) es diferente a cambio de pedidos. Al cambiar un pedido, el cliente solicita cambios en el pedido, y al sustituir ítems, la tienda modifica el pedido.

<div class="alert alert-danger">
Esta funcionalidad está disponible para todas las tiendas, sin embargo, debes activarla para que tus clientes puedan utilizarla. 
</div>

En este artículo puedes consultar:

* [Cómo activar la funcionalidad](#como-activar-la-funcionalidad)
* [Cuáles son las condiciones para hacer un cambio](#condiciones-para-el-cambio)
* [Cómo utiliza la funcionalidad tu cliente](#uso-de-la-funcionalidad-por-el-cliente)

## Cómo activar la funcionalidad

<div class="alert alert-danger"> Si el Cambio de pedidos se activa en tiendas cuya página Mis pedidos tiene personalización, debes volver a crear la personalización. La funcionalidad sustituye la versión antigua de la página (que está personalizada) por una nueva página no personalizada. Para estos casos, recomendamos que antes de activar la funcionalidad en tu tienda, utilices un  <a href="https://help.vtex.com/es/tutorial/acceder-al-ambiente-beta--3BHM289568gcSwk2O80Asu"> entorno beta</a> y valides la activación con personalización.
</div>

Para activar la funcionalidad, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pedidos > Configuración**, o escribe *Pedidos* en la barra de búsqueda en la parte superior de la página, y haga clic en *Configuración de la tienda / Pedidos*.
2. En la pestaña **General**, marca la casilla <a class="far fa-check-square"></a> en **Sustitución de pedido**, en _Permitir que los clientes hagan cambios al pedido_.
3. Haz clic en `Guardar`.

## Condiciones para el cambio

Con la funcionalidad activada, ten en cuenta las siguientes condiciones y restricciones para que los clientes puedan hacer cambios en los pedidos.

Para que el cliente pueda realizar cambios en el pedido, deben mantenerse las condiciones comerciales originales. Por lo tanto, las promociones y los descuentos siguen siendo los mismos en el pedido sustituido. Ten en cuenta también que las condiciones comerciales solo se mantienen si el pedido incluye los mismos productos, la misma cantidad de SKU y el mismo precio base del SKU. Si no se mantienen las condiciones comerciales, el pedido se convierte en un nuevo pedido en lugar de una sustitución.

Los clientes pueden modificar un pedido hasta que se facture, a diferencia de los casos en los que el cliente necesita la aprobación de la tienda para cancelar un pedido (como es el caso de un pedido con el status `Listo para manipulación`).

Los datos que se pueden modificar con el cambio de pedidos son:

* Dirección de entrega
* [Tipo de entrega](/es/tutorial/como-se-maneja-el-tipo-de-entrega--tutorials_126)
* Forma de pago
* [SKU](/es/tutorial/que-es-un-sku--1K75s4RXAQyOuGUYKMM68u)

### Restricciones

El cambio de pedidos no es posible en los casos de:

* [Pedidos incompletos](/pt/tutorial/entendendo-os-pedidos-incompletos--tutorials_294): cuando el pedido no contiene toda la información necesaria para ser finalizado en la plataforma.
* Transacción compartida: pedidos con un o más _sellers_ y pago realizado al _marketplace_.
* Pedidos ya modificados por la tienda.
* Pedidos con los siguientes status:
    * Verificando factura
    * Facturado
    * Solicitar cancelación
    * Cancelación solicitada
    * Cancelando
    * Cancelado
    * Sustituido
    * Procesando

## Uso de la funcionalidad por el cliente 

Con la funcionalidad activada, los clientes de tu tienda tienen acceso a una nueva página de seguimiento de los pedidos. El cambio se realiza en la página **Mis pedidos** de la siguiente manera:

* El cliente accede al pedido y hace clic en el botón `Cambiar pedido`.
* Una nueva página estará disponible para que haga los cambios deseados.  

Después de hacer clic en `Cambiar pedido`, el cliente será redirigido al carrito y luego al _checkout._ En el _checkout_, puede realizar los cambios deseados (dirección, tipo de entrega, forma de pago y SKU). El proceso solo se completa cuando se finaliza la compra. Al cliente no se le cobra dos veces por el mismo pedido.

<div class="alert alert-warning">
El pago realizado anteriormente solo puede utilizarse si el valor del nuevo pedido es igual al del pedido original. Si no se utiliza el pago anterior con tarjeta de crédito, este se reembolsa automáticamente.
<p>En el caso de las formas de pago que expiran en un plazo de 2 días (como el boleto bancario), no se puede reutilizar el pago.
</div>
