---
title: 'Status de integraciones'
id: tutorials_422
status: PUBLISHED
createdAt: 2017-04-27T22:05:50.596Z
updatedAt: 2025-06-10T18:20:24.338Z
publishedAt: 2025-06-10T18:20:24.338Z
firstPublishedAt: 2017-04-27T23:03:24.679Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: checking-integrations-in-bridge
legacySlug: como-verificar-la-integracion-en-bridge
locale: es
subcategoryId: 6riYYNZCpO8wyksi8Ksgyq
---

Los logs de las integraciones de tiendas VTEX con otros marketplaces se encuentran en la sección **Conexiones**, en **Admin VTEX > Marketplace > Conexiones**.  

La sección te permite monitorear los status de cada tipo de integración o reprocesar las integraciones que tengan status de error.  

## Conexiones

En la sección **Conexiones** puedes consultar los siguientes tipos de integración:

[Pedidos](#pedidos)  
[Productos](#productos)  
[Seguimiento](#seguimiento)  
[Precio](#precio)  
[Stock](#stock)  

Cada página tiene un filtro, una barra de búsqueda, un botón `Expandir todo` y un botón `Exportar a Excel`.  

### Pedidos  

Puedes acceder a la página **Pedidos** a través de **Admin VTEX > Marketplace > Conexiones > Pedidos.** Esta página muestra los logs de los pedidos realizados en los marketplaces integrados con tu tienda y contiene la siguiente información:  

- **ID:** número del pedido.  
- **Afiliado:** marketplace de origen del pedido.  
- **Status:** **procesado con éxito** o **procesado con error.**  
- **Fecha de procesamiento:** última vez que la plataforma VTEX procesó el pedido.  

Para ver más detalles del pedido, haz clic en el pedido. En caso de error, la plataforma muestra un log detallado sobre las causas del error del pedido. Para solucionar los errores, accede a la sección [resolución de problemas](https://help.vtex.com/es/subcategory/integracoes--2LcLWCYaEm5qPmOuYUiKIS) en el Help Center y consulta el tutorial del marketplace en que se realizó el pedido.  

### Productos  

En el Admin VTEX, accede a **Marketplace > Conexiones > Productos.** Esta página muestra los logs del envío de productos a los marketplaces integrados con tu tienda  y contiene la siguiente información:  

- **Código del SKU:** ID que identifica el SKU en tu catálogo VTEX.  
- **Afiliado:** marketplace al que se envió el SKU.  
- **Status:** status de envío del SKU que puede ser **procesado con éxito** o **procesado con error.**  
- **Fecha de procesamiento:** última vez que la plataforma VTEX procesó el envío del SKU.  

Para ver más detalles, haz clic en el SKU deseado. En caso de error, se muestra un log detallado sobre las causas que hicieron fallar el envío del producto al afiliado.  

Para solucionar los errores, debes realizar las correcciones y luego reprocesar el envío haciendo clic en el botón `Acciones` y seleccionando la opción **Reprocesar SKU.**  

### Seguimiento  

En el Admin VTEX, accede a **Marketplace > Conexiones > Seguimiento.** Esta página muestra los logs de envío de los pedidos realizados en los marketplaces integrados con tu tienday contiene la siguiente información:  

- **Código del pedido:** ID alfanumérico que identifica el pedido.  
- **Afiliado:** marketplace de origen del pedido.  
- **Status:** status de seguimiento del pedido que puede ser **procesado con éxito, procesado con advertencia** o **procesado con error.**  
- **Fecha de procesamiento:** la última vez que el seguimiento fue procesado.  

Para ver más detalles de seguimiento, haz clic en el pedido deseado. En caso de error, se muestra un log detallado sobre el envío del pedido.   

Para solucionar los errores, debes realizar las correcciones y luego reprocesar el envío haciendo clic en el botón `Acciones` y seleccionando la opción **Reprocesar SKU.**  

### Precio

En el Admin VTEX, accede a **Marketplace > Conexiones > Precio.** Esta página detalla el envío de precios de los productos a los marketplaces integrados con tu tienda y contiene la siguiente información:  

- **Código del SKU:** ID que identifica el SKU en tu catálogo VTEX.  
- **Afiliado:** marketplace al que se envió el SKU.  
- **Status:** status del envío del precio del SKU, que puede ser **procesado con éxito, procesado con advertencia** o **procesado con error.**  
- **Fecha de procesamiento:** última vez que el envío del precio del SKU fue procesado.  

Para ver más detalles del envío de precio, haz clic en el SKU deseado. En caso de error, se muestra un log detallado. 

Para solucionar los errores, debes realizar las correcciones en el catálogo y luego reprocesar el envío haciendo clic en el botón `Acciones` y seleccionando la opción **Reprocesar SKU.**  

### Stock  

En el Admin VTEX, accede a **Marketplace > Conexiones > Stock.** Esta página muestra la información de stock enviada a los marketplaces integrados con tu tienda y contiene la siguiente información:  

- **Código del SKU:** ID que identifica el SKU en tu catálogo VTEX.  
- **Afiliado:** marketplace al que se envió el stock del SKU.  
- **Status:** status del envío del stock del SKU, que puede ser **procesado con éxito** o **procesado con error.**  
- **Fecha de procesamiento:** última vez que el envío del stock del SKU fue procesado.  

Para ver los detalles de envío del stock, haz clic en el SKU deseado. En caso de error, se muestra un log detallado.   

Para solucionar los errores, debes realizar las correcciones indicadas en el mensaje y luego reprocesar el envío
haciendo clic en el botón `Acciones` y seleccionando la opción **Reprocesar.**

