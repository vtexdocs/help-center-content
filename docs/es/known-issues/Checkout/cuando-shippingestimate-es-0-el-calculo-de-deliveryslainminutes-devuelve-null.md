---
title: 'Cuando shippingEstimate es = 0, el cálculo de deliverySlaInMinutes devuelve null'
id: UGk2WYb3w3ZWH4pL07TNg
status: PUBLISHED
createdAt: 2022-02-01T13:04:45.737Z
updatedAt: 2024-02-16T20:24:38.902Z
publishedAt: 2024-02-16T20:24:38.902Z
firstPublishedAt: 2022-02-01T13:04:46.164Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: when-shippingestimate-is-0-the-deliveryslainminutes-calculation-returns-null
locale: es
kiStatus: No Fix
internalReference: 514835
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En el flujo de pago `deliverySlaInMinutes` entrega junto con los detalles de la transacción a la pasarela, este dato se calcula en base al `shippingEstimate` entregado por logística, sin embargo cuando este valor entregado por logística es = 0 la respuesta de pago para `deliverySlaInMinutes` es 0 nulo, cuando lo correcto sería 0; sin embargo esto termina afectando directamente el flujo desarrollado por la pasarela para antifraude;



## Simulación


1- Crear un pedido con Pick up
2- El `Estimado de envío` debe ser 0
3- Comprobar los datos de la transacción y ver que el `deliverySlaInMinutes` es = null;




## Workaround


No hay una solución directa, sin embargo, si es posible evitar que el `shippingEstimate` entregado por el cálculo logístico, sea igual a 0, es posible mitigar el escenario;

