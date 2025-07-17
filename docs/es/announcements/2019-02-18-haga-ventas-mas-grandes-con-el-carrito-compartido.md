---
title: 'Haga ventas más grandes con el carrito compartido'
id: 1gvY2p1Rc9hjkfyVvOHY2C
status: PUBLISHED
createdAt: 2019-02-18T21:26:10.613Z
updatedAt: 2019-12-31T15:13:41.446Z
publishedAt: 2019-12-31T15:13:41.446Z
contentType: updates
productTeam: Shopping
author: 245tA425AIeioKAk2eaiwS
slugEN: 2019-02-18-close-bigger-deals-with-the-shared-cart
locale: es
legacySlug: haga-ventas-mas-grandes-con-el-carrito-compartido
announcementImageID: ''
announcementSynopsisES: 'El carrito compartido ya está disponible para todas las tiendas, permitiendo que más de un cliente interactúe con él.'
---

Acabamos de lanzar en stable el carrito compartido, funcionalidad que permite a más de un cliente agregar, retirar o actualizar productos y datos de un mismo carrito. Así, su tienda puede realizar mayores ventas y ganar mayor eficiencia operativa, mientras que sus clientes pueden organizarse para aprovechar las promociones.


## Conveniencia para sus clientes, eficiencia para su tienda
Con el carrito compartido, sus clientes tienen la opción de compartir sus compras antes de cerrar el pedido. Esto significa que más de una persona podrá ver, agregar o quitar elementos del carrito.

A través de un nuevo parámetro en la URL del carrito, es posible compartir su enlace. Así, las personas pueden organizarse para comprar juntas en su tienda, aprovechando promociones que inciden en pedidos con un número mayor de artículos. En el lado de la tienda, hay un aumento de la eficiencia en la operación con:

- Oportunidad de mayores ventas
- Menor esfuerzo de logística
- Flujo de pedido único

Más que eso: su operador de televenta puede montar un carrito y compartir con el cliente, para que él complete con su información. Esto elimina la necesidad de repasar datos sensibles, como el CVV de la tarjeta, por teléfono.


## Seguridad en primer lugar
La información sensible, como datos de usuario y dirección, __sólo es visible para el verdadero dueño de la información (y sólo si está conectado)__. Quien recibe el enlace del carrito no puede leer esas informaciones, que aparecen enmascaradas en la pantalla.


## ¿Qué necesitas hacer?
El carro compartido sólo es posible debido a la inclusión de un nuevo parámetro en las URL del checkout: el `orderFormId`. Por lo tanto, es necesario que, si decide utilizar la funcionalidad, usted:

- Adecuar los servicios de rastreo (Google Analytics, por ejemplo) para hacer la lectura correcta del nuevo parámetro.
- Utilice las [API de VTEX](https://github.com/vtex/vtex.js/tree/master/docs/checkout#getorderformexpectedorderformsections) para obtener el identificador del carritto.
- Personalice la página del carrito para que el enlace pase a contar con el ID.

<div class="alert alert-warning">
Recordamos que el carrito compartido es opcional y los cambios citados aquí deben hacerse <strong>sólo por las tiendas que desean usar la funcionalidad</strong>.
</div>

Lea el [artículo sobre el carrito compartido](/es/tutorial/que-es-el-carrito-compartido) y conozca mejor la nueva funcionalidad.
