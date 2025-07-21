---
title: "Tiempo de espera de los filtros de catálogo"
id: 5KtT2SvTSO6xMdJOSYz5VZ
status: PUBLISHED
createdAt: 2023-10-19T17:11:37.486Z
updatedAt: 2023-10-19T17:11:38.181Z
publishedAt: 2023-10-19T17:11:38.181Z
firstPublishedAt: 2023-10-19T17:11:38.181Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: tiempo-de-espera-de-los-filtros-de-catalogo
locale: es
kiStatus: Backlog
internalReference: 922350
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Para las tiendas con una gran cantidad de skus (1 millón o más), a menudo, al filtrar utilizando los filtros de la interfaz de usuario del catálogo, ya sea para el menú principal o para la sección de informes, si la consulta de filtro devuelve un resultado muy grande, la interfaz de usuario se agota (504 tiempo de espera de la puerta de enlace).



## Simulación


No hay forma fiable de simularlo de forma consistente - sólo consultas específicas de gran tamaño para pocas cuentas acaban en error.



## Workaround


Solicite una "limpieza del filtro de usuario" al equipo de producto.

Además, si la misma consulta está generando a menudo un tiempo de espera (es decir, se filtra para un departamento específico y se agota el tiempo de espera), considere la posibilidad de realizar filtros que seleccionen un subconjunto de lo que desea (en el mismo ejemplo, una categoría dentro del departamento dado)





