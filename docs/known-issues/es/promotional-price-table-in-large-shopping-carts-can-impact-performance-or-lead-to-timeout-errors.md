---
title: 'La tabla de precios promocionales en carros de la compra de gran tamaño puede afectar al rendimiento o provocar errores de tiempo de espera.'
id: 22H47mc9qYLdzk2sFkbBut
status: PUBLISHED
createdAt: 2023-12-07T15:47:28.360Z
updatedAt: 2023-12-07T15:57:49.789Z
publishedAt: 2023-12-07T15:57:49.789Z
firstPublishedAt: 2023-12-07T15:47:28.972Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: la-tabla-de-precios-promocionales-en-carros-de-la-compra-de-gran-tamano-puede-afectar-al-rendimiento-o-provocar-errores-de-tiempo-de-espera
locale: es
kiStatus: Backlog
internalReference: 949389
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Cuando tenemos una tienda con tablas de precios promocionales creadas y grandes carros de compra aplicando las promociones, provoca ralentizaciones en el rendimiento de la compra y provoca errores de timeout en el carro.

Cualquier acción en el carrito puede desencadenar errores, como añadir artículos, ediciones, introducir código postal, etc comprometerá el rendimiento de la compra.

No podemos saber con precisión qué número de tablas de precios promocionales que se calculan en el carro o la cantidad de artículos añadidos en el carro comenzará a desencadenar los errores de tiempo de espera o ralentizar el rendimiento, de lo que se analizó que puede suceder con cualquier cantidad significativa.



##

## Simulación



Crear varias tablas de precios promocionales y un carrito de la compra con muchos artículos (aquí no podemos señalar un número claro, como 50 o 100, depende de las promociones)



## Workaround



Desafortunadamente, no tenemos ninguna solución para esto,
desactivar las promociones y utilizar el módulo de precios para insertar los precios ayudaría.





