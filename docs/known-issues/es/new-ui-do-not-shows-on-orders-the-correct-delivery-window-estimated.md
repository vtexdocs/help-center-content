---
title: La nueva interfaz de usuario no muestra en los pedidos la ventana de entrega correcta estimada
id: 5YG6dpMbOX3DK1fSWEyAzJ
status: PUBLISHED
createdAt: 2023-01-09T13:18:30.970Z
updatedAt: 2023-02-28T16:55:18.969Z
publishedAt: 2023-02-28T16:55:18.969Z
firstPublishedAt: 2023-01-09T13:18:31.481Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: la-nueva-interfaz-de-usuario-no-muestra-en-los-pedidos-la-ventana-de-entrega-correcta-estimada
kiStatus: Backlog
internalReference: 620668
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>

En la nueva interfaz de usuario, algunos pedidos no muestran correctamente el desglose de la entrega estimada.

Cuando hay un error de divergencia entre la orden api y oms api puede suceder o si hay más itens la nueva interfaz de usuario toma el EstimateDate de itemIndex 0 sin tener en cuenta la ventana de entrega.

## Simulación


Establecer una compra con más de un artículo con shippingEstimateDate y Delivery Window poblado ellos comprobar la nueva interfaz.



## Workaround


La solución es comprobar el uso de la antigua UI (interfaz de usuario).




