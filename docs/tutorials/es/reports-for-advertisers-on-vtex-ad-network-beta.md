---
title: 'Informes para anunciantes en VTEX Ad Network (Beta)'
id: 1xjGaQR8dDyS8J8x9vuHcl
status: PUBLISHED
createdAt: 2024-08-09T21:22:13.442Z
updatedAt: 2024-08-22T19:35:17.136Z
publishedAt: 2024-08-22T19:35:17.136Z
firstPublishedAt: 2024-08-09T21:56:08.145Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slug: informes-para-anunciantes-en-vtex-ad-network-beta
locale: es
legacySlug: informes-para-anunciantes-en-vtex-ad-network-beta
subcategory: 2AksvvAtAsbAfE7HsBIVDU
---

<div class="alert alert-info">
  <p>VTEX Ad Network está en fase beta, lo que significa que estamos trabajando para mejorarla. Si ya eres cliente de VTEX y deseas adoptar esta funcionalidad en tu empresa, ponte en contacto con el equipo de <a href="https://help.vtex.com/es/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ">soporte comercial</a>. Si aún no eres cliente, pero te interesa esta solución, rellena el <a href="https://vtex.com/mx-es/contacto/">formulario de contacto</a>.</p>
</div>

[VTEX Ad Network (Beta)](https://help.vtex.com/es/tutorial/vtex-ad-network-beta--2cgqXcBuJmXN2livQvClur) te permite anunciar productos de tu marca en storefronts de retailers VTEX que tengan tu producto en su catálogo.

Para empezar a anunciar en VTEX Ad Network, debes ponerte en contacto con el [soporte comercial](https://help.vtex.com/es/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ) y solicitar la instalación de la app VTEX Ad Network en tu cuenta VTEX.

Si ya eres anunciante de VTEX Ad Network, consulta este artículo sobre cómo generar informes en formato CSV para realizar un seguimiento del desempeño de tus campañas.

## Crear informe

Sigue las instrucciones a continuación para generar un nuevo informe de VTEX Ad Network:

1. En el Admin VTEX, accede **Ad Network > Informes**.
2. Haz clic en `Crear informe`.
3. Rellena el formulario:

    * **Tipo de informe:** opción de informe a generar, que puede ser:
        * [Campaña](#informes-de-campanas)
        * [Producto](#informes-de-productos)
        * [Término de búsqueda por campaña](#informes-de-terminos-de-busqueda-por-campana)
        * [Término de búsqueda por producto](#informes-de-terminos-de-busqueda-por-producto)

        Los informes de términos de búsqueda tienen un límite de 100.000 registros.

    * **Agrupación de datos: **cómo se muestran los datos en el informe generado.

        Para los informes de [Campaña](#informes-de-campanas) y [Producto](#informes-de-productos), puedes elegir una de las opciones siguientes:

        * **Consolidado:** una fila por entidad. Por ejemplo, cada campaña solo tendrá una fila.
        * **Diario:** una fila diaria por entidad. Por ejemplo, cada campaña tendrá una fila para cada día.

        Para los informes de [Término de búsqueda por campaña](#informes-de-terminos-de-busqueda-por-campana) o [Término de búsqueda por producto](#informes-de-terminos-de-busqueda-por-producto), solo está disponible la agrupación **Consolidado**.

    * **Periodo:** rango de tiempo a considerar en el informe.
4. Haz clic en `Crear informe`.

Después de algunos minutos, todos los informes generados estarán disponibles en formato CSV para descargar accediendo a **Ad Network > Informes **.

Para descargar un informe, haz clic en `Descargar` en la fila del informe en la lista. También puedes utilizar la barra de búsqueda y los filtros disponibles para encontrar el informe deseado.

<!--- image --->

### Informes de campañas

Consulta a continuación los datos disponibles en los informes de campañas:

| Columna | Descripción |
|---|---|
| `date_from` | Fecha de inicio del periodo de referencia, en formato `AAAA-MM-DD`. Esta columna solo se muestra en informes con agrupación de tipo **Consolidado**. |
| `date_to` | Fecha de fin del periodo de referencia, en formato `AAAA-MM-DD`. Esta columna solo se muestra en informes con agrupación de tipo __Consolidado__. |
| `date` | Fecha en formato `AAAA-MM-DD`. Esta columna solo se muestra en informes con agrupación de tipo __Diario__. |
| `campaign_id` | ID de la campaña. |
| `campaign_name` | Nombre de la campaña. |
| `type` | Tipo de campaña. |
| `status` | Status de la campaña, que puede ser __active__ (activa), __paused__ (pausada) o __expired__ (expirada). |
| `campaign_start` | Fecha y hora de inicio de la campaña en formato `AAAA-MM-DD HH:MM:SS`, en la zona horaria UTC+0. |
| `campaign_end` | Fecha y hora de fin de la campaña en formato `AAAA-MM-DD HH:MM:SS`, en la zona horaria UTC+0. |
| `budget` | Presupuesto de la campaña. |
| `impressions` | Número de veces que los anuncios se mostraron en la página. |
| `views` | Número de veces que los anuncios fueron efectivamente vistos. VTEX Ad Network cuenta una vista cuando se produce una impresión de anuncio y, si es necesario, el usuario desplaza la página lo suficiente como para visualizar al menos el 50 % del área del anuncio durante un segundo. |
| `clicks` | Número de clics en anuncios. VTEX Ad Network descarta clics en el mismo producto que ocurran en menos de un minuto entre sí. |
| `ctr` | Tasa de clics (CTR), que se calcula dividiendo el número de clics entre el número de vistas. |
| `spent` | Presupuesto gastado hasta la fecha. |
| `orders` | Número de pedidos procedentes de clics en anuncios. |
| `units_sold` | Número de unidades de productos vendidos a partir de anuncios de esa campaña. |
| `ad_sales` | Ingresos totales de ventas. |
| `acos` | Costo publicitario de ventas (ACOS), que se calcula dividiendo los gastos de la campaña entre los ingresos. |
| `roas` | Retorno de la inversión publicitaria (ROAS), que se calcula dividiendo los ingresos de la campaña entre los gastos. |

### Informes de productos

Consulta a continuación los datos disponibles en los informes de productos:

| Columna | Descripción |
|---|---|
| `date_from` | Fecha de inicio del periodo de referencia, en formato `AAAA-MM-DD`. Esta columna solo se muestra en informes con agrupación de tipo **Consolidado**. |
| `date_to` | Fecha de fin del periodo de referencia, en formato `AAAA-MM-DD`. Esta columna solo se muestra en informes con agrupación de tipo __Consolidado__. |
| `date` | Fecha en formato `AAAA-MM-DD`. Esta columna solo se muestra en informes con agrupación de tipo __Diario__. |
| `campaign_id` | ID de la campaña. |
| `campaign_name` | Nombre de la campaña. |
| `ean` | Código EAN, que corresponde al código de barras del producto. |
| `product_name` | Nombre del producto. |
| `impressions` | Número de veces que los anuncios se mostraron en la página. |
| `views` | Número de veces que los anuncios fueron efectivamente vistos. VTEX Ad Network cuenta una vista cuando se produce una impresión de anuncio y, si es necesario, el usuario desplaza la página lo suficiente como para visualizar al menos el 50 % del área del anuncio durante un segundo. |
| `clicks` | Número de clics en anuncios. VTEX Ad Network descarta clics en el mismo producto que ocurran en menos de un minuto entre sí. |
| `ctr` | Tasa de clics (CTR), que se calcula dividiendo el número de clics entre el número de vistas. |
| `cpc` | El costo promedio por clic (CPC), que corresponde al número promedio de ofertas ganadas para ese producto. |
| `spent` | Presupuesto gastado hasta la fecha. |
| `orders` | Número de pedidos procedentes de clics en anuncios. |
| `units_sold` | Número de unidades de productos vendidos a partir de anuncios de esa campaña. |
| `ad_sales` | Ingresos totales de ventas. |
| `acos` | Costo publicitario de ventas (ACOS), que se calcula dividiendo los gastos de la campaña entre los ingresos. |
| `roas` | Retorno de la inversión publicitaria (ROAS), que se calcula dividiendo los ingresos de la campaña entre los gastos. |
| `conversion_rate` | Tasa de conversión, que se calcula dividiendo los clics entre las compras. |

### Informe de términos de búsqueda por campaña

Los informes de términos de búsqueda por campaña tienen un límite de 100.000 registros. Consulta a continuación la información disponible:

| Columna | Descripción |
| :---- | :---- |
| `date_from` | Fecha de inicio del periodo de referencia, en formato `AAAA-MM-DD`. |
| `date_to` | Fecha de fin del periodo de referencia, en formato `AAAA-MM-DD`. |
| `search_term` | Término buscado por el usuario. |
| `campaign_id` | ID de la campaña. |
| `campaign_name` | Nombre de la campaña. |
| `impressions` | Número de veces que los anuncios se mostraron en la página. |
| `views` | Número de veces que los anuncios fueron efectivamente vistos. VTEX Ad Network cuenta una vista cuando se produce una impresión de anuncio y, si es necesario, el usuario desplaza la página lo suficiente como para visualizar al menos el 50 % del área del anuncio durante un segundo. |
| `clicks` | Número de clics en anuncios. VTEX Ad Network descarta clics en el mismo producto que ocurran en menos de un minuto entre sí. |
| `ctr` | Tasa de clics (CTR), que se calcula dividiendo el número de clics entre el número de vistas. |
| `orders` | Número de pedidos procedentes de clics en anuncios. |
| `units_sold` | Número de unidades de productos vendidos a partir de anuncios de esa campaña. |
| `ad_sales` | Ingresos totales de ventas. |
| `conversion_rate` | Tasa de conversión, que se calcula dividiendo los clics entre las compras. |

### Informe de términos de búsqueda por producto

Los informes de términos de búsqueda por producto tienen un límite de 100.000 registros. Consulta a continuación la información disponible:

| Columna | Descripción |
| :---- | :---- |
| `date_from` | Fecha de inicio del periodo de referencia, en formato `AAAA-MM-DD`. |
| `date_to` | Fecha de fin del periodo de referencia, en formato `AAAA-MM-DD`. |
| `search_term` | Término buscado por el usuario. |
| `campaign_id` | ID de la campaña. |
| `campaign_name` | Nombre de la campaña. |
| `ean` | Código EAN, que corresponde al código de barras del producto. |
| `product_name` | Nombre del producto. |
| `impressions` | Número de veces que los anuncios se mostraron en la página. |
| `views` | Número de veces que los anuncios fueron efectivamente vistos. VTEX Ad Network cuenta una vista cuando se produce una impresión de anuncio y, si es necesario, el usuario desplaza la página lo suficiente como para visualizar al menos el 50 % del área del anuncio durante un segundo. |
| `clicks` | Número de clics en anuncios. VTEX Ad Network descarta clics en el mismo producto que ocurran en menos de un minuto entre sí. |
| `ctr` | Tasa de clics (CTR), que se calcula dividiendo el número de clics entre el número de vistas. |
| `orders` | Número de pedidos procedentes de clics en anuncios. |
| `units_sold` | Número de unidades de productos vendidos a partir de anuncios de esa campaña. |
| `ad_sales` | Ingresos totales de ventas. |
| `conversion_rate` | Tasa de conversión, que se calcula dividiendo los clics entre las compras. |

## Más información

* [Anunciar con VTEX Ad Network (Beta)](https://help.vtex.com/es/tutorial/anunciar-com-vtex-ad-network-beta--5WoXcJzHc7EQElpPjziqse)
* [VTEX Ad Network (Beta)](https://help.vtex.com/es/tutorial/vtex-ad-network-beta--2cgqXcBuJmXN2livQvClur)
