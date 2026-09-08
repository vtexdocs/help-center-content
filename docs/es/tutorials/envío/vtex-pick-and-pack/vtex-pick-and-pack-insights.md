---
title: 'VTEX Pick and Pack: Insights'
createdAt: 2024-01-05T17:27:08.558Z
updatedAt: 2026-08-21T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-insights
locale: es
hidden: false
---

**Insights** es la página del Admin VTEX que presenta datos sobre el desempeño de tu operación en VTEX Pick and Pack. En el Admin VTEX, accede a **Envío > Pick and Pack > Insights**.

La página está organizada en las pestañas:

- [General](#general)
- [Ítems](#items)

## General

La pestaña **General** reúne, en un único dashboard, los gráficos de **Pedidos** y de **Hojas de trabajo**, además de las tarjetas con los tiempos de procesamiento y los indicadores de desempeño de tu operación. Todos los datos consideran el periodo de fechas y las unidades seleccionados, definidos por el selector de fechas y la opción **Cambiar instalación**. En los gráficos, las opciones **Último** y **Actual** permiten comparar periodos distintos.

![pick-pack-insights-1-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-insights_1.png)

El gráfico de **Pedidos** presenta el total de pedidos del periodo seleccionado, y el de **Hojas de trabajo**, el total de [hojas de trabajo](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-hojas-de-trabajo) creadas en el mismo periodo.

### Tiempos de procesamiento

Los tiempos de procesamiento indican la duración de cada etapa del fulfillment, medidos en días, horas o minutos:

|               Indicador              |                                       Definición                                      |                                                      Cómo se calcula                                                      |
| :----------------------------------: | :-----------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: |
|    **Tiempo del ciclo del pedido**   |     Periodo entre la creación del pedido y su entrega al cliente.     |      Σ (Fecha en `Entregado` − Fecha en `Listo para preparación`) / Total de pedidos considerados      |
|      **Tiempo de alistamiento**      |               Periodo necesario para alistar un pedido.               | Σ (Fecha en `Listo para empaque` − Fecha en `Listo para alistamiento`) / Total de pedidos considerados |
|         **Tiempo de empaque**        |               Periodo necesario para empacar un pedido.               |     Σ (Fecha en `Preparando envío` − Fecha en `Listo para empaque`) / Total de pedidos considerados    |
|          **Tiempo de envío**         |                Periodo necesario para enviar un pedido.               |         Σ (Fecha en `Entregado` − Fecha en `Preparando envío`) / Total de pedidos considerados         |
| **Tiempo promedio de procesamiento** | Periodo entre el inicio del alistamiento y la conclusión del empaque. |  Σ (Fecha en `Preparando envío` − Fecha en `Listo para alistamiento`) / Total de pedidos considerados  |

> ⚠️ Los indicadores **Tiempo del ciclo del pedido** y **Tiempo de envío** solo se calculan si tu operación utiliza [VTEX Pick and Pack Last Mile](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-last-mile). Sin este módulo activo en tu tienda, VTEX no recibe la confirmación de entrega del pedido, y estos indicadores se muestran con error.

> ℹ️ En los indicadores de tiempo, solo se incluyen en el cálculo los pedidos que pasaron por los dos status utilizados para calcular cada indicador. Consulta la descripción de cada status en [Flujo y status de pedidos](https://help.vtex.com/es/docs/tutorials/flujo-y-status-de-pedidos).

### Indicadores de desempeño

Los indicadores de desempeño evalúan el resultado de los pedidos procesados en la operación:

|                   Indicador                   |                                                  Definición                                                 |                                         Cómo se calcula                                        |                                                                                                            Ámbito                                                                                                            |
| :-------------------------------------------: | :---------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|        **Precisión en la fecha límite**       | Pedidos entregados dentro del plazo estimado, considerando la fecha de creación del pedido. |      (Pedidos entregados en plazo / Total de pedidos entregados) x 100      | Se incluyen en el cálculo los pedidos creados durante el periodo seleccionado, aunque se hayan entregado después. Compara el plazo estimado con la fecha de entrega registrada en el pedido. |
|              **Entrega a tiempo**             |       Pedidos entregados dentro del plazo estimado, considerando la fecha de entrega.       |      (Pedidos entregados en plazo / Total de pedidos entregados) x 100      |     Se incluyen en el cálculo los pedidos entregados durante el periodo seleccionado, aunque se hayan creado antes. Compara el plazo estimado con el momento exacto del evento de envío.     |
| **OTIF (On Time in Full)** |                    Pedidos entregados a tiempo y en la cantidad correcta.                   |           (Pedidos perfectos / Total de pedidos del periodo) x 100          |                                                            El denominador considera todos los pedidos del periodo, independientemente del status.                                                            |
|          **Porcentaje de precisión**          |                Pedidos procesados con los ítems correctos, sin divergencias.                | (Pedidos procesados sin sustituciones ni rechazos / Total de pedidos) x 100 |                                                                                                               -                                                                                                              |
|            **Tasa de fulfillment**            |            Pedidos atendidos con éxito en relación al total de pedidos recibidos.           |  (Pedidos entregados sin sustituciones o rechazos / Total de pedidos) x 100 |                                                                                                               -                                                                                                              |
|             **Tasa de backorder**             |           Pedidos no atendidos de inmediato debido a la falta de stock disponible.          |  (Pedidos con ítems rechazados por falta de stock / Total de pedidos) x 100 |                                                         Considera los ítems rechazados por falta de stock, independientemente del status del pedido.                                                         |
|            **Tasa de devoluciones**           |                Pedidos devueltos en relación al total de pedidos procesados.                |                 (Pedidos devueltos / Total de pedidos) x 100                |                                                                                                               -                                                                                                              |
|      **Tasa de alistamiento de pedidos**      |                     Volumen de ítems alistados por hora en la operación.                    |                         Total de ítems alistados / Horas transcurridas                         |                                                                                                               -                                                                                                              |
|              **Tasa de empaque**              |                     Volumen de ítems empacados por hora en la operación.                    |                         Total de ítems empacados / Horas transcurridas                         |                                                                                                               -                                                                                                              |

> ⚠️ Los indicadores **Precisión en la fecha límite**, **Envío a tiempo** y **OTIF** solo se calculan si tu operación utiliza [VTEX Pick and Pack Last Mile](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-last-mile). Sin este módulo activo en tu tienda, VTEX no recibe la confirmación de envío del pedido, y estos indicadores se muestran con error.

> ℹ️ El denominador del OTIF considera todos los pedidos del periodo, incluidos los que aún están en procesamiento, cancelados o rechazados. Por eso, los pedidos que aún no han alcanzado el status Entregado reducen el indicador. Insights usa el status del pedido en VTEX, que puede actualizarse a Entregado por diferentes sistemas y flujos, como el módulo [Last Mile](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-last-mile).

> ℹ️ La **Tasa de backorder** considera solo los rechazos cuyo motivo contiene la palabra "faltante". Para que el indicador refleje tu operación, configura el motivo de rechazo por falta de stock utilizando ese término.

## Ítems

La pestaña **Ítems** presenta las métricas de los ítems procesados en VTEX Pick and Pack a lo largo del periodo y para las unidades seleccionadas.

![pick-pack-insights-2-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-insights_2.png)

Los siguientes indicadores están disponibles:

- **Los 10 ítems más preparados**: ítems con el mayor número de unidades preparadas, pedidos y hojas de trabajo en el periodo.
- **Distribución de gestionados en**: distribución de los ítems en preparación de acuerdo con la especificación seleccionada.
- **Los ítems más rechazados**: ítems con el mayor número de rechazos o remociones durante los procesos de alistamiento o de empaque en el periodo.
- **Motivos de rechazo**: razones por las cuales los ítems fueron rechazados o removidos durante el procesamiento de los pedidos.
- **Motivos de reemplazo**: razones por las cuales los ítems fueron sustituidos por otros durante el procesamiento de los pedidos.
- **Las categorías con mayor fulfillment**: categorías del catálogo con la mayor tasa de cumplimiento de pedidos en el periodo.
- **Categorías utilizadas**: categorías del catálogo a las que están asociados los ítems.
- **Ítems alistados**: total de ítems alistados en pedidos durante el periodo, comparado con el periodo anterior.
- **Ítems empacados**: total de ítems empacados en el periodo, comparado con el periodo anterior.
- **Ítems transferidos**: total de ítems transferidos entre ubicaciones o almacenes en el periodo.
- **Paquetes**: distribución de los ítems registrados en el catálogo por tipo de paquete (empaque).
- **Paquetes creados**: total de paquetes creados en el periodo, comparado con el periodo anterior.
- **Ítems por paquete**: promedio de ítems incluidos por paquete en el periodo, comparado con el periodo anterior.
- **Eficiencia de empaque**: indicador de aprovechamiento de los paquetes en relación con la capacidad disponible.
