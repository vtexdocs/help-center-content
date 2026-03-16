---
title: 'Agregar o editar campos contables'
createdAt: '2025-02-09T10:00:00.000Z'
updatedAt: '2026-03-16T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-accounting-fields
locale: es
---

> ⚠️ Esta funcionalidad solo está disponible para tiendas que usan B2B Buyer Portal, actualmente está disponible para cuentas seleccionadas.

La funcionalidad Campos contables permite estandarizar la recopilación de información durante el proceso de compra, mediante la adición de campos contables de acuerdo con las reglas de tu negocio.

Este recurso permite garantizar que datos como el número de orden de compra (PO number), el centro de costos u otra información interna se llenen correctamente en el checkout, lo que facilita un mayor control operativo y el cumplimiento de los procesos de la empresa.

Este artículo incluye los siguientes procedimientos:

- [Editar campo contable](#editar-campo-contable)
- [Agregar valor en campo contable](#agregar-valor-en-campo-contable)
- [Editar valor en campo contable](#editar-valor-en-campo-contable)

## Editar campo contable

![Buyer Portal B2B Organization Unit information page](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/organization-account/buyer-portal-b2b-organization-unit-information-page.png)

1. Accede a la [pantalla de inicio de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/organization-account-es#accessing-the-organization-account).
2. Haz clic en el nombre del campo contable que deseas editar.
3. En la pantalla del campo contable, haz clic en el ícono <i class="fas fa-cog"></i> en la parte superior de la pantalla para editar la información del campo contable.
4. En **Tipo de lista**, selecciona si los valores del campo contable deben utilizarse únicamente en la unidad organizativa (`Lista personalizada`) o si deben compartirse con otras unidades organizativas del contrato (`Lista sincronizada`).
5. En **Nivel de entrada**, selecciona si el campo contable debe aplicarse en el nivel de pedido o de ítem.
6. En **Requisito de entrada**, selecciona si el campo debe ser opcional u obligatorio.
7. En **Predeterminado {nombre del campo}**, si es necesario, ingresa el valor predeterminado que se autocompletará en todos los pedidos en donde aplique el campo.
8. Haz clic en `Guardar`.

## Agregar valor en campo contable

1. Accede a la [pantalla de inicio de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/organization-account-es#accessing-the-organization-account).
2. Haz clic en el nombre del campo contable al que deseas agregar un valor.
3. En la pantalla del campo contable, haz clic en el ícono `+` en la parte superior de la pantalla.
4. En la ventana modal, informa el valor que se asignará en el campo contable, como número de pedido o de centro de costos.
5. Haz clic en `Agregar`.

Listo, verás el mensaje de confirmación de que el valor fue creado con éxito en el campo contable.

## Editar valor en campo contable

1. Accede a la [pantalla de inicio de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/organization-account-es#accessing-the-organization-account).
2. Haz clic en el nombre del campo contable que deseas editar.
3. En la pantalla del campo contable, haz clic en el ícono <i class="fas fa-ellipsis-v"></i> junto al valor que deseas editar.
4. Selecciona una de las siguientes opciones, según la acción deseada:

- **Renombrar:** cambia el nombre del valor del campo.
- **Establecer como predeterminado:** define el valor como predeterminado, para que se autocomplete en todos los pedidos donde el campo sea aplicable.
- **Remover de la unidad:** remueve el valor de la unidad organizativa a la que está asignado. Esta acción no elimina el valor del sistema.
- **Eliminar:** elimina permanentemente el valor del sistema.

> ⚠️ Utiliza la opción **Eliminar** con precaución. Al eliminar un valor, eliminas definitivamente tanto el valor como todos los datos asociados en múltiples unidades organizativas, lo que puede afectar el acceso a información histórica y de auditoría. Tras la confirmación, esta acción no se puede deshacer.
