---
title: 'Programación de precios'
id: 4vVha6TGzYkguWuMOqCcCk
status: PUBLISHED
createdAt: 2017-12-27T16:18:43.304Z
updatedAt: 2024-09-06T19:59:43.713Z
publishedAt: 2024-09-06T19:59:43.713Z
firstPublishedAt: 2018-01-04T15:12:09.343Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: scheduling-prices
locale: es
legacySlug: programar-precio-en-pricing-v2
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

En el módulo Precios, puede programar los precios fijos de los productos de su tienda. Las fechas de programación deben seguir la estandarización [RFC3339](https://www.ietf.org/rfc/rfc3339.txt). Es posible especificar la zona horaria deseada para la programación, ya sea UTC o GMT. Si no se configura, se utilizará el UTC.

En este artículo vamos a cubrir los siguientes tipos de programación:

- [Programación de precio fijo en el Admin](#programacion-de-precio-fijo-en-el-admin)
  - [Campos de registro de precios fijos](#campos-de-registro-de-precios-fijos) 
- [Programación mediante la importación de una plantilla de precios fijos](#programacion-mediante-la-importacion-de-una-plantilla-de-precios-fijos)
- [Programación de precios mediante API](#programacion-de-precios-mediante-api)

## Programación de precio fijo en el Admin

Para hacer la programación por el Admin, siga los pasos a continuación.

1. En el Admin VTEX, accede a *Precios > Lista de precios* , o escribe *Lista de precios* en la barra de búsqueda en la parte superior de la página.
2. Haga clic en la celda de precio de SKU en la tabla de precios deseada.
3. Haga clic en el botón `Definir precios fijos`.
4. En la sección **Precios fijos**, haga clic en el botón `Añadir un nuevo precio`.
5. Rellene los [campos del precio fijo](#campos-de-registro-de-precios-fijos).
6. Haga clic en `Guardar`.

### Campos de registro de precios fijos

- **Cantidad mínima:** la cantidad mínima del SKU para que se aplique el precio fijo.
- **Precio:** valor del precio fijo.
- **Definir precio de lista:** elija si desea añadir <i class="fas fa-toggle-on"></i> o no <i class="fas fa-toggle-off"></i> un precio de lista.
- **Precio de lista:** precio de venta sugerido para el SKU.
- **Programar precio fijo:** elija si desea programar <i class="fas fa-toggle-on"></i> o no <i class="fas fa-toggle-off"></i> un precio fijo.
- **Status:** indica si la programación está **activa** o **inactiva**.
- **Fecha de inicio:** indica desde qué día será válido el precio fijo. 
- **Hora de inicio:** indica a partir de qué hora será válido el precio fijo. 
- **Fecha de término:** indica el día a partir del cual el precio fijo dejará de ser válido. 
- **Hora de término:** indica la hora a partir de la cual el precio fijo dejará de ser válido. 

>ℹ️ En la programación realizada a través del Admin, la zona horaria considerada será la utilizada por el computador del usuario.

## Programación mediante la importación de una plantilla de precios fijos

También puede hacer la programación de precios importando una plantilla de precios fijos. Para ello, siga los pasos a continuación.

1. En el Admin VTEX, accede a **Precios > Lista de precios** , o escribe **Lista de precios** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el ícono 📥 para exportar la plantilla que se rellenará.
![Agendar preço fixo - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Prices/Price%20list/programar-precio_1.png)
3. Seleccione solo la opción **Tabla de precios fijos**.
4. Haga clic en `Exportar 1 tabla`.

La plantilla se enviará a su email y podrá descargarla allí. Después de descargar la plantilla, rellene las columnas con la siguiente información:

- **SKU ID:** el ID del SKU al que quiere añadir el precio fijo.
- **Trade Policy:** el nombre o el ID de la política comercial a la que se aplicará el precio fijo.
- **Price:** el valor del precio fijo.
- **List Price:** el precio de venta sugerido para el SKU.
- **Min Quantity:** la cantidad mínima del SKU para que se aplique el precio fijo.
- **Date From:** la fecha y la hora de inicio, en formato [RFC3339](https://www.ietf.org/rfc/rfc3339.txt), de la programación del precio fijo. 
- **Date To:** la fecha y la hora de término, en formato [RFC3339](https://www.ietf.org/rfc/rfc3339.txt), de la programación del precio fijo. 

>ℹ️ Los campos **Date From** y **Date To** siguen el formato [RFC3339](https://www.ietf.org/rfc/rfc3339.txt" target="_blank), que incluye la zona horaria. Por ejemplo, si una promoción comienza o termina a las 22:00 horas el 30 de diciembre de 2024, en Argentina (zona horaria GMT-3), el valor que debe ingresarse será: `2024-12-30T22:00:00-03:00`. Si no se especifica la zona horaria, el sistema asumirá UTC. Para indicar un precio válido a partir de la medianoche (00:00) UTC del mismo día, el campo debe contener: `2024-12-30T00:00:00Z`.

![Agendar preço fixo planilha PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Prices/Price%20list/programar-precio_2.png)

Una vez que haya terminado de rellenar la plantilla, debe importarla a la tienda. Siga los pasos a continuación.

1. En el Admin VTEX, accede a *Precios > Lista de precios* , o escribe *Lista de precios* en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el ícono 📤 para importar la plantilla completada.
3. Seleccione solo la opción **Tabla de precios fijos**.
4. Si desea sobrescribir los precios fijos existentes con los de su plantilla, seleccione la opción **Sobrescribir todos los precios existentes**. Si no existe ningún precio fijo en su tienda, no se sobrescribirá nada. 
5. Haga clic en `Importar tabla de precios fijos`.
6. Seleccione la plantilla deseada entre los archivos de su computador. La plantilla se enviará automáticamente y se guardarán los precios fijos.

## Programación de precios mediante API

Utilice el endpoint [Create or update price or fixed price](https://developers.vtex.com/docs/api-reference/pricing-api#put-/pricing/prices/-itemId-) de la Pricing API para programar un precio fijo por API.
