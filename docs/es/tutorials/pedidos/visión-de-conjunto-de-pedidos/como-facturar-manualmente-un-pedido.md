---
title: 'Como facturar un pedido'
id: 7p1h852V5t54KyscpgxE2v
status: PUBLISHED
createdAt: 2020-12-28T20:50:42.445Z
updatedAt: 2025-07-28T19:41:56.286Z
publishedAt: 2025-07-28T19:41:56.286Z
firstPublishedAt: 2020-12-28T21:01:55.107Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: how-to-manually-invoice-an-order
legacySlug: facturar-manualmente-un-pedido-beta
locale: es
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

La página de [Detalles del pedido](https://help.vtex.com/es/tutorial/pagina-de-detalles-del-pedido-interface--2Y75n54Cc9VizrlG1N6ZNl) permite que los administradores de tienda sigan el flujo detallado de los pedidos. 

La página recoge los datos de un determinado pedido y permite que los administradores de tienda incluyan y consulten manualmente la [factura](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) de dicho pedido. También puedes enviar una [factura parcial](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) cuando el pedido sufre cambios en su valor, en los ítems, o en casos de devolución de ítems.

Facturar un pedido en la plataforma VTEX significa ingresar la factura de los ítems en el módulo **Pedidos**. Es necesario facturar el pedido para que la factura esté a disposición del cliente y el [flujo del pedido](https://help.vtex.com/es/tutorial/flujo-de-pedido-en-el-oms--tutorials_196) llegue a su fin. El envío de facturas puede realizarse:

* A través de la [API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice) de envío de facturas.
* A través del Admin VTEX.

> ℹ️ Al facturar un pedido, es posible cambiar la [transportadora](https://help.vtex.com/es/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) asociada al pedido. Para hacer esto, en la sección **Seguimiento del pedido**, haga clic en *Transportadora* y seleccione la opción deseada.

Para enviar una factura a través del Admin VTEX, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.  
2. Busca el pedido en la barra de búsqueda o [usa los filtros](https://help.vtex.com/es/tutorial/como-filtrar-pedidos--tutorials_192).  
3. Haz clic en el pedido deseado.
4. Desplázate hacia abajo hasta la sección **Ítems a facturar** y haz clic en<i class = "fas fa-chevron-right"> </i> para ampliar.   
![FaturaES](//images.ctfassets.net/alneenqid6w5/24K1rMqn970zgeKxK81f3Z/a94ecc1266048ad8f4c973a0b9042c5a/FaturaES.png)  
5. Haz clic en el botón `Facturar`. 
6. Haz clic en la opción de facturación deseada:    
    * **Enviar factura con referencia a los ítems:** para facturar el pedido haciendo referencia a los ítems del paquete.
    * **Enviar factura única:** para facturar ítems específicos del paquete. Si se realizan [cambios en el pedido](https://help.vtex.com/es/tutorial/how-to-change-order-items--7jekq618QxgbsOxKkXBjE8), es necesario introducir facturas parciales.  
    * **Notificar factura:** te permite notificar al ERP de tu tienda para que genere una factura.    
7. Rellena los campos del formulario correspondiente:
    * Datos del formulario **Enviar factura con referencia a los ítems**
        * Número de factura: identificador numérico de la factura. No ingreses más de una factura con el mismo número.
        * URL de la factura: dirección web de la factura.
        * Clave de acceso: para consultar la factura electrónica en Internet. Este campo debe rellenarse solo en caso de facturas electrónicas.
        * Fecha de emisión: fecha de emisión de la factura.  
        * Rastreo del pedido: código de identificación de rastreo.  
        * Valores extra: valores extra de la factura, como interés, impuestos y precio de envío.  
        * Valor: valor total de la factura.  
        * Utiliza el ícono de más <i class="fas fa-plus"></i> y menos <i class="fas fa-minus"></i> para añadir/excluir ítems de la factura.  
    * Datos del formulario **Enviar factura única**  
        * Valor: valor total de la factura.  
        * Número de factura: identificador numérico de la factura. No ingreses más de una factura con el mismo número.  
        * URL de la factura: dirección web de la factura.  
        * Clave de acceso: para consultar la factura electrónica en Internet. Este campo debe rellenarse solo en caso de facturas electrónicas.  
        * Fecha de emisión: fecha de emisión de la factura.  
        * Rastreo del pedido: código de identificación de rastreo.  
    * Datos del formulario **Notificar factura**. Este formulario debe usarse solo para las tiendas que utilicen VTEX Sales App.  
        * Observaciones:  campo utilizado para notificar un sistema de facturación externo.  
        * Valor: valor total de la factura.  
8. Después de haber introducido la información, haz clic en `Guardar factura` o bien en `Notificar factura`, dependiendo de la opción elegida.    

Una vez `facturado` el pedido, comprueba las facturas introducidas en la sección **Factura** como se muestra en la figura siguiente.

![Itens faturarES](//images.ctfassets.net/alneenqid6w5/2wScKr5ZaHShpyntCuN0jy/bd9f368f2ac4a319c490bd3c84fe88d3/Itens_faturarES__1_.png)

En los casos de envío de [facturas parciales](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe), al [modificar o eliminar ítems de un pedido](https://help.vtex.com/es/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190), el valor total del pedido se actualizará después de la facturación, y corresponderá al valor capturado por el _gateway_ de pagos de VTEX.

No es posible [cancelar](https://help.vtex.com/es/tutorial/como-cancelar-pedido--tutorials_186) pedidos [parcialmente facturados](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). Si el cliente desea sustituir o remover ítems del pedido, es posible [modificar el pedido](https://help.vtex.com/es/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).
