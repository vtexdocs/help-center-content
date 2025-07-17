---
title: 'Aprobar pago de boleto'
id: tutorials_184
status: PUBLISHED
createdAt: 2017-04-27T22:16:19.919Z
updatedAt: 2024-06-03T20:36:09.927Z
publishedAt: 2024-06-03T20:36:09.927Z
firstPublishedAt: 2017-04-27T23:00:46.699Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: approving-payment-of-the-bank-payment-slip
locale: es
legacySlug: como-aprobar-un-pago
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

La aprobación del pago es la confirmación de que el cliente pagó el valor del pedido, posibilitando el seguimiento del pedido.

Si el boleto ha sido realmente pagado o no, el pedido seguirá adelante si usted aprueba el pago.

Se puede hacer esa aprobación manualmente por el OMS de forma simple, conforme abajo.

1. Acceda a la pestaña __Pedidos__.
2. Haga clic en la transaccione.
3. Haga clic en el botón __Notificar el pago__.

![NotificarES](https://images.ctfassets.net/alneenqid6w5/3IfQ1FNhluYWWgcMUEaUq0/ea25ce5d59b8ff98c593bc9382312f85/NotificarES.png)

**Después de la aprobación del pago, el pedido entrará en el flujo normal de compra.**

<div class="alert alert-info">
En el módulo de Gestión de la cuenta, el usuario debe tener un perfil de acceso que incluya el permiso <code>Notify payment</code> para poder aprobar los pagos.
</div>

Para aprobar pagos por API, vea la [documentación sobre la solicitud de notificación de pago](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/payments/-paymentId-/payment-notification).

<div class="alert alert-warning">
Como las <a href="https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide">integraciones con los ERP</a> se rigen por el <a href="https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196#">flujo de pedidos</a>, la aprobación manual de un pago continuará la integración de este pedido con el back office de la tienda normalmente. Por lo tanto, se recomienda precaución al aprobar los pagos manualmente, para garantizar que se reciba cada pedido procesado y enviado.
</div>

