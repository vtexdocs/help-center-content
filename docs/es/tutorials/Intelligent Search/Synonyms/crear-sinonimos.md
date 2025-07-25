---
title: 'Crear sinónimos'
id: 5IfjhvjxNAvJGEWNn0AhOA
status: PUBLISHED
createdAt: 2024-06-27T16:36:30.904Z
updatedAt: 2024-06-27T16:39:00.981Z
publishedAt: 2024-06-27T16:39:00.981Z
firstPublishedAt: 2024-06-27T16:37:25.800Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: creating-synonyms
locale: es
legacySlug: configurar-sinonimos
subcategoryId: BBzMtJan1UTxC9QZODnlN
---

<div class = "alert alert-info"> Recomendamos usar <a href="https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZ">Sinónimos</a> en lugar de <a href="https://help.vtex.com/es/tutorial/otimizar-as-buscas-com-palavras-substitutas--32FqSsl5VuQyiIMEc02Uwu?&utm_source=autocomplete">Palabras sustitutas</a> para asociar palabras con productos, ya que los sinónimos permiten gestionar los términos por producto de una forma más escalable. Para más información, ponte en contacto con <a href="https://support.vtex.com/hc/es/requests">nuestro equipo de soporte</a>. </div>

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
   - __Tipo:__ define el tipo de sinónimo. Consulte [Tipos de sinónimos](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV#tipos-de-sinonimos) para obtener más información.
   - __Términos:__ palabras o expresiones que se definirán como sinónimos. Debe pulsar `Enter` después de cada término para insertar otro término.
   - **Idiomas:** idiomas en los que se aplicará el sinónimo. Campo solo disponible para tiendas que utilizan [configuración multidioma (beta)](/es/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO).
   - __Status:__ define si el sinónimo estará activo o inactivo.
4. Para terminar, haga clic en `Publicar`.

La alteración puede tardar hasta dos horas en aplicarse.

<div class="alert alert-info">
<p>Esta funcionalidad está disponible en VTEX Intelligent Search Multidioma. Lea nuestro artículo <a href="https://help.vtex.com/es/tutorial/vtex-intelligent-search-configuracion-multidioma-beta--2WahlTESLXIJ9XBdQMdTYO#sinonimos">VTEX Intelligent Search: configuración Multidioma (Beta)</a> para saber más.</p>
</div>

## Importar CSV

Si existen muchos sinónimos para registrar, puedes hacer un archivo .csv y luego importarlo en el Admin.

Para importar la hoja de cálculo, siga los pasos que se indican a continuación:

1. Cree un archivo CSV en el formato indicado en [Plantilla de sinónimos](#plantilla-de-sinonimos).
2. En el Admin VTEX, acceda a __Storefront__, o escribe __Storefront__ en la barra de búsqueda en la parte superior de la página.
3. En **Intelligent Search**, haga clic en __Sinónimos__. 
4. Haga clic en <i class="fas fa-download"></i> `Importar`.
5. Arrastre el archivo CSV al área delimitada o haga clic en `selecciona un archivo` para seleccionar el archivo de su dispositivo.
6. Haga clic en `Importar`.

## Plantilla de sinónimos

El fichero debe contener el siguiente formato, según los [tipos de sinónimos](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV#tipos-de-sinonimos) elegidos:

- __Unidireccional:__ `{términos separados por una coma};{término equivalente};{status}`

   __Ejemplos:__

    - `smartphone;iphone;true`: al buscar por `smartphone`, se mostrarán los resultados para `iphone`. Sin embargo, al buscar por `iphone`, los resultados para `smartphone` no se mostrarán.
    - `tablet;ipad;true`: al buscar por `tablet`, se mostrarán los resultados para `ipad`. Sin embargo, al buscar por `ipad`, los resultados para `tablet` no se mostrarán.

 - __Bidireccional:__ `{términos separados por una coma};{status}`

    __Ejemplos:__

    - `tv,televisión,televisor;true`: al buscar por cualquiera de los términos, el producto que contenga uno de estos será devuelto.
    - `monitor,pantalla,display;true`: al buscar por cualquiera de los términos, el producto que contenga uno de estos será devuelto.

#### Tiendas multidioma (Beta)

Tiendas que utilizan configuración multidioma (beta) deben seguir la siguiente plantilla para importar Sinónimos para idiomas específicos.

- __Unidireccional__: `{términos separados por una coma};{término equivalente};{status};{locales separados por coma}`.

   __Ejemplo:__
   - `smartphone;iphone;true;en-GB`: al buscar smartphone en la tienda en el idioma inglés (`locale en-GB`), se mostrará los resultados de iphone.  Sin embargo, al buscar iphone, no aparecerán los resultados de smartphone.

- __Bidireccional__: `{términos separados por una coma};{status};{locales separados por coma}`.

   __Ejemplo:__
   - `tv,smart tv;true;en-GB`: al buscar cualquiera de estos términos en la tienda en el idioma inglés (`locale en-GB`), se mostrará cualquier producto que contenga uno de esos términos en los resultados de búsqueda.

<div class="alert alert-warning">
  <p> Si el archivo .csv importado no contiene el <code>locale</code>, el sinónimo será válido para todos los idiomas disponibles en la tienda. </p>
</div>
