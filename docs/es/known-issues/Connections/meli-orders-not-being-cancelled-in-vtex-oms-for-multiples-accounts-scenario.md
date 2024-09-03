---
title: 'Las órdenes MELI no se cancelan en el escenario VTEX OMS para cuentas múltiples'
id: 4u9ue93sHNWcfVm3sRL2qx
status: PUBLISHED
createdAt: 2024-02-06T11:04:52.918Z
updatedAt: 2024-02-06T11:04:54.082Z
publishedAt: 2024-02-06T11:04:54.082Z
firstPublishedAt: 2024-02-06T11:04:54.082Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: las-ordenes-meli-no-se-cancelan-en-el-escenario-vtex-oms-para-cuentas-multiples
locale: es
kiStatus: Backlog
internalReference: 977453
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Actualmente nuestra integración MELI tiene un problema relacionado con el proceso de cancelación de pedidos. Cuando MELI cancela un pedido y el vendedor tiene más de 4 cuentas en VTEX existe la posibilidad de que no se intente cancelar el pedido en la quinta cuenta


##

## Simulación



Si la cancelación de la orden no puede ser completada el vendedor puede ver la orden no cancelada en VTEX pero cancelada en MELI, para este caso se requiere una cancelación manual directamente en OMS.
Esto sólo se aplica para los casos en que el vendedor tiene más de 4 cuentas en VTEX, utilizando el mismo MELI UserID.



## Workaround

 provisional
n/a





