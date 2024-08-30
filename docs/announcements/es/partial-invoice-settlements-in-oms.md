---
title: 'Liquidación de facturas parciales en el OMS'
id: 57DxOPAIGassIOYDNPQftv
status: PUBLISHED
createdAt: 2022-06-27T20:36:59.586Z
updatedAt: 2022-08-26T18:00:02.539Z
publishedAt: 2022-08-26T18:00:02.539Z
contentType: updates
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: liquidacion-de-facturas-parciales-en-el-oms
locale: es
legacySlug: liquidacion-de-facturas-parciales-en-el-oms
announcementImageID: ''
announcementSynopsisES: 'Ahora las facturas parciales emitidas en los pedidos también generan liquidaciones parciales en la transacción.'
---

Si gestionas pedidos en el OMS, el sistema de gestión de pedidos de VTEX, debes emitir una factura en el pedido para que su status pase a Facturado; esto indica que el pedido concluyó con éxito. Se puede emitir una [factura completa](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) o una [fatura parcial](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) cuando los ítems o el valor del pedido sufren cambios. 

Desarrollamos una mejora en el OMS que hará que las facturas parciales emitidas en los pedidos también disparen liquidaciones parciales en la transacción. El valor total del pedido se actualizará luego de emitir la factura y se corresponderá con la información obtenida a través del _gateway_ de pagos de VTEX. 

>ℹ️ La funcionalidad de facturas parciales está disponible para toda la base de clientes VTEX, pero la liquidación parcial en el gateway se encuentra en la versión Beta. Además, para que las facturas parciales disparen liquidaciones parciales en la transacció, es necesario utilizar un conector que utilice el [Payment Provider Protocol](https://help.vtex.com/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). Los conectores legados no admiten la funcionalidad.

## ¿Qué cambió?

Anteriormente, cuando se emitía una factura parcial ya se generaba una liquidación total del pedido. Esto significa que, incluso facturando el pedido parcialmente, el _gateway_ de VTEX registraba la liquidación del valor total del pedido antes del cambio. Esto generaba una inconsistencia entre los ingresos que recibía la tienda y los registros del sistema.

Por lo tanto, el operador debía prever todos los cambios que podía sufrir un pedido antes de emitir cualquier factura (aunque fuera parcial), ya que ese proceso generaba una liquidación total del valor de la transacción original del pedido. 

Ahora, el _gateway_ liquida el valor correspondiente a la factura emitida. Este cambio también incorporó algunos comportamientos nuevos en la gestión de pedidos:

* Es posible solicitar cambios en los valores del pedido, ya que al emitir una factura parcial, la transacción queda pendiente y a la espera de que el valor restante se liquide o cancele, tal como sucede cuando hay un cambio en un pedido por un descuento en el valor.  
* Si hay una diferencia en los valores, el consumidor recibe un reembolso de modo automático. Ya no es necesario informar la diferencia en el valor por fuera de VTEX.  
* Se pueden ir facturando los ítems a medida que están disponibles. Si, luego, el operador identifica que se deben eliminar un ítem y su valor, se podrá modificar el pedido y descontar ese importe, ya que las facturas anteriores solo incluían los valores correspondientes y el saldo del valor facturado estaba pendiente.  

Obtén más información en [Facturas parciales](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe).

## ¿Por qué realizamos este cambio?

Modificamos la arquitectura del OMS para que se adapte a la operación de nuestros clientes. Entendemos que este es el comportamiento que se espera del OMS al liquidar el valor actualizado del pedido luego de facturarlo. 

Gracias a esto, desbloqueamos nuevas acciones y comportamientos en el día a día de los operadores de _ecommerce_ que facturan pedidos.

## ¿Qué se necesita hacer?

No es necesario hacer ni configurar nada. El OMS ya se actualizó automáticamente para funcionar de esta nueva manera.

Para reproducir este comportamiento:

1. Emite una [factura parcial del pedido](https://help.vtex.com/es/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe#envio-de-la-factura-parcial-via-admin).

    > Si utilizas la nueva [Página de detalles del pedido (Beta)](https://help.vtex.com/es/tutorial/pagina-de-detalhes-do-pedido-beta--2Y75n54Cc9VizrlG1N6ZNl), accede a [Facturar un pedido manualmente (Beta)](https://help.vtex.com/es/tutorial/how-to-manually-invoice-an-order-beta--7p1h852V5t54KyscpgxE2v).

2. Realiza un [cambio en el pedido](https://help.vtex.com/es/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190). 

    > Si usas la nueva interfaz de Detalles del pedido (Beta), accede a [Cómo cambiar ítems del pedido (Beta).](https://help.vtex.com/es/tutorial/how-to-change-order-items-beta--7jekq618QxgbsOxKkXBjE8)

3. Luego de realizar todos los cambios en el pedido, puedes seguir todos los eventos de la transacción haciendo clic en [Ver detalles de la transacción](https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/3Nt40DMEWkvhlpaL5PlBy). 

También puedes realizar las mismas acciones a través de nuestra API de Pedidos. Para hacerlo, revisa los _endpoints_:

* [Registrar un cambio en el pedido](https://developers.vtex.com/vtex-rest-api/reference/registerchange)  
* [Notificación de factura](https://developers.vtex.com/vtex-rest-api/reference/invoicenotification)  
* [Rastrear la transacción de pago](https://developers.vtex.com/vtex-rest-api/reference/getpaymenttransaction)  

