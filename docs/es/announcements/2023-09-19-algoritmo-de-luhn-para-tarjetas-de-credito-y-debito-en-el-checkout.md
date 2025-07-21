---
title: 'Algoritmo de Luhn para tarjetas de crédito y débito en el checkout'
id: 22hAb6KVWUitIG9OzFzgi2
status: PUBLISHED
createdAt: 2023-09-19T15:43:01.350Z
updatedAt: 2023-09-19T16:47:51.216Z
publishedAt: 2023-09-19T16:47:51.216Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2023-09-19-luhn-algorithm-for-credit-and-debit-cards-at-checkout
locale: es
legacySlug: algoritmo-de-luhn-para-tarjetas-de-credito-y-debito-en-el-checkout
announcementImageID: ''
announcementSynopsisES: 'Reduce el porcentaje de transacciones rechazadas debido a número de tarjeta inválido'
---

Ahora VTEX ofrece la validación de números de tarjetas de crédito y débito en el checkout mediante el algoritmo de Luhn.

## ¿Qué cambió?

Antes, cuando un cliente ingresaba el número de tarjeta en el checkout, no era posible saber si el número correspondía a una tarjeta válida. Cuando se producían errores tipográficos o de valor ingresado, la transacción se creaba para luego ser cancelada en la etapa de autorización.

De ahora en adelante, se aplicará el algoritmo de Luhn para garantizar que solo se pueda ingresar un número de tarjeta válido para realizar una compra. Así, se reducirá el porcentaje de transacciones rechazadas debido a la inserción de números de tarjeta inválidos.

Si el cliente ingresa un número incorrecto, se mostrará un mensaje de error en el checkout. En ese caso, el cliente deberá comprobar el número ingresado y corregirlo para continuar con la finalización de la compra.

![algoritmo_luhn_es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2023-09-19-algoritmo-de-luhn-para-tarjetas-de-credito-y-debito-en-el-checkout_1.PNG)

## ¿Por qué realizamos este cambio?

El rechazo de una transacción de pago debido a un número de tarjeta inválido puede hacer que el cliente desista de realizar una nueva compra, ya que tendría que corregir el número de la tarjeta. Por lo tanto, el objetivo de esta mejora en la experiencia de compra es aumentar la tasa de conversión de tu tienda.

## ¿Qué se necesita hacer?

No se requiere ninguna acción. El algoritmo de Luhn ya está activo en todas las tiendas VTEX.

<div class="alert alert-warning">
El algoritmo de Luhn no restringe el fraude por ataques con tarjeta. El objetivo específico es comprobar si hay errores tipográficos o del valor ingresado en los números de las tarjetas.
</div>
