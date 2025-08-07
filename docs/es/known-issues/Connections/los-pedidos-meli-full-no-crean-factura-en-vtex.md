---
title: "Los pedidos MELI FULL no crean factura en VTEX"
id: 6SNkDcqCWeDDPm01RrM0FQ
status: PUBLISHED
createdAt: 2024-02-05T11:14:30.020Z
updatedAt: 2024-02-05T11:14:31.187Z
publishedAt: 2024-02-05T11:14:31.187Z
firstPublishedAt: 2024-02-05T11:14:31.187Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: los-pedidos-meli-full-no-crean-factura-en-vtex
locale: es
kiStatus: Backlog
internalReference: 976614
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Actualmente tenemos un problema con los pedidos MELI FULL, si el pedido presenta algún error durante la creación en VTEX, como error de SLA, fuera de stock, etc. el proceso para crear la factura en VTEX no se ejecuta. Básicamente el XML dentro de embeddedInvocie de OMS no se está creando en estos casos.



## Simulación



Si el pedido presenta algún error durante su creación, el XML no se colocará dentro de VTEX OMS.



## Workaround


para evitar este error las órdenes no deben ser pegadas en VTEX Bridge, para ello siempre configurar los SLAs necesarios para evitar este error





