---
title: 'Tarjeta de crédito - Flujo básico de un pago'
id: 1L1Y66GgcAUgkIqwgccCUK
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.505Z
updatedAt: 2019-12-31T15:26:29.334Z
publishedAt: 2019-12-31T15:26:29.334Z
firstPublishedAt: 2019-01-24T22:02:00.724Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: credit-card-basic-payment-flow
legacySlug: tarjeta-de-credito-flujo-basico-de-un-pago
locale: es
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

Este artículo tiene como objetivo explicar cómo funciona el flujo básico de un pago por __tarjeta de crédito__:

![ES Flujo Tarjeta de Credito](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/medios-y-condiciones-de-pago/tarjetas-beneficios-y-tarjetas-de-regalo/tarjeta-de-credito-flujo-basico-de-un-pago_1.svg)

1. En la pantalla de Checkout, el cliente elige el __Medio de Pago__ tarjeta de crédito para realizar el pago de su compra.
2. La información de este pago se envía al **Gateway de pagos**. El [gateway](/es/docs/tutorials/agentes-financieros-en-el-flujo-de-pago#gateway) es el agente responsable de garantizar que este pago se realice con éxito.
3. Con la información en mano, el gateway de pagos envía la información necesaria al **Adquirente**. Los [adquirentes](/es/docs/tutorials/agentes-financieros-en-el-flujo-de-pago#adquirente) son responsables de la liquidación de las transacciones financieras con los retailers.
4. Con la información, el adquirente envía los datos del pago a la **Red de tarjeta**. La [red de tarjeta](/es/docs/tutorials/agentes-financieros-en-el-flujo-de-pago#red-de-tarjeta) determina algunas reglas de negocio para los pagos, como la cantidad de cuotas. Además, conecta el sistema de adquirentes con los bancos emisores.
5. Por último, la bandera envía la información del pago al __Banco Emisor__. El banco emisor hace el análisis de crédito, comprueba el límite disponible y entonces autoriza o niega el pago.

Con la respuesta del banco emisor, se realiza el flujo inverso y el __Gateway de Pagos__ recibe la información si el pago fue aprobado o negado.

> ℹ️ Es posible incluir el **Antifraude** en este flujo. En este caso, el antifraude recibe la información del gateway de que el pago fue pre-autorizado por el banco emisor. Con la información recibida del gateway, el antifraude envía una respuesta de aprobación o denegación del pago. Si el antifraude niega, el pago se cancela. Si el pago se aprueba, el pedido puede proseguir su flujo normal.
