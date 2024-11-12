---
title: 'Cambiar el valor total del pedido'
id: 2asq4BmxvSD8Tw9xpfZuMo
status: PUBLISHED
createdAt: 2021-12-15T18:43:55.480Z
updatedAt: 2023-03-29T15:59:48.297Z
publishedAt: 2023-03-29T15:59:48.297Z
firstPublishedAt: 2021-12-15T19:49:57.726Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: changing-the-total-cost-of-the-order
locale: es
legacySlug: cambiar-el-valor-final-del-pedido-beta
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

La página [Detalles del pedido](https://help.vtex.com/es/tutorial/pagina-de-detalles-del-pedido-beta--2Y75n54Cc9VizrlG1N6ZNl) permite modificar el valor final del pedido para los pedidos que aún no han sido facturados. Esto ocurre en los escenarios en los que hay descuentos o adiciones al valor.

>⚠️ Recuerda que la funcionalidad solo está disponible para los pedidos con el status `Preparando entrega`.

Para hacer el cambio, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.  
2. Busca el pedido en la barra de búsqueda o [usa los filtros](https://help.vtex.com/es/tutorial/como-filtrar-pedidos--tutorials_192) y selecciona el pedido deseado.  
3. Haz clic en el pedido para acceder a la página de **Detalles del pedido**.   
4. En la página *Detalles del pedido*, ve a la sección **Costo total del pedido**.
5. Haz clic en `Cambiar el costo final`.  
![valorfinalES](https://images.ctfassets.net/alneenqid6w5/5VwpodKoIiDSWBwYQs2rDc/625d67dbe3011b8aea8574e247f9a2d4/valorfinalES__1_.png)  
6. Se abrirá la página **Cambiar el valor**, en la que debes rellenar los siguientes campos obligatorios:  
7.  Rellena los campos obligatorios:
    * **Valor:** Selecciona Descuento o Aumentar e introduce el valor que deseas modificar.  
    * **Razón**: indica los motivos del cambio.  
8. En la parte derecha de la página, haz clic en `Enviar`;
![Alterar valorES](//images.ctfassets.net/alneenqid6w5/15TldKoBz42ds5fJswW13O/8488873894611990391d7bb132ab9c04/Alterar_valorES.png)

Los cambios en el pedido se actualizarán en la sección *Ítems a Facturar*, y en el *Historial de Pedidos*. Ten en cuenta que el valor total del pedido también cambiará.

### Facturas Parciales

Al cambiar o eliminar ítems de un pedido, el valor total del pedido cambia. En estos casos, es necesario [facturar el pedido](https://help.vtex.com/es/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) enviando la [factura parcial](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) correspondiente al importe que se liquidará por el pedido después del cambio. 

El valor total del pedido se actualizará después de que se inserte la factura, y corresponde al valor capturado por el gateway de pagos de VTEX. Si el cliente devuelve un ítem, el reembolso se realizará automáticamente a través del sistema de Pagos de VTEX.

>ℹ️ La funcionalidad de facturas parciales está disponible para toda la base de clientes VTEX, pero la liquidación parcial en el gateway se encuentra en la versión Beta. Además, para que las facturas parciales disparen liquidaciones parciales en la transacció, es necesario utilizar un conector que utilice el [Payment Provider Protocol](https://help.vtex.com/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). Los conectores legados no admiten la funcionalidad.
