---
title: 'Registrar información de BIN'
id: 7xvo4JJ53WM7aLzufdC4au
status: PUBLISHED
createdAt: 2024-05-02T19:11:00.734Z
updatedAt: 2024-05-03T13:40:32.363Z
publishedAt: 2024-05-03T13:40:32.363Z
firstPublishedAt: 2024-05-02T19:44:35.388Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: adding-bin-information
locale: es
legacySlug: registrar-informacion-de-bin
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

El número de identificación bancaria (BIN) se compone de los primeros seis u ocho dígitos de una tarjeta de crédito o débito y caracteriza la entidad emisora de la tarjeta.

![BIN_image_digits_ES_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payments overview/registrar-informacion-de-bin_1.png)

Cuando la entidad emisora desea crear nuevos perfiles de tarjetas o emitir nuevas tarjetas para un modelo existente, debe crear nuevos BIN. Esto también se aplica cuando una [bandera de tarjeta](https://help.vtex.com/es/tutorial/que-es-una-bandera-de-tarjeta-de-credito--4bNba5QYuIwKEmac88KwyI) es adquirida por otra.

En estos casos, se debe notificar a VTEX para permitir que las nuevas tarjetas se validen de forma correcta en el proceso de pago durante una compra realizada en la plataforma.

## Solicitar la inclusión de BIN

Para agegar un BIN o actualizar la información de un BIN existente en VTEX, debes abrir un ticket con el [Soporte VTEX](https://help.vtex.com/es/support).

El ticket debe incluir como adjunto una plantilla rellenada con la siguiente información:

- __code__: el nuevo BIN que se debe agregar o el BIN existente que se debe actualizar.
- __cardBrand__: red de la tarjeta correspondiente al BIN.
- __cardType__: tipo de tarjeta (crédito o débito).
- __country__: país de utilización de la tarjeta.
- __bank__: banco emisor de la tarjeta.
- __cvvSize__: número de caracteres del CVV (Card Verification Value).
- __cardLevel__: clasificación de la tarjeta (Gold, Platinum, Black, entre otros).

Modelo de plantilla rellenada:

![Bin_spreadsheet](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payments overview/registrar-informacion-de-bin_2.PNG)
