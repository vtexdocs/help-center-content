---
title: 'Agregar o editar políticas de compras'
createdAt: '2026-02-27T10:00:00.000Z'
updatedAt: '2026-02-06T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-buying-policies
locale: es
---

> ⚠️ La funcionalidad **Política de compras** está disponible solo para **B2B Buyer Portal**.

[Política de compras](https://help.vtex.com/es/docs/tutorials/politicas-de-compras) es la funcionalidad que permite a los usuarios de la organización compradora configurar reglas para autorizar o denegar pedidos automáticamente. Los mecanismos dinámicos de esta solución fortalecen la gobernanza de la organización y promueven el cumplimiento de las políticas de compras vigentes.

Este artículo orienta a los usuarios sobre la gestión de las políticas de compras y está dividido en las siguientes secciones:

- Agregar políticas de compras
- Ver página de detalles
- Editar políticas de compras
- Eliminar políticas de compras

> ⚠️ Para configurar las políticas de compras, el rol de [Storefront permissions](https://developers.vtex.com/docs/guides/storefront-permissions) del usuario debe tener el recurso `ManageBuyingPolicies`. Para autorizar pedidos, es necesario el recurso `ApproveOrders`.

## Agregar políticas de compras

1. En la página de la unidad organizativa, en la sección **Finanzas y compliance**, haz clic en `Política de compras`.

   ![buying_policies_image_initial_org_account_page_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/b2b/b2b-buyer-portal/buying_policies_image_initial_org_account_page_ES.png)

2. En la pantalla **Políticas de compras**, haz clic en el ícono `+` en la parte superior de la pantalla para agregar una nueva política de compras.

3. En el modal **Agregar nueva política de compras**, llena los campos; todos son obligatorios:

   - En **Información básica**, define el nombre y la descripción de la política de compras que se mostrará en el checkout para los compradores:
     - **Nombre:** nombre de la política de compras.
     - **Descripción:** breve explicación del funcionamiento de la política de compras. Una buena descripción ayuda a los usuarios que interactúen con esta política de compras a entender por qué se denegó un pedido o se requirió aprobación manual.
   - En **Criterios**, define los criterios que determinan la aplicación de la política de compras. Debes llenar el campo con una expresión en formato [JSONata](https://jsonata.org/), como `score ≥ 10`. Puedes seleccionar el criterio deseado y luego editar los valores deseados (destacados en morado):
     - **Establecer criterios de límite de gasto (definir criterio de precio):** opciones de aprobación o denegación de pedidos en función del precio del pedido. Por ejemplo, si el pedido es mayor, menor o igual a determinado valor.

     - **Establecer criterios de características del pedido:** opciones para aprobar o rechazar pedidos en función de las condiciones y propiedades del mismo. Por ejemplo, si tiene ítems restringidos o si tiene asignado un centro de costos específico.

   > ℹ️ Los valores usados en los criterios de autorización de pedidos son centesimales y la moneda corresponde a la misma utilizada en el carrito de compras del pedido.

   - En **Acción**, selecciona la acción que se aplicará a los pedidos que tengan las características definidas en los criterios:
     - **Denegar pedido:** el pedido será rechazado.

     - **Ignorar todas las políticas de compras:** el pedido se aprobará automáticamente, sin importar los criterios definidos.

     - **Flujo de trabajo secuencial:** el pedido será aprobado o denegado manualmente por un usuario autorizado. Para esta opción, es necesario ingresar el nombre de una unidad organizativa para que el usuario de esa unidad revise el pedido.
     > ⚠️ Es posible definir una jerarquía de hasta cinco unidades organizativas, siendo el quinto nivel el último en revisar el pedido. Cualquier nivel puede denegar el pedido, pero la aprobación final depende de la autorización de todos los niveles.

4. Para guardar la configuración, haz clic en `Agregar`.

Al finalizar, verás el mensaje de confirmación _"Política de compras creada con éxito"_.

## Ver página de detalles

Para ver los detalles de una política, en la pantalla **Política de compras**, haz clic en el nombre de la política o, en la fila correspondiente a la opción deseada, haz clic en el menú > `Abrir`. Verás una imagen como la siguiente:

![buying_policies_image_1](link)

## Editar políticas de compras

1. En la página de la unidad organizativa en la sección **Finanzas y compliance**, haz clic en `Políticas de compras`.
2. En la pantalla **Políticas de compras**, en la fila correspondiente a la opción deseada, haz clic en el menú > `Editar`. También puedes acceder a esta sección desde la [página de detalles](#ver-pagina-de-detalles) de la política, haciendo clic en `Editar`.
3. Realiza los cambios deseados.
4. Para guardar los cambios, haz clic en `Guardar`.

## Eliminar políticas de compras

> ❗ La eliminación de una política de compras es permanente y no se puede deshacer. Las configuraciones se eliminan, pero el historial de aplicación de la política de compras se almacena para futuras consultas.

1. En la página de la unidad organizativa, en la sección **Finanzas y compliance**, haz clic en `Políticas de compras`.
2. En la página **Políticas de compras**, en la fila correspondiente a la opción deseada, haz clic en el ícono del menú > `Eliminar`. También puedes hacerlo desde la [página de detalles](#ver-pagina-de-detalles) de la política de compras, haciendo clic en menú > `Eliminar`.
3. Ingresa en la ventana modal el nombre de la política de compras que deseas eliminar.
4. Para confirmar, haz clic en `Eliminar`.

Al finalizar, verás el mensaje de confirmación _"Política de compras eliminada con éxito"_ y, al volver a la pantalla principal, la política ya no estará en la lista.

> ℹ️ Para gestionar reglas de autorización de pedidos vía API, accede a la [API Buying Policies](https://developers.vtex.com/docs/api-reference/buying-policies-api) y consulta la guía para desarrolladores [Buying Policies](https://developers.vtex.com/docs/guides/buying-policies).
