---
title: 'La búsqueda no funciona para un segundo nivel de directorio'
id: 6oAmtEIyyWWciICgSuYC00
status: PUBLISHED
createdAt: 2017-04-11T22:25:02.223Z
updatedAt: 2022-12-22T20:43:21.872Z
publishedAt: 2022-12-22T20:43:21.872Z
firstPublishedAt: 2017-04-11T22:32:49.385Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: la-busqueda-no-funciona-para-un-segundo-nivel-de-directorio
kiStatus: Backlog
internalReference: 
---

## Sumario

  <strong>Atención</strong>: VTEX presenta dos opciones de búsqueda - La búsqueda VTEX y VTEX Intelligent Search. Este artículo se refiere a la búsqueda VTEX. Para saber más sobre la aplicación VTEX Intelligent Search, consulte <a href = "https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nuestra guía</a>.
</div>

En la [documentación sobre la búsqueda de VTEX](http://help.vtex.com/es/tutorial/how-does-vtex-search-work/), tenemos el siguiente escenario contemplado:

De acuerdo con el término buscado, el sistema puede renderizar el contenido de un layout si el directorio tiene el nombre igual al término buscado.

Si el término buscado coincide exactamente con el nombre de un directorio configurado en la landing page, este directorio será renderizad0. Sin embargo, para una estructura de portal donde una landing page está dentro de otro directorio, esta funcionalidad no funciona:

`/directorio1/directorio2`
`http://www.sutienda.com/directorio1/landingpage`

## Simulación

Crear un segundo nivel de directorio en el Portal.

1. Catalog > Portal > Web Sites > Seleccionar el Web Site > "/"
2. Dentro de un directorio, crear un nuevo directorio
3. Asignar un layout a este nuevo directorio
4. Buscar en su sitio por el nombre del nuevo directorio - el resultado será: 404 Page Not Found

## Workaround

Actualmente no hay workaround para ese problema.

