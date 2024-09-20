---
title: '¿Cómo funciona VTEX Intelligent Search?'
id: 23mytRDsEduqLO0Lo7yufy
status: ARCHIVED
createdAt: 2020-03-05T14:57:22.014Z
updatedAt: 2024-09-06T20:08:28.043Z
publishedAt: 
firstPublishedAt: 2020-03-05T19:54:00.932Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: como-funciona-vtex-intelligent-search
locale: es
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugES: vtex-intelligent-search
---

El motor de búsqueda es el centro de la inteligencia de VTEX Intelligent Search. Interpreta el término buscado y muestra la lista de productos filtrada y ordenada. Esta herramienta permite una búsqueda más objetiva, a través de la indexación y el tratamiento de los datos del catálogo.

Esta es una funcionalidad predeterminada de VTEX Intelligent Search y cubre a la mayoría de los escenarios. Sin embargo, el motor de búsqueda también presenta algunos ajustes para perfeccionar el resultado de la búsqueda. En esta guía describimos:

* [Comportamiento predeterminado de la búsqueda](#comportamiento-predeterminado-de-la-busqueda)
* [Configuración del comportamiento de la búsqueda](#configuracion-del-comportamiento-de-la-busqueda)
* [Formas de búsqueda alternativas](#formas-de-busqueda-alternativas)
* [Indexación](#indexacion)

## Comportamiento predeterminado de la búsqueda

A continuación se describe el comportamiento predeterminado de Intelligent Search.

### Autocorrección

El usuario puede cometer errores ortográficos al realizar una búsqueda. La herramienta interpreta los errores y muestra como resultados productos que se aproximen a la búsqueda realizada.

Para lograrlo, el motor de búsqueda intenta corregir las palabras ingresadas por el usuario de acuerdo con los ítems registrados en el catálogo. Para cada término de búsqueda se permite una cantidad específica de caracteres erróneos. Esta cantidad de errores aceptados se denomina _fuzzy_.

El _fuzzy_ varía según el tamaño del término buscado. De forma predeterminada, si el término tiene de 3 a 5 caracteres, se aplica un _fuzzy_ de 1, es decir, se permite 1 carácter erróneo. A los términos de 6 caracteres o más, se aplica un _fuzzy_ de 2.

Los errores previstos para los que se considera *fuzzy* = 1 son:

* Insertar 1 carácter demás.
* Remover 1 carácter.
* Cambiar 1 carácter.
* Intercambiar 2 caracteres que estén una al lado del otro.

Ejemplo: un cliente desea buscar el término `bola`. Siguiendo la configuración predeterminada (*fuzzy* = 1 para términos de 3 a 5 caracteres), el motor de búsqueda muestra los resultados de `bola` para cualquier búsqueda que contenga los errores aceptados según se muestra a continuación:

* `bolla` (insertar 1 carácter de más)
* `boa` (remover 1 carácter)
* `bora` (cambiar 1 carácter)
* `obla` (intercambiar 2 caracteres que estén uno al lado del otro)

>ℹ️ El *fuzzy* no considera los espacios en blanco. Esto quiere decir que, por ejemplo, `base ball` no se corregiría a `baseball`. Recomendamos usar [sinónimos](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV) en estos casos.

### Resultado mínimo

La cantidad mínima de resultados mostrados para cualquier búsqueda realizada es 1. Si no se encuentra el número mínimo de resultados, se aplica [autocorrección](#autocorreccion).

En las búsquedas que contienen varios términos, se aplica la siguiente lógica:

Si no se devuelve la cantidad mínima de resultados con la autocorrección inicial, la búsqueda comienza a incluir resultados más amplios que contengan cualquiera de los términos buscados. Por ejemplo, cuando un usuario busca “zapatilla nike” pero el catálogo no tiene ningún producto con ese nombre, la búsqueda puede mostrar como resultado un producto que contenga solo “zapatilla” en el nombre.
Si la búsqueda más amplia no devuelve la cantidad de resultados mínima, se repetirá la autocorrección nuevamente en cada uno de los términos.

>⚠️ Las búsquedas que contienen varios términos son más eficientes cuando el cliente ordena los resultados por relevancia, ya que pueden devolver un número mayor de resultados más allá del contexto de búsqueda inicial. En el orden por relevancia también pueden priorizarse ítems relacionados con cada término. Por otro lado, cuando se aplican otros criterios, como precio o más vendidos, el orden de los resultados depende de los valores numéricos y no necesariamente prioriza ítems que contienen más palabras.

### Límite de paginación

VTEX Intelligent Search limita los resultados de búsqueda a 50 páginas. Este límite incentiva el uso de filtros para hacer que la navegación sea más relevante y enfocada para el usuario.

## Configuración del comportamiento de la búsqueda

Hay un conjunto de ajustes que alteran la lista y el orden de los productos mostrados en el resultado de la búsqueda. En las siguientes secciones se presentan las principales definiciones que afectan el comportamiento de la búsqueda.

### Definición de los campos de búsqueda

Determina la información de producto que se puede buscar. A partir de la configuración, toda búsqueda realizada en la barra de búsqueda verifica el contenido de este campo para generar resultados de búsqueda. Consulta la tabla a continuación para saber qué información permite la realización de búsquedas de forma predeterminada y ver las otras opciones de configuración:

| Información | Configuración |
| - | - |
| Nombre del producto, marca, ID de producto (`ProductID`), código de referencia del producto (`ProductRefID`), ID del SKU (`SKUID`), código de referencia del SKU (`SKURefID`) y EAN | Se pueden realizar búsquedas en estos datos de forma predeterminada en VTEX Intelligent Search. Para remover alguno de ellos, ponte en contacto con nuestro [Soporte](https://help.vtex.com/es/support). |
| Especificaciones de producto y SKU | Para incluir las especificaciones deseadas como campos que se pueden buscar, debes configurar la opción __Especificaciones buscables__ en el Admin VTEX a través de __Configuración de la tienda__ > __Intelligent Search__ > __Configuración de la búsqueda__. <br /><br /> Por ejemplo, si una camisa no tiene el color en el nombre del producto o del SKU, de forma predeterminada, Intelligent Search no identifica ese atributo cuando se busque “camisa azul” y devolverá como resultado camisas de diferentes colores. Sin embargo, si la especificación de color se configura de manera que se pueden realizar búsquedas sobre la especificación de color, la búsqueda podrá devolver camisas azules en las primeras posiciones. <br /><br /> Para más detalles sobre la definición de especificaciones buscables, accede a la guía [Configuración de la búsqueda](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5t75L6lYNwix93l41s1Yrx#configuracion-general). Puedes ver más información sobre especificaciones en [Especificaciones de producto y SKU](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP). |
| Código del fabricante (`ManufactureID`) | Ponte en contacto con nuestro [Soporte](https://help.vtex.com/es/support) para configurar la realización de búsquedas en este campo. |

Ejemplo: se configuró que la especificación “color” se puede buscar y el producto está registrado con el nombre “Zapatilla Nike Total 90” y con el color “negro”. Si un cliente busca “Zapatilla Negra”, la herramienta devolverá productos que tengan el término “zapatilla” y el color “negra” en la parte superior del resultado de búsqueda.

Se puede encontrar un producto realizando una búsqueda por caracteres especiales (`-` y `/`).

>⚠️ La selección de los campos de búsqueda afecta las posibilidades de las [reglas de merchandising](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0), ya que solo se pueden utilizar los campos que permiten búsquedas para configurar reglas. Por ejemplo, al definir solo el campo `SKUID` para búsquedas, no se podrá promover un `ProductID` o un `ProductRefID` utilizando reglas de merchandising.

### Definición y orden de los campos de filtro

En todos los resultados de búsqueda se muestran filtros que el usuario puede seleccionar. De forma predeterminada, algunos filtros ya están predefinidos, pero es posible crearlos según la necesidad de la tienda. Otro aspecto personalizable es el orden de visualización. Ejemplo: en una lista de resultados de búsqueda puede incluir filtros como Precio, Categorías y Marca.

### Configuración de relevancia

La relevancia es la funcionalidad que define el orden de los productos en el resultado de búsqueda. Esta configuración permite asignar pesos y priorizar determinados criterios utilizados por el motor de búsqueda, como popularidad, fecha de lanzamiento del producto y participación en promociones. La relevancia de un producto está compuesta por la combinación de los pesos y prioridades definidos por cada administrador de la tienda.

Ejemplo: un administrador de la tienda configuró que el criterio “promoción” tiene una mayor relevancia que otros criterios. Así, cuando un cliente busca “camiseta” en la búsqueda interna de la tienda, las camisetas incluidas en las promociones tienden a aparecer en primer lugar en los resultados, dependiendo del peso asignado a los demás criterios.

Para obtener más información sobre cómo personalizar el orden de los resultados de acuerdo con las necesidades de tu tienda, consulta el artículo [Configuración de relevancia](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS).

>ℹ️ Al utilizar Intelligent Search, hay dos opciones que definirán el orden de tus colecciones. Si utilizas el comando `map=productClusterIds`, estás definiendo que el orden de tus colecciones será el predefinido por el administrador de la tienda, con su propio criterio de relevancia. Si eliges utilizar `productClusterNames`, estás definiendo que quieres que tus colecciones sigan los estándares de relevancia de Intelligent Search.

## Formas alternativas de búsqueda

Es posible buscar el ID de uno o varios artículos en la barra de búsqueda o añadiendo parámetros de consulta (*query*) a la URL de la tienda.

### Coincidencia parcial

Al ingresar únicamente los primeros dígitos exactos del ID del producto (`ProductID`), código de referencia del producto (`ProductRefID`), ID del SKU (`SKUID`), código de referencia del SKU (`SKURefID`) o EAN en la barra de búsqueda, Intelligent Search hará un match parcial con productos y SKU activos en la tienda, incluyéndolos en los resultados de la búsqueda.

Por ejemplo, si el ID del producto es `123456789` y la búsqueda realizada es `123`, ese producto se mostrará entre los resultados; sin embargo, si la búsqueda es `234`, sin alguno de los primeros dígitos del ID, este producto no se mostrará.

### URL

Para buscar desde la URL de tu tienda, añade parámetros de búsqueda (_query_) al final de la URL de la tienda, respetando una de las siguientes estructuras:

* Ejemplo de búsqueda de un ítem: `[dirección de la cuenta]/[tipo de id]:[id_1]?q=[tipo de id]&map=ft`
* Ejemplo de búsqueda de lista: `[dirección de la cuenta]/[tipo de id]:[id_1];[id_2];[id_3]?q=[tipo de id]:[id_1];[id_2];[id_3]&map=ft`

Los posibles tipos de valores para el campo “tipo de ID” son `product.id`, `sku.id`, `sku.ean`, `sku.reference` o `id` (ProductID, ProductRefID, SKUID, SKURefID y EAN). Cabe resaltar que todos los ID deben ser del mismo tipo.

* **Búsqueda por ID de SKU:** `?q=sku.id:<id>` o `?q=sku:<id>`
* **Búsqueda por EAN:** `?q=sku.ean:<id>`
* **Búsqueda por ID de referencia:** `?q=sku.reference:<id>`
* **Búsqueda por slug:** `?q=product.link:<link>`
* **Búsqueda por ID de producto:** `?q=product:<id>` o `?q=product.id:<id>`

## Indexación

La indexación es un proceso de sincronía entre los catálogos de la tienda y la búsqueda. Esta funcionalidad permite una actualización continua del índice de productos. Además, ejecuta un tratamiento de datos para utilizarlos en la búsqueda.

Inicialmente, se realiza una sincronización con todos los productos del catálogo VTEX del cliente. Después, el indexador de búsqueda recibirá en tiempo real las futuras actualizaciones de datos, como el nombre y el status del producto.

En este proceso de sincronía, el sistema forma una fila con la información que se ha actualizado para indexarlas en el catálogo de búsqueda. Una vez que se hayan indexado todos los cambios, estarán disponibles en el sitio web.

El proceso de indexación es seguro y cuenta con reglas de recuperación: si un ítem no se indexa en el primer intento, el sistema realiza más intentos. La indexación también es muy importante para analizar, tratar y organizar los datos de la mejor manera para que se muestren en los resultados.

Consulta [Historial de indexación](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4flMwTaQL8FRKl1YT58ezH) para ver más información sobre cómo monitorear el proceso de indexación.
