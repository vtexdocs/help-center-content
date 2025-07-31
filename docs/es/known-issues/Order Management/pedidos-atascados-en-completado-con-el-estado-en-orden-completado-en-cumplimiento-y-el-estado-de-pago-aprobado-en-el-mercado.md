---
title: "Pedidos atascados en completado con el estado en orden completado en cumplimiento y el estado de Pago Aprobado en el Mercado."
id: 2mKGSIgqSpnGX1tb2Fiaff
status: PUBLISHED
createdAt: 2025-04-30T20:21:50.865Z
updatedAt: 2025-07-30T16:58:47.603Z
publishedAt: 2025-07-30T16:58:47.603Z
firstPublishedAt: 2025-04-30T20:21:51.539Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: pedidos-atascados-en-completado-con-el-estado-en-orden-completado-en-cumplimiento-y-el-estado-de-pago-aprobado-en-el-mercado
locale: es
kiStatus: Backlog
internalReference: 1218615
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En algunos casos, un pedido puede quedarse atascado en sus estados iniciales (`on-order-completed-ffm`, `on-order-completed` o `processing`) incluso después de haber sido aparentemente creado con éxito, esto ocurre cuando uno de los pasos internos del flujo de creación del pedido falla silenciosamente, causando una **desincronización del flujo de trabajo** que impide que el pedido progrese con normalidad.





## Simulación


Por el momento, este escenario no puede simularse de forma fiable, ya que depende de fallos intermitentes o puntuales en partes aisladas del proceso de creación de pedidos.





## Workaround


Actualmente no hay manera de prevenir este tipo de escenario, pero el equipo técnico puede aplicar manualmente acciones correctivas a los pedidos afectados, permitiéndoles proceder normalmente a través del flujo de trabajo.






