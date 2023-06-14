---
title: 'Las carpetas de segundo nivel no consideran el "contexto de búsqueda"'
id: 6WvlorgpBEeIuKk2mprMXm
status: PUBLISHED
createdAt: 2019-02-17T19:55:07.529Z
updatedAt: 2022-12-22T20:43:19.617Z
publishedAt: 2022-12-22T20:43:19.617Z
firstPublishedAt: 2019-02-17T20:10:48.567Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: las-carpetas-de-segundo-nivel-no-consideran-el-contexto-de-busqueda
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

<div class = "alert alert-warning">
  <strong>Atención</strong>: VTEX presenta dos opciones de búsqueda - La búsqueda VTEX y VTEX Intelligent Search. Este artículo se refiere a la búsqueda VTEX. Para saber más sobre la aplicación VTEX Intelligent Search, consulte <a href = "https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nuestra guía</a>.
</div>

Las carpetas de segundo nivel no están considerando el "contexto de búsqueda" que se ha registrado para ella. El _slug_ del segundo nivel de la dirección URL está actuando como un filtro de la primera carpeta (según su contexto).

## Simulación

1. En el CMS, cree una carpeta en la raíz del sitio web y defina un contexto de búsqueda para ella;
2. Cree una segunda carpeta dentro de la creada anteriormente, con un contexto de búsqueda diferente;
3. Acceda a esta segunda carpeta en el sitio y observe que su contenido no coincide con lo esperado.

Ejemplo práctico:

- carpeta `/promocion-especial` que tiene la colección 111 como contexto de búsqueda;
- carpeta `/algunos-productos` registrada dentro de la carpeta anterior con la colección 222 como contexto de búsqueda.

La segunda carpeta puede ser accedida en la dirección `www.sitio.com/promocion-especial/algunos-productos`, pero ella no traerá los productos de la colección 222, sino una búsqueda por el término "algunos productos" dentro de la colección 111 (de la primera carpeta).

## Workaround

En los casos en que el contexto de búsqueda es relevante para el escenario, es necesario trabajar solamente con carpetas de primer nivel.

