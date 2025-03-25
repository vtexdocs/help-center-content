---
title: 'No se ha añadido el valor de la recompensa o se ha añadido un valor diferente a la tarjeta regalo'
id: 3i9TwGKpYOkwnHUXDON9V7
status: PUBLISHED
createdAt: 2023-06-14T16:06:37.154Z
updatedAt: 2023-06-27T12:44:59.727Z
publishedAt: 2023-06-27T12:44:59.727Z
firstPublishedAt: 2023-06-14T16:06:37.696Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: reward-value-not-added-or-have-a-different-value-added-to-gift-card
locale: es
kiStatus: Backlog
internalReference: 844079
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El valor de la recompensa puede no ser o tener un valor diferente añadido a la tarjeta regalo del comprador cuando la promoción está configurada para aplicar el importe de la recompensa cuando el estado del pedido cambia a pago aprobado.


##

## Simulación



- Cree una promoción de valor de recompensa para que se aplique cuando el estado del pedido cambie a pago aprobado;
- Finalice la compra;
- Compruebe las interacciones en Detalles del pedido en admin; no aparecerá el mensaje "_XX añadido al programa de fidelidad del usuario_"



## Workaround



- Seleccione a través de admin la opción "Tarjetas regalo" en el menú, seleccione la tarjeta regalo del comprador y haga clic en "Extracto" en la columna Acciones para añadir el valor adecuado;
- Configure la promoción del valor de la recompensa para que se aplique cuando el estado del pedido cambie a facturado.



