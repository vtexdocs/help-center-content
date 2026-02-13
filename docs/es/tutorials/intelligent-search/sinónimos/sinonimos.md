---
title: 'Sinónimos'
id: um0MRK7KMbE4RZEEbblFJ
status: PUBLISHED
createdAt: 2024-08-14T18:10:16.284Z
updatedAt: 2024-10-29T19:41:49.081Z
publishedAt: 2024-10-29T19:41:49.081Z
firstPublishedAt: 2024-08-14T18:12:53.564Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: synonyms
legacySlug: sinonimos
locale: es
subcategoryId: BBzMtJan1UTxC9QZODnlN
---

La funcionalidad sinónimos de Intelligent Search permite registrar palabras con significados similares a un término de búsqueda específico, lo que aumenta las posibilidades de éxito de la búsqueda. Esta herramienta permite crear reglas de relación entre las palabras buscadas y las palabras contenidas en el registro de productos.

Por ejemplo: en una tienda, los productos se registran con el nombre `televisión`, pero es común que los clientes busquen `tv`. Puedes configurar un sinónimo para determinar que cuando se busque el término `tv`, también se muestren los resultados de `televisión`.

## Cómo funciona

Durante la búsqueda, Intelligent Search recibe el término buscado por el cliente y verifica las reglas de sinónimos registradas. Si se encuentra un sinónimo que coincida con el término, Intelligent Search incluye en los resultados de la búsqueda los ítems que coinciden con el sinónimo.

De este modo, aunque el cliente no busque la palabra registrada en el producto, podrá obtener resultados relevantes, lo que aumenta las posibilidades de éxito de la búsqueda y reduce la posibilidad de obtener resultados vacíos.

El uso de sinónimos también complementa los [informes](/es/docs/tutorials/analytics) de búsquedas sin resultados. A partir de este análisis, el retailer puede identificar las búsquedas que no arrojaron resultados y determinar qué términos necesitan sinónimos registrados.

## Tipos de sinónimos

Pueden crearse dos tipos de sinónimos: unidireccional y bidireccional. Consulta a continuación las características de cada uno:

| Tipo | Descripción | Ejemplo |
|---|---|---|
| Unidireccional | Dos o más palabras tienen significados similares, pero no se consideran equivalentes en todos los contextos.<br>Esta configuración se elige estratégicamente para que la coincidencia funcione en una dirección específica. | `smartphone → iphone`<br>Al buscar el término "smartphone", los resultados incluirán productos etiquetados como "iphone". Sin embargo, al buscar "iphone" no se mostrarán resultados de "smartphone". |
| Bidireccional | Dos o más palabras tienen sentidos y significados equivalentes, lo que permite que la correspondencia funcione en ambas direcciones.<br>Esta configuración facilita la búsqueda de productos que pueden tener nombres distintos según el país o la región. | `diet ⇄ cero azúcar ⇄ sin azúcar`<br>Al buscar productos "diet" se incluirán productos definidos como "cero azúcar" y "sin azúcar". Del mismo modo, al buscar "cero azúcar", los resultados incluirán productos "diet" y "sin azúcar". Los resultados de "sin azúcar" también incluirán productos "cero azúcar" y "diet".<br><br>`pomelo ⇄ toronja ⇄ pamplemusa`<br>En distintos países en los que se habla español, los términos "pomelo", "toronja" y "pamplemusa" se refieren a la misma fruta. Con sinónimos bidireccionales para cada término, no será necesario repetir cada palabra en la descripción del producto, ya que se mostrarán todos los resultados. |

Aprende más sobre el registro de sinónimos en [Crear sinónimos](/es/docs/tutorials/crear-sinonimos).

> ⚠️ Una vez registrado o modificado un sinónimo, puede tardar hasta dos horas en reflejarse en la tienda.

## Buenas prácticas

> ❗ No utilices las [palabras sustitutas](/es/docs/tutorials/optimizar-las-busquedas-con-palabras-sustitutas) para optimizar las búsquedas de productos y SKU en el Catálogo con Intelligent Search. Usa únicamente la funcionalidad de sinónimos, ya que permite una gestión más escalable de términos por producto.

### Clasificación de los resultados

Al crear un sinónimo bidireccional, no hay diferenciación entre los dos términos en la clasificación de los resultados de búsqueda. Por ejemplo, si existe un sinónimo bidireccional como tempra ⇄ paracetamol, al buscar `tempra`, los resultados de este medicamento no necesariamente aparecerán antes que los resultados de `paracetamol`. Para determinar la estrategia de clasificación, es necesario utilizar una [regla de merchandising](/es/docs/tutorials/reglas-de-merchandising).

### Palabras agregadas individualmente

Cuando se crea un sinónimo con más de una palabra, ambos términos deben añadirse individualmente al producto. Por ejemplo, si hay un sinónimo zapatillas running ⇄ tenis running y alguien busca el término `running`, los resultados de `tenis running` y de `zapatillas running` se incluirán en los resultados de la búsqueda.

### Recursividad

Los sinónimos son recursivos, es decir, los resultados son acumulativos. Por ejemplo, al crear un sinónimo `tempra ⇄ paracetamol` y otro sinónimo `paracetamol ⇄ dolor de cabeza`, en una búsqueda de `tempra`, considera que también se mostrarán los resultados de `dolor de cabeza`.

### Autocorrección en Intelligent Search

Los sinónimos no deben utilizarse para resolver errores ortográficos, variaciones de singular y plural, pronombres, artículos o preposiciones en los términos de búsqueda. En estos casos, Intelligent Search es capaz de interpretar, aprender y corregir automáticamente a través de [Autocorrección](/es/docs/tutorials/comportamiento-de-busqueda#autocorreccion).

Consulta a continuación algunos ejemplos de configuración de sinónimos:

| Sinónimos | Tipo | Comentario |
|---|---|---|
| `loción ⇄ crema` | Bidireccional | ✔️ Configuración adecuada. Cuando alguien busca `crema`, se añaden los resultados de `loción` y viceversa. |
| `pantalón → jeans` | Unidireccional | ✔️ Configuración adecuada. Cuando alguien busca `pantalón`, se añaden los resultados de `jeans`. |
| `sueter → sweater`  | Unidireccional | ❌ Configuración redundante. Intelligent Search corrige automáticamente casos como este. |
| `pantalón ⇄ pantalones` | Bidireccional | ❌ Configuración redundante. Intelligent Search corrige automáticamente casos como este. |
| `pantalón jeans ⇄ pantalón de jeans` | Bidireccional | ❌ Configuración redundante. Intelligent Search corrige automáticamente casos como este. |

> ℹ️ La funcionalidad [Sinónimos](/es/docs/tutorials/sinonimos-inteligentes) genera recomendaciones de términos para registrar sinónimos, además de la configuración manual. Si te interesa implementarla en el futuro, ponte en contacto con nuestro [soporte](https://support.vtex.com/hc/pt-br/requests). Es posible que más adelante se apliquen tarifas adicionales.

## Más información

* [Crear sinónimos](/es/docs/tutorials/crear-sinonimos)
* [Lista de sinónimos](/es/docs/tutorials/lista-de-sinonimos)
