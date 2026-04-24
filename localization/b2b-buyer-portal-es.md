---
title: 'B2B Buyer Portal'
createdAt: '2026-04-06T10:00:00.000Z'
updatedAt: '2026-04-06T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: b2b-buyer-portal
locale: es
---

> ⚠️ **B2B Buyer Portal** está disponible actualmente para cuentas seleccionadas.

**B2B Buyer Portal** es una solución VTEX que ofrece un storefront de autoservicio para compras corporativas. Permite que las organizaciones compradoras gestionen sus propias cuentas, acuerdos comerciales, controles de gastos y flujos de compra, reduciendo la carga operativa tanto para los retailers como para sus clientes B2B.

Este artículo resume las principales funcionalidades de **B2B Buyer Portal** y dirige a la documentación detallada de cada tema.

- [Contratos](#contratos)
- [Gestión organizativa](#gestion-organizativa)
  - [Unidades organizativas](#unidades-organizativas)
  - [Scopes](#scopes)
  - [Miembros y roles](#miembros-y-roles)
- [Finanzas y compliance](#finanzas-y-compliance)
  - [Presupuestos](#presupuestos)
  - [Políticas de compras](#políticas-de-compras)
  - [Campos contables](#campos-contables)
- [Direcciones y gestión de pagos](#direcciones-y-gestion-de-pagos)
- [Cuenta de la organización](#cuenta-de-la-organizacion)
- [Punchout](#punchout)

## Contratos

Un [contrato](https://help.vtex.com/es/docs/tutorials/contratos-b2b-es) define la relación comercial entre tu tienda y una organización compradora. Además, centraliza los términos de acuerdo incluyendo:

- Los productos a los que el comprador puede acceder (surtidos de productos).
- Los precios aplicados (tablas de precios).
- Los medios de pago disponibles.

Los contratos son la base de la experiencia del comprador. Todas las [unidades organizativas](#unidades-organizativas) de la empresa heredan las condiciones del contrato, garantizando uniformidad en toda la organización. La funcionalidad [Scopes](#scopes) controla los atributos particulares que cada unidad puede ver y utilizar.

Para simplificar la gestión de contratos a gran escala, el [agente de gestión de contratos](https://help.vtex.com/es/docs/tutorials/agente-de-gestion-de-contratos) permite que los operadores de la tienda actualicen contratos en masa utilizando instrucciones en lenguaje natural para realizar acciones como agregar colecciones o cambiar medios de pago en cientos de contratos a la vez.

## Gestión organizativa

**B2B Buyer Portal** permite que las organizaciones compradoras repliquen su estructura interna en la plataforma para que cada departamento, sucursal o subsidiaria pueda operar con sus propias reglas compartiendo un único contrato.

### Unidades organizativas

Las [unidades organizativas](https://help.vtex.com/es/docs/tutorials/unidades-organizativas) representan las subdivisiones de una organización compradora, como departamentos, oficinas regionales o subsidiarias. Siguen un modelo jerárquico de árbol. Una unidad raíz representa la organización en su conjunto, y las unidades hijas reflejan las divisiones internas.

Cada unidad puede tener configuraciones específicas de visibilidad de productos, medios de pago, direcciones de envío, campos contables y reglas de aprobación de pedidos, permitiendo que la tienda cumpla con las políticas internas de la empresa compradora sin necesidad de múltiples contratos o cuentas. Las configuraciones por unidad siempre están sujetas a las condiciones del contrato.

> ℹ️ Consulta más información sobre configuración en [Agregar o editar unidades organizativas](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-unidades-organizativas).

### Scopes

[Scopes](https://help.vtex.com/es/docs/tutorials/vision-general-de-scopes) controla la visibilidad de los atributos de la organización y su disponibilidad para cada unidad organizativa. Los administradores pueden restringir el acceso a contratos, medios de pago, tarjetas de crédito, colecciones, direcciones y campos contables por unidad, garantizando que los compradores solo vean los elementos relevantes para su unidad organizativa.

### Miembros y roles

A los [miembros](https://help.vtex.com/es/docs/tutorials/miembros-de-la-organizacion-compradora) de una organización compradora se les asignan roles del storefront que definen las secciones que pueden ver y las acciones que pueden realizar en la tienda. Algunos roles predefinidos son:

- **Buyer:** realiza pedidos.
- **Order Approver:** aprueba o rechaza pedidos en flujos de aprobación.
- **Organizational Unit Admin:** gestiona la estructura, usuarios y configuraciones de la unidad.
- **Budget Manager:** crea y gestiona presupuestos y asignaciones.
- **Buying Policy Manager:** configura reglas de aprobación de compras.

Los roles pueden combinarse para atender las responsabilidades de cada usuario, creando un modelo de permisos granulares para estructuras organizativas complejas. Para ver la lista completa, consulta [Miembros de la organización compradora](https://help.vtex.com/es/docs/tutorials/miembros-de-la-organizacion-compradora).

## Finanzas y compliance

El **B2B Buyer Portal** ofrece herramientas de gobernanza financiera y compliance de compras, permitiendo que las organizaciones controlen gastos y apliquen reglas internas de adquisición.

### Presupuestos

Los [presupuestos](https://help.vtex.com/es/docs/tutorials/presupuestos-informacion-general) permiten que las organizaciones definan límites de gastos y los distribuyan en asignaciones vinculadas a entidades específicas, como usuarios, direcciones o campos contables. Las principales funcionalidades incluyen:

- Definir valores totales y periodos de validez para cada presupuesto.
- Subdividir presupuestos en asignaciones para diferentes departamentos o proyectos.
- Hacer seguimiento de saldos restantes e historial de transacciones.
- Configurar notificaciones cuando el consumo alcanza límites definidos.

Durante el checkout, el sistema verifica automáticamente las asignaciones aplicables, garantizando que los pedidos estén financiados conforme a las reglas financieras de la organización.

> ℹ️ Consulta más información sobre configuraciones en [Agregar o editar presupuestos](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-presupuestos).

### Políticas de compras

Las [políticas de compras](https://help.vtex.com/es/docs/tutorials/politicas-de-compras) son reglas de autorización que determinan si los pedidos se aprueban o rechazan automáticamente o si se envían a revisión manual. Las organizaciones pueden configurar:

- **Límites de gastos:** pedidos que superen, no alcancen o igualen determinados valores pueden activar diferentes requisitos de aprobación.
- **Flujos de aprobación:** hasta cinco niveles jerárquicos de aprobación, donde la aprobación final requiere la autorización de todos los niveles.
- **Criterios personalizados:** reglas de aprobación de pedidos basadas en presupuestos, origen del pedido y otros factores.

Esta capa de gobernanza garantiza que la actividad de compras cumpla con las políticas internas antes de realizar los pedidos.

> ℹ️ Consulta más información sobre configuraciones en [Agregar o editar políticas de compras](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-politicas-de-compras).

### Campos contables

Los [campos contables](https://help.vtex.com/es/docs/tutorials/campos-contables) capturan información adicional del negocio durante el checkout, como centro de costo, número de PO, códigos de proyecto o clasificaciones de gastos. Los campos pueden aplicarse a nivel de pedido, ítem o dirección y configurarse como obligatorios u opcionales.

Las organizaciones también pueden definir valores predeterminados por unidad organizativa para llenar automáticamente campos del checkout, reduciendo la entrada manual y garantizando la uniformidad de los datos en las compras.

> ℹ️ Consulta más información sobre configuraciones en [Agregar o editar campos contables](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-campos-contables).

## Direcciones y gestión de pagos

**B2B Buyer Portal** admite la gestión de múltiples direcciones de envío y la facturación por organización, incluyendo puntos de entrega internos (como muelles o departamentos) y destinatarios designados que pueden ser diferentes del usuario que realiza el pedido.

Las tarjetas de pago pueden almacenarse a nivel de contrato (compartidas en toda la organización) o a nivel del comprador individual; se utiliza almacenamiento tokenizado por seguridad.

> ℹ️ Consulta más información sobre ajustes en [Configuraciones del contrato](https://help.vtex.com/es/docs/tutorials/configuraciones-del-contrato).

## Cuenta de la organización

La [cuenta de la organización](https://help.vtex.com/es/docs/tutorials/cuenta-de-la-organizacion) es la interfaz de autoservicio donde los administradores de la organización compradora gestionan todas las configuraciones mencionadas anteriormente. En la misma pantalla, los administradores pueden:

- Ver y actualizar detalles del contrato (perfil, direcciones, medios de pago, surtido de productos).
- Gestionar usuarios, roles y unidades organizativas.
- Configurar presupuestos, políticas de compras y campos contables.

Esta interfaz centralizada permite que las organizaciones compradoras gestionen sus operaciones de forma autónoma, sin depender del retailer para tareas administrativas rutinarias.

## Punchout

Punchout permite la integración con sistemas externos de procurement, posibilitando que usuarios de compras se autentiquen en la tienda VTEX y naveguen por el catálogo directamente desde su plataforma de procurement. Después de seleccionar los productos, los compradores pueden transferir el carrito nuevamente al sistema de procurement para su aprobación interna.

Esta funcionalidad está diseñada para organizaciones que utilizan software de procurement centralizado y necesitan que las vitrinas de sus proveedores estén integradas a los flujos de compra existentes.

> ℹ️ Esta funcionalidad funciona exclusivamente por la [API de Punchout](https://developers.vtex.com/docs/api-reference/punchout-api#overview). Consulta más información en la [guía de integración de Punchout](https://developers.vtex.com/docs/guides/punchout).

## Más información

- [Agregar o editar unidades organizativas](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-unidades-organizativas)
- [Agregar usuarios a la organización compradora](https://help.vtex.com/es/docs/tutorials/agregar-usuarios-a-la-organizacion-compradora)
- [B2B Buyer Portal integration overview](https://developers.vtex.com/docs/guides/b2b-buyer-portal-integration-overview) (documentación para desarrolladores)
