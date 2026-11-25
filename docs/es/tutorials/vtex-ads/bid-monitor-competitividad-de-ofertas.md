---
title: 'Bid Monitor (competitividad de ofertas)'
createdAt: 2026-11-25T00:00:00.000Z
updatedAt: 2026-11-25T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: bid-monitor-bid-competitiveness
locale: es
---

> ⚠️ **Bid Monitor** está en Open Beta y disponible para todas las cuentas en campañas 1:1. Las campañas Network no muestran **Bid Monitor**.

**Bid Monitor** es el indicador de competitividad de [VTEX Ads](https://help.vtex.com/es/docs/tracks/vtex-ads-primeros-pasos) que muestra, en el panel de Admin de **VTEX Ads**, si la oferta de un anuncio está bien posicionada frente a la competencia. El indicador es un anillo que se muestra junto al valor del CPC (costo por clic) o del CPM (costo por mil impresiones). Cuando la oferta puede ser más competitiva, **Bid Monitor** también muestra una sugerencia de valor, que el anunciante aplica dentro de la campaña, como se describe en [Aplicar una sugerencia](#aplicar-una-sugerencia).

El indicador está disponible para los dos perfiles que operan campañas en **VTEX Ads**:

- **Anunciante:** ve el anillo y la sugerencia de valor, y puede aplicar la sugerencia dentro de la campaña.
- **Publicador:** ve el mismo anillo y la misma sugerencia en los anuncios 1:1 que publica, sin la opción `Aplicar`.

## Dónde aparece el indicador

Para ver el indicador, inicia sesión en el panel de Admin de **VTEX Ads** y haz clic en la pestaña **Anuncios**. El anillo aparece junto al valor en la columna **CPC** o **CPM** en dos lugares:

- **Lista de anuncios:** en la pestaña **Anuncios**, la sugerencia de valor aparece debajo de la oferta, pero es solo informativa. Al pasar el mouse sobre ella, un texto indica que es necesario acceder a la campaña para modificar la oferta.
- **Tabla de anuncios de la campaña:** al hacer clic en `Ver campaña`, la sugerencia aparece debajo de la oferta y se puede hacer clic en ella para modificar el valor.

## Cómo funciona

Para cada anuncio, **VTEX Ads** compara el CPC o el CPM actual con lo que pagan otros anunciantes por posiciones similares, es decir: misma categoría de producto, mismo publicador y mismo tipo de anuncio. De esa comparación resultan dos elementos:

- **Nivel de competitividad:** anillo con color y relleno que muestra qué tan competitiva es la oferta en ese momento.
- **Sugerencia de valor:** se muestra cuando la oferta actual puede ser más competitiva. En la **Lista de anuncios**, la sugerencia es solo informativa. El anunciante aplica la sugerencia en la pantalla de la campaña.

La comparación usa la categoría del producto anunciado, no la de la campaña, y considera el nivel más específico de la jerarquía de categorías que tenga datos suficientes. Cuando no hay competencia suficiente en una categoría más específica, la comparación pasa a usar la categoría superior.

Por eso, el nivel de un anuncio puede cambiar sin que modifiques la oferta: si los competidores ajustan sus ofertas, o si cambia el volumen de competencia de la categoría, la posición relativa de tu anuncio también cambia. El indicador es siempre una instantánea del momento.

> ℹ️ El indicador es una referencia de mercado, no una garantía. Refleja la posición de la oferta frente a la competencia, pero el resultado de la subasta de anuncios también depende de la calidad y la relevancia del anuncio, no solo del valor de la oferta.

## Niveles de competitividad

**Bid Monitor** clasifica la oferta en cuatro niveles, indicados por el color y el relleno del anillo:

| Nivel                  | Indicador         | Qué significa                                                                                                          |
| :--------------------- | :---------------- | :--------------------------------------------------------------------------------------------------------------------- |
| **Oferta fuerte**      | Verde (completo)  | La oferta ya está entre las más competitivas de la categoría. No se muestra ninguna sugerencia.                        |
| **Oferta razonable**   | Verde (parcial)   | La oferta está por encima del promedio de la categoría. Hay margen de mejora, pero la situación no es crítica.         |
| **Oferta débil**       | Naranja           | La oferta está por debajo de la mayoría de los competidores de la categoría. Se muestra una sugerencia de valor más competitivo. |
| **Oferta muy débil**   | Rojo              | La oferta está muy por debajo del mercado. Se muestra una sugerencia de valor más competitivo.                         |

## Cuándo no aparece el indicador

El anillo no se muestra en los siguientes casos:

- **Campaña Network:** **Bid Monitor** está disponible solo en campañas 1:1.
- **Campaña con estrategia automática por objetivo:** cuando el sistema controla el CPC o el CPM automáticamente, la celda muestra un guion en lugar del indicador, porque una sugerencia de valor fijo no aplica a una oferta dinámica.
- **Menos de dos campañas que compiten:** cuando hay menos de dos campañas que compiten en el mismo publicador, en la misma categoría de producto y en el mismo tipo de anuncio, solo se muestra el valor de la oferta. El anillo comienza a aparecer a medida que aumenta la competencia.
- **Anuncio pausado o en borrador:** el indicador no se muestra para los anuncios que no están activos.

## Aplicar una sugerencia

El anunciante aplica la sugerencia de valor dentro de la campaña, en el editor de oferta. Para ello, sigue estos pasos:

1. Inicia sesión en el panel de Admin de **VTEX Ads** y haz clic en la pestaña **Anuncios**.
2. En la **Lista de anuncios**, localiza el anuncio con una sugerencia de valor debajo del CPC o del CPM.
3. Haz clic en el nombre de la campaña.
4. En la tabla de anuncios de la campaña, haz clic en la sugerencia debajo del valor de la oferta.
5. En el editor de oferta, que se abre con el valor sugerido completado, confirma el valor o edítalo, si es necesario.
6. Haz clic en `Aplicar`.

El CPC o el CPM del anuncio se actualiza con el valor confirmado. Para cerrar el editor sin modificar la oferta, haz clic en `Cancelar`.

Los publicadores ven la sugerencia de valor, pero no tienen la opción `Aplicar`.

## Deshacer una sugerencia aplicada

**Bid Monitor** no tiene un botón para deshacer una sugerencia aplicada. Para volver a la oferta anterior, haz clic en el ícono de lápiz junto al valor del CPC o del CPM en la tabla de anuncios de la pantalla de la campaña y edita la oferta manualmente.

## Bid Monitor y **porcentaje de impresiones**

**Bid Monitor** y las métricas de **[porcentaje de impresiones](https://help.vtex.com/es/docs/tutorials/metricas-y-atribucion-de-vtex-ads#metricas-de-porcentaje-de-impresiones)** miden cosas diferentes y, juntos, ayudan a decidir qué ajustar en un anuncio:

- **Bid Monitor:** muestra cómo está la oferta en relación con la referencia de la categoría y sugiere una oferta más competitiva. Es una herramienta para mejorar la posición del anuncio en su categoría.
- **Porcentaje de impresiones:** mide cuánto del total de oportunidades de subasta capturó el anuncio, y cuánto se perdió por clasificación o por presupuesto. Considera todas las categorías en las que el anuncio compite y factores además de la oferta.

La clasificación en la subasta depende de la oferta y de la calidad del anuncio. Por eso, la lectura combinada de los dos indicadores apunta a acciones diferentes:

| Escenario | Qué está ocurriendo | Qué hacer |
| :-------- | :------------------ | :-------- |
| **Oferta fuerte** u **Oferta razonable** y **[porcentaje de impresiones perdidas (por clasificación)](https://help.vtex.com/es/docs/tutorials/metricas-y-atribucion-de-vtex-ads#metricas-de-porcentaje-de-impresiones)** bajo. | La oferta es competitiva en la categoría y el anuncio gana la mayoría de las subastas en las que participa. | Mantener la oferta. Si el nivel cambia a **Oferta débil** u **Oferta muy débil**, aplica la nueva sugerencia para acompañar los cambios del mercado. |
| **Oferta débil** u **Oferta muy débil** y **porcentaje de impresiones perdidas (por clasificación)** alto. | La oferta está por debajo de la mayoría de los competidores de la categoría. El anuncio participa en muchas subastas, pero pierde frente a competidores con ofertas más altas. | Aplicar la sugerencia de **Bid Monitor**. Una oferta más competitiva ayuda a ganar parte de las subastas perdidas. |
| **Oferta fuerte** y **porcentaje de impresiones perdidas (por clasificación)** alto | La oferta está entre las más competitivas de la categoría, pero el anuncio pierde muchas subastas. La clasificación en la subasta también considera la calidad y la relevancia del anuncio, como el CTR, la tasa de conversión y la imagen. | Mejorar la calidad del anuncio (imagen, descripción, categoría y precio). Aumentar la oferta no resuelve el problema cuando este es de relevancia. |

> ℹ️ Para saber cómo se calculan las métricas de **porcentaje de impresiones** y dónde encontrarlas, consulta **[Métricas de porcentaje de impresiones](https://help.vtex.com/es/docs/tutorials/metricas-y-atribucion-de-vtex-ads#metricas-de-porcentaje-de-impresiones)**.
