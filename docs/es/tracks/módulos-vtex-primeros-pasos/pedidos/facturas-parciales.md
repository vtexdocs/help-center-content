---
title: 'Facturas parciales'
id: q9GPspTb9cHlMeAZfdEUe
status: PUBLISHED
createdAt: 2022-06-20T20:13:46.342Z
updatedAt: 2024-04-01T17:51:08.329Z
publishedAt: 2024-04-01T17:51:08.329Z
firstPublishedAt: 2022-06-20T20:21:34.641Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: partial-invoices
locale: es
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugEN: pedidos
order: 7
---

Si gestionas pedidos en el módulo **Pedidos**, debes emitir una factura del pedido para que su status pase a `Facturado`, esto indica que el pedido concluyó con éxito. Sin embargo, el valor registrado en la factura no siempre se corresponde con el valor inicial del pedido. Esto ocurre en los siguientes escenarios: 

- Cuando un pedido sufre cambios en su valor, ya sea por descuentos o aumentos.  
- Cuando se [cambian los ítems de un pedido](/es/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).    
- Cuando se devuelven los ítems de un pedido.  

En todos estos casos, se debe emitir una **factura parcial** o más de una factura para cubrir el valor total del pedido. 

## Funcionamiento de las facturas parciales 

Las facturas parciales generan las siguientes acciones en el módulo **Pedidos** y en los demás sistemas de VTEX:

* Las facturas parciales emitidas en los pedidos también generan liquidaciones parciales en la transacción. El valor total del pedido se actualizará después de emitir la factura por el valor que se facturó a través del _gateway_ de pagos de VTEX.  
* Si hay una diferencia en los valores, el consumidor recibe un reembolso de modo automático.  
* Luego, si el _retailer_ identifica que se deben eliminar un ítem y su valor, se podrá modificar el pedido y descontar ese importe, ya que las facturas anteriores solo incluían los valores correspondientes y el saldo del valor facturado estaba pendiente.  
* Como en la factura parcial solo se liquida el valor correspondiente a la factura, se pueden realizar cambios en los importes del pedido. Con la factura parcial, la transacción queda pendiente.
* No es posible [cancelar](/es/tutorial/como-cancelar-pedido--tutorials_186) pedidos parcialmente facturados. Si el cliente desea sustituir o remover ítems del pedido, es posible [modificar el pedido](/es/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).

> ℹ️ La funcionalidad de facturas parciales está disponible para toda la base de clientes VTEX, pero la liquidación parcial en el gateway se encuentra en la versión Beta. Además, para que las facturas parciales disparen liquidaciones parciales en la transacció, es necesario utilizar un conector que utilice el [Payment Provider Protocol](/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). Los conectores legados no admiten la funcionalidad.

## Envío de la factura parcial via Admin

Para enviar una factura parcial, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.  
2. Busca el pedido en la barra de búsqueda o [usa los filtros](/es/tutorial/como-filtrar-pedidos--tutorials_192).
3. Haz clic en el pedido para acceder a la página de **Detalles del pedido**.   
4. Haz clic en `Factura`.  
5. Haz clic en **Enviar una solo factura**.  
6. En el campo **Valor**, seleccione `Valor`.
7. Completa el valor actualizado en el campo abajo.
8. Rellena los campos de **Detalles de facturación**.  
9. Haz clic en `Guardar factura`.  

> Luego de emitir la factura, haz un [cambio en el pedido](/es/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).

Luego de realizar todos los cambios en el pedido, puedes seguir todos los eventos de la transacción haciendo clic en [Ver detalles de la transacción](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/3Nt40DMEWkvhlpaL5PlBy).

> ℹ️ También puedes realizar las mismas acciones a través de nuestra API de Pedidos. Para hacerlo, revisa los *endpoints*: [Register Change on Order](https://developers.vtex.com/vtex-rest-api/reference/registerchange), [Invoice notification](https://developers.vtex.com/vtex-rest-api/reference/invoicenotification), [Retrieve Payment transaction](https://developers.vtex.com/vtex-rest-api/reference/getpaymenttransaction), y  [Update order's partial invoice (send tracking number)](https://developers.vtex.com/vtex-rest-api/reference/updatepartialinvoicesendtrackingnumber).  

## Más información

- [Página de detalles del pedido](/es/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl)    
- [Cambiar ítems de un pedido finalizado](/es/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190)
- [Cambiar el valor total del pedido](/es/tutorial/alterar-valor-final-do-pedido--2asq4BmxvSD8Tw9xpfZuMo)
- [Como facturar un pedido](/es/tutorial/how-to-manually-invoice-an-order--7p1h852V5t54KyscpgxE2v)

