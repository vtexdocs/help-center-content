---
title: "Es posible que la búsqueda de productos mediante sinónimos no muestre todos los productos del término original."
id: 5mZGQRhsQ487FNgrgvNC5H
status: PUBLISHED
createdAt: 2024-09-06T18:15:56.706Z
updatedAt: 2025-04-11T16:37:14.458Z
publishedAt: 2025-04-11T16:37:14.458Z
firstPublishedAt: 2024-09-06T18:15:57.593Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: es-posible-que-la-busqueda-de-productos-mediante-sinonimos-no-muestre-todos-los-productos-del-termino-original
locale: es
kiStatus: Backlog
internalReference: 1094028
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los resultados al buscar el sinónimo pueden no incluir todos los productos del término original.

Este comportamiento se debe a que los productos asociados al término original no se reindexan para incluir el sinónimo después de crear o actualizar un sinónimo. La notificación de reindexación de estos productos puede perderse en el proceso.



## Simulación


Para asegurarse de que se está produciendo este problema, tenga en cuenta las siguientes pruebas:

1 - El número de resultados difiere entre sí.

- En **Admin > Tienda > Búsqueda inteligente > Sinónimos**, cree o actualice un sinónimo unidireccional.
- A continuación, en **Admin > Tienda > Búsqueda inteligente > Búsqueda explicada**, compare los resultados al buscar el término original y el sinónimo.
- Al comparar los resultados, los resultados al buscar el sinónimo no incluyen todos los productos al buscar el término específico original.

2 - La última fecha de reindexación de un producto es anterior a la fecha de creación del sinónimo.

- Elija un producto del término original que no aparezca al buscar con el sinónimo.
- Compara las fechas entre la última fecha de reindexación del producto (**Admin > Tienda > Búsqueda inteligente > Historial de indexación** ) y la fecha de creación/actualización del sinónimo (**Admin > Tienda > Búsqueda inteligente > Sinónimos**).
- Si la última fecha de reindexación de un producto es anterior a la fecha de creación del sinónimo, entonces este caso puede encajar con este KI.



## Workaround


Abra un ticket al equipo de CX con la información de las pruebas para que podamos reindexar los productos afectados.





