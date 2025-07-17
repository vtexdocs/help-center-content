---
title: "Incoherencia en el estado de los pedidos entre OMS y Pick and Pack"
id: 2qI7W8nPArA4JQKI3K3Hwx
status: PUBLISHED
createdAt: 2025-07-14T19:00:35.543Z
updatedAt: 2025-07-14T19:00:36.132Z
publishedAt: 2025-07-14T19:00:36.132Z
firstPublishedAt: 2025-07-14T19:00:36.132Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: incoherencia-en-el-estado-de-los-pedidos-entre-oms-y-pick-and-pack
locale: es
kiStatus: Backlog
internalReference: 1259680
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



En algunos casos, los pedidos que se han cancelado en OMS siguen mostrándose como "Listos para su manipulación" en la lista de pedidos de Recogida y Embalaje en lugar de actualizarse automáticamente a un estado cancelado.

Esto provoca confusión operativa, ya que el mismo pedido puede mostrar estados divergentes entre los módulos OMS y Pick and Pack. Se ha informado de este comportamiento y se asocia a problemas intermitentes de sincronización entre OMS y Pick and Pack, vinculados históricamente a errores (como tiempos de espera o fallos en el flujo de eventos) en la infraestructura responsable de propagar las actualizaciones de estado.



## Simulación



Para reproducir el problema:


1. Cree un pedido en una cuenta VTEX con Pick and Pack activado.
2. En OMS, cancele el pedido siguiendo el flujo de cancelación estándar.
3. Compruebe el mismo pedido en el panel de Pick and Pack para ver si sigue apareciendo como "Listo para manipulación".
4. Compare el estado del pedido entre OMS y Pick and Pack.
5. En los casos en los que se produce este error, el pedido se cancela en OMS pero sigue apareciendo como "Listo para su manipulación" en Pick and Pack.



## Workaround



No disponemos de una solución para este comportamiento. Actualmente, sólo el producto/ingeniería puede resolver la discrepancia.

Debe abrirse un ticket de producto para tomar las medidas necesarias.





