---
title: La papelera enviada no coincide con una marca de tarjeta asociada
id: 4GvoMVXIVOdFueGiNfcTvk
status: PUBLISHED
createdAt: 2022-03-26T14:46:51.930Z
updatedAt: 2022-11-25T22:09:12.062Z
publishedAt: 2022-11-25T22:09:12.062Z
firstPublishedAt: 2022-03-26T14:46:52.370Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: la-papelera-enviada-no-coincide-con-una-marca-de-tarjeta-asociada
kiStatus: Backlog
internalReference: 308896
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La plataforma permite enviar un BIN con la bandera de otra marca de tarjeta. Por ejemplo: Se puede informar de un BIN de VISA, pero se puede marcar la bandera de la marca de tarjeta Mastercard.
Sin embargo, es posible que los clientes no hayan configurado la marca de la tarjeta en la plataforma de la entidad adquirente, lo que provoca un coste operativo.



## Simulación



1. Ir a la caja con un artículo al azar
2. comprarlo con tarjeta de crédito y rellenar un BIN de Visa en el campo de número de tarjeta y luego completar el número de tarjeta con números aleatorios
3. rellenar el resto de campos de la tarjeta con información aleatoria
4. cambiar la marca de la tarjeta que aparece en el campo del número de tarjeta y cerrar la compra
5. Ir al administrador de transacciones y ver la transacción ya creada con una información de marca de tarjeta incorrecta



## Workaround


N/A

