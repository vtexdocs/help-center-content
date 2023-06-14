---
title: 'Divergencia en la cantidad de pedidos exportados x cantidad visualizada en el Gestión de Pedidos'
id: 6sJzAuMwfY4moi6Eg6MwkW
status: PUBLISHED
createdAt: 2018-04-04T15:55:44.748Z
updatedAt: 2022-12-22T14:45:40.180Z
publishedAt: 2022-12-22T14:45:40.180Z
firstPublishedAt: 2018-04-04T16:04:52.588Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: Order Management
slug: divergencia-en-la-cantidad-de-pedidos-exportados-x-cantidad-visualizada-en-el-oms
kiStatus: Backlog
internalReference: 
---

## Sumario

Hoy, al solicitar la exportación de pedidos en el Gestión de Pedidos, en gran cantidad o en un período extenso, puede ocurrir inestabilidad en algunos de los sistemas de consulta del Gestión de Pedidos.

De esta forma los pedidos que pasan por ese error no entran en el informe, generando divergencia entre la cantidad de pedidos visualizados y la cantidad de pedidos extraídos.


## Simulación

- Filtrar en el Gestión de Pedidos un período que genere una cantidad grande de pedidos (más de mil pedidos, por ejemplo) y analizar la cantidad mostrada en el Gestión de Pedidos.
- Solicitar la exportación de estos pedidos y comparar la cantidad mostrada con la cantidad exportada.

## Workaround

Indicamos el uso de nuestras APIs para consulta de pedidos. El ERP puede trabajar con la información para generar el informe necesario:

https://developers.vtex.com/reference/orders

https://developers.vtex.com/reference/feed-v3

