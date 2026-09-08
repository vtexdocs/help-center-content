---
title: 'Intelligent Search: mejoras en filtros, palabras clave y caracteres especiales'
slug: '2026-08-15-intelligent-search-mejoras-en-filtros-keywords-y-caracteres-especiales'
hidden: false
createdAt: 2026-08-15T00:00:00.000Z
updatedAt: 2026-08-15T00:00:00.000Z
contentType: updates
productTeam: Intelligent Search
slugEN: 2026-08-15-intelligent-search-filters-keywords-and-special-characters-improvements
locale: es
announcementSynopsisES: 'Intelligent Search recibió mejoras en la visibilidad de filtros, en la generación de palabras clave y en el manejo de caracteres especiales, además de la corrección de un bug en el analizador de idioma inglés.'
tags:
  - Mejora
  - Intelligent Search
---

[Intelligent Search](https://help.vtex.com/es/docs/tracks/vision-general-intelligent-search) recibió un conjunto de optimizaciones que aumentan la relevancia y la precisión de los resultados de búsqueda, además de la corrección de un bug en el analizador de idioma inglés. Estas mejoras no se aplican automáticamente. Para activar cualquiera de ellas en tu cuenta, ponte en contacto con el [Soporte VTEX](https://supporticket.vtex.com/support).

## ¿Qué cambió?

### Cobertura mínima para mostrar filtros

Ahora es posible ocultar filtros que afectan solo a una pequeña parte de los resultados de búsqueda. Los catálogos grandes suelen incluir filtros basados en especificaciones presentes en pocos productos, lo que llena el panel de filtros con opciones de poca cobertura.

Con la cobertura mínima activada, los filtros cuyas opciones no alcanzan el porcentaje mínimo definido sobre el total de resultados de búsqueda se ocultan automáticamente. Puedes excluir filtros específicos de esta regla para que siempre se muestren, independientemente de la configuración.

Considera una búsqueda por "camisa" que devuelve 1000 productos, con cobertura mínima definida en 5%:

- El filtro **Color** cubre 1000 productos (100%) y se muestra.
- El filtro **Talla** cubre 600 productos (60%) y se muestra.
- El filtro **Tela** cubre solo 30 productos (3%) y se oculta automáticamente, ya que ninguna de sus opciones alcanza el porcentaje mínimo.

Consulta más información en [Configuración de la búsqueda](https://help.vtex.com/es/docs/tutorials/configuracion-de-la-busqueda).

### Generación de palabras clave a partir de cualquier especificación de producto

Además del nombre del producto y de la marca, ahora las especificaciones también se pueden configurar para generar palabras clave. Cuando una especificación se define para este fin, sus valores registrados cuentan como palabras clave del producto con el mismo peso que las palabras clave extraídas del nombre o de la marca.

Esta mejora es especialmente útil en catálogos en los que la información relevante para la búsqueda está registrada en las especificaciones, y no en el nombre del producto, por ejemplo, cuando el nombre no describe el tipo, la función u otro atributo central del ítem.

Considera una búsqueda por "no frost":

- **Refrigerador Duplex 14 pies cúbicos** (especificación "Tecnología de descongelamiento": No Frost, configurada para generar una palabra clave) tiene una relevancia alta, ya que el valor de la especificación coincide con la búsqueda y recibe el mismo aumento de relevancia que una coincidencia con una palabra clave, aunque el término no aparezca en el nombre del producto.
- **Refrigerador 14 pies** (especificación Tecnología de descongelamiento: cíclico) tiene una relevancia baja, ya que ni el nombre ni el valor de la especificación coinciden con No Frost.

Consulta más información en [Cómo funciona la relevancia de los resultados de búsqueda](https://help.vtex.com/es/docs/tutorials/intelligent-search-como-funciona-la-relevancia-de-los-resultados-de-busqueda).

### Tratamiento de caracteres especiales

Se mejoró el procesamiento de símbolos como `®`, `@` y `&` en la búsqueda. Al activarlo, estos caracteres se neutralizan durante la indexación, lo que permite que los productos con símbolos en el nombre se encuentren incluso cuando el cliente los omite en la búsqueda.

Por ejemplo, el producto `Marca® Papel Bond & Copias` puede encontrarse mediante la búsqueda `marca bond`.

Consulta más información en [Comportamiento de búsqueda](https://help.vtex.com/es/docs/tutorials/comportamiento-de-busqueda).

### Corrección de bug: stemming del analizador de inglés

Intelligent Search usa un analizador de idioma para normalizar los términos buscados, unificando variaciones de singular y plural de una misma palabra en la misma raíz. Por ejemplo, en tiendas en inglés, una búsqueda por `sneaker` también devuelve productos que contienen `sneakers`.

Corregimos inconsistencias de stemming (raíz de las palabras) en el analizador de idioma inglés para términos como `sticks`, `sharpies`, `its`, `bags`, `boards`, `books`, `bowls`, `cards`, `crackers`, `dividers`, `games`, `glue-sticks`, `k-cups`, `knives`, `nuts`, `rolls`, `shelves` y `supplies`, cuyas formas en plural no se mapeaban correctamente a la raíz en singular. Esta corrección está disponible solo para cuentas que operan en inglés.

Consulta más información en [Comportamiento de búsqueda](https://help.vtex.com/es/docs/tutorials/comportamiento-de-busqueda) y en [Cómo funciona la relevancia de los resultados de búsqueda](https://help.vtex.com/es/docs/tutorials/intelligent-search-como-funciona-la-relevancia-de-los-resultados-de-busqueda).

## ¿Qué se necesita hacer?

Ninguna de las mejoras listadas se aplica automáticamente. Para activar cualquiera de ellas en tu cuenta, ponte en contacto con el [Soporte VTEX](https://supporticket.vtex.com/support) indicando la mejora que deseas activar. La corrección de stemming está disponible solo para cuentas que operan en inglés.
