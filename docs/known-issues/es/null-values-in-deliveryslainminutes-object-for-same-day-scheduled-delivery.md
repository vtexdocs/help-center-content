---
title: 'Valores nulos en el objeto deliverySlaInMinutes para la entrega programada en el mismo día'
id: 3iSfWDl8hMtuRaYxFKWjPI
status: PUBLISHED
createdAt: 2024-08-12T20:58:03.483Z
updatedAt: 2024-08-12T20:58:04.450Z
publishedAt: 2024-08-12T20:58:04.450Z
firstPublishedAt: 2024-08-12T20:58:04.450Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: valores-nulos-en-el-objeto-deliveryslainminutes-para-la-entrega-programada-en-el-mismo-dia
locale: es
kiStatus: Backlog
internalReference: 1079981
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



## Simulación



- Configurar una tienda con entrega programada con disponibilidad para el mismo día;
- Completar una compra con entrega programada para el mismo día;
- El campo `items.deliverySlaInMinutes` dentro del objeto carrito en la transacción será `null`.



## Workaround


N/A





