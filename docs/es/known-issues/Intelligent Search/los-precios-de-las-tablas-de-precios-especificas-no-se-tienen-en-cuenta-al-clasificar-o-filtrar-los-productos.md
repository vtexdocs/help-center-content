---
title: "Los precios de las tablas de precios específicas no se tienen en cuenta al clasificar o filtrar los productos."
id: 5P7TkO8THxwNBJXgwnaqxe
status: PUBLISHED
createdAt: 2024-08-22T19:26:24.575Z
updatedAt: 2024-08-22T19:28:25.505Z
publishedAt: 2024-08-22T19:28:25.505Z
firstPublishedAt: 2024-08-22T19:28:25.505Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: los-precios-de-las-tablas-de-precios-especificas-no-se-tienen-en-cuenta-al-clasificar-o-filtrar-los-productos
locale: es
kiStatus: Backlog
internalReference: 1085895
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las tablas de precios no forman parte del flujo de indexación de productos y no están disponibles para el servicio de búsqueda a nivel de índice. Esto crea la limitación de que la búsqueda no puede ordenar y filtrar productos basándose en las tablas de precios. Los productos se ordenan exclusivamente por el precio de la política comercial.



##

## Simulación


Considerando:

- producto A, política comercial de $10, tabla de precios de $7
- producto B, política comercial de 9 $, tabla de precios de 8 $.

En una navegación con una tabla de precios, la ordenación por precio (ascendente) presentará los productos ordenados como B, luego A según el precio de la política comercial en lugar de A, luego B según el precio de la tabla de precios.


##

## Workaround


N/A





