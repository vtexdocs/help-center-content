---
title: 'Campos contables'
createdAt: '2026-02-09T10:00:00.000Z'
updatedAt: '2026-03-16T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
locale: es
slugEN: accounting-fields
---

Los **campos contables** permiten recopilar información adicional durante la compra en [B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es), como centro de costos, número interno de orden de compra (PO) y otros datos de control. Esta información se asocia al pedido, ayudando a la empresa a estandarizar datos, aplicar reglas internas y facilitar auditorías.

> ⚠️ Esta funcionalidad se encuentra disponible únicamente para tiendas que utilizan [B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es), actualmente disponible para cuentas seleccionadas.

## Uso de campos contables

Con los campos contables tu empresa puede:

- Estandarizar la información de compras entre unidades organizativas y compradores.
- Exigir datos obligatorios antes de finalizar el pedido.
- Reducir errores de llenado en el checkout.
- Mejorar la rastreabilidad, auditoría y conformidad.

## Roles

Los campos contables funcionan en dos roles:

- **Administrador**: crea los campos necesarios para la empresa y define dónde aparece cada campo en el checkout.
- **Comprador**: llena los campos durante la compra.

## Aplicación de los campos

El administrador puede configurar cada campo para que se aplique en uno de los siguientes niveles:

- **Pedido**: se aplica a toda la compra.
- **Ítem**: se aplica a cada producto en el carrito.
- **Dirección**: se aplica a la información de envío o facturación.

## Tipos de campo

