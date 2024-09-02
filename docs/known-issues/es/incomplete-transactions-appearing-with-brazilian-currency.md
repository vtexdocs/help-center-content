---
title: 'Transacciones incompletas que aparecen con moneda brasileña'
id: 7g0j3FGa5E8kNi9PM3kBOf
status: PUBLISHED
createdAt: 2024-04-01T13:37:35.197Z
updatedAt: 2024-04-01T13:37:36.114Z
publishedAt: 2024-04-01T13:37:36.114Z
firstPublishedAt: 2024-04-01T13:37:36.114Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: transacciones-incompletas-que-aparecen-con-moneda-brasilena
locale: es
kiStatus: Backlog
internalReference: 1007953
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Transacciones incompletas (cliente "Sin nombre") pueden aparecer en la sección de Transacciones con moneda R$, estos son resultado de un error de creación (los datos de pago no fueron enviados) pero las órdenes son creadas correctamente en moneda local.

Como estas transacciones ya están perdidas no hay impacto operacional (error visual).



## Simulación


Al finalizar un pago en checkout se puede recargar la página para "romper" el proceso y comprobar en UI si ha fallado la creación de la transacción completa (buscando la de "Sin nombre").



## Workaround


NA





