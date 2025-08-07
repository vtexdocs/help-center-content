---
title: 'Todos los pedidos'
id: 2QTduKHAJMFIZ3BAsi6Pi
status: PUBLISHED
createdAt: 2022-04-04T21:50:53.330Z
updatedAt: 2023-12-21T14:05:13.862Z
publishedAt: 2023-12-21T14:05:13.862Z
firstPublishedAt: 2022-04-04T22:39:11.450Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: all-orders
locale: es
legacySlug: lista-de-pedidos-beta
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

<div class = "alert alert-info">
Solo puedes acceder a la información de los pedidos creados en los últimos años. Este periodo también se aplica a los pedidos de los clientes a través de <a href="https://help.vtex.com/es/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh">Mi Cuenta</a>.
</div>

La página **Todos los pedidos** permite a los administradores de la tienda hacer seguimiento de los pedidos de su tienda y extraer información para la gestión inteligente de su negocio. Para acceder a la página, en el menú del Admin VTEX, haz clic en **Pedidos > Todos los pedidos**. En esta página puedes: 

- Consultar las métricas de pedidos y ventas.
- Exportar un informe de pedidos.
- Buscar y filtrar pedidos.
- Consultar una lista con todos los pedidos de la tienda en el periodo seleccionado.

Las siguientes secciones proporcionan más detalles sobre cada componente de la página y sus acciones.

