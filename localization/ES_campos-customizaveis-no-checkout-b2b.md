---
title: 'Campos personalizables en el checkout (B2B)'
createdAt: '2026-02-09T10:00:00.000Z'
updatedAt: '2026-02-09T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: customizable-fields-in-b2b-checkout
---

# Campos personalizables en el checkout B2B

Los **campos personalizables en el checkout B2B** permiten recopilar información adicional durante la compra en **B2B Buyer Portal**, como **centro de costo**, **número de orden de compra (PO)** y otros datos de control. Esta información se asocia al pedido, ayudando a la empresa a estandarizar datos, aplicar reglas internas y facilitar auditorías.

> ⚠️ Esta funcionalidad solo está disponible para **B2B Buyer Portal** y requiere la autorización del **commerce engineer** de la cuenta.

## Uso de los campos personalizables

Con campos personalizables, tu empresa puede:

- Estandarizar la información de compras entre unidades organizativas y compradores.
- Exigir datos obligatorios antes de finalizar el pedido.
- Reducir errores de llenado en el checkout.
- Mejorar la rastreabilidad, auditoría y conformidad.

## Roles

Hay dos roles relacionados con el uso de campos personalizados:

- **Administrador**: crea los campos necesarios para la empresa y define dónde aparece cada campo en el checkout.
- **Comprador**: llena los campos durante la compra.

## Aplicación de los campos

Los campos pueden configurarse en diferentes niveles:

- **Pedido**: se aplica a toda la compra.
- **Ítem**: se aplica a cada producto en el carrito.
- **Dirección**: se aplica a la información de envío o facturación.

## Tipos de campo

Al crear un campo personalizable, el administrador debe elegir uno de los siguientes tipos.

### Texto (`text`)

Permite que el comprador ingrese un valor libre en el checkout.

- Acepta cualquier secuencia de caracteres.
- No tiene validación de formato además de la obligatoriedad (cuando está configurada).

### Número (`number`)

Permite la inserción exclusiva de valores numéricos.

- Solamente acepta números.
- Se puede utilizar cuando el valor debe seguir un formato estrictamente numérico.

### Opción (`option`)

Muestra una lista de valores previamente registrados para selección.

- El comprador debe seleccionar una de las opciones disponibles.
- Permite la estandarización de datos.
- Es el único tipo que puede recibir **un valor predeterminado por unidad organizativa**.

## Configuración de cada campo

Al crear un campo, el administrador define:

- Nombre del campo.
- Tipo (`text`, `number` u `option`).
- Nivel de aplicación (pedido, ítem o dirección).
- Obligatoriedad (obligatorio u opcional).
- Status (activado o desactivado).

## Valores predeterminados en el checkout

Para reducir el llenado manual y evitar incoherencias pueden configurarse valores predeterminados por **unidad organizativa**.

Es posible definir como predeterminado:

- Dirección
- Tarjeta
- Campos personalizables del tipo `option`.

> ⚠️ Solo los campos de tipo `option` pueden definirse como valor predeterminado.

> ℹ️ Para más información sobre cómo agregar o configurar campos personalizables, accede a [Gestionar campos personalizables en el checkout (B2B)](https://help.vtex.com/es/docs/tutorials/gerenciar-campos-customizaveis-no-checkout-b2b).

## Resultados para el administrador

- Datos coherentes entre unidades organizativas.
- Mejor aplicación de reglas internas de compra.
- Mayor seguridad para informes y auditorías.

## Resultados para el comprador

- Los campos se muestran en el checkout con instrucciones claras.
- Algunos valores pueden venir autocompletados (cuando se configuran por la unidad organizativa).
- El pedido se finaliza con menos retrabajo y menor riesgo de error.

## Ejemplos de uso

### Exigir información obligatoria en todos los pedidos

- **Escenario:** la empresa necesita registrar **centro de costo** y **PO** en todos los pedidos.
- **Configuración:** crear campos obligatorios a nivel de `pedido` (`option` para centro de costo y `text` o `number` para PO).
- **Resultado:** el pedido solo puede completarse con los datos llenados, garantizando así su conformidad.

### Checkout autocompletado por unidad organizativa

- **Escenario:** la empresa desea reducir errores y tiempo de compra en múltiples unidades.
- **Configuración:** definir valores predeterminados por **unidad organizativa** para los campos de dirección, tarjeta y tipo `option`.
- **Resultado:** el checkout aparece autocompletado tras el inicio de sesión, reduciendo el retrabajo.

### Clasificación de proyecto o actividad

- **Escenario:** la empresa necesita asociar cada ítem comprado a un proyecto o actividad.
- **Configuración:** crear un campo `option` en el nivel de `item` con la lista de actividades o proyectos activos.
- **Resultado:** cada ítem se vincula a un proyecto, facilitando la distribución y el control de costos.

### Diferenciar compra para reventa y consumo interno

- **Escenario:** la empresa necesita identificar el tipo de compra en el pedido.
- **Configuración:** crear un campo `option` en el nivel de `pedido` con valores predefinidos (Reventa/Consumo interno).
- **Resultado:** permite segmentar pedidos y aplicar reglas fiscales o comerciales.

### Segmentación para informes de gestión

- **Escenario:** el equipo financiero necesita clasificar pedidos por tipo de gasto.
- **Configuración:** crear campos `option` estandarizados en el nivel de `pedido` (ej.: CAPEX, OPEX).
- **Resultado:** los informes se pueden filtrar sin necesidad de procesamiento manual posterior.

### Justificación obligatoria para compras específicas

- **Escenario:** la empresa exige justificación en compras sensibles o superiores a determinado valor.
- **Configuración:** crear un campo `text` obligatorio en el nivel de `pedido`.
- **Resultado:** la justificación queda registrada en el pedido para revisión o auditoría.

### Estandarización y gobernanza centralizada

- **Escenario:** la empresa necesita evitar variaciones en el llenado de datos.
- **Configuración:** utilizar campos `option` en lugar de texto libre y definir valores por **unidad organizativa**.
- **Resultado:** datos más coherentes y auditables en toda la operación.

### Control de compliance en empresas reguladas

- **Escenario:** la empresa necesita registrar códigos regulatorios por ítem.
- **Configuración:** crear un campo obligatorio en el nivel de `item` (por ejemplo, de tipo `text` u `option`).
- **Resultado:** cada ítem comprado incluye la información necesaria para auditorías regulatorias.


