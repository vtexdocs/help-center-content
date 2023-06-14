---
title: Afiliaciones con split de pagos nativo y alteración de sellers
id: HZrgfF4RMTX9DHv4erOR6
status: PUBLISHED
createdAt: 2020-12-22T23:33:48.841Z
updatedAt: 2020-12-29T15:20:14.835Z
publishedAt: 2020-12-29T15:20:14.835Z
contentType: updates
productTeam: Financial
author: 5WE9zkDdoqqUMRbxIgmp1o
slug: afiliaciones-con-split-de-pagos-nativo-y-alteracion-de-sellers
legacySlug: afiliaciones-con-split-de-pagos-nativo-y-alteracion-de-sellers
announcementImageID: 
announcementSynopsisES: Nuevas formas de captura permiten alterar sellers y flexibilizan marketplaces con afiliaciones de split de pagos nativo.
---

Es posible que los marketplaces necesiten alterar sellers en diversas situaciones, por ejemplo, cuando un seller cancela un producto en caso de ruptura de stock. En ese caso, alterar el seller puede asegurar las ventas en el marketplace y prevenir la reversión del pago.

Se crearon cuatro nuevos comportamientos de captura de pagos para proporcionar más autonomía y flexibilidad en la alteración de sellers a los marketplaces que utilizan afiliaciones con split de pagos nativos. 

# ¿Qué cambió?
La captura de los pagos en afiliaciones que admiten slip de pagos se realizaba de forma automática por defecto, ahora puede seleccionar entre cuatro comportamientos diferentes. En dos de ellos, la captura de los pagos no ocurre de forma automática. Estos son:

  - **Utilizar el comportamiento recomendado del procesador de pagos**
  - **Desactivado: No se captura automáticamente**

En los otros, la captura se produce de forma automática:

- **Inmediatamente: Captura automática al autorizar el pago**
- **Inmediatamente: Captura automática al aprobar el análisis de riesgo de fraude**

Vea el artículo [Configurar split de pagos][1] para más detalles de cada comportamiento e instrucciones de configuración.

# ¿Por qué realizamos este cambio?
La alteración de sellers solo podía ser realizada por marketplaces que no utilizaban afiliaciones con split de pagos nativo porque la autorización y captura del pago se producía de forma automática por defecto. El hecho de poder configurar el comportamiento de captura de pagos para que no ocurra automáticamente aumenta la ventana de tiempo entre la autorización y la captura y, en consecuencia, permite la alteración del seller (vea el artículo [Cómo utilizar Change Seller][2] para obtener más detalles).

# ¿Qué se necesita hacer?
Las afiliaciones con split de pagos ya están capturando pagos con el comportamiento **Utilizar el comportamiento recomendado del procesador de pagos**. Si decide mantener el comportamiento automático en la afiliación que admite split, debe seleccionar el comportamiento deseado en la página de visualización de la afiliación en la que se produce el split.

[1]: https://help.vtex.com/es/tracks/split-de-pagamentos--1ouDg8q56Kuz1AgtJUY9nv/4EOhp8cdVXaHl68KykPG6
[2]: https://help.vtex.com/es/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO?&utm_source=autocomplete

