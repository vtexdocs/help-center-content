---
title: 'Agregar o editar unidades organizativas'
createdAt: '2026-03-03T10:00:00.000Z'
updatedAt: '2026-03-27T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-organizational-units
locale: es
---

> ⚠️ Esta funcionalidad es exclusiva para tiendas que usan B2B Buyer Portal, actualmente disponible solo para cuentas seleccionadas.

Las **unidades organizativas** (OU) permiten a las empresas gestionar su estructura interna de forma jerárquica, con presupuestos propios, flujos internos de aprobación, autonomía de compra y otros niveles de subdivisión. De esta forma, la plataforma permite que una única empresa B2B opere con múltiples estructuras internas, manteniendo consistencia contractual y control operativo.

Este artículo orienta sobre la gestión de las unidades organizativas y está dividido en las siguientes secciones:

- [Agregar unidad organizativa](#agregar-unidad-organizativa)
- [Renombrar unidad organizativa](#renombrar-unidad-organizativa)
- [Agregar usuario a una unidad organizativa](#agregar-usuario-a-una-unidad-organizativa)
- [Agregar unidad organizativa hija (subordinada)](#agregar-unidad-organizativa-hija-subordinada)
- [Remover unidad organizativa](#remover-unidad-organizativa)

> ⚠️ Para configurar unidades organizativas, el rol de [Storefront Roles](https://developers.vtex.com/docs/guides/storefront-permissions) del usuario debe ser `Organizational Unit Admin`, `Super Buyer Admin`, o contar con el recurso `ManageOrganizationHierarchy`.

## Agregar unidad organizativa

1. En la página de inicio de la cuenta de organización, en la sección **Organización**, haz clic en `Unidades organizativas`.

   ![organization_units_image_initial_org_account_page_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/organization-account/buying_policies_image_initial_org_account_page_PT.png)

2. En la pantalla de **Unidades organizativas**, haz clic en el ícono `+`.

3. Verifica en el campo **Padre** que la unidad organizativa seleccionada sea aquella de la que dependerá la nueva unidad subordinada (hija). Este campo no permite edición.

4. Llena el nombre de la nueva unidad organizativa. Puedes [renombrarla](#renombrar-unidad-organizativa) posteriormente.

5. Haz clic en `Agregar`.

Después de crear una unidad organizativa, se mostrará en la lista de la pantalla **Unidad organizativa**, donde podrás acceder a la cuenta de la organización haciendo clic en la fila correspondiente.

## Renombrar unidad organizativa

1. En la página **Unidades organizativas**, en la fila correspondiente a la unidad organizativa que deseas renombrar, haz clic en el ícono de menú <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Renombrar`.
2. Realiza los cambios deseados.
3. Haz clic en `Guardar`.

## Agregar usuario a una unidad organizativa

1. En la página **Unidades organizativas**, en la fila correspondiente a la unidad organizativa a la que deseas agregar un usuario, haz clic en el ícono de menú <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Agregar usuario`.
2. Completa la información del nuevo usuario:
   - Nombre
   - Email
   - Teléfono (opcional)
   - Nombre de usuario
3. Selecciona los roles que deseas asignar al usuario.

   > ℹ️ Para más información sobre roles en **B2B Buyer Portal**, consulta el artículo [Storefront Permissions](https://developers.vtex.com/docs/guides/storefront-permissions).
4. Haz clic en `Agregar`.

## Agregar unidad organizativa hija (subordinada)

1. En la página **Unidad organizativa**, en la fila correspondiente a la unidad organizativa deseada, haz clic en el ícono de menú <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Agregar unidad organizativa`.
2. Verifica en el campo **Padre** que la unidad organizativa seleccionada sea aquella de la que dependerá la nueva unidad subordinada (hija). Este campo no permite edición.
3. Llena el nombre de la unidad organizativa hija.
4. Haz clic en `Agregar`.

## Remover unidad organizativa

> ❗ Para remover una unidad organizativa que tiene unidades subordinadas, primero debes remover cada unidad hija individualmente, comenzando por el nivel más bajo.

1. En la página **Unidad organizativa**, en la fila correspondiente a la unidad organizativa que deseas remover, haz clic en el ícono de menú <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Eliminar`.
2. Llena el nombre de la unidad organizativa. Este campo distingue entre mayúsculas y minúsculas.
3. Haz clic en `Eliminar`.

> ℹ️ Para gestionar las unidades de tu organización vía API, accede a [Organizational Units API](https://developers.vtex.com/docs/api-reference/organization-units-api#overview).
