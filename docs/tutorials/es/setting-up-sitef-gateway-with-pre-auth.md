---
title: 'Configurar gateway Sitef con pre-auth'
id: 2ZH4DLmZpKw022aSGcGYag
status: PUBLISHED
createdAt: 2018-03-05T21:07:59.629Z
updatedAt: 2023-03-29T01:21:24.445Z
publishedAt: 2023-03-29T01:21:24.445Z
firstPublishedAt: 2018-03-06T14:09:56.654Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-sitef-con-pre-auth
locale: es
legacySlug: configurar-gateway-sitef-con-pre-auth
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Para permitir que las compras realizadas con tarjeta de crédito tengan el valor reservado, usted puede configurar el gateway __Sitef con pre-auth__ (pre-autorización) en su tienda.

Para ello, basta con seguir los pasos abajo:

## Configurar la afiliación de gateway Sitef con pre-auth
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __Sitef con pre-auth__.
4. En el campo __ID de la tienda__ , rellene los datos de su MerchantId en Sitef.
5. En __Clave de acceso__ , rellene el MerchantKey enviado por Sitef.
6. En __Ambiente__, defina en qué ambiente Sitef va a utilizar la cuenta: producción, homologación o homologación con timeout.
7. En el campo __Captura de seguridad anticipada__ , escoja en cuánto tiempo desea que la captura se realice después de la aprobación de la transacción y del análisis del antifraude. También es posible desactivar esta función.
8. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, Sitef con pre-auth estará configurada en su tienda. Por lo tanto, cuando se registre una condición de pago, estará disponible en el campo __Procesar con afiliación__ (siempre que el medio de pago sea compatible con Sitef con pre-auth). Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
