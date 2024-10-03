---
title: 'La configuración de la tarjeta de regalo recargable no funciona cuando se intenta añadir crédito a la tarjeta de regalo a través de la API'
id: 3MXPd85Km51KpO4FNPqlDf
status: PUBLISHED
createdAt: 2022-05-23T14:21:10.608Z
updatedAt: 2024-02-16T20:25:54.496Z
publishedAt: 2024-02-16T20:25:54.496Z
firstPublishedAt: 2022-05-23T14:21:11.126Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-rechargeable-configuration-does-not-work-when-trying-to-add-credit-to-the-gift-card-through-api
locale: es
kiStatus: No Fix
internalReference: 583669
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al crear una tarjeta regalo, configuramos si es recargable o no. Sin embargo, el impedimento de añadir crédito a una tarjeta regalo no recargable ocurre sólo a través de la UI, a través de la API es posible añadir crédito aunque la tarjeta regalo no sea recargable.



## Simulación



1. Crear una tarjeta regalo no recargable
2. Vaya a la página de la tarjeta regalo del administrador y la interfaz de usuario no permitirá la recarga
3. Intente añadir crédito a través de la API y no habrá ningún bloqueo para esta acción



## Workaround


N/A

