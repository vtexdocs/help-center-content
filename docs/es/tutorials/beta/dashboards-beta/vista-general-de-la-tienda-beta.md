---
title: 'Vista General de la Tienda (Beta)'
id: 7i8wNsQQgbbFhYMYbQ5X46
status: PUBLISHED
createdAt: 2023-06-14T17:43:51.256Z
updatedAt: 2023-11-09T19:56:54.060Z
publishedAt: 2023-11-09T19:56:54.060Z
firstPublishedAt: 2023-06-15T14:16:58.510Z
contentType: tutorial
productTeam: Management
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: store-overview-beta
legacySlug: vista-general-de-la-tienda-beta
locale: es
subcategoryId: QPnz120TdtLcXSh65c4Gs
---

> ℹ️ La versión actualizada de la página Vista general de la tienda (Beta) está disponible para uso gratuito en el Admin VTEX durante su periodo beta, o hasta que VTEX lo decida. Es importante tener en cuenta que en el futuro podrían aplicarse tarifas adicionales. Además, la página de Vista general, actualmente presente en el VTEX Admin, seguirá estando disponible para su uso por el momento.

La página Vista general (Beta) de tu Admin VTEX proporciona un seguimiento en tiempo real de tu operación en el día actual, ofreciendo visibilidad en las métricas para que tu equipo y tú tengan un rápido feedback sobre las acciones realizadas en la tienda y puedan actuar con prontitud para implementar mejoras. 

Esta herramienta está disponible en el Admin VTEX, en la página de inicio. Para acceder, haz clic en **Dashboards > Vista general** en el menú de navegación, o escribe _Vista general_ en la barra de búsqueda de la parte superior de la página.

![ES Visão geral beta](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/dashboards-beta/vista-general-de-la-tienda-beta_1.png)

En este artículo, presentamos las principales secciones y acciones presentes en la página. Aquí verás más información sobre:

