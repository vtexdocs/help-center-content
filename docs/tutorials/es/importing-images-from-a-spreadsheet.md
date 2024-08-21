---
title: 'Importar imágenes por plantilla'
id: tutorials_262
status: PUBLISHED
createdAt: 2017-04-27T22:11:24.581Z
updatedAt: 2024-03-04T22:25:58.399Z
publishedAt: 2024-03-04T22:25:58.399Z
firstPublishedAt: 2017-04-27T23:03:11.506Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: importando-imagenes-por-plantilla
locale: es
legacySlug: importando-imagenes-por-plantilla
subcategory: pwxWmUu7T222QyuGogs68
---

Registrar las imágenes de los productos es un procedimiento clave, de lo contrario, los productos estarán inactivos. La forma más rápida de registrarlas es importando las imágenes a través de una plantilla de Excel porque, de esta manera, el registro se hará de forma masiva.

Sigue los pasos a continuación para la importación masiva de las imágenes:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Importación y exportación**.
3. Haz clic en la pestaña **Importar imágenes**.
4. Haz clic [aquí][1] para descargar la plantilla modelo en el formato aceptado por el sistema (.xls). Esto te evitará problemas al momento de importar las imágenes.
5. Rellena la plantilla según se describe en la sección [Cómo completar la plantilla para importar imágenes][2] y guárdala en tu computadora.
6. Haz clic en el botón <i class="fas fa-folder-open"></i> `Seleccionar archivo...`.
7. Busca el archivo guardado en tu computadora y haz clic en `Abrir`.
8. En el campo **Email para notificación**, ingresa una dirección de email donde recibirás las notificaciones de la importación. Por defecto, el email registrado será el que uses para acceder al Admin VTEX.
9. Haz clic en `Importar`.

El sistema procesará tu solicitud internamente y, luego, enviará un email a la dirección registrada para informar si el archivo procesado arrojó algún error durante la importación de las imágenes o no.

El tiempo que tarde este proceso dependerá del tamaño del archivo. Si la plantilla tiene más de 2000 filas, te recomendamos separarlas en más de un archivo.

Por último, los productos de las filas de la plantilla cuyas imágenes se procesaron con éxito se pondrán en la cola de indexación.

>❗ Siempre que se importe una plantilla con información de imágenes, el sistema cargará la nueva imagen del SKU. Presta atención a posibles duplicaciones.
>
> Si se importa por segunda vez una plantilla con información que ya se envió previamente a VTEX, la información no sobrescribirá la imagen anterior: la imagen se duplicará en el registro del SKU.

## Cómo completar la plantilla para importar imágenes

A continuación, se explica cómo rellenar cada campo de la plantilla de importación de imágenes:

- [URL][3]
- [NomeImagem][4]
- [TextoImagem][5]
- [Label][6]
- [IdSku][7]
- [CodigoreferenciaSku][8]

### URL

<div class= “alert alert-info”>
<p>Este campo es obligatorio. No está permitido utilizar caracteres especiales, puntos en el nombre de la imagen o tildes.</p>
</div>

Este campo debe rellenarse con la URL de la imagen que se asociará al SKU, la cual debe ser pública y estar alojada en un servidor FTP desde donde se origina el _link_ de la imagen. La URL debe comenzar, sin excepción, con el identificador de protocolo HTTP (`http://`) y terminar con la extensión del archivo (`.jpg`, `.png` o `.gif`). Ejemplo: `http://www.ejemploimage.com.br/imagem03/teste01/exemplo15.jpg`.

Para evitar errores, es importante verificar que la URL de la imagen ingresada en la plantilla esté completa, incluyendo desde `http://` hasta la extensión del archivo. De lo contrario, el sistema no podrá acceder a la URL y la imagen no se importará.

No es necesario que cuentes con un servidor FTP propio para enviar las URL de las imágenes. Puedes alojar esos datos en sitios web gratuitos y en servidores FTP externos o internos, siempre que utilicen el protocolo de seguridad HTTP.

Además, para verificar si las URL son correctas, puedes usar un servicio externo que verifique su validez.

>⚠️ Recomendamos que cada imagen no pese más de 3000 KB (3 MB).

### NomeImagem

<div class= “alert alert-info”>
<p>Este campo es obligatorio. No está permitido usar caracteres especiales, tildes o espacios en blanco.</p>
</div>

El nombre de la imagen es lo que viene luego de la última / en la URL de la imagen, incluida la extensión del archivo. Por ende, este campo se debe rellenar con el nombre y la extensión del archivo (`.jpg`, `.png` o `.gif`). Ejemplo: `exemplo15.jpg`.

El nombre estará relacionado con la imagen en el gestor de archivos del CMS - Portal Legado.

### TextoImagem

<div class= “alert alert-info”>
  <p>No está permitido usar caracteres especiales ni tildes en este campo.</p>
  <p>No está permitido usar el mismo valor en los campos <strong>Label</strong> y <strong>TextoImagem</strong>.</p>
</div>

El campo __TextoImagen__ debe rellenarse con el texto que se asociará a tu imagen. Quedará registrado en el registro del SKU en la pestaña __Imágenes__ en el campo __Texto__.

### Label

<div class= “alert alert-info”>
  <p>Este campo es obligatorio. No está permitido usar caracteres especiales ni tildes en este campo.</p>
  <p>No está permitido usar el mismo valor en los campos <strong>Label</strong> y <strong>TextoImagem</strong>.</p>
</div>

__Label__ es la «etiqueta» que se usa para facilitar la organización de la plantilla de las páginas de tu sitio web a través de la referencia del valor ingresado en esta. Ejemplos: frontal, lateral, superior.

### IdSku

<div class= “alert alert-info”>
<p>Este campo es obligatorio. El ID informado debe corresponderse con el ID de un SKU ya existente en el Catálogo.</p>
</div>

El ID del SKU es el código que identifica al SKU que se asociará a la imagen. Este código puede obtenerse exportando **Productos y SKU**. Para más información, consulta el artículo [Cómo exportar plantillas de productos][9].

### CodigoreferenciaSku

El código de referencia del SKU es el código que consta en el registro del SKU en el campo **Código de referencia**. Este campo es obligatorio.

[1]: https://docs.google.com/spreadsheets/d/17ItiEncnnioxLZFLiKDTxs5Yj0D6tn-i/edit?usp=sharing&ouid=115538149359194322936&rtpof=true&sd=true
[2]: #como-completar-la-plantilla-para-importar-imagenes
[3]: #url
[4]: #nomeimagem
[5]: #textoimagem
[6]: #label
[7]: #idsku
[8]: #codigoreferenciasku
[9]: https://help.vtex.com/es/tutorial/como-exportar-planilla-de-productos--2sIroGeqZqaN3NAvaSGwWV
