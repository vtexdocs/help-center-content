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

La página [Detalles del pedido](/es/tutorial/pagina-de-detalles-del-pedido-beta--2Y75n54Cc9VizrlG1N6ZNl) permite modificar el valor final del pedido para los pedidos que aún no han sido facturados. Esto ocurre en los escenarios en los que hay descuentos o adiciones al valor.

<div class="alert alert-warning">
Recuerda que la funcionalidad solo está disponible para los pedidos con el status <code>Preparando entrega</code>.
</div>

Para hacer el cambio, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.  
2. Busca el pedido en la barra de búsqueda o [usa los filtros](/es/tutorial/como-filtrar-pedidos--tutorials_192) y selecciona el pedido deseado.  
3. Haz clic en el pedido para acceder a la página de **Detalles del pedido**.   
4. En la página *Detalles del pedido*, ve a la sección **Costo total del pedido**.
5. Haz clic en `Cambiar el costo final`.  
![valorfinalES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/Orders%20overview/cambiar-el-valor-total-del-pedido_1.png)  
6. Se abrirá la página **Cambiar el valor**, en la que debes rellenar los siguientes campos obligatorios:  
7.  Rellena los campos obligatorios:
    * **Valor:** Selecciona Descuento o Aumentar e introduce el valor que deseas modificar.  
    * **Razón**: indica los motivos del cambio.  
8. En la parte derecha de la página, haz clic en `Enviar`;
![Alterar valorES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/Orders%20overview/cambiar-el-valor-total-del-pedido_2.png)

Los cambios en el pedido se actualizarán en la sección *Ítems a Facturar*, y en el *Historial de Pedidos*. Ten en cuenta que el valor total del pedido también cambiará.

### Facturas Parciales

Al cambiar o eliminar ítems de un pedido, el valor total del pedido cambia. En estos casos, es necesario [facturar el pedido](/es/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) enviando la [factura parcial](/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) correspondiente al importe que se liquidará por el pedido después del cambio. 

El valor total del pedido se actualizará después de que se inserte la factura, y corresponde al valor capturado por el gateway de pagos de VTEX. Si el cliente devuelve un ítem, el reembolso se realizará automáticamente a través del sistema de Pagos de VTEX.

<div class = "alert alert-info">
La funcionalidad de facturas parciales está disponible para toda la base de clientes VTEX, pero la liquidación parcial en el gateway se encuentra en la versión Beta. Además, para que las facturas parciales disparen liquidaciones parciales en la transacció, es necesario utilizar un conector que utilice el <a href="https://help.vtex.com/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m">Payment Provider Protocol</a>. Los conectores legados no admiten la funcionalidad.
</div>
