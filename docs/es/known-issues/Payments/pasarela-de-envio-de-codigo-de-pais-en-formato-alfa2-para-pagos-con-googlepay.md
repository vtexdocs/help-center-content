---
title: "Pasarela de envío de código de país en formato alfa-2 para pagos con GooglePay"
id: 2w3ofI9vXdQwjjtAdChFdD
status: PUBLISHED
createdAt: 2025-03-10T19:56:38.926Z
updatedAt: 2025-03-10T19:56:39.724Z
publishedAt: 2025-03-10T19:56:39.724Z
firstPublishedAt: 2025-03-10T19:56:39.724Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pasarela-de-envio-de-codigo-de-pais-en-formato-alfa2-para-pagos-con-googlepay
locale: es
kiStatus: Backlog
internalReference: 1191562
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La pasarela envía el código de país de la dirección de facturación en formato alfa-2 al proveedor en caso de pagos con GooglePay.


##

## Simulación


Ocurre con todas las transacciones de Google Pay ya que Google utiliza un formato diferente al esperado en nuestro protocolo.



## Workaround


El proveedor debe identificar y aceptar la transacción aunque la dirección de facturación tenga un formato diferente en los casos de transacciones GooglePay.





