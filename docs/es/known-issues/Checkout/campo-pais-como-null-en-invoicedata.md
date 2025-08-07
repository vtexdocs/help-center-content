---
title: "Campo país como null en invoiceData"
id: 6TbzOvnKw5Uhcr1C5Jrneb
status: PUBLISHED
createdAt: 2023-12-13T15:53:26.073Z
updatedAt: 2023-12-19T21:22:09.038Z
publishedAt: 2023-12-19T21:22:09.038Z
firstPublishedAt: 2023-12-13T15:53:26.800Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: campo-pais-como-null-en-invoicedata
locale: es
kiStatus: Fixed
internalReference: 382175
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El campo País en invoiceData puede ser nulo si se envía vía API o hay una dirección de factura en el Sistema de Perfiles con el país como nulo, por lo que se crearán pedidos con datos incompletos en invoiceData.


##

## Simulación



- Monta un carrito con artículos;
- Envía la facturaData sin el campo país rellenado vía API;
- Finaliza la compra.


##

## Workaround


N/A



