---
title: 'El sitemap no se genera/actualiza'
id: 1tJ4XHtbnFsfS30JWXwxb0
status: PUBLISHED
createdAt: 2023-05-17T13:58:46.443Z
updatedAt: 2024-02-16T18:17:17.707Z
publishedAt: 2024-02-16T18:17:17.707Z
firstPublishedAt: 2023-05-17T13:58:47.102Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: el-sitemap-no-se-generaactualiza
locale: es
kiStatus: Backlog
internalReference: 827104
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Hay tres escenarios en los que el mapa del sitio no está siendo generado/actualizado:



1. Cuando tenemos un producto no encontrado o con algún tipo de problema en el catálogo no se genera el mapa del sitio. Puedes buscar los logs en OpenSearch, en este caso, para comprobar qué producto tiene un problema;



2. Cuando la cuenta tiene la aplicación `search.resolver@1.x` el mapa del sitio puede tener errores cuando:



- Una categoría tiene su primer producto procedente de una categoría similar (las reglas de comercio pueden tener un impacto en este caso dependiendo del producto que estés promocionando);

- La página de búsqueda/marca/categoría no tiene productos, en este caso, la página no está indexada en el mapa del sitio, y su generación se bloquea.


3. Los productos que no tienen la política comercial establecida en el catálogo no serán recibidos por el sitemap



##

## Simulación



Trate de generar el mapa del sitio para una cuenta que tiene uno de los escenarios descritos anteriormente y se bloqueará



## Workaround




- Crear un nuevo espacio de trabajo
- Instale search-resolver@0.x `(vtex install vtex.search-resolver@0.x)`.
- Generar el nuevo mapa del sitio
- Ahora puede revertir search-resolver a 1.x (`vtex install vtex.search-resolver@1.x`)
- Promover el espacio de trabajo creado a maestro

Obs: Esta solución puede no funcionar siempre. A veces la tienda puede tener tantos productos inválidos que incluso el `search-resolver@0.x` no actualizará el mapa del sitio.

Pero eventualmente, usted necesitará arreglar el escenario que impide que el mapa del sitio sea generado.

Tenga en cuenta que la actualización de la tienda a resolver@0.x y generar el mapa del sitio en un espacio de trabajo es la solución porque algunos casos no válidos no se producen en nuestra búsqueda de legado






