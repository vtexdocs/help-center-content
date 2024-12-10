---
title: 'El producto continúa reservado tras la facturación del pedido'
id: 5kQ3sJTo7hxIjysT7f9EvD
status: PUBLISHED
createdAt: 2024-10-29T16:42:28.787Z
updatedAt: 2024-11-08T19:36:08.007Z
publishedAt: 2024-11-08T19:36:08.007Z
firstPublishedAt: 2024-10-29T16:51:27.322Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: product-remains-available-in-stock-after-the-order-has-been-invoiced
locale: es
legacySlug: el-producto-continua-reservado-tras-la-facturacion-del-pedido
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags: Stock, Reserva
---

La reserva de stock es una función esencial que garantiza que el producto vendido no se ponga a disposición de otro cliente hasta que el pedido se haya procesado por completo. Sin embargo, una pregunta habitual entre los retailers es por qué la reserva sigue vigente incluso después de que se haya facturado el pedido.

Cuando se vende un producto, este pasa por los siguientes status en el stock de la tienda, reflejando la transición del pedido:

1. [Reserva autorizada](https://help.vtex.com/es/tutorial/como-a-reserva-funciona--tutorials_92#reserva-autorizada): tiene lugar inmediatamente después de la finalización de la compra y creación del pedido.

2. [Reserva confirmada](https://help.vtex.com/es/tutorial/como-a-reserva-funciona--tutorials_92#reserva-confirmada): este status se alcanza una vez aprobado el pago del pedido.

3. [Reserva reconocida](https://help.vtex.com/es/tutorial/como-a-reserva-funciona--tutorials_92#reserva-reconhecida): el pedido entra en el status "Preparando envío", lo que indica que el producto está a punto de ser enviado.

Los productos se retiran del almacén solamente cuando el pedido alcanza el status **Preparando envío**. La [reducción de la cantidad en el stock](https://help.vtex.com/es/tutorial/como-a-reserva-funciona--tutorials_92#baixa-no-estoque), que corresponde a la actualización de los ítems disponibles para la venta, puede ser realizada manualmente por el retailer o automáticamente a través del ERP. Este proceso se realiza a través de la [gestión del stock](https://help.vtex.com/es/tutorial/gerenciar-itens-em-estoque--tutorials_139) o a través del endpoint [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).

## Soluciones

Considera los siguientes procesos para actualizar el stock en pedidos con status "Preparando envío":

- [Actualizar stock manualmente](#Actualizar-stock-manualmente): si es necesario ajustar manualmente la cantidad de ítems en stock para reflejar la cantidad real disponible y reservada de productos.

- [Configurar el ERP](#configurar-tu-ERP-para-actualizar-el-stock): asegúrate de que tu ERP actualice automáticamente el stock al cambiar el status del pedido, eliminando los ítems reservados.

### Actualizar stock manualmente

Para actualizar manualmente la cantidad de ítems en stock sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Stock > Gestión del stock**, o ingresa **Gestión del stock** en la barra de búsqueda de la parte superior de la página.

2. Haz clic en **Gestión del stock**.

3. Busca el SKU deseado.

4. En la columna **Actualizar recuento**, ingresa la cantidad correcta de ítems físicos en el stock, considerando la suma de los ítems disponibles más los ítems reservados.

5. Haz clic en **Guardar**.

### Configurar tu ERP para actualizar el stock

Cuando el status es **Preparando envío**, es fundamental que el sistema de stock actualice el producto, removiendo el producto de los ítems reservados y ajustando la cantidad disponible. Para que esto ocurra, el ERP debe sincronizar la cantidad final de productos en stock, restando los productos que ya están reservados de los pedidos en proceso.

La configuración y la integración del ERP son responsabilidad del retailer. Este proceso se puede automatizar a través del endpoint [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-), que permite la comunicación entre el sistema ERP y el almacén de la tienda, garantizando que la información esté siempre actualizada.