---
title: '¿Cómo funciona VTEX Intelligent Search?'
id: 23mytRDsEduqLO0Lo7yufy
status: PUBLISHED
createdAt: 2020-03-05T14:57:22.014Z
updatedAt: 2023-04-13T23:00:35.423Z
publishedAt: 2023-04-13T23:00:35.423Z
firstPublishedAt: 2020-03-05T19:54:00.932Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: como-funciona-vtex-intelligent-search
locale: es
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugES: vtex-intelligent-search
---

El Motor de búsqueda es el centro de la inteligencia de VTEX Intelligent Search. Interpreta el término buscado y muestra la lista de productos filtrada y ordenada. Esta herramienta permite una búsqueda más objetiva, a través de la indexación y el tratamiento de los datos del catálogo.

Esta funcionalidad es estándar de VTEX Intelligent Search y atiende a la mayoría de los escenarios. Sin embargo, el Motor de búsqueda también presenta algunos ajustes para perfeccionar el resultado de la búsqueda.

Por lo tanto, hay un conjunto de configuraciones que alteran la lista y el orden de los productos mostrados en el resultado de la búsqueda. Estas son:

- __Definición de los campos de búsqueda__: define determinada información de producto como susceptible de búsqueda. A partir de la configuración, toda búsqueda realizada verifica el contenido de este campo para relacionarlo con los productos. Los campos __nombre del producto__, __marca__, __ProductID__, __ProductRefID__, __SKUID__, __SKURefID__ y __EAN__ están definidos de forma predeterminada y no pueden ser modificados. 

  Se puede encontrar un producto haciendo una búsqueda por caracteres especiales (`-` y `/`). 

  _Ejemplo_: se configuró que el campo «color» es configurable y el producto está registrado con el nombre «Zapatilla Nike Total 90» y con el color «negro». Si un cliente busca «Zapatilla Negra», la herramienta devolverá productos que tengan el término «zapatilla» y el color «negra» en la parte superior del resultado de búsqueda.

- __Definición y orden de los campos de filtro__: en todos los resultados de búsqueda se muestran filtros que el usuario puede seleccionar. Por estándar, algunos filtros ya están predeterminados, pero es posible crearlos según la necesidad de la tienda. Otro aspecto personalizable es el orden de visualización.

  _Ejemplos_: Precio, Categorías y Marca.

- __Configuración de autocorrección__: el usuario puede cometer errores ortográficos al realizar una búsqueda. Es función de la herramienta interpretar estos errores y devolver como resultados los productos que se parezcan a la búsqueda realizada.

 Para esto, el Motor de búsqueda intenta corregir lo que el usuario digitó de acuerdo con los ítems registrados en el catálogo. Para cada término de búsqueda, se permite un número específico de caracteres incorrectos. Esta cantidad de errores aceptados se denomina *fuzzy*.

 El *fuzzy* varía dependiendo del tamaño del término de búsqueda. De forma predeterminada, si el término tiene de 3 a 5 caracteres, el *fuzzy* aplicado es 1, es decir, 1 carácter puede estar equivocado. Para términos de 6 caracteres o más, el *fuzzy* aplicado es 2.

 Los errores previstos considerando ```*fuzzy* = 1``` son:
   - Introducir 1 carácter extra.
   - Eliminar 1 carácter.
   - Intercambiar 1 carácter.
   - Intercambiar 2 caracteres que estén uno al lado del otro.

 _Ejemplo_:
 Supongamos que un cliente quiere buscar el término «bola». Siguiendo la configuración predeterminada (```*fuzzy* = 1``` para términos de 3 a 5 caracteres), el Motor de búsqueda mostrará el resultado «bola» para cualquier búsqueda que contenga los errores aceptados, como:
   - bolla (introducir 1 carácter extra)
   - boa (eliminar 1 carácter)
   - bora (cambiar 1 carácter)
   - obla (intercambiar 2 caracteres que están uno al lado del otro entre ellos)

 <div class="alert alert-info" role="alert">
<p> Los espacios en blanco no se consideran en fuzzy, por lo que "base ball" no se corregirá a "baseball". Recomendamos utilizar sinónimos para estos casos.</p>
</div>

- __Configuración de relevancia__: funcionalidad que define el orden de los productos en el resultado de búsqueda. Esta configuración permite asignar pesos y priorizar determinados criterios utilizados por el Motor de búsqueda, como popularidad, fecha de lanzamiento del producto y participación en promociones, por ejemplo. La relevancia de un producto está conformada por la combinación de los pesos y prioridades definidos por cada administrador de tienda. 

 _Ejemplo_: un administrador de tienda configuró que el criterio «promoción» tiene una mayor relevancia que otros criterios. Así, cuando un cliente busca «camiseta» en la búsqueda interna de la tienda, las camisetas incluidas en las promociones tienden a aparecer en primer lugar en los resultados, dependiendo del peso asignado a los demás criterios.

 Para obtener más información sobre como personalizar el orden de los resultados de acuerdo con las necesidades de su tienda, lea el artículo [Configuración de relevancia](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS).

