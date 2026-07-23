---
title: 'Comportamiento de búsqueda'
id: B9o3JbV6utAinBJ1ETujs
status: PUBLISHED
createdAt: 2024-06-27T17:30:43.356Z
updatedAt: 2026-04-23T12:00:00.000Z
publishedAt: 2025-06-24T19:21:01.124Z
firstPublishedAt: 2024-06-27T17:33:21.153Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: search-behavior
legacySlug: comportamiento-de-busqueda
locale: es
subcategoryId: 30Kdgc6wJkMWgcXLB8mGr7
---

El buscador es el centro de la inteligencia de VTEX Intelligent Search. Interpreta el término buscado y muestra la lista de productos filtrada y ordenada. Esta herramienta permite una búsqueda más objetiva a través de la indexación y el tratamiento de los datos del catálogo.

Esta funcionalidad es estándar de VTEX Intelligent Search y atiende la mayoría de los escenarios. Sin embargo, el buscador también presenta algunos ajustes para perfeccionar el resultado de la búsqueda. En esta guía describimos:

- [Comportamiento predeterminado de la búsqueda](#comportamiento-predeterminado-de-la-busqueda)
- [Configuración del comportamiento de la búsqueda](#configuracion-del-comportamiento-de-la-busqueda)
- [Formas de búsqueda alternativas](#formas-de-busqueda-alternativas)

## Comportamiento predeterminado de la búsqueda

A continuación se describe el comportamiento predeterminado de Intelligent Search.

### Autocorrección

El usuario puede cometer errores ortográficos al realizar una búsqueda. La función de la herramienta es interpretar esos errores y presentar como resultados productos que se aproximen a la búsqueda realizada.

El buscador intenta corregir las palabras ingresadas por el usuario de acuerdo con los ítems registrados en el catálogo. Para cada término de búsqueda se permite una cantidad específica de caracteres incorrectos. Esta cantidad de errores aceptados se denomina fuzzy.

El valor de fuzzy varía dependiendo del tamaño del término buscado. De forma predeterminada, si el término tiene de 3 a 5 caracteres, se aplica un fuzzy de 1, es decir, se permite 1 carácter erróneo. A los términos de 6 caracteres o más, se aplica un fuzzy de 2.

Los errores previstos para los que se considera fuzzy = 1 son:

- Insertar 1 carácter extra.
- Remover 1 carácter.
- Cambiar 1 carácter.
- Intercambiar 2 caracteres que estén uno al lado del otro.

Ejemplo: un cliente desea buscar el término `bola`. Siguiendo la configuración predeterminada (fuzzy = 1 para términos de 3 a 5 caracteres), el buscador muestra los resultados de `bola` para cualquier búsqueda que contenga los errores aceptados según se muestra a continuación:

- `bolla` (insertar 1 carácter de más)
- `boa` (remover 1 carácter)
- `bora` (cambiar 1 carácter)
- `obla` (intercambiar 2 caracteres que están uno junto al otro)

> ℹ️ El fuzzy no considera los espacios en blanco. Esto quiere decir que, por ejemplo, `micro ondas` no se corregiría a `microondas`. Recomendamos el uso de [sinónimos](https://help.vtex.com/es/docs/tutorials/sinonimos) en estos casos.

### Resultado mínimo

La cantidad mínima de resultados que se muestran en cualquier búsqueda realizada es 1. En cualquier búsqueda, si no se alcanza el número mínimo de resultados, se aplica la [autocorrección](#autocorreccion).

En las búsquedas que contienen varios términos, se aplica la siguiente lógica:

1. Si no se devuelve la cantidad mínima de resultados con la autocorrección inicial, la búsqueda comienza a incluir resultados más amplios que contengan cualquiera de los términos buscados. Por ejemplo, cuando un usuario busca "tenis nike", pero el catálogo no tiene ningún producto con ese nombre, la búsqueda puede mostrar como resultado un producto que solo tenga el término "tenis" en el nombre.
2. Si la búsqueda más amplia no devuelve la cantidad mínima de resultados, se repetirá aplicando nuevamente la autocorrección a cada uno de los términos.

> ⚠️ Las búsquedas con múltiples términos son más eficientes cuando el cliente ordena los resultados por relevancia, ya que pueden devolver una mayor cantidad de resultados no relacionados con el contexto de la búsqueda. En el orden por relevancia se siguen priorizando los ítems relacionados con los distintos términos. Por otro lado, cuando se aplican otros criterios, como precio o más vendidos, el orden de los resultados depende de los valores numéricos y no necesariamente prioriza ítems que contienen más palabras.

### Límite de paginación

VTEX Intelligent Search limita los resultados de búsqueda a 50 páginas. Este límite fomenta el uso de filtros, lo que permite al usuario navegar de forma más relevante y refinada.

## Configuración del comportamiento de la búsqueda

Existe un conjunto de configuraciones que modifican la lista y el orden de los productos que se muestran en los resultados de búsqueda. Consulta en las secciones a continuación las principales definiciones que afectan el comportamiento de la búsqueda.

### Definición de los campos buscables

Determina la información de producto que es buscable. A partir de esta configuración, toda búsqueda realizada en la barra de búsqueda verificará el contenido de esos campos para generar resultados de búsqueda. Consulta la siguiente tabla para entender cuál es la información buscable de forma predeterminada y las demás opciones de configuración:

| Información | Configuración |
| - | - |
| <ul><li>Nombre del producto</li><li>Marca</li><li>ID de producto (`ProductID`)</li><li>Código de referencia del producto (`ProductRefID`)</li><li>ID del SKU (`SKUID`)</li><li>Código de referencia del SKU (`SKURefID`)</li><li>EAN</li></ul> | Información buscable de forma **predeterminada** en VTEX Intelligent Search. Para remover alguno de estos parámetros ponte en contacto con nuestro [Soporte](https://supporticket.vtex.com/support). |
| <ul><li>Especificaciones de producto</li><li>Especificaciones de SKU</li><li>Departamento</li><li>Categoría</li><li>Subcategoría</li></ul> | Para incluir las especificaciones deseadas como campos que se pueden buscar, debes configurar la opción **Especificaciones buscables** en el Admin VTEX a través de **Configuración de la tienda** > **Intelligent Search** > **Configuración de la búsqueda**.<br />Por ejemplo, si una camisa no tiene el color en el nombre del producto o del SKU, de forma predeterminada, Intelligent Search no identifica ese atributo cuando se busque “camisa azul” y devolverá como resultado camisas de diferentes colores. Sin embargo, si la especificación de color está configurada como buscable, la búsqueda logra mostrar camisas azules en las primeras posiciones.<br /><br /><br /> Para más detalles sobre la definición de especificaciones buscables, accede a la guía [Configuración de la búsqueda](/es/docs/tutorials/configuracion-de-la-busqueda#configuracion-general). Puedes consultar más información sobre especificaciones en [Especificaciones de producto y SKU](/es/docs/tracks/especificaciones-definicion-de-concepto). |
| > Código de fabricante (`ManufactureID`) | Ponte en contacto con nuestro [Soporte](https://supporticket.vtex.com/support) para configurar esos campos como buscables. |

_Ejemplo_: se configuró que la especificación "color" sea buscable y el producto está registrado con el nombre "Tenis Nike Total 90" y con el color "negro". Si un cliente busca "Tenis Negro", la herramienta mostrará en la parte superior del resultado de búsqueda los productos que contienen el término "tenis" y el color "negro".

Es posible buscar utilizando caracteres especiales (`-` y `/`) para encontrar un producto.

> ℹ️ Puedes activar el tratamiento de símbolos como `®`, `@` y `&` en la búsqueda poniéndote en contacto con el [Soporte VTEX](https://supporticket.vtex.com/support). Al activarlo, estos caracteres se neutralizan durante la indexación, lo que permite que los productos con símbolos en el nombre se encuentren incluso cuando el cliente los omite en la búsqueda. Por ejemplo, el producto `Marca® Papel Bond & Copias` puede encontrarse mediante la búsqueda `marca bond`.

> ⚠️ La elección de los campos de búsqueda afecta las posibilidades de las [Reglas de merchandising](/es/docs/tutorials/reglas-de-merchandising), ya que solo los campos buscables pueden usarse para configurar las reglas. Por ejemplo, si defines únicamente el campo **`SKUID`** como buscable, no será posible promocionar un **`ProductID`** o un **`ProductRefID`** utilizando reglas de merchandising.

### Definición y orden de los campos de filtro

En todos los resultados de búsqueda se muestran filtros que el usuario puede seleccionar. De forma predeterminada, algunos filtros están predefinidos, pero pueden crearse otros según las necesidades de la tienda. Otro punto personalizable es el orden de visualización. Por ejemplo: en una lista de resultados de búsqueda, pueden existir los filtros Precio, Categorías y Marca.

### Configuración de relevancia

La relevancia es la funcionalidad que define el orden de los productos en los resultados de búsqueda. Esta configuración permite asignar pesos y priorizar determinados criterios utilizados por el buscador, como popularidad, fecha de lanzamiento del producto y participación en promociones, por ejemplo. La relevancia de un producto se compone de la combinación de los pesos y las prioridades definidos por cada retailer.

_Ejemplo_: un retailer configuró que el criterio Promoción tiene una relevancia mayor que otros criterios. Así, cuando un cliente busca “camiseta” en la búsqueda interna de la tienda, las camisetas incluidas en las promociones tienden a aparecer en primer lugar en los resultados, dependiendo del peso asignado a los demás criterios.

Para más información sobre cómo personalizar el orden de los resultados de acuerdo con las necesidades de tu tienda, consulta el artículo [Reglas de relevancia](https://help.vtex.com/es/docs/tutorials/reglas-de-relevancia).

> ℹ️ Al usar Intelligent Search hay dos opciones que definirán el orden de tus colecciones. Si utilizas el comando `map=productClusterIds`, estás definiendo que el orden de tus colecciones será el predefinido por el retailer, con su propio criterio de relevancia. Si eliges utilizar `productClusterNames`, estás definiendo que quieres que tus colecciones sigan los estándares de relevancia de Intelligent Search.

## Formas de búsqueda alternativas

Es posible buscar el ID de uno o varios ítems en la barra de búsqueda o agregando parámetros de consulta (query) a la URL de la tienda.

### Coincidencia parcial

Al ingresar solo los primeros dígitos exactos del ID del producto (`ProductID`), el código de referencia del producto (`ProductRefID`), el ID del SKU (`SKUID`), el código de referencia del SKU (`SKURefID`) o el EAN en la barra de búsqueda, Intelligent Search hará la coincidencia parcial con productos y SKUs activos en la tienda, incluyéndolos en los resultados de la búsqueda.

Por ejemplo, si el ID del producto es `123456789` y la búsqueda es `123`, ese producto aparecerá entre los resultados. Sin embargo, si la búsqueda es `234`, sin alguno de los primeros dígitos del ID, ese producto no aparecerá.

### URL

Para buscar a partir de la URL de tu tienda, agrega parámetros de búsqueda (query) al final de la URL de la tienda, respetando una de las siguientes estructuras:

- Ejemplo para búsqueda de un ítem: `[dirección de la cuenta]/[tipo de id]:[id_1]?q=[tipo de id]&map=ft`
- Ejemplo para búsqueda de lista de ítems: `[dirección de la cuenta]/[tipo de id]:[id_1];[id_2];[id_3]?q=[tipo de id]:[id_1];[id_2];[id_3]&map=ft`

Los posibles tipos de valores para el campo tipo del ID son `product.id`, `sku.id`, `sku.ean`, `sku.reference` o `id` (ProductID, ProductRefID, SKUID, SKURefID y EAN). Cabe resaltar que todos los IDs deben ser del mismo tipo.

* **Búsqueda por ID de SKU:** `?q=sku.id:<id>` o `?q=sku:<id>`
* **Búsqueda por EAN:** `?q=sku.ean:<id>`
* **Búsqueda por ID de referencia:** `?q=sku.reference:<id>`
* **Búsqueda por slug:** `?q=product.link:<link>`
* **Búsqueda por ID de producto:** `?q=product:<id>` o `?q=product.id:<id>`
