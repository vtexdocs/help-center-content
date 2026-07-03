---
title: 'Budget Pacing'
createdAt: '2026-06-22T00:00:00.000Z'
updatedAt: '2026-06-22T00:00:00.000Z'
contentType: tutorial
productTeam: Others
slugEN: budget-pacing
locale: es
---

> ⚠️ Budget Pacing está disponible solo para publicadores activados por el equipo de VTEX. Para solicitar la activación ponte en contacto con el equipo de operaciones de anuncios (AdOps) de VTEX.

**Budget Pacing** es la funcionalidad de [VTEX Ads](https://help.vtex.com/es/tracks/retail-media/vtex-ads-primeros-pasos) que redistribuye automáticamente el consumo de presupuesto de una campaña a lo largo de un ciclo. En lugar de exigir un valor fijo de gasto cada día, VTEX Ads monitorea el ritmo de consumo y ajusta el tope diario para garantizar que se utilice el presupuesto total del ciclo.

El objetivo es eliminar la necesidad de realizar ajustes manuales diarios en la gestión publicitaria cuando una campaña no consume lo esperado durante los primeros días, especialmente en el caso de las campañas vinculadas a pedidos de inserción mensuales.

## Cómo funciona

Al crear una nueva campaña defines un único valor: la **asignación diaria promedio.** A partir de esta información, el sistema calcula el estimado del gasto total del ciclo como dato derivado y empieza a hacer seguimiento del ritmo de entrega.

Una vez activo, **Budget Pacing:**

- Monitorea el consumo real de la campaña con relación a lo esperado para el periodo.
- Recalcula el tope diario de consumo al inicio de cada día en función del saldo restante del ciclo.
- Aumenta el ritmo de consumo en los días siguientes a un consumo menor de lo esperado.
- Reduce el tope diario cuando el consumo está por encima de lo esperado.

> ℹ️ El mecanismo de redistribución funciona en segundo plano. Lo que el operador ve y configura es la asignación diaria promedio. El ajuste automático del tope diario no se muestra directamente en la interfaz de creación o edición de campañas.

### Variación del gasto diario

El gasto real de una campaña con **Budget Pacing** varía a lo largo del ciclo. Algunos días este gasto quedará por debajo de la asignación diaria promedio definida y otros podrá ser significativamente mayor, especialmente cuando VTEX Ads necesite compensar un periodo de bajo consumo.

**Límites del tope diario:**

- **En el último 30% del ciclo:** el tope diario puede llegar al doble de la asignación diaria promedio definida para compensar un posible bajo consumo.
- **En cualquier día del ciclo:** el tope diario nunca supera tres veces la asignación diaria promedio, incluso en escenarios de fuerte aceleración.

> ⚠️ El gasto total del ciclo tiende a mantenerse dentro del estimado calculado. La variación ocurre en la distribución día a día, no en el total del ciclo.

## Tipos de campañas y ciclos de presupuesto

El comportamiento de Budget Pacing varía según el tipo de campaña:

| Tipo de campaña | Ciclo de presupuesto |
| --- | --- |
| **Con fecha de fin** | El ciclo corresponde a la duración de la campaña, desde la fecha de inicio hasta la fecha de fin. |
| **Always-on** (sin fecha de fin) | El ciclo tiene una duración fija de 30 días corridos, renovado automáticamente a partir de la fecha de inicio de la campaña. |

> ℹ️ El ciclo de 30 días de las **campañas Always-on** se calcula a partir de la fecha de inicio de la campaña, no por el mes calendario. Por ejemplo, una campaña iniciada el 10 de abril tiene el primer ciclo del 10 de abril al 9 de mayo.

### Campañas ya activas

Budget Pacing se aplica solo a las campañas elegibles a partir de la fecha de activación del publicador. Las campañas con fecha de fin que ya estaban en curso antes de que Budget Pacing se habilitara para el publicador mantienen el modelo de presupuesto diario fijo hasta que finalicen. Las **campañas Always-on** ya activas migran automáticamente al inicio del siguiente ciclo de 30 días.

## Status de ritmo

**Budget Pacing** monitorea el ritmo de consumo de cada campaña y asigna un status de ritmo, mostrado en el [informe de consumo de presupuesto](https://help.vtex.com/pt/docs/tutorials/monitorar-consumo-de-orcamento):

| Status | Rango de consumo esperado | Indicador |
| --- | --- | --- |
| **On track** | Entre 90% y 110% de lo esperado | Verde |
| **Ritmo bajo** | Por debajo del 90% de lo esperado | Amarillo |
| **Ritmo alto** | Por encima del 120% de lo esperado | Naranja |
| **Ritmo críticamente bajo** | Por debajo del 60% en los últimos 3 días | Rojo |

Cuando el status es **Underpacing** o **Critical underpacing**, Budget Pacing ya tiene el ramp-up activo (aceleración automática del presupuesto) para aumentar automáticamente el ritmo de consumo. El status **Critical underpacing** es solo informativo y no conlleva ninguna acción dentro de la plataforma.

> ℹ️ Si la campaña está con **Critical underpacing** por restricción de stock (pocos productos elegibles, segmentación muy restringida o CPM por debajo del valor competitivo), el ramp-up de presupuesto no resolverá el problema.

