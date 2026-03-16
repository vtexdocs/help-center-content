---
title: 'Gestionar campos personalizables en el checkout (B2B)'
createdAt: '2025-02-10T10:00:00.000Z'
updatedAt: '2025-02-10T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: manage-customizable-fields-at-checkout-b2b
locale: es
---

> ⚠️ Esta funcionalidad está disponible solo para **B2B Buyer Portal**.

La funcionalidad [Campos personalizables en el checkout (B2B)](https://help.vtex.com/es/docs/tutorials/gerenciar-campos-customizaveis-no-checkout-b2b) permite estandarizar la recopilación de información durante el proceso de compra, mediante la adición de campos personalizados de acuerdo con las reglas de tu negocio.

Este recurso permite garantizar que datos como el número de orden de compra (PO number), el centro de costos u otra información interna se llenen correctamente en el checkout, lo que facilita un mayor control operativo y el cumplimiento de los procesos de la empresa.

Este artículo incluye los siguientes procedimientos:

- [Editar campo personalizable](#editar-campo-personalizable)
- [Agregar valor en campo personalizable](#agregar-valor-en-campo-personalizable)
- [Editar valor en campo personalizable](#editar-valor-en-campo-personalizable)

![Buyer Portal B2B Organization Unit information page](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/b2b-buyer-portal/buyer-portal-b2b-organization-unit-information-page.png)

## Editar campo personalizable

1. En la pantalla principal de B2B Buyer Portal, haz clic en el ícono `Empresa`.
2. En la parte inferior del menú lateral, al lado del nombre de la unidad organizativa, haz clic en el botón **Gestionar**.
3. En la pantalla de información de la unidad organizativa, haz clic en el botón **Gestionar configuración de contratos**.
4. En la sección **Campos contables**, haz clic sobre el nombre del campo personalizable deseado.
5. En la pantalla del campo personalizable, haz clic en el ícono <i class="fas fa-cog"></i> en la parte superior de la pantalla para editar la información del campo personalizable.
6. En **Tipo de lista**, selecciona si los valores del campo personalizable deben utilizarse únicamente en la unidad organizativa (`Lista personalizada`) o si deben compartirse con otras unidades organizativas del contrato (`Lista sincronizada`).
7. En **Nivel de entrada**, selecciona si el campo personalizable debe aplicarse en el nivel de pedido o de ítem.
8. En **Requisito de entrada**, selecciona si el campo debe ser opcional u obligatorio.
9. En **Predeterminado {nombre del campo}**, si es necesario, ingresa el valor predeterminado que se autocompletará en todos los pedidos en donde aplique el campo.
10. Haz clic en `Guardar`.

## Agregar valor en campo personalizable

1. En la pantalla principal de B2B Buyer Portal haz clic en el ícono `Empresa`.
2. En el modal de la unidad organizativa, haz clic en el botón **Gestionar**.
3. En la pantalla de información de la unidad organizativa, haz clic en el botón **Gestionar configuración de contratos**.
4. En la sección **Campos contables**, haz clic en el nombre del campo personalizable deseado.
5. En la pantalla del campo personalizable, haz clic en el ícono `+` en la parte superior de la pantalla.
6. En la ventana modal, informa el valor que se asignará en el campo personalizable, como número de pedido o de centro de costos.
7. Haz clic en `Agregar`.

Listo, verás el mensaje de confirmación de que el valor fue creado con éxito en el campo personalizable.

## Editar valor en campo personalizable

1. En la pantalla principal de B2B Buyer Portal, haz clic en el ícono `Empresa`.
2. En la parte inferior del menú lateral, al lado del nombre de la unidad organizativa, haz clic en el botón **Gestionar**.
3. En la pantalla de información de la unidad organizativa, haga clic en el botón **Gestionar configuración de contratos**.
4. En la sección **Campos contables**, haz clic en el nombre del campo personalizable deseado.
5. En la pantalla del campo personalizable, haz clic en el ícono <i class="fas fa-ellipsis-v"></i> junto al valor que deseas editar.
6. Selecciona una de las siguientes opciones, según la acción deseada:

- **Renombrar:** cambia el nombre del valor del campo.
- **Establecer como predeterminado:** define el valor como predeterminado, para que se autocomplete en todos los pedidos donde el campo sea aplicable.
- **Remover de la unidad:** remueve el valor de la unidad organizativa a la que está asignado. Esta acción no elimina el valor del sistema.
- **Eliminar:** elimina permanentemente el valor del sistema.

> ⚠️ Utiliza la opción **Eliminar** con precaución. Al eliminar un valor, eliminas definitivamente tanto el valor como todos los datos asociados en múltiples unidades organizativas, lo que puede afectar el acceso a información histórica y de auditoría. Tras la confirmación, esta acción no se puede deshacer.