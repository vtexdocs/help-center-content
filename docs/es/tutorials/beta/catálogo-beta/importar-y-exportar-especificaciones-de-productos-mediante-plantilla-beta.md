---
title: 'Importar y exportar especificaciones de productos mediante plantilla (Beta)'
id: jQcmbocCb7kjHOr1JSWIL
status: PUBLISHED
createdAt: 2025-09-26T15:11:47.384Z
updatedAt: 2025-10-13T22:44:30.267Z
publishedAt: 2025-10-13T22:44:30.267Z
firstPublishedAt: 2025-09-26T16:15:47.785Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: importing-and-exporting-product-specifications-using-a-spreadsheet-beta
legacySlug: importacion-y-exportacion-de-especificaciones-de-producto-mediante-plantilla
locale: es
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

> ℹ️ Esta funcionalidad se encuentra en fase beta, lo que significa que estamos trabajando para optimizarla. Si tienes alguna duda, ponte en contacto con nuestro [Soporte](/es/support).

En el Admin VTEX puedes gestionar la importación y exportación de especificaciones de producto utilizando una plantilla, como se indica en las secciones a continuación:

- [Importar especificaciones de producto mediante plantilla](#importar-especificaciones-de-producto-mediante-plantilla)
- [Exportar especificaciones de producto mediante plantilla](#exportar-especificaciones-de-producto-mediante-plantilla)
- [Campos de la plantilla de especificaciones de producto](#campos-de-la-plantilla-de-especificaciones-de-producto)

## Importar especificaciones de producto mediante plantilla

Para importar especificaciones de producto a partir de una plantilla sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs** o ingresa [Productos y SKUs](/es/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) en la barra de búsqueda en la parte superior de la página.
2. En la parte superior de la página, haz clic en `Importar`.
3. Haz clic en `Especificaciones de producto`.
4. Agrega la plantilla con extensión `.xls` o `.xlsx`. Puedes arrastrar el archivo y soltarlo en el área indicada, o hacer clic en la ventana modal y seleccionar el archivo desde tu dispositivo.

  > ⚠️ Para obtener un modelo de la plantilla a importar, [exporta las especificaciones de producto](#exportar-especificaciones-de-producto-mediante-plantilla).

6. Cuando el archivo termine de cargar, haz clic en `Importar`.

  > ❗ El tiempo de importación depende del volumen de información procesada. La operación seguirá en curso aunque navegues a otra página.

Mientras la operación esté en curso, se mostrará un mensaje indicando que el archivo se está procesando. Al finalizar, se mostrará el mensaje "Especificaciones de producto importadas con éxito", y recibirás un email de confirmación.

## Exportar especificaciones de producto mediante plantilla

Para exportar un archivo `.xlsx` con información sobre especificaciones de producto sigue los pasos a continuación:

> ℹ️ La información exportada corresponde a los campos presentados en la sección [Campos de la plantilla de especificaciones de producto](#campos-de-la-plantilla-de-especificaciones-de-producto).

1. En el Admin VTEX, accede a **Catálogo > Productos** y SKUs o ingresa [Productos y SKUs](/es/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) en la barra de búsqueda en la parte superior de la página.
2. (Opcional) Si deseas exportar especificaciones de producto de determinados ítems, [busca](/es/tutorial/productos-y-skus--2ig7TmROlirWirZjFWZ3By#buscar-productos) o [filtra](/es/tutorial/productos-y-skus--2ig7TmROlirWirZjFWZ3By#filtrar-productos) según tus preferencias. Este paso no es necesario para exportar las especificaciones de todos los productos de tu catálogo.
3. En la parte superior de la página, haz clic en `Exportar`.
4. Haz clic en `Especificaciones de producto`.

Mientras la operación esté en curso, se mostrará un mensaje indicando que el archivo se está procesando. La operación seguirá en curso aunque navegues a otra página. Puedes [hacer seguimiento del progreso de la exportación en la ventana modal](/es/tutorial/importar-y-exportar-productos-y-skus-mediante-plantilla-beta--5udKxWP1ZeBD7QB7Fy2BNl#ventana-de-seguimiento-de-la-exportacion) que se abre en la página. 

Tras finalizar la exportación recibirás un email con un link para descargar el archivo. El plazo para realizar la descarga vía link es de 24 horas; después de este periodo el link expirará. También puedes descargar el archivo desde la ventana modal que se abre en la página.

## Campos de la plantilla de especificaciones de producto

La siguiente tabla presenta la descripción y ejemplo de valor de los campos de la plantilla de importación de especificaciones de producto. Los campos obligatorios están marcados con un asterisco (*).

| Campo | Descripción | Ejemplo |
| :--- | :--- | :--- |
| ID Producto* | Código numérico único identificador del producto. | 310117603 |
| Nombre de producto | Nombre del producto que los clientes ven al navegar. | Camiseta de algodón |
| Código de referencia Producto | Código de referencia único del producto, utilizado internamente por la tienda. Para llenar este campo, usa una combinación de letras y/o números. | camisaColor |
| ID Marca | Código numérico que identifica la [marca](/es/tutorial/o-que-e-uma-marca--QU07yhHoaWcEYseEucOQW) del producto. Esta información se puede encontrar en el Admin VTEX, en **Catálogo > Marcas**, o usando el endpoint [Get brand list](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/brand/list). | 2000003 |
| Marca | Nombre de la [marca](/es/tutorial/o-que-e-uma-marca--QU07yhHoaWcEYseEucOQW) del producto. Una vez completado, este campo no se puede editar. | AOC |
| ID de Departamento | Código numérico que identifica la categoría de mayor nivel jerárquico del producto. | 1000014 |
| Departamento | Nombre de la categoría de mayor nivel jerárquico del producto. | Ropa |
| ID Categoría | Número identificador único de la categoría de menor nivel jerárquico del producto. Esta información se puede encontrar en el Admin VTEX, en **Catálogo > Categorías**, o usando el endpoint [Get category tree](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pub/category/tree/-categoryLevels-). | 1000014 |
| Categoría | Nombre de la categoría de menor nivel jerárquico del producto. | Blusas |
| ID Campo | Código numérico que identifica el campo de especificación de producto para ese producto. | 493 |
| Nombre Campo | Nombre del campo de especificación de producto. | Material |
| Nombre Tipo Campo | [Tipo de campo de la especificación de producto](/es/tutorial/registrar-especificaciones-o-campos-de-producto--tutorials_106#tipos-de-campo-de-producto), que puede ser:<ul><li>Texto</li><li>Texto Grande</li><li>Número</li><li>Combo</li><li>Radio</li><li>CheckBox</li><li>Texto Indexado</li><li>Texto Grande Indexado</li></ul>Si utilizas la versión beta de categorías, revisa los tipos de campo aceptados para [atributos](/es/tutorial/crear-o-editar-categorias-atributos-y-variaciones-beta--1lzs3fHjM9N7CKFOxCCYQi#agregar-atributos). | Texto |
| ID Valor Campo | Código numérico que identifica el valor del campo. | 290 |
| Nombre Valor Campo | Nombre del valor del campo. | Sintético |
| Código Especificación | Código numérico que identifica la relación entre el campo y ese producto. | 418 |
| Valor Especificación | Valor asignado al campo de la especificación de producto. Esta es la única información que se puede editar a través de la plantilla. | Poliéster |

## Más información

* [Importar y exportar productos y SKUs mediante plantilla (Beta)](/es/tutorial/importar-y-exportar-productos-y-skus-mediante-plantilla-beta--5udKxWP1ZeBD7QB7Fy2BNl)
* [Importar y exportar especificaciones de SKUs mediante plantilla (Beta)](/es/tutorial/importar-y-exportar-especificaciones-de-skus-mediante-plantilla-beta--5EAioeC33wHpIxKHaGQzbV)
* [Importar y exportar imágenes de productos y SKUs mediante plantilla (Beta)](/es/tutorial/importar-y-exportar-imagenes-de-productos-y-skus-mediante-plantilla-beta--6zBisMdxDYeBF49LPzvfqt)

