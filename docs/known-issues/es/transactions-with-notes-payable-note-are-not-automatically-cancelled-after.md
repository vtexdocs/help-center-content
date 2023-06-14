---
title: 'Las transacciones con pagaré no se cancelan automáticamente al expirar la fecha de pago'
id: 5isjT9txiBYSQzZK00xjg3
status: PUBLISHED
createdAt: 2021-09-30T15:45:44.398Z
updatedAt: 2022-12-22T15:05:19.385Z
publishedAt: 2022-12-22T15:05:19.385Z
firstPublishedAt: 2021-10-25T13:26:15.596Z
contentType: knownIssue
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
tag: Payments
slug: las-transacciones-con-pagare-no-se-cancelan-automaticamente-al-expirar-la
kiStatus: Backlog
internalReference: 
---

## Sumario

Si un cliente hace un pedido con el medio de pago pagaré y el pago no se realiza, la transacción no es cancelada por el *gateway* después de la fecha de expiración del pago. En consecuencia, como el OMS no puede identificar el evento de cancelación, el pedido tampoco se cancela.

## Simulación

1. En el Admin, ve a la configuración de la afiliación pagaré.
2. En el campo **fecha de expiración**, introduce `1` y haz clic en __Guardar__.
3. Haz un pedido con el medio de pago pagaré.
4. Observa que la transacción no se cancela automáticamente después de que el pagaré expira.

## Workaround

No hay ningún *workaround* para este escenario.


