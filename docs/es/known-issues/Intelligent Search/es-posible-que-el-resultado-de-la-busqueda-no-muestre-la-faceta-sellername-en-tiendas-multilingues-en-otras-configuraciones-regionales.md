---
title: "Es posible que el resultado de la búsqueda no muestre la faceta sellerName en tiendas multilingües en otras configuraciones regionales."
id: 1KD5Q3GTtx379yKHUFo38O
status: PUBLISHED
createdAt: 2025-02-25T23:17:55.030Z
updatedAt: 2025-06-06T18:18:44.623Z
publishedAt: 2025-06-06T18:18:44.623Z
firstPublishedAt: 2025-02-25T23:17:55.741Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: es-posible-que-el-resultado-de-la-busqueda-no-muestre-la-faceta-sellername-en-tiendas-multilingues-en-otras-configuraciones-regionales
locale: es
kiStatus: Backlog
internalReference: 1186137
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



## Simulación



Los pasos para simular el Problema conocido son:

1. En la herramienta Postman, u otra herramienta de desarrollador, crear una petición API del endpoint Obtener lista de las facetas posibles para una consulta dada.
2. En la petición API, añade una configuración regional que no sea la predeterminada al parámetro `locale` de la cadena de consulta.
3. 3. Ejecute el endpoint.

El resultado de la búsqueda no devuelve la faceta `sellerName`.



## Workaround


N/A




