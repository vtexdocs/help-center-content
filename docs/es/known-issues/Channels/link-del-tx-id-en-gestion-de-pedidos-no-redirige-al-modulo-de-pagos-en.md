---
title: 'Link del Tx Id en Gestión de pedidos no redirige al módulo de pagos en pedidos Marketplace'
id: 5LPtSrvUVnd3Bnw3GtQ67M
status: PUBLISHED
createdAt: 2019-03-08T20:00:30.460Z
updatedAt: 2022-12-22T14:44:41.533Z
publishedAt: 2022-12-22T14:44:41.533Z
firstPublishedAt: 2019-03-11T15:31:42.203Z
contentType: knownIssue
productTeam: Channels
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Order Management
slugEN: tx-id-link-in-orders-management-doesnt-redirect-to-payment-module-in
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al ingresar a un pedido recibido desde un Marketplace, no se está consiguiendo lograr que, haciendo click en el link del ID de la transacción arriba a la derecha, se logre redirigir hacia dicha transacción en el módulo de Pagos, como si ocurre con otros pedidos normales.

## Simulación

1. Ingresar __Gestión de pedidos__
2. En __Todos los pedidos__, buscar un pedido de Marketplace.
3. Ingresar al pedido.
4. Al hacer click en el link de la transacción, no irá a redirigir a dicha transacción en __Pagos__, sino que dará un error al no encontrarla.

## Workaround

1. Copy the transaction ID;
2. Enter the Payments module;
3. Manually search for the transaction;
4. Enter the transaction to see the details you want.

