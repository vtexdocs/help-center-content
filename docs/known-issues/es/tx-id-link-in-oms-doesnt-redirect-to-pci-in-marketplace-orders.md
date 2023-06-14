---
title: 'Link del Tx Id en Gestión de pedidos no redirige al módulo de pagos en pedidos Marketplace'
id: 6dgOOZv9qoaC4u8eSUecmQ
status: DRAFT
createdAt: 2018-03-09T16:25:32.034Z
updatedAt: 2019-12-31T15:16:56.596Z
publishedAt: 
firstPublishedAt: 2018-03-09T17:00:32.184Z
contentType: knownIssue
productTeam: Channels
author: 5fYXkMJagMwcSAeMAsAuOI
tag: OMS
slug: link-del-tx-id-en-oms-no-redirige-a-pci-en-pedidos-marketplace
kiStatus: Open
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

1. Copiar el ID de la transacción;
2. Ingresar al módulo Pagos;
3. Buscar manualmente la transacción deseada;
4. Ingresar a la transacción para visualizar los detalles deseados.

