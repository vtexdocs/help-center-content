---
title: 'Buscar eventos duplicados en Analytics'
id: 48h3ObR7qqRHvU36weCvjC
status: PUBLISHED
createdAt: 2023-03-15T19:40:23.229Z
updatedAt: 2023-09-20T18:49:19.673Z
publishedAt: 2023-09-20T18:49:19.673Z
firstPublishedAt: 2023-03-15T19:40:23.835Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: buscar-eventos-duplicados-en-analytics
locale: es
kiStatus: Fixed
internalReference: 771986
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Algunos eventos de los informes de búsqueda inteligente están duplicados, lo que puede afectar a la vista de análisis del módulo de administración de búsqueda.


#### FAQ

**1. ¿Afecta a todos los eventos VTEX (por ejemplo, captura de solicitudes, paneles de la página de inicio del administrador, etc.)?

No, los análisis de Búsqueda Inteligente se calculan de forma diferente e independiente de esas métricas y eventos por ahora. Este problema sólo afecta a la página Búsqueda > Análisis.

**2. ¿Se sobrecalculan todas las métricas?**.

Sí, todas las métricas sin procesar que se muestran en la página Búsqueda > Análisis se calculan en exceso en este momento.

Son los siguientes: recuento de búsquedas, clics en un término, clics únicos en un término, recuento de transacciones tras la búsqueda de un término e ingresos generados por esas transacciones, porcentaje de clics y conversión.

**3. ¿También se han visto afectados los datos de exportación a CSV?

Sí, los datos exportados a CSV también se ven afectados por los datos sobrecomputados.

**4. ¿Afecta esto al algoritmo Search Relevance y a los resultados de las búsquedas?

No, aunque el algoritmo de relevancia de búsqueda también utiliza los eventos de análisis para calcular la puntuación de popularidad del producto, no utiliza las métricas agregadas.


##

## Simulación


El escenario se puede ver al comprobar la página de administración de búsqueda para los informes/análisis.



## Workaround


N/A

