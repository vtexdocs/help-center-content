---
title: 'Registrar precio fijo'
id: 3g39iXkQza4AW7C7L814mj
status: PUBLISHED
createdAt: 2019-07-04T13:53:38.630Z
updatedAt: 2025-05-01T16:09:41.194Z
publishedAt: 2024-08-20T13:48:57.885Z
firstPublishedAt: 2019-07-17T19:46:38.452Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: adding-a-fixed-price
locale: es
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: precios-101
order: 10
---

Hay tres maneras de registrar un precio fijo:

- [A través del módulo de Precios en el Admin](#admin)
- [Mediante una plantilla de precios fijos](/es/docs/tracks/exportacion-e-importacion-mediante-la-plantilla-de-precios)
- [Mediante la Pricing API](#pricing-api)

## Admin 

Para crear un precio fijo en el Admin, sigue los pasos a continuación:

<ol>
    <li>En el Admin VTEX, accede a <strong>Precios &gt; Lista de precios<strong>, o escribe <strong>Lista de precios<strong> en la barra de búsqueda en la parte superior de la página.</li>
    <li>Haz clic en `Tablas de Precios`.</li>
    <li>Selecciona la tabla de precios deseada.</li>
    <li>Haz clic en la celda de precio de SKU en la tabla de precios deseada.</li>
    <li>Haz clic en **Definir precios fijos**.</li>
    <li>Haz clic en **No se ha definido**.</li>
    <li>Rellena los campos que se describen a continuación.</li>
    <ul>
        <li>**Cantidad mínima:** cantidad mínima del ítem que debe añadirse al carrito para que se aplique el precio fijo.</li>
        <li>**Precio:** el valor del precio fijo.</li>
        <li>**Definir precio de lista:** opción para añadir <i class="fas fa-toggle-on"></i> o no <i class="fas fa-toggle-off"></i> un precio de lista.
            <ul>
                <li>**Precio de lista:** precio de venta sugerido para el ítem.</li>
            </ul>
        </li>
        <li>**Programar precio fijo:** opción para programar <i class="fas fa-toggle-on"></i> o no <i class="fas fa-toggle-off"></i> un precio fijo.
            <ul>
                <li>**Status:** indica si la programación está activa o inactiva.</li>
                <li>**Fecha de inicio:** fecha de inicio de la programación del precio fijo. El precio fijo será válido a partir de esa fecha.</li>
                <li>**Hora de inicio:** hora de inicio de la programación del precio fijo. El precio fijo será válido a partir de esa hora.</li>
                <li>**Fecha de término:** fecha de término de la programación del precio fijo. El precio fijo deja de ser válido a partir de esa fecha.</li>
                <li>**Hora de término:** hora de término de la programación del precio fijo. El precio fijo deja de ser válido a partir de esa hora.</li>
            </ul>
        </li>
    </ul>
    <li>Haz clic en `Guardar`.</li>
</ol>

### Eliminar precio fijo
Para eliminar un precio fijo existente, sigue los pasos que se indican a continuación.

1. En el Admin, haz clic en el módulo **Precios**.
2. Haz clic en **Lista de precios**.
3. Haz clic en la línea del SKU para la cual deseas eliminar el precio fijo.
4. Haz clic en el precio fijo registrado.
5. Haz clic en el botón `Eliminar`.

> ℹ️ No es posible realizar la eliminación masiva de precios fijos mediante la planilla. La eliminación debe hacerse manualmente, siguiendo los pasos anteriores, o a través de la API [Delete fixed prices on a price table or trade policy](https://developers.vtex.com/docs/api-reference/pricing-api#delete-/pricing/prices/-itemId-/fixed/-priceTableId-).

## Pricing API
Para registrar un precio fijo mediante API, utiliza el endpoint [Create or update base or fixed prices](https://developers.vtex.com/docs/api-reference/pricing-api#put-/pricing/prices/-itemId-) de la Pricing API.

### Más información
* [Programar precio](/es/docs/tutorials/programar-precio)

