---
title: 'Intelligent Search: Busca Híbrida (Beta)'
id: 366JCdaoDVz8V3FFZZ2fUD
status: PUBLISHED
createdAt: 2025-06-13T14:11:56.694Z
updatedAt: 2025-06-27T20:31:06.145Z
publishedAt: 2025-06-27T20:31:06.145Z
firstPublishedAt: 2025-06-13T14:15:17.126Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: intelligent-search-hybrid-search-beta
locale: es
legacySlug: intelligent-search-busca-hibrida-beta
subcategoryId: 23WdCYqmn2V2Z7SDlc14DF
---

<div class="alert alert-info">
  <p>Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por
el momento solo tienen acceso a ella algunos clientes seleccionados. Si ya eres
cliente VTEX y deseas adoptar esta funcionalidad en tu empresa, ponte en
contacto con el equipo de <a
href="https://help.vtex.com/es/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ">Soporte
comercial</a>. Pueden aplicarse cargos adicionales. Si aún no eres cliente, pero
te interesa esta solución, llena el <a
href="https://vtex.com/es-mx/contacto/">formulario de contacto</a>.</p>
</div>

La búsqueda híbrida de Intelligent Search combina la precisión de la búsqueda léxica con la inteligencia de los modelos semánticos de búsqueda para ofrecer una experiencia relevante, fluida y adaptada a la intención del usuario.

Esta estrategia facilita la búsqueda de productos, impulsa la conversión y elimina fricciones en la experiencia del usuario, especialmente en catálogos extensos y variados.

## Conceptos iniciales

La búsqueda híbrida une dos conceptos principales:

* **Búsqueda léxica**: basada en la coincidencia directa de palabras clave.  
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

**Consulta**: `ropa para entrenamiento en clima frío`

* **Léxica**: puede que no encuentre coincidencia directa con “entrenamiento en clima frío”.  
* **Semántica**: entiende que el usuario busca ropa deportiva con protección térmica, y prioriza prendas como pantalones térmicos y camisetas de manga larga.

## Búsqueda híbrida

La búsqueda híbrida de Intelligent Search combina estas dos estrategias de forma dinámica. La plataforma utiliza modelos semánticos entrenados para el contexto retail y complementa esa interpretación con la estructura léxica consolidada en Intelligent Search.

El modelo híbrido tiene en cuenta:

* Campos estructurados del catálogo (léxica)  
* Relaciones entre términos y sinónimos (semántica)  
* Contexto de búsqueda y comportamiento del usuario  
* Relevancia estadística y machine learning

El resultado es un sistema de búsqueda que ofrece resultados más alineados con lo que los consumidores realmente quieren encontrar, incluso cuando usan lenguaje natural o ambiguo.

Ejemplo: una tienda online de informática puede recibir tanto búsquedas específicas de "SSD A400 480GB" (caso en el que la búsqueda léxica resulta ideal) como consultas más abiertas, del tipo “mejor almacenamiento para gaming”, donde la búsqueda semántica ofrece mejores resultados. La búsqueda híbrida puede gestionar eficientemente ambas consultas.

En la práctica, si un cliente escribe “memoria 16GB”, por ejemplo, la parte léxica identifica la capacidad exacta (16 GB) mientras que el componente semántico entiende que “memoria” puede referirse tanto a RAM como a tarjetas de memoria, presentando ambas categorías con prioridad para los productos más relevantes basados en el comportamiento anterior del usuario.

## Beneficios

A continuación se destacan los principales beneficios de esta solución para la experiencia del consumidor y el desempeño de la tienda:

* **Aumento en la conversión:** ofrecer resultados más relevantes reduce el tiempo que toma encontrar un producto, lo que puede acelerar la decisión de compra.  
* **Comprensión del lenguaje natural:** los clientes pueden realizar búsquedas con el mismo lenguaje que emplean en su día a día: frases completas, términos ambiguos o lenguaje informal. Por ejemplo, el cliente puede realizar la siguiente consulta `¿cuál es el mejor tenis para senderismo?`, y la búsqueda entiende que están buscando zapatos con características específicas, como impermeables y con suela de agarre reforzado.  
* **Soporte para búsquedas complejas:** ideal para catálogos con productos que cuentan con descripciones subjetivas (como moda, belleza o decoración), donde el atributo exacto puede no estar explícito, pero la intención del usuario puede inferirse claramente.
