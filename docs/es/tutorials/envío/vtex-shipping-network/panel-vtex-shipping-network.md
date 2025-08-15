---
title: 'VTEX Shipping Network: Panel '
id: 51e8tx1IehiN4ZtURRWU92
status: PUBLISHED
createdAt: 2020-04-06T20:01:00.909Z
updatedAt: 2024-08-28T13:00:44.671Z
publishedAt: 2024-08-28T13:00:44.671Z
firstPublishedAt: 2020-04-16T21:37:18.831Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: vtex-shipping-network-dashboard
legacySlug: panel-vtex-log
locale: es
subcategoryId: 5n5MnINzWTQUX1I2EZl4Ib
---

> ⚠️ Atención: Esta funcionalidad se encuentra en fase beta abierta

VTEX Shipping Network utiliza los datos de rastreo de los pedidos directamente de las transportadoras, manteniéndolo a usted y a su cliente actualizados sobre el status de cada entrega. Los **paneles de VTEX Shipping Network** gestionan los datos obtenidos de VTEX Shipping Network, para que usted pueda extraer información inteligente para la gestión de su logística. 

El Admin de VTEX genera informes diarios sobre los pedidos generados en su tienda. Con estos datos podemos calcular valores de flete, valores pagados de los pedidos, paquetes transportados, status de los paquetes de los pedidos (entregados o no) y la fecha estimada de entrega. 

Los paneles permiten una visión gerencial de los costos de flete pagados a las transportadoras, y de los ingresos obtenidos de las tasas de flete que se cobran a los clientes de su tienda. También muestran la salud de la operación logística de su tienda, además de análisis sobre los resultados de sus integraciones. 

Para acceder a los paneles, en el Admin VTEX, escribe *Shipping Network* en la barra de búsqueda en la parte superior de la página.

## Resumen Financiero

Esta pestaña está destinada al seguimiento y supervisión del resultado financiero de su configuración Logística. Allí se puede extraer información para una gestión eficiente de su logística. La pestaña de Resumen Financiero permite:

- **Filtrar la visualización de datos financieros** por período deseado, o activando directamente el botón `Trimestre`. 

- **Exportar pedidos** en un archivo CSV dentro del período filtrado por el botón de la esquina superior derecha de la pantalla.

- Visualizar un **gráfico dinámico** con la relación entre la evolución financiera a lo largo del tiempo, dentro del período filtrado. Colocando el cursor sobre las líneas del gráfico, se puede ver en detalle el movimiento de *costo* e *ingresos* por día.

- Además de acompañar una serie de **indicadores de performance financiera**:

| Indicador Financiero               | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Costo del Flete x GMV**           | Compara el costo del flete calculado en el momento de checkout, con el GMV, que es el total que se pagó por pedido.                                                                                                                                                                                                                                                                                                                                                     |
| **Desempeño financiero**          | Muestra la relación entre el valor pagado en el checkout y el valor pagado a la transportadora.                                                                                                                                                                                                                                                                                                                                                                                   |
| **Ingresos Facturados Generales**         | Suma de todos los fletes pagados en el checkout. Cuánto de hecho su cliente pagó por el flete (independientemente de ser VTEX Shipping Network); es decir, se considera si tuvo un descuento en el flete o si fue flete gratis, por ejemplo.              
                                                                                                                                                                                                                                                                 |
| **Ingresos Facturados VTEX Shipping Network**    | Suma de todos los fletes pagados en el checkout. Cuánto de hecho su cliente pagó por el flete, filtrando apenas por transportadoras VTEX Shipping Network; es decir, se considera si tuvo un descuento en el flete o si fue flete gratis, por ejemplo.                                                                                                                                                                                                             |
| **Costo Proyectado General**        | Independientemente de ser VTEX Shipping Network o no, es la suma de los valores de flete estimados por el módulo de Inventario y Envío para todos los pedidos. Tiene flechas que indican el porcentaje de crecimiento o reducción de costos. La disminución de costos en este card (flecha hacia abajo) es una medida positiva para los resultados de una tienda.                                                                                                                                |
| **Costo Proyectado VTEX Shipping Network**     | Suma de los valores de flete estimados por el módulo de Inventario y Envío para todos los pedidos, filtrando apenas a transportadoras VTEX Shipping Network. Tiene flechas que indican el porcentaje de crecimiento o reducción de costos.  La disminución de costos en este card (flecha hacia abajo) es una medida positiva para los resultados de una tienda.                                                                                                                           |

