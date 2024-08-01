---
title: 'API de búsqueda en catálogos limitada a 2.500 resultados'
id: 33kKjUGKN5tlxvksnbnw7n
status: PUBLISHED
createdAt: 2023-08-31T14:59:31.132Z
updatedAt: 2023-08-31T14:59:31.766Z
publishedAt: 2023-08-31T14:59:31.766Z
firstPublishedAt: 2023-08-31T14:59:31.766Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: api-de-busqueda-en-catalogos-limitada-a-2500-resultados
locale: es
kiStatus: Backlog
internalReference: 891184
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al utilizar la API de Búsqueda por Catálogo el máximo de resultados obtenidos es de 2500, aunque haya más productos.
La paginación es hasta 50 productos y funciona correctamente hasta que el parámetro _from alcanza el número de 2500. Cuando establecen `_from` por encima de 2500 obtienen `"Parameter _from can't be greater than 2500."`.


##

## Simulación


Esta situación puede ocurrir al solicitar la API utilizando postman o utilizando el catálogo compartido en las cuentas del portal del vendedor (utiliza la misma API en la interfaz de usuario).

Cuando se utiliza la API: - hacer la solicitud utilizando el paramenter `_from` por encima de 2500
Al utilizar el catálogo compartido - omita la paginación en la pestaña de productos disponibles hasta llegar a 2500. Las páginas siguientes no se actualizarán y mostrarán los mismos resultados que la página anterior a 2500.



## Workaround


N/A





