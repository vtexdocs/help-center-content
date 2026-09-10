---
title: '¿Por qué mis medios de pago no aparecen en el marketplace?'
id: frequentlyAskedQuestions_689
status: PUBLISHED
createdAt: 2017-04-27T22:29:46.341Z
updatedAt: 2019-12-31T14:24:09.191Z
publishedAt: 2019-12-31T14:24:09.191Z
firstPublishedAt: 2017-04-27T23:02:27.518Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slugEN: why-dont-my-payment-methods-appear-on-the-marketplace
locale: es
legacySlug: por-que-mis-medios-de-pago-no-aparecen-en-marketplace
---

Para la parte más grande de las integraciones con marketplace (y todas las configuradas por el Bridge), el marketplace no utiliza las formas de pago del seller. Con esto, el marketplace procesa el pago por las formas de pago que tiene y después pasa el valor combinado al seller.

O sea, el pago es realizado en el marketplace por las formas de pago del marketplace. Así, las formas de pago del seller no aparecerán ni tendrán impacto en el proceso de compra del marketplace.

En el pedido del seller, el Admin VTEX puede mostrar el medio real usado en el marketplace, por ejemplo, __Tarjeta de crédito__ y __Mastercard__. Eso no significa que el pago se haya procesado con los medios del seller.

Para identificar que el marketplace asumió el pago, consulta el __ID de la transacción__: El valor es `PAYMENT-FROM-AFFILIATE`.

> ℹ️ Los datos en `paymentData` sirven para emitir la factura. No disparan autorización, captura, reembolso ni liquidación en el Gateway de la cuenta del seller. Obtén más información en [Pagos en los marketplaces VTEX](/es/docs/tutorials/pagos-en-los-marketplaces-vtex).

En algunas integraciones más antiguas, el OMS todavía muestra el texto *Assumed value by affiliate* en el nombre del medio, como en la siguiente imagen.

![exemplopagamento](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/channels/por-que-mis-medios-de-pago-no-aparecen-en-marketplace_1.png)
