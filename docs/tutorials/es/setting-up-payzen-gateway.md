---
title: Configurar el gateway PayZen
id: 3v3n5eQvxem8MQOCkugk24
status: PUBLISHED
createdAt: 2018-03-13T19:39:04.093Z
updatedAt: 2023-03-29T00:56:10.654Z
publishedAt: 2023-03-29T00:56:10.654Z
firstPublishedAt: 2018-03-13T22:27:11.198Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-el-gateway-payzen
legacySlug: configurar-el-gateway-payzen
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, usted puede configurar el [gateway PayZen](/es/tutorial/que-es-un-gateway-de-pagos) en su tienda. De fácil integración, sigue los estándares de seguridad definidos por [Pagos](/es/faq/que-es-el-pci-ssc).

Para configurar PayZen, siga los pasos abajo:

## Configurar la afiliación de gateway PayZen
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __PayZen__.
4. Rellene los campos _Id da Loja_ ("ID de la tienda") y _Certificado_ con los datos proporcionados por PayZen.
5. En el campo __Moeda da transação__ ("Moneda"), rellene con el código [ISO 4217](https://es.wikipedia.org/wiki/ISO_4217) referente a la moneda que se utilizará en los pagos.
6. En __Registered bank invoice__, elija si va a utilizar boletos bancarios registrados o no.
7. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, PayZen estará configurado en su tienda. Por lo tanto, cuando se registre una condición de pago, estará disponible en el campo __Procesar con la afiliación__ (siempre que el medio de pago sea compatible con PayZen). 
Para saber cómo configurar condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
