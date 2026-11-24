---
title: 'Cartera de crédito: transfiere crédito entre empresas del mismo grupo económico'
createdAt: 2026-11-24T12:00:00.000Z
updatedAt: 2026-11-24T12:00:00.000Z
contentType: updates
productTeam: Billing
slugEN: 2026-11-30-credit-wallet-transfer-credit-between-companies-in-the-same-economic-group
locale: es
tags:
  - Nueva funcionalidad
  - Facturación
announcementSynopsisES: 'Ahora puedes transferir parte del saldo de la cartera de crédito de una empresa a otra del mismo grupo económico desde la página Créditos del Admin VTEX.'
---

En el Admin VTEX, ahora puedes transferir parte del saldo de la [cartera de crédito](/es/docs/tutorials/cartera-de-credito) de una empresa a otra empresa del mismo grupo económico. Para eso, accede a **Facturación > Créditos**. Así, aprovechas mejor el crédito disponible entre las empresas del grupo.

## ¿Qué cambió?

Anteriormente, solo la empresa que generaba el saldo de la cartera de crédito podía usarlo. Ahora, en la página **Créditos** del Admin VTEX, el nuevo botón `Transferir crédito` te permite mover parte del saldo de la empresa actual a otra empresa del mismo grupo económico. Eliges la empresa de destino, ingresas el valor (mayor que cero y hasta el saldo disponible) y confirmas la transferencia después de revisar el resumen.

Cada transferencia genera un movimiento en el **Estado de cuenta de créditos** de la empresa de origen y otro en el de la empresa de destino. El crédito recibido sigue la política de vencimiento de la empresa de destino.

Ten en cuenta las siguientes reglas:

- Solo puedes transferir crédito entre empresas del mismo grupo económico.
- La transferencia es parcial, no tiene flujo de aprobación y no se puede deshacer.
- Solo la empresa de origen puede iniciar la transferencia.
- Para que la transferencia descuente la factura, el crédito debe llegar a la empresa de destino antes de que VTEX genere la factura, el primer día del mes siguiente.
- Una transferencia que haces después de esa fecha se aplica a partir de la factura siguiente.

## ¿Por qué hicimos este cambio?

Cada empresa genera y usa el crédito de la cartera de crédito en su propio nivel, y ese crédito descuenta el cobro de Master Data de esa misma empresa. En grupos económicos con gestión financiera centralizada, algunas empresas consumen mucho Master Data y generan poco crédito, y otras generan crédito excedente. Con la transferencia, usas el crédito disponible en el grupo donde se necesite.

## ¿Qué se necesita hacer?

Para transferir crédito, necesitas el permiso `Transfer Credit` en la empresa de origen. Esta regla se aplica a usuarios y a claves de API (`appKey`).

Para ver instrucciones detalladas, consulta [Transferir crédito entre empresas del mismo grupo económico](/es/docs/tutorials/transferir-credito-entre-empresas-del-mismo-grupo-economico).
