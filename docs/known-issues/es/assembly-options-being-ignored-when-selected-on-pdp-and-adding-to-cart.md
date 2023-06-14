---
title: 'Se ignoran las opciones de montaje al seleccionarlas en la PDP y añadirlas al carro.'
id: 2u0qbC98EK6vPskprYOsnd
status: PUBLISHED
createdAt: 2023-01-31T16:00:13.354Z
updatedAt: 2023-04-05T21:24:34.525Z
publishedAt: 2023-04-05T21:24:34.525Z
firstPublishedAt: 2023-01-31T16:00:14.091Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: se-ignoran-las-opciones-de-montaje-al-seleccionarlas-en-la-pdp-y-anadirlas-al-carro
locale: es
kiStatus: Fixed
internalReference: 743529
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En un PDP de opciones de montaje, cuando el usuario selecciona diferentes cantidades para un mismo artículo y va al carro de la Caja la selección es ignorada y las cantidades se reinician a la cantidad inicial. Pero si el usuario aumenta, para **todos** los artículos, en 1 cantidad al menos se persiste la selección.


##

## Simulación



- Entrar en la cuenta;
- Acceda al PDP de un producto con montaje;
- Se mostrarán los artículos con las cantidades iniciales;
- Aumente en 1 la cantidad de cualquiera de los artículos y haga clic en el botón "Añadir al carrito";
- A continuación, vaya a la cesta de la compra y se dará cuenta de las cantidades iniciales, lo que significa que la selección anterior fue ignorada.



## Workaround


Defina la cantidad mínima de artículos que se pueden seleccionar del grupo a 0 a través de la configuración de Adjuntos, por ejemplo: [_**0**_-3]#10000[1-7][1]pricetable1;#20000[2-8][2]pricetable2;#30000[3-6][3]pricetable3



