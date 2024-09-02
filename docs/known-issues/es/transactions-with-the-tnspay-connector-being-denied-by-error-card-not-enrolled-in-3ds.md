---
title: 'Transacciones con el conector TNSPay denegadas por error: Tarjeta no REGISTRADA en 3DS'
id: 2jZefzH8LYqPJxkmylmyA0
status: PUBLISHED
createdAt: 2022-03-14T13:21:56.187Z
updatedAt: 2024-02-16T20:24:33.195Z
publishedAt: 2024-02-16T20:24:33.195Z
firstPublishedAt: 2022-03-14T13:21:56.952Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: transacciones-con-el-conector-tnspay-denegadas-por-error-tarjeta-no-registrada-en-3ds
locale: es
kiStatus: No Fix
internalReference: 541687
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Por defecto se cancelan y enviamos dos Solicitudes de Autorización 3Ds, y todavía no ha recibido la respuesta de Solicitud de Autorización.
La segunda respuesta sólo aparece cuando ya ha entrado en el flujo de cancelación.

El problema se debe a una condición de carrera, y esto hace que los campos de pago sean incoherentes.
Al principio del proceso, el primer registro es

`Autorizar usando 3DS dadas las configuraciones 3DS: siempre MinimumValue`

El método de autorización fue llamado 2 veces en 2 segundos.


##

## Simulación


No se puede simular



## Workaround


No hay solución

