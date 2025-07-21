---
title: "La importación de archivos de la búsqueda avanzada no funciona en los filtros de catálogo"
id: KB8nLgJorL1aKtUuf8Dga
status: PUBLISHED
createdAt: 2024-08-23T17:56:17.370Z
updatedAt: 2024-08-23T17:56:18.148Z
publishedAt: 2024-08-23T17:56:18.148Z
firstPublishedAt: 2024-08-23T17:56:18.148Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: la-importacion-de-archivos-de-la-busqueda-avanzada-no-funciona-en-los-filtros-de-catalogo
locale: es
kiStatus: Backlog
internalReference: 1086454
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, la búsqueda en el catálogo heredado tiene una funcionalidad, en la pestaña "Búsqueda avanzada" que permite importar un archivo para crear un filtro de búsqueda.

Sin embargo, esta importación actualmente no está filtrando correctamente los datos y termina simplemente no añadiendo ningún parámetro para ser filtrado en el catálogo.


##

## Simulación


1 - En el módulo de catálogo, vaya a cualquier interfaz de usuario que tenga una función de filtrado disponible, como /admin/Site/Relatorio_Skus.aspx

2 - En la sección de marcas, haga clic en el "Botón de búsqueda avanzada".

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/la-importacion-de-archivos-de-la-busqueda-avanzada-no-funciona-en-los-filtros-de-catalogo_1.png)

3 - Aparecerá un aviso, seleccione la pestaña "importación de archivos

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/la-importacion-de-archivos-de-la-busqueda-avanzada-no-funciona-en-los-filtros-de-catalogo_2.png)

4 - Al intentar importar un archivo con una lista de marcas, dicha lista no se añadirá a los filtros.



## Workaround


Realice otros filtros cuando busque productos en el módulo de catálogo heredado.





