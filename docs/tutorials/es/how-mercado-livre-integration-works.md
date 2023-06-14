---
title: Cómo funciona la integración del Mercado Libre
id: 3cKjnItfjyqauWWcMkOqC0
status: PUBLISHED
createdAt: 2018-09-06T15:36:57.140Z
updatedAt: 2022-06-07T22:58:01.177Z
publishedAt: 2022-06-07T22:58:01.177Z
firstPublishedAt: 2018-09-17T15:45:39.870Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: como-funciona-la-integracion-del-mercado-libre
legacySlug: como-funciona-la-integracion-del-mercado-libre
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

[Mercado Libre](https://mercadolibre.com/) es uno de los líderes de ecommerce en América Latina, ya que ofrece soluciones de comercio electrónico tanto a personas como a empresas para que puedan comprar, vender, pagar, anunciar y enviar productos por internet.

Opera en los siguientes países: Argentina, Brasil, Chile, Colombia, México, Uruguay y Venezuela.

Una vez finalizada la [integración](https://help.vtex.com/es/tracks/configurar-integracion-con-mercado-libre--2YfvI3Jxe0CGIKoWIGQEIq/51oWBHvVxSs8eAwLQhSbSd) de tu tienda VTEX con Mercado Libre, te explicaremos cómo funciona el flujo de ese proceso para que puedas mantener la información actualizada en Mercado Libre. Este artículo se divide en las siguientes secciones:

1. [Pedidos](#1-pedidos)
2. [Productos](#2-productos)
3. [Precios](#3-precios)
4. [Stock](#4-stock)
5. [Puntos de recogida](#5-puntos-de-recogida)

## 1. Pedidos 

Todos los [pedidos](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2sl6hj2eqwgqbDgTF6y5qE) que se hacen en Mercado Libre se enviarán a la plataforma VTEX. Cada pedido tendrá un status según la tabla a continuación. Para más información sobre los status de los pedidos en VTEX, consulta el artículo [Flujo y status de pedidos](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196).

| Status en la plataforma VTEX | Respuesta de Mercado Libre | Descripción de la respuesta de Mercado Libre |
| ---------- | ---------- | ---------- |
| Listo para preparación | Ready-for-handing | Status que indica que se debe iniciar la preparación del envío, emitir la factura y hacer el seguimiento del pedido. En este status, se espera que haya una confirmación de la reducción en la [reserva](https://help.vtex.com/es/tutorial/como-a-reserva-funciona--tutorials_92) del ítem. En general, es en este momento cuando tiene lugar la integración con el ERP. Sin embargo, la integración también se puede completar de forma manual a través del módulo de Gestión de pedidos |
| Preparando envío | Handling | Se reservan los ítems para evitar las ventas de ítems no disponibles. El pedido queda en preparación, a la espera de la factura (o nota fiscal) que, por lo general, envía el ERP |
| Facturado | Invoiced | El flujo se completó con éxito y se envió el pedido |
| Enviado | Shipped | Pedidos que ya se despacharon para la entrega |
| Entregado  | Delivered | Pedidos entregados a sus destinatarios finales |
| Cancelado | Cancelled | Pedidos que se cancelaron |
| Ventana de cancelación | Window-to-cancel | Status del plazo de cancelación del cliente. Después de la aprobación del pago, el cliente tiene 30 minutos (estándar en la [Configuración general](https://help.vtex.com/es/tutorial/configuracoes-gerais/) del módulo de Gestión de pedidos) para cancelar el pedido. En este periodo, el reembolso del pedido se realiza de modo automático |

Debes contar con un [perfil de acceso](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) *OMS - Full Acess* para realizar acciones en el flujo de pedidos. Recibirás una respuesta distinta de Mercado Libre en cada status del flujo de pedidos en VTEX. Los pedidos se integran en VTEX solo cuando Mercado Libre los identifica con el status `Paid`.

El ID del pedido en Mercado Libre será distinto al que verás en VTEX. Para comprender la lógica que se aplica a la correspondencia de estos ID, consulta el artículo [Cómo funciona el carrito con múltiples artículos en Mercado Libre](https://help.vtex.com/es/tutorial/como-funciona-o-carrinho-com-multiplos-itens-no-mercado-livre).

### Facturación del pedido

Según la [configuración de la logística](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy) que hayas establecido, podrás emitir la factura directamente desde el marketplace o a través de tu ERP integrado con VTEX. Existen dos tipos de configuraciones de la logística:

- [Pedidos ME1](#pedidos-me1)
- [Pedidos ME2](#pedidos-me2)

#### Pedidos ME1

En los pedidos de la [modalidad ME1](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#flete-dinamico), cuando llega un pedido nuevo a la plataforma VTEX, el seller debe encargarse de todos los cambios de status en la plataforma VTEX para que estos se reflejen automáticamente en la plataforma de Mercado Libre. Para esto, debes usar la ruta [POST Order Invoice Notification](https://developers.vtex.com/vtex-rest-api/reference/invoicenotification) y VTEX cargará la factura de Mercado Libre y la enviará al ERP.

Los pedidos de la modalidad ME1 no pasan por el status `Invoiced`. El status del pedido cambiará a `Shipped` cuando el seller informe el `trackingNumber`, lo cual actualizará el OMS. 

Para esto, usa la ruta API [POST Order invoice notification](https://developers.vtex.com/vtex-rest-api/reference/invoice#invoicenotification) y completa todos los campos obligatorios y el campo `embeddedInvoice`.

La única acción del proceso de integración que no se refleja en la plataforma de Mercado Libre es la cancelación del pedido en VTEX porque este proceso no permite cancelar el pedido en la plataforma de Mercado Libre.

#### Pedidos ME2

En los pedidos de la [modalidad ME2](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-2-me2), el [ERP](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) enviará la información del pedido a VTEX y VTEX, a su vez, enviará dicha información a Mercado Libre. Por lo tanto, existen las siguientes diferencias en la emisión de la factura entre los tipos de logística de ME2:

- En la logística tipo [Colectas](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#crossdocking-colectas) o [Places](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#places), es obligatoria la emisión de una factura, ya sea en Mercado Libre o en el ERP.
- En la logística tipo [Mercado Envíos Full](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-full), debes emitir la factura en el facturador de Mercado Libre. 
- En la logística tipo [Flex](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#flex) o [Drop Off](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#drop-off), podrás emitir la factura en el facturador de Mercado Libre o en el ERP. La factura no es obligatoria.

En los pedidos de la modalidad ME2, la plataforma de Mercado Libre es la encargada de cambiar el status del pedido a `Shipped` y `Delivered`.

En el tipo de logística Mercado Envíos Full, siempre se deberá configurar el facturador en la plataforma de Mercado Libre porque es el propio [marketplace el que factura el pedido](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#como-consultar-las-facturas-de-mercado-libre-mediante-api). Esta configuración es opcional en los demás tipos de logística del modo ME2.

Si el seller no configuró el facturador de Mercado Libre para imprimir la etiqueta, deberá facturar en el [ERP](https://developers.vtex.com/docs/erp-integration-set-up-order-processing) y enviar la factura a VTEX para que Mercado Libre la reciba a través del proceso de integración. Usa la ruta API [POST Order invoice notification](https://developers.vtex.com/vtex-rest-api/reference/invoice#invoicenotification) y completa el campo `embeddedInvoice` para que Mercado Libre libere la etiqueta del envío.

Mientras tanto, para cambiar el status de los pedidos a `Invoiced`, deberás completar los campos obligatorios de los ERP y el campo `embeddedInvoice`, según el tipo de logística configurada.

En los pedidos con logística tipo Colecta y Places, debes completar los campos `invoiceKey` y `cfop`.

## 2. Productos

Los [productos](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru) son los ítems que se venden en la tienda y que forman parte de una [categoría](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf) registrada en tu [Catálogo VTEX](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR). Para enviar los productos registrados en tu catálogo a la plataforma de Mercado Libre, deberás hacer el [mapeo de categorías, atributos y variaciones](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA).

Cualquier cambio que el Admin VTEX realice en los productos desde *PRODUCTO > Catálogo > Productos y SKU*, o cualquier cambio que se realice en el [ERP](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-import-products) de tu tienda durante la integración, se actualizará automáticamente en Mercado Libre.

Cada categoría de productos anunciados en la plataforma de Mercado Libre posee atributos que pueden o no ser obligatorios. Cuantos más atributos completados tenga el producto en Mercado Libre, mejor posicionado estará en el marketplace.

Para poder integrarse, los campos de la plataforma VTEX a continuación deben estar seleccionados en los productos:

- **Mostrar en el sitio**
- **Mostrar producto agotado**
- **Política comercial**

En el campo **Política comercial**, debes marcar la opción correspondiente a [política comercial](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/15NZiQstCET8zyQUIa7nhw) vinculada a Mercado Libre.

<div class = "alert alert-info">
Para agregar imágenes nuevas en un anuncio que ya existe en Mercado Libre, deberás hacer todos los cambios directamente en el panel del marketplace. Mercado Libre solo acepta 12 imágenes por producto sin variación, y hasta 10 imágenes por producto con variación.
</div>

## 3. Precios

Durante la integración, los precios se envían por primera vez junto con el primer envío de productos. Luego, los precios de los anuncios en Mercado Libre se actualizan automáticamente siempre que haya algún cambio en el precio en la plataforma VTEX.

Durante la integración, se envía el [precio fijo](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy) correspondiente a cada SKU, el cual se configuró en la política comercial [asociada a la integración](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/15NZiQstCET8zyQUIa7nhw).

### Promociones

Mercado Libre no permite y VTEX no envía promociones personalizadas. Para poder acceder a una promoción disponible, debes ingresar a [Promociones de Mercado Libre](https://help.vtex.com/es/tutorial/promocoes-do-mercado-livre-beta--3pEqEnru6H2JcZzYVioT5f).

Mercado Libre no mostrará un descuento en el precio de un producto como promoción ni el valor de una promoción.

## 4. Stock

Durante la integración, el nivel de [stock](https://help.vtex.com/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/lbDt7ovsUK2Fbj4GupSy9) de un producto se envía por primera vez junto con el primer envío de los productos. Luego, siempre que haya algún cambio de stock en la plataforma VTEX, los stocks de los productos anunciados en Mercado Libre se actualizan automáticamente.

Para ver el stock de los productos enviados, en el Admin, ingresa a *MARKETPLACE > Integraciones > Stock*. Si quieres encontrar un producto específico, usa el campo de búsqueda e ingresa el código del SKU.

Si tienes alguna duda, consulta nuestra documentación sobre [Errores de integración de stock con Mercado Libre](https://help.vtex.com/es/tutorial/erros-de-integracao-de-estoque-com-o-mercado-livre--3pWA3vRePuGmJ5tquY4fva).

## 5. Puntos de recogida

La etapa del Punto de recogida solo está disponible para los clientes que [activaron y configuraron sus puntos de recogida con la integración de Mercado Libre](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/52C1lm8gMovN8v68s6v89d). En Mercado Libre, el cliente tendrá la opción de seleccionar entre los puntos de recogida registrados para retirar el pedido.
