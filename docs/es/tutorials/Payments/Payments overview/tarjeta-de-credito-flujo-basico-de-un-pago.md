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
locale: es
legacySlug: tarjeta-de-credito-flujo-basico-de-un-pago
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

Este artículo tiene como objetivo explicar cómo funciona el flujo básico de un pago por __tarjeta de crédito__:

![ES Flujo Tarjeta de Credito](//images.ctfassets.net/alneenqid6w5/JziB4sI4XzTW0lpAwt1xL/dcd6a342402fc2f003fe76b6f1d38c8e/ES_Flujo_Tarjeta.svg)

1. En la pantalla de Checkout, el cliente elige el __Medio de Pago__ tarjeta de crédito para realizar el pago de su compra.
2. La información de este pago se pasa al __Gateway de Pagos__. El [gateway](/es/tutorial/que-es-un-gateway-de-pagos) es el player responsable de garantizar que este pago se realice con éxito.
3. Con la información en mano, gateway de pagos repasa la información necesaria para el __Adquirente__. Los [adquirentes](/es/tutorial/cual-es-la-diferencia-entre-adquirente-bandera-gateway-y-sub-adquirente-en-brasil#adquirente) son responsables de liquidaciones de las transacciones financieras con los minoristas.
4. En posesión de la información, el adquirente envía los datos del pago a la __Bandera__. La [bandera de la tarjeta](/es/tutorial/cual-es-la-diferencia-entre-adquirente-bandera-gateway-y-sub-adquirente-en-brasil#bandera-de-tarjeta) fija algunas reglas de negocio para los pagos, como el número de parcelas. Además, conecta el adquirente con los bancos emisores.
5. Por último, la bandera envía la información del pago al __Banco Emisor__. El banco emisor hace el análisis de crédito, comprueba el límite disponible y entonces autoriza o niega el pago.

Con la respuesta del banco emisor, se realiza el flujo inverso y el __Gateway de Pagos__ recibe la información si el pago fue aprobado o negado.

>ℹ️ Es posible incluir el **Antifraude** en este flujo. En este caso, el antifraude recibe la información del gateway de que el pago fue pre-autorizado por el banco emisor. Con la información recibida del gateway, el antifraude envía una respuesta de aprobación o denegación del pago. Si el antifraude niega, el pago se cancela. Si el pago se aprueba, el pedido puede proseguir su flujo normal.
