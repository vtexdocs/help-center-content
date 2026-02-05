---
title: 'Exportación e importación mediante la plantilla de precios'
id: 5lV5s54lQ69zPXxngbpI5D
status: PUBLISHED
createdAt: 2023-01-16T16:06:30.799Z
updatedAt: 2024-08-23T16:20:51.694Z
publishedAt: 2024-08-23T16:20:51.694Z
firstPublishedAt: 2023-01-17T12:31:08.844Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: exporting-and-importing-via-a-price-spreadsheet
locale: es
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: precios-101
order: 11
---

Registrar precios usando la plantilla es adecuado para catálogos con numerosos productos y que necesitan registrar o cambiar precios en masa.

El proceso se divide en dos partes:

1. 	[Exportación de precios](#exportacion-de-precios)
2. 	[Importación de precios](#importacion-de-precios)

## Exportación de precios

El primer paso para registrar o cambiar los precios de tus productos anunciados es exportar los precios. La exportación extrae los precios de la plataforma VTEX y se permiten tres exportaciones simultáneas.

Puedes ver el historial de exportación de precios de las últimas 24 horas, según se describe en la sección [Seguimiento de la exportación](#seguimiento-de-la-exportacion).

Para exportar la plantilla de precios, sigue estos pasos:

1. En el Admin VTEX, accede a *Catálogo > Precios > Lista de precios*.
2. En la parte superior de la pantalla, haz clic en el ícono de exportación <i class="fas fa-download"></i>.
> Aparecerá una barra lateral.
3. En la sección Selecciona las tablas que deseas exportar, debes escoger una de las siguientes opciones:
   - **Tabla de precios base (estándar):** el [precio base](/es/docs/tracks/preco-base-definicao-de-conceito) es el precio de referencia de un SKU para todas las tablas de precios.
   - **Tabla de precios fijos:** el [precio fijo](/es/docs/tracks/precio-fijo-definicion-de-concepto) sobrescribe el precio base con la regla de precio configurada.
   - **Tabla de precios calculados:** es el precio final que se mostrará en la tienda. Este precio no refleja las promociones.
4. Haz clic en `Exportar tabla`.
> Se abrirá la tabla de precios en la interfaz.
5. En el archivo abierto, rellena las filas con los datos de precio de los SKU. La Tabla de Precios exportada contiene solo productos con precios registrados, los productos sin precio no aparecen en la hoja de cálculo. Para entender mejor el significado de cada campo, accede a nuestro artículo sobre cómo [rellenar los campos de la plantilla de importación de precios base](/es/docs/tutorials/tabla-de-precios-base) o [rellenar los campos de la plantilla de importación de precios fijos](/es/docs/tutorials/rellenar-campos-de-la-plantilla-de-importacion-de-precios-fijos).

> ⚠️ La exportación de tablas de precios en formato **XLSX** está limitada a 1.048.576 filas debido a una limitación de Excel. Las exportaciones que excedan este límite resultarán en un error.

Después de finalizada la exportación, recibirás la plantilla en tu email registrado en la tienda VTEX. También puedes descargar la exportación al hacer clic en el botón `Descargar exportación`.

### Seguimiento de la exportación

En **Seguimiento de las exportaciones**, podrás dar seguimiento en tiempo real al status de cada plantilla exportada con el porcentaje de finalización que puede variar entre 0 % y 100 %. Además, puedes ver el historial de exportación de precios en las últimas 24 horas.

## Importación de precios

El segundo paso para registrar o cambiar los precios en masa es la importación. La importación sustituye los precios antiguos por los precios nuevos de tus productos anunciados.

Este paso es obligatorio para registrar o cambiar precios.

Después de rellenar los datos de la plantilla, sigue los pasos a continuación para realizar la importación:

1. En el Admin VTEX, accede a *Catálogo > Precios > Lista de precios*.
3. En la parte superior de la pantalla, haz clic en el ícono de importación <i class="fas fa-upload"></i>.
> Aparecerá una barra lateral.
3. Selecciona una opción de **tabla de precios**.
4. La opción **Sobrescribir todos los precios existentes** sustituye todos los precios fijos de tu tienda por los precios de la plantilla. Si alguno de los precios existentes en la tienda no está en la plantilla, se eliminará. Quita la marca de esta casilla si deseas mantener los precios fijos existentes.
5. Haz clic en `Importar tabla`.
6. Selecciona la plantilla rellenada que deseas importar.
7. Haz clic en `Abrir`.

Al final de la operación, se habrá importado la plantilla y se habrán guardado los precios.
