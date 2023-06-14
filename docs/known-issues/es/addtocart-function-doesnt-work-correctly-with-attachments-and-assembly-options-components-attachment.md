---
title: 'La función addToCart no funciona correctamente con los anexos y el anexo del componente de opciones de montaje.'
id: 6I8vn2K7PWLRwIj2YTY7nZ
status: PUBLISHED
createdAt: 2023-05-23T15:40:36.343Z
updatedAt: 2023-05-23T15:40:37.588Z
publishedAt: 2023-05-23T15:40:37.588Z
firstPublishedAt: 2023-05-23T15:40:37.588Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: la-funcion-addtocart-no-funciona-correctamente-con-los-anexos-y-el-anexo-del-componente-de-opciones-de-montaje
locale: es
kiStatus: Backlog
internalReference: 830495
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La función addToCart no funciona correctamente cuando un producto tiene configuradas opciones de montaje y anexos y uno de los componentes de las opciones de montaje también tiene anexos. Sólo se añadirá al carrito el adjunto del componente.


##

## Simulación



- Configurar un accesorio para un producto;
- Configurar opciones de montaje para el mismo producto en el que uno de los componentes tiene anexos;
- Añadir el producto a la cesta, seleccionando los anexos del producto y del componente;
- Acceder a la caja y comprobar que no se ha añadido el anexo del producto.



## Workaround


N/A




