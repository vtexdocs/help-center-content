---
title: 'Error al intentar importar SKUs vía plantilla en el Admin VTEX'
id: 1TDF87s7P1UJT1hNDGZsuk
status: PUBLISHED
createdAt: 2024-07-01T15:07:50.982Z
updatedAt: 2025-08-14T22:09:55.424Z
publishedAt: 2025-08-14T22:09:55.424Z
firstPublishedAt: 2024-07-01T18:24:23.096Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l3eEiSz8MpcppCxcnijGz
slugEN: error-when-trying-to-import-skus-via-spreadsheet-in-the-vtex-admin
legacySlug: error-al-intentar-importar-skus-via-plantilla-en-el-admin-vtex
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Catálogo
  - SKU
  - Planilla
  - Imprtación
---

Después de definir el árbol de categorías y el registro de [especificaciones de productos y SKUs] en tu tienda, es necesario rellenar los valores de las especificaciones creadas. En el Admin VTEX, este proceso se puede realizar mediante una plantilla o manualmente al [registrar productos y SKUs].

Si al realizar la importación de SKUs vía plantilla se muestra el mensaje `"An error occurred in the data writing process. Make sure your worksheet data is consistent with the instructions and try again."`, puede ser que durante la importación:

- [No se rellenaron las especificaciones de SKU obligatorias](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP).
- El archivo tiene un formato incorrecto.

## Solución

Para resolver este problema es posible:

[Modificar el archivo](#modificar-el-archivo): el archivo debe seguir las reglas de formato y guardarse como plantilla XML en el formato .xls.

### Solución - Modificar el archivo

1. En el Admin VTEX, accede a **Catálogo** > **Importación y exportación** > **Todos los productos** > **Exportación/Importación** y haz clic en **Importar**.
2. Después, pulsa `Haz clic aquí` para descargar el modelo de plantilla.
3. Edita el modelo de plantilla con los SKU que desees, siguiendo todas las recomendaciones de la página **Importación y exportación**.
4. Guarda la plantilla en formato `.xls`.
5. En la misma página, en Cargar archivo para importación, selecciona el archivo y haz clic en `Importar`.
6. Compruebe si la importación se ha completado.

Si el error persiste después de modificar el archivo, ponte en contacto con [nuestro soporte](https://support.vtex.com/hc/pt-br/signin?return_to=https%3A%2F%2Fsupport.vtex.com%2Fhc%2Fpt-br%2Frequests).

