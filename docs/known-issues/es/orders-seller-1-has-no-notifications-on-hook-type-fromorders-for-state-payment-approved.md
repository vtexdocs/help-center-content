---
title: Pedidos El vendedor 1 no tiene notificaciones en el tipo de gancho FromOrders para el pago del estado aprobado
id: 4FurUuRzROSdEckWPFXH1w
status: PUBLISHED
createdAt: 2022-08-18T18:04:03.821Z
updatedAt: 2022-11-25T22:01:47.345Z
publishedAt: 2022-11-25T22:01:47.345Z
firstPublishedAt: 2022-08-18T18:04:04.564Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: pedidos-el-vendedor-1-no-tiene-notificaciones-en-el-tipo-de-gancho-fromorders-para-el-pago-del-estado-aprobado
kiStatus: Backlog
internalReference: 640925
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El vendedor de pedidos 1, donde el MKT y el FFMT están en la misma cuenta, no tiene notificaciones en el tipo de gancho FromOrders para el estado "Payment-Approved".

El S3 no está guardando este estado, y debido a ello no se están enviando las notificaciones.



## Simulación



Asegúrese de que la configuración de Hook tiene el tipo configurado como FromOrders y el estado payment-approved on filter.
Genere un vendedor de tipo de orden 1.
No se enviarán notificaciones.

Confirme en los registros de Splunk.



## Workaround


Si es posible el cliente puede utilizar el tipo "FromWorkflow". En este tipo la notificación está bien.

