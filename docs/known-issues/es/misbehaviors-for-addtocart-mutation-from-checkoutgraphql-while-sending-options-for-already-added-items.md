---
title: 'Comportamiento erróneo de la mutación addToCart de checkout-graphql al enviar las "opciones" de los artículos ya añadidos'
id: 1lMWbgmBsOis9gAKcMm8ob
status: PUBLISHED
createdAt: 2022-05-03T20:42:18.655Z
updatedAt: 2022-11-25T22:44:04.555Z
publishedAt: 2022-11-25T22:44:04.555Z
firstPublishedAt: 2022-05-03T20:42:18.940Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: comportamiento-erroneo-de-la-mutacion-addtocart-de-checkout-graphql-al-enviar-las-opciones-de-los-articulos-ya-anadidos
kiStatus: Backlog
internalReference: 452053
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>

Al utilizar la mutación "_addToCart"_ del "_checkout-graphql"_ en un carrito en el que ya se ha añadido un determinado artículo sin "_options_", al intentar incluirlo de nuevo, esta vez con "_options_", no funcionará correctamente. La mutación no registrará las "_opciones_" enviadas y además devolverá un error si están relacionadas con la información de "_suscripción_".

En este contexto, la propiedad "_options_" se utiliza para declarar "_assemblyOptions_", tanto para "_composition_" o "_inputValues_", que también se utiliza en lugar de "_itemAttachments_" y para incluir "_subscriptionsData_".

Comportamientos actuales:
- _addToCart_ **sin** enviar "_options_" a un artículo ya añadido **también sin** "_options_" simplemente actualizará su cantidad **al** número dado
- _addToCart_ con o sin enviar "_options_" a un artículo ya añadido **con**"_options_" funcionará para incluir **nuevos**/repetidos artículos con la cantidad dada

Donde ocurre el problema:
- _addToCart_ enviando "opciones" a un artículo ya añadido sin "opciones"

Las "_options_" no se registrarán (ni se actualizarán ni funcionarán como un nuevo artículo) en el orderForm, pero funcionarán para actualizar la cantidad del artículo ya añadido - de la misma manera que el primer comportamiento descrito.

El peor escenario ocurre si está enviando una "_opción_" relacionada con la información de la suscripción. La mutación "_addToCart"_ tiene una acción encadenada para actualizar la sección "_subscriptionsData_" del orderForm con la información de esta "_option_", y en este caso, fallará, devolviendo errores para la operación - pero también haciendo la acción anterior, que actualiza la cantidad.

Que conste que la mutación "_actualizarItems"_ no funciona para añadir artículos ni para añadir/quitar "_opciones_" a un artículo ya añadido.


## Simulación


Considerando esta mutación:

    mutación ($orderFormId: ID, $items: [ItemInput]) { addToCart(orderFormId: $orderFormId, items: $items) { ...  }}

Primera solicitud, que funciona bien:

    { "items": [ { "id": 123, "quantity": 1, "seller": "1" } } }

Segunda petición, que incluye el mismo artículo pero con información de suscripción:

    { "items": [ { "id": 123, "index": 0, "quantity": 1, "vendedor": "1", "opciones": [ { "assemblyId": "vtex.subscription", "inputValues": { "vtex.subscription.key.frequency": "1 mes" }        }     ]    }  ]}

La respuesta:

    { "datos": null, "errores": [ { "mensaje": "Request failed with status code 400", ...          "response": { "data": { "Fields": {}, "operationId": "acdb9ef5-59dc-49a7-9d79-d3fb895d81fe", "error": {"code": "1", "mensaje": "Assinatura inválida", "exception": null }            }, ...    } ]}


## Workaround


N/A

