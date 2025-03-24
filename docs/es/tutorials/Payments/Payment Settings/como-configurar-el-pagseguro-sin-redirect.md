---
title: 'Configurar el PagSeguro sin redirect (transparente)'
id: tutorials_449
status: ARCHIVED
createdAt: 2017-04-27T22:04:37.656Z
updatedAt: 2024-07-24T12:05:55.438Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:25.912Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-configure-the-pagseguro-without-redirect-option-transparent
locale: es
legacySlug: como-configurar-el-pagseguro-sin-redirect
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

_Las configuraciones documentadas en este artículo se realizan en un ambiente fuera de VTEX, por lo tanto, pueden descontinuarse sin previo aviso._

Si usted tiene una cuenta en PagSeguro y ya utiliza la opción con redirect en su tienda, es posible habilitar la opción sin el redirect en el Pagos. Esto significa que, al momento de finalizar la compra, el cliente ya no saldrá de su sitio para realizar el pago, aunque haga la transacción por PagSeguro. Esto ocurrirá de forma transparente.

Atención: Si el administrador de la tienda tiene garantía de chargeback, es necesario configurar el antifraude de PagSeguro. Este proceso exige una etapa de configuración en Google Tag Manager. Para más detalles de cómo realizar esta acción, vea el [artículo en la página de PagSeguro](https://dev.pagseguro.uol.com.br/v2/docs/configurando-device-fingerprint "artigo na página do PagSeguro").

Para habilitarla, verifique el siguiente procedimiento:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __PagSeguroV2__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Haga clic en __Authorize via OAuth__.
5. Seleccione y envíe la __regla deseada__.
6. Haga clic en __Entre con su e-mail y contraseña__.
7. Entre en la __cuenta__ con su e-mail y contraseña PagSeguro.
8. Autorice la __aplicación__.
9. Haga clic en `Guardar`.

## Configurar condición de pago

Después de configurar la afiliación PagSeguro sin redirect (transparente), será necesario vincular un medio de pago a esta afiliación, tal como se describe en nuestro tutorial [Configurar condiciones de pago](/pt/tutorial/condicoes-de-pagamento/).

Es importante que __el valor de los intereses sea igual__ al configurado en el ambiente de PagSeguro y que la configuración del cobro sea __Fin del período__.

