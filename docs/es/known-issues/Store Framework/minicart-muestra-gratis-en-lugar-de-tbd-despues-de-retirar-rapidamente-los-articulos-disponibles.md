---
title: 'Minicart muestra "GRATIS" en lugar de "TBD" después de retirar rápidamente los artículos disponibles'
id: 7evKSOGKuKlSQf9UykLWkV
status: PUBLISHED
createdAt: 2025-06-23T13:05:51.370Z
updatedAt: 2025-06-23T13:05:52.516Z
publishedAt: 2025-06-23T13:05:52.516Z
firstPublishedAt: 2025-06-23T13:05:52.516Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: minicart-muestra-gratis-en-lugar-de-tbd-despues-de-retirar-rapidamente-los-articulos-disponibles
locale: es
kiStatus: No Fix
internalReference: 1248177
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un usuario añade un SKU no disponible al carrito y luego añade y quita rápidamente artículos disponibles, el minicarrito muestra incorrectamente el total como "GRATIS" en lugar de "TBD". Esto ocurre debido a una falta de sincronización adecuada con el `orderForm`, especialmente cuando las interacciones se producen rápidamente.


##

## Simulación



1. Añade una SKU al carrito.
2. Establecer el código postal de entrega a uno donde el producto inicial no está disponible.
3. Vuelva a la página de inicio y añada las SKU disponibles.
4. Elimine rápidamente las SKU disponibles del minicarro.
5. Observe que el mensaje de precio total permanece como "GRATIS" en lugar de actualizarse a "TBD".



## Workaround


Elimine artículos a un ritmo más lento para permitir una sincronización adecuada. Esto reduce la posibilidad de que se produzca el problema.





