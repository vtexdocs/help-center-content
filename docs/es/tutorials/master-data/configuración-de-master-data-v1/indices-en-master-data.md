---
title: 'Índices en Master Data'
id: tutorials_785
status: PUBLISHED
createdAt: 2017-04-27T21:58:03.173Z
updatedAt: 2024-07-17T13:57:12.010Z
publishedAt: 2024-07-17T13:57:12.010Z
firstPublishedAt: 2017-04-27T23:03:42.760Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: indexes-in-master-data
legacySlug: configurando-indice-en-el-vtex-master-data
locale: es
subcategoryId: WpbGhubuRZaNZilJSXnqu
---

Un índice en Master Data es una referencia a uno o varios campos, utilizada para optimizar las consultas en una entidad de datos. El uso de índices permite buscar registros con mayor rapidez.

Para ilustrarlo, considera el índice de un libro: muestra los temas contenidos en el libro, así como la página correspondiente donde se desarrolla cada uno. Para realizar una búsqueda eficiente, en lugar de recorrer todas las páginas del libro para encontrar el resultado deseado, puedes consultar el índice y dirigirte directamente al tema que buscas. Del mismo modo, el índice en Master Data proporciona un método más eficaz para encontrar documentos.

## Configurar índice

Sigue los pasos a continuación para definir uno o varios campos como índices en Master Data:

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Master Data**.
2. Haz clic en el ícono de engranaje <i class="fas fa-cog"></i> en la aplicación donde deseas agregar el índice.
3. Haz clic en **Estructura de datos**.
4. Haz clic en la pestaña **Índice**.
5. Haz clic en `Agregar`.
6. Rellena los campos a continuación:

    * **Nombre:** nombre del índice.
    * **Valores únicos:** opción para bloquear nuevos registros con valores repetidos para el índice o índices creados. Consulta la sección [Restricción de valores por documento (clave alternativa)](#restriccion-de-valores-por-documento-clave-alternativa) para obtener más detalles.
    * **Entidad de datos:** nombre de la entidad de datos que contiene los campos que se van a configurar como índices.
    * **Campos:** nombre de uno o varios campos que se configurarán como índices. Si agregas más de un campo, sepáralos con una coma. Ejemplo: `firstName,document`.
7. Haz clic en `Guardar`.

## Casos de uso

Aprende más sobre los principales escenarios de uso de índices en Master Data en las secciones a continuación.

### Consultas de hasta mil documentos

Se recomienda el uso de índices para búsquedas con resultados de hasta mil documentos. Si al buscar a través de un índice obtienes más de mil documentos como resultado, puedes optimizar el rendimiento indexando el campo, es decir, [configurándolo como filtro en la entidad de datos](/es/tutorial/filtrando-dados-no-master-data--tutorials_778).

### Restricción de valores por documento (clave alternativa)

La configuración de índices permite bloquear uno o varios campos para evitar registros con valores repetidos. Estos campos actúan como claves alternativas, es decir, valores alternativos para identificar un registro.

La clave alternativa está configurada por el campo **Valores únicos** en la [configuración del índice](#configurar-indice) y funciona de diferentes maneras dependiendo del número de campos insertados en el índice. Consulta las secciones a continuación para saber cómo funciona en cada caso.

#### Un solo campo en el índice

Si solo hay un campo configurado como índice, la clave alternativa evitará que se registre un valor que ya haya sido registrado en ese campo anteriormente.

Por ejemplo, la tabla **Cliente** tiene dos columnas: **ID** y **nombre**. Para facilitar la búsqueda, el campo **Nombre** (`name`) puede configurarse como índice y marcarse como **Valores únicos**, como se ilustra a continuación:

![indices-1-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/master-data/configuraci%C3%B3n-de-master-data-v1/indices-en-master-data_1.png)

Como resultado, no será posible ingresar un nombre que ya haya sido registrado en **Cliente**:

![indices-2-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/master-data/configuraci%C3%B3n-de-master-data-v1/indices-en-master-data_2.png)

En el ejemplo anterior, como ya existe un registro con el **Nombre** igual a **María**, no es posible registrar otro con el mismo valor.

> ⚠️ Utiliza la opción **Valores únicos** con precaución: si deseas permitir que un valor se repita, configurarlo como único hará que el sistema bloquee la inserción de registros duplicados, impidiendo su registro.

#### Varios campos en el índice

Si hay más de un campo en el índice, la clave alternativa evitará que un conjunto de valores se repita en los campos seleccionados.

Por ejemplo, considera que la entidad **Cliente** tiene tres campos: **ID**, **Nombre** y **Documento**. En la configuración del índice, en **Campos**, se ingresaron los términos Nombre (`firstName`) y Documento (`document`), como se ilustra a continuación:

![indices-3-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/master-data/configuraci%C3%B3n-de-master-data-v1/indices-en-master-data_3.png)

En este caso, se puede repetir o el valor del **Nombre** o el valor del **Documento**. Sin embargo, la combinación de ambos valores no puede repetirse; es decir, no puede existir ningún registro con el mismo par (**Nombre** y **Documento**).

![indices-4-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/master-data/configuraci%C3%B3n-de-master-data-v1/indices-en-master-data_4.png)

En el ejemplo anterior, ya existe un registro con el **Nombre** igual a **María**. Es posible incluir otro registro con el mismo **Nombre**, siempre que el valor del **Documento** sea diferente.

> ⚠️ Si se repite la misma combinación de valores, el registro no se guardará. Utiliza la opción **Valores únicos** solo cuando no haya ninguna posibilidad de que un conjunto de valores se repita en registros diferentes.