El comportamiento de llenado de un campo contable depende de cómo crea el campo el administrador: por la cuenta de la organización o por la [Custom Fields API](https://developers.vtex.com/docs/api-reference/custom-fields-api).

### Campos creados en la cuenta de la organización

Los campos creados en la interfaz de la cuenta de la organización son de tipo lista de forma predeterminada. En el checkout, el comprador selecciona uno de los valores predefinidos que el administrador gestiona en la página de detalles del campo.

Al crear el campo, el administrador también puede marcar la opción **Habilitar campo de texto libre** para permitir que los compradores ingresen un valor manualmente en el checkout, además de seleccionar un valor de la lista.

### Campos creados vía API

Al crear un campo contable mediante Custom Fields API, el administrador debe elegir uno de los siguientes tipos:

- **Texto (`text`):** acepta cualquier secuencia de caracteres, sin validación de formato. Si el campo está configurado como obligatorio, la plataforma solo verifica si el comprador lo completó.
- **Número (`number`):** acepta solo números. Se puede utilizar cuando el valor debe seguir un formato estrictamente numérico.
- **Opción (`option`):** muestra una lista de valores predefinidos para selección, lo que permite la estandarización de datos. Es el único tipo creado vía API que puede tener un valor predeterminado por unidad organizativa.

## Configuración de los campos

Al crear un campo, el administrador define:

- Nombre del campo.
- Nivel de entrada (pedido o ítem).
- Obligatoriedad (obligatorio u opcional).
- Llenado con texto libre en el checkout (solo campos creados en la cuenta de la organización).
- Tipo `text`, `number` u `option` (solo campos creados vía API).
- Status habilitado o deshabilitado (solo campos creados vía API).

El administrador puede crear y eliminar de forma permanente campos contables directamente en la cuenta de la organización, en **Contratos > [contrato] > Campos contables**, además de gestionar la configuración y los valores de cada campo. Para consultar las instrucciones, accede a [Agregar o editar campos contables](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-campos-contables).

## Valores predeterminados en el checkout

Para reducir el llenado manual y evitar incoherencias, puedes configurar valores predeterminados por unidad organizativa.

Puedes definir como predeterminados los siguientes ítems:

- Dirección
- Tarjeta
- Campos contables con valores predefinidos: campos de lista creados en la cuenta de la organización y campos del tipo `option` creados mediante API.

Para los campos creados en la cuenta de la organización, se define el valor predeterminado en la página de detalles del campo, usando la opción **Definir como predeterminado** en el menú de opciones del valor.

> ℹ️ Para más información sobre cómo agregar o configurar campos contables, accede a [Agregar o editar campos contables](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-campos-contables).

## Asignación de presupuestos a campos contables

Puedes usar campos contables como entidades vinculadas en asignaciones de presupuesto, distribuyendo un presupuesto entre los valores de un campo. Por ejemplo, puedes asignar un límite de gastos a cada centro de costos. Esto permite que la organización controle los gastos con base en la información contable recopilada en el checkout. Para más información, accede a [Presupuestos - Información general](https://help.vtex.com/es/docs/tutorials/presupuestos-informacion-general).

## Resultados para los administradores

- Datos coherentes entre unidades organizativas.
- Mejor aplicación de reglas internas de compra.
- Mayor seguridad para informes y auditorías.

## Resultados para los compradores

- Los campos se muestran en el checkout con instrucciones claras.
- El checkout completa automáticamente los valores predeterminados configurados para la unidad organizativa.
- El comprador finaliza el pedido con menos retrabajo y menor riesgo de error.

## Ejemplos de uso

### Exigir información obligatoria en todos los pedidos

- **Escenario:** la empresa necesita registrar el **centro de costos** y el **número de PO** en todos los pedidos.
- **Configuración:** crear campos obligatorios a nivel de pedido (`option` para centro de costos y `text` o `number` para el número de PO).
- **Resultado:** el comprador solo puede finalizar el pedido después de proporcionar toda la información, lo que garantiza el cumplimiento.

### Autocompletar campos del checkout por unidad organizativa

- **Escenario:** la empresa desea reducir errores y tiempo de compra en múltiples unidades.
- **Configuración:** definir valores predeterminados por unidad organizativa para dirección, tarjeta y campos contables con valores predefinidos.
- **Resultado:** el checkout completa los campos automáticamente después del inicio de sesión, reduciendo el esfuerzo.

### Clasificar proyectos o actividades

- **Escenario:** la empresa necesita vincular cada ítem comprado a un proyecto o actividad.
- **Configuración:** crear un campo `option` a nivel de ítem con una lista de proyectos o actividades activos.
- **Resultado:** cada ítem se vincula a un proyecto, facilitando la distribución y el control de costos.

### Diferenciar compras para reventa y consumo interno

- **Escenario:** la empresa necesita identificar el tipo de compra en el pedido.
- **Configuración:** crear un campo `option` a nivel de pedido con valores predefinidos, como reventa y consumo interno.
- **Resultado:** permite que la empresa segmente los pedidos y aplique reglas fiscales o comerciales.

### Segmentar para informes de gestión

- **Escenario:** el equipo financiero necesita clasificar los pedidos por tipo de gasto.
- **Configuración:** crear campos `option` estandarizados a nivel de pedido (ejemplo: CAPEX, OPEX).
- **Resultado:** el equipo financiero puede filtrar informes sin tratamiento manual posterior.

### Exigir justificación para compras específicas

- **Escenario:** la empresa requiere una justificación en compras sensibles o que superen un valor determinado.
- **Configuración:** crear un campo `text` obligatorio a nivel de pedido.
- **Resultado:** la plataforma registra la justificación en el pedido para revisión o auditoría.

### Estandarizar y centralizar la gobernanza

- **Escenario:** la empresa necesita evitar variaciones en el llenado de datos.
- **Configuración:** utilizar campos de tipo `option` en lugar de texto libre y definir valores predeterminados por unidad organizativa.
- **Resultado:** datos más coherentes y auditables en toda la operación.

### Controlar compliance en empresas reguladas

- **Escenario:** la empresa necesita registrar códigos regulatorios por ítem.
- **Configuración:** crear un campo obligatorio en el nivel de `item` (por ejemplo, de tipo `text` u `option`).
- **Resultado:** cada ítem comprado incluye la información necesaria para auditorías regulatorias.
