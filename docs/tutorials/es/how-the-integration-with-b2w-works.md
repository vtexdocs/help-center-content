---
title: 'Cómo funciona la integración con B2W'
id: 7tF0PBIC5OgCuKqWKAa8Ge
status: DRAFT
createdAt: 2017-08-17T19:04:27.137Z
updatedAt: 2022-02-04T17:43:21.426Z
publishedAt: 
firstPublishedAt: 2017-08-17T19:22:10.702Z
contentType: tutorial
productTeam: Channels
author: authors_35
slug: como-funciona-la-integracion-con-b2w
legacySlug: como-funciona-la-integracion-con-b2w
subcategory: 5m1qqfnmfYKsO0KiOQC8Ky
---

La integración con B2W funciona de la siguiente manera:

La SkyHub hace disponible una hilera con los pedidos hechos en B2W y VTEX consume esos pedidos. Entre esas dos operaciones, hay un intervalo de tiempo natural, así como hay un intervalo entre el momento en que los pedidos en su tienda son generados por el Checkout y consumidos por la Gestión de pedidos.

En general, un pedido hecho en B2W necesita indexarse en SkyHub y luego insertarse en la hilera. Ese proceso suele tomar **hasta 1 hora**. Como VTEX consume constantemente esa hilera, no hay acumulación de pedidos. En la medida en que entran, los pedidos ya son distribuidos para cada tienda.
