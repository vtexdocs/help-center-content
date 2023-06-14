---
title: 'EAN de los componentes del KIT no se imprimen en el json del pedido'
id: 2lrOfIp4FOcGWIA2EuG6U0
status: PUBLISHED
createdAt: 2017-11-07T14:28:45.693Z
updatedAt: 2022-12-22T14:51:55.731Z
publishedAt: 2022-12-22T14:51:55.731Z
firstPublishedAt: 2017-11-07T14:32:50.622Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_3
tag: Order Management
slug: ean-de-los-componentes-del-kit-no-se-imprimen-en-el-json-del-pedido
kiStatus: Backlog
internalReference: 
---

## Sumario

En el json del pedido, donde se muestra toda la información sobre los productos comprados, cuando uno de ellos es un KIT, sólo se imprime el EAN del KIT y no los de los componentes.

## Simulación

1. Registre un producto KIT;
2. Haga una compra de este producto;
3. Haga una llamada a la API de gestión de pedidos por el Id de solicitud.

## Workaround

Si es imprescindible para el ERP el EAN del SKU componente, es posible hacer una llamada a la API de búsqueda por el Id del SKU, donde en el json de respuesta tiene el EAN.

