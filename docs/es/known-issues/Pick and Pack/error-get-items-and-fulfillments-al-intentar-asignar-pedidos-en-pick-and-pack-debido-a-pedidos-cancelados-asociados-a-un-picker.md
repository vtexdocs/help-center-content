---
title: 'Error get items and fulfillments" al intentar asignar pedidos en Pick and Pack debido a pedidos cancelados asociados a un Picker.'
id: 5nLx5LYiu1cGHBMlHVmkK
status: PUBLISHED
createdAt: 2025-07-22T14:13:07.224Z
updatedAt: 2025-07-24T17:48:47.600Z
publishedAt: 2025-07-24T17:48:47.600Z
firstPublishedAt: 2025-07-22T14:13:07.800Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: error-get-items-and-fulfillments-al-intentar-asignar-pedidos-en-pick-and-pack-debido-a-pedidos-cancelados-asociados-a-un-picker
locale: es
kiStatus: Backlog
internalReference: 1263897
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Al intentar asignar nuevos pedidos a un Picker específico en el módulo Pick and Pack, el sistema muestra el mensaje de error: "Error obtener artículos y cumplimientos". Este problema es causado por pedidos cancelados que permanecen asociados al Picker. Aunque el pedido que se está procesando no esté cancelado, la mera presencia de pedidos cancelados vinculados al perfil del Responsable de Recogida desencadena el error, impidiendo la asignación de nuevos pedidos. Otros Recolectores, sin tales asociaciones de órdenes canceladas, no experimentan este problema.



## Simulación




1. Inicie sesión en VTEX admin como el Recolector afectado.
2. Acceda al módulo de Recogida y embalaje.
3. Intente asignar un nuevo pedido al Recolector.
4. El sistema devuelve el mensaje de error "Error obteniendo artículos y cumplimentación".
5. La asignación de pedidos a otros Recolectores (no vinculados a pedidos cancelados) funciona como se espera.



## Workaround


Actualmente no tenemos una solución para este problema. Es necesario abrir un ticket de producto.

- Para asignar y procesar nuevos pedidos, utilice recolectores alternativos que no estén asociados a pedidos cancelados, ya que el error es específico de los recolectores con pedidos cancelados adjuntos.
- Si es necesario utilizar el Picker afectado, póngase en contacto con el soporte de VTEX, proporcionando pruebas (archivo HAR y/o vídeo) que muestren el escenario del error, y los detalles del Picker.
- Por el momento no existe una solución definitiva; en casos urgentes, reasigne temporalmente las tareas a otros recolectores mientras espera la intervención del servicio de asistencia.






