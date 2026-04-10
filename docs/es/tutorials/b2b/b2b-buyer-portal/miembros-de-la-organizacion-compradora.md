---
title: 'Miembros de la organización compradora'
createdAt: '2025-02-06T10:00:00.000Z'
updatedAt: '2026-04-10T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: buyer-organization-members
locale: es
---

En una organización compradora B2B, los miembros son las personas que interactúan con la tienda en nombre de la organización. Sus acciones se definen por los roles y permisos que se les asignan y por la forma en que la organización utiliza los **destinatarios** y los **datos del comprador**. Este artículo explica los tipos de miembros y los conceptos relacionados para definir las acciones que diferentes usuarios pueden realizar en la organización.

> ⚠️ Esta funcionalidad solo está disponible para tiendas que usan [B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es), actualmente está disponible para cuentas seleccionadas.

## Roles del storefront

Los roles definen lo que cada usuario puede hacer en la tienda, incluyendo la gestión de la cuenta de la organización. Cada rol tiene un conjunto de permisos. Cuando se asignan uno o más roles a un usuario, este obtiene los permisos combinados a dichos roles. El uso de permisos en la tienda permite restringir el aceso de los usuarios para que vean y usen únicamente los recursos autorizados.

La siguiente tabla resume los principales roles y sus funciones:

| Rol | Propósito |
| --- | --- |
| **Organizational Unit Admin** | Control total sobre la unidad organizativa: configuraciones de la organización y contrato, usuarios, políticas de compras, presupuestos, campos contables y tarjetas de crédito. |
| **Super Buyer Admin** | Puede gestionar todas las unidades organizativas desde el nivel raíz de la organización, más allá de los límites de unidades individuales. |
| **Buyer** | Puede realizar pedidos en la tienda. |
| **Order Approver** | Puede aprobar o rechazar pedidos de acuerdo con los flujos de aprobación configurados. |
| **Order Modifier** | Puede utilizar la funcionalidad de modificación de pedido en los pedidos a los cuales tiene acceso. |
| **Address Manager** | Puede agregar y gestionar direcciones durante el checkout y ver direcciones guardadas. |
| **Buyer Organization Manager** | Puede visualizar todos los pedidos de su unidad organizativa. |
| **Contract Manager** | Puede ver pedidos realizados bajo el contrato que le ha sido asignado. |
| **User Manager** | Puede gestionar usuarios y ver detalles de usuarios dentro de la organización. |
| **Buying Policy Manager** | Puede crear, editar y eliminar políticas de compra y flujos de aprobación, y ver las políticas de compra. |
| **Budget Manager** | Puede crear, editar, asignar y eliminar presupuestos, y ver detalles del presupuesto, asignaciones, límites e historial de gastos. |
| **Accounting Field Manager** | Puede crear, editar y eliminar campos contables, y ver configuraciones de campos contables. |
| **Credit Card Manager** | Puede gestionar y ver tarjetas de crédito guardadas. |
| **Personal Cards User** | Puede usar una nueva tarjeta de crédito en el checkout que no se guarda en el contrato de forma predeterminada. |

> ℹ️ Obtén más información sobre los roles del storefront y los recursos en la guía para desarrolladores [Storefront Roles](https://developers.vtex.com/docs/guides/storefront-roles).

## Destinatarios

**Los destinatarios** son las personas que pueden seleccionarse como destinatarias de los pedidos, es decir, la persona que recibirá el envío. El contacto de un pedido puede ser diferente del usuario que lo realizó. Al realizar un pedido, el comprador puede elegir el contacto destinatario del pedido.

La información de los destinatarios se gestiona a nivel de la organización. Los contactos pueden estar vinculados a direcciones para que, al seleccionar una dirección de envío, el usuario pueda elegir entre los contactos asociados a esa dirección. Esto mantiene los datos de los destinatarios centralizados y permite que se reutilicen en otros pedidos.

Para detalles técnicos sobre cómo crear, actualizar e integrar destinatarios vía APIs, consulta la [API de Destinatarios B2B](https://developers.vtex.com/docs/api-reference/b2b-recipients-api).

## Compradores

Los **compradores** son usuarios que pueden realizar pedidos y están asociados a la organización compradora. Los datos del comprador son la información que identifica y describe a estos usuarios en el contexto de la tienda y de los flujos de pedidos, por ejemplo, para checkout e historial de pedidos.

La tienda utiliza los datos del comprador para identificar quién realiza el pedido y aplicar los permisos, políticas y contratos correctos.

Para saber cómo crear y gestionar los datos del comprador, consulta la [API de datos del comprador B2B](https://developers.vtex.com/docs/api-reference/b2b-buyer-data-api).
