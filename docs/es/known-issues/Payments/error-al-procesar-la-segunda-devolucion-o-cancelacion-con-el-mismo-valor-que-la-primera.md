---
title: "Error al procesar la segunda devolución o cancelación con el mismo valor que la primera"
id: 17uP0QDzEPHmKvLMiyDYxc
status: PUBLISHED
createdAt: 2024-10-16T20:27:34.223Z
updatedAt: 2025-06-26T19:23:23.166Z
publishedAt: 2025-06-26T19:23:23.166Z
firstPublishedAt: 2024-10-16T20:27:35.166Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-al-procesar-la-segunda-devolucion-o-cancelacion-con-el-mismo-valor-que-la-primera
locale: es
kiStatus: Scheduled
internalReference: 1118560
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al solicitar un segundo reembolso parcial del mismo valor que el primero, la pasarela devuelve el siguiente mensaje:

    Mensaje: La tarjeta regalo ya ha sido reembolsada.


O si se solicita una segunda cancelación parcial con el mismo valor que la primera, la pasarela devuelve:

    Mensaje: "La tarjeta regalo ya ha sido cancelada"


Aunque esto se registra en la interacción, el segundo reembolso/cancelación no se procesa realmente.
Este escenario es mucho más común para el segundo reembolso/cancelación con el mismo valor, pero también puede ocurrir en reembolsos posteriores, siempre que el importe solicitado sea igual a la suma de los reembolsos ya procesados.


##

## Simulación



1. Realiza una compra exclusivamente con una tarjeta regalo (CG);
2. 2. Finalice la transacción;
3. Emitir un reembolso parcial por un importe inferior a la mitad del pago total;
4. 4. Solicitar otro reembolso por el mismo importe que el primero.



## Workaround

 provisional
Para los casos de reembolso, abra un ticket con soporte para aplicar la solución interna.
Para casos de cancelación, cancele manualmente con su proveedor.




