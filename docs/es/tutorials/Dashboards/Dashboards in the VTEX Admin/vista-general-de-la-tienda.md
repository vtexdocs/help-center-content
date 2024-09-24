---
title: 'Vista General de la Tienda'
id: P8ahguoRs0U3PzmXg2wuQ
status: PUBLISHED
createdAt: 2021-11-18T22:48:32.711Z
updatedAt: 2023-05-31T16:11:20.454Z
publishedAt: 2023-05-31T16:11:20.454Z
firstPublishedAt: 2021-11-18T22:53:28.982Z
contentType: tutorial
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: store-overview
locale: es
legacySlug: vista-general-de-la-tienda
subcategoryId: 1TIJqw8kV2Yok4iQe4SAkq
---

En la página de Vista general del Admin VTEX los propietarios de las tiendas pueden obtener una rápida visión general de las métricas clave que afectan a sus ingresos. A través de este panel, puedes seguir la evolución de tus ventas mediante el análisis de tendencia de pedidos, la tasa de conversión y los gráficos de embudo de ventas. Puedes acceder a esta herramienta en el Admin VTEX, haciendo clic en **Dashboards > Vista general** en el menú de navegación, o escribe *Vista general* en la barra de búsqueda en la parte superior de la página.

![Store Overview gif ES](//images.ctfassets.net/alneenqid6w5/4vKmiLmTVUtaxn5vzpX5xq/b91a459e41bac28866c1165ca8fcc208/Store_Overview_gif_ES.gif)

La página Vista General proporciona un resumen de su negocio con VTEX. Para un análisis más profundo de las métricas de su tienda, visite [Desenpeño de ventas](https://help.vtex.com/es/v4/docs/performance-de-vendas--6gx46RGRzWO8qgaVck7PRp).

## Datos

Las métricas de la página incluyen datos sobre pedidos y navegación. Estos datos se obtienen de sistemas diferentes.

- __Pedidos:__ los datos de los pedidos e ingresos provienen del OMS, o Sistema de gestión de pedidos de VTEX, e incluyen los pedidos realizados en todos los canales de venta.
- __Navegación:__ los datos de navegación provienen del sistema interno de la plataforma, el cual capta las sesiones de los usuarios en el storefront de las tiendas VTEX. Las sesiones se contabilizan como el conjunto de visualizaciones de las páginas a las que accedió un mismo comprador al navegar por tu ecommerce, sin considerar marketplaces, aplicaciones, VTEX Sales App o cualquier otro canal de venta.

No captamos datos de navegación para storefronts que no sean VTEX, ni tampoco de sellers que solo anuncian sus productos en marketplaces externos. Es por esto que los gráficos que aparecen en tu Vista general pueden variar, dependiendo de si captamos datos de navegación de tu tienda o no.

La tabla que figura a continuación muestra qué gráficos están incluidos en la página para cada escenario de captación de datos de la tienda.

| Captación de datos de la tienda   | Gráficos incluidos                                                                      |
|-----------------------------------|-----------------------------------------------------------------------------------------|
| Con datos de navegación completos | Análisis de tendencias de pedidos<br>Tasa de conversión<br>Embudo de ventas<br>Sesiones |
| Con datos de navegación parciales | Pedidos realizados<br>Pedidos cancelados<br>Embudo de ventas<br>Sesiones                |
| Sin datos de navegación           | Pedidos realizados<br>Pedidos cancelados<br>Categorías con mayores ingresos             |

Aunque intentamos presentar una divergencia de un 3% como máximo con los datos del OMS de VTEX, es posible que a veces encuentres discrepancias entre los datos que se informan en la Vista general y en el OMS. Para que la página sea ágil y se actualice diariamente, es necesario almacenar esos datos en distintos grupos que se dividen en datos “online” o de corto plazo (por ejemplo, las métricas que se acaban de filtrar), y datos de largo plazo (por ejemplo, los datos que se exportan por plantillas, que contienen más información). Estos grupos también se procesan en sistemas distintos, lo cual puede generar una diferencia entre los datos del OMS y los de la Vista general.

  ## Comparar períodos

La página se actualiza a cada hora, por lo que los usuarios pueden esperar un retraso de 10 a 80 minutos, según la hora a la que accedieron a la página. Esta página permite a los usuarios filtrar los datos por periodo y comparar las métricas actuales de su tienda con las anteriores. La etiqueta `Actualizado` muestra la última vez que se actualizaron los datos. 

Para comparar datos de diferentes periodos, en la parte superior de la página selecciona la fecha en el **primer menú desplegable**, y luego selecciona la segunda fecha en el **segundo menú desplegable**. Los filtros de fecha incluyen las siguientes opciones: 

| Periodo         | Comienza                                    | Termina                                                                                                                      |
|-----------------|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Hoy             | 00:00 del día actual                        | La última vez que se actualizaron los datos. Consulta la etiqueta `Actualizado` para ver cuándo fue la última actualización. |
| Ayer            | 00:00 del día anterior                      | 23:59 del día anterior                                                                                                       |
| Últimos 7 días  | 00:00 del octavo día anterior al día actual | 23:59 del día anterior al día actual                                                                                         |
| Últimos 28 días | 00:00 del 29º día anterior al día actual    | 23:59 del día anterior al día actual                                                                                         |

## Métricas
![Store overview Métricas ES](//images.ctfassets.net/alneenqid6w5/75FnGMAHaNQxfcHmKM7Jjf/fa0a742830add36b15347a667b46a740/Me__tricas_ES.png)
La siguiente tabla describe las métricas clave disponibles en el panel de la página de inicio. Todas las métricas se refieren a los flujos de compra realizados en tiendas VTEX en un periodo de tiempo determinado.

| Métrica                          | Descripción                                                                                                                                                                                                                                                                             |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ingresos                         | El valor total de los pedidos aprobados.                                                                                                                                                                                                                                                |
| Pedidos                          | El número de pedidos realizados.                                                                                                                                                                                                                                                        |
| Ticket promedio                  | El valor promedio pagado por pedido.                                                                                                                                                                                                                                                    |
| Sesiones                         | El número de visitas a tu tienda. Esta métrica solo está disponible para las tiendas que captan datos de navegación.                                                                                                                                                                                                                                                       |
| Productos populares sin stock    | Productos muy vendidos de tu catálogo que están con bajo stock. Al hacer clic en esta métrica se abrirá una ventana con una lista de productos sin stock. Al hacer clic en un ítem, serás redirigido a la página de Gestión del stock de ese producto, donde puedes actualizar su stock. |
| Pedidos con pago en autorización | Pedidos que no se han realizado por problemas de autorización de pago. Al hacer clic en esta métrica, se te redirige a la página Transacciones para que revises las autorizaciones de pago pendientes.                                                                                   |
| Pedidos en la última hora        | La cantidad de pedidos realizados en tu tienda en la última hora. Al hacer clic en esta métrica, se te redirige a la página Todos los pedidos.                                                                                                                                           |

## Productos con mayores ingresos / Productos con más unidades vendidas

![Store overview Growing products ES](//images.ctfassets.net/alneenqid6w5/5J5U85LjLuTt6MRFSaisZG/71288c48523af26b98d46501a1822105/Store_overview_Growing_products_ES.jpg)

Este componente muestra tus productos más rentables y los productos con mayor número de unidades vendidas en el periodo seleccionado. 

Puedes alternar entre estas dos opciones haciendo clic en el título o en el ícono <i class="fas fa-chevron-down"></i>. Más información sobre las listas:

- **Productos con mayores ingresos:** los productos que han generado los mayores ingresos en el periodo seleccionado. Indica el valor recibido en ingresos y un porcentaje que muestra el aumento o la disminución en los ingresos, comparando los periodos seleccionados.  
- **Productos con más unidades vendidas:** los productos con más unidades vendidas en el periodo seleccionado. Indica la cantidad de ítems vendidos y un porcentaje que muestra el aumento o la disminución de los ítems vendidos, comparando los periodos seleccionados.

## Pedidos realizados
![Store overview Pedidos realizados EN](//images.ctfassets.net/alneenqid6w5/54DyQfUdOlf3VZdwIUdQjT/fab0eca29780027e7eef5a53ccdc803b/Pedidos_realizados_EN.png)

Este gráfico muestra el número de pedidos que recibió la tienda en el periodo seleccionado. La línea azul más gruesa indica los pedidos que se realizaron en el periodo más reciente. La línea gris más delgada indica los pedidos que se realizaron en el periodo que estás comparando. Al pasar el *mouse* sobre las líneas, el gráfico muestra el número de pedidos captados en cada fecha.

## Pedidos cancelados
![Store overview Pedidos cancelados PT](//images.ctfassets.net/alneenqid6w5/2RUKzEeb2SvpktBvQJoUQk/5a3f4d78000475bae4d2a62ec1c7c4bd/Pedidos_cancelados_PT.png)

Este gráfico muestra el número de pedidos cancelados en la tienda en el periodo seleccionado. La línea azul más gruesa indica los pedidos cancelados en el periodo más reciente. La línea gris más delgada indica los pedidos cancelados en el periodo que estás comparando. Al pasar el *mouse* sobre las líneas, el gráfico muestra el número de pedidos cancelados en cada fecha.

## Análisis de tendencia de pedidos

![Store overview Order trend ES](//images.ctfassets.net/alneenqid6w5/5c3eFasw5spgqeynh4Q9c5/0eafd1eeb6423749827c8cfec524858a/Store_overview_Order_trend_ES.jpg)

Este gráfico muestra la tendencia de pedidos de tu tienda, indicando el número de pedidos realizados por los compradores en el periodo seleccionado.

La línea indica la curva de pedidos para el período seleccionado cada fecha. Al pasar el *mouse* por encima del gráfico, se muestra el valor de la métrica en un día u horario determinado. Las sombras alrededor de la curva de tendencia de pedidos son intervalos de confianza que indican cuál es el rango de pedidos esperados en cada fecha. La sombra más oscura es un intervalo con una confianza del 90%, mientras que la sombra más clara tiene una confianza del 99%. Los intervalos se calculan según los últimos 3 meses, y el algoritmo del gráfico tiene en cuenta la fecha y la hora para calcular la expectativa.

El número que aparece en la parte superior del gráfico se refiere a los pedidos realizados en la última hora y se actualiza cada cinco minutos. La etiqueta que aparece en la parte superior del gráfico indica si los pedidos se están realizando a un ritmo `normal`, `bajo` o `alto` en comparación con el desempeño habitual de tu tienda para ese periodo. 

## Tasa de conversión

![Store overview Conversion rate ES](//images.ctfassets.net/alneenqid6w5/1S5WA2yR00R1GuBU0NoKaZ/92756d2a2a7f4165f4312f2c81bc08e6/Store_overview_Conversion_rate_ES.jpg)

Este gráfico muestra la tasa de conversión de tu tienda en los períodos seleccionados que quieres comparar. La tasa de conversión se calcula dividiendo el número total de pedidos por el número total de sesiones en tu tienda. La línea azul más gruesa indica la tasa de conversión para el periodo más reciente. La línea gris más delgada indica la tasa para el periodo que estás comparando. Al pasar el mouse por encima del gráfico, se visualiza la tasa de conversión para cada periodo comparado. El gráfico también indica el porcentaje (%) y los puntos porcentuales (p.p) de aumento o reducción de esta métrica. Al pasar el mouse por encima del gráfico, puedes ver el valor de esa métrica en momentos específicos. 

## Embudo de ventas

![Store overview sales funnel ES](//images.ctfassets.net/alneenqid6w5/3jSzBfJ4nQa8iI2f1opyds/d767479ae6fd2f51af5327b80527d883/Store_overview_sales_funnel_ES.jpg)

Este gráfico permite seguir el volumen de sesiones en las etapas intermedias del flujo de compra y ver oportunidades para optimizar la tasa de conversión de la tienda. La siguiente tabla describe las etapas intermedias del flujo de compra.

| Etapa                          | Descripción                                                                  |
|--------------------------------|------------------------------------------------------------------------------|
| Total de sesiones              | Número total de visitas a tu tienda                                          |
| Sesiones de página de producto | El usuario ha accedido a una página de producto durante la sesión            |
| Sesiones de carrito            | El usuario ha añadido un producto al carrito durante la sesión               |
| Sesiones de envío              | La información sobre el envío fue rellenada por el usuario durante la sesión |
| Sesiones de pago               | Los datos de pago se rellenaron durante la sesión                            |
| Pedido                         | Pedidos que se realizaron en la sesión                                       |

Cada barra azul del gráfico representa el volumen de sesiones que han alcanzado una determinada etapa del flujo de compra. Este volumen se representa como valor absoluto (arriba), y como porcentaje del número de sesiones (abajo), junto con los puntos porcentuales (p.p) de aumento o reducción en el embudo de ventas. Al pasar el mouse por encima del porcentaje, puedes ver más detalles sobre esa etapa intermedia.

## Categorías con mayores ingresos
![Categorias PT](//images.ctfassets.net/alneenqid6w5/1jkVQ63kTKC7EWYNpZ2M5i/7cf1e540189c28ec0d3286179d0d2774/Categorias_PT.png)

Este gráfico muestra las diez categorías de tu tienda que más ingresos generaron en el periodo seleccionado. La barra azul indica los ingresos generados en la fecha más reciente y la barra gris indica los ingresos generados en el periodo comparado. Al pasar el mouse sobre el gráfico, se visualiza la tasa de conversión para cada periodo comparado. Al hacer clic en el título del gráfico, es posible cambiar la vista a las __Categorías más vendidas por pedido__.

