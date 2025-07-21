---
title: "Algunos caracteres especiales no se eliminan de las búsquedas de productos ni de la indexación"
id: 2yarH7RCUQWKZ0I435hGcD
status: PUBLISHED
createdAt: 2023-11-29T20:26:50.510Z
updatedAt: 2024-07-01T18:49:20.705Z
publishedAt: 2024-07-01T18:49:20.705Z
firstPublishedAt: 2023-11-29T20:26:51.145Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: algunos-caracteres-especiales-no-se-eliminan-de-las-busquedas-de-productos-ni-de-la-indexacion
locale: es
kiStatus: No Fix
internalReference: 944659
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Algunos caracteres especiales no se eliminan completamente de las palabras clave buscadas o de la indexación de productos, lo que puede afectar a las búsquedas en algunos escenarios específicos.

Los caracteres conocidos que dan lugar a este escenario son las comas (`,`), los puntos (`.`) y los dos puntos (`:`). Los demás suelen ignorarse y no generan problemas.

Al registrar un producto, las comas y los puntos al final de las palabras se eliminan al indexar el producto, pero si están en medio de una palabra, se mantienen. Las palabras clave se dividen por espacios.

Durante la búsqueda, los dos puntos son un valor reservado e invalidarán toda la consulta de texto.


##

## Simulación


Para comas y puntos, un campo de producto que tiene un valor como palabras clave separadas por comas como `"coche,marcaespecial,azul"` se leerá como una sola palabra. La búsqueda de `marcaespecial` no encontrará este producto.

En el caso de los dos puntos, un producto con el nombre `"vino tinto: versión especial"` puede encontrarse buscando por `vino`, pero buscar por `vino: versión especial` no funcionará. Toda la búsqueda será inválida y no se aplicará ningún filtro de texto.



## Workaround


En el caso de las comas y los puntos, se requiere un espacio después del carácter para dividir las palabras clave.

Para una búsqueda usando dos puntos, no hay solución.




