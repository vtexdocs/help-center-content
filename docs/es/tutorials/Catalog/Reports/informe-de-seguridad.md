---
title: 'Como funciona el Informe de seguridad'
id: tutorials_282
status: PUBLISHED
createdAt: 2017-04-27T22:10:10.101Z
updatedAt: 2023-03-29T19:22:38.336Z
publishedAt: 2023-03-29T19:22:38.336Z
firstPublishedAt: 2017-04-27T23:03:13.247Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: understanding-the-security-report
locale: es
legacySlug: informe-de-seguridad
subcategoryId: 5yDQmr18K4GgQAeGwq8USa
---

El Informe de Seguridad es donde quedan inscriptas las alteraciones que afectan el catastro de productos. Su función principal es ofrecer al tendero la posibilidad de verificar el autor por determinadas alteraciones en un período de tiempo específico.

## Acceder al informe de Seguridad

El camino para acceder es:

1. En el Admin VTEX, accede a  **Catálogo**, o escribe  **Catálogo** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en **Informes**.
3. Haga clic en la pestaña **Seguridad**.

## Filtrar el informe de Seguridad

Es posible filtrarlo de diversas formas, a partir de las casillas abajo, considerando que la casilla fecha debe ser siempre rellenada para que regrese el debido resultado. Caso no se haga ningún filtro, se exhibirá el registro de todas las alteraciones de la fecha actual.

En el ejemplo abajo hago el filtro para una alteración (ya sea creación o actualización) de precio de un SKU. Para eso, utilicé las casillas “Datos” con el Id del SKU, “Pantalla” con el lugar de la plataforma donde ocurre esa alteración y un período de tiempo específico. De acuerdo con el informe que se desea, puede ser necesario utilizar otras casillas en conjunto o en sustitución a esos que utilizo en el ejemplo.

![relatorioseguran aPT.gif h 250?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.gif)

## Campos disponibles para el filtro

__Nombre del Administrador:__ nombre del usuario que efectuó la alteración.

__Dirección de acesso:__ IP de la máquina que efectuó la alteración

__Datos:__ puede informarse el Id del sku, producto, marca, categoría o de cualquier otro catastro que desea buscar el registro.

__Página__: lugar en la plataforma donde se llevó a cabo la alteración, teniendo en cuenta la dirección de la URL. Por ejemplo, en el formulario de alteración de precio es SkuTabelaValorForm.

__Función__: acción que se hizo en la página. Siguiendo el ejemplo del tópico anterior, una alteración de precio aparecería como StockKeepingUnitPriceShet-update.

__Fecha__: período que desea buscar con fechas “de” y “hasta”.

__Items por página__: define un máximo de líneas que en el resultado de la búsqueda.

