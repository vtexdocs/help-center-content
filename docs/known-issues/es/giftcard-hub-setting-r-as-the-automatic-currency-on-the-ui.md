---
title: 'El HUB de tarjetas de regalo establece "R$" como moneda automática en la interfaz de usuario'
id: 2ODtc4t1GSo3iUjT9Gk0uk
status: PUBLISHED
createdAt: 2022-11-03T12:57:31.895Z
updatedAt: 2022-11-25T22:03:58.981Z
publishedAt: 2022-11-25T22:03:58.981Z
firstPublishedAt: 2022-11-03T12:57:32.512Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: el-hub-de-tarjetas-de-regalo-establece-r-como-moneda-automatica-en-la-interfaz-de-usuario
locale: es
kiStatus: Backlog
internalReference: 690794
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



En la página de la interfaz de transacciones del administrador, podemos ver la lista de todas las transacciones realizadas en la cuenta. Podemos ver que todos los métodos de pago muestran la moneda correcta del país de la cuenta, excepto en los casos de las Giftcards, desde el conector GiftcardHUB. Si la transacción se hace con Giftcard + otro método de pago, se aplica la moneda correcta. El error sólo ocurre cuando la transacción se hace exclusivamente con Giftcard. En este escenario, la moneda mostrada es el Real brasileño (R$), sin importar el país de la cuenta.

Este bug no impacta en el flujo transaccional. Esto significa que las transacciones hechas con giftcard todavía pueden ser autorizadas, aprobadas, capturadas y terminadas sin problema. Es sólo un problema de interfaz de usuario que puede causar confusión al usuario del administrador (comerciante).



## Simulación



Entre en la página de la IU de transacciones y filtre por Tarjeta de Regalo.



## Workaround





Por lo que hemos podido ver, no hay ninguna solución para esta situación

