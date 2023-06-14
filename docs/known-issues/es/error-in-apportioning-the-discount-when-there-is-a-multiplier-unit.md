---
title: 'Error en el rateo del descuento cuando hay unidad multiplicadora'
id: 1AbljaKsBmoKwGQOMAKo2C
status: PUBLISHED
createdAt: 2018-03-20T19:21:20.708Z
updatedAt: 2022-12-22T20:48:46.897Z
publishedAt: 2022-12-22T20:48:46.897Z
firstPublishedAt: 2018-03-20T19:48:07.230Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: error-en-el-rateo-del-descuento-cuando-hay-unidad-multiplicadora
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

En casos de pedidos con descuento que tienen ítems con unidad multiplicadora no entera, el redondeo se está realizando por ítem, y no después de la suma de todos los ítems.

Esto puede acarrear la pérdida de algunos centavos.

## Simulación

- Crear promoción porcentual.
- Recibir pedido con ítems que utilizan unidad multiplicadora no entera.
- Analizar el rateo del descuento.

## Workaround

Todavía no tenemos un workaround para este escenario.

