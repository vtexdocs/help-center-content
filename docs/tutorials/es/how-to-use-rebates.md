---
title: 'Cómo utilizar rebates '
id: aS9z4io3auDKisk7M0rq9
status: PUBLISHED
createdAt: 2020-12-01T15:45:19.840Z
updatedAt: 2021-02-01T15:43:17.159Z
publishedAt: 2021-02-01T15:43:17.159Z
firstPublishedAt: 2021-02-01T15:43:17.159Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: como-utilizar-rebates
locale: es
legacySlug: como-utilizar-rebates
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

El escenario B2B tiene diversas estrategias de incentivo, una de las más utilizadas es el rebate. Lea el artículo [Promociones más comunes para B2B](https://help.vtex.com/es/tutorial/promociones-mas-comunes-para-b2b--XoM951AzUIvfaH71UdANf) para conocer más estrategias de incentivo.

Los rebates son créditos concedidos por el proveedor a la tienda que se aplican en la forma de descuentos exclusivos para la venta de productos preseleccionados ofreciendo precios más bajos al cliente final y generando un mayor rendimiento de las ventas.

Este escenario no solo fortalece las relaciones entre los proveedores y revendedores, sino que también ayuda a fidelizar a los clientes finales.  

## Cómo configurar rebates en VTEX

La forma más adecuada de utilizar el rebate recibido de los proveedores es a través de [Promociones regulares](https://help.vtex.com/es/tracks/promociones--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI) con las restricciones de uso que se requieren. Para saber más sobre las opciones de Promoción Regular, lea nuestro artículo [Ejemplos de promoción](https://help.vtex.com/es/tutorial/ejemplos-de-promociones--5A8UTc7knvAscxo7e7rMFD).

<div class = "alert alert-warning">
  <p>El cliente eventualmente puede cancelar la compra de un pedido con descuento del rebate. En ese caso, se debe redirigir la promoción a otro cliente para alcanzar el total de créditos. Para verificar si el rebate se ha aplicado a un pedido, utilice los endpoints <a href = "https://developers.vtex.com/vtex-developer-docs/reference/user-orders#userorderslist">Retrieve User's orders</a> o <a href="https://developers.vtex.com/vtex-developer-docs/reference/orders#getorder">Get Order</a> de Orders API.</p>
</div>

## Ejemplo

El proveedor y la tienda acordaron un rebate de $10.000 para incentivar las compras de la categoría Monitores durante el mes, concediendo un descuento de $100 por cada monitor y que solo puede ser utilizado una vez por cada cliente.

Ese descuento se aplicará como una Promoción Regular en VTEX. Para establecer el rebate se necesita:

1. Definir la promoción con un descuento nominal de $100.
2. Definir que la promoción solo se aplicará a la categoría Monitores.
3. Restringir la promoción para que sea aplicada 100 veces en la tienda.
4. Restringir la promoción para que sea aplicada una vez por cada cliente.
5. Definir que la promoción solo afectará a un ítem por carrito de compra. 

Para identificar los campos de la promoción que se deben completar, lea nuestro artículo [Campos de la promoción regular](https://help.vtex.com/es/tutorial/registro-promocion-regular--tutorials_327). 
