---
title: "Segunda solicitud de autorización de pago enviada en un intervalo inferior al indicado en FirstRetryAttemptInSeconds."
id: 4Yzppxqj3pW9iC4vvvZDbv
status: PUBLISHED
createdAt: 2025-01-20T14:00:19.397Z
updatedAt: 2025-03-19T14:25:47.797Z
publishedAt: 2025-03-19T14:25:47.797Z
firstPublishedAt: 2025-01-20T14:00:20.190Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: segunda-solicitud-de-autorizacion-de-pago-enviada-en-un-intervalo-inferior-al-indicado-en-firstretryattemptinseconds
locale: es
kiStatus: Backlog
internalReference: 1165831
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El pago se cancela porque la pasarela envía la segunda solicitud de autorización antes de lo establecido en las reglas de autorización. Normalmente, el socio de pago no puede procesar la segunda solicitud debido al corto intervalo entre las 2 solicitudes, lo que lleva a una respuesta "denegada" y a la cancelación de la transacción.



## Simulación


No es posible simular este escenario.



## Workaround


Una posible solución sería en el lado del conector de socios, haciéndolo más resistente para manejar una posible segunda solicitud dentro de un intervalo más corto de lo que se indica en FirstRetryAttemptInSeconds.




