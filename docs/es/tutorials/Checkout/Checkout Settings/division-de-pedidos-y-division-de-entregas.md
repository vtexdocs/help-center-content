---
title: 'División de pedidos y división de entregas'
id: jQvzA6QgSd51e2p6bthoV
status: PUBLISHED
createdAt: 2021-09-27T21:06:59.520Z
updatedAt: 2023-09-23T01:00:23.558Z
publishedAt: 2023-09-23T01:00:23.558Z
firstPublishedAt: 2021-09-27T21:12:55.418Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: order-split-and-delivery-split
locale: es
legacySlug: division-de-pedidos-y-division-de-entregas
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

En la plataforma VTEX, hay situaciones en las que el cliente final recibe su pedido en diferentes paquetes. Este artículo ofrece una visión general de la **división de paquetes (o división de entregas)** y de la **división de pedidos** e indica las configuraciones que puede realizar el administrador de la tienda.

Ve a continuación las principales diferencias entre los escenarios de división de pedidos y de paquetes.

* **[División de pedidos](#division-de-pedidos):** se produce cuando hay más de un _seller_ que atiende la misma compra. Esto significa que si hay tres _sellers_ para atender una misma compra, se generan tres pedidos. 
* **[División de paquetes](#division-de-paquetes-entregas):** se produce cuando hay más de una entrega para un mismo pedido. Por ejemplo, cuando un único _seller_ es responsable de la entrega, pero el pedido se entrega en más de un envío. 

<div class = "alert alert-info">
Siempre que hay una división de pedidos, hay una división de paquetes. Además, un seller puede optar por dividir un mismo pedido en más de un paquete; así, al final de la compra, el número de paquetes siempre será mayor o igual que el número de pedidos generados.
</div>

Para facilitar la identificación de los casos en los que hay división de pedidos y división de entregas, mira algunos ejemplos a continuación:

## División de pedidos

Cuando se necesita más de un _seller_ para atender el pedido.

### Ejemplos:

* **El cliente selecciona diferentes _sellers_:** al realizar una compra, el cliente selecciona a propósito ítems de diferentes tiendas. Es posible que seleccione productos del _marketplace_ y de un _seller_, o de dos o más _sellers_.

    En este caso, habrá entregas separadas para un mismo pedido — _división del pedido y de la entrega_ — y la plataforma divide automáticamente el pedido para el administrador de la tienda, ya que cada _seller_ es responsable de su entrega. 

* **División entre _Sellers White Label:_** el cliente realiza las compras, pero la plataforma elige quién entrega el pedido. La elección del _seller_ que entregará los ítems se basará en criterios de prioridad. En este caso, el cliente no elige a propósito ítems de diferentes _sellers_, ni tiene información sobre qué _sellers_ le entregarán el pedido. 

    Cuando esto ocurre, al final de la compra el administrador de la tienda ve el pedido dividido — _división del pedido y de la entrega._ La elección de los _sellers_ se hace automáticamente. Si quieres saber cómo se hace, consulta el artículo [Algoritmo de selección de Sellers White Label](/pt/tutorial/algoritmo-de-selecao-de-white-label-sellers--3MemNQ4pKkWCpMdzI27AHa).

## División de paquetes (entregas)

El pedido lo atiende un solo _seller_, pero es necesario realizar más de una entrega para que todos los ítems del pedido lleguen al destinatario.

### Ejemplos:

* **Diferentes modalidades de entrega:** esto ocurre, por ejemplo, cuando en el mismo carrito hay un ítem con entrega expresa y otro con entrega regular. En este caso, para que la venta se realice y se pueda entregar la mayor cantidad posible de ítems en el carrito, la plataforma _divide la entrega._

    Esta división se realiza de forma automática y nativa para las tiendas que tienen Checkout V6. La configuración viene activa por defecto para que sea posible realizar compras con diferentes modalidades de entrega en el mismo carrito.

    Esta división se realiza de forma automática y nativa para las tiendas que cuentan con Checkout V6, a través del campo `allowMultipleDeliveries` indicado como `true` en la API [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm). La configuración viene activa por defecto para que sea posible realizar compras con diferentes modalidades de entrega en el mismo carrito.

<div class="alert alert-danger">
  No recomendamos operar la tienda con el campo <code>allowMultipleDeliveries</code> indicado como <i>false</i>. En esta configuración, cuando hay artículos en el carrito que no tienen ningún método de entrega en común, es decir, los SLAID son diferentes y el carrito tiene un punto de recogida, no será posible completar el pedido.
</div>

* **Muelles diferentes:** una misma tienda ofrece todos los ítems de un pedido, pero en el cálculo de la ruta logística están asociados a diferentes muelles. Entonces hay que _dividir los paquetes de entrega_, pero sin dividir el pedido entre diferentes tiendas. La plataforma lo hace automáticamente.
