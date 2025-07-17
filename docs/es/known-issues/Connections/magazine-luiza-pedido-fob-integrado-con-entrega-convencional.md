---
title: '[Magazine Luiza] Pedido FOB integrado con entrega "Convencional'
id: 74uM19UXEopXguM6m0JbOL
status: PUBLISHED
createdAt: 2022-12-23T12:40:05.775Z
updatedAt: 2022-12-23T12:40:06.357Z
publishedAt: 2022-12-23T12:40:06.357Z
firstPublishedAt: 2022-12-23T12:40:06.357Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: magazine-luiza-pedido-fob-integrado-con-entrega-convencional
locale: es
kiStatus: Backlog
internalReference: 721951
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Necesitamos revisar el flujo y entender por qué órdenes como `"Magalu Entregas/FOB"` están siendo integradas con` selectedSla = "Convencional"` por ejemplo.

_**Mercado:**_ Revista Luiza
_**Producto Causa Raíz:**_ Pedidos
_**Arquitectura:**_ FOB / Magalu Entregas


##

## Simulación


 ![](https://vtexhelp.zendesk.com/attachments/token/trNBBsjQKWcb75RAS5bGAtTAM/?name=image.png)

 ![](https://vtexhelp.zendesk.com/attachments/token/2BTcd1rvMRWs05Aq1uFjfBah0/?name=image.png)


    Si no se envía isFOB=true, el SLA seleccionado debe ser uno del tipo FOB, como, por ejemplo: "selectedSla": "vtex:fob_1" Si desea seleccionar un ANS que no sea de tipo FOB, el campo isFOB deberá enviarse como false o no enviarse.




## Workaround


n/a

