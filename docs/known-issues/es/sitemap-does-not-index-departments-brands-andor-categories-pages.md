---
title: 'El sitemap no indexa las páginas de departamentos, marcas y/o categorías'
id: 59AJOYBjpw23Ee8EXKOjUF
status: PUBLISHED
createdAt: 2024-08-06T19:23:18.073Z
updatedAt: 2024-08-06T19:28:46.754Z
publishedAt: 2024-08-06T19:28:46.754Z
firstPublishedAt: 2024-08-06T19:23:19.500Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: el-sitemap-no-indexa-las-paginas-de-departamentos-marcas-yo-categorias
locale: es
kiStatus: Backlog
internalReference: 1076965
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Cuando una cuenta tiene la aplicación `search.resolver@1.x` el mapa del sitio puede tener errores cuando:

- Una categoría tiene su primer producto procedente de una categoría similar;
- La página de la marca/categoría/departamento no tiene productos; en este caso, la página no está indexada en el sitemap, y su generación se bloquea
En ambos casos, la página actual no se indexa en el mapa del sitio, lo que suele dar lugar a un mapa del sitio sin ruta de marca, categoría o departamento.


##

## Simulación



Intente generar el mapa del sitio para una cuenta que tenga uno de los escenarios descritos anteriormente y generará un mapa del sitio incompleto.



## Workaround



- Crear un nuevo espacio de trabajo
- Instale search-resolver@0.x `(vtex install vtex.search-resolver@0.x)`.
- Generar el nuevo mapa del sitio
- Ahora puede revertir search-resolver a 1.x (`vtex install vtex.search-resolver@1.x`)
- Promover el espacio de trabajo creado a maestro

Tenga en cuenta que la actualización de la tienda a resolver@0.x y la generación del mapa del sitio en un espacio de trabajo es la solución porque algunos casos no válidos no ocurren en nuestra búsqueda de legado.



