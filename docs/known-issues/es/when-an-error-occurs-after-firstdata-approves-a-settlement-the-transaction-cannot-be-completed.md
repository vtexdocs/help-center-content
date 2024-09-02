---
title: 'Cuando se produce un error después de que Firstdata apruebe una liquidación, la transacción no puede completarse.'
id: 7MITAqam9KWVXrUiNX5Jh0
status: PUBLISHED
createdAt: 2023-02-27T15:48:31.356Z
updatedAt: 2023-02-27T15:48:31.973Z
publishedAt: 2023-02-27T15:48:31.973Z
firstPublishedAt: 2023-02-27T15:48:31.973Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: cuando-se-produce-un-error-despues-de-que-firstdata-apruebe-una-liquidacion-la-transaccion-no-puede-completarse
locale: es
kiStatus: Backlog
internalReference: 760458
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En ocasiones, pueden producirse errores al procesar nuestras operaciones a través de la pasarela. En el caso del conector de Firstdata, puede surgir un error inmediatamente después de la aprobación de la liquidación por nuestra parte. Para solucionarlo, tenemos que volver a solicitar una liquidación. Sin embargo, debido a la idempotencia, el proveedor no vuelve a enviar una respuesta de "aprobado", lo que puede provocar que la operación se quede atascada en estado "liquidando" hasta que se produzca una nueva actualización de estado.


##

## Simulación


No es posible reproducirlo porque es intermitente.



## Workaround


No hay solución disponible





