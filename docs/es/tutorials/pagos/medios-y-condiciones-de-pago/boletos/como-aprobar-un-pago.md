---
title: 'Aprobar pago de boleto'
createdAt: 2017-04-27T22:16:19.919Z
updatedAt: 2026-10-29T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: approving-payment-of-the-bank-payment-slip
locale: es
hidden: false
---

La aprobación del pago confirma que el cliente pagó el valor del pedido y permite que el pedido avance en el flujo. En pedidos pagados con boleto, puedes realizar esta aprobación manualmente en el módulo Pedidos o vía API.

> ⚠️ Al aprobar el pago el pedido avanza aunque el boleto no haya sido pagado. Como las [integraciones con ERPs](https://developers.vtex.com/docs/guides/erp-integration-guide) siguen el [flujo de pedidos](/es/docs/tutorials/flujo-y-status-de-pedidos), el pedido también se integra normalmente al backend de la tienda. Por eso es importante confirmar la recepción del valor antes de aprobar un pago. Si aprobaste un pago por error, puedes [cancelar el pedido](/es/docs/tutorials/como-cancelar-pedido).

Para aprobar el pago manualmente sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Pedidos > Transacciones**, o ingresa **Transacciones** en la barra de búsqueda en la parte superior de la página.
2. Busca la transacción por email, nombre o documento del cliente, u otro dato listado en [Buscar transacciones en Pago](/es/docs/tutorials/transacciones-como-buscar) y haz clic en ella. Si estás en la página de detalles del pedido haz clic en **Ver detalles** de la sección Pago para abrir la transacción directamente.
3. En la tarjeta del pago con boleto haz clic en `Notificar pago`.

![NotificarES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/medios-y-condiciones-de-pago/boletos/como-aprobar-un-pago_1.png)

**Tras la aprobación del pago el pedido entrará en el flujo normal de compra.**

> ℹ️ Para aprobar pagos necesitas tener un [rol](/es/docs/tutorials/roles) con el [recurso de License Manager](/es/docs/tutorials/recursos-del-license-manager) `Notify payment` en la categoría `OMS access` del producto **OMS**.

Para aprobar el pago por API consulta la documentación del endpoint [Send payment notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/payments/-paymentId-/payment-notification).
