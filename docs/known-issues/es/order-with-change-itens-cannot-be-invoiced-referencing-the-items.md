---
title: 'Los pedidos con itens de modificación no pueden facturarse haciendo referencia a los artículos'
id: 1g1t65544sXbvfY62dAS1n
status: PUBLISHED
createdAt: 2023-04-04T15:06:49.163Z
updatedAt: 2023-04-04T15:07:03.429Z
publishedAt: 2023-04-04T15:07:03.429Z
firstPublishedAt: 2023-04-04T15:06:49.853Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: los-pedidos-con-itens-de-modificacion-no-pueden-facturarse-haciendo-referencia-a-los-articulos
locale: es
kiStatus: Backlog
internalReference: 784171
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Actualmente, al eliminar un artículo de un pedido mediante el flujo de modificación de artículos, se espera que el artículo no se muestre durante el flujo de facturación de artículos;
Sin embargo, debido a la forma en que el flujo de cambios actúa sobre el json del pedido, aunque el artículo se haya eliminado del pedido, se sigue mostrando cuando el usuario realiza el proceso Enviar factura con referencia a artículos;

Y por esta razón la UI devuelve un mensaje impidiendo al usuario continuar con este flujo de facturas;


##

## Simulación



## Workaround



