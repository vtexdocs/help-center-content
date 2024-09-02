---
title: 'item_name del evento de compra es diferente de item_name del evento de añadir al carrito en Google Analytics'
id: 3FV2cJIV7uOIoH0lpl0iMP
status: PUBLISHED
createdAt: 2023-08-10T12:59:26.495Z
updatedAt: 2023-08-10T12:59:27.432Z
publishedAt: 2023-08-10T12:59:27.432Z
firstPublishedAt: 2023-08-10T12:59:27.432Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: itemname-del-evento-de-compra-es-diferente-de-itemname-del-evento-de-anadir-al-carrito-en-google-analytics
locale: es
kiStatus: Backlog
internalReference: 878629
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el SKU tiene el mismo nombre que el producto, el item_name de la compra es diferente del item_name del evento add-to-cart.


##

## Simulación



- Añadir un producto al carrito cuyo nombre es similar al nombre de su SKU. Por ejemplo, "Calcetines" es el nombre del producto y el nombre SKU es "Calcetines - G"
- Busca su item_name en el evento add-to-cart
- Finalice la compra y busque el item_name en el evento de compra



## Workaround


N/A





