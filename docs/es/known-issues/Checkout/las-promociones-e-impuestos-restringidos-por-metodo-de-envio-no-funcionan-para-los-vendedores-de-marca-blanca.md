---
title: "Las promociones e impuestos restringidos por método de envío no funcionan para los vendedores de marca blanca"
id: 3ue1kZdbX1mMFqPCkl0tC4
status: PUBLISHED
createdAt: 2023-08-09T13:25:02.168Z
updatedAt: 2023-08-09T13:26:13.874Z
publishedAt: 2023-08-09T13:26:13.874Z
firstPublishedAt: 2023-08-09T13:25:02.698Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: las-promociones-e-impuestos-restringidos-por-metodo-de-envio-no-funcionan-para-los-vendedores-de-marca-blanca
locale: es
kiStatus: Backlog
internalReference: 315485
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las promociones e impuestos restringidos por métodos de envío no funcionan para los Vendedores de Marca Blanca. No se aplicarán en la solicitud de simulación (utilizada para el carrito y el pago) porque la solicitud de marketplace no especifica la `selectedSla`, por lo que sus valores no se presentarán al usuario.

Pero el proceso de creación del pedido enviará esta `selectedSla`, donde se calculará la promoción/impuesto y cambiarán los valores. Pero la divergencia entre la simulación y el proceso de creación del pedido puede bloquear la finalización de la compra, ya que el cliente pagará un valor, calculado en la solicitud de simulación, diferente del valor calculado en la creación del pedido.


##

## Simulación


- crear un impuesto en el vendedor de etiqueta blanca que esté restringido a algún método de envío
- crear un carrito en el marketplace que utilizará este vendedor, y seleccionar el método de envío especificado anteriormente

El valor no se presentará y no se podrá crear el pedido.



## Workaround


No se conoce ninguna solución para restringir un impuesto o una promoción por método de envío en un vendedor de marca blanca.

