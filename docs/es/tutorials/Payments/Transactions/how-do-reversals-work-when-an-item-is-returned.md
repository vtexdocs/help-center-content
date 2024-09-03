---
title: 'Funcionamiento del extorno cuando se devuelve un ítem'
id: frequentlyAskedQuestions_298
status: PUBLISHED
createdAt: 2019-01-24T20:45:51.904Z
updatedAt: 2024-02-28T17:25:13.906Z
publishedAt: 2024-02-28T17:25:13.906Z
firstPublishedAt: 2019-01-24T21:55:16.859Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: como-se-da-el-funciona-extorno-cuando-hay-devolucion-del-item
locale: es
legacySlug: como-se-da-el-funciona-extorno-cuando-hay-devolucion-del-item
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Cuando se requiere la [devolución parcial o total de los ítems](/es/tutorial/como-hacer-una-devolucion-de-articulos) en el pedido que se pagó con tarjeta de crédito, o demás pagos **excepto boleta**, Gestión de Pedidos se comunica con Pagos pidiendo para extornar el valor de aquellos ítem que se devolverán.

En este caso, VTEX realiza sí el extorno en el adquirente cuando el valor ya fue capturado (status `Facturado`). Funciona de la siguiente forma: VTEX contacta al adquirente e intenta realizar el extorno online lo antes posible.

Sin embargo, si esta operación no tiene éxito, se enviará [una notificación vía  e-mail](https://help.vtex.com/es/tutorial/como-configurar-notificacoes?locale=es]"una notificación vía e-mail") informando al administrador de la tienda que será necesario contactar al adquirente para efectuar el extorno automático.

Para obtener más información, [haga clic aquí](/es/faq/por-que-se-cobro-en-la-factura-del-cliente-mi-pedido-cancelado).

## La excepción de la boleta

Cuando se efectúa el pago por boleta, es necesario generar un vale manualmente o, si el cliente prefiere, transferir el respectivo valor para la cuenta del cliente, pues no es posible hacer el extorno de boleta. 

Lo ideal es contactar con el consumidor para alinear la mejor forma de operar la devolución del valor pagado.

_Cuando la devolución se realiza antes del [reconocimiento de la reserva](/es/tutorial/como-se-maneja-la-reserva), el artículo vuelve a su stock de origen quedando disponible para una nueva venta, sin la necesidad del comerciante insertar esa unidad manualmente, por planilla o a través de la API. Si la devolución se realiza después de que la reserva sea reconocida, es necesario devolver la unidad al stock, actualizando esa información manualmente, por planilla o a través de API._
