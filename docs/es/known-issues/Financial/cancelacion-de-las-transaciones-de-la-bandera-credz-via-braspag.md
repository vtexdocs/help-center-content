---
title: 'Cancelación de las transaciones de la bandera Credz via Braspag'
id: 13zKpRlvD8WCc888IYSKQE
status: PUBLISHED
createdAt: 2017-07-03T21:04:29.131Z
updatedAt: 2022-12-22T15:06:46.586Z
publishedAt: 2022-12-22T15:06:46.586Z
firstPublishedAt: 2017-07-04T18:49:23.107Z
contentType: knownIssue
productTeam: Financial
author: authors_4
tag: Payments
slugEN: cancelacion-de-las-transacciones-de-banner-de-credz-a-traves-de-braspag
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

La cancelación de transacciones de tarjetas de crédito de la bandera Credz, cuando via Braspag, no está sucediendo correctamente.

La solicitud se cancela en VTEX pero no en el gateway, ocasionando en el cobro indebido del valor al cliente.

En la integración actualmente homologada con Braspag el Pagos utiliza el método de anulación (refund), no soportado por esta bandera de tarjeta. Se requiere actualización para utilizar el método de cancelación (void).

## Simulación

Sólo tiene que solicitar la cancelación de cualquier transacción de la bandera Credz, que se realiza a través del conector Braspag.

## Workaround

La cancelación de la transacción debe ser hecha directamente por el panel de Braspag.

