---
title: 'Monitorear el consumo de presupuesto'
createdAt: '2026-06-22T00:00:00.000Z'
updatedAt: '2026-06-22T00:00:00.000Z'
contentType: tutorial
productTeam: Others
slugEN: monitor-budget-consumption
locale: es
---

Este artículo explica cómo acceder e interpretar el **informe de consumo de presupuesto** de campañas con Budget Pacing en VTEX Ads. El informe permite que la persona responsable de la gestión publicitaria y los gerentes de cuenta monitoreen el ritmo de envío de la campaña e identifiquen rápidamente desvíos de consumo.

> ⚠️ El informe de consumo de presupuesto está disponible solo para campañas de publicadores con Budget Pacing activo. Para entender cómo funciona el mecanismo consulta [Budget Pacing](https://help.vtex.com/es/docs/tutorials/budget-pacing-es).

## Acceder al informe

1. En el Admin, debajo de VTEX Ads, desplázate hasta la lista de campañas.
2. Busca la campaña deseada y haz clic en la fila correspondiente.
3. En la sección **Inversión**, haz clic en `Ver informe de consumo`.

> ℹ️ El link del informe se puede compartir directamente con el gerente de cuenta o con el cliente.

## Información del informe

El informe está compuesto por tarjetas de vista general, gráficos de consumo y un gráfico de calor de horario.

### Tarjetas de vista general

Las tarjetas muestran los siguientes datos para el ciclo actual:

| Tarjeta | Información mostrada |
| --- | --- |
| **Consumo del día** | Total gastado en el día actual hasta el momento de la consulta. |
| **Consumo de la semana** | Total gastado en los últimos 7 días. |
| **Consumo total del ciclo** | Total acumulado en el ciclo actual. |
| **Previsión de cierre** | Proyección de gasto total al final del ciclo con base en el ritmo actual de consumo. |

El **indicador de status de ritmo** se muestra dentro de la tarjeta de consumo e indica el ritmo actual de envío de la campaña. Consulta la descripción de cada status en la sección [Interpretar el status de ritmo](#interpretar-el-status-de-pacing).

### Gráficos de consumo

El informe muestra tres gráficos principales:

- **Gasto total de la campaña:** evolución del gasto acumulado en el ciclo, con tres curvas:
  - **Realizado:** lo que ya se gastó.
  - **Meta:** lo que debería haberse gastado hasta el momento.
  - **Previsión:** estimado de cierre.
- **Gasto diario:** barras por día, con indicación de días por encima y por debajo de la meta de consumo.
- **Gasto acumulado del día con previsión de cierre:** ritmo de consumo en el día actual y proyección para el resto del día.

### Mapa de calor de horario

El gráfico de calor muestra el consumo hora por hora de la campaña. Las columnas representan las horas del día (12:00 a. m.–11:00 p. m.) y las filas representan los días del periodo seleccionado.

| Elemento | Significado |
| --- | --- |
| **Intensidad de color de la celda** | Proporcional al valor gastado en esa hora. A mayor intensidad del color, mayor gasto. |
| **Tag visual de destaque** | Indica los periodos en los que se agotó el presupuesto diario y los distingue de las celdas con gasto cero por falta de stock. |
| **Tooltip** | Se muestra al pasar el cursor sobre la celda. Muestra hora, fecha, valor gastado y status de la campaña en ese momento. |

El componente también muestra una **proyección de consumo diario** calculada con base en el ritmo de las horas ya transcurridas.

> ℹ️ La proyección de consumo diario asume un ritmo constante a lo largo del día. Las variaciones de stock a lo largo del día no se consideran en la proyección.

## Interpretar el status de ritmo

El indicador de status muestra el ritmo de consumo de la campaña en relación con lo esperado para el periodo:

| Indicador | Rango de consumo | Situación |
| --- | --- | --- |
| **Dentro del ritmo esperado** (verde) | Entre 90% y 110% de lo esperado | La campaña está consumiendo dentro del ritmo esperado. No se requiere ninguna acción. |
| **Ritmo bajo** (amarillo) | Por debajo del 90% de lo esperado | El consumo está por debajo del ritmo esperado. El motor ya tiene el ramp-up activo, acelerando el envío automáticamente. |
| **Ritmo alto** (naranja) | Por encima del 120% de lo esperado | El consumo está por encima del ritmo esperado. El motor redujo el tope diario automáticamente. |
| **Ritmo críticamente bajo** (rojo) | Por debajo del 60% en los últimos 3 días | El consumo ha estado muy por debajo de lo esperado durante 3 días consecutivos. El motor tiene el ramp up activo, pero puede haber un problema en la configuración de la campaña que Budget Pacing no consigue resolver de forma autónoma. |

### Investigar ritmo críticamente bajo

Cuando el status es **critical underpacing**, el motor ya está intentando recuperar el ritmo. Si la campaña sigue con consumo muy por debajo de lo esperado, comprueba si hay restricciones en la configuración:

- **Segmentación muy restrictiva:** pocos productos o categorías elegibles para mostrar.
- **CPM por debajo del valor competitivo:** la campaña puede estar perdiendo subastas por oferta insuficiente.
- **Stock bajo en el publicador:** el publicador puede no tener volumen de tráfico suficiente para el periodo.

> ⚠️ Evita hacer ajustes manuales en el valor de asignación mientras investigas el problema. Una intervención manual durante el ciclo reinicia el cálculo del motor y puede dificultar el diagnóstico.

## Navegar entre ciclos

El selector de ciclo, mostrado en el encabezado del informe, permite consultar ciclos anteriores:

- **Campañas con fecha de fin:** el selector se limita a las fechas de duración de la campaña.
- **Campañas Always-on:** el selector permite navegar entre los ciclos de 30 días de la campaña, desde el ciclo actual hasta ciclos concluidos anteriormente.

> ℹ️ El ciclo mostrado en el informe se calcula a partir del inicio del ciclo definido por el motor, no por el mes calendario.
