---
title: '¿Cómo se hace la aprobación de  pago del boleto?'
id: frequentlyAskedQuestions_489
status: PUBLISHED
createdAt: 2019-01-24T20:45:53.873Z
updatedAt: 2020-07-02T21:00:48.704Z
publishedAt: 2020-07-02T21:00:48.704Z
firstPublishedAt: 2019-01-24T22:11:54.868Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-are-the-payments-made-through-bank-slips-approved
locale: es
legacySlug: como-se-hace-la-aprobacion-de-pago-del-boleto
subcategoryId: 2tEO9ytK1aMO0i2oMayoQq
---

Existen dos posibilidades de configuración de boleto bancario: con las informaciones bancarias catastradas directamente en la sección de Pagos o pasando por un gateway de pago. [Vea nuestro manual de creación de boleto bancario](/es/tutorial/como-configurar-boleto-bancario/).

Explicamos detalladamente abajo cómo sucede la aprobación para cada uno de esos tipos:

## Directamente por VTEX

En este tipo de configuración, es necesario que la tienda o algún sistema avise a VTEX que se efectuó el pago.

El pedido queda en el status “Pago Pendiente” hasta que se haga la notificación de pago. Esa notificación puede ser hecha por [conciliación bancaria](/es/tutorial/conciliaciones-bancarias/), [por API](https://developers.vtex.com/reference/payment#sendpaymentnotification "por API") o [manualmente en Gestión de pedidos](/es/tutorial/como-aprobar-un-pago).

Es importante destacar que sólo después de la aprobación del pago el pedido seguirá con su flujo normal.

## Con un Gateway externo

En este caso, es necesario que el Gateway catastrado hable la comunicación de pago con VTEX, así como ocurre con una tarjeta de crédito, por ejemplo.

También es posible hacer la aprobación de pago [manualmente en Gestión de pedidos](/es/tutorial/como-aprobar-un-pago).
