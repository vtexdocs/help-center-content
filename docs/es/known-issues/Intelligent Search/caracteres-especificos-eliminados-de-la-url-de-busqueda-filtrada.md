---
title: "Caracteres específicos eliminados de la URL de búsqueda filtrada"
id: 3Kh69v05JvswhmIwAUdEhl
status: PUBLISHED
createdAt: 2025-03-18T21:51:08.329Z
updatedAt: 2025-03-18T21:51:09.350Z
publishedAt: 2025-03-18T21:51:09.350Z
firstPublishedAt: 2025-03-18T21:51:09.350Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: caracteres-especificos-eliminados-de-la-url-de-busqueda-filtrada
locale: es
kiStatus: Backlog
internalReference: 1196131
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Algunos caracteres especiales, como la coma, pueden ser eliminados de la URL del filtro. Esto puede generar una colisión entre productos con valores diferentes.


##

## Simulación



Dos productos diferentes con un atributo Tamaño y valores "2,5" y "25" utilizarán la misma URL: "/tamaño/25".

Aunque se vean los dos valores de filtro a seleccionar en la tienda, darán como resultado los mismos productos



## Workaround


N/A




