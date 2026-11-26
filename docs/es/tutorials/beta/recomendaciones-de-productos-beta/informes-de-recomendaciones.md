---
title: 'Informes de recomendaciones (beta)'
createdAt: 2026-09-17T13:00:00.000Z
updatedAt: 2026-09-17T13:00:00.000Z
contentType: tutorial
productTeam: Intelligent Search
slugEN: recommendations-reports
locale: es
---

> ℹ️ Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por el momento solo tienen acceso a ella algunos clientes seleccionados. Si ya eres cliente de VTEX y deseas adoptar esta funcionalidad en tu negocio, ponte en contacto con nuestro [Soporte comercial](https://help.vtex.com/es/docs/tracks/soporte-comercial). Pueden aplicarse cargos adicionales. Si aún no eres cliente, pero te interesa esta solución, llena el [formulario de contacto](https://vtex.com/es-mx/contacto/).

En el Admin VTEX, la pestaña **Informes** dentro de **Recomendaciones** muestra la lista de informes sobre el desempeño de las estrategias de recomendación de productos de la tienda. A diferencia del [dashboard de recomendaciones](https://help.vtex.com/es/docs/tutorials/dashboard-de-recomendaciones), que muestra datos en tiempo real y filtrables, los informes son una captura estática de un periodo y se pueden descargar.

El recurso está disponible para todos los clientes con las [Recomendaciones de productos](https://help.vtex.com/es/docs/tutorials/recomendaciones-de-productos-beta) activas en la tienda.

Para acceder en el Admin VTEX, navega a _Storefront > Recomendaciones_ y haz clic en la pestaña **Informes**.

![informes-de-recomendaciones](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/relatorios-de-recomendacoes_1.png)

## Requisitos

- Tener activada en la tienda la funcionalidad de [Recomendaciones de productos](https://help.vtex.com/es/docs/tutorials/recomendaciones-de-productos-beta).
- Tener implementadas en la tienda [estrategias de recomendación](https://help.vtex.com/es/docs/tutorials/recomendaciones-de-productos-beta#estrategias-de-recomendacion).
- Tener un [rol](https://help.vtex.com/es/docs/tutorials/roles) con los siguientes [recursos de License Manager](https://help.vtex.com/es/docs/tutorials/recursos-del-license-manager):

  | Nombre del recurso           | Clave del recurso (resource_key) | Descripción                                                                            |
  | :--------------------------- | :------------------------------- | :------------------------------------------------------------------------------------- |
  | View Recommendations         | `ViewRecommendations`            | Permite ver la lista de recomendaciones en el Admin.                                   |
  | View Recommendations metrics | `ViewRecommendationsMetrics`     | Permite ver las métricas de recomendaciones en el Admin, incluida la pestaña Informes. |

## Frecuencia de los informes

Los informes se generan de tres formas:

- **Semanal**: se genera automáticamente cada lunes y cubre los 7 días anteriores.
- **Mensual**: se genera automáticamente el día 1 de cada mes y cubre el mes anterior.
- **Bajo demanda**: se genera manualmente en cualquier momento para cualquier periodo personalizado.

En la pestaña **Informes** puedes realizar las siguientes acciones:

- [Crear informe](#crear-informe)
- [Descargar informe](#descargar-informe)

La pestaña presenta la siguiente información en una tabla:

| Columna               | Descripción                                                                                                                                          |
| :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Periodo**           | Rango de fechas que cubre el informe.                                                                                                                |
| **Fecha de creación** | Cuándo se generó el informe.                                                                                                                         |
| **Status**            | Status del informe: <ul><li>**Creando:** en procesamiento.</li><li>**Disponible:** listo para descargar.</li><li>**Visto:** ya descargado.</li></ul> |

Si la tienda todavía no tiene ningún informe generado, la pestaña muestra el mensaje **Aún no hay informes**, junto con el botón para [crear informe](#crear-informe).

## Crear informe

Puedes crear un informe para un periodo personalizado.

1. En el Admin VTEX, accede a **Storefront > Recomendaciones**, o ingresa **Recomendaciones** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en la pestaña **Informes**.
3. Haz clic en **Crear informe**.
4. En la ventana **Crear informe**, selecciona uno de los periodos predefinidos (**Ayer**, **Últimos 7 días** o **Últimos 28 días**) o define un rango personalizado en **Fecha de inicio**.

   ![crear-informe](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/relatorios-de-recomendacoes_2.png)

5. Haz clic en `Crear`.

El nuevo informe se muestra en la lista con el status **Creando** mientras se procesa.

## Descargar informe

Puedes descargar cualquier informe con status **Disponible** o **Visto**.

En la fila del informe deseado, haz clic en el ícono de descarga <i class="fas fa-download"></i> para guardarlo en tu dispositivo.

## Notificaciones por email

Cuando se crea un informe automático (semanal o mensual), VTEX envía una notificación por email a las direcciones configuradas en la cuenta. De esta forma no es necesario acceder al Admin para saber que hay un nuevo informe disponible.

## Estructura del informe

El informe se genera en PDF. El idioma, la moneda de los valores monetarios y los destinatarios de las notificaciones por email se definen durante la activación de la funcionalidad en la tienda. Para cambiar estas preferencias, ponte en contacto con el [Soporte comercial](https://help.vtex.com/es/docs/tracks/soporte-comercial).

El informe tiene las siguientes secciones:

### Encabezado

Identifica la tienda y el periodo cubierto, seguido de un resumen con los ingresos influenciados, el número de pedidos, las vistas y los clics totales generados por las estanterías de productos de recomendación en el periodo.

### Métricas consolidadas

| Métrica                                    | Descripción                                                                                               |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| Ingresos vía vitrinas                      | Ingresos atribuidos a los ítems recomendados.                                                             |
| Pedidos vía vitrinas                       | Pedidos influenciados por las recomendaciones.                                                            |
| Vistas                                     | Productos recomendados vistos.                                                                            |
| GMV total de la tienda                     | Ingresos totales de la tienda (canal propio).                                                             |
| Pedidos totales de la tienda               | Pedidos completados en el periodo.                                                                        |
| Tasa de vistas                             | Promedio de la tasa de vistas de todas las estanterías de productos.                                      |
| Participación en los ingresos de la tienda | Porcentaje de los ingresos totales de la tienda (GMV) que provienen de las recomendaciones.               |
| Participación en los pedidos de la tienda  | Proporción de pedidos influenciados por recomendaciones en relación con el total de pedidos de la tienda. |
| Clics                                      | Clics en productos recomendados.                                                                          |
| Ticket promedio de la tienda               | Valor promedio por pedido en la tienda.                                                                   |
| Conversión por clic                        | Promedio de la conversión por clic de todas las estanterías de productos.                                 |

### Ingresos por estantería de productos

Gráfico con la participación de cada estantería de productos en los ingresos totales generados por las recomendaciones en el periodo.

### Rendimiento por estantería de productos

Tabla con el rendimiento de cada estantería de productos en el periodo: tasa de vista, tasa de clics, conversión por clic y ventas.

### Top 5 productos por estantería de productos

Para cada estantería de productos, los 5 productos de mejor rendimiento en el periodo, con ingresos y número de compras.

### Producto estrella del periodo

Destaca el producto que está entre los más vendidos de al menos dos estanterías de productos en el periodo, con ingresos totales, número de compras y en cuántas estanterías de productos está entre los más vendidos. Esta sección solo se muestra cuando algún producto cumple con este criterio.

### Insights y recomendaciones

Tarjetas generadas automáticamente, cada una con un breve análisis y una sugerencia de siguiente paso. Las tarjetas se marcan como **Destacado**, **Atención** u **Oportunidad**.

Ejemplos de análisis: qué estantería de productos lidera en ingresos, cuál tiene la mejor conversión por clic y cuáles tienen muchas vistas pero pocos clics.

### Pie de página

Indica el periodo cubierto, la fecha de generación del informe y una notificación de confidencialidad.

## Más información

- [Recomendaciones de productos](https://help.vtex.com/es/docs/tutorials/recomendaciones-de-productos-beta)
- [Dashboard de recomendaciones (beta)](https://help.vtex.com/es/docs/tutorials/dashboard-de-recomendaciones)
- [Crear lista de recomendaciones (beta)](https://help.vtex.com/es/docs/tutorials/crear-lista-de-recomendaciones)
