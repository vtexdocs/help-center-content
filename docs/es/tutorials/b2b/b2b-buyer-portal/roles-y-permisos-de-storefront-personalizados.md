---
title: 'Roles y permisos de storefront personalizados'
createdAt: '2026-09-29T18:10:00.000Z'
updatedAt: '2026-09-29T18:10:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: custom-storefront-roles-and-permissions-overview
locale: es
---

> ⚠️ Esta funcionalidad se encuentra disponible únicamente para tiendas que utilizan [B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es), actualmente disponible para cuentas seleccionadas.

En B2B Buyer Portal, las acciones que cada usuario de una organización compradora puede realizar en la tienda se definen mediante [roles de storefront](#roles-de-storefront), que reúnen [permisos](#permisos-de-storefront) para acceder a recursos en el sitio web de la tienda, como por ejemplo `PlaceOrders` (realizar pedidos) o `ApproveOrders` (aprobar pedidos).

VTEX ofrece roles y permisos predefinidos. Para escenarios específicos de tu negocio, también puedes crear roles y permisos personalizados vía API o desde el Admin VTEX.

> ℹ️ En el Admin VTEX los permisos personalizados se muestran como **permisos**. En la API y en los eventos de [Audit](https://help.vtex.com/es/docs/tutorials/audit), se les llama **recursos** (_resources_), como `Create Storefront Custom Resource`. No los confundas con los [recursos de License Manager](https://help.vtex.com/es/docs/tutorials/recursos-del-license-manager), que controlan el acceso al Admin.

Consulta a continuación más información sobre estos conceptos.

## Permisos de storefront

Un permiso autoriza el acceso a un recurso o una acción específica en el storefront. Por ejemplo, el permiso `PlaceOrders` permite que un usuario cree y envíe pedidos.

Existen dos tipos de permisos:

- **Predefinidos:** proporcionados por VTEX, no se pueden editar ni eliminar. Consulta la lista completa en [Permisos de storefront predefinidos](#permisos-de-storefront-predefinidos).
- **Personalizados:** creados por tu cuenta para autorizar el acceso a un recurso que los permisos predefinidos no cubren. Cada permiso personalizado tiene un nombre y una descripción. En la API se le llama custom storefront resource (recurso de storefront personalizado).

Los permisos personalizados tienen el mismo comportamiento que los predefinidos al autorizar una acción.

### Permisos de storefront predefinidos

Consulta en la siguiente tabla los permisos predefinidos disponibles. La columna **Clave** indica el identificador del permiso, usado en la API y en Audit.

| Clave | Descripción |
| --- | --- |
| `ManageOrganizationAndContract` | Permite gestionar la estructura de la organización, los contratos y la configuración relacionada. |
| `ManageOrganizationHierarchy` | Permite al usuario ignorar los límites de las unidades organizativas y gestionar entidades en el nivel de la organización raíz, incluyendo acceso y administración en todas las unidades organizativas. |
| `ManageUsers` | Permite crear, editar y eliminar usuarios. |
| `ViewUsers` | Otorga acceso de solo lectura a los detalles y a las listas de usuarios. |
| `ManageBuyingPolicies` | Permite crear, editar y eliminar políticas de compras y flujos de aprobación. |
| `ViewBuyingPolicies` | Otorga permiso para ver las políticas de compras configuradas, incluyendo reglas de aprobación y restricciones de gastos. |
| `ManageBudgets` | Permite control total sobre la creación, edición, asignación y eliminación de presupuestos. |
| `ViewBudget` | Otorga acceso de solo lectura a los detalles de presupuestos, incluyendo asignaciones, límites e historial de gastos. |
| `ManageAccountingFields` | Permite crear, editar y eliminar campos contables. |
| `ViewAccountingFields` | Otorga acceso de solo lectura a la configuración de los campos contables. |
| `ManageCreditCards` | Permite gestionar las tarjetas de crédito guardadas, incluyendo agregar, editar y remover tarjetas. |
| `ViewCreditCards` | Otorga acceso de solo lectura a las tarjetas de crédito guardadas. |
| `PlaceOrders` | Otorga la capacidad de crear y enviar pedidos. |
| `ViewMyContractOrders` | Permite al usuario ver los pedidos realizados en el contrato al que está asignado. |
| `ViewMyOrgUnitOrders` | Permite al usuario ver todos los pedidos de su unidad organizativa. |
| `ModifyOrders` | Otorga permiso para usar la funcionalidad de modificación de pedidos en todos los pedidos a los que el usuario tiene acceso. |
| `ApproveOrders` | Otorga la capacidad de aprobar o rechazar pedidos según flujos predefinidos. |
| `ManageAddresses` | Permite agregar una nueva dirección durante el checkout y guardarla para el contrato o la unidad organizativa. También permite modificar la información de dirección en el checkout. |
| `ViewAddresses` | Permite al usuario ver sus direcciones guardadas. |
| `UseAdHocCard` | Otorga permiso para usar una nueva tarjeta de crédito en el checkout. |

### Reglas y límites de los permisos de storefront personalizados

- Cada cuenta puede tener hasta **10 permisos personalizados**. Los permisos predefinidos no cuentan para el límite.
- El nombre debe tener de 5 a 80 caracteres y ser único en la cuenta, sin distinguir entre mayúsculas y minúsculas.
- El nombre no puede coincidir con el de ningún permiso o rol predefinido.
- El nombre funciona como identificador del permiso y no puede modificarse después de la creación. Para cambiarlo es necesario eliminar el permiso y crear otro.
- Un permiso personalizado no puede eliminarse mientras esté en uso por algún rol.

## Roles de storefront

Un **rol de storefront** determina el conjunto de permisos de un grupo de usuarios de la tienda. Cada usuario puede tener uno o más roles y, en ese caso, recibe la combinación de todos los permisos de esos roles.

Por ejemplo, un comprador que realiza pedidos y un gestor que aprueba pedidos necesitan permisos diferentes. En este caso, cada uno recibe un rol que incluye solo los permisos necesarios para su función.

Existen dos tipos de roles:

- **Predefinidos:** proporcionados por VTEX para cubrir los casos de uso más comunes; no se pueden editar ni eliminar. Consulta la lista completa en [Roles de storefront predefinidos](#roles-de-storefront-predefinidos).
- **Personalizados:** creados por tu cuenta combinando permisos predefinidos y personalizados. Un ejemplo es el rol **Visualizador de informes**, que reúne el permiso predefinido `ViewUsers` y un permiso personalizado que autoriza el acceso a un servicio externo de informes.

### Roles de storefront predefinidos

Consulta en la siguiente tabla los roles predefinidos disponibles y los permisos asociados a cada uno. La columna **ID** indica el identificador del rol usado en la API.

| Roles | ID | Descripción | Permisos asociados | Disponibilidad |
| -------------------------- | -- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Organizational Unit Admin | 1 | Gestiona la estructura de la organización, los contratos y la configuración relacionada. | `ManageOrganizationAndContract`, `ManageUsers`, `ViewUsers`, `ManageBuyingPolicies`, `ViewBuyingPolicies`, `ManageBudgets`, `ViewBudget`, `ManageAccountingFields`, `ViewAccountingFields`, `ManageCreditCards`, `ViewCreditCards` | Admin y API |
| Order Approver | 2 | Puede aprobar o rechazar pedidos según flujos predefinidos. | `ApproveOrders` | Admin y API |
| Order Modifier | 3 | Puede usar la funcionalidad de modificación de pedidos en todos los pedidos a los que tiene acceso. | `ModifyOrders` | Admin y API |
| Buyer | 4 | Puede crear y enviar pedidos. | `PlaceOrders` | Admin y API |
| Personal Cards User | 5 | Puede usar una nueva tarjeta de crédito en el checkout. | `UseAdHocCard` | Admin y API |
| Contract Manager | 6 | Puede ver los pedidos realizados en el contrato al que está asignado. | `ViewMyContractOrders` | Admin y API |
| Buyer Organization Manager | 7 | Puede ver todos los pedidos de su unidad organizativa. | `ViewMyOrgUnitOrders` | Admin y API |
| User Manager | 10 | Puede gestionar usuarios y ver los detalles de los usuarios de la organización. | `ManageUsers`, `ViewUsers` | Admin y API |
| Buying Policy Manager | 11 | Puede crear, editar y eliminar políticas de compras y flujos de aprobación, además de ver las políticas de compras. | `ManageBuyingPolicies`, `ViewBuyingPolicies` | Solo API |
| Budget Manager | 12 | Puede crear, editar, asignar y eliminar presupuestos, además de ver los detalles, las asignaciones, los límites y el historial de gastos. | `ManageBudgets`, `ViewBudget` | Solo API |
| Accounting Field Manager | 13 | Puede crear, editar y eliminar campos contables, además de ver la configuración de los campos. | `ManageAccountingFields`, `ViewAccountingFields` | Solo API |
| Super Buyer Admin | 16 | Tiene control administrativo total sobre la estructura de la organización compradora, incluida la gestión de unidades organizativas y de la configuración jerárquica. | `ManageOrganizationHierarchy` | Admin y API |
| Credit Card Manager | 41 | Puede gestionar y ver las tarjetas de crédito guardadas. | `ManageCreditCards`, `ViewCreditCards` | Admin y API |

> ℹ️ Los roles marcados como "Solo API" solo pueden asignarse a usuarios mediante los endpoints [Assign storefront roles](https://developers.vtex.com/docs/api-reference/storefront-roles-api#post-/api/license-manager/storefront/user/roles) o [Assign one storefront role](https://developers.vtex.com/docs/api-reference/storefront-roles-api#post-/api/license-manager/storefront/roles/assign).

> ℹ️ El 21 de septiembre de 2026, se removió el rol **Address Manager** (ID `9`). Los permisos `ManageAddresses` y `ViewAddresses` ahora solo pueden usarse en un rol personalizado. Las cuentas que tenían ese rol fueron migradas a un rol personalizado equivalente y mantienen el acceso.

### Reglas y límites de los roles de storefront personalizados

- El nombre debe ser único en la cuenta y no puede coincidir con el de ningún rol predefinido.
- A diferencia de los permisos personalizados, los roles pueden editarse después de creados. Al editar un rol, el cambio en los permisos se aplica de inmediato a todos los usuarios que tienen ese rol.
- Un rol no puede eliminarse mientras esté asignado a algún usuario.

Crear un rol no lo asigna a ningún usuario. La asignación se realiza al gestionar los usuarios de la organización compradora. Más información en [Agregar usuarios a la organización compradora](https://help.vtex.com/es/docs/tutorials/agregar-usuarios-a-la-organizacion-compradora).

## Auditoría

Toda creación, edición y eliminación de roles y permisos personalizados se registra en [Audit](https://help.vtex.com/es/docs/tutorials/audit). Los eventos relacionados con esta funcionalidad, como `Create Storefront Custom Role` y `Delete Storefront Custom Resource`, están listados en la sección License Manager del artículo [Eventos disponibles en Audit](https://help.vtex.com/es/docs/tutorials/eventos-disponibles-en-audit#license-manager).

## Gestionar roles y permisos de storefront personalizados

Puedes crear, consultar, editar y eliminar roles y permisos personalizados desde el Admin VTEX en la página **Permisos personalizados**. Para conocer los requisitos de acceso, los componentes de la página y las instrucciones de cada acción, consulta [Gestionar roles y permisos de storefront personalizados](https://help.vtex.com/es/docs/tutorials/gestionar-roles-y-permisos-de-storefront-personalizados).

> ℹ️ Para gestionar roles y permisos personalizados vía API, accede a [Storefront Roles API](https://developers.vtex.com/docs/api-reference/storefront-roles-api) y a la guía para desarrolladores [Custom storefront roles and resources](https://developers.vtex.com/docs/guides/custom-storefront-roles-and-resources).

## Más información

- [Gestionar roles y permisos de storefront personalizados](https://help.vtex.com/es/docs/tutorials/gestionar-roles-y-permisos-de-storefront-personalizados)
- [Agregar usuarios a la organización compradora](https://help.vtex.com/es/docs/tutorials/agregar-usuarios-a-la-organizacion-compradora)
- [Recursos de License Manager](https://help.vtex.com/es/docs/tutorials/recursos-del-license-manager)
