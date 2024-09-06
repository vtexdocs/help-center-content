---
title: 'Los nuevos pedidos de suscripción no se crean con la tarjeta de crédito guardada y savePersonalDataAsOptIn'
id: 5mMUYOzdXM9p69oythduOx
status: PUBLISHED
createdAt: 2024-08-27T17:54:38.067Z
updatedAt: 2024-08-27T17:54:59.938Z
publishedAt: 2024-08-27T17:54:59.938Z
firstPublishedAt: 2024-08-27T17:54:39.058Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: los-nuevos-pedidos-de-suscripcion-no-se-crean-con-la-tarjeta-de-credito-guardada-y-savepersonaldataasoptin
locale: es
kiStatus: Backlog
internalReference: 1087876
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


No se pueden crear nuevos pedidos con suscripciones utilizando una tarjeta de crédito guardada cuando "savePersonalDataAsOptIn" está activo en la configuración de orderForm.


##

## Simulación



- Activar "savePersonalDataAsOptIn" en la configuración de orderForm;
- Montar un carrito con un artículo con una suscripción;
- Al realizar el pedido se mostrará el mensaje "Los pedidos que contengan suscripciones deben tener opt-in para 'Guardar datos de pago' y 'Guardar datos personales'".



## Workaround


N/A




