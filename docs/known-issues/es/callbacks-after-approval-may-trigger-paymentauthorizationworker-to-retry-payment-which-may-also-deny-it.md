---
title: 'Las devoluciones de llamada tras la aprobación pueden provocar que PaymentAuthorizationWorker vuelva a intentar el pago, lo que también puede denegarlo.'
id: 1dbTbMRMvJQaxzXjWwQplD
status: PUBLISHED
createdAt: 2023-09-15T18:22:54.533Z
updatedAt: 2023-09-15T18:22:55.496Z
publishedAt: 2023-09-15T18:22:55.496Z
firstPublishedAt: 2023-09-15T18:22:55.496Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: las-devoluciones-de-llamada-tras-la-aprobacion-pueden-provocar-que-paymentauthorizationworker-vuelva-a-intentar-el-pago-lo-que-tambien-puede-denegarlo
locale: es
kiStatus: Backlog
internalReference: 740499
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el proveedor envía una devolución de llamada justo después de la autorización, puede desencadenar un nuevo intento de autorización. Por lo tanto, en algunos casos cuando la transacción tiene más de 1 pago y uno de ellos es una tarjeta regalo, un nuevo reintento de autorización puede cancelar la transacción cuando no tiene fondos.


##

## Simulación


No se puede simular ya que depende del callback del proveedor.



## Workaround


N/A




