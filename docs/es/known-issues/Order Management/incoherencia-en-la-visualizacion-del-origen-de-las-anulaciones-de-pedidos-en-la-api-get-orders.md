---
title: "Incoherencia en la visualización del origen de las anulaciones de pedidos en la API Get Orders."
id: q1IZl1NguWHGzpNzro4le
status: PUBLISHED
createdAt: 2025-06-25T18:27:30.911Z
updatedAt: 2025-06-26T19:19:58.004Z
publishedAt: 2025-06-26T19:19:58.004Z
firstPublishedAt: 2025-06-25T18:27:31.540Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: incoherencia-en-la-visualizacion-del-origen-de-las-anulaciones-de-pedidos-en-la-api-get-orders
locale: es
kiStatus: Backlog
internalReference: 1249934
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En algunos casos de pedidos originados en el flujo nativo entre marketplace y vendedor, cuando la cancelación es iniciada automáticamente por el sistema (por ejemplo, fallo en el pago o reglas internas), la información del origen de la cancelación puede no mostrarse correctamente en las respuestas de las APIs OMS Get Order y Orders.

El campo cancellationData, que identifica históricamente el origen de la cancelación (como requestedByPaymentNotification), puede contener información genérica -como fulfillment- o no mostrar ningún detalle. Esto se debe al proceso de fusión de la información de cancelación entre el mercado y el vendedor, que puede sobrescribir los datos relevantes en función del orden de los eventos.


##

## Simulación



- Generar un pedido en una cuenta con integración entre vendedor y marketplace.

- Simular una cancelación automática, por ejemplo, por fallo en la autorización de pago.

- Acceda a la API OMS Get Order o a Pedidos.

- Tenga en cuenta que el campo `cancellationData` puede no indicar claramente que la cancelación ha sido realizada por el módulo de pago.

- Si es posible, compárelo con la respuesta de la API de pedidos de OMS, donde el origen suele aparecer correctamente.



## Workaround


Actualmente, para identificar correctamente el origen de la anulación en los casos afectados, se requiere el apoyo del equipo interno.

Recomendamos abrir un ticket para analizar manualmente los logs y validar el origen real de la cancelación.






