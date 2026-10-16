---
title: 'Intelligent Search: búsqueda semántica (beta)'
id: 366JCdaoDVz8V3FFZZ2fUD
status: PUBLISHED
createdAt: 2025-06-13T14:11:56.694Z
updatedAt: 2026-09-22T15:17:07.000Z
publishedAt: 2025-10-29T21:46:04.706Z
firstPublishedAt: 2025-06-13T14:15:17.126Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: intelligent-search-semantic-search-beta
legacySlug: intelligent-search-busca-hibrida-beta
locale: es
subcategoryId: 23WdCYqmn2V2Z7SDlc14DF
---

> ℹ️ La búsqueda semántica está disponible exclusivamente como parte de Search Optimizer Agent, servicio adicional de optimización de la búsqueda.
> 
> Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por el momento solo tienen acceso a ella algunos clientes seleccionados. Si ya eres cliente VTEX y deseas adoptar esta funcionalidad en tu empresa ponte en contacto con nuestro equipo de [Soporte comercial](/es/docs/tracks/soporte-comercial). Pueden aplicarse cargos adicionales. Si aún no eres cliente, pero te interesa esta solución, llena el [formulario de contacto](https://www.vtex.com/es-mx/empezar/).

Intelligent Search combina la precisión de la búsqueda léxica con la inteligencia de los modelos semánticos de búsqueda para ofrecer una experiencia relevante, fluida y adaptada a la intención del usuario.

Esta estrategia facilita la búsqueda de productos, impulsa la conversión y elimina fricciones en la experiencia del usuario, especialmente en catálogos extensos y variados.

## Conceptos iniciales

Intelligent Search une dos conceptos principales:

* **Búsqueda léxica**: también denominada búsqueda de texto completo, se basa en la coincidencia directa de palabras clave.
* **Búsqueda semántica**: enfocada en la interpretación del significado y la intención detrás de la consulta.

Consulta a continuación en qué consiste cada una.

### Búsqueda léxica

La búsqueda basada en coincidencia exacta funciona con la comparación directa entre los términos de la consulta y los datos del catálogo, como nombre del producto, descripción y atributos técnicos. Este enfoque funciona bien cuando el cliente utiliza palabras clave exactas o busca códigos de producto.

**Ejemplo:**

* **Consulta:** `Tenis Nike Air Max 90`

   * La búsqueda léxica devuelve exactamente los productos con ese nombre en el catálogo.

### Búsqueda semántica

La búsqueda semántica se basa en el **Procesamiento de Lenguaje Natural (PLN)** y **modelos de machine learning** para interpretar el significado de las palabras y el contexto en el que se usan. Reconoce sinónimos, relaciona términos similares e identifica la intención del cliente incluso cuando la consulta no menciona palabras exactas encontradas en el catálogo.

**Ejemplo:**

* **Consulta**: `tenis para correr maratón`

   * La búsqueda semántica interpreta que el usuario busca tenis orientados a rendimiento de larga distancia y prioriza productos diseñados para carreras de resistencia, aunque no mencionen la palabra “maratón” en la descripción.

* **Consulta**: `ropa para entrenamiento en clima frío`

   * **Léxica**: puede que no encuentre coincidencia directa con “entrenamiento en clima frío”.
   * **Semántica**: entiende que el usuario busca ropa deportiva con protección térmica, y prioriza prendas como pantalones térmicos y camisetas de manga larga.

## Enfoque de Intelligent Search

Intelligent Search combina estas dos estrategias de forma dinámica. La plataforma utiliza modelos semánticos entrenados para el contexto retail y complementa esa interpretación con la estructura léxica consolidada en Intelligent Search.

Este modelo considera:

* Campos estructurados del catálogo (léxica)
* Relaciones entre términos y sinónimos (semántica)
* Contexto de búsqueda y comportamiento del usuario
* Relevancia estadística y machine learning

El resultado es un sistema de búsqueda que ofrece resultados más alineados con lo que los consumidores realmente quieren encontrar, incluso cuando usan lenguaje natural o ambiguo.

Ejemplo: una tienda online de informática puede recibir tanto búsquedas específicas de "SSD A400 480GB" (caso en el que la búsqueda léxica resulta ideal) como consultas más abiertas, del tipo “mejor almacenamiento para gaming”, donde la búsqueda semántica ofrece mejores resultados. Intelligent Search puede gestionar eficientemente ambas consultas.

En la práctica, si un cliente escribe “memoria 16GB”, por ejemplo, la parte léxica identifica la capacidad exacta (16 GB) mientras que el componente semántico entiende que “memoria” puede referirse tanto a RAM como a tarjetas de memoria, presentando ambas categorías con prioridad para los productos más relevantes basados en el comportamiento anterior del usuario.

## Beneficios

A continuación se destacan los principales beneficios de esta solución para la experiencia del consumidor y el desempeño de la tienda:

* **Aumento en la conversión:** ofrecer resultados más relevantes reduce el tiempo que toma encontrar un producto, lo que puede acelerar la decisión de compra.
* **Comprensión del lenguaje natural:** los clientes pueden realizar búsquedas con el mismo lenguaje que emplean en su día a día: frases completas, términos ambiguos o lenguaje informal. Por ejemplo, el cliente puede realizar la siguiente consulta `¿cuál es el mejor tenis para senderismo?`, y la búsqueda entiende que están buscando zapatos con características específicas, como impermeables y con suela de agarre reforzado.
* **Soporte para búsquedas complejas:** ideal para catálogos con productos que cuentan con descripciones subjetivas (como moda, belleza o decoración), donde el atributo exacto puede no estar explícito, pero la intención del usuario puede inferirse claramente.

## Cómo probar la búsqueda semántica

Antes de aplicar la búsqueda semántica para todos los clientes de la tienda es posible probarla para comparar los resultados con y sin esta funcionalidad. El método para realizar las pruebas depende de la arquitectura de la tienda.

### Tiendas Store Framework

Para tiendas que usan [Store Framework](https://help.vtex.com/es/docs/tracks/frontend#store-framework), VTEX puede crear un workspace de pruebas y, si es necesario, configurar una prueba A/B con la solución interna de VTEX para comparar los resultados con y sin búsqueda semántica. Para solicitarlo, ponte en contacto con el [Soporte](https://help.vtex.com/es/docs/tutorials/como-funciona-el-soporte-de-vtex).

### Tiendas Headless o FastStore

Para tiendas Headless o que usan [FastStore](https://help.vtex.com/es/docs/tracks/frontend#faststore), la búsqueda semántica puede probarse agregando un parámetro a la URL de la llamada realizada a la [API de Intelligent Search](https://developers.vtex.com/docs/api-reference/intelligent-search-api-v1#get-/product-search/-facets-), sin necesidad de modificar ninguna configuración de la tienda.

Una *query string* es el fragmento que aparece después del símbolo `?` al final de una URL. Se usa para enviar información adicional al servidor sin alterar el resto de la dirección, en el formato `parámetro=valor`. Cuando hay más de un parámetro, se separan con el símbolo `&`.

Para probar la búsqueda semántica en una llamada específica agrega el parámetro `semanticRatio` a la *query string* de la URL de búsqueda, en el formato `?semanticRatio={valorPeso}`. Este parámetro acepta valores entre `0` y `1`, que definen cómo funciona la búsqueda:

* `0`: usa solo la búsqueda léxica. Si el parámetro no se especifica, se aplica este mismo comportamiento.
* `1`: usa solo la búsqueda semántica.
* `0.5`: combina los dos modelos. Cualquier valor entre `0` y `1` se comporta como `0.5`.

**Ejemplo:**

* Sin búsqueda semántica:
   `https://{accountName}.vtexcommercestable.com/api/intelligent-search/v1/product-search?query=baby%20formula`
* Con búsqueda semántica:
   `https://{accountName}.vtexcommercestable.com/api/intelligent-search/v1/product-search?query=baby%20formula&semanticRatio=0.5`

Como el parámetro se agrega solo en la URL de la llamada de prueba, no altera la configuración de la tienda ni afecta otras llamadas. Esto permite comparar las dos versiones lado a lado o usar esta URL en una herramienta propia de prueba A/B para dirigir parte del tráfico a la versión con búsqueda semántica.

### Activación directa en producción

También es posible activar la búsqueda semántica directamente para todas las llamadas hechas a la API, sin necesidad de incluir el parámetro `semanticRatio` en cada solicitud. Solicita esta activación al [Soporte](https://help.vtex.com/es/docs/tutorials/como-funciona-el-soporte-de-vtex). Como afecta a todos los clientes de la tienda en producción, no se recomienda usarla para realizar pruebas.
