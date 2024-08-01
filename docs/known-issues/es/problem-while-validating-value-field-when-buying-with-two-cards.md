---
title: 'Problema al validar el campo de valor al comprar con dos tarjetas'
id: 6dr0p9WQPSHLkFaSbjI9J7
status: PUBLISHED
createdAt: 2022-03-28T01:05:19.734Z
updatedAt: 2024-07-01T18:48:07.379Z
publishedAt: 2024-07-01T18:48:07.379Z
firstPublishedAt: 2022-03-28T01:05:20.361Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: problema-al-validar-el-campo-de-valor-al-comprar-con-dos-tarjetas
locale: es
kiStatus: No Fix
internalReference: 460683
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un comprador decide pagar con dos tarjetas de crédito y además quiere cambiar el importe pagado por cada tarjeta, resulta que al escribir caracteres no numéricos en el campo de valor, nuestra validación tiene un comportamiento diferente dependiendo de dónde inserte el usuario este carácter.

- Si intentamos escribir un carácter que no sea un número al final del valor= Nuestra validación sólo impide ese carácter
- Si intentamos introducir un carácter que no sea número en medio del valor= Nuestra validación borra los números, cambia el valor introducido.
- Si intentamos escribir un carácter que no sea un número al principio del valor= Lo sobrescribimos con un "indefinido" y mostramos el siguiente error



## Simulación


Ve a la caja de cualquier tienda y elige pagar con dos tarjetas y podrás hacer estas pruebas



## Workaround


N/A

