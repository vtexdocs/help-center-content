---
title: 'Error en la visualización de la UI de pedidos tras solicitar la factura vía App'
id: 1yrb25L1Skj3sRRWyiFDSA
status: PUBLISHED
createdAt: 2024-07-24T14:24:29.799Z
updatedAt: 2024-07-24T14:24:30.583Z
publishedAt: 2024-07-24T14:24:30.583Z
firstPublishedAt: 2024-07-24T14:24:30.583Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: error-en-la-visualizacion-de-la-ui-de-pedidos-tras-solicitar-la-factura-via-app
locale: es
kiStatus: Backlog
internalReference: 1070299
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando ejecutamos un `change V2` eliminando o añadiendo un ítem a un pedido, creamos un cambio en la lista de ítems del pedido, que puede aumentar o disminuir el número de índices de la lista de ítems en el json. Este cambio, a su vez, puede no ser consumido por todas las apps o bases de datos implicadas en la gestión del pedido, como la app notificadora de facturas;

Como resultado, al solicitar la factura a través de la app notificadora de facturas antes de haber realizado una acción para eliminar o añadir un ítem, el usuario acaba provocando un escenario de ruptura en la UI, ya que la `aplicación notificadora de facturas` comienza a devolver un error por tener más o menos ítems de los esperados por la UI, dando lugar a un error de "referencia nula" que impide que el pedido se muestre en la UI;


##

## Simulación



**NOTA**: Para simular este escenario, debe haber configurado la `aplicación notificadora de facturas` y también estar utilizando el flujo `Cambiar V2`;


- En un pedido con más de un artículo, vaya al estado de tramitación;


- Desde la interfaz de usuario, haga clic en la opción "Solicitar factura" (Notifique a su ERP).


- Antes de que el ERP le devuelva la factura, realice un cambio en el pedido eliminando o añadiendo algún artículo al mismo;


- Espere hasta que el ERP envíe la factura al sistema de Pedidos, entonces acceda de nuevo al pedido desde la UI de Pedidos, en ese momento la UI devolverá un mensaje de error y el pedido no podrá ser visualizado;



## Workaround


Realice la solicitud de factura a través del notificador de factura sólo después de realizar el cambio de posiciones del pedido.






