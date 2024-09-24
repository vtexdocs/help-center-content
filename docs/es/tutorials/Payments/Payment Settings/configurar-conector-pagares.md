---
title: 'Configurar el conector Pagarés'
id: 7Gy0SJRVS0Qi2CuWMAqQc0
status: CHANGED
createdAt: 2018-06-22T15:15:02.946Z
updatedAt: 2024-01-19T19:28:16.938Z
publishedAt: 2023-10-18T17:29:11.714Z
firstPublishedAt: 2018-06-22T19:10:55.195Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-the-notes-payable-conector
locale: es
legacySlug: configurar-conector-pagares
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

El conector __Pagarés__, como su propio nombre sugiere, permite que su tienda pase a aceptar pagarés como método de pago.

Para configurarlo, siga los pasos a continuación:

## Configurar la afiliación de gateway
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones de Gateway__, haga clic en el botón `+`.
3. Haga clic en el conector __Pagarés__.
4. En el campo __Validez del pagaré en días, máx (180)__, defina cuántos días su cliente tendrá que pagar el pagaré antes de que deje de ser válido.
5. En __Autorizar automáticamente__, informe si desea aprobar el pago de inmediato. Sólo recomendamos la elección de esta opción para los casos en que el pago se realiza en la entrega o en la retirada del pedido en la tienda. Al elegir _Yes_, el pedido pasa automáticamente al status _Preparando Entrega_, sin pasar por ninguna verificación de pago.
6. Haga clic en `Guardar`.

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, el conector Pagarés estará configurado en su tienda. Por lo tanto, cuando se registre un Pagaré (en la pestaña __Pagos personalizados__ de la página de __Configuración__ de Pagos), estará disponible en el campo __Procesar con la afiliación__. Para saber cómo registrar pagos personalizados, acceda a [Configurar pago personalizado](https://help.vtex.com/es/tutorial/como-configurar-pagamento-personalizado).