- __Configuración de resultado mínimo__: permite configurar la cantidad mínima de productos para la consulta de múltiples términos. Si no se alcanza este número, la búsqueda presenta resultados más amplios, que respetan solo uno de los términos buscados.

  _Ejemplo_: se configuró que el resultado mínimo para consultas con múltiples términos es __tres__.  El usuario realizó la búsqueda de «zapatilla nike», pero el catálogo solo tiene __cuatro__ productos con ese nombre. La plataforma presentará primero productos que tengan el término «zapatilla nike», luego productos con el término «zapatilla» y, por último, aquellos que tengan el término «nike».

- __Límite de páginas__: limita el resultado de la búsqueda a 50 páginas. Este límite fomenta el uso de filtros, lo que permite una navegación más relevante y centrada para el usuario.

<div class="alert alert-warning">
  <p>VTEX Intelligent Search no ofrece la funcionalidad de sustitución de palabras de forma nativa. Para habilitar el uso de palabras sustitutivas por parte de VTEX Intelligent Search, póngase en contacto con <a href="https://support.vtex.com/hc/es-419/requests">nuestro equipo de soporte</a>.</p>
</div>

## Formas alternativas de búsqueda

Es posible buscar ID en la URL de la tienda o directo en la barra de búsqueda. En dicha búsqueda, puedes buscar un solo ítem o una lista de ítems.

Para buscar en la URL de tu tienda, sigue el formato a continuación:

- Ejemplo de búsqueda de un ítem: `[dirección de la cuenta]/[tipo de id]:[id_1]?q=[tipo de id]&map=ft`
- Ejemplo de búsqueda de lista: `[dirección de la cuenta]/[tipo de id]:[id_1];[id_2];[id_3]?q=[tipo de id]:[id_1];[id_2];[id_3]&map=ft`

Los posibles tipos de valores para el campo tipo de ID son `product.id`, `sku.id`,`sku.ean`, `sku.reference` o `id` (ProductID, ProductRefID, SKUID, SKURefID y EAN). Cabe resaltar que todos los ID deben ser del mismo tipo.

Puedes buscar IDs en la barra de búsqueda de las siguientes maneras:

1. Introduciendo solo los primeros dígitos del ID en la barra de búsqueda. Es importante tener en cuenta que la busca debe ser exacta, por ejemplo, si el ID es `0123-456-789` y buscas `123`, el producto no será mostrado.
2. Por consultas, siguiendo el formato a continuación:
  - **Búsqueda por ID de SKU:** `?q=sku.id:<id>` o `?q=sku:<id>`
  - **Búsqueda por EAN:** `?q=sku.ean:<id>`
  - **Búsqueda por ID de referencia:** `?q=sku.reference:<id>`
  - **Búsqueda por slug:** `?q=product.link:<link>`
  - **Búsqueda por ID de producto:** `?q=product:<id>` o `?q=product.id:<id>`

## Indexación

La indexación es un proceso de sincronía entre los catálogos de la tienda y la búsqueda. Esta funcionalidad permite una actualización continua del índice de productos. Además, ejecuta un tratamiento de datos para utilizarlos en la búsqueda.

Inicialmente, se realiza una sincronización con todos los productos del catálogo VTEX del cliente. Después, el indexador de búsqueda recibirá en tiempo real las futuras actualizaciones de datos, como el nombre y el status del producto. 

En este proceso de sincronía, el sistema forma una fila de la información que se ha actualizado para indexarlas en el catálogo de búsqueda. Una vez que se hayan indexado todos los cambios, estarán disponibles en el sitio web. 

El proceso de indexación es seguro y cuenta con reglas de recuperación: si un ítem no se indexa en el primer intento, el sistema realiza más intentos.

La indexación es muy importante para analizar, tratar y organizar los datos de la mejor manera para que se muestren en los resultados.

<div class="alert alert-info" role="alert">
<p>Al utilizar Intelligent Search, hay dos opciones que definirán el orden de tus colecciones. Al utilizar el comando `map=productClusterIds`, estás definiendo que el orden de tus colecciones será el predefinido por el administrador de la tienda, con sus propios criterios de relevancia. Si eliges utilizar `productClusterNames`, estás definiendo que quieres que tus colecciones sigan los estándares de relevancia de Intelligent Search. </p>
</div>

