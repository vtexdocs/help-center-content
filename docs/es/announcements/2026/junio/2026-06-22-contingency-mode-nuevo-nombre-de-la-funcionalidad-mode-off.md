---
title: 'Contingency Mode: nuevo nombre de la funcionalidad Mode-off'
createdAt: 2026-06-22T00:00:00.000Z
updatedAt: 2026-06-22T00:00:00.000Z
contentType: updates
productTeam: Payments
slugEN: 2026-06-22-contingency-mode-new-name-for-the-mode-off-feature
locale: es
announcementSynopsisES: 'La funcionalidad Mode-off pasa a llamarse Contingency Mode, con un propósito más claro y un proceso de reintento más rápido para las transacciones elegibles tras la recuperación de un conector de pago.'
tags:
  - Mejora
  - Pagos
---

VTEX ha renombrado esta funcionalidad para dejar más claro su propósito: actuar automáticamente en escenarios de inestabilidad temporal en los conectores de pago.

Además del cambio de nombre, se ha revisado la funcionalidad para que el proceso de reintento sea más rápido y eficiente después de la recuperación del conector.

## ¿Qué cambió?

VTEX ha sustituido el nombre **Mode-off** por **Contingency Mode** en la documentación y las comunicaciones relativas a esta funcionalidad.

El comportamiento principal del recurso sigue siendo el mismo. Cuando VTEX identifica fallas técnicas recurrentes en un conector de pago, **Contingency Mode** puede activarse automáticamente para ayudar a proteger las transacciones elegibles mientras el proveedor se recupera.

Además, VTEX ha implementado una mejora en el proceso de reintento: una vez que se reactiva el conector, las transacciones que estaban en la cola se reprocesan de forma más rápida y eficiente.

Esta optimización beneficia especialmente a los pedidos con entrega rápida, que suelen ser más sensibles al tiempo de aprobación y pueden reprocesarse mucho antes una vez recuperado el conector.

## ¿Qué se necesita hacer?

No es necesario realizar ninguna acción. VTEX continuará gestionando automáticamente la activación, la recuperación del conector y los reintentos de cobro para las transacciones elegibles.

Para más detalles sobre esta funcionalidad, consulta el artículo [Contingency Mode](https://help.vtex.com/es/docs/tutorials/mode-off-faq).