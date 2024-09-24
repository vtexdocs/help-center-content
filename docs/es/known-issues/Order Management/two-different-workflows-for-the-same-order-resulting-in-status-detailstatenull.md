---
title: 'Two different workflows for the same order resulting in status: detail.state.null'
id: 7GeeO1co0E04mY5MYt5R3f
status: PUBLISHED
createdAt: 2022-10-19T15:07:49.704Z
updatedAt: 2022-11-25T22:00:56.819Z
publishedAt: 2022-11-25T22:00:56.819Z
firstPublishedAt: 2022-10-19T15:07:51.777Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: two-different-workflows-for-the-same-order-resulting-in-status-detailstatenull
locale: es
kiStatus: Fixed
internalReference: 680919
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Debido a un fallo en el paso de creación del flujo de trabajo, algunos pedidos cuyo flujo de creación se completó correctamente, pueden presentar el siguiente valor en el campo de estado: `detail.state.null` y en el listado de pedidos no muestran ningún valor de estado;

Este error se produce debido a la creación duplicada del Workflow durante el proceso de creación del pedido, el Workflow es el objeto que gestiona el cambio de estado y una vez duplicado acaba generando esta inconsistencia;



## Simulación


No hay forma de simular el error.




## Workaround


Para este caso, la solución aplicable es solicitar el análisis de las órdenes afectadas y también el ajuste del estado, a través de un ticket;

