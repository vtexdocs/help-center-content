---
title: 'En las páginas de pedidos de lista, la exportación de pedidos no funciona cuando el filtro seleccionado tiene caracteres especiales'
id: 2eA1rykmTHxhUsiCQmeNoA
status: PUBLISHED
createdAt: 2022-09-21T17:54:38.517Z
updatedAt: 2022-11-25T22:01:23.310Z
publishedAt: 2022-11-25T22:01:23.310Z
firstPublishedAt: 2022-09-21T17:54:39.474Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: on-list-orders-pages-the-export-orders-is-not-working-when-the-filter-selected-has-special-characters
locale: es
kiStatus: Backlog
internalReference: 662821
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La nueva interfaz de usuario tiene una limitación para exportar algunos pedidos una vez que el filtro seleccionado tiene en el nombre un carácter especial, por ejemplo ("&" y "á" o "ú") esto ocurre porque incluso la nueva interfaz de usuario puede filtrar los pedidos, pero llama a la antigua ruta de OMS para exportar los pedidos.
Y esta limitación en realidad está en la antigua ruta de OMS, porque la autocorrección no puede manejar todos los casos de nombres.



## Simulación



1 - Ir a la página de pedidos;

2 - Seleccione, por ejemplo, un vendedor con & en el nombre;

3 - La lista de pedidos se podrá ver; (usando la ruta de pedidos)

4 -Pero cuando haga clic para exportar recibirá un mensaje: (en este momento los pedidos llaman a la antigua ruta oms con problema)

`Exportación completada. ¡0 pedidos han sido enviados a su correo electrónico!



## Workaround


No hay ninguna solución para este problema.

