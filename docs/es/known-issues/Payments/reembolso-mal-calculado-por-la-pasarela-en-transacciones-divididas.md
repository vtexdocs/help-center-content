---
title: "Reembolso mal calculado por la pasarela en transacciones divididas"
id: jiUwsWgePG1Wka7wHTPEj
status: PUBLISHED
createdAt: 2025-03-19T19:38:12.860Z
updatedAt: 2025-03-20T12:35:29.818Z
publishedAt: 2025-03-20T12:35:29.818Z
firstPublishedAt: 2025-03-19T19:38:13.414Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: reembolso-mal-calculado-por-la-pasarela-en-transacciones-divididas
locale: es
kiStatus: Backlog
internalReference: 1196767
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las solicitudes de reembolso de la pasarela sólo tienen el valor del importe de la comisión, aunque la solicitud del sistema de gestión de pedidos se haya enviado con el valor total.

Para identificar este problema conocido debe Verificar el valor total solicitado en los pedidos y compararlo con el calculado, y solicitado por la pasarela al proveedor. A continuación, compruebe si el valor es diferente entre ellos, el mismo importe de la comisión está en el objeto del destinatario.


##

## Simulación



## Workaround



