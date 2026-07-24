---
title: 'Métricas y atribución de VTEX Ads'
createdAt: '2026-05-04T10:00:00.000Z'
updatedAt: '2026-07-03T10:00:00.000Z'
contentType: tutorial
productTeam: Others
slugEN: vtex-ads-metrics-and-attribution
locale: es
---

[VTEX Ads](https://help.vtex.com/es/docs/tracks/retail-media) ofrece un conjunto de métricas para ayudar a anunciantes, publicadores y agencias de marketing a medir el rendimiento de las campañas y el retorno sobre la inversión en publicidad. Las métricas están disponibles en todos los dashboards de VTEX Ads como **tarjetas de métricas** en la parte superior de cada pantalla y como **columnas** en las tablas correspondientes.

Este artículo describe las métricas disponibles y el modelo de atribución que determina cómo la plataforma atribuye las conversiones a los anuncios.

> ℹ️ Para más información sobre la terminología de retail media, consulta el [Glosario de Retail Media](https://help.vtex.com/es/docs/tracks/glosario-de-retail-media).

## Métricas de desempeño

Las siguientes métricas describen el volumen, la eficiencia y el resultado directo de las campañas.

### Métricas base

| Métrica                                         | Definición                                                                                                                                                                                                                                                     | Fórmula                                         |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **Impresiones**                                 | Número de veces que el anuncio se mostró en la pantalla del usuario, independientemente de la visibilidad.                                                                                                                                     | -                                               |
| **Clics**                                       | Número de clics en el anuncio.                                                                                                                                                                                                                 | -                                               |
| **Vistas**                                      | Número de vistas efectivas del anuncio (impresiones que cumplieron los criterios de visibilidad).                                                                                                                           | -                                               |
| **CTR** (Click-through rate) | Tasa de clics. Mide el engagement del anuncio en relación con el volumen de impresiones.                                                                                                                                       | (Clics / Impresiones) × 100  |
| **Costo**                                       | Inversión total en anuncios en el periodo. Etiqueta que se muestra a los anunciantes. El publicador ve el mismo valor como **Ingresos de anuncios**.                                                           | -                                               |
| **Ingresos de anuncios**                        | Valor total recibido por el publicador de la publicación de anuncios en ese periodo. Etiqueta que se muestra a los publicadores. Se refiere al mismo valor de la etiqueta **Costo** vista por los anunciantes. | -                                               |
| **CPM** (Costo por mil)      | Costo promedio por 1000 impresiones.                                                                                                                                                                                                           | (Costo / Impresiones) × 1000 |

> ℹ️ En campañas de formatos cobrados por **CPM** (banner, banner en video y marcas patrocinadas), el total informado de **Vistas** puede superar al de **Impresiones** al alcanzar el **límite diario de presupuesto**. Este comportamiento es esperado y no indica un error en los informes.
>
> La definición de **Vistas** en la tabla anterior sigue siendo válida: son impresiones que cumplieron los criterios de visibilidad. En condiciones normales, representan un subconjunto de las impresiones.
>
> Bajo cobro por CPM, el recuento de **Impresiones** se valida en relación con el presupuesto, ya que impacta directamente el gasto de la campaña, y se detiene al alcanzar el límite diario. El recuento de **Vistas** no pasa por la misma validación y puede seguir registrándose incluso después de esa interrupción. Cuanto más cerca esté la campaña del límite, mayor tiende a ser la diferencia entre las métricas. Este comportamiento no aplica a **productos patrocinados**, que usan otro modelo de cobro.

### Conversiones e ingresos

| Métrica                                                 | Definición                                                                                                                                                                                            | Fórmula                                     |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **Conversiones**                                        | Número total de conversiones atribuidas al anuncio (clic + vista), aplicando la prioridad Clic > Vista. Cada conversión se atribuye una única vez. | -                                           |
| **Conversiones (clic)**              | Número de conversiones atribuidas exclusivamente por clic.                                                                                                                            | -                                           |
| **Ventas**                                              | Valor monetario total de las ventas atribuidas al anuncio.                                                                                                                            | -                                           |
| **Ingresos**                                            | Ingresos totales atribuidos directamente al anuncio. Considera las ventas de los productos anunciados, sin incluir ventas halo.                                       | -                                           |
| **ACOS** (Advertising Cost of Sales) | Proporción de los ingresos gastados en publicidad. Cuanto menor es el ACOS, más eficiente es la campaña.                                                              | (Costo / Ingresos) × 100 |

### Tasa de conversión

| Métrica                         | Definición                                                                                                                                                                           | Fórmula                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| **Tasa de conversión**          | Eficiencia de conversión del anuncio. Utiliza vistas como denominador para todos los formatos para mantener consistencia entre los tipos de anuncio. | (Conversiones / Vistas) × 100         |
| **Tasa de conversión por clic** | Eficiencia de conversión sobre las interacciones de clic. Disponible para todos los formatos como métrica complementaria.                            | (Conversiones por clic / Clics) × 100 |

> ℹ️ Las métricas que informan un recuento o un total monetario (impresiones, clics, vistas, conversiones, ventas, ingresos y costo) son medidas directas y no tienen fórmula derivada.

## Modelo de atribución

La **atribución** es el proceso de asociar una venta a una o más interacciones del usuario con el anuncio. VTEX Ads atribuye una conversión a un anuncio cuando el usuario interactúa con él y, posteriormente, realiza una compra que cumple con las reglas de atribución de la plataforma. Las siguientes reglas determinan qué interacción recibe la atribución y en qué plazo.

### Ventana de atribución

La ventana de atribución define el periodo máximo en el que una compra puede atribuirse a una interacción elegible con el anuncio. Después de ese periodo, la conversión no se contabiliza como resultado del anuncio. Cada formato usa sus propias ventanas:

| Formato                | Ventana de clic | Ventana de vista                    |
| ---------------------- | --------------- | ----------------------------------- |
| Productos patrocinados | 7 días          | 1 día (24 horas) |
| Banner                 | 14 días         | 14 días                             |
| Banner en video        | 14 días         | 14 días                             |
| Marcas patrocinadas    | 14 días         | 14 días                             |

Por ejemplo, si un usuario hace clic hoy en un anuncio de producto patrocinado, una compra del producto anunciado realizada en los siete días siguientes puede atribuirse a ese anuncio. Si el usuario solo ve el anuncio, la compra debe ocurrir en un plazo de un día (24 horas) para atribuirse a la vista.

### Atribución consolidada

VTEX Ads usa un modelo de **atribución consolidada**, que considera tanto el clic como la vista como interacciones elegibles, dentro de sus respectivas ventanas:

- **Atribución por clic:** conversión atribuida a un usuario que hizo clic en el anuncio dentro de la ventana de atribución.
- **Atribución por vista:** conversión atribuida a un usuario que vio el anuncio sin hacer clic dentro de la ventana de atribución.

Todos los formatos se atribuyen por clic y por vista. Para productos patrocinados, la atribución por vista usa una ventana de un día. Para banners, banners en video y marcas patrocinadas, la ventana de vista es de 14 días.

> ℹ️ La atribución por vista depende del **evento de view**, una señal técnica enviada por el publicador a la plataforma que registra que el usuario vio el anuncio. Los publicadores que no envían el evento de view no generan conversiones atribuidas por vista.

### Prioridad de atribución (último contacto)

VTEX Ads usa el modelo de **último contacto**, que atribuye la conversión a la interacción más reciente del usuario antes de la compra. Cuando hay un clic y vista registrado del mismo anuncio dentro de la ventana de atribución, el **clic tiene prioridad** (Clic > Vista). Así, cada conversión se atribuye una única vez, sin doble recuento.

| Escenario                                                                                                        | Atribución |
| ---------------------------------------------------------------------------------------------------------------- | ---------- |
| El usuario ve el anuncio y después hace clic y compra.                                           | Clic       |
| El usuario hace clic en el anuncio, después lo ve de nuevo y compra.                             | Clic       |
| El usuario solo ve el anuncio (sin hacer clic) y compra dentro de la ventana. | Vista      |
| El usuario solo hace clic y compra dentro de la ventana.                                         | Clic       |

> ℹ️ La interacción (clic o vista) debe ocurrir antes de la confirmación del pedido para que la conversión sea válida. Cada conversión se atribuye a un único anuncio y a una única interacción, sin división proporcional del crédito.

### Conversión directa y ventas halo

La interacción del usuario puede generar dos tipos de venta:

- **Conversión directa:** venta del propio producto anunciado, atribuida al anuncio por clic o por vista.
- **Venta halo:** venta de **otro producto no anunciado**, comprado en el mismo pedido influenciado por el anuncio. Son los ingresos asistidos generados por ítems distintos del producto anunciado que se compraron junto con este como resultado de la interacción con el anuncio.

Por ejemplo, un anuncio de tenis lleva al cliente a comprarlos (conversión directa) y, en el mismo pedido, también compra medias (venta halo).

### Mapeo de productos

Una campaña solo puede acreditarse por productos explícitamente asociados a ella.

- **Productos patrocinados (mapeo 1:1):** cada anuncio representa un único producto. Una interacción con el anuncio del producto A solo puede generar conversión directa para el producto A.
- **Banner, video y marcas patrocinadas (mapeo N:1):** cada creatividad se asocia a una lista de SKUs. Una interacción con la creatividad puede atribuirse a cualquiera de los productos de esa lista.

> ℹ️ Dentro de una campaña, el desempeño de cada creatividad se informa por separado, lo que permite comparar los distintos anuncios de una misma campaña.

## Métricas de ROAS

El **ROAS** (Return on Ad Spend) mide el retorno sobre la inversión en publicidad. Las variantes de ROAS difieren en cuanto a los ingresos que se incluyen en el numerador. Todas comparten el mismo denominador (costo total de publicidad), por lo tanto, son directamente comparables.

Los siguientes términos de ingresos usados en las fórmulas distinguen los ingresos en dos dimensiones.

Por **origen de la atribución** (clic, vista o ambos):

- **Ingresos atribuidos:** ingresos de las conversiones directas del producto anunciado. Combina atribución por clic y por vista.
- **Ingresos atribuidos a clics:** proporción de los ingresos generados por conversiones atribuidas a clics.

Por **tipo de venta** (producto anunciado o productos influenciados):

- **Ingresos directos:** ingresos de las conversiones directas del producto anunciado. Se usa en contraposición a los ingresos halo.
- **Ingresos halo:** ingresos generados por ventas halo, es decir, de otros productos no anunciados comprados en el mismo pedido influenciado por el anuncio.

| Métrica           | Definición                                                                                                                                                                                                                                                           | Fórmula                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **ROAS**          | Retorno sobre la inversión a partir de las conversiones atribuidas (clic y vista combinados).                                                                                                                                     | Ingresos atribuidos / Costo                                    |
| **ROAS por clic** | Ingresos generados por usuarios que hicieron clic en el anuncio. Disponible como métrica complementaria para comparación por canal de atribución.                                                                                    | Ingresos atribuidos a clics / Costo                            |
| **ROAS halo**     | ROAS de ingresos asistidos: ingresos de otros productos del pedido que no eran el anunciado, pero fueron influenciados por el anuncio, divididos entre la inversión.                                                                 | Ingresos halo / Costo                                          |
| **ROAS total**    | ROAS total: suma los ingresos directos (producto anunciado) y los ingresos halo (otros productos del mismo pedido). Mide el impacto total de la campaña en el pedido completo. | (Ingresos directos + Ingresos halo) / Costo |

> ℹ️ Los ingresos atribuidos por vista se incluyen en el cálculo del **ROAS** consolidado, pero no se muestran como métrica aislada en los dashboards ni en las tablas.

Comparar el ROAS consolidado con el **ROAS por clic** ayuda a identificar qué campañas generan retorno principalmente por clics o por vistas. Esto es útil al evaluar productos patrocinados en comparación con banners o marcas patrocinadas.

> ⚠️ El **ROAS por clic** está disponible solo para usuarios con permisos de superadministrador (superAdmin) en VTEX Ads. Los usuarios estándar no ven esta métrica en los dashboards ni en las tablas.

## Métricas de ventas influenciadas (halo)

Las métricas halo miden el impacto indirecto de un anuncio en las ventas de otros productos no anunciados que se compraron en el mismo pedido gracias a su influencia.

| Métrica           | Definición                                                                                                    | Fórmula |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| **Pedidos halo**  | Número de pedidos con al menos un ítem halo.                                                  | -       |
| **Ingresos halo** | Ingresos de productos no anunciados comprados en el mismo pedido influenciado por el anuncio. | -       |
| **Ítems halo**    | Cantidad de ítems halo vendidos.                                                              | -       |

## Comportamiento en ventanas de fechas mixtas

La metodología de atribución de los productos patrocinados cambió el 1 de julio de 2026 y comenzó a incluir conversiones por vista, además de las conversiones por clic. Además, para todos los formatos, la tasa de conversión comenzó a usar **vistas** en el denominador, en lugar del valor de clics usado anteriormente.

Por eso, las métricas como ROAS, tasa de conversión, conversiones e ingresos atribuidos se calculan de forma diferente antes y después de esa fecha.

Cuando el periodo seleccionado cruza el 1 de julio de 2026, el cálculo consolidado adopta la nueva metodología en todo el intervalo. En esos casos, el gráfico muestra una notificación visual en la fecha del cambio.

Para obtener resultados consistentes, selecciona el periodo de análisis de acuerdo con la metodología deseada:

- **Desempeño histórico:** selecciona periodos completamente anteriores al 1 de julio de 2026.
- **Nueva metodología:** selecciona periodos completamente a partir del 1 de julio de 2026.

> ⚠️ En ventanas de análisis que contienen el 1 de julio de 2026, la tasa de conversión se calcula con la nueva metodología en todo el intervalo. Las métricas con desglose por clic (**Conversiones (clic)**, **Tasa de conversión por clic** y **ROAS por clic**) están disponibles solo a partir del 1 de julio de 2026.

## Disponibilidad y acceso a los datos

- Las métricas base y de conversión están disponibles con historial sin restricción de fecha.
- El **ROAS por clic** no muestra datos anteriores al 25 de marzo de 2026.
- La personalización de tarjetas y columnas se mantiene entre sesiones. Los publicadores y anunciantes tienen configuraciones independientes.
- Cuando no hay datos para una métrica, el campo muestra cero.
