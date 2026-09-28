---
title: 'Presupuestos - Información general'
createdAt: '2025-01-30T10:00:00.000Z'
updatedAt: '2025-03-27T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: budgets-overview
locale: es
---

La gestión de presupuestos permite a las organizaciones B2B planificar, distribuir y dar seguimiento a los gastos de forma estructurada. También ofrece operaciones para crear y gestionar presupuestos y asignaciones, registrar movimientos financieros como transacciones o reservas, y hacer seguimiento de toda la actividad mediante estados de cuenta, garantizando transparencia, rastreabilidad y control sobre los gastos de los compradores.

Un presupuesto puede dividirse en varias asignaciones, y cada movimiento de valores, como débitos, créditos o reembolsos, actualiza los saldos de acuerdo con sus reglas. Esta funcionalidad admite flujos en los que las organizaciones crean presupuestos y asignaciones, las transacciones o reservas temporales consumen los saldos y, posteriormente, los equipos usan los estados de cuenta para conciliar la actividad financiera a lo largo del tiempo.

> ⚠️ Esta funcionalidad se encuentra disponible únicamente para tiendas que utilizan [B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es), actualmente disponible para cuentas seleccionadas.

## Conceptos clave

### Presupuesto

Representa un monto financiero usado para controlar gastos dentro de un contexto de negocio específico, como una unidad organizativa o un centro de costos. Define:

* El valor total disponible.
* El periodo durante el cual la organización puede usar ese valor, definido por una fecha de inicio y, opcionalmente, una fecha de fin.

Las asignaciones y las transacciones actualizan el saldo del presupuesto conforme cambian sus valores.

### Asignaciones

Las asignaciones son una subdivisión de un presupuesto que te permite distribuir el valor total entre diferentes entidades, como usuarios, direcciones o [campos contables](https://help.vtex.com/es/docs/tutorials/campos-contabeis) (por ejemplo, centros de costos). Cualquier cambio en el saldo de una asignación se refleja automáticamente en el presupuesto al que pertenece.

### Transacciones

Es un movimiento financiero definitivo que ajusta el saldo de una asignación y del presupuesto. La plataforma las registra en los estados de cuenta, y cada transacción usa un campo de tipo para indicar su efecto:

* **DEBIT**: resta valores del saldo.
* **CREDIT**: agrega valores al saldo (por ejemplo, reembolsos y cancelaciones).

### Reservas

Las reservas bloquean temporalmente un valor de una asignación sin consumirlo de inmediato. Posteriormente puedes:

* Confirmar la reserva, generando una **transacción** correspondiente.
* Cancelarla, liberando el valor reservado sin generar ninguna entrada en los **estados de cuenta**.

### Reembolsos y tipos de transacciones

Las transacciones no se pueden eliminar. Para revertir una transacción, se crea un **reembolso**, que la plataforma registra como una nueva **transacción** de tipo CREDIT. En los estados de cuenta se reflejan tanto la transacción original DEBIT como el reembolso CREDIT, lo que da como resultado un efecto neto cero en el saldo del presupuesto o de la asignación.

### Estados de cuenta

Son listas de registros financieros de un presupuesto o asignación que muestran el historial de movimientos a lo largo del tiempo. Muestran información como identificadores, valores, fechas, tipos y contexto, permitiendo la auditoría y conciliación de operaciones financieras.

### Contexto

El contexto identifica dónde se aplica un presupuesto. Los campos `contextType` y `contextId` lo representan. En el contexto B2B, `contextType` siempre es `UNIT`, mientras que `contextId` identifica la unidad específica (`unitId`) donde creas el presupuesto.

### Entidad vinculada y configuración de notificaciones

Puedes asociar asignaciones a una **entidad vinculada**, que describe a qué está vinculada la asignación, como un usuario, una dirección o un campo contable, como por ejemplo un centro de costos. También puedes configurar presupuestos y asignaciones con **configuración de notificaciones** para definir alertas basadas en límites o porcentajes de consumo.

## Casos de uso

### Control de gastos B2B por unidad

Una organización B2B puede necesitar establecer límites de gasto para cada unidad de negocio en un periodo determinado. Puedes crear presupuestos asociados al tipo de contexto `UNIT` (`contextType`) para gestionar el consumo de forma centralizada.

### Seguimiento y auditoría del uso de presupuestos

Los equipos financieros y operativos necesitan tener visibilidad sobre el uso de los presupuestos a lo largo del tiempo. Puedes registrar todos los valores consumidos como **transacciones** y obtener **estados de cuenta** detallados de presupuestos y asignaciones, lo que facilita las auditorías internas, la conciliación con sistemas financieros externos y la elaboración de informes periódicos.

### Reservas temporales y flujos de aprobación

Algunos flujos de negocio requieren que se reserven los valores antes de la aprobación final o de la finalización del pedido. Puedes crear reservas que bloqueen temporalmente un valor en una asignación. Dependiendo del resultado del proceso, puedes confirmar la reserva (generando una transacción) o cancelarla (liberando el valor).

### Gestión de reembolsos y correcciones de saldo

Cuando se cancelan pedidos o se requieren ajustes, puede ser necesario devolver valores a una asignación. En lugar de eliminar una transacción existente, emites un reembolso que la plataforma registra como una transacción del tipo **CREDIT**, agregando el valor al saldo nuevamente. Tanto el débito original como el crédito del reembolso permanecen visibles en los estados de cuenta, lo que garantiza la transparencia.

### Monitoreo del consumo con notificaciones

Puedes configurar presupuestos con notificaciones basadas en límites de valor o porcentajes de uso. Esto genera alertas cuando el consumo se aproxima a niveles críticos o los alcanza, ayudando a los equipos a responder antes de que los presupuestos se agoten y a ajustar las asignaciones o el comportamiento de gasto.
