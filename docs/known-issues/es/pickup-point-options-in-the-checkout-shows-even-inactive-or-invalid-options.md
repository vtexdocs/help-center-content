---
title: 'Las opciones del punto de recogida en la caja muestran incluso las opciones inactivas o no válidas'
id: 4LF45BWQxDh6r7Bk7chu4P
status: PUBLISHED
createdAt: 2022-05-31T18:07:23.568Z
updatedAt: 2022-11-25T21:52:19.067Z
publishedAt: 2022-11-25T21:52:19.067Z
firstPublishedAt: 2022-05-31T18:07:24.033Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: las-opciones-del-punto-de-recogida-en-la-caja-muestran-incluso-las-opciones-inactivas-o-no-validas
locale: es
kiStatus: Backlog
internalReference: 328464
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El modal de puntos de recogida, desde el checkout, muestra en azul las opciones válidas como SLA calculadas para el carrito y en gris otras opciones que no estaban calculadas previamente como SLA, para que el comprador pueda conocer estas opciones e incluso comprobar su disponibilidad bajo demanda. Estas opciones provienen de la API `/api/checkout/pub/pickup-points` (que no es más que un proxy al servicio de Logística), que listará todos los puntos de recogida de la tienda.

El problema es que esta API no filtra
- las recogidas desactivadas
- su relación con los muelles de carga y las políticas de envío
- y si son válidos para el canal de ventas/política comercial actual

De este modo, listará opciones no válidas para el comprador.



## Simulación


Tener una tienda con algunas recogidas desactivadas y/o sin relación con el canal de venta actual.



## Workaround


No hay ninguna solución conocida.

