---
title: 'Configurar el PagSeguro sin redirect (transparente)'
id: tutorials_449
status: PUBLISHED
createdAt: 2017-04-27T22:04:37.656Z
updatedAt: 2023-03-29T01:24:00.848Z
publishedAt: 2023-03-29T01:24:00.848Z
firstPublishedAt: 2017-04-27T23:03:25.912Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: como-configurar-el-pagseguro-sin-redirect
locale: es
legacySlug: como-configurar-el-pagseguro-sin-redirect
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

_Las configuraciones documentadas en este artículo se realizan en un ambiente fuera de VTEX, por lo tanto, pueden descontinuarse sin previo aviso._

Si usted tiene una cuenta en PagSeguro y ya utiliza la opción con redirect en su tienda, es posible habilitar la opción sin el redirect en el Pagos. Esto significa que, al momento de finalizar la compra, el cliente ya no saldrá de su sitio para realizar el pago, aunque haga la transacción por PagSeguro. Esto ocurrirá de forma transparente.

Esta opción está disponible como un nuevo conector en la opción **Afiliaciones de Gateways**, como se muestra en la siguiente imagen.

Atención: Si el administrador de la tienda tiene garantía de chargeback, es necesario configurar el antifraude de PagSeguro. Este proceso exige una etapa de configuración en Google Tag Manager. Para más detalles de cómo realizar esta acción, vea el [artículo en la página de PagSeguro](https://dev.pagseguro.uol.com.br/v2/docs/configurando-device-fingerprint "artigo na página do PagSeguro").

Para habilitarla, verifique el siguiente procedimiento:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en __Afiliaciones de Gateways__ y luego en __"+"__.
3. Haga clic en la afiliación __PagSeguroV2__.
4. Guarde la __afiliación__.
5. Vuelva al __panel__ de afiliaciones.
6. Seleccione la afiliación __PagSeguroV2__ recién creada.
7. Haga clic en __Autorizar__.
8. Seleccione y envíe la __regla deseada__.
9. Haga clic en __Entre con su e-mail y contraseña__.
10. Entre en la __cuenta__ con su e-mail y contraseña PagSeguro
11. Autorice la __aplicación__.
12. Haga clic en __Guardar__.

## Configurar condición de pago

Después de configurar la afiliación PagSeguro sin redirect (transparente), será necesario vincular un medio de pago a esta afiliación, tal como se describe en nuestro tutorial [Configurar condiciones de pago](/pt/tutorial/condicoes-de-pagamento/).

Es importante que __el valor de los intereses sea igual__ al configurado en el ambiente de PagSeguro y que la configuración del cobro sea __Fin del período__.

