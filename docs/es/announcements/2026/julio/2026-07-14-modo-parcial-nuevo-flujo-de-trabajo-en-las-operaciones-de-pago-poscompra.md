---
title: 'Modo parcial: nuevo flujo de trabajo en las operaciones de pago poscompra'
createdAt: 2026-07-14T00:00:00.000Z
updatedAt: 2026-07-14T00:00:00.000Z
contentType: updates
productTeam: Payments
slugEN: 2026-07-14-hold-mode-new-flow-in-post-purchase-payment-operations
locale: es
announcementSynopsisEN: 'VTEX lanzó el modo Partial, que permite liquidaciones, cancelaciones y reembolsos parciales directamente con el conector de pago.'
tags:
  - New feature
  - Payments
---

Para ofrecer mayor flexibilidad y control sobre las operaciones de pago poscompra, VTEX lanza el **modo parcial** de procesamiento de pagos.

## ¿Qué cambió?

Antes, las operaciones de pago poscompra (liquidaciones, cancelaciones y reembolsos) solo se realizaban en las siguientes modalidades: **total** o **hold**, sin la posibilidad de ejecutar transacciones parciales (con valores inferiores al total del pedido) directamente con el conector del proveedor de pagos.

Con el nuevo **modo parcial** cada solicitud de liquidación, cancelación o reembolso se envía automáticamente al conector, lo que permite mayor agilidad en la gestión financiera, reducción de costos operativos y una mejor experiencia del cliente tras la compra. Este modo no admite operaciones con [split de pagos](https://help.vtex.com/es/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx).

Para más información sobre el funcionamiento de cada modo, consulta [Operaciones de pago poscompra](https://help.vtex.com/es/docs/tutorials/operaciones-de-pago-poscompra).

## ¿Qué se necesita hacer?

Esta funcionalidad ya está disponible para todas las cuentas VTEX. Si deseas utilizar el **modo parcial** en alguno de los conectores de pago ya configurados en tu tienda, ponte en contacto con el [Soporte VTEX](https://help.vtex.com/es/docs/tutorials/abrir-tickets-para-el-soporte-vtex) para solicitar su activación.

> ⚠️ Antes de solicitar la configuración del **modo parcial**, consulta con tu proveedor de pagos para comprobar si el conector en uso admite múltiples transacciones parciales.
