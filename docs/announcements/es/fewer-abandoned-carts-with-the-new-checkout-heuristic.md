---
title: Menos carritos abandonados con la nueva heurística del Checkout
id: 3XLEhUnRe3jjzUGLbDEZJz
status: CHANGED
createdAt: 2020-05-30T13:08:43.104Z
updatedAt: 2020-11-27T19:40:17.125Z
publishedAt: 2020-06-02T18:09:53.394Z
contentType: updates
productTeam: Shopping
author: authors_24
slug: menos-carritos-abandonados-con-la-nueva-heuristica-del-checkout
legacySlug: menos-carritos-abandonados-con-la-nueva-heuristica-del-checkout
announcementImageID: 
announcementSynopsisES: Cambiamos la lógica para el orden de sellers en las cuentas franquicia, reduciendo así los carritos abandonados.
---

VTEX hizo un cambio en la lógica que define el orden de selección de los sellers que se mostrarán en el checkout de las tiendas que utilizan el modelo de [cuenta franquicia](https://help.vtex.com/es/tutorial/what-are-franchise-account-and-seller-white-label--5orlGHyDHGAYciQ64oEgKa). Anteriormente, el checkout asumía que los sellers tenían inventario y seleccionaba a todos los que hacían entrega en la dirección del pedido. A partir de ahora, el checkout selecciona primero apenas a los sellers que pueden atender a esa dirección y luego filtra a los sellers con inventario de los productos en el carrito.

Este cambio impide que se seleccionen sellers que están disponibles para la entrega, pero que no cuentan con inventario. La consecuencia es un proceso más eficiente de selección de sellers para las tiendas que utilizan el modelo de cuenta franquicia, lo que reduce los casos de ruptura de carrito y contribuye a aumentar la rotación de inventario y la capilaridad de su tienda.

## ¿Cuál es el beneficio?
Hicimos este cambio en la heurística del checkout (la lógica que determina el orden de selección de los sellers) con el objetivo de reducir los pedidos no completados debido a la falta de disponibilidad de ítems en el inventario. Desde que se hizo el cambio, observamos una reducción del 40% en el número de pedidos no completados en este escenario, lo que aumentó en 1 punto porcentual la cantidad de carritos disponibles para completar la compra. Este es un excelente resultado, ya que así reducimos el número de carritos abandonados. Esto significa más ventas concluidas para las tiendas VTEX.

## ¿Mi tienda necesita tomar alguna medida?
No. Este cambio tiene un impacto en la eficiencia de la selección de los sellers por el checkout y, por consiguiente, en la tasa de conversión de las tiendas que utilizan el modelo de cuenta franquicia. Este es un cambio en la heurística, que no requiere ninguna acción por parte del administrador de la tienda.

[Conozca más sobre cuentas franquicias en  VTEX →](https://help.vtex.com/es/tutorial/what-are-franchise-account-and-seller-white-label--5orlGHyDHGAYciQ64oEgKa).
