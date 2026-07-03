---
title: 'Budget Pacing disponible en VTEX Ads'
createdAt: '2026-06-22T00:00:00.000Z'
updatedAt: '2026-06-22T00:00:00.000Z'
contentType: updates
productTeam: Others
slugEN: 2026-06-22-budget-pacing-now-available-in-vtex-ads
locale: es
announcementSynopsisPT: 'Budget Pacing permite que las campañas de VTEX Ads redistribuyan el presupuesto automáticamente a lo largo del ciclo, eliminando la necesidad de ajustar manualmente el presupuesto a diario.'
tags:
  - Nueva funcionalidad
  - VTEX Ads
---

**Budget Pacing** está disponible en beta abierta en **VTEX Ads.** Con esta funcionalidad, el sistema redistribuye automáticamente el presupuesto de una campaña a lo largo del ciclo, garantizando el consumo total de la inversión publicitaria sin necesidad de realizar ajustes manuales diarios.

## ¿Qué cambió?

Antes, las campañas en VTEX Ads operaban exclusivamente con presupuesto diario fijo. Cuando una campaña vinculada a un pedido de inserción mensual no consumía lo esperado en los primeros días, era necesario recalcular y ajustar el presupuesto manualmente para recuperar el ritmo de consumo.

Con **Budget Pacing** defines un único dato: la **asignación diaria promedio**. A partir de ese valor, el sistema redistribuye automáticamente el consumo a lo largo del ciclo, acelerando en los días de subconsumo y desacelerando cuando la campaña está por encima del ritmo esperado.

Los principales cambios en la interfaz son:

- Campo **Asignación diaria promedio** en la pantalla de creación y edición de campañas. A partir de este valor, se calcula automáticamente la estimación del gasto total del ciclo.
- Acceso al **informe de consumo de presupuesto** en el detalle de la campaña, con status de ritmo, gráficos por día y análisis por hora. El informe permite que los gerentes de cuenta hagan seguimiento al ritmo de consumo y reporten la información al cliente de forma proactiva.

## ¿Por qué realizamos este cambio?

Antes, las campañas vinculadas a pedidos de inserción mensuales estaban sujetas a dos limitaciones:

- **Riesgo de consumo insuficiente:** cuando el consumo quedaba por debajo de lo esperado en los primeros días del ciclo, la campaña podía no entregar 100% del valor contratado hasta el fin del periodo.
- **Falta de visibilidad:** los gerentes de cuenta no contaban con un informe específico para hacer seguimiento al ritmo de consumo y reportar la información al cliente de forma proactiva.

## ¿Qué se necesita hacer?

El equipo interno de VTEX debe activar Budget Pacing individualmente para cada publicador. Para solicitar la activación ponte en contacto con el equipo de operaciones de anuncios (AdOps) de VTEX.

Después de la activación, todas las nuevas campañas del publicador operarán automáticamente con Budget Pacing. Las campañas con fecha de fin ya activas continuarán en el modelo de presupuesto diario fijo hasta que terminen. Las campañas Always-on ya activas migran automáticamente al inicio del siguiente ciclo de 30 días.

Para entender en detalle cómo funciona el mecanismo accede al tutorial [Budget Pacing](https://help.vtex.com/es/docs/tutorials/budget-pacing-es).

## Más información

- [Budget Pacing](https://help.vtex.com/es/docs/tutorials/budget-pacing-es)
- [Monitorear consumo del presupuesto](https://help.vtex.com/es/docs/tutorials/monitorear-consumo-del-presupuesto)
