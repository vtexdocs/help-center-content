---
title: 'Falta la integración MELI BillingAddress'
id: 7xYni5vYpSn6bicq4e6f2K
status: PUBLISHED
createdAt: 2023-03-15T13:06:41.866Z
updatedAt: 2023-03-15T13:06:42.285Z
publishedAt: 2023-03-15T13:06:42.285Z
firstPublishedAt: 2023-03-15T13:06:42.285Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: falta-la-integracion-meli-billingaddress
locale: es
kiStatus: Backlog
internalReference: 771418
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Actualmente en nuestra integración nativa de Mercado Livre, no estamos trayendo el BillingAddress proporcionado por MELI. Algunos vendedores necesitan esa información dentro del OMS Get Orders, con el fin de enviar los valores correctos a MELI en el flujo de facturación.



## Simulación



Dentro de OMS GET Order actualmente solo traemos la shippingAddress, y no la BillingAddress, esto se puede ver dentro de la API GET Order



## Workaround


n/a