* [Datos disponibles en la página](#datos-disponibles-en-la-pagina)
* [Analizar los resultados y el estado de la operación](#analizar-los-resultados-y-el-estado-de-la-operacion)
* [Comparar periodos](#comparar-periodos)
* [Vista](#vista)
* [Monitoreo](#monitoreo)
* [Métricas](#metricas)  

## Datos disponibles en la página

Las métricas de la página incluyen datos sobre los pedidos y la navegación, que se obtienen de distintos sistemas.

> ⚠️ Por ejemplo, puede que haya diferencias entre las métricas de ingresos y ticket promedio registradas en el OMS y Desempeño de Ventas. Esto se debe a que Desempeño de Ventas considera el valor de los ítems, mientras que el OMS también toma en cuenta descuentos, valor de envío, impuestos y promociones en el pedido, lo que puede aumentar o disminuir el valor final.

* **Pedidos e ingresos:** los datos sobre pedidos e ingresos proceden del OMS, el Sistema de Gestión de Pedidos de VTEX, e incluyen los pedidos realizados a través de todos tus canales de venta.
* **Sesiones:** los datos de navegación proceden del sistema interno de la plataforma que captura las sesiones de los usuarios en el storefront de las tiendas VTEX. Las sesiones están representadas por el conjunto de páginas vistas a las que accede un mismo usuario cuando navega por tu tienda online, sin tener en cuenta marketplaces, aplicaciones, VTEX Sales App y cualquier otro canal de venta.

### Restricciones de datos

No recopilamos datos de navegación de storefronts que no son de VTEX ni de sellers que únicamente anuncian productos en marketplaces externos. Por este motivo, los tipos de gráficos presentes en el [Monitoreo](#monitoreo) pueden no estar disponibles, dependiendo de si recopilamos los datos de navegación de tu tienda, o no.

Aunque nuestro objetivo es presentar como máximo un 3 % de divergencia en los datos del OMS de VTEX, a veces puedes encontrar discrepancias entre los datos que aparecen en Vista general y el OMS. 

### Actualización de datos

Los datos provenientes de páginas diferentes presentan frecuencias de actualización distintas. Los gráficos de la sección [Monitoreo](#monitoreo) se actualizan en hasta tres minutos, según la [Vista](#vista), mientras que las demás secciones de la página se actualizan cada 15 minutos. La etiqueta <i class='fas fa-circle-notch blue-color'></i> 1 min muestra la última vez que se actualizaron los datos de la página. 

## Analizar los resultados y el estado de la operación

Puedes utilizar diferentes  [métricas](#metricas) y gráficos de [monitoreo](#monitoreo) para analizar resultados, en función del aspecto que desees explorar. La siguiente tabla puede orientar tu análisis. Haz clic en cada una de las métricas de la tabla para obtener más información sobre su cálculo y funcionamiento. 

| Objetivo                | Métricas y gráficos a analizar                                                                                                                                                                                                                                                                |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Engagement de la acción | - [Nuevas sesiones](#monitoreo)<br>- [Productos más vendidos](#metricas)                                                                                                                                                                                                                                                 |
| Resultados financieros  | - [Ingresos capturados](#monitoreo) <br>- [Ticket promedio](#metricas) <br>- [Productos con mayores ingresos](#metricas)                                                                                                                                                                                                               |
| Conversión              | - [Tasa de conversión](#metricas) <br>- [Embudo de ventas](#embudo-de-ventas) <br>- [Pedidos capturados](#monitoreo), comparado con el número de Pedidos cancelados. Los resultados obtenidos pueden guiar a tu equipo a identificar aquellos problemas operativos en el fulfillment o atención al cliente que causaron los pedidos cancelados. |

> ℹ️ Importante: mientras que los gráficos de Monitoreo se actualizan en hasta tres minutos, las Métricas se actualizan cada quince minutos, lo que puede influir en tu análisis de resultados. Más información en [Actualización de datos](#atualizacion-de-datos).

### Analizar resultados de campañas

Si deseas analizar los resultados de campañas, promociones o lanzamientos de nuevos productos que tuvieron lugar en una fecha pasada, sigue las instrucciones que se indican a continuación: 

1. Selecciona la **Tienda** donde se produjo la acción.
2. Selecciona la fecha de la campaña para [comparar el periodo](#comparar-el-periodo) con la fecha de hoy.
3. Selecciona la [vista](#vista) `Acumulado`.
4. Haz un seguimiento de las métricas hora a hora.

![ES Visão geral beta acumulado](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/dashboards-beta/vista-general-de-la-tienda-beta_2.png)

### Monitorear impactos de cambios en la tienda

Para mantener la estabilidad de tu operación es importante identificar si las implementaciones realizadas (deploys), campañas o cambios en la configuración impactaron negativamente sobre el número de pedidos, sesiones o conversión de clientes en los momentos inmediatamente posteriores a su aplicación.

Si deseas ver el impacto de los cambios realizados en tu tienda, para identificar un posible impacto negativo o cambios en la salud del negocio, sigue las instrucciones a continuación. 

1. Selecciona la **Tienda** donde se produjo la acción.
2. Selecciona la [visualización](#visualizacion) `Últimas horas`.
3. Evalúa el pulso en las métricas, o puntos de inflexión en el gráfico, que se han producido en las dos últimas horas. 
4. Compara los horarios de los puntos de inflexión con los cambios generados para identificar su causa e impacto. 

![ES Visão geral beta ultimas duas horas](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/dashboards-beta/vista-general-de-la-tienda-beta_3.png)

## Comparar periodos

Puedes filtrar datos en función del periodo seleccionado y comparar métricas de la tienda con fechas pasadas. Para comparar datos entre distintos periodos, en la parte superior de la página, selecciona la fecha junto a `Comparar hoy con:`, y luego elige una de las siguientes opciones:

| Periodo       | Inicio                                                                                         | Fin                                  |
|---------------|------------------------------------------------------------------------------------------------|--------------------------------------|
| Ayer          | 00:00 del día anterior                                                                         | 23:59 del día anterior               |
| Hace 7 días   | 00:00 de los ocho días anteriores a hoy                                                        | 23:59 del día anterior al día de hoy |
| Hace 28 días  | 00:00 del 29º día antes del día actual                                                         | 23:59 del día anterior al día de hoy |
| Personalizado | Marca en el calendario la Fecha de comparación deseada, con un límite de 13 meses en el pasado | 23:59 del día anterior al día de hoy |

## Vista

Al hacer clic en el botón `Vista:` dentro de la sección [Monitoreo](#monitoreo), es posible alternar entre las siguientes opciones:

* **Acumulado:** valor total acumulado en el día para cada métrica de monitoreo, desde las 00:00 hasta la última actualización. Los datos de esta vista se actualizan cada tres minutos. 
* **Últimas horas:** valor recibido durante las últimas dos horas para cada métrica de monitoreo. Esta vista no muestra la comparación con otros periodos ni el porcentaje de crecimiento o disminución de la métrica. Los datos de esta vista se actualizan cada minuto. 

También puedes filtrar por tienda si lo seleccionas en el menú desplegable.  

## Monitoreo

Cada gráfico contiene los siguientes elementos:

* El eje X muestra el horario, mientras que el eje Y muestra el valor de la métrica de monitoreo.
* Número absoluto de cada métrica, que puede ser `Acumulado` o `Últimas horas`. Más información en [Vista](#vista). 
* La línea azul más gruesa indica la evolución de los valores en el día de hoy. 
* La línea gris de puntos indica la tasa correspondiente al periodo comparado. 
* Al pasar el cursor por encima, el gráfico muestra el valor absoluto de cada periodo comparado.

La siguiente tabla describe los gráficos incluidos en la sección _Monitoreo_ de la página. 

| Métrica             | Descripción                                                                                                                                                                                          |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ingresos capturados | Valor total determinado por el valor final de los pedidos capturados, indicando la cantidad que la tienda ha recibido en ingresos y comparando el día de hoy con un periodo específico seleccionado. |
| Pedidos capturados  | Número de pedidos que tu tienda recibió en el día de hoy respecto al periodo seleccionado.                                                                                                           |
| Ticket promedio     | Promedio de los ingresos por pedido capturado hoy en comparación con el periodo seleccionado.                                                                                                        |
| Nuevas sesiones     | Número de nuevas visitas o interacciones en tu tienda, en función del tipo de [Vista](#vista) seleccionada. Esta métrica solo está disponible para tiendas que [recopilan datos de navegación](#restricciones-de-datos).                  |

## Métricas

![ES Visão geral beta metricas](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/dashboards-beta/vista-general-de-la-tienda-beta_4.png)

La siguiente tabla describe las métricas disponibles en el panel de la página de inicio. Todas las métricas se refieren a flujos de compra realizados en tiendas VTEX en el periodo seleccionado.

| Métrica                         | Descripción                                                                                                                                                                                                                                                                                                                                                          |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ticket promedio                 | Promedio del valor pagado en los pedidos capturados durante el periodo seleccionado. Esta métrica muestra, a través del ícono hacia arriba <i class='fa fa-caret-up'></i> y el ícono hacia abajo <i class='fa fa-caret-down'></i>, el porcentaje de aumento o disminución del ticket promedio.                                                                       |
| Tasa de conversión              | Se calcula dividiendo el número total de pedidos por el número total de sesiones en tu tienda. Al hacer clic en el ícono de la flecha <i class='fa fa-chevron-down'></i>, se expande el Embudo de ventas.                                                                                                                                                            |
| Productos con mayores ingresos  | Productos que generaron más ingresos en el periodo seleccionado. Indica el valor recibido en ingresos y un porcentaje que indica un aumento o disminución de los ingresos, comparando los periodos seleccionados. Al hacer clic en el ícono de la flecha <i class='fa fa-chevron-down'></i>, alternas esta métrica con la de Productos más vendidos.                 |
| Productos más vendidos          | Productos que vendieron más unidades en el periodo seleccionado. Refiere la cantidad de ítems vendidos y un porcentaje que indica un aumento o disminución de los ítems vendidos, comparando los periodos seleccionados. Al hacer clic en el ícono de la flecha <i class='fa fa-chevron-down'></i>, alternas esta métrica con la de Productos con mayores ingresos.  |

### Embudo de ventas

En la métrica _Tasa de conversión_, al hacer clic en el ícono de la flecha <i class='fa fa-chevron-down'></i>,, se expande el **Embudo de ventas**. Este gráfico muestra un seguimiento del volumen de sesiones en etapas intermedias del flujo de compra e identifica oportunidades para optimizar la tasa de conversión de la tienda. La siguiente tabla describe las etapas intermedias del flujo de compra.

| Etapa    | Descripción                                                        |
|----------|--------------------------------------------------------------------|
| Sesiones | Número total de visitas a tu tienda                                |
| Producto | El usuario ha accedido a una página de producto durante la sesión  |
| Carrito  | El usuario ha añadido un producto al carrito durante la sesión     |
| Envío    | El usuario rellenó la información sobre el envío durante la sesión |
| Pago     | Los datos de pago se rellenaron durante la sesión                  |
| Pedidos  | Pedidos que se realizaron durante la sesión                        |

Cada barra azul del gráfico representa el volumen de sesiones que han alcanzado una determinada etapa del flujo de compra. Este volumen se representa como un valor absoluto y como un porcentaje del número de sesiones, junto con los puntos porcentuales de aumento o disminución en el embudo de ventas. 
