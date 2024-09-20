---
title: 'Es posible que la búsqueda de productos mediante sinónimos no devuelva todos los productos del término original.'
id: 5mZGQRhsQ487FNgrgvNC5H
status: PUBLISHED
createdAt: 2024-09-06T18:15:56.706Z
updatedAt: 2024-09-09T12:27:02.861Z
publishedAt: 2024-09-09T12:27:02.861Z
firstPublishedAt: 2024-09-06T18:15:57.593Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: es-posible-que-la-busqueda-de-productos-mediante-sinonimos-no-devuelva-todos-los-productos-del-termino-original
locale: es
kiStatus: Backlog
internalReference: 1094028
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Los resultados al buscar el sinónimo pueden no incluir todos los productos al buscar el término específico original.

Cuando se crea un sinónimo, todos los productos asociados al término de búsqueda específico deberían volver a indexarse para incluir el sinónimo. Sin embargo, los productos no se vuelven a indexar después de crear o actualizar un sinónimo unidireccional.

Este comportamiento se debe a que la notificación de reindexación de estos productos puede perderse en el proceso.


##

## Simulación


Para asegurarse de que este problema está ocurriendo, tenga en cuenta las siguientes evidencias:

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





