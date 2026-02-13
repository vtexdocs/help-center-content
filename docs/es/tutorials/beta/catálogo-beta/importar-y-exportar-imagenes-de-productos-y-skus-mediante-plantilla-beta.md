---
title: 'Importar y exportar imágenes de productos y SKUs mediante plantilla (Beta)'
id: 6zBisMdxDYeBF49LPzvfqt
status: PUBLISHED
createdAt: 2025-09-26T15:59:03.761Z
updatedAt: 2025-11-05T14:19:35.695Z
publishedAt: 2025-11-05T14:19:35.695Z
firstPublishedAt: 2025-09-26T16:15:52.581Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: importing-and-exporting-product-and-sku-images-using-a-spreadsheet-beta
legacySlug: importacion-y-exportacion-de-imagenes-de-productos-y-skus-mediante-plantilla
locale: es
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

> ℹ️ Esta funcionalidad se encuentra en fase beta, lo que significa que estamos trabajando para optimizarla. Si tienes alguna duda, ponte en contacto con nuestro [Soporte](https://help.vtex.com/es/support).

En el Admin VTEX puedes gestionar la importación y exportación de información de imágenes utilizando plantillas, como se indica en las secciones a continuación:

- [Importar imágenes de productos y SKUs mediante plantilla](#importar-imagenes-de-productos-y-skus-mediante-plantilla)
- [Exportar imágenes de productos y SKUs mediante plantilla](#exportar-imagenes-de-productos-y-skus-mediante-plantilla)
- [Campos de la plantilla de imágenes de productos y SKUs](#campos-de-la-plantilla-de-imagenes-de-productos-y-skus)

## Importar imágenes de productos y SKUs mediante plantilla

Para importar imágenes de productos y SKUs a partir de una plantilla sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs** o ingresa [Productos y SKUs](/es/docs/tutorials/productos-y-skus) en la barra de búsqueda en la parte superior de la página.
2. En la parte superior de la página, haz clic en `Importar`.
3. Haz clic en `Imágenes`.
4. En la ventana modal haz clic en **Descargar modelo de plantilla** para obtener el archivo.
5. Llena los datos de la plantilla, tal como se indica en la sección [Campos de la plantilla de imágenes de productos y SKUs](#campos-de-la-plantilla-de-imagenes-de-productos-y-skus).
6. Agrega una plantilla con extensión `.xls` o `.xlsx`. Puedes arrastrar el archivo y soltarlo en el área indicada, o hacer clic en la ventana modal y seleccionar el archivo desde tu dispositivo.
7. Haz clic en `Importar`.

Durante la importación, aparecerá un mensaje que indica que el archivo se está procesando. La operación seguirá en curso aunque navegues a otra página. Después de que la operación termine recibirás un email de confirmación.

> ⚠️ Los productos con imágenes importadas con éxito se agregan automáticamente a la cola de [indexación](/es/docs/tutorials/entendiendo-el-funcionamento-de-la-indexacion). Si esto no sucede, consulta el artículo [¿Por qué no se muestra el producto en el sitio web?](/es/faq/por-que-el-producto-no-aparece-en-el-sitio-web).

## Exportar imágenes de productos y SKUs mediante plantilla

Para exportar un archivo `.xlsx` con las imágenes de tu catálogo sigue los pasos a continuación:

> ℹ️ La información exportada corresponde a los campos presentados en la sección Campos de la plantilla de imágenes de productos y SKUs.

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs** o ingresa [Productos y SKUs](/es/docs/tutorials/productos-y-skus) en la barra de búsqueda en la parte superior de la página.
2. (Opcional) Si deseas exportar las imágenes de determinados productos y SKUs, [busca](/es/docs/tutorials/productos-y-skus#buscar-productos) o [filtra](/es/docs/tutorials/productos-y-skus#filtrar-productos) los ítems deseados. Este paso no es necesario para exportar las imágenes de todos los ítems de tu catálogo.
3. En la parte superior de la página, haz clic en `Exportar`.
4. Haz clic en `Imágenes`.

Mientras la operación esté en curso, se mostrará un mensaje indicando que el archivo se está procesando. La operación seguirá en curso aunque salgas de la página. Puedes hacer seguimiento del [progreso de la exportación en la ventana modal](/es/docs/tutorials/importar-y-exportar-productos-y-skus-mediante-plantilla-beta#ventana-de-seguimiento-de-la-exportacion) que se abre en la página.

Tras finalizar la exportación de imágenes de productos y SKUs recibirás un email con un link para descargar el archivo. El plazo para realizar la descarga mediante el link es de 24 horas; después de este periodo el link expirará. También puedes descargar el archivo desde la ventana modal que se abre en la página.

## Campos de la plantilla de imágenes de productos y SKUs

La siguiente tabla muestra la descripción y un ejemplo de valor de los campos de la plantilla de importación de imágenes del catálogo. Los campos obligatorios están marcados con un asterisco (*).

> ℹ️ Para importar una nueva imagen, los únicos campos obligatorios son **ID SKU** y **URL de importación de imagen**. Consulta las [Buenas prácticas de uso de imágenes en el módulo Catálogo](/es/docs/tutorials/buenas-practicas-para-el-uso-de-imagenes-en-el-catalogo).

| Campo | Descripción | Ejemplo |
| :--- | :--- | :--- |
| ID Producto | Código numérico único identificador del producto. | 310117603 |
| Nombre Producto | Nombre del producto que los clientes ven al navegar. | Camiseta de algodón |
| ID SKU* | Código numérico único que identifica el SKU. | 310119261 |
| Nombre SKU | Nombre del SKU que identifica la variación del producto. | M |
| Código Referencia SKU | Código de referencia único del SKU, utilizado internamente por la tienda. Debe ser una combinación exclusiva de letras y/o números. | camisaVerano26 |
| ID de imagen | Código numérico que identifica la imagen del SKU. Para importar una nueva imagen deja el campo en blanco, y para actualizar una imagen existente conserva el valor actual. | 167002 |
| Nombre de imagen | Nombre de la imagen, utilizado internamente en la tienda. Este campo no permite el uso de caracteres especiales, acentos ni espacios en blanco. | lateral_camiseta_azul |
| Posición Imagen | Número de la posición de exhibición de la imagen en el sitio web, donde `0` corresponde a la primera posición, `1` a la segunda posición, y así sucesivamente. | 0 |
| Etiqueta | Nombre que identifica la etiqueta de la imagen y que se utiliza internamente para relacionar valores comunes entre imágenes. | Vista lateral |
| Texto de imagen | Texto que se asociará a la imagen, utilizado internamente en la tienda. No utilices caracteres especiales ni acentos, y no repitas valores de los campos **Nombre de imagen** y **Etiqueta**. | lateral camiseta verano26 |
| URL de imagen | Nombre que compone parte de la URL de la imagen que está alojada en la plataforma VTEX. Se muestra después de la última barra `/`, incluyendo la extensión del archivo. Si el campo no tiene valor, déjalo en blanco. | camiseta_azul_cuello_redondo.jpg |
| URL de importación Imagen | Imagen que se asociará al SKU. Para importar una nueva imagen, este campo es obligatorio y debe [completarse con la URL](/es/docs/tutorials/como-definir-la-url-de-un-producto) del archivo alojado. Debe comenzar con el identificador de protocolo HTTP (`http://`) y terminar con una de las siguientes extensiones:<ul><li>jpg</li><li>png</li><li>gif</li><li>ico</li><li>svg</li><li>webp</li></ul>Para actualizar una imagen existente, deja el campo en blanco. De lo contrario, la imagen se creará nuevamente, generando una duplicación. | `http://archivos.com/ids/image/camiseta_azul_cuello_redondo.jpg` |

## Más información

* [Importar y exportar productos y SKUs mediante plantilla (Beta)](/es/docs/tutorials/importar-y-exportar-productos-y-skus-mediante-plantilla-beta) 
* [Importar y exportar especificaciones de productos mediante plantilla (Beta)](/es/docs/tutorials/importar-y-exportar-especificaciones-de-productos-mediante-plantilla-beta)
* [Importar y exportar especificaciones de SKUs mediante plantilla (Beta)](/es/docs/tutorials/importar-y-exportar-especificaciones-de-skus-mediante-plantilla-beta)

