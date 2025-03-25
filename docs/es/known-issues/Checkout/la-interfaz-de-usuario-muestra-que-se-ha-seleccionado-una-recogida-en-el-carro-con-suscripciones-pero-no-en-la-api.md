---
title: 'La interfaz de usuario muestra que se ha seleccionado una recogida en el carro con suscripciones, pero no en la API.'
id: 6WUGylIHWZtfeAm7hplYHD
status: PUBLISHED
createdAt: 2024-03-08T19:08:16.010Z
updatedAt: 2024-03-08T19:08:17.012Z
publishedAt: 2024-03-08T19:08:17.012Z
firstPublishedAt: 2024-03-08T19:08:17.012Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-shows-a-pickup-was-selected-in-cart-with-subscriptions-but-it-wasnt-in-api
locale: es
kiStatus: Backlog
internalReference: 996976
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Las opciones de recogida se ofrecen a los compradores en un carro con un artículo con una suscripción. Cuando se selecciona una de las opciones de recogida, el proceso de pago cambia automáticamente a entrega, pero la interfaz de usuario sigue mostrando que se ha seleccionado la opción de recogida.



## Simulación



- Configurar una suscripción;
- Añadir el artículo con la suscripción al carrito;
- En el paso de envío, seleccione "Recoger en tienda";
- Compruebe el orderForm a través de la API, y se seleccionará la entrega.



## Workaround


Abra un ticket al Soporte de VTEX solicitando habilitar puntos de recogida para pedidos de suscripción.




