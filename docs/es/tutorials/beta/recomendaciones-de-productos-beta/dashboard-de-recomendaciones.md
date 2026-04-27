---
title: 'Dashboard de recomendaciones (beta)'
id: 2QIexbD2FSXBxELUnFtg7g
status: PUBLISHED
createdAt: 2026-02-20T13:01:10.919Z
updatedAt: 2026-02-20T13:01:10.919Z
publishedAt: 2026-02-20T13:01:10.919Z
firstPublishedAt: 2025-06-27T20:41:49.041Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: recommendations-dashboard
legacySlug: dashboard-de-recomendacoes
locale: es
subcategoryId: 6WyZwZfn89IsnNFNkTAi8d
---

> ℹ️ Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por el momento solo tienen acceso a ella algunos clientes seleccionados. Si ya eres cliente VTEX y deseas adoptar esta funcionalidad en tu negocio, ponte en contacto con nuestro [Soporte comercial](es/docs/tracks/soporte-comercial). Pueden aplicarse cargos adicionales. Si aún no eres cliente, pero te interesa esta solución, llena el <a [formulario de contacto](https://vtex.com/es-mx/contacto/).

La página **Recomendaciones** presenta un dashboard que permite hacer seguimiento y analizar el desempeño de las estrategias de recomendación de productos de la tienda mediante métricas consolidadas y detalladas por estantería de productos.

Para acceder, en el Admin VTEX ve a _Storefront > Recomendaciones_.

## Requisitos

- Tener activada la funcionalidad de [Recomendaciones de productos](https://help.vtex.com/es/docs/tutorials/recomendaciones-de-productos-beta) en la tienda.
- Contar con [estrategias de recomendación](https://help.vtex.com/es/docs/tutorials/recomendaciones-de-productos-beta#estrategias-de-recomendacion) implementadas en la tienda.

## Información general

La parte superior de la página presenta el desempeño agregado de las estrategias de recomendación configuradas en la tienda. Los datos varían según el [periodo seleccionado para análisis y comparación](#seleccionar-periodo) y los [filtros definidos](#filtrar-informacion).

La línea continua representa el periodo actual seleccionado, mientras que la línea punteada representa el periodo de comparación.

![informaciones-generales-gif](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/recomendaciones-de-productos-beta/dashboard-recomendaciones_1.gif)

Haz clic en cada métrica para ver el gráfico correspondiente. El gráfico presenta la evolución de la métrica seleccionada a lo largo del periodo. Al pasar el mouse sobre el gráfico en una fecha específica, se muestran los datos de esa fecha.

Las métricas disponibles son:

| Métrica                 | Descripción                                                                                                                                                                                                                        | Información disponible al pasar el mouse sobre una fecha |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------- |
| **Conversión por clic** | Porcentaje de clics en recomendaciones que resultaron en pedidos.                                                                                                                                                  | Clics, Pedidos, Conversión por clic                      |
| **Tasa de vistas**      | Porcentaje de vistas de estanterías de recomendación en relación con el total de vistas de página. La estrategia se genera cada vez que se carga la página, pero no siempre se registra una vista. | Vistas, Impresiones, Tasa de vistas                      |
| **Tasa de clics**       | Tasa promedio de clics (CTR) en las recomendaciones.                                                                                                                                            | Clics, Vistas, Tasa de clics                             |
| **Ingresos totales**    | Valor total de ingresos generados a partir de interacciones con recomendaciones.                                                                                                                                   | Ingresos                                                 |

## Información sobre estanterías de productos

La tabla muestra el desempeño individual de cada estantería de recomendación configurada en la tienda. Los datos varían según el [periodo seleccionado](#seleccionar-periodo) y los [filtros definidos](#filtrar-informacion).

![informacoes-prateleiras](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/recomendaciones-de-productos-beta/dashboard-recomendaciones_2.png)

La página muestra la siguiente información sobre cada estantería de producto en una tabla:

| Columna             | Descripción                                                                                                                                                                        |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Estantería          | Nombre de la estantería de recomendación y su respectiva estrategia y contexto de visualización (por ejemplo, _home_, _pdp_, _cart_, _footer_). |
| Tasa de vistas      | Porcentaje de vistas de la estantería respecto a las vistas de la página en la que está insertada.                                                                 |
| Tasa de clics       | Porcentaje de clics en los productos de la estantería respecto al número de vistas.                                                                                |
| Conversión por clic | Porcentaje de clics en la estantería que resultaron en pedidos.                                                                                                    |
| Ventas              | Ingresos totales generados a partir de las interacciones con la estantería.                                                                                        |

### Ver detalles

Para visualizar el gráfico de desempeño de una estantería específica en el periodo seleccionado, sigue las instrucciones a continuación:

1. Haz clic en la fila de la estantería o en el menú ⋮.
2. Haz clic en **Ver detalles**.

![ver-detalhes](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/recomendaciones-de-productos-beta/dashboard-recomendaciones_3.png)

En la pantalla de detalles, también puedes:

- Cambiar el periodo seleccionado.
- Copiar el ID de la estantería mediante el menú ⋮ en la esquina superior derecha de la página.

### Copiar ID

Para copiar el identificador de una estantería de recomendación:

3. En la fila de la estantería o en la página de detalles de la estantería, haz clic en el menú ⋮.
4. Haz clic en **Copiar ID**.

El identificador puede ser utilizado para:

- Implementar la estrategia en el storefront.  
  Para más información, consulta la documentación del componente [Recommendation Shelf](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf) de Store Framework.
- Facilitar la identificación de la estrategia durante la solución de problemas o al contactar al equipo de Soporte.

## Seleccionar periodo de análisis

Para definir el periodo de análisis del dashboard, sigue las instrucciones a continuación:

1. Haz clic en el periodo definido en la esquina superior derecha de la página.

2. Elige una de las opciones disponibles:
   - **Ayer**
   - **Últimos 7 días**
   - **Últimos 28 días**
   - Fechas personalizadas en los campos **Actual** y **Comparación**

     El periodo de comparación puede cambiarse manualmente al llenar una fecha distinta en el campo **Comparación**. En ese caso, solo la duración del periodo debe ser la misma. El intervalo de fechas en sí puede ajustarse libremente.

     Si no se modifica, el periodo de comparación se definirá automáticamente como el periodo equivalente inmediatamente anterior. Ejemplo: al seleccionar **Últimos 7 días**, la comparación se hará con los 7 días anteriores al periodo seleccionado si no se especifica otro intervalo de fechas.

3. Haz clic en `Aplicar`.

![selecionar-periodo](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/recomendaciones-de-productos-beta/dashboard-recomendaciones_4.gif)

## Filtrar información

Puedes filtrar los datos mostrados en el dashboard por **Status** (_Activo_ o _Inactivo_) y **Tipo de campaña**:

- Más populares
- Sugerencias para ti
- Productos similares
- Comprados juntos
- Más vendidos
- Vistos recientemente
- Interacciones recientes
- Productos visualmente similares

Para aplicar filtros en el dashboard, sigue los pasos a continuación:

1. Haz clic en `Filtrar` en la esquina superior derecha de la página.
2. Haz clic en `Status` o `Tipo de campaña`.
3. Marca la opción deseada.
4. Haz clic en `Aplicar`.

Puedes combinar los filtros de **Status** y **Tipo de campaña**.

Para remover un filtro, repite los pasos 1 y 2 y haz clic en `Limpiar`.

![filtrar-informacoes](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/recomendaciones-de-productos-beta/dashboard-recomendaciones_5.gif)

## Más información

- [Recomendaciones de productos (beta)](https://help.vtex.com/es/docs/tutorials/recomendaciones-de-productos-beta)
- [Recommendation Shelf (Store Framework)](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf)
- [Integrating product recommendations in headless stores (Beta)](https://developers.vtex.com/docs/guides/integrating-product-recommendations-in-headless-stores)
- [Implementing product recommendations in FastStore](https://developers.vtex.com/docs/guides/implementing-product-recommendations-in-faststore)