* Estamos mejorando el **Costo Emitido vía CTE** y la **Diferencia de costos señalada** y actualmente no están disponibles.

## Rendimiento 

Es posible hacer seguimiento del rendimiento de las transportadoras configuradas en la logística de su tienda a través de una herramienta analítica. En la herramienta, puede ver la evolución del rendimiento de cada transportadora en particular y de las transportadoras VTEX Shipping Network en general.

En el cálculo del rendimiento, se consideran todos los paquetes que forman parte de las entregas. El panel de rendimiento agrega los resultados mensuales o trimestrales con base en los paquetes en vez de en las entregas, ya que un mismo pedido puede contener más de un paquete que a su vez pueden ser entregados por distintas transportadoras.

El rendimiento es el resultado porcentual del cálculo entre la relación de paquetes entregados a tiempo y el total de paquetes entregados. Por lo tanto, el cálculo del rendimiento solo toma en cuenta los paquetes entregados. Veamos:

![equation ES performance](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-shipping-network/panel-vtex-shipping-network_1.gif)

 La herramienta de rendimiento de VTEX Shipping Network permite:

- **Comprobar la evolución del rendimiento:** presenta un gráfico dinámico que muestra la evolución del rendimiento a lo largo del tiempo. 
- **Comprobar paquetes de VTEX Shipping Network:** muestra los datos agrupados de todos las transportadoras VTEX Shipping Network.
- **Comprobar el total de paquetes:** muestra el número absoluto de paquetes según el periodo filtrado.
- **Comprobar el** [rendimiento de las transportadoras](#rendimiento-de-las-transportadoras): muestra la tabla de rendimiento de todas las transportadoras que su negocio utiliza.
- [Exportar informe](#exportar-informe):exporta un archivo en formato CSV con los datos de las transportadoras.

Para hacer el seguimiento del rendimiento, en el Admin VTEX, escribe *Shipping Network* en la barra de búsqueda en la parte superior de la página. En el panel de VTEX Shipping Network encontrará la pestaña **Rendimiento**.

En la pestaña **Rendimiento**, podrá consultar el rendimiento trimestral. Para ver un mes específico, inhabilite la función **Trimestre** en la parte superior de la página y seleccione el mes para el que desea ver el análisis en el recuadro lateral.

### Rendimiento de las transportadoras

En la tabla de rendimiento de las transportadoras puede hacer un seguimiento del rendimiento de cada transportadora. La solución VTEX Shipping Network define el rendimiento ideal cuando el valor es mayor que 95%. 

También puede ver los pedidos **Facturados**, **En camino** (pedidos con un número de seguimiento registrado, que aún no han sido entregados y que no están atrasados), **Atrasados** (pedidos con un número de seguimiento registrado, que aún no han sido entregados y que están atrasados) y **Entregados**. 

Todas las transportadoras VTEX Shipping Network tienen un sello de verificación que aparece en la tabla de rendimiento. El sello se ve en la tabla de rendimiento como una marca de color rosa al lado de las transportadoras VTEX Shipping Network.

Es importante saber que si no se calculó el rendimiento de una transportadora en la plataforma significa que los datos de seguimiento no están integrados con VTEX Shipping Network. 

Para que se realice el cálculo de las transportadoras que no son VTEX Shipping Network, el _seller_ debe enviar los datos a través de una API de seguimiento proporcionada por la solución VTEX Shipping Network. En estos casos, cabe señalar que los datos del panel pueden ser inexactos, al no realizarse una validación de la entrega en el plazo indicado.

Para saber más sobre cómo realizar la integración, consulte la información en [Overview VTEX Shipping Network](https://developers.vtex.com/docs/api-reference/vtex-shipping-network-api) de nuestras API. 

### Exportar informe

Puede descargar el informe con los datos de las transportadoras y las entregas de los paquetes. Para exportar los datos de las transportadoras en una plantilla:

1. Haga clic en **EXPORTAR INFORME**.
2. Espere hasta recibir la plantilla por email.
3. Descargue la plantilla.

![Resumo de performance ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-shipping-network/panel-vtex-shipping-network_2.png)
