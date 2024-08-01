---
title: 'El descuento nominal basado en la fórmula no funciona como se esperaba con las operaciones de resta'
id: 50YsRuiICJNdH2e1QqYnn0
status: DRAFT
createdAt: 2023-08-24T13:30:36.935Z
updatedAt: 2023-08-28T20:44:40.744Z
publishedAt: 
firstPublishedAt: 2023-08-24T13:30:37.863Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: el-descuento-nominal-basado-en-la-formula-no-funciona-como-se-esperaba-con-las-operaciones-de-resta
locale: es
kiStatus: Backlog
internalReference: 886980
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al crear una promoción utilizando Descuento nominal basado en fórmula, el comerciante puede utilizar las siguientes operaciones de acuerdo con esta documentación: https://help.vtex.com/en/tutorial/promocao-regular-com-desconto-nominal-baseado-em-formula--2Pwrq6THyGViNedQG381jV
 ![](https://vtexhelp.zendesk.com/attachments/token/1EhryrRZDsiXZ31kaSV2VcegW/?name=image.png)

Sin embargo, al utilizar la operación de resta, el valor del descuento se sustituye por el valor total del pedido.


##

## Simulación


Cree una promoción utilizando el descuento nominal basado en la fórmula y utilice una operación de resta, así
 ![](https://vtexhelp.zendesk.com/attachments/token/3wIEiPGtF9oX2daeQ3F3AZqCk/?name=image.png)

Comprueba en la caja que el descuento se sustituye por lo que debería ser el valor total del pedido:
 ![](https://vtexhelp.zendesk.com/attachments/token/r2bWktL4reNcVnnhSqr4hT0FC/?name=image.png)



##

## Workaround


N/A





