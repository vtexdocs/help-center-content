---
title: "La condición de pago único no aparece en el chekout."
id: 3L7GJTRaWWA9Wjw2zkQqtS
status: PUBLISHED
createdAt: 2022-06-29T11:57:22.859Z
updatedAt: 2024-04-26T15:49:53.973Z
publishedAt: 2024-04-26T15:49:53.973Z
firstPublishedAt: 2022-06-29T11:57:23.251Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: la-condicion-de-pago-unico-no-aparece-en-el-chekout
locale: es
kiStatus: Backlog
internalReference: 605568
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se configura una única condición de pago con una única opción de pago a plazos o múltiples condiciones de pago en las que sólo hay disponible una opción de pago a plazos para un carro específico, esta opción de pago a plazos no se muestra en el proceso de pago. Aunque aparece correctamente en `paymentData`, no es visible para el usuario. En su lugar, sólo se muestra la opción de pagar el valor total. Sin embargo, cuando se completa la transacción, el pago se procesa con la opción de pago a plazos correcta.


##

## Simulación



- Configure una única condición de pago a plazos.
- Vaya a la página de pago comprando cualquier artículo al azar.
- Vaya a la pestaña Red en devtools y compruebe que la opción de pago a plazos se carga correctamente en la respuesta `paymentData`.
- Compruebe el desplegable de opciones de pago en la página de pago. Observe que no aparece la opción de pago a plazos configurada; en su lugar, se muestra el importe total.
- A pesar de este problema, al finalizar la compra, la transacción refleja correctamente la opción de pago a plazos elegida.



## Workaround


N/A

Atenciosamente,
Gisely Lacerda
Ingeniera de Soporte de Producto, Equipo Shopper Journey

