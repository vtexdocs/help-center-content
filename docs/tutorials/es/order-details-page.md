---
title: 'Página de detalles del pedido'
id: 2Y75n54Cc9VizrlG1N6ZNl
status: PUBLISHED
createdAt: 2020-12-28T15:51:29.428Z
updatedAt: 2023-03-23T19:27:38.026Z
publishedAt: 2023-03-23T19:27:38.026Z
firstPublishedAt: 2020-12-28T19:33:51.059Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: pagina-de-detalles-del-pedido
locale: es
legacySlug: pagina-de-detalles-del-pedido-beta
subcategory: 3VNOhxDrvYxJThhuJClrYZ
---

La página **Detalles del pedido** permite ver toda la información sobre un pedido y gestionarlo en un solo lugar. Para ver la página, haz clic en **Pedidos > [Todos los pedidos](https://help.vtex.com/es/tutorial/todos-los-pedidos--2QTduKHAJMFIZ3BAsi6Pi)** y selecciona un pedido de la lista.

En esta página puedes:

* Consultar en qué etapa del flujo de pedidos se encuentra el pedido (status del pedido).
* Acceder a todo el historial de cambios del pedido.
* Ver el medio de pago utilizado.
* Consultar las promociones aplicadas al pedido (si las hay).
* Enviar y seguir los emails enviados al cliente.
* Enviar la factura del pedido.
* Modificar ítems del pedido.
* Gestionar la devolución de paquetes.
* Cancelar el pedido.

La página **Detalles del pedido** está dividida en bloques que agrupan información o funcionalidades. Mira a continuación las secciones de la página y sus respectivas funciones.

Para más información sobre el status y el flujo del pedido, consulta el artículo [Flujo y status de pedidos](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196).

<div class = "alert alert-info">
A continuación, se detallan todas las secciones posibles de la página <b>Detalles del pedido</b>, pero ten en cuenta que solo serán visibles las secciones que se aplican al pedido en cuestión.
</div>

## Barra superior

![BarrasuperiorES](https://images.ctfassets.net/alneenqid6w5/4iRT7cRVqHuZ7BzKScT76O/a5a4369cfa3231a289e6e40e606b53b8/BarrasuperiorES.jpg)

La barra superior de la página contiene la siguiente información y acciones:

* **Número del pedido:** identificación numérica del pedido.  
* **Status del pedido:** etapa del flujo de pedidos en la que se encuentra el pedido. Consulta el artículo [Flujo y status de pedidos](https://help.vtex.com/es/tutorial/flujo-de-pedido-en-el-oms--tutorials_196) para obtener más información.  
* **Acciones**: menú que permite acceder a acciones rápidas relativas al pedido.
    * <i class="fas fa-print"></i> **Imprimir pedido**: permite imprimir los datos del pedido.    
    * **Cancelar pedido:** botón que permite cancelar el pedido si aún no tiene el status «Facturado».  
    * **Facturar:** botón que permite [facturar un pedido](https://help.vtex.com/es/tutorial/como-faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v). Esto se aplica a pedidos pendientes de facturación.  
* **Navegación entre pedidos:** puedes navegar entre los pedidos utilizando las flechas <i class="fas fa-chevron-left"></i> y <i class="fas fa-chevron-right"></i>.

## Información general 

![Informacao geraisES](https://images.ctfassets.net/alneenqid6w5/33MvPNsMEzss1dgk5qaakl/08c3f4586217f281477c87b60ac10520/Informacao_geraisES.jpg)

La información general del pedido se muestra en la parte superior de la página, debajo de la barra superior, e incluye:

* **Fecha y hora:** fecha y hora en que se realizó el pedido.  
* **Vendido por:** nombre del _seller_ responsable de la venta.  
* **Cliente:** información personal del cliente, incluido:    
  - Nombre    
  - Nro. de identificación fiscal    
  - Contacto (celular e email)    
* **Entrega/Recogida:** datos del domicilio y del destinatario para realizar el envío a través de una transportadora o para que el cliente recoja el pedido de la tienda.    

<div class = "alert alert-info">
Haz clic en el ícono <i class="fas fa-chevron-right"></i> para ampliar el bloque.
</div>

### Status del pedido

Este bloque muestra el status actual del pedido en el [flujo de pedidos](https://help.vtex.com/pt/tutorial/fluxo-de-pedido--tutorials_196) VTEX. Aquí, puedes [ver historial](#historial-del-pedido), con todos los cambios ocurridos e interaciones dentro del pedido.  

### Ítems a facturar

![Itens faturarES](https://images.ctfassets.net/alneenqid6w5/2wScKr5ZaHShpyntCuN0jy/bd9f368f2ac4a319c490bd3c84fe88d3/Itens_faturarES__1_.png)

El bloque **Ítems a facturar** contiene paquetes con ítems cuyo pago ha sido aprobado pero que aún no han sido [facturados](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT), es decir, sus facturas no se no se emitieron a la plataforma.

Un paquete es un envoltorio o una caja que contiene los ítems de una entrega. Un pedido puede tener más de un paquete porque puede estar compuesto de ítems de sellers o stocks distintos. En el artículo [División de pedidos y división de entregas](https://help.vtex.com/es/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV), puedes obtener más información sobre la división de paquetes.

En la esquina superior izquierda aparecen las siguientes acciones:

* **Modificar:** modifica los ítems del pedido. Ten en cuenta que la [modificación de ítems](https://help.vtex.com/es/tutorial/como-alterar-itens-do-pedido--7jekq618QxgbsOxKkXBjE8) es diferente al [cambio de pedido](https://help.vtex.com/es/tutorial/substituicao-de-pedidos--2IK9mwQjBKseQmE8K8saO8). En el cambio de pedido, el cliente es quien solicita los cambios y, en la modificación de ítems, es la tienda la que cambia el pedido. 
* **Facturar:** emite la factura del pedido. Puedes obtener más información sobre el envío de facturas en el artículo [Cómo facturar un pedido](https://help.vtex.com/es/tutorial/como-faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v).

### Facturas

![FaturaES](https://images.ctfassets.net/alneenqid6w5/24K1rMqn970zgeKxK81f3Z/a94ecc1266048ad8f4c973a0b9042c5a/FaturaES.png)

Este bloque muestra los ítems facturados con sus respectivas facturas y los paquetes que componen las entregas. En este bloque tú puedes:

* **Devolver ítems:** al hacer clic en `Devolver ítems` se abre una nueva página con la información de la devolución. Para obtener más información, consulta el artículo [Cómo devolver ítems del pedido](https://help.vtex.com/es/tutorial/como-devolver-items-del-pedido--2bSNWwD0g8fcUmuupLao9i).  
* **Rastrear la entrega del pedido:** al hacer clic en `Rastreo`, se abre una nueva página con los detalles de la entrega.  
* **Confirmar entrega:** confirmar la entrega del pedido al destinatario. Para confirmar a entrega, haz clic en <i class="fas fa-ellipsis-v"></i> «Acciones» y selecciona <i class="fas fa-check"></i> «Confirmar entrega». La confirmación de la entrega no cambia el status ni el [flujo del pedido](https://help.vtex.com/es/tutorial/flujo-de-pedido-en-el-oms--tutorials_196). La información se utiliza únicamente para indicar a la tienda y al cliente que la entrega ha sido finalizada.  
* **[Cambiar los datos de rastreo](https://help.vtex.com/es/tutorial/cambiar-los-datos-de-seguimiento--63c2hG3fBSCnchiMBOR5Ck):** introducir y editar los datos de rastreo para su uso por la tienda y el cliente.    

### Ítems devueltos

![Itens devolvidosES](https://images.ctfassets.net/alneenqid6w5/318Sl1C9ih6QCltdfps82D/2c0eeac373646a73f4f79686d5f8d55f/Itens_devolvidosES__1_.png)

El bloque de **Ítems devueltos** se muestra cuando se devuelven ítems del pedido. Mira qué información y acciones están disponibles en este bloque:

* <i class="far fa-check-circle"></i> **Confirmar la entrega:** confirmar la recepción del paquete devuelto. Obtén más información sobre la devolución de ítems en el artículo [Cómo devolver ítems del pedido](https://help.vtex.com/es/tutorial/como-devolver-items-del-pedido--2bSNWwD0g8fcUmuupLao9i).  
* **Información del paquete:** datos sobre el paquete con ítems devueltos.
    * **Factura de entrada:** número de la factura de entrada en el almacén, después de la devolución.  
    * **Fecha de emisión:** fecha de emisión de la factura de entrada, cuando se produjo la devolución.  
    * **Valor:** valor de la factura de los ítems devueltos.  
* **Ítems devueltos**: lista de ítems devueltos, con los datos del SKU, el precio unitario, la cantidad de ítems, los costes adicionales de la operación (si los hay) y el valor total.  
* **Total reembolsado:** valor total reembolsado al cliente por la devolución de los ítems.  

### Historial de ítems modificados

![Historico Itens alteradosES](https://images.ctfassets.net/alneenqid6w5/2iaeorSz55zPeXnjaGZdPm/52ab970237d69819a43c8c40621dd712/Historico_Itens_alteradosES.png)

Este bloque está disponible cuando hay un cambio de ítems en el pedido. El **Historial de ítems modificados** contiene los detalles del cambio: qué ítems se añadieron o eliminaron, la fecha en que se produjo el cambio y los valores de los productos (el precio del ítem devuelto, el precio del ítem agregado y la diferencia entre los dos).

Si hay cambios en el valor final del pedido, la diferencia de valor se mostrará en el ítem **Costo de los cambios** en la parte inferior de la sección. 

## Historial del pedido

![Historico pedidoES](https://images.ctfassets.net/alneenqid6w5/1x2CvQpxrGD48YdmebHVsu/0e9e5ab253e4b902fa99438c725deb56/Historico_pedidoES.jpg)

Este bloque muestra las interaciones dentro del pedido, con sus respectivas fechas y horas. 

Haciendo clic en `Ver interacciones`, puedes seguir las comunicaciones con sistemas de VTEX y sistemas externos, como los ERP y los _gateways_ de pago.

En el **Historial del pedido**, puedes iniciar la preparación del pedido (si está disponible) haciendo clic en `Iniciar preparación`. Al hacer clic en `Comenzar preparación`, cambiarás el status del pedido e indicarás que se están preparando los ítems para su entrega. En la pantalla, aparecerá un modal para que confirmes tu decisión. Para continuar, marca las casillas y haz clic en `Proceder con el status`. 

Para obtener más información sobre cuándo debe realizarse la preparación, lee el artículo [Flujo y status de pedidos](https://help.vtex.com/es/tutorial/flujo-de-pedido-en-el-oms--tutorials_196).

También puedes ver los detalles de las notificaciones enviadas por email al cliente haciendo clic en la flecha <i class="fa-chevron-right"></i>. Puedes enviar un nuevo email haciendo clic en el botón `Reenviar email`.

## Comentarios

![ComentariosES](https://images.ctfassets.net/alneenqid6w5/6Rqz8dZ1DzcY6nE7juDELC/e8b25905f968644d3346d14109b528d0/ComentariosES.png)

Esta sección te permite añadir comentarios internos con observaciones sobre el pedido. Para ello, escribe en la caja de texto y haz clic en `Enviar`.

Los comentarios enviados se registran en la página de detalles del pedido con la fecha, la hora y la dirección de email del usuario. No aparecen para los clientes, solo para los usuarios del VTEX Admin con acceso a la página **Todos los pedidos** en tu tienda.

## Detalles financieros

![LateralES](https://images.ctfassets.net/alneenqid6w5/1oYh572kbKHKoqODLnmNyD/cb09b4e443df18a1f4af4971718e568a/LateralES.png)

En la parte derecha de la página, puedes consultar los detalles financieros del pedido. Esta información se actualiza automáticamente a medida que avanza el pedido. 

* **Costo total del pedido:** valor total cobrado por el pedido, es decir, la suma del precio de los ítems, del envío y de los servicios adicionales, si los hay.   
    * **[Cambiar el costo final](https://help.vtex.com/es/tutorial/cambiar-el-valor-final-del-pedido--2asq4BmxvSD8Tw9xpfZuMo):** permite modificar el valor total cobrado.   
    * **Promociones y _partnerships_:** promociones aplicadas al pedido, si las hay. Se dividen en:  
        * **Promociones**: tarjeta de regalo o código promocional aplicado en el _checkout_.  
        * **_Marketing:_** promociones de campañas de _marketing_.  
* **Pago:** forma de pago utilizada en la compra. La información depende de cómo se haya realizado el pago, y puede ser:  
    * **Tarjeta de crédito**: datos de la tarjeta de crédito utilizada en la compra (identificación de la transacción, _gateway_, cuotas, código de la transacción, fecha de autorización y vendedor).  
    * **Boleto bancario:** archivo del boleto. Para consultar el boleto, haz clic en <i class="fas fa-external-link-alt"></i> `Ver boleto bancario`.  
    * **Tarjeta regalo:** datos de la tarjeta regalo utilizada.  

    Para ver más detalles sobre la transacción, haz clic en el botón `Ver detalles` <i class="fas fa-external-link-alt"></i>. 

    Si el pedido tiene el status `Pendiente de pago`, puedes aprobar manualmente el pago haciendo clic en `Aprobar pago`.

## Más información

* [Modificar ítems del pedido](https://help.vtex.com/es/tutorial/como-modificar-items-del-pedido--7jekq618QxgbsOxKkXBjE8)  
* [Devolver ítems del pedido](https://help.vtex.com/es/tutorial/como-devolver-items-del-pedido--2bSNWwD0g8fcUmuupLao9i)  
* [Facturar el pedido](https://help.vtex.com/es/tutorial/como-facturar-manualmente-un-pedido--7p1h852V5t54KyscpgxE2v)  
