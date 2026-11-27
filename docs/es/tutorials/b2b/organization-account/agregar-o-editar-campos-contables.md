---
title: 'Agregar o editar campos contables'
createdAt: '2025-02-09T10:00:00.000Z'
updatedAt: '2026-03-16T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-accounting-fields
locale: es
---

> ⚠️ Esta funcionalidad se encuentra disponible únicamente para tiendas que utilizan [B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es), actualmente disponible para cuentas seleccionadas.

La funcionalidad Campos contables permite estandarizar la recopilación de información durante el proceso de compra, mediante la adición de campos de acuerdo con las reglas de tu negocio.

Esta funcionalidad garantiza que los compradores ingresen correctamente información como el número de orden de compra (PO), el centro de costos y otros datos internos en el checkout, lo que mejora el control operativo y el cumplimiento de los procesos de la empresa.

Este artículo aborda los siguientes temas:

- [Agregar campo contable](#agregar-campo-contable)
- [Editar campo contable](#editar-campo-contable)
- [Agregar un valor a un campo contable](#agregar-un-valor-a-un-campo-contable)
- [Editar valor en un campo contable](#editar-valor-en-un-campo-contable)
- [Eliminar campo contable](#eliminar-campo-contable)

## Agregar campo contable

Para agregar un campo contable sigue los pasos a continuación:

1. Accede a la [pantalla de inicio de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/cuenta-de-la-organizacion#acceder-a-la-cuenta-de-la-organizacion).
2. Haz clic en el ícono `+` al lado de **Campos contables**.
3. En el panel que se muestra, completa la siguiente información:
    - **Etiqueta del campo:** ingresa el nombre que identifica el campo contable.
    - **Nivel de entrada:** selecciona **Nivel del pedido** para aplicar el campo al pedido entero o **Nivel del ítem** para aplicarlo a cada ítem en el carrito.
    - **Requisito de llenado:** selecciona si el llenado del campo es **Obligatorio** u **Opcional**.
    - **Habilitar campo de texto libre para que los compradores puedan ingresar un valor manualmente en el checkout:** marca esta casilla para permitir que los compradores ingresen un valor propio en el checkout.
4. Haz clic en `Crear`.

Una vez hecho esto se mostrará un mensaje confirmando la creación del campo contable. Los cambios pueden tardar hasta 10 minutos en aplicarse.

Los campos contables creados en la interfaz funcionan como listas de valores: agregas y administras los valores disponibles para los compradores, tal como se describe en la sección [Agregar un valor a un campo contable](#agregar-un-valor-a-un-campo-contable).

> ℹ️ También puedes crear campos contables de forma programática usando [Custom Fields API](https://developers.vtex.com/docs/api-reference/custom-fields-api). Para más información, consulta la [Guía de integración de campos personalizados](https://developers.vtex.com/docs/guides/custom-fields-integration).

## Editar campo contable

Para editar las configuraciones de un campo contable sigue los pasos a continuación:

1. Accede a la [pantalla de inicio de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/cuenta-de-la-organizacion#acceder-a-la-cuenta-de-la-organizacion).
2. Haz clic en el nombre del campo contable que deseas editar.
3. En la pantalla del campo contable, haz clic en el ícono de configuración <i class="fas fa-cog" aria-hidden="true"></i> en la parte superior de la página.
4. En **Tipo de lista**, selecciona **Lista personalizada** para gestionar una lista de valores exclusiva de la unidad organizativa o **Lista compartida** para usar la lista de valores definida por el [contrato](https://help.vtex.com/es/docs/tutorials/contratos-b2b-es), que la plataforma actualiza automáticamente.
5. En **Etiqueta del campo** edita el nombre que identifica el campo contable, si es necesario.
6. En **Nivel de entrada** selecciona si el campo contable debe aplicarse en el nivel de pedido o de ítem.
7. En **Requisito de llenado** selecciona si el llenado del campo es obligatorio u opcional.
8. Marca la casilla **Habilitar campo de texto libre para que los compradores puedan ingresar un valor manualmente en el checkout** para permitir que los compradores escriban un valor propio en el checkout, o desmárcala para permitir solo valores de la lista.
9. Haz clic en `Guardar`.

## Agregar un valor a un campo contable

Para agregar un valor a un campo contable sigue los pasos a continuación:

1. Accede a la [pantalla de inicio de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/cuenta-de-la-organizacion#acceder-a-la-cuenta-de-la-organizacion).
2. Haz clic en el nombre del campo contable al que deseas agregar un valor.
3. En la pantalla del campo contable, haz clic en el ícono `+` en la parte superior de la pantalla.
4. En el panel que se muestra, completa el campo **Nombre** con el valor que deseas asignar al campo contable, como un número de orden de compra (PO) o un centro de costos. Si lo deseas, completa también el campo **Descripción (opcional)**.
5. Haz clic en `Agregar`.

Se mostrará mensaje que confirma la creación del valor en el campo contable.

## Editar un valor en un campo contable

Para editar un valor en un campo contable sigue los pasos a continuación:

1. Accede a la [pantalla de inicio de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/cuenta-de-la-organizacion#acceder-a-la-cuenta-de-la-organizacion).
2. Haz clic en el nombre del campo contable que deseas editar.
3. En la pantalla del campo contable, haz clic en el ícono de opciones <i class="fas fa-ellipsis-v" aria-hidden="true"></i> al lado del valor que deseas editar.
4. Selecciona una de las siguientes opciones, según la acción deseada:
    - **Editar:** cambia el nombre del valor del campo.
    - **Definir como predeterminado:** define el valor como predeterminado, que la plataforma completa automáticamente en todos los pedidos a los que se aplica el campo.
    - **Remover de la unidad:** remueve el valor de la unidad organizativa a la que está asignado. Esta acción no elimina el valor del sistema.
    - **Eliminar:** elimina permanentemente el valor del sistema.

> ❗ Usa la opción **Eliminar** con cuidado. Eliminar un valor remueve de forma permanente ese valor y todos los datos asociados en varias unidades organizativas, lo que puede impedir el acceso al historial y a las auditorías. Tras la confirmación, no podrás deshacer esta acción.

## Eliminar campo contable

Al eliminar un campo contable, remueves el campo de todas las unidades organizativas y eliminas de forma permanente todos sus valores y datos relacionados. La plataforma conserva únicamente el historial de uso del campo para fines de auditoría.

> ❗ No puedes deshacer la eliminación de un campo contable. Para eliminar solo un valor específico de un campo usa la opción **Eliminar** del menú de opciones del valor, descrita en [Editar un valor en un campo contable](#editar-un-valor-en-un-campo-contable).

Para eliminar un campo contable sigue los pasos a continuación:

1. Accede a la [pantalla de inicio de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/cuenta-de-la-organizacion#acceder-a-la-cuenta-de-la-organizacion).
2. Haz clic en el nombre del campo contable que deseas eliminar.
3. En la pantalla del campo contable haz clic en el ícono de eliminación <i class="fas fa-trash-alt" aria-hidden="true"></i> en la parte superior de la página.
4. En el panel **Eliminar campo contable** ingresa la etiqueta del campo para confirmar la eliminación.
5. Haz clic en `Eliminar`.
