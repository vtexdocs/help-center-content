---
title: 'La interfaz de pago muestra el envío gratuito cuando el usuario cambia las opciones de entrega.'
id: 5ibXQuVSU5vLfihL8uImyX
status: PUBLISHED
createdAt: 2023-09-27T20:40:02.973Z
updatedAt: 2023-10-02T19:35:11.231Z
publishedAt: 2023-10-02T19:35:11.231Z
firstPublishedAt: 2023-09-27T20:40:03.494Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-interfaz-de-pago-muestra-el-envio-gratuito-cuando-el-usuario-cambia-las-opciones-de-entrega
locale: es
kiStatus: Backlog
internalReference: 897109
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La interfaz de usuario de la caja muestra la entrega gratuita cuando el usuario cambia el método de entrega de envío normal a entrega programada. El problema solo se produce en el cuadro de entrega y cuando la cuenta tiene configurada la función LeanShipping. aunque la IU muestra el envío gratuito, los valores totales de la compra se muestran y cobran correctamente.


##

## Simulación



1. Vaya a la página de pago comprando un artículo al azar
2. en la sección de envío, seleccione envío programado y, a continuación, vuelva a seleccionar envío normal y aparecerá el precio de envío gratuito en la sección de envío



## Workaround


No hay solución.




