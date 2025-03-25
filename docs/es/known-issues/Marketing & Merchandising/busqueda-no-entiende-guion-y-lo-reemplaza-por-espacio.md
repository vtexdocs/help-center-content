---
title: 'Búsqueda no entiende guión y lo reemplaza por espacio'
id: 1jH0EdXaKiIyIe8ucgCmwI
status: PUBLISHED
createdAt: 2018-05-29T22:02:32.123Z
updatedAt: 2022-12-22T20:43:20.714Z
publishedAt: 2022-12-22T20:43:20.714Z
firstPublishedAt: 2018-05-29T22:05:57.827Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: search-doesnt-encode-hyphen-and-replaces-it-with-a-space
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

>⚠️ **Atención**: VTEX presenta dos opciones de búsqueda - La búsqueda VTEX y VTEX Intelligent Search. Este artículo se refiere a la búsqueda VTEX. Para saber más sobre la aplicación VTEX Intelligent Search, consulte <a href = "https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nuestra guía</a>.

Cuando el término buscado tiene un guión (`-`), la búsqueda reemplaza este carácter por un espacio en la querystring, no trayendo el resultado esperado.


## Simulación

Realize una búsqueda en su sitio con el carácter guión (`-`) en el término buscado. Observe que el valor del guión se sustituirá por un espacio en la búsqueda.


## Workaround

Para los productos que contengan términos con guión, registrar en el campo `Palabras substitutas` el término con espacio en lugar del guión para que el producto se encuentre en el resultado de búsqueda.


