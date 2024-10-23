---
title: 'Analytics'
id: 3JcuptYAkwr1GLZEM3IQ2m
status: ARCHIVED
createdAt: 2020-04-14T14:19:37.349Z
updatedAt: 2024-09-06T20:10:25.799Z
publishedAt: 
firstPublishedAt: 2020-04-15T00:39:35.727Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: reports-vtex-intelligent-search
locale: es
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugES: vtex-intelligent-search
---

**Analytics** es una pantalla en el VTEX Intelligent Search que organiza los datos relacionados con las búsquedas realizadas en la tienda y permite exportar esos datos en un archivo .csv.

Con esta información, podrá ver el desempeño de los resultados de la búsqueda y de los términos de búsqueda de [Autocomplete](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4gXFsEWjF7QF7UtI2GAvhL?&utm_source=autocomplete) y realizar acciones para mejorar el rendimiento, como configurar una redirección o registrar un nuevo sinónimo.

A continuación se indican los pasos necesarios para acceder a la página:

1. En el Admin VTEX, accede a **Storefront**, o escribe **Storefront** en la barra de búsqueda en la parte superior de la página.
2. En __Intelligent Search__, haz clic en __Analytics__. 

>ℹ️ La página **Analytics** es nativa en VTEX Intelligent Search. No se puede deshabilitar en el Admin.

## Datos

Los datos que componen el informe se actualizan cada 4 horas y contienen la siguiente información:

*   **Término de búsqueda**: contenido de las búsquedas realizadas. 
*   **Búsquedas**: número de búsquedas realizadas para un término específico. Cuando el cliente busca un término en la tienda y hace clic en otra página o actualiza la página, también se cuenta como una búsqueda. 
*   **Clics**: número total de clics en los resultados de búsqueda de un término. 
*   **Clics únicos**: número de clics en los resultados de búsqueda de un término, excluyendo los clics repetidos de un mismo usuario. Indica el número de personas que han hecho clic en un determinado resultado a partir de la búsqueda. 
*   **CTR _(click-through rate)_**: la tasa de clics según el total de búsquedas. Esta tasa se calcula de la siguiente forma: `(Clics/Búsquedas) * 100`. 
*   **Conversión**: tasa de conversión de los términos buscados. El cálculo de la conversión sigue la fórmula: `(Pedidos/Clics únicos) * 100`.  Es posible que la tasa de conversión sobrepase el 100 %, ya que toma en cuenta la cantidad de pedidos efectuados entre clics. Por ejemplo, es posible que el usuario realice más de un pedido utilizando el término _camisa_ y, en ese caso, la conversión sería mayor que el 100 %.
*   **Pedidos**: número de pedidos realizados desde la búsqueda. Para calcular esta métrica, consideramos que la búsqueda genera un pedido cada vez que, después buscar un término, el cliente hace clic en algún producto que aparece en los resultados y luego compra cualquier producto (no necesariamente el producto en el que hizo clic). 
*   **Ventas**: ingresos totales generados por los pedidos realizados a partir de la búsqueda. El cálculo sigue la misma lógica que la métrica de **Pedidos**, la diferencia es que el resultado refleja los ingresos en lugar del número de pedidos.

>ℹ️ Los datos mostrados en el informe se limitan a los 10 mil términos más buscados. Si deseas obtener los datos de búsqueda completos de tu tienda, tienes que [exportar el informe](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3JcuptYAkwr1GLZEM3IQ2m#exportacion).

Cuando se elige [exportar un informe](#exportacion), también existe la posibilidad de generarlo con las __métricas de embudo__. Si se selecciona esa opción, se agregarán 4 nuevas columnas al archivo:

* **ProductClicks**: dado un término de búsqueda, esta columna muestra los ID de los productos en los que se han hecho clic y el número de clics que se han producido, respectivamente. Por ejemplo: `3378|1`; `3659|2`; `4038|3` significa que se ha hecho clic 1 vez en el producto con ID 3378, se ha hecho clic 2 veces en el producto con ID 3659, y se ha hecho clic 3 veces en el producto con ID 4038. 
* **PositionClickAverage**: dado un término de búsqueda, esta columna muestra los ID de los productos en los que se ha hecho clic y su posición promedio en la lista de resultados. Por ejemplo: `4321|1` significa que el producto cuyo ID es 4321 ocupa el primer lugar como posición promedio en la lista de resultados de la búsqueda.
* **ProductsAddToCart**: dado un término de búsqueda, esta columna muestra los ID de los productos que han sido añadidos al carrito y la cantidad añadida, respectivamente. Por ejemplo: `3380|1`; `3910|2` significa que se ha añadido al carrito 1 unidad del producto con ID 3380, y que se han añadido 2 unidades del producto con ID 3910 al carrito. 
* **ProductsSold**: dado un término de búsqueda, esta columna muestra los ID de los productos que fueron vendidos y la cantidad vendida, respectivamente. Por ejemplo: `3500|1` significa que se ha vendido 1 unidad del producto con ID 3500. 

## Filtros

Como opción para restringir los datos, la pantalla **Analytics** permite combinar criterios. Consulte a continuación las opciones de filtros disponibles:

* **Búsqueda** o **Autocomplete** 
* **Con resultados** o **Sin resultados**: elegir entre las búsquedas que obtuvieron resultados o no. 
* **Todos**, **Celular** o **Computador**: limitar los dispositivos en los que se han realizado las búsquedas. 
* **Hoy**, **Ayer**, **Últimos 7 días**, **Últimos 30 días** y **Personalizar**: seleccionar el periodo a analizar. La opción **Personalizar** permite introducir fechas de inicio y de fin que se deben considerar. 

La página **Analytics** solo muestra información para un intervalo de un mes. Si desea acceder a los datos de un periodo de hasta 6 meses, debe [exportarlos en un archivo con formato CSV](#exportacion).

## Exportación

Para exportar un informe en formato CSV, debe seguir los pasos que se indican a continuación.

1. En la página **Storefront** > **Intelligent Search** > **Analytics**, haga clic en `Exportar`. 
2. Configure los filtros del informe que se generará. 
3. Elija si desea marcar la opción **Con métricas de embudo** o no. Si se selecciona, esta opción agrega las columnas **[ProductsClick, PositionClickAverage, ProductsAddToCart y ProductsSold](#datos)** al archivo, correlacionando la información sobre el número de clics y ventas con los ID de los productos buscados. 
4. A continuación, haga clic en `Exportar`. 
5. Espere a que el archivo esté disponible para su descarga. Salir de esta página no interrumpe el proceso. 
6. Haga clic en `Descargar`. 

>ℹ️ El archivo permanece disponible para descarga durante 48 horas.

El informe CSV descargado tiene dos tablas. La primera tabla, que se muestra a continuación, contiene información sobre los términos de búsqueda y las métricas de embudo (desde la columna **ProductsClick** hasta la columna **ProductsSold**), si se ha seleccionado esa opción.

![search-report-term](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/vtex-intelligent-search/informes-vtex-intelligent-search_1.png)

La segunda tabla, que se muestra a continuación, muestra los datos del periodo seleccionado, mostrando la columna **Date**, que indica la fecha de la búsqueda.

![search-report-date](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/vtex-intelligent-search/informes-vtex-intelligent-search_2.png)
