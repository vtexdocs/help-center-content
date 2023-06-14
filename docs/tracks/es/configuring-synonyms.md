---
title: Configurar Sinónimos
id: 3ExbC3QKNF4zH7Gs8jD1cL
status: PUBLISHED
createdAt: 2019-11-29T12:04:33.557Z
updatedAt: 2023-03-30T19:19:37.658Z
publishedAt: 2023-03-30T19:19:37.658Z
firstPublishedAt: 2020-03-05T19:56:02.826Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: configurar-sinonimos
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugES: vtex-intelligent-search
---

Hay dos formas de configurar sinónimos en VTEX Admin: [individualmente](#crear-sinonimos-individualmente) o [importando una hoja de cálculo en formato CSV](#). Si necesita registrar sinónimos en bloque, le recomendamos que utilice la hoja de cálculo. Consulte las instrucciones para cada método de configuración en las secciones siguientes.

La configuración de sinónimos funciona de forma recursiva. Esto significa que cuando agrega un segundo sinónimo a uno existente, también se convertirá en sinónimo del primero.

<div class="alert alert-info" role="alert">
<p>Los sinónimos no deben ser usados para resolver errores de ortografía, plural y singular o incluso pronombres, artículos y preposiciones en los términos investigados. En todos estos puntos, VTEX Intelligent Search es capaz de interpretar, aprender y resolver automáticamente por medio de algoritmos.
</p>
</div>

## Crear sinónimos individualmente

Siga el proceso paso a paso para configurar sinónimos individualmente en VTEX Admin:

1. En el Admin VTEX, acceda a __Storefront__, o escribe __Storefront__ en la barra de búsqueda en la parte superior de la página.
2. En **Intelligent Search**, haga clic en __Sinónimos__. 
2. Haga clic en `Crear sinónimo`.
3. Rellene los campos referentes al sinónimo:
   - __Tipo:__ define el tipo de sinónimo. Consulte [Tipos de sinónimos](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV#tipos-de-sinonimos) para obtener más información.
   - __Términos:__ palabras o expresiones que se definirán como sinónimos. Debe pulsar `Enter` después de cada término para insertar otro término.
   - __Status:__ define si el sinónimo estará activo o inactivo.
4. Para terminar, haga clic en `Publicar`.

La alteración puede tardar hasta dos horas en aplicarse.

<div class="alert alert-info">
<p>Esta funcionalidad está disponible en VTEX Intelligent Search Multidioma. Lea nuestro artículo <a href="https://help.vtex.com/es/tutorial/vtex-intelligent-search-configuracion-multidioma-beta--2WahlTESLXIJ9XBdQMdTYO#sinonimos">VTEX Intelligent Search: configuración Multidioma (Beta)</a> para saber más.</p>
</div>

## Importar CSV

Si existen muchos sinónimos para registrar, puedes hacer un archivo .csv y luego importarlo en el Admin. El fichero debe contener el siguiente formato, según los [tipos de sinónimos](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV#tipos-de-sinonimos) elegidos:

- __Unidireccional:__ `{términos separados por una coma};{términos expandidos separados por una coma};{status}`

   __Ejemplos:__

    - `smartphone;iphone;true`: al buscar por `smartphone`, se mostrarán los resultados para `iphone`. Sin embargo, al buscar por `iphone`, los resultados para `smartphone` no se mostrarán.
    - `tablet;ipad;true`: al buscar por `tablet`, se mostrarán los resultados para `ipad`. Sin embargo, al buscar por `ipad`, los resultados para `tablet` no se mostrarán.

 - __Bidireccional:__ `{términos separados por una coma};{status}`

    __Ejemplos:__

    - `tv,televisión,televisor;true`: al buscar por cualquiera de los términos, el producto que contenga uno de estos será devuelto.
    - `monitor,pantalla,display;true`: al buscar por cualquiera de los términos, el producto que contenga uno de estos será devuelto.

Para importar la hoja de cálculo, siga los pasos que se indican a continuación:

1. En el Admin VTEX, acceda a __Storefront__, o escribe __Storefront__ en la barra de búsqueda en la parte superior de la página.
2. En **Intelligent Search**, haga clic en __Sinónimos__. 
3. Haga clic en "Importar".
