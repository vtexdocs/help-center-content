---
title: 'Políticas de compras'
createdAt: '2026-02-27T10:00:00.000Z'
updatedAt: '2026-02-09T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: buying-policies-overview
locale: es
---

> ⚠️ Esta funcionalidad solo está disponible para tiendas que usan B2B Buyer Portal, actualmente está disponible para cuentas seleccionadas.

La funcionalidad **Políticas de compras** permite que los usuarios de la organización compradora configuren mecanismos y definan criterios para autorizar o denegar pedidos automáticamente. Esta solución actúa como una capa de control en el proceso de compra, facilitando la creación de flujos personalizados para la revisión de pedidos.

Esta solución fortalece la gobernanza de la organización y promueve el cumplimiento de las políticas de compras vigentes. Además, sus mecanismos permiten combinar diversos tipos de reglas:

- **Límite de gastos:** establece cantidades máximas por pedido para garantizar que aquellos que superen, no alcancen o igualen valores determinados requieran una aprobación.
- **Criterios de compra:** reglas específicas que definen las condiciones bajo las cuales un pedido requiere aprobación, considerando factores como límites de gasto, presupuestos y el origen del pedido, entre otros.
- **Flujo de aprobación:** proceso de aprobación multinivel, que puede variar según la complejidad organizativa.
- **Gestión de pedidos en aprobación:** permite realizar el seguimiento de los pedidos que están a la espera de aprobación, garantizando que avancen en el flujo de compra solo después de haber sido aprobados.

## Configuración

Los pasos para configurar una política de compras son:

1. El usuario configura el criterio para evaluar los pedidos.
2. Este criterio se asocia a una acción, que puede ser:
   - Aprobar el pedido con bypass (el pedido es aprobado independientemente de los criterios)
   - Denegar el pedido
   - Exigir aprobación manual
3. Para la aprobación manual, el usuario configura de uno a cinco niveles de aprobación jerárquica, en los cuales cada nivel puede denegar el pedido, pero su aprobación depende de la evaluación de todos.

## Storefront Roles

Para configurar las políticas de compras de la organización, el rol de [Storefront Roles](https://developers.vtex.com/docs/guides/storefront-roles) del usuario debe tener el recurso `ManageBuyingPolicies`. Para la autorización manual de pedidos, se requiere el recurso `ApproveOrders`.

## Configurar políticas de compras

Los usuarios pueden agregar, editar o remover políticas de compras mediante la interfaz de la unidad organizativa. Para más información, consulta el artículo [Agregar o editar políticas de compras](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-politicas-de-compras).

> ℹ️ Para gestionar reglas de autorización de pedidos vía API, accede a la [API Buying Policies](https://developers.vtex.com/docs/api-reference/buying-policies-api), y a la guía para desarrolladores [Buying Policies](https://developers.vtex.com/docs/guides/buying-policies).
