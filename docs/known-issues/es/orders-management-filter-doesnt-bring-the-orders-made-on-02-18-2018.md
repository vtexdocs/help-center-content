---
title: Filtro de Gestión de pedidos no trae los pedidos hechos el día 18/02/2018
id: 1TGxwZaPgYiQIauAE2CuYk
status: PUBLISHED
createdAt: 2018-03-15T13:44:08.799Z
updatedAt: 2022-12-22T14:53:45.881Z
publishedAt: 2022-12-22T14:53:45.881Z
firstPublishedAt: 2018-03-15T15:16:31.703Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: Order Management
slug: filtro-de-gestion-de-pedidos-no-trae-los-pedidos-hechos-el-dia-18-02-2018
kiStatus: Backlog
internalReference: 
---

## Sumario

Al filtrar en Gestión de pedidos por fecha de pedido, seleccionando 18/02/2018, el filtro automáticamente cambia a los pedidos del día 17/02/2018. Así, no es posible filtrar los pedidos de este día.

## Simulación

- Acceda al módulo de Gestión de pedidos de su tienda;
- Haga clic en filtros;
- Seleccione el filtro por Fecha de Pedido;
- Llene el filtro con la fecha 18/02/2018.

## Workaround

Los pedidos pueden ser consultados por nuestra API de GET ORDER:
https://documenter.getpostman.com/view/487146/vtex-oms-api/6tjSKqi#43524211-bbed-4f80-9a9b-d96b32347f0a

