---
title: 'ERedeRest sólo permite la cancelación cuando el código de estado es 359'
id: 5lNLTmKp1xRfewx9OyhcNk
status: PUBLISHED
createdAt: 2023-01-26T18:29:35.310Z
updatedAt: 2023-01-26T18:29:36.467Z
publishedAt: 2023-01-26T18:29:36.467Z
firstPublishedAt: 2023-01-26T18:29:36.467Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: erederest-solo-permite-la-cancelacion-cuando-el-codigo-de-estado-es-359
locale: es
kiStatus: Backlog
internalReference: 740084
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Nuestro conector heredado ERedeRest realiza una cancelación a través de una petición al proveedor y espera un statusCode=359 que significa que la cancelación se ha realizado correctamente. Cualquier otro código significa para nuestra pasarela que el estado es indefinido aunque, en algunos casos, significa que la solicitud de reembolso/cancelación también fue exitosa, por lo tanto, nos lleva a reintentar la cancelación sin embargo nos quedamos atascados en este paso ya que la cancelación ya se ha completado en el lado del proveedor.



## Simulación



## Workaround



