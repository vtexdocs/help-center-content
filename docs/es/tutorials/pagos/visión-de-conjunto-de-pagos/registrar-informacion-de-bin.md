---
title: 'Registrar información de BIN'
id: 7xvo4JJ53WM7aLzufdC4au
status: PUBLISHED
createdAt: 2024-05-02T19:11:00.734Z
updatedAt: 2025-08-11T19:36:44.910Z
publishedAt: 2025-08-11T19:36:44.910Z
firstPublishedAt: 2024-05-02T19:44:35.388Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: adding-bin-information
legacySlug: registrar-informacion-de-bin
locale: es
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

El número de identificación bancaria (BIN) se compone de los primeros seis u ocho dígitos de una tarjeta de crédito o débito y caracteriza la entidad emisora de la tarjeta.

![BIN_image_digits_ES_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visión-de-conjunto-de-pagos/registrar-informacion-de-bin_1.png)

Cuando la entidad emisora desea crear nuevos perfiles de tarjetas o emitir nuevas tarjetas para un modelo existente, debe crear nuevos BIN. Esto también se aplica cuando una [bandera de tarjeta](/es/tutorial/que-es-una-bandera-de-tarjeta-de-credito--4bNba5QYuIwKEmac88KwyI) es adquirida por otra.

En estos casos, se debe notificar a VTEX para permitir que las nuevas tarjetas se validen de forma correcta en el proceso de pago durante una compra realizada en la plataforma.

## Solicitar la inclusión de BIN

Para agegar un BIN o actualizar la información de un BIN existente en VTEX, debes abrir un ticket con el [Soporte VTEX](https://help.vtex.com/es/support).

> ⚠️ Para garantizar la seguridad y la legitimidad de los cambios solicitados, es obligatorio enviar una comprobación formal de la entidad financiera que acredite la titularidad de los BINs informados. Las solicitudes sin esta validación no podrán ser atendidas.

El ticket debe incluir como adjunto una plantilla rellenada con la siguiente información:

- __code__: el nuevo BIN que se debe agregar o el BIN existente que se debe actualizar.
- __cardBrand__: red de la tarjeta correspondiente al BIN.
- __cardType__: tipo de tarjeta (crédito o débito).
- __country__: país de utilización de la tarjeta.
- __bank__: banco emisor de la tarjeta.
- __cvvSize__: número de caracteres del CVV (Card Verification Value).
- __cardLevel__: clasificación de la tarjeta (Gold, Platinum, Black, entre otros).

Modelo de plantilla rellenada:

![Bin_spreadsheet](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visión-de-conjunto-de-pagos/registrar-informacion-de-bin_2.PNG)
