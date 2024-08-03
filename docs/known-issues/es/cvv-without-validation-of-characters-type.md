---
title: 'CVV sin validación del tipo de caracteres'
id: 63MJ3ODCvr3ayfgJiuN1ja
status: PUBLISHED
createdAt: 2022-03-27T20:25:43.400Z
updatedAt: 2024-02-16T20:29:04.636Z
publishedAt: 2024-02-16T20:29:04.636Z
firstPublishedAt: 2022-03-27T20:25:43.819Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: cvv-sin-validacion-del-tipo-de-caracteres
locale: es
kiStatus: No Fix
internalReference: 425204
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En el momento de la compra, pedimos la información de la tarjeta de crédito y sólo permitimos que el cliente escriba números en el campo Número de tarjeta, y sólo letras en el campo Nombre del propietario de la tarjeta. Sin embargo, no hacemos una validación similar para el campo CVV, permitiendo que el cliente escriba letras en este campo



## Simulación


Vaya a la caja de cualquier tienda y podrá rellenar las letras en el campo CVV del método de pago tarjeta de crédito



## Workaround


N/A

