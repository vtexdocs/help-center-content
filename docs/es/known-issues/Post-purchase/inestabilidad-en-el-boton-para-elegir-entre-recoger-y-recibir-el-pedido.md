---
title: "Inestabilidad en el botón para elegir entre recoger y recibir el pedido"
id: 54pnP8pZGWSo2VZKhOLBKC
status: PUBLISHED
createdAt: 2021-09-08T17:53:29.698Z
updatedAt: 2022-12-22T20:41:12.728Z
publishedAt: 2022-12-22T20:41:12.728Z
firstPublishedAt: 2021-09-08T17:59:00.783Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: inestabilidad-en-el-boton-para-elegir-entre-recoger-y-recibir-el-pedido
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Observamos una inestabilidad al elegir el tipo de entrega en el checkout, al alternar entre las opciones de recoger y recibir el pedido. Si se introduce el código postal en la opción de recibir el pedido y se cambia a la opción de recogerlo, cuando se vuelve a seleccionar la opción de recibirlo, se pierde el código postal introducido. También es posible que en lugar de perderse el código postal, la página cargue un nuevo código postal incorrecto.


## Simulación

1. Acceda a la tienda;
2. Añada productos al carrito;
3. Proceda al _checkout_;
4. En el campo de entrega, seleccione el <i class="fas fa-toggle-on"></i> para recibir el pedido e introduzca el código postal; 
5. Cambie el <i class="fas fa-toggle-on"></i> a punto de recogida y seleccione una ubicación;
6. Cambie de nuevo el <i class="fas fa-toggle-on"></i> a recibir el pedido.
7. Observe si los datos de la opción de recibir el pedido (introducidos en el paso 4) siguen siendo los mismos.

Debido a la inestabilidad, no todas las simulaciones resultarán en el escenario descrito.


## Workaround

No hay ningún workaround para este escenario.


