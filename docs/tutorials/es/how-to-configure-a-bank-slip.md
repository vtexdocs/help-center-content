---
title: Configurar boleto bancario
id: tutorials_447
status: PUBLISHED
createdAt: 2017-04-27T22:04:55.249Z
updatedAt: 2023-03-21T20:14:57.262Z
publishedAt: 2023-03-21T20:14:57.262Z
firstPublishedAt: 2017-04-27T23:03:25.766Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: como-configurar-boleto-bancario
legacySlug: como-configurar-boleto-bancario
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

El boleto bancario es un instrumento de pago que, para el cobro, basta tener una cuenta bancaria y contratar una cartera de cobro junto al banco. 

A partir de eso, ya es posible emitir boletos y recibir directamente en su cuenta.

Hay dos maneras de configurar el boleto:
- Directamente en VTEX sin un gateway de enlace externo.
- A través de un gateway de pago, como por ejemplo, PagSeguro. 

Las dos formas de configuración se describen a continuación.

## Cómo configurar

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Acceda a la pestaña __Afiliaciones__.
3. Haga clic en "__+__".
4. Llene los campos del formulario de acuerdo con los datos informados por su banco - para cada banco son necesarias informaciones distintas. Por eso, siempre confirme con el banco cuáles son las informaciones obligatorias.
5. Haga clic en __Guardar__.

OBS.: Ese paso es opcional, pues es posible el catastro de boleto pasando por un Gateway de Pago. En este caso, es necesario catastrar el Gateway de Pago en Afiliaciones de Gateway y realizar la configuración abajo.

Después de la configuración de la Afiliación de Gateway, es necesario configurar la condición de pago. Para eso, siga las configuraciones de cómo crear condiciones de pago.

Con esas configuraciones realizadas, la forma de pago ya estará disponible en el checkout de su tienda.
