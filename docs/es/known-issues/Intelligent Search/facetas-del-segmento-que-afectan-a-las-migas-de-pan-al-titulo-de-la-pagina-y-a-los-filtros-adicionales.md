---
title: "Facetas del Segmento que afectan a las migas de pan, al título de la página y a los filtros adicionales"
id: 3lBgcsjxiZxoDvnPhbMXgo
status: PUBLISHED
createdAt: 2024-06-27T22:57:42.875Z
updatedAt: 2024-06-27T22:57:43.965Z
publishedAt: 2024-06-27T22:57:43.965Z
firstPublishedAt: 2024-06-27T22:57:43.965Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: facetas-del-segmento-que-afectan-a-las-migas-de-pan-al-titulo-de-la-pagina-y-a-los-filtros-adicionales
locale: es
kiStatus: Backlog
internalReference: 1057254
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La propiedad "facets" almacenada en el Segmento/Sesión para un contexto de navegación funciona para limitar los resultados de búsqueda a filtros predefinidos. Por ejemplo, es utilizada por "Organizaciones B2B" para restringir lo que un usuario puede ver en la tienda.

Estas facetas pueden afectar al comportamiento de los títulos de página y las migas de pan generando valores inesperados que no forman parte de los filtros aplicados en la página. Se tienen en cuenta todos los filtros al generar estos valores, no sólo los filtros explícitos de la página, que deberían ignorar las facetas de Segmento.

También puede afectar a la URL de la página al aplicar filtros adicionales, que se fusionarán con las facetas de Segment.


##

## Simulación



- Adjunte un usuario a una organización B2B que esté limitada a algunas colecciones de productos (A);
- Crear una página de destino que muestre una colección diferente (B);
- Las migas de pan y el título de la página pueden mostrar el nombre de la colección A en lugar de la colección B
- Seleccione filtros de búsqueda adicionales en la página de destino, como categoría o marca;
- Observe que la URL (y también las migas de pan y el título de la página) también mostrarán la colección A en lugar de limitarse a la colección B.



## Workaround


N/A

