---
title: 'Cómo devolver ítems del pedido'
id: 2bSNWwD0g8fcUmuupLao9i
status: PUBLISHED
createdAt: 2020-12-28T21:23:42.045Z
updatedAt: 2024-06-10T23:02:44.957Z
publishedAt: 2024-06-10T23:02:44.957Z
firstPublishedAt: 2020-12-28T21:27:16.332Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-to-return-order-items
legacySlug: como-devolver-items-del-pedido-beta
locale: es
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

La página **Detalles del pedido** permite que los administradores de la tienda acompañen el ciclo de vida de pedidos específicos, analizando todas sus interacciones, datos y contextos. Aprenda más sobre cómo funciona la nueva página de [Detalles del pedido](https://help.vtex.com/es/tutorial/pagina-de-detalles-del-pedido-interface--2Y75n54Cc9VizrlG1N6ZNl). 

Es posible devolver algunos ítems o todos los ítems que ya fueron facturados, en caso de que el cliente de su tienda lo solicite, con la condición de que los ítems estén contenidos en la factura. Un escenario común para esa acción es cuando el cliente de una tienda del sector moda desea devolver una prenda de vestir de su pedido, para cambiarla por una de talla diferente, por ejemplo. 

La página de Detalles del pedido permite orquestar esa operación realizando los siguientes pasos.

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.
2. Seleccione el pedido deseado.
3. En la sección «Facturas», haga clic en `Devolver ítems`.
4. Seleccione los ítems que serán devueltos marcando la casilla de selección.
5. Defina el número de unidades que se devolverán de cada ítem.
6. Introduzca el valor adicional que será devuelto a su cliente en el campo `Valor adicional`. Este importe se refiere a los gastos de envío del pedido devuelto.<p>Por ejemplo, si un pedido tiene un coste de envío de $ 20,00, deberá rellenar este campo con $20,00 . Si se rellena con un valor inferior al total de los gastos de envío, el cliente recibe la mitad del valor rellenado (<b>Valor Adicional</b>) como inversión de la compra, y la otra mitad en tarjeta regalo. Siguiendo el ejemplo dado, suponga que en lugar de $20,00 (que es el coste total del envío) la tienda ha rellenado el Valor Adicional como $12,00. El cliente recibirá el reembolso de este importe en forma de una devolución de cargo de $6,00  más una voucher (GiftCard) de $6,00 reales.</p>*Este campo es opcional, se debe completar en caso de que el valor adicional forme parte de la política de devolución de su tienda.* 
7. Ingrese el motivo del valor adicional, en el campo `Referente a`.
    > *Este campo es opcional, se debe completar en caso de que el valor adicional forme parte de la política de devolución de su tienda.*
8. Introduzca el código de la `Factura de entrada`.
    > *Se refiere a la factura de devolución, cuando el ítem regresa a su stock. El número de la factura debe ser diferente al de la factura anterior.*
9. Comente el `Motivo de la devolución`.
10. Haz clic en `Solicitar reembolso`.

Después de que el reembolso sea procesado por el sistema, los ítems devueltos y su información aparecerán en la sección *Ítems devueltos*.

<div class = "alert alert-info">
El cambio de pedidos se realiza a través de API por el endpoint <a href="https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes">Create order change</a> y la emisión de facturas actualizadas por el endpoint <a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice">Order invoice notification</a>.
</div>
