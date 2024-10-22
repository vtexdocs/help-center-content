---
title: 'Interpretando los datos de la barra de pedidos  en la pantalla de Todos los Pedidos'
id: tutorials_7004
status: ARCHIVED
createdAt: 2017-04-27T21:48:24.142Z
updatedAt: 2023-03-23T19:59:28.692Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:19.805Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: interpreting-the-data-of-the-oms-order-bar
locale: es
legacySlug: interpretando-los-datos-de-la-barra-de-pedidos-del-oms
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

La plataforma VTEX ofrece una manera sencilla de acompañar la evolución del número de pedidos cerrados en su tienda. 

El siguiente conjunto de datos es presentado en la pantalla de __Todos los pedidos__ de la sección __Gestión de Pedidos__, trayendo información útil para el monitoreo de pedidos:

- Pedidos hechos __hoy__ hasta el horario actual;
- Pedidos hechos __ayer__ hasta el mismo horario;
- Pedidos hechos el mismo día de la __semana pasada__, hasta el mismo horario;
- Pedidos hechos el mismo día del __año pasado__, hasta el mismo horario.

Al lado de cada uno de esos valores, se puede ver un porcentaje que representa la variación relativa a los pedidos de hoy.

![order-metric-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/All orders/interpretando-los-datos-de-la-barra-de-pedidos-del-oms_1.png)

En el screenshot de las métricas arriba, podemos ver la siguiente información:

- Hoy la tienda ha recibido 2464 pedidos hasta las 20h50;
- Ayer fueron 2176 pedidos hasta esa misma hora;
- Y el mismo día de la semana pasada, también hasta las 20h50, hubo 1856 pedidos;
- Finalmene, en relación a un año atrás, hubo un incremento expresivo en el número de pedidos: el mismo día del año pasado, hasta la misma hora, fueron 1425 pedidos, contra los 2464 de este año.

>ℹ️ El cálculo de pedidos realizados en el **año pasado** se hace restando 52 semanas del día actual. De esta forma, se mantiene el día de la semana. Por ejemplo: el día 24/noviembre/2017 se comparará con el día 25/noviembre/2016, donde ambas fechas son el viernes.

El ranking ubicado en la esquina derecha de la barra con esos datos muestra la posición de la tienda entre todas las tiendas VTEX, con la métrica al lado indicando la evolución entre ayer y hoy.

La barra no muestra la posición exacta de las tiendas que están en las 5 primeras posiciones: para éstas, el número mostrado será siempre “Top 5”.

Para todos los datos de variaciones de pedidos y también para los números de evolución en el ranking, el color verde indica un resultado positivo; azul, neutro; y rojo, negativo.

_Importante: si la comparación de pedidos se hace con base en 0 pedidos en el pasado, la variación es del 0%._
