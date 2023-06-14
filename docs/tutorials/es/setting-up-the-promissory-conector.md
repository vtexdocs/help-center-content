---
title: 'Configurar el conector Promissory'
id: 7Gy0SJRVS0Qi2CuWMAqQc0
status: PUBLISHED
createdAt: 2018-06-22T15:15:02.946Z
updatedAt: 2023-03-26T22:01:58.494Z
publishedAt: 2023-03-26T22:01:58.494Z
firstPublishedAt: 2018-06-22T19:10:55.195Z
contentType: tutorial
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slug: configurar-conector-promissory
locale: es
legacySlug: configurar-conector-promissory
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

El conector __Promissory__, como su propio nombre sugiere, permite que su tienda pase a aceptar pagarés como método de pago.

Para configurarlo, siga los pasos abajo:

## Configurar la afiliación de gateway
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __Promissory__.
4. En el campo __Validéz de la promisoria en días Max (180)__, defina cuántos días su cliente tendrá para pagar e pagaré antes de que pierda la validez.
5. En __Autorizar automáticamente__, informe si desea aprobar el pago de inmediato. Sólo recomendamos la elección de esta opción para los casos en que el pago se realiza en la entrega o en la retirada del pedido en la tienda. Al elegir _Yes_, el pedido pasa automáticamente al status _Preparando Entrega_, sin pasar por ninguna verificación de pago.
6. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, el conector Promissory estará configurado en su tienda. Por lo tanto, cuando se registre un Pagaré (en la pestaña __Pagos personalizados__ de la página de __Configuración__ de Pagos), estará disponible en el campo __Procesar con la afiliación__. Para saber cómo registrar pagos personalizados, acceda a [este artículo](/es/tutorial/como-configurar-pagamento-personalizado).
