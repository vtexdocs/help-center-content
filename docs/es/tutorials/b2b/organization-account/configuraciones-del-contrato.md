---
title: 'Configuración del contrato'
createdAt: '2026-03-14T10:00:00.000Z'
updatedAt: '2026-03-14T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: contract-settings
locale: es
---

> ⚠️ Esta funcionalidad está disponible solo para tiendas que usan B2B Buyer Portal, y por el momento, únicamente para cuentas seleccionadas.

La sección **Contrato** en la [cuenta de la organización](https://help.vtex.com/es/docs/tutorials/cuenta-de-la-organizacion) reúne configuraciones que definen cómo una organización compradora opera en una tienda B2B Buyer Portal. En esta sección el usuario puede ver información de perfil, gestionar direcciones, configurar medios de pago y tarjetas de crédito, seleccionar surtidos de productos y gestionar [campos contables](https://help.vtex.com/es/docs/tutorials/campos-contables).

Este artículo describe los siguientes elementos:

- [Ver información de perfil](#ver-informacion-de-perfil)
- [Gestionar direcciones](#gestionar-direcciones)
  - [Agregar una dirección](#agregar-una-direccion)
  - [Editar una dirección](#editar-una-direccion)
  - [Eliminar una dirección](#eliminar-una-direccion)
- [Gestionar medios de pago](#gestionar-medios-de-pago)
  - [Agregar un medio de pago](#agregar-un-medio-de-pago)
  - [Remover un medio de pago](#remover-un-medio-de-pago)
- [Gestionar tarjetas de crédito](#gestionar-tarjetas-de-credito)
  - [Agregar una tarjeta de crédito](#agregar-una-tarjeta-de-credito)
  - [Editar una tarjeta de crédito](#editar-una-tarjeta-de-credito)
  - [Eliminar una tarjeta de crédito](#eliminar-una-tarjeta-de-credito)
- [Seleccionar un surtido de productos](#seleccionar-un-surtido-de-productos)
- [Campos contables](#campos-contables)

## Ver información de perfil

La página **Perfil** muestra información básica sobre el contrato, incluyendo nombre, email y fecha de creación. Esta información no se puede editar.

1. En la [pantalla principal de de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/cuenta-de-la-organizacion#acceder-a-la-cuenta-de-la-organizacion), en la sección **Contrato**, haz clic en **Perfil.**
2. Consulta los detalles en la sección **Detalles**.

## Gestionar direcciones

La página **Direcciones** lista todas las direcciones disponibles para la unidad organizativa. Cada dirección muestra el nombre y el tipo. El usuario puede buscar, agregar, editar y eliminar direcciones en esta página.

Además de los datos de la dirección, el usuario puede asociar **ubicaciones** y **destinatarios** a una dirección.

Una **ubicación** es un punto específico de envío dentro de una dirección, como muelle, departamento o área interna. Por ejemplo, el pedido se envía a la dirección de la empresa, pero la entrega es en el Muelle-3456.

Los **destinatarios** son personas registradas en la organización compradora para recibir pedidos en esa dirección.

### Agregar una dirección

1. En la [pantalla principal de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/configuraciones-del-contrato), en la sección **Contrato**, haz clic en **Direcciones.**
2. En **Direcciones**, haz clic en el ícono **+** en la parte superior de la pantalla.
3. En el panel **Agregar dirección** puedes elegir una dirección entre las registradas para tu organización. Si aún no hay ninguna dirección registrada o deseas guardar una nueva, completa la información solicitada en las siguientes pestañas:
   - En la pestaña **Detalles**, completa los campos de dirección:
     - **País:** selecciona el país.
     - **Nombre de la dirección:** asigna un nombre para identificar la dirección.
     - **Dirección:** ingresa calle y número.
     - **Información adicional (opcional):** ingresa información adicional, si es necesario.
     - **Ciudad:** ingresa la ciudad.
     - **Estado:** selecciona el estado.
     - **Código postal:** informa el código postal.
     - **Tipo de dirección:** selecciona el tipo de dirección.
   - En la pestaña **Ubicaciones**, opcionalmente agrega ubicaciones asociadas a esta dirección. Haz clic en `Agregar ubicación` para agregar más ubicaciones.
   - En la pestaña **Destinatarios** tienes la opción de agregar destinatarios para esta dirección. Haz clic en `Agregar destinatario` para incluir más destinatarios, cada uno con **Nombre** y **Número de teléfono.**
4. Haz clic en `Agregar`.

### Editar una dirección

1. En la [pantalla principal de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/organization-account-subcategoria-es), en la sección **Contrato**, haz clic en **Direcciones.**
2. En la página **Direcciones**, en la fila correspondiente, haz clic en el ícono de menú <i class="fas fa-ellipsis-v" aria-hidden="true"></i> y selecciona una de las acciones disponibles:
   - `Abrir`: ver los detalles de la dirección.
   - `Editar detalles`: editar la información de la dirección.
   - `Agregar ubicaciones`: agregar ubicaciones a la dirección.
   - `Agregar destinatarios`: agregar destinatarios a la dirección.
   - `Establecer como predeterminado`: definir como la dirección predeterminada de la unidad.
   - `Remover de la unidad`: remueve la dirección de la unidad organizativa actual sin eliminarla.
3. Realiza los cambios deseados.
4. Haz clic en `Guardar`.

### Eliminar una dirección

> ❗ Eliminar una dirección es permanente y no se puede deshacer. La dirección puede ser utilizada por varias unidades organizativas. Al eliminarla, la dirección y todos sus datos se eliminan de todas las unidades asociadas; el historial de uso se mantiene para auditoría.

1. En la [pantalla principal de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/organization-account-subcategoria-es), en la sección **Contrato**, haz clic en **Direcciones.**
2. En **Direcciones**, en la fila correspondiente, haz clic en el ícono de menú <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Eliminar`.
3. En el panel lateral escribe el nombre de la dirección para confirmar.
4. Haz clic en `Eliminar`.

## Gestionar medios de pago

La página **Medios de pago** lista los medios de pago actualmente disponibles para la unidad organizativa. El usuario puede agregar medios de los disponibles para la unidad o remover los existentes.

### Agregar un medio de pago

1. En la [pantalla principal de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/organization-account-subcategoria-es), en la sección **Contrato**, haz clic en **Medios de pago.**
2. En **Medios de pago**, haz clic en el ícono **+** en la parte superior de la pantalla.
3. En el panel **Agregar medios de pago**, selecciona los medios de pago que deseas agregar marcando las casillas correspondientes.
4. Haz clic en `Agregar`.

Los medios seleccionados se mostrarán en la página **Medios de pago** y estarán disponibles para los usuarios de esta unidad en el checkout.

### Remover un medio de pago

1. En la [pantalla principal de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/organization-account-subcategoria-es), en la sección **Contrato**, haz clic en **Medios de pago.**
2. En **Medios de pago**, haz clic en el ícono **−** junto al medio de pago que deseas remover.
3. En el panel lateral de confirmación haz clic en `Remover`.

> ⚠️ Remover un medio de pago impide que los usuarios de esta unidad organizativa lo utilicen en el checkout.

## Gestionar tarjetas de crédito

La página **Tarjetas de crédito** muestra todas las tarjetas disponibles para la unidad organizativa. Cada tarjeta muestra su alias y una opción para activarla o desactivarla. Los usuarios pueden agregar nuevas tarjetas, editar la información de tarjetas existentes y remover tarjetas.

Las tarjetas de crédito asociadas al contrato se comparten con la unidad organizativa, pero pueden restringirse mediante [scopes].(https://help.vtex.com/es/docs/tutorials/vision-general-de-scopes). En el checkout, los compradores pueden seleccionar una tarjeta por su alias entre las que están vinculadas al contrato y disponibles para esa unidad.

### Agregar una tarjeta de crédito

1. En la [pantalla principal de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/organization-account-subcategoria-es), en la sección **Contrato**, haz clic en **Tarjetas de crédito.**
2. En **Tarjetas de crédito**, haz clic en el ícono **+**.
3. En el panel **Agregar tarjeta de crédito** completa los siguientes campos:
   - **Alias de la tarjeta:** introduce un nombre para identificar la tarjeta.
   - En **Detalles de la tarjeta:**
     - **Número de tarjeta:** ingresa el número de la tarjeta.
     - **Exp MM/AA:** ingresa la fecha de vencimiento.
     - **CVV:** ingresa el código de seguridad.
     - **Nombre del titular de la tarjeta:** ingresa el nombre impreso en la tarjeta.
   - En **Dirección de facturación:**
     - **Línea de dirección 1:** ingresa la dirección de facturación.
     - **Línea de dirección 2 (opcional):** ingresa información adicional, si es necesario.
     - **Ciudad:** ingresa la ciudad.
     - **Estado:** selecciona el estado.
4. Haz clic en `Agregar`.

### Editar una tarjeta de crédito

Después de agregar una tarjeta de crédito solamente se puede editar el alias.

1. En la [pantalla principal de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/organization-account-subcategoria-es), en la sección **Contrato**, haz clic en **Tarjetas de crédito.**
2. En **Tarjetas de crédito**, en la fila correspondiente, haz clic en el ícono de menú <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Editar`.
3. En el panel **Editar tarjeta de crédito** actualiza el alias de la tarjeta.
4. Haz clic en `Guardar`.

### Eliminar una tarjeta de crédito

> ❗ Eliminar una tarjeta de crédito es permanente y no se puede deshacer.

1. En la [pantalla principal de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/organization-account-subcategoria-es), en la sección **Contrato**, haz clic en **Tarjetas de crédito.**
2. En la página **Tarjetas de crédito**, en la fila correspondiente, haz clic en el ícono de menú <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Eliminar`.
3. En el panel de confirmación haz clic en `Eliminar`.

## Seleccionar un surtido de productos

La página **Surtido de productos** permite elegir el surtido de productos al que pueden acceder los usuarios de la unidad organizativa. Cada unidad organizativa puede tener un surtido activo a la vez.

Un **surtido de productos** es el conjunto de productos disponibles para los compradores de esa unidad. Las distintas unidades pueden usar surtidos diferentes cuando las reglas de negocio requieren catálogos o selecciones separadas.

1. En la [pantalla principal de la cuenta de la organización](https://help.vtex.com/es/docs/tutorials/organization-account-subcategoria-es), en la sección **Contrato**, haz clic en **Surtido de productos.**
2. En la página **Surtido de productos** selecciona el surtido deseado en la lista haciendo clic en el botón de opción correspondiente.

La selección se guarda automáticamente.

## Campos contables

Los [campos contables](https://help.vtex.com/es/docs/tutorials/campos-contables) configurados por la organización compradora se muestran como elementos individuales de menú en la sección **Contrato** de la barra lateral. Estos campos recopilan información adicional durante el checkout, como centros de costo, números de PO o códigos de departamento.

Para saber cómo agregar o gestionar estos campos, consulta [Agregar o editar campos contables](https://help.vtex.com/es/docs/tutorials/campos-contables).
