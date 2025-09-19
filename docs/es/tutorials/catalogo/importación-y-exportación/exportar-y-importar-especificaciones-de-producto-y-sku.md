---
title: 'Exportar y importar especificaciones de producto y SKU'
id: tutorials_274
status: PUBLISHED
createdAt: 2017-04-27T22:10:43.787Z
updatedAt: 2025-06-12T17:12:25.174Z
publishedAt: 2025-06-12T17:12:25.174Z
firstPublishedAt: 2017-04-27T23:03:12.428Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: exporting-and-importing-product-and-sku-specifications
legacySlug: importar-y-exportar-especificacion-de-producto-y-sku
locale: es
subcategoryId: 2u48reCb68K48EAcm86ccM
---

Después de definir el árbol de categorías y registrar las [especificaciones de los productos y de los SKU](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) en su tienda, debe rellenar los valores de las especificaciones que ha creado. En VTEX Admin, este proceso puede realizarse mediante una plantilla o manualmente en el registro de [producto](/es/tutorial/registrar-especificaciones-o-campos-de-producto--tutorials_106#registro-de-producto) y en el [registro del SKU](/es/tutorial/registrar-especificaciones-o-campos-de-sku--tutorials_119#registro-del-sku).

En este artículo, explicamos cómo funciona la exportación e importación de plantillas con especificaciones de productos y de SKU en VTEX Admin.

> ℹ️ Para exportar e importar especificaciones mediante la **Catalog API**, siga la guía para desarrolladores [How to create a specification](https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification) (Cómo crear una especificación).

## Exportar especificaciones de producto o SKU

Vea a continuación cómo exportar la plantilla con las especificaciones del producto o SKU:

1. En el Admin VTEX, accede a **Catálogo**, o escribe **Catálogo** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Importación y exportación**.
3. Haz clic en la pestaña __Especificaciones de producto__ o **Especificaciones de SKU**, en función de sus necesidades.
    ![skuexport1.es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/importaci%C3%B3n-y-exportaci%C3%B3n/exportar-y-importar-especificaciones-de-producto-y-sku_1.png)
4. Haz clic con el botón derecho en la categoría deseada.
    No puede exportar especificaciones de todas las categorías a la vez. Debe elegir sólo una categoría cuyas especificaciones desee exportar. 
5. Haz clic en `Exportar`.
    Aparecerá un rectángulo verde en pantalla.
6. Haz clic en `Haz clic aquí para descargar el archivo` para exportar la plantilla.

![skuexport2.es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/importaci%C3%B3n-y-exportaci%C3%B3n/exportar-y-importar-especificaciones-de-producto-y-sku_2.png)

> ℹ️ La hoja de plantilla exportada estará disponible en tu email durante una semana. Si supera este periodo, vuelva a seguir la exportación paso a paso para generar una nueva hoja de plantilla.

## Importar especificaciones de producto o SKU

Para importar las especificaciones se recomienda utilizar una planilla exportada del sistema, ya que ésta presenta los requisitos necesarios para la importación, además de contener datos de referencia que podrán auxiliar en el rellenado.

En la planilla de importación, la única columna que debe rellenarse es la de “ValorEspecificacao”. Las demás columnas deben permanecer sin cambios porque sus valores se utilizarán para validar los datos.

La estructura de la plantilla presenta una línea para cada campo de producto o de SKU, o sea, el mismo producto o SKU será presentado diversas veces de acuerdo a los campos existentes en su categoría.

> ⚠️ En plantilla exportada, la columna que hace referencia a "ValueSpecification" es "NameFieldValue (Não alterável)". Al rellenar el campo, la ortografía de las características debe ser exacta. Las mayúsculas y las minúsculas marcan la diferencia en este caso.

Siga los pasos a continuación para importar la plantilla:

1. En VTEX Admin, todavía en __Catálogo > Importar y Exportar > Especificación de Producto__ o __Especificación de SKU__, baja la página hasta **Cargar archivo para importación**.
2. Haz clic en **Seleccionar** para seleccionar el archivo con la plantilla completa en la computadora.
3.  Haz clic en `Importar`.

![skuexport3.es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/importaci%C3%B3n-y-exportaci%C3%B3n/exportar-y-importar-especificaciones-de-producto-y-sku_3.png)

## Más información
- [Especificaciones de producto e de SKU](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP)
- [Registrar especificaciones o campos de producto](/es/tutorial/registrar-especificaciones-o-campos-de-producto--tutorials_106)
- [Registrar especificaciones o campos de SKU](/es/tutorial/registrar-especificaciones-o-campos-de-sku--tutorials_119)
