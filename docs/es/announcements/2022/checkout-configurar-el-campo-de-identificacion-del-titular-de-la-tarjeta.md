---
title: 'Checkout - Configurar el campo de identificación del titular de la tarjeta'
id: R5Pz4ofU9ueB2e5bMhSWH
status: PUBLISHED
createdAt: 2022-04-29T12:21:40.419Z
updatedAt: 2022-05-03T18:15:16.054Z
publishedAt: 2022-05-03T18:15:16.054Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: checkout-setting-up-the-cardholder-document-id-field
locale: es
legacySlug: checkout-configurar-el-campo-de-identificacion-del-titular-de-la-tarjeta
announcementImageID: ''
announcementSynopsisES: 'Configurar la visualización del campo de identificación del titular de la tarjeta en el checkout.'
---

Para permitir que nuestros _partners_ puedan operar en diferentes lugares y regiones, que tienen sus propios requisitos y características de consumo, VTEX está implementando la opción de configurar la visualización del campo **Identificación del titular de la tarjeta** en el Checkout. Así, nuestros proveedores antifraude y administradores de la tienda tendrán autonomía para decidir si se debe solicitar este tipo de información del cliente en las compras que se realicen con tarjeta de crédito o débito.

## ¿Qué cambió?

Antes, al seleccionar la tarjeta de crédito o débito como medio de pago en la pantalla del Checkout, el cliente rellenaba los siguientes datos de la tarjeta:

* Número
* Nombre del titular
* Vencimiento 
* CVV
* Identificación del titular de la tarjeta

Ahora, si el proveedor antifraude entiende que el campo **Identificación del titular de la tarjeta** no es obligatorio para su análisis antifraude, el administrador de la tienda podrá configurar en el Admin VTEX si el campo debe mostrarse o no en el Checkout.

> ℹ️ El campo **Identificación del titular de la tarjeta** debe rellenarse con el dato específico de cada país, como CPF (Brasil) y número de seguro social (Estados Unidos). El nombre de campo se mostrará de diferentes maneras en el Checkout, según el país donde se realice la compra.

## ¿Por qué realizamos este cambio?

Para adaptarnos a las prácticas de diferentes mercados, pues hay países en los que este tipo de identificación no se solicita al realizar transacciones con tarjetas de crédito o débito.

## ¿Qué se necesita hacer?

Para comprobar si los proveedores antifraude configurados en tu tienda permiten la configuración de la visualización del campo **Identificación del titular de la tarjeta**, sigue los pasos a continuación.

1. Accede al **Admin VTEX**.
2. En **Pagos**, haz clic en **Configuración > Afiliaciones de gateway**. 
3. Al seleccionar el proveedor antifraude escogido, comprueba si la opción **Campo de documento del titular de la tarjeta** está disponible en la pantalla de configuración.

![campo de documento del titular de la tarjeta](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2022/checkout-configurar-el-campo-de-identificacion-del-titular-de-la-tarjeta_1.png)

> ⚠️ Si la opción **Campo de documento del titular de la tarjeta** no está disponible en la pantalla de configuración de tu proveedor antifraude, el campo **Identificación del titular de la tarjeta** seguirá apareciendo en la pantalla del Checkout de la tienda y será obligatorio que el cliente lo rellene.

Para más información sobre cómo configurar la visualización del campo en el Checkout de tu tienda, accede a [Campo de documento del titular de la tarjeta](https://help.vtex.com/es/tutorial/antifraud-provider--4aZtmdpgFikcsQomWyqAOq#configuracion-del-documento-del-titular-de-la-tarjeta).

Para más información sobre la configuración realizada internamente por el proveedor antifraude, accede a [Cardholder Document Configuration](https://developers.vtex.com/vtex-rest-api/docs/cardholder-document-configuration).
