---
title: 'Benefits.items array dentro de ProductContextProvider baraja los items cuando la promoción es del tipo Buy Together'
id: 1VeBqJAKwpVR5YHqtEJ7Xz
status: PUBLISHED
createdAt: 2023-10-05T19:57:59.828Z
updatedAt: 2023-10-05T19:58:00.724Z
publishedAt: 2023-10-05T19:58:00.724Z
firstPublishedAt: 2023-10-05T19:58:00.724Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: benefitsitems-array-dentro-de-productcontextprovider-baraja-los-items-cuando-la-promocion-es-del-tipo-buy-together
locale: es
kiStatus: Backlog
internalReference: 915213
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al mirar el array de beneficios dentro del ProductContextProvider en el PDP de un producto podemos ver que no se devuelven todos los productos y se barajan los que se devuelven. Ambas listas de productos dentro de la promoción están juntas en el mismo array. Esto sólo ocurre cuando la promoción es del tipo Buy Together.


##

## Simulación


Vaya al PDP de un producto que tenga una promoción Buy Together
Intenta mirar el array de beneficios dentro del ProductContextProvider
No todos los productos serán devueltos en el array de artículos, y no habrá diferenciación entre las listas de productos dentro de la promoción


##

## Workaround


N/A





