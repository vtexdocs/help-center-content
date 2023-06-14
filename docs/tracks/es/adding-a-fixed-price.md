---
title: Registrar precio fijo
id: 3g39iXkQza4AW7C7L814mj
status: CHANGED
createdAt: 2019-07-04T13:53:38.630Z
updatedAt: 2023-03-29T21:16:34.391Z
publishedAt: 2023-03-29T18:18:57.294Z
firstPublishedAt: 2019-07-17T19:46:38.452Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: registrar-precio-fijo
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugES: precios-101
---

Hay tres maneras de registrar un precio fijo:

- [A través del módulo de Precios en el Admin](#admin)
- [Mediante una plantilla de precios fijos](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D)
- [Mediante la Pricing API](#pricing-api)

## Admin 

Para crear un precio fijo en el Admin, sigue los pasos a continuación:

1. En el Admin VTEX, accede a *Precios > Lista de precios* , o escribe *Lista de precios* en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Tablas de Precios`.
3. Selecciona la tabla de precios deseada.
4. Haz clic en la celda de precio de SKU en la tabla de precios deseada.
5. Haz clic en **Definir precios fijos**.
6. Haz clic en **No se ha definido**.
7. Rellena los campos que se describen a continuación.
- **Cantidad mínima:** cantidad mínima del ítem que debe añadirse al carrito para que se aplique el precio fijo.
- **Precio:** el valor del precio fijo.
- **Definir precio de lista:** opción para añadir <i class="fas fa-toggle-on"></i> o no <i class="fas fa-toggle-off"></i> un precio de lista.
  - **Precio de lista:** precio de venta sugerido para el ítem.

- **Programar precio fijo:** opción para programar <i class="fas fa-toggle-on"></i> o no <i class="fas fa-toggle-off"></i> un precio fijo.
  - **Status:** indica si la programación está activa o inactiva.
  - **Fecha de inicio:** fecha de inicio de la programación del precio fijo. El precio fijo será válido a partir de esa fecha.
  - **Hora de inicio:** hora de inicio de la programación del precio fijo. El precio fijo será válido a partir de esa hora.
  - **Fecha de término:** fecha de término de la programación del precio fijo. El precio fijo deja de ser válido a partir de esa fecha.
  - **Hora de término:** hora de término de la programación del precio fijo. El precio fijo deja de ser válido a partir de esa hora.
8. Haz clic en `Guardar`.

### Eliminar precio fijo
Para eliminar un precio fijo existente, sigue los pasos que se indican a continuación.

1. En el Admin, haz clic en el módulo **Precios**.
2. Haz clic en **Lista de precios**.
3. Haz clic en la fila del SKU cuyo precio fijo deseas eliminar.
4. Haz clic en el precio fijo registrado.
5. Haz clic en el botón `Eliminar`.

## Pricing API
Para registrar un precio fijo mediante API, utiliza el endpoint [Create or update base or fixed prices](https://developers.vtex.com/vtex-rest-api/reference/prices-and-fixed-prices#createupdatepriceorfixedprice) de la Pricing API.

### Más información
* [Programar precio](https://help.vtex.com/es/tutorial/programar-precio--4vVha6TGzYkguWuMOqCcCk)

