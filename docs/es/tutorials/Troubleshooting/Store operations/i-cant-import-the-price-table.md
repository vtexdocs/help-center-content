---
title: 'No puedo importar la plantilla de precios'
id: bglrzs7gLKWf97q8qRdRm
status: PUBLISHED
createdAt: 2024-06-10T15:11:02.787Z
updatedAt: 2024-06-10T19:44:11.614Z
publishedAt: 2024-06-10T19:44:11.614Z
firstPublishedAt: 2024-06-10T17:28:51.238Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slug: no-puedo-importar-la-plantilla-de-precios
locale: es
legacySlug: no-puedo-importar-la-plantilla-de-precios
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

__Tags/Palavras clave__: *plantilla de precios, importación de plantillas, celdas.*

Las [tablas o plantillas de precio](https://help.vtex.com/es/tracks/precios-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8) almacenan información de SKU que tras aplicarse en determinados contextos, como políticas comerciales, promociones o clústeres de clientes, permiten calcular los valores de venta de los productos en una tienda VTEX. Para más información, consulta [Precio base](https://help.vtex.com/es/tracks/precios-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) y [Precio fijo](https://help.vtex.com/es/tracks/precios-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy).

>⚠️ No se puede importar una plantilla de **precio calculado** en el Admin VTEX. Solo se permite **exportar** esta plantilla para que el retailer pueda consultar los valores de precio final de cada producto.

Tras [importar una plantilla de precios](https://help.vtex.com/es/tracks/precios-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D) pueden aparecer algunos mensajes de error en algunos SKU según los ejemplos a continuación:

- `"The resource you are looking for cannot be found: Price not found"`
- `"Error occurred while converting spreadsheet: Object reference not set to an instance of an object."`
- `"Import Fixed Table Error: Invalid headers - SKU ID"`

Si identificas mensajes de error, valores de precio incorrectos u otros problemas al importar una plantilla, consulta las posibles soluciones que se describen a continuación.

## Solución

Para resolver problemas de importación en la plantilla de precios, intenta aplicar las siguientes soluciones:

### Plantilla modelo

Las plantillas creadas independientemente por los clientes o personalizadas después de exportarlas del Admin VTEX pueden generar errores de integración durante la importación.

Para evitar este escenario, utiliza únicamente las plantillas modelo disponibles (de precio base o precio fijo) sin realizar ninguna personalización. Consulta más información en [Exportación de precios](https://help.vtex.com/es/tracks/precios-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D#exportacion-de-precios).

### Datos rellenados

Las plantillas rellenadas con datos incorrectos pueden generar errores durante la importación. Esto puede suceder si, por ejemplo, el ID del producto está ingresado donde correspondería tener el ID del SKU o si [hay una modificación de precio para un SKU](https://help.vtex.com/es/tutorial/alteracion-de-precio-de-sku--tutorials_95#regla-para-alteracion-de-precio) registrado que lo aumente en más de un 70 % o lo disminuya en más de un 30 % en relación con el valor actual.

Comprueba que los campos de tu plantilla estén rellenados según las guías de los siguientes artículos:

- [Plantilla de precios base](https://help.vtex.com/es/tutorial/tabla-de-precios-base--4Jox8TeQ5feqAn78TZ0DNA)
- [Plantilla de precios fijos](https://help.vtex.com/es/tutorial/rellenar-campos-de-la-plantilla-de-importacion-de-precios-fijos--50RFoH3ruV97FJgeBUCURh)

>⚠️ Antes de importar la plantilla en el Admin VTEX, comprueba que no contenga columnas con información de errores (**Error Code** y **Error Message**) ni que tenga algún tipo de filtro aplicado en las celdas. Si intentas importar una plantilla así, pueden generarse errores en el proceso de importación de datos.

Ejemplo de plantilla con filtros aplicados y con los campos __Error Code__ y __Error Messages__:

![Hoja de precios](//images.ctfassets.net/alneenqid6w5/1r7FGH4sdfT0uzCUX4T07y/2412a0609e152f55f147e4c05e76e2be/Price_spreadsheet.PNG)

#### Tamaño de archivo

Las plantillas de precios no deben exceder el límite de tamaño máximo de 1 megabyte (1 MB). Si tu plantilla excede el límite de tamaño, divide los datos en plantillas de menos de 1 megabyte (1 MB).

>⚠️ Todos los datos de un SKU específico deben mantenerse en la misma plantilla. No se permite registrar información del mismo SKU en plantillas diferentes.
