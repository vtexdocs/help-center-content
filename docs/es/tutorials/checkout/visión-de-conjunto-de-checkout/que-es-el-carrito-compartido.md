---
title: 'Qué es el carrito compartido'
id: 3oKJZfoAoUm8g0ukCIGsUu
status: PUBLISHED
createdAt: 2018-04-24T20:24:47.008Z
updatedAt: 2022-10-05T20:26:23.772Z
publishedAt: 2022-10-05T20:26:23.772Z
firstPublishedAt: 2018-05-03T14:07:40.683Z
contentType: tutorial
productTeam: Shopping
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: what-is-the-shared-cart
legacySlug: que-es-el-carrito-compartido
locale: es
subcategoryId: 8AGXmtpbTqUE2KQu0Swwk
order: 2
---

El carrito compartido es la herramienta que permite a más de un usuario gestionar un mismo carrito, añadiendo, quitando o actualizando artículos e información del mismo. A través de esta funcionalidad, tu cliente recibe una mayor autonomía a la hora de realizar una compra, y tu tienda adquiere:

- Oportunidad de mayores ventas.
- Menores esfuerzos logísticos.
- Flujo de pedido único.

## Cómo funciona el carrito compartido

Cada carrito creado en una tienda tiene un parámetro de identificación, llamado `orderFormId`.

Cuando añadimos el `orderFormId` de un carrito en una URL estándar (a través de un `querystring`), tenemos acceso a la página con la información de este carrito. A través de esta página compartible, otros usuarios pueden realizar cualquier cambio en el pedido (adición, eliminación) de artículos y completar su pago.

Ejemplo:

- **URL de Pago estándar**: `https://www.{nombredelatienda}.com/checkout/#/cart`

- **URL del carrito compartido**: `https://www.{nombredelatienda}.com/checkout/?orderFormId=31155bb8fd6944c99829c171aa8ed5c4#/cart`

> ⚠️ Al ensamblar la URL del carrito compartido, verifique que la querystring **?orderFormId=...** posicionarse entre **/checkout/** y **#/cart**.

Para obtener acceso a la información de identificación del carrito, acceda [Checkout API](https://developers.vtex.com/vtex-rest-api/reference/checkout-api-overview).

> ℹ️ El uso de la funcionalidad de carrito abandonado es opcional, no generando impacto para las tiendas que no la utilizan.

## Seguridad de información

Toda la información (personal, de entrega y de pago) está protegida, siendo visualizada únicamente por el usuario registrado en la plataforma (después de iniciar sesión). Los datos aparecen enmascarados para otras personas que acceden al carrito.

Para saber más sobre protección de datos, visite [Seguridad de SmartCheckout](/es/tutorial/seguranca-do-smartcheckout--3SrJuuhrqwePUg1rp1exfB#).

## Rastreo de páginas

Cuando se insertan nuevos parámetros en una URL, como una `querystring`, el seguimiento de la página puede cambiar, lo que afecta las evaluaciones realizadas por sistemas como el embudo de conversión de Google Analytics. Para utilizar el servicio de seguimiento de páginas con parámetros adicionales, consulte las reglas actualizadas en 
[Configurar embudo de ventas en Google Analytics](/es/tutorial/configurar-funil-de-vendas-no-google-analytics).

> ℹ️ Si utiliza otro sistema de seguimiento de páginas en su tienda, consulte la documentación interna de ese sistema.
