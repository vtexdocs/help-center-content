---
title: 'Error en la visualización de shippingEstimateDate en New UI'
id: 7K9hFPStESW2urw4yzkY6t
status: PUBLISHED
createdAt: 2022-09-21T12:37:43.379Z
updatedAt: 2022-11-25T23:17:49.772Z
publishedAt: 2022-11-25T23:17:49.772Z
firstPublishedAt: 2022-09-21T12:37:44.030Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: error-viewing-shippingestimatedate-in-new-ui
locale: es
kiStatus: Backlog
internalReference: 661040
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Cuando se realiza un pedido con más de un producto/SKU con diferentes fechas de entrega, New_UI toma la información (shippingEstimateDate) del ItemIndex=0, que se encuentra en la API GET Orders en "ShippingData">"LogisticsInfo">"ItemIndex", en lugar de obtener la información (shippingEstimateDate) del ItemIndex con el tiempo más largo.




## Simulación



1- Realice un pedido insertando productos/SKUs con diferentes fechas de entrega (shippingEstimateDate);

2- notarás que en la New_UI se muestra el (shippingEstimateDate) del ItemIndex=0 y no del ItemIndex con el (shippingEstimateDate) más alto mostrado en la API Get Orders.




## Workaround



Como solución, es posible utilizar Old_UI.

