---
title: El informe de exportación de pedidos no funciona cuando hay algún pedido con una gran carga útil en la lista.
id: 3mV7q5QNFNwqsIzareUBEn
status: PUBLISHED
createdAt: 2023-05-25T20:58:49.088Z
updatedAt: 2023-05-25T20:58:49.643Z
publishedAt: 2023-05-25T20:58:49.643Z
firstPublishedAt: 2023-05-25T20:58:49.643Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: el-informe-de-exportacion-de-pedidos-no-funciona-cuando-hay-algun-pedido-con-una-gran-carga-util-en-la-lista
kiStatus: Backlog
internalReference: 832429
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La exportación de pedidos no funciona correctamente porque la tarea de exportar se cancela cuando hay un pedido en la lista con una gran carga útil, por ejemplo en el caso de un pedido con más de 500 elementos en json.



## Simulación


Configure un pedido con una gran cantidad de artículos (más de 500 artículos) e intente exportar utilizando la opción Filtrar Pedidos en Admin.



## Workaround


La solución es dividir el filtro. Estableciendo la fecha anterior a ese pedido y la fecha posterior a ese pedido.





