---
title: "La interfaz de usuario de la tarjeta genera un error cuando el usuario elige pagar con dos tarjetas, cambia el método de pago y vuelve al pago con dos tarjetas"
id: 1LZL3Gq40b7TRjCLnASacW
status: PUBLISHED
createdAt: 2022-11-30T19:03:35.002Z
updatedAt: 2022-12-01T19:01:19.135Z
publishedAt: 2022-12-01T19:01:19.135Z
firstPublishedAt: 2022-11-30T19:03:35.662Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: la-interfaz-de-usuario-de-la-tarjeta-genera-un-error-cuando-el-usuario-elige-pagar-con-dos-tarjetas-cambia-el-metodo-de-pago-y-vuelve-al-pago-con-dos-tarjetas
locale: es
kiStatus: Fixed
internalReference: 670424
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el usuario elige pagar con dos tarjetas, luego cambia el método de pago y vuelve a pagar con dos tarjetas, aparecerá el mensaje "_Error inesperado"_ en la caja de opciones de pago.


##

## Simulación



1. Ir a la caja con un artículo al azar
2. Elige pagar con tarjeta de crédito o débito y selecciona pagar con dos tarjetas
3. Cambiar la forma de pago
4. Cambia la forma de pago a la anterior
5. El mensaje "_Error inesperado"_ aparecerá en la caja de la tarjeta


##

## Workaround


El método de pago volverá a funcionar si se actualiza la página de pago

