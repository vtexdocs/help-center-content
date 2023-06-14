---
title: 'La bandera "Aplicar el descuento sólo a la opción de envío más barata" no funciona como se esperaba'
id: 15irjH6rNkHhkBeRNn9RUI
status: PUBLISHED
createdAt: 2022-10-05T18:01:57.821Z
updatedAt: 2022-11-25T22:11:49.524Z
publishedAt: 2022-11-25T22:11:49.524Z
firstPublishedAt: 2022-10-05T18:01:58.840Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: la-bandera-aplicar-el-descuento-solo-a-la-opcion-de-envio-mas-barata-no-funciona-como-se-esperaba
locale: es
kiStatus: Backlog
internalReference: 672567
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



El comportamiento inesperado ocurre para pedidos con más de 1 artículo y para escenarios en los que al menos uno de los artículos tiene una ventana de entrega que no se comparte con otros artículos, sólo uno.

Ejemplo: Promoción de envío gratuito con esta restricción.

Carrito:
Artículo 1 - Ventana de entrega A, Ventana de entrega B
Artículo 2 - Ventana de entrega A, Ventana de entrega B
Artículo 3 - Ventana de entrega A, Ventana de entrega B, Ventana de entrega C.

En este caso, la opción más barata para toda la cesta sería la Ventana de Entrega C, aunque no sea una opción para los artículos 1 y 2.

El comportamiento esperado sería considerar las opciones más baratas que están realmente disponibles para todo el carro.



## Simulación



1. Crear una promoción de envío gratuito que tenga una restricción "Sólo aplicar el descuento a la opción de envío más barata";
2. Añade al carrito artículos con opciones de envío comunes y un artículo con una diferente que no es aplicable para los otros artículos;
3. 3. Compruebe que la promoción establece un envío gratuito para todos los artículos excepto el que tiene una opción de entrega diferente.



## Workaround



- Habilitar la opción de entrega diferente para los demás artículos de la cesta;
- Eliminar la opción de entrega diferente para el artículo que la promoción no se está aplicando correctamente;
- Eliminar la bandera de restricción "Sólo aplicar el descuento a la opción de envío más barata".

