---
title: 'Budgets - Información general'
createdAt: '2025-01-30T10:00:00.000Z'
updatedAt: '2025-01-30T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: budgets-overview
locale: es
---

La gestión de presupuestos permite a las organizaciones B2B planificar, distribuir y dar seguimiento a los gastos de forma estructurada. Esta funcionalidad ofrece operaciones para crear y gestionar presupuestos y asignaciones, registrar movimientos financieros como transacciones o reservas, y hacer seguimiento de toda la actividad mediante estados de cuenta, garantizando transparencia, rastreabilidad y control sobre los gastos de los compradores.

Un presupuesto puede dividirse en varias asignaciones, y cada movimiento de valores, como débitos, créditos o reembolsos, actualiza los saldos de acuerdo con sus reglas. Esta funcionalidad está diseñada para manejar flujos en los que se crean presupuestos y asignaciones, los saldos se consumen por transacciones o reservas temporales y, posteriormente, los estados de cuenta se utilizan para conciliar la actividad financiera a lo largo del tiempo.

>⚠️ La funcionalidad de Presupuestos solo está disponible para B2B Buyer Portal. Se requiere autorización del Commerce Engineer de la cuenta para su uso.

## Conceptos clave

### Presupuesto

Representa un monto financiero usado para controlar gastos dentro de un contexto de negocio específico, como una unidad organizativa o un centro de costos. Define:

* El valor total disponible
* El periodo en el que ese valor puede usarse, definido por una fecha de inicio y, opcionalmente, una fecha de fin.

El saldo del presupuesto se actualiza a medida que se modifican los valores de las asignaciones y las transacciones.

### Asignación

Es la subdivisión de un presupuesto que permite distribuir el valor total entre diferentes entidades, como usuarios, direcciones o centros de costos. Cualquier cambio en el saldo de una asignación se refleja automáticamente en el presupuesto al que pertenece.

### Transacción

Es un movimiento financiero definitivo que ajusta el saldo de una asignación y del presupuesto. Se registran en los estados de cuenta y utilizan un campo de tipo para indicar el efecto de la transacción:

* **DEBIT**: restan valores
* **CREDIT**: suman valores asociados a reembolsos y cancelaciones

### Reserva

Bloquea temporalmente el valor de una asignación sin consumirlo de inmediato. Posteriormente, esta reserva puede:

* Confirmarse, generando una **transacción** correspondiente.
* Cancelarse, liberando el valor reservado sin generar ninguna entrada en los **estados de cuenta**.

### Reembolsos y tipos de transacciones

Las transacciones no se pueden eliminar. Cuando es necesario revertir una transacción, se crea un **reembolso**, que se registra como una nueva **transacción** de tipo CREDIT. En los estados de cuenta se reflejan tanto la transacción original DEBIT como el reembolso CREDIT, lo que da como resultado un efecto neto cero en el saldo del presupuesto o de la asignación.

### Estados de cuenta

Son listas de registros financieros de un presupuesto o asignación que muestran el historial de movimientos a lo largo del tiempo. Expone información como identificadores, valores, fechas, tipos y contexto, permitiendo la auditoría y conciliación de operaciones financieras.

### Contexto

Identifica dónde se aplica un presupuesto y está representado por los campos contextType y contextId. En el contexto B2B, el tipo de contexto siempre es UNIT, mientras que el contextId identifica la unidad específica unitId donde se está creando el presupuesto.

### Entidad vinculada y configuración de notificaciones

Las asignaciones pueden asociarse a una **entidad vinculada**, que describe a qué asignación está vinculada, por ejemplo, un usuario, una dirección o un centro de costo. Los presupuestos y las asignaciones también pueden configurarse con **ajustes de notificación**, permitiendo definir alertas basadas en límites o porcentajes de consumo.

## Casos de uso

### Control de gastos B2B por unidad

Una organización B2B puede necesitar establecer límites de gasto para cada unidad de negocio en un periodo determinado. Puedes crear presupuestos asociados a un **contextType UNIT** para controlar el consumo de forma centralizada.

### Seguimiento y auditoría del uso de presupuestos

Los equipos financieros y operativos necesitan poder analizar el uso de los presupuestos a lo largo del tiempo. Puedes registrar todos los valores consumidos como **transacciones** y obtener **estados de cuenta** detallados de presupuestos y asignaciones, lo que facilita las auditorías internas, la conciliación con sistemas financieros externos y la elaboración de informes periódicos.

### Reservas temporales y flujos de aprobación

Algunos flujos de negocio requieren que los valores se reserven antes de una aprobación final o la conclusión de un pedido. Puedes crear reservas que bloqueen temporalmente un valor en una asignación. Dependiendo del resultado del proceso, esta reserva puede confirmarse (generando una transacción) o cancelarse (liberando el valor).

### Gestión de reembolsos y correcciones de saldo

Cuando se cancelan pedidos o se requieren ajustes, puede ser necesario devolver valores a una asignación. En lugar de eliminar una transacción existente, se emite un reembolso y se registra como una transacción de tipo **CREDIT**, y el valor se vuelve a agregar al saldo. Tanto el débito original como el crédito del reembolso permanecen visibles en los estados de cuenta, garantizando transparencia.

### Monitoreo del consumo con notificaciones

Los presupuestos pueden configurarse con notificaciones basadas en valores límite o en porcentajes de uso del presupuesto. Esto permite generar alertas cuando el consumo se aproxime a niveles críticos o los alcance, ayudando a los equipos a actuar a tiempo para evitar que el presupuesto se agote y ajustar asignaciones o comportamientos de gasto.
