---
title: 'El algoritmo de selección del vendedor no tiene en cuenta la disponibilidad real del artículo para elegir la mejor opción'
id: 4wT0pC5gzxFvh7nAy7CHK7
status: PUBLISHED
createdAt: 2022-07-07T17:40:45.874Z
updatedAt: 2022-11-25T21:51:20.721Z
publishedAt: 2022-11-25T21:51:20.721Z
firstPublishedAt: 2022-07-07T17:40:46.790Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-algoritmo-de-seleccion-del-vendedor-no-tiene-en-cuenta-la-disponibilidad-real-del-articulo-para-elegir-la-mejor-opcion
kiStatus: Backlog
internalReference: 360097
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El algoritmo de selección de vendedores tiene en cuenta el stock de los artículos para seleccionar el mejor vendedor de marca blanca para un contexto determinado.
El problema es que esta API no tiene en cuenta si la cantidad proviene de un almacén válido para el salesChannel, con una estrategia de envío válida, y ni siquiera si el almacén está habilitado. Así que el contexto es pobre para seleccionar el mejor vendedor.
En un segundo momento, el checkout hace una solicitud de simulación completa en el vendedor seleccionado, y sólo aquí descubrirá que en verdad el artículo no está disponible. Pero en este momento, ya no se puede aplicar un vendedor alternativo de etiqueta blanca.



## Simulación



- Para tener una tienda con vendedores de marca blanca
- Tener más de un vendedor
  - vendedor A con una cantidad de stock alta, pero el almacén deshabilitado
  - vendedor B con una cantidad de stock baja, pero el almacén habilitado y con una estrategia de envío válida
- Hacer una simulación y observar que la caja elegirá el vendedor A en lugar del vendedor B



## Workaround


La tienda necesita asegurarse de que, si algún vendedor está habilitado, debe tener una estrategia de envío válida para cada almacén. Si algún almacén no se va a utilizar, su saldo debe actualizarse a cero. De lo contrario, se corre el riesgo de seleccionar un vendedor que no pueda cumplir con el artículo.

