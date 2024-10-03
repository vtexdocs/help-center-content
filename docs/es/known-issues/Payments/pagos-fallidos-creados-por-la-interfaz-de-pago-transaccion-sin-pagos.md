---
title: 'Pagos fallidos creados por la interfaz de pago (transacción sin pagos)'
id: 1LiK9rfhz2ULgmaitcYyyH
status: PUBLISHED
createdAt: 2022-09-26T14:32:12.988Z
updatedAt: 2022-11-25T22:04:12.988Z
publishedAt: 2022-11-25T22:04:12.988Z
firstPublishedAt: 2022-09-26T14:32:17.719Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: failed-payments-created-by-checkout-ui-transaction-without-payments
locale: es
kiStatus: Backlog
internalReference: 339243
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Casos de pedidos incompletos donde sus transacciones no tienen pagos.
En los logs del "gatewayCallback" (API de Checkout) y del propio Gateway, sólo podemos ver el volumen de transacciones que fueron consultadas al final de la compra pero que no tenían pagos.
En los logs de la UI, sólo tenemos el registro genérico "payment-fail", que no nos lleva a la causa.
Naturalmente, el motivo por el que la solicitud no se completa y la transacción se queda sin pago proviene de la UI, que en este momento es la que envía los datos relevantes directamente a la API del Gateway.



## Simulación


No hay pruebas de cómo reproducir el caso y puede tener varias causas de origen.

**En el lado de la pasarela, puede haber razones específicas o diferentes, que eventualmente vienen en la respuesta de la API (y podrían incluso impedir la realización del "gatewayCallback"), pero también hay casos que no generan ningún registro allí (pasarela). En ambos casos, para proceder a la investigación se espera tener este registro de la UI de Checkout.**

Así podemos ver el siguiente escenario:

- Creación de la transacción
- gatewayCallback devolviendo que la transacción no tenía pago
- Registro de "payment-fail" de la UI sin detallar el motivo (nótese que el registro probablemente esté retrasado en relación al punto anterior)
- Registro nulo de la pasarela sobre "ReceiveArrayPayments", que registraría los errores en la petición de "sendPayments" que realiza la UI



## Workaround


N/A

