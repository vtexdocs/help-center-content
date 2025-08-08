---
title: 'Desempeño de Ventas'
id: 3DMube0sEsK9vPcRYGas72
status: PUBLISHED
createdAt: 2021-10-19T12:49:42.165Z
updatedAt: 2023-11-09T19:56:56.074Z
publishedAt: 2023-11-09T19:56:56.074Z
firstPublishedAt: 2021-10-19T12:55:27.227Z
contentType: tutorial
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: sales-performance
legacySlug: desempeno-de-ventas
locale: es
subcategoryId: 1TIJqw8kV2Yok4iQe4SAkq
---

La página Desempeño de Ventas es un panel diseñado para el comercio unificado, que ayuda a las tiendas a hacer crecer su negocio y a tomar decisiones más precisas. El dashboard permite a los usuarios analizar los datos de los pedidos de su tienda y de sus sellers, en el caso de las [tiendas que actúan como marketplaces](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#actuar-como-un-marketplace). Con esta página, los usuarios pueden:

- Monitorear el estado general de su negocio  
- Evaluar el impacto en las ventas de los eventos de alta demanda, como el Black Friday y el Cyber Monday  
- Comprender las razones de las variaciones en el volumen de ventas o la tasa de conversión de pedidos  
- Encontrar oportunidades para mejorar los resultados de su tienda   

Para acceder a la pagina, en __Dashboards__, haz clic en __Desempeño de Ventas__. 

Puedes personalizar la visualización de los datos del gráfico y de la lista filtrando por periodo, dimensiones y métricas. 

![Sales Perf Dash ES](//images.ctfassets.net/alneenqid6w5/1nTkH8KfhrLPOBuxFhcZvC/49985a1bc354e18e3dce208e12bfbdb5/Sales_Perf_Dash_ES.gif)

## Datos 
Los datos de la página proceden del [sistema de Gestión de pedidos](https://help.vtex.com/es/tracks/orders--2xkTisx4SXOWXQel8Jg8sa) de VTEX. El Desempeño de Ventas es una solución analítica, que utiliza heurística y fórmulas creadas a partir de nuestra experiencia, llevando a nuestros clientes de ecommerce al siguiente nivel para calcular sus métricas. La página no debe utilizarse como un sustituto de los datos del OMS, sino como una herramienta de análisis y de insights de negocio.

Para asegurarte de que tienes acceso tanto a los últimos datos actualizados como a todo tu historial para analizarlo sin perder rendimiento, internamente el panel de Desempeño de Ventas divide estos datos en grupos separados.

Estos grupos también son procesados por sistemas diferentes, lo que puede provocar una diferencia entre los datos del OMS y los del Desempeño de las Ventas, aunque nuestro objetivo es presentar una divergencia máxima del 3%.

<div class ="alert alert-warning">
Por ejemplo, puede que haya diferencias entre las métricas de ingresos y ticket promedio registradas en el OMS y Desempeño de Ventas. Esto se debe a que Desempeño de Ventas considera el valor de los ítems, mientras que el OMS también toma en cuenta descuentos, valor de envío, impuestos y promociones en el pedido, lo que puede aumentar o disminuir el valor final.
</div>

## Periodo

El selector de periodo permite definir el intervalo de tiempo que debe considerarse para el análisis del desempeño de ventas. Así, es posible entender cómo han evolucionado las métricas y las dimensiones en comparación con el periodo anterior. La página se actualiza a cada hora, por lo que los usuarios pueden esperar un retraso de 10 a 80 minutos, según la hora a la que accedieron a la página. El periodo máximo que se puede filtrar es de los últimos 90 días.

Para modificar el periodo:

1. En la parte superior de la página _Desempeño de ventas_, haz clic en el botón <i class="fas fa-angle-down"></i> al lado de **Periodo**.
2. En **Periodo principal**, selecciona las fechas de inicio y de fin deseadas en el calendario.
    > También puedes hacer clic en el ícono <i class="fas fa-angle-down"></i> para hacer una selección rápida entre las opciones que se describen en la tabla a continuación.
3. En **Comparar con**, selecciona las fechas de inicio y de fin deseadas en el calendario.
    > También puedes hacer clic en el ícono <i class="fas fa-angle-down"></i> para alternar entre las opciones que se describen en la tabla siguiente o seleccionar _Periodo anterior_.
4. Haz clic en `Aplicar`.

Los datos de la página se filtrarán según el periodo seleccionado.

Aquí podrás ver las opciones de periodo disponibles:

| Periodo         | Inicio                                            | Fin                                                 |
|-----------------|---------------------------------------------------|-----------------------------------------------------|
| Hoy             | 00:00 del día actual.                              | Momento actual, con un retraso de 10 a 80 minutos.  |
| Ayer            | 00:00 del día anterior al actual.                  | 23:59 del día anterior al actual.                    |
| Últimos 7 días  | 00:00 del octavo día antes del día actual.         | 23:59 del día anterior al actual.                    |
| Semana pasada   | 00:00 del lunes de la semana anterior a la actual. | 23:59 del domingo de la semana anterior a la actual. |
| Últimos 28 días | 00:00 del 29º día antes del día actual.            | 23:59 del día anterior al actual.                    |
| Mes anterior    | 00:00 del primer día del mes anterior al actual.   | 23:59 del último día del mes anterior al actual.     |
| Personalizado    | Ingresa en el calendario la _Fecha de inicio_ deseada.   | Ingresa en el calendario la _Fecha de fin_ deseada, ocurrida dentro de los próximos 90 días después de la fecha de inicio. La duración entre Inicio y Fin no puede exceder los 90 días.     |

El gráfico indica siempre los datos del periodo anterior al seleccionado, mediante una línea punteada, para facilitar la comparación. Así, si seleccionas el periodo *Últimos 7 días*, la línea punteada del gráfico indicará los datos de los últimos 7 y 14 días, por ejemplo. 

## Dimensiones de filtro y agrupación de datos
Las dimensiones son las opciones disponibles para filtrar, agrupar y comparar datos en el dashboard Desempeño de Ventas. Aprende más sobre cada dimensión:

| Dimensión | Descripción |
|---|---|
| Categoría | Las categorías registradas en la arquitectura de tu catálogo. |
| Marca | Las marcas registradas en la arquitectura de tu catálogo. |
| Nombre del Marketplace Out | El nombre del marketplace donde tu tienda vende productos. |
| Canal de entrega | Define si el pedido fue enviado al cliente o entregado en el punto de recogida. |
| Método de envío | Nombre del tipo de envío, registrado en la Política de envío, que se mostrará en el checkout para el cliente (por ejemplo, exprés, regular). |
| Ciudad de destino | Las ciudades a las que se han enviado tus pedidos. |
| Estado de destino | Los estados a los que se han enviado tus pedidos. |
| Nombre del Seller | Los nombres de los sellers que venden productos en tu marketplace. Puedes verificar sus nombres en la página Gestión de Sellers. |
| Medio de pago | Los medios de pago que el cliente final de tu tienda puede utilizar, que se determinan en la configuración de las Condiciones de pago. |
| Nombre del Producto/SKU | Los nombres de los productos o SKU que deseas aplicar a la visualización de datos. |
| 1P / 3P | 1P (first-party) determina las métricas de la propia tienda. 3P (third-party) determina las métricas de terceros. Por ejemplo, seleccionando la métrica Pedidos y filtrando por 3P, verás los pedidos de terceros, tus sellers, en la lista y en el gráfico. |
| Campaña | Nombre de las campañas creadas en el Admin VTEX. |
| Cupón | Nombre de los cupones creados en el Admin VTEX. |
| Política comercial | Nombre de las [políticas comerciales](https://help.vtex.com/es/tutorial/como-funciona-una-politica-comercial--6Xef8PZiFm40kg2STrMkMV) registradas en tu tienda para filtrar por las distintas estrategias y canales de venta. |
| Promociones | Nombre de las [promociones](https://help.vtex.com/es/tutorial/ejemplos-de-promociones--5A8UTc7knvAscxo7e7rMFD) creadas en el Admin VTEX. |
| UTM Campaign | Nome de las [UTM](https://help.vtex.com/es/tutorial/que-son-utm-source-utm-campaign-y-utm-medium--2wTz7QJ8KUG6skGAoAQuii) Campaigns registradas para tus campañas. |
| UTM Source | Nombre de las [UTM](https://help.vtex.com/es/tutorial/que-son-utm-source-utm-campaign-y-utm-medium--2wTz7QJ8KUG6skGAoAQuii) Source registradas para identificar el origen del tráfico en tu _ecommerce_. |

## Métricas
Tanto el gráfico como la lista muestran las métricas de tu tienda, a partir de los datos del módulo de Gestión de Pedidos (OMS). Las métricas se dividen en:

### Ingresos
- __Ingresos recibidos:__ es la suma de los valores finales de los pedidos recibidos, indicando los ingresos que ha recibido la tienda.     
- __Ingresos aprobados:__ es la suma de los valores finales de los pedidos que tuvieron pagos aprobados en el período seleccionado.    
- __Ingresos facturados:__ es la suma de los valores finales de los pedidos facturados en el periodo seleccionado.     
- __Ingresos cancelados:__ es la suma de los valores finales de los pedidos cancelados en el periodo seleccionado.     

### Pedidos
- __Pedidos recibidos:__ es el número de pedidos recibidos por tu tienda en el periodo seleccionado.   
- __Pedidos aprobados:__ es el número total de pedidos con pagos aprobados en el periodo seleccionado.  
- __Pedidos facturados:__ es el número total de pedidos facturados en el periodo seleccionado.  
- __Pedidos cancelados:__ es el número total de pedidos cancelados en el periodo seleccionado.  
- __Pedidos aprobados (%):__ es el porcentaje de pedidos aprobados, calculado a partir del número total de pedidos con pago aprobado, dividido por el número total de pedidos recibidos en el periodo seleccionado.  
- __Pedidos facturados entre pedidos con pago aprobado (%):__ es el porcentaje de pedidos facturados entre los que ya habían sido aprobados. Se calcula a partir del número total de pedidos facturados, dividido por el número total de pedidos con pago aprobado en el periodo seleccionado.  
- __Pedidos facturados (%):__ es el porcentaje de pedidos facturados en el periodo seleccionado. Se calcula a partir del total de pedidos ya facturados, dividido por el total de pedidos recibidos en el periodo seleccionado.  
- __Paquetes por pedido:__ es el promedio de paquetes por pedido. Este valor puede ser inferior a cero si algunos pedidos no tienen paquetes registrados.  

### Ítems
- __Ítems recibidos:__ es la suma de los ítems de los pedidos recibidos en el periodo seleccionado.
- __Ítems aprobados:__ es la suma de los ítems de los pedidos aprobados en el periodo seleccionado.
- __Ítems facturados:__ es la suma de los ítems de los pedidos facturados en el periodo seleccionado.
- __Ítems cancelados:__ es la suma de los ítems de los pedidos cancelados en el periodo seleccionado.

### Otros
- __Precio promedio por ítem:__ es el promedio del precio pagado por ítem por el cliente final de la tienda.
- __Precio promedio del envío:__ es el promedio del costo de envío pagado por el cliente final de la tienda.
- __Ticket promedio (recibido):__ es el promedio del valor pagado por los pedidos recibidos en el periodo seleccionado.
- __Ticket promedio (aprobado):__ es el promedio del valor pagado por los pedidos con pagos aprobados en el periodo seleccionado.
- __Ticket promedio (facturado):__ es el promedio del valor pagado por los pedidos facturados en el periodo seleccionado.
- __Ticket promedio (cancelado):__ es el promedio del valor que se pagaría por los pedidos cancelados en el periodo seleccionado.

## Filtros

Los filtros utilizan las [dimensiones](#dimensiones-de-filtro-y-agrupacion-de-datos) para seleccionar los datos que aparecen en la [lista](#lista) y el [gráfico](#grafico). 

El selector de filtros permite añadir más de uno, sin límite de superposición de filtros. Lo que puede ocurrir al acumular filtros es que llegues a un conjunto de datos sin información, cuando, por ejemplo, no hay ventas del seller ABC, dentro de la categoría Moda, en la región Sur, con el medio de pago Y.

Para aplicar filtros a la visualización de los datos de ventas de tu tienda, sigue los pasos a continuación:

1. En *Dashboards*, haz clic en **Desempeño de Ventas**.    
2. En la esquina superior derecha de la página, haz clic en `Filtros`.    
3. Haz clic en `+ Agregar filtro`.    
4. En el *primer menú selector*, selecciona la dimensión de datos deseada.  
5. En la lista desplegable, selecciona los **valores** deseados para la dimensión elegida.     
6. Haz clic en el botón `Aplicar`.    
> Para las opciones *Nombre del seller* y *Nombre del producto/SKU*, es necesario escribir el valor deseado.    
7. Si lo deseas, añade más filtros haciendo clic en el botón `+` y repitiendo los pasos 4 a 6.    

### Otras acciones para los filtros
Además de aplicar filtros, también puedes realizar las acciones a continuación.

- Para borrar todos los filtros, haz clic en el botón `Limpiar filtros`.   
- Haciendo clic en el botón `:`, puedes:   
  - **Duplicar:** puedes utilizar la base de un filtro para crear otros, sin borrar o sobrescribir un filtro ya creado.  
  - **Copiar link:** puedes compartir la vista previa con otra persona que tiene acceso a la cuenta de tu tienda en VTEX.   
  - **Fijar:** puedes fijar la vista de los filtros en la página.  
- Al hacer clic en una dimensión de la lista, se crea automáticamente una visualización de filtro para esa dimensión. Aprende más en [Casos de uso](#casos-de-uso).   

## Vistas

![Sales perf update ES](//images.ctfassets.net/alneenqid6w5/5mHOltfUnUpV1DtHXrT8xD/e91f5f473a5d10b757c7a93a235ee9d9/Sales_perf_update_ES.gif)

El *dashboard* Desempeño de Ventas se puede personalizar aplicando diferentes filtros y seleccionando las métricas que aparecerán en el gráfico y la lista. Para facilitar la exploración diaria de los datos, hemos creado vistas que registran los filtros y las métricas aplicadas en la página para tu visualización directa. Puedes guardar, editar y compartir las diferentes vistas del dashboard. La página viene con las siguientes vistas configuradas por defecto:

- Gestión de ventas
- Gestión de fulfillment
- Gestión de categorías
- Gestión de sellers 3p

Para crear una nueva visualización:

1. En *Dashboards*, haz clic en **Desempeño de Ventas**.  
2. En la esquina superior izquierda de la página, haz clic en el icono  <i class="fas fa-thumbtack"></i>.    
3. En *Vistas*, haz clic en el botón `+`.   
4. Introduce un nombre para la vista.   
5. Haz clic en **Crear**.  

Para editar una nueva vista:

1. En *Dashboards*, haz clic en **Desempeño de Ventas**.  
2. En la esquina superior izquierda de la página, haz clic en el icono  <i class="fas fa-thumbtack"></i>.   
3. En *Vistas*, selecciona la vista deseada.  
4. Realiza las modificaciones deseadas en los filtros y métricas de la página.  
5. Utiliza los siguientes atajos de teclado para guardar:  
- Usuarios de MacOS: `command + S`.  
- Usuarios de Windows: `ctrl + S`.   

### Otras acciones para las vistas

Las vistas creadas estarán disponibles en **Vistas > Tus vistas**. 
Una vez que hayas creado las vistas, puedes realizar las siguientes acciones:

- Buscarlas por su nombre o navegar por las opciones de la lista.    
- Haciendo clic en el botón `:` junto al nombre de la vista, es posible:  
  - **Fijar**: puedes seleccionar la vista que estará siempre abierta cuando accedas a la página de Desempeño de Ventas.   
  - **Duplicar**: puedes utilizar la base de una vista para crear otras, sin borrar o sobrescribir una vista ya creada.  
  - **Copiar link**: puedes compartir la vista previa con otra persona que tiene acceso a la cuenta de tu tienda en VTEX.   
  - **Renombrar**: para cambiar el nombre dado a la vista seleccionada.  

## Gráfico

El gráfico de la página utiliza datos del OMS de VTEX para generar la visualización e ilustra las métricas seleccionadas para ese periodo.  El eje X representa el tiempo y el eje Y la métrica seleccionada. La línea punteada se refiere al periodo anterior, y la línea continua al periodo seleccionado. 

El gráfico se actualizará siempre que apliques un filtro, cambies el periodo o modifiques una métrica. Al pasar el cursor sobre el gráfico, puedes obtener más detalles sobre la métrica en cuestión, incluyendo su porcentaje de aumento o disminución y la comparación con el periodo anterior. 

La página contiene cinco pestañas con los gráficos de las métricas seleccionadas, para que puedas comparar diferentes datos navegando entre las pestañas. Al hacer clic en una pestaña, verás el gráfico de esa métrica solamente. Los gráficos no cruzan datos de métricas diferentes. Puedes seleccionar la métrica que deseas ver haciendo clic en el botón `Cambiar métrica`. 

## Lista

La lista representa las métricas y los filtros aplicados al gráfico en formato de tabla. Las columnas representan las métricas seleccionadas en cada pestaña del gráfico, y las filas representan la dimensión utilizada para agrupar los datos. 

- __Cambiar las métricas y dimensiones:__ para cambiar la dimensión utilizada en las filas, haz clic en el menú selector ubicado al lado de `Agrupar por:` en la parte superior de la página. Para cambiar las métricas de las columnas, haz clic en `Cambiar métrica` en la pestaña del gráfico correspondiente.  
- __Ordenar los datos:__ haciendo clic en las flechas ubicadas al lado de las métricas en cada columna, puedes ordenar los datos de la tabla en orden ascendente (↑) o descendente (↓). Al hacer clic en la dimensión en una fila, se crea automáticamente una visualización de filtro para esa dimensión. El filtro aplicado anteriormente se mantiene, aunque se cambie la agrupación. Para eliminar los filtros aplicados de este modo, haz clic en el **selector de filtros en la parte superior del gráfico > Limpiar filtros > Aplicar**.      
- __Cambiar la vista de los datos__: cambiar la vista de los datos eligiendo entre las opciones:   
  - __Porcentaje__: visualiza el porcentaje de aumento o disminución de cada métrica de la lista de un periodo a otro.  
  - __Absoluta__: visualiza en números absolutos el aumento o disminución de las métricas de la lista entre un periodo y otro.   
  - __Representativa__: visualiza el porcentaje de representatividad de un elemento dentro de una métrica.  

<div class="alert alert-info">
Ten en cuenta que las métricas <i>Ticket promedio</i> y <i>Ítems por pedido</i> no tendrán disponible una vista de Porcentaje o Representativa, ya que son métricas que se calculan dividiendo otras, y la suma de todas las partes de cada una no es igual al Total.
  </div>

### Exportar datos

Puedes exportar un archivo con los datos que aparecen en la lista, siguiendo las dimensiones y los filtros aplicados, incluyendo todas las métricas, no solo las representadas en las columnas de la lista. 

Al hacer clic en `Exportar`, recibirás el archivo por email en diez minutos. El archivo exportado viene en formato `.rar` y para acceder a él como plantilla, debes cambiar el tipo de archivo a .csv. Para ello, abre el archivo en tu ordenador y cambia su nombre agregando `.csv` al final de su nombre. 

Puedes abrir el archivo CSV con varios lectores de tablas, como [Hojas de cálculo de Google](https://support.google.com/docs/answer/40608?hl=es-BR&co=GENIE.Platform%3DDesktop), [Excel](https://support.microsoft.com/es/office/import-data-from-a-csv-html-or-text-file-b62efe49-4d5b-4429-b788-e1211b5e90f6) y [Numbers](https://support.apple.com/es-es/guide/numbers/tan9f3c54bdc/mac), por ejemplo. Si el archivo se abre con un formato no configurado en Excel, puedes utilizar el [Asistente de importación de texto de Microsoft](https://support.microsoft.com/es/office/assistente-de-importa%C3%A7%C3%A3o-de-texto-c5b02af6-fda1-4440-899f-f78bafe41857) para definir las columnas con mayor precisión.

## Casos de uso

Hay varias formas de utilizar la página Desempeño de Ventas para obtener inteligencia empresarial de los datos. A continuación mostramos maneras de explorar libremente los datos, investigar un dato específico y también presentamos un ejemplo de análisis de datos de sellers a través del dashboard Desempeño de Ventas.  

### Explorar datos
La página puede utilizarse de forma exploratoria, cambiando entre la visualización del gráfico y la de la lista para identificar aspectos inusuales o el crecimiento inesperado de alguna métrica, por ejemplo. Para ello, te sugerimos:

1. Ver el [gráfico](#grafico), cambiando entre las diferentes [métricas](#metricas).   
2. Ver la [lista](#lista), cambiando entre diferentes agrupaciones de [dimensiones](#dimensiones-de-filtro-y-agrupacion-de-datos).  
3. Cuando veas un resultado que quieras explorar más, aplica un [filtro](#filtros).    
4. Guarda la vista para repetir este análisis cuando quieras.  

### Investigar datos específicos
Supongamos que necesitas algún dato de tus ventas para completar un informe o elaborar una presentación. También puedes utilizar la página para obtener un dato específico que ya tienes en mente. Para ello, te sugerimos:

1. Determina el [periodo](#periodo) deseado.  
2. Aplica uno o más [filtros](#filtros) con las  [dimensiones](#dimensiones-de-filtro-y-agrupacion-de-datos) deseadas haciendo clic en el botón selector o directamente en la fila de la [lista](#lista).  
3. Exporta la plantilla con los datos agrupados para continuar la investigación.  

### Ejemplo de análisis de sellers
Supongamos, por ejemplo, que has lanzado una promoción para la categoría Libros en tu marketplace, y quieres investigar el desempeño de tus sellers en este escenario. 

1. Para ello, primero selecciona el [periodo](#periodo) deseado, correspondiente a la duración de la promoción.   
2. A continuación, selecciona la [dimensiones](#dimensiones-de-filtro-y-agrupacion-de-datos) __3P__ en el selector de filtros y añade otro [filtro](#filtros) con la categoría __Libros__.    
3. Mira en la lista qué seller ha vendido más, a partir de la [métrica](#metrica) __Pedidos (facturados) o Ingresos (facturados)__.   
4. Exporta la plantilla con esta visualización de datos para analizar todas las métricas de ventas de tus sellers en la categoría Libros.  

