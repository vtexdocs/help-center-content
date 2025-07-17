---
title: "item.value del carrito es enviado incorrectamente por el checkout en AdditionalData"
id: 60ZOoWOF1XNulbQ9aGdSsO
status: PUBLISHED
createdAt: 2024-12-05T20:02:47.963Z
updatedAt: 2024-12-05T20:02:48.774Z
publishedAt: 2024-12-05T20:02:48.774Z
firstPublishedAt: 2024-12-05T20:02:48.774Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: itemvalue-del-carrito-es-enviado-incorrectamente-por-el-checkout-en-additionaldata
locale: es
kiStatus: Backlog
internalReference: 640386
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando hay una cantidad dividida en el priceDefinition debido al redondeo para el multiplicador de unidades, la pasarela puede recibir un `value` y `quantity` diferentes en el objeto carrito. Por lo tanto, esto puede hacer que la pasarela realice una petición en la que el miniCart.Items tenga la suma de los artículos diferente del importe total del pago.


##

## Simulación



- Realice un pedido con un carrito con una cantidad dividida en el campo priceDefinition del orderForm.
- Comparar el "miniCart.Items" de la transacción y "priceDefinition.sellingPrices" de los pedidos, pueden tener valores y cantidades diferentes.



## Workaround


N/A