![Order Listing EN](https://images.ctfassets.net/alneenqid6w5/683JysQxHoXao2zRxQCJ6x/458efe24f7fcb7653eb23d1ea1d7110b/Order_Listing_EN.gif)

Además de buscar pedidos en **Pedidos > Todos los pedidos**, puede buscar pedidos desde cualquier página del Admin VTEX utilizando la barra de búsqueda global en la parte superior de la página. Por defecto, la búsqueda está configurada en `Páginas`. Para buscar un pedido, haga clic en la barra, seleccione la opción `Pedidos` y utilice cualquiera de los siguientes criterios:

- ID del pedido
- Nombre del cliente
- Email del cliente
- Documento del cliente

## Barra superior

La barra superior de la página contiene las métricas de Nro. total de pedidos y Pedidos en, que se muestran en números absolutos y porcentajes de [Nro. total de pedidos](#total-de-pedidos) y [Ventas](#ventas). Veremos en más detalle lo que significa cada métrica en la siguiente sección de este artículo. 

Para los datos de variaciones de pedidos, los colores indican:

- Verde: resultado positivo.  
- Azul: resultado neutro.  
- Rojo: resultado negativo.  

### Exportar informe

En la esquina superior derecha de la página se encuentra el botón `Exportar`, que sirve para enviar un informe de pedidos por email. Para exportar el informe, en la página **Todos los pedidos**, haz clic en el botón `Exportar`. Recibirás un email con el archivo en formato .csv para descargar. 

Los datos del archivo reflejan el contenido de la página en el momento de la exportación, incluidos los filtros aplicados. Aprende más sobre cada campo del informe en [Informe de pedidos](/es/tutorial/planilha-de-pedidos--31m1ewsmsEe0WS4So2aGMY).

### Total de pedidos

Junto a cada métrica, hay un número absoluto de pedidos realizados en el periodo indicado y el porcentaje de cambio respecto a los pedidos realizados hoy. Ten en cuenta que si la comparación de los pedidos se realiza con base en cero pedidos en el pasado, la desviación será del 0 %. Las métricas se muestran junto a cada fecha:

- **Hoy:** número de pedidos realizados hasta la misma hora del día actual.   
- **Ayer:**
  - Número de pedidos realizados el día anterior hasta la misma hora del día actual.     
  - Porcentaje de disminución o aumento del número de pedidos en comparación con el día anterior. 
- **Semana pasada:**
  - Número de pedidos realizados el mismo día de la semana pasada hasta la misma hora del día actual.    
  - Porcentaje de disminución o aumento del número de pedidos en comparación con la semana anterior.   
- **Año pasado: **  
  -  Número de pedidos realizados el mismo día del año pasado hasta la misma hora del día actual.  
  - Porcentaje de disminución o aumento del número de pedidos en comparación con el año anterior.     

El cálculo de los pedidos realizados el año pasado se hace restando 52 semanas al día actual. De este modo, se mantiene el día de la semana. Por ejemplo, el día 24 de noviembre de 2017 se comparará con el 25 de noviembre de 2016, cuando ambas fechas caen en viernes.   

- **Ranking:** la clasificación, ubicada en la esquina derecha de la barra, muestra la posición de la tienda entre todas las tiendas VTEX. La barra no muestra la posición exacta de las tiendas en las cinco primeras posiciones; estas  se mostrará como número «Top 5».

### Ventas 

En la barra de ventas, la moneda de las métricas es la misma moneda en la que se realizaron los pedidos. Cuando una tienda permite la venta en más de una moneda, se muestran varias líneas, cada una con los datos de venta de las respectivas monedas.

Los valores mostrados en la barra se actualizan en función de los filtros seleccionados. Por ejemplo, si un filtro de pedidos con el status «Cancelado» está activo, las métricas muestran los valores que provendrían de esos pedidos, pero que no fueron realmente capturados en los ingresos de la tienda. 

Las métricas de ventas incluyen:  
- **Pedidos:** número de pedidos que tienen el pago aprobado para el periodo seleccionado.  
- **Ticket promedio:** promedio del valor captado por los pedidos para el periodo seleccionado.   
- **Total bruto:** suma de los valores finales de los pedidos para el periodo seleccionado.  

## Filtros 

Los filtros cambian los pedidos que aparecen en la lista y las métricas de la barra superior. Hay cuatro tipos de filtros y cada uno tiene opciones específicas:

* Fecha
* Canal
* Status
* Otros

Para saber más sobre todas las opciones de filtros, consulta el artículo [Filtrar pedidos en Todos los pedidos](/es/tutorial/como-filtrar-pedidos--tutorials_192).

El selector de filtros permite añadir más de uno, sin límite de combinación de filtros. Lo que puede pasar al acumular filtros es que termines con un conjunto de datos sin información, como, por ejemplo, cuando no hay pedidos incompletos con la fecha de entrega en los próximos siete días. 

También puedes buscar pedidos específicos a través de la barra de búsqueda. Puedes buscar pedidos por número de pedido o nombre del cliente.

### Aplicar filtros 

Para aplicar filtros:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.  
2. Haz clic en `Filtros`.  
3. Navega entre las pestañas **Fecha**, **Canal**, **Status** y **Otros**.  
4. Haz clic en la categoría deseada o en la flecha <i class="fas fa-chevron-right"></i>, para expandir las opciones de filtros.    
5. Marca la casilla de uno o más filtros.  
6. Activa la opción `Utilizar mi zona horaria` para que el periodo seleccionado se cuente con base en tu zona horaria.  
7. Haz clic en `Aplicar`.   

También puedes aplicar filtros rápidos haciendo clic en `Status` y `Creado: Hoy` al lado del botón `Filtros`. 

Para desactivar los filtros aplicados, sigue los pasos 1 y 2 descritos anteriormente y luego haz clic en **Limpiar filtros > Aplicar**. 

### Compartir e importar filtros 

Puedes compartir e importar los filtros aplicados a una página para abrir la misma vista de filtros que otros usuarios de la tienda. Compartir los filtros facilita que tu equipo de pedidos analice los pedidos dentro de un único contexto y permite que el equipo de soporte revise el mismo conjunto de pedidos, por ejemplo.

Los filtros aplicados a la lista de pedidos se representan mediante un código JSON, que puede ser compartido entre los usuarios a través de la página Todos los pedidos. 

Para compartir un conjunto de filtros con otro usuario:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.  
2. Aplica los filtros deseados.  
3. Haz clic en `Todos los filtros`.  
4. Haz clic en `Compartir`.  
5. Haz clic en `Copiar filtros`.   
  > El código JSON que genera el conjunto de filtros se copiará en el portapapeles de tu dispositivo.  
6. Envía el código copiado a otro usuario.  

Para aplicar los filtros que se han compartido contigo:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.  
2. Haz clic en `Filtros`.  
3. Haz clic en `Importar`.   
4. En la caja de texto, pega el código compartido contigo.  
5. Haz clic en `Importar`.  
6. Haz clic en `Aplicar`.   

La lista de pedidos se filtrará según el mismo conjunto de filtros utilizado por el usuario que compartió sus filtros contigo.

## Lista de pedidos

A través de la lista de pedidos, el administrador de la tienda puede hacer seguimiento de las ventas de su cuenta. En la vista estándar, se muestran todos los pedidos de la tienda empezando por el más reciente. 

Puedes personalizar la visualización de las columnas:

* Para cambiar el orden de todos los datos de la lista, haz clic en el nombre de la columna deseada.   
* Para alternar el orden de los datos entre  ascendente y descendente, haz clic dos veces en la columna deseada.    

Al seleccionar un pedido de la lista, se te redirigirá a la página [Detalles del pedido](/es/tutorial/order-details-page-interface--2Y75n54Cc9VizrlG1N6ZNl).

A continuación, encontrarás más detalles sobre cada columna:

* **Status:** identifica en que etapa del flujo se encuentra el pedido. Puedes ver más información en [Flujo y status de pedidos](/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196).  
* **ID del pedido:** número de identificación que el cliente recibe en la pantalla de confirmación de compra y en los _emails_ transaccionales. Este código es el que debe utilizarse en las comunicaciones entre la tienda y el comprador.  
* **Fecha de creación:** es la fecha y hora en que el cliente realizó el pedido.
* **Cliente:** nombre y apellidos de la persona natural o jurídica que realizó la compra.  
* **Cant.:** cantidad de productos diferentes dentro del pedido, independientemente de la cantidad de cada ítem. Al pasar el mouse sobre el número, puedes ver los productos comprados.  
* **Valor total:** valor total del pedido con los descuentos, impuestos y envío.
* **Origen:** indica la procedencia del pedido de entre las siguientes opciones:
    * **Marketplace:** la compra se completó en el sitio web de tu tienda, donde el cliente vio y compró el producto directamente.  
    * **Fulfillment:** la compra se realizó en el sitio web de otra tienda que anuncia y vende tus productos.  
* **Pago:** medio de pago utilizado en la compra.  

## VTEX DO

![VTEX Do overview ES](https://images.ctfassets.net/alneenqid6w5/4FzyUh5uqhzXKfbw9MJXsQ/220b438c30b05a78d3932e097fefc42b/VTEX_Do_overview_ES.gif)

[VTEX DO](/es/tutorial/vtex-do-beta--7KMbRL4OslN8DTX9oiuCiu) es un gestor de tareas creadas por el Admin VTEX automáticamente y que requieren una acción manual por parte del equipo de _ecommerce_. 

Para acceder a VTEX DO, haz clic en el ícono de bandeja de entrada ubicado en la esquina inferior derecha de la página. Al hacer clic en el ícono, se abrirá un modal con la lista de tareas relacionadas con los pedidos de la tienda. Las tareas gestionadas a través de VTEX DO pueden incluir acciones de todos los sistemas VTEX, como revisar el pago, autorizar el pedido o cambiar la dirección del muelle.

