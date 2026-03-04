---
title: 'Miembros de la organización compradora'
createdAt: '2025-02-06T10:00:00.000Z'
updatedAt: '2025-03-03T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: buyer-organization-members
locale: es
---

En una organización compradora B2B, los miembros son las personas que interactúan con la tienda en nombre de la organización. Sus acciones se definen por los roles y permisos que se les asignan y por la forma en que la organización utiliza la **información de contacto** y los **datos del comprador**. Este artículo explica los tipos de miembros y los conceptos relacionados para definir las acciones que diferentes usuarios pueden realizar en la organización.

> ⚠️ Esta funcionalidad solo está disponible para tiendas que usan B2B Buyer Portal, actualmente está disponible para cuentas seleccionadas.

## Roles basados en permisos

Los roles definen lo que cada usuario puede hacer en la tienda, incluyendo la gestión de la cuenta de la organización. Cada rol tiene un conjunto de permisos. Cuando se asignan uno o más roles a un usuario, este obtiene los permisos combinados a dichos roles. El uso de permisos en la tienda permite restringir el aceso de los usuarios para que vean y usen únicamente los recursos autorizados.

La siguiente tabla resume los principales roles y sus funciones:

| Rol                                         | Propósito                                                                                                                                                                                                                               |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Administrador de la unidad organizativa** | Control total sobre la unidad organizativa: configuraciones de la organización y contrato, usuarios, políticas de compras, presupuestos, campos contables, cotizaciones y jerarquía de la organización. |
| **Superadmin comprador**                    | Puede gestionar todas las unidades organizativas desde el nivel raíz de la organización, más allá de los límites de unidades individuales.                                                                              |
| **Comprador**                               | Puede realizar pedidos en la tienda.                                                                                                                                                                                    |
| **Aprobador de pedidos**                    | Puede aprobar o rechazar pedidos de acuerdo con los flujos de aprobación configurados.                                                                                                                                  |
| **Modificador de pedidos**                  | Puede utilizar la funcionalidad de modificación de pedido en los pedidos a los cuales tiene acceso.                                                                                                                     |
| **Gerente de direcciones**                  | Puede agregar direcciones durante el checkout, guardarlas para el contrato o la unidad organizativa, modificar información de dirección en el checkout y ver direcciones guardadas.                                     |
| **Gerente de la organización compradora**   | Puede visualizar todos los pedidos de su unidad organizativa, gestionar configuraciones de autenticación, ver tarjetas de pago y ver direcciones.                                                                       |
| **Gerente de contrato**                     | Puede ver pedidos realizados bajo el contrato que le ha sido asignado.                                                                                                                                                  |
| **Lector de contrato**                      | Puede ver las direcciones guardadas (solo lectura).                                                                                                                                                  |
| **Gerente de políticas de compra** | Puede crear, editar y eliminar políticas de compra y flujos de aprobación, y ver las políticas de compra. |
| **Gerente de presupuestos** | Puede crear, editar, asignar y eliminar presupuestos, y ver detalles del presupuesto, asignaciones, límites e historial de gastos. |
| **Gerente de campos contables** | Puede crear, editar y eliminar campos contables. |
| **Gerente de cotizaciones** | Puede crear, editar y eliminar cotizaciones. |
| **Usuario de tarjetas personales**          | Puede usar una nueva tarjeta de crédito en el checkout que no se guarda en el contrato de forma predeterminada.                                                                                                         |

## Información de contacto

**La información de contacto** se refiere a las personas que pueden seleccionarse como destinatarias de los pedidos, es decir, la persona que recibirá el envío. El contacto de un pedido puede ser diferente del usuario que lo realizó. Al realizar un pedido, el comprador puede elegir el contacto destinatario del pedido.

La información de contacto se gestiona a nivel de la organización. Los contactos pueden estar vinculados a direcciones para que, al seleccionar una dirección de envío, el usuario pueda elegir entre los contactos asociados a esa dirección. Esto mantiene los datos de los destinatarios centralizados y permite que se reutilicen en otros pedidos.

Para detalles técnicos sobre cómo crear, actualizar e integrar información de contacto vía APIs, consulta la [API B2B Contact Information](https://developers.vtex.com/docs/api-reference/b2b-contact-information-api).

## Compradores

Los **compradores** son usuarios que pueden realizar pedidos y están asociados a la organización compradora. Los datos del comprador son la información que identifica y describe a estos usuarios en el contexto de la tienda y de los flujos de pedidos, por ejemplo, para checkout e historial de pedidos.

La tienda utiliza los datos del comprador para identificar quién realiza el pedido y aplicar los permisos, políticas y contratos correctos.

Para saber cómo crear y gestionar los datos del comprador, consulta la [API de datos del comprador B2B](https://developers.vtex.com/docs/api-reference/b2b-buyer-data-api).
