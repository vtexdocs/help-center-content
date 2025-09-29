---
title: 'Campo "items" se quitará de la API de List Orders'
id: 40UDVKiocUCSi8Uo8eUKui
status: PUBLISHED
createdAt: 2018-10-04T20:56:17.252Z
updatedAt: 2019-12-31T15:13:36.551Z
publishedAt: 2019-12-31T15:13:36.551Z
contentType: updates
productTeam: Post-purchase
author: authors_24
slugEN: 2018-10-04-the-items-field-will-be-removed-from-the-list-orders-api
locale: es
legacySlug: campo-items-se-quitara-de-la-api-de-list-orders
announcementImageID: 'undefined'
announcementSynopsisES: 'En 12/10, vamos a quitar este campo (ya obsoleto) para la indexación de pedidos tener más estabilidad y rendimiento.'
---

El día __12 de octubre__, vamos a retirar el campo `items` de la API de List Orders.

> ℹ️ Request de la API de List Orders: `http://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders`

Si su tienda utiliza la API de List Orders y en el mapeo de su integración se espera recibir el campo `items`, su equipo de desarrollo necesita retirarlo del mapeo de la integración.

> ⚠️ El campo `items` de la API de List Orders ya está **obsoleto** desde hace bastante tiempo. Él no tiene ninguna utilidad actualmente, y por eso su tienda no debería considerarlo en sus integraciones. Para recoger artículos de pedidos, usted debe usar la [API del Feed](/es/tutorial/como-funciona-el-feed-del-oms).

Es importante recordar que la API de List Orders sigue funcionando normalmente. Sólo se eliminará el campo `items`.

### ¿Por qué vamos a hacer esto?

La retirada de este campo aumentará considerablemente la estabilidad y el rendimiento del indexador de pedidos.

Por eso, es crucial retirarlo de la integración.

> ℹ️ **Atención:** este cambio sólo impacta las integraciones que dependen de la entrega del campo `items` por la API de List Orders.

> ℹ️ Este cambio **no** afecta a la API de Get Orders. En ella, el campo `items` sigue existiendo y se actualiza normalmente.

> ℹ️ Request de la API de Get Order: `http://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders/{{orderId}}`

---

- __Qué va a suceder__: Vamos a retirar el campo `items` de la API de List Orders.
- __Cuando__: 12 de octubre de 2018.
- __Por qué__: Para mejorar la estabilidad y el rendimiento de la indexación de pedidos.
- __Qué usted necesita hacer__: Si su tienda depende del campo `items` retornardo por la API de List Orders (y solamente en este caso), su equipo de desarrollo necesita retirar el campo `items` del mapeo de la integración.
