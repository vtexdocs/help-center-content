---
title: 'Omitir una condición de pago'
id: 5f8aZrc7y8oiu0KOmaOy0e
status: PUBLISHED
createdAt: 2019-01-24T20:45:50.203Z
updatedAt: 2019-12-31T15:26:32.553Z
publishedAt: 2019-12-31T15:26:32.553Z
firstPublishedAt: 2019-01-24T22:12:17.899Z
contentType: tutorial
productTeam: Financial
author: authors_35
slugEN: how-does-one-omit-a-payment-condition
locale: es
legacySlug: como-omitir-una-condicion-de-pago
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Como VTEX permite el registro fácil y rápido de múltiples Gateways, Adquirentes y sus respectivas asociaciones con los medios de pago, a algunos comerciantes les gustaría crear promociones, o aún alianzas, de manera que el pago sea exclusivo para un medio de pago.

Una forma de lograr segregar una condición de pago es a través de políticas comerciales.

Por ejemplo, una tienda desea aplicar precios variados por utm y desea que la compra se realice solamente con un medio de pago específico. Será necesario crear una nueva política comercial, y la utm definida tendrá que cargar el site con esa política. La configuración de la condición de pago con una política comercial específica puede hacerse en el propio conector, o sea, en el Pagos.

Otra manera, tal vez más sencilla, es customizar el Checkout, de forma que el CSS omita los medios de pago cuando haya la utm. Sin embargo, vale recordar que __VTEX no recomienda customizaciones en el Checkout__, una vez que el SmartCheckout fue hecho para maximizar la eficiencia en el flujo de cierre de compra.
