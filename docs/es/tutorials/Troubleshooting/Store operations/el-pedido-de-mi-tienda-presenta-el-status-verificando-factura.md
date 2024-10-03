---
title: "El pedido de mi tienda presenta el status 'Verificando factura'"
id: 2YY7ILOOd0lEjpiT7SSgag
status: PUBLISHED
createdAt: 2024-08-16T18:32:15.867Z
updatedAt: 2024-08-16T18:56:49.382Z
publishedAt: 2024-08-16T18:56:49.382Z
firstPublishedAt: 2024-08-16T18:52:24.803Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: my-stores-order-still-has-the-status-verifying-invoice
locale: es
legacySlug: el-pedido-de-mi-tienda-presenta-el-status-verificando-factura
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags/Palabras clave:** pedido, status del pedido, factura, factura parcial, verificando factura.

Al monitorear el [flujo de pedidos](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196) de tu tienda, puedes encontrarte con un pedido que permanece con el status `Verificando factura` durante más tiempo del esperado. En este status, la plataforma comprueba si el pago se ha completado y si la factura del pedido ha sido correctamente incluida, siendo estas condiciones necesarias para que el pedido avance en el flujo.

Cuando el pedido permanece con el status `Verificando factura`, suele ser por los siguientes motivos:

* Hubo un problema con la [liquidación del pago](https://help.vtex.com/es/tutorial/configurar-tempo-maximo-para-captura-automatica--7dwcaxrcgcFJUk7umqPBw2).
* La factura no se incluyó correctamente en el pedido, o la [factura](https://help.vtex.com/es/tutorial/faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v) se realizó solo parcialmente. 

## Solución

En cuanto a la liquidación del pago, el pedido permanece en `Verificando factura` hasta que el [gateway](https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#gateway) confirma la liquidación del mismo, lo que se señala mediante el status `Settled` del [flujo de transacciones](https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y). Pasado un tiempo, si la liquidación no se produce tendrás que crear otro pedido, ya que se trata de un problema de gateway y no de la plataforma.

En cuanto a la factura, es necesario verificar que se ha facturado el importe total del pedido y que los datos enviados son correctos, como se indica en el apartado siguiente.

### Facturar pedido

Consulta a continuación errores comunes en la facturación de pedidos y cómo resolverlos:

* **La factura introducida solo incluye una parte de los ítems:** ingresa una nueva factura con el valor que falta hasta alcanzar el valor total del pedido.
* **La factura contiene errores:** ajusta la información de la factura y asegúrate de que es correcta. Es posible que algunos campos obligatorios, como el número y la URL de la factura, se hayan completado incorrectamente. Recuerda que cada factura debe tener un número único.
* **Hay un problema en la integración que está afectando al envío de la factura:** envía una nueva factura manualmente.

Sigue los pasos a continuación para facturar el pedido (total o parcialmente) o ajustar los datos de facturación vía Admin VTEX:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos** o ingresa **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el pedido deseado. Puedes buscarlo [utilizando los filtros](https://help.vtex.com/es/tutorial/como-filtrar-pedidos--tutorials_192).
3. En la sección **Facturación pendiente**, haz clic en `Factura`.
4. Haz clic en la opción que desees, ya sea enviar una sola factura o enviar la factura con la referencia de los ítems.
5. Rellena los campos.
6. Haz clic en `Guardar factura`.

>ℹ️ Puedes consultar las instrucciones para el envío de facturas vía Admin VTEX en el artículo [Cómo facturar un pedido](https://help.vtex.com/es/tutorial/faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v). Si deseas facturar el pedido vía API, utiliza el endpoint [Order invoice notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice).

>ℹ️ Si es necesario realizar ajustes en el pedido, puedes [modificarlo a través del Admin VTEX](https://help.vtex.com/es/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw).

