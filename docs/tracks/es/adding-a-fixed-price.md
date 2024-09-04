---
title: 'Registrar precio fijo'
id: 3g39iXkQza4AW7C7L814mj
status: PUBLISHED
createdAt: 2019-07-04T13:53:38.630Z
updatedAt: 2024-08-20T13:48:57.885Z
publishedAt: 2024-08-20T13:48:57.885Z
firstPublishedAt: 2019-07-17T19:46:38.452Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: registrar-precio-fijo
locale: es
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugES: precios-101
---

Hay tres maneras de registrar un precio fijo:

- [A través del módulo de Precios en el Admin](#admin)
- [Mediante una plantilla de precios fijos](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D)
- [Mediante la Pricing API](#pricing-api)

## Admin 

Para crear un precio fijo en el Admin, sigue los pasos a continuación:

<ol>
    <li>En el Admin VTEX, accede a <strong>Precios &gt; Lista de precios<strong>, o escribe <strong>Lista de precios<strong> en la barra de búsqueda en la parte superior de la página.</li>
    <li>Haz clic en <code>Tablas de Precios</code>.</li>
    <li>Selecciona la tabla de precios deseada.</li>
    <li>Haz clic en la celda de precio de SKU en la tabla de precios deseada.</li>
    <li>Haz clic en <strong>Definir precios fijos</strong>.</li>
    <li>Haz clic en <strong>No se ha definido</strong>.</li>
    <li>Rellena los campos que se describen a continuación.</li>
    <ul>
        <li><strong>Cantidad mínima:</strong> cantidad mínima del ítem que debe añadirse al carrito para que se aplique el precio fijo.</li>
        <li><strong>Precio:</strong> el valor del precio fijo.</li>
        <li><strong>Definir precio de lista:</strong> opción para añadir <i class="fas fa-toggle-on"></i> o no <i class="fas fa-toggle-off"></i> un precio de lista.
            <ul>
                <li><strong>Precio de lista:</strong> precio de venta sugerido para el ítem.</li>
            </ul>
        </li>
        <li><strong>Programar precio fijo:</strong> opción para programar <i class="fas fa-toggle-on"></i> o no <i class="fas fa-toggle-off"></i> un precio fijo.
            <ul>
                <li><strong>Status:</strong> indica si la programación está activa o inactiva.</li>
                <li><strong>Fecha de inicio:</strong> fecha de inicio de la programación del precio fijo. El precio fijo será válido a partir de esa fecha.</li>
                <li><strong>Hora de inicio:</strong> hora de inicio de la programación del precio fijo. El precio fijo será válido a partir de esa hora.</li>
                <li><strong>Fecha de término:</strong> fecha de término de la programación del precio fijo. El precio fijo deja de ser válido a partir de esa fecha.</li>
                <li><strong>Hora de término:</strong> hora de término de la programación del precio fijo. El precio fijo deja de ser válido a partir de esa hora.</li>
            </ul>
        </li>
    </ul>
    <li>Haz clic en <code>Guardar</code>.</li>
</ol>

### Eliminar precio fijo
Para eliminar un precio fijo existente, sigue los pasos que se indican a continuación.

1. En el Admin, haz clic en el módulo **Precios**.
2. Haz clic en **Lista de precios**.
3. Haz clic en la línea del SKU para la cual deseas eliminar el precio fijo.
4. Haz clic en el precio fijo registrado.
5. Haz clic en el botón `Eliminar`.

>ℹ️ No es posible realizar la eliminación masiva de precios fijos mediante la planilla. La eliminación debe hacerse manualmente, siguiendo los pasos anteriores, o a través de la API <a href="https://developers.vtex.com/docs/api-reference/pricing-api#delete-/pricing/prices/-itemId-/fixed/-priceTableId-">Delete fixed prices on a price table or trade policy.

## Pricing API
Para registrar un precio fijo mediante API, utiliza el endpoint [Create or update base or fixed prices](https://developers.vtex.com/docs/api-reference/pricing-api#put-/pricing/prices/-itemId-) de la Pricing API.

### Más información
* [Programar precio](https://help.vtex.com/es/tutorial/programar-precio--4vVha6TGzYkguWuMOqCcCk)

