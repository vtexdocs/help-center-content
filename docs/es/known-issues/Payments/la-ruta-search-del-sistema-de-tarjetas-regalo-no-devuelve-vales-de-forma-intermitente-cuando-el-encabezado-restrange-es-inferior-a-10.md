---
title: 'La ruta /_search del sistema de tarjetas regalo no devuelve vales de forma intermitente cuando el encabezado REST-range es inferior a 10.'
id: 1WgbuMggOFUYFm2HseAxnd
status: PUBLISHED
createdAt: 2023-03-13T22:29:35.009Z
updatedAt: 2023-03-13T22:29:35.922Z
publishedAt: 2023-03-13T22:29:35.922Z
firstPublishedAt: 2023-03-13T22:29:35.922Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-search-route-of-the-gift-card-system-intermittently-does-not-return-vouchers-when-the-restrange-header-is-less-than-10
locale: es
kiStatus: Backlog
internalReference: 770337
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En un escenario donde el cliente tiene vales de fidelidad y llega a la caja, se espera que la ruta /_search devuelva todos los vales vinculados a ese usuario. Sin embargo, la caja pasa la cabecera con REST-range = 0-9. En algunas cuentas, este rango no es suficiente y la API devuelve una matriz vacía. Cuando simulamos la llamada directamente a la API con un rango superior a 10, podemos recuperar al menos un vale.



## Simulación



## Workaround



