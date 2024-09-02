---
title: 'La API de la región devuelve la lista de vendedores debido a la caché'
id: 1uDscW8Z3tG4EXS23fCfci
status: PUBLISHED
createdAt: 2024-01-22T17:34:18.690Z
updatedAt: 2024-01-22T17:48:47.576Z
publishedAt: 2024-01-22T17:48:47.576Z
firstPublishedAt: 2024-01-22T17:34:19.518Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-api-de-la-region-devuelve-la-lista-de-vendedores-debido-a-la-cache
locale: es
kiStatus: Backlog
internalReference: 969692
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando se utiliza una estructura de subcuenta con región, si la API Obtener vendedores por región o dirección se utiliza en ambas cuentas para el mismo canal de ventas, y una de ellas no está disponible para ese canal de ventas, devolverá una lista de vendedores debido a la caché.


##

## Simulación



- Crear una nueva tienda;
- Establecer diferentes canales de venta para la tienda;
- Utilizar la API Obtener vendedores por región o dirección en la tienda;
- Utilizar de nuevo la API para el mismo canal de ventas en la otra tienda.



## Workaround


N/A



