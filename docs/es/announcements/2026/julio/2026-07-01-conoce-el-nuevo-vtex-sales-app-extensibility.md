---
title: 'Conoce el nuevo VTEX Sales App Extensibility'
createdAt: 2026-07-01T00:00:00.000Z
updatedAt: 2026-07-01T00:00:00.000Z
contentType: updates
productTeam: Shopping
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: 2026-07-01-introducing-vtex-sales-app-extensibility
locale: es
announcementSynopsisES: 'La funcionalidad permite que personalices la jornada de ventas con extensiones en puntos predefinidos de la interfaz.'
tags:
  - Nueva funcionalidad
  - VTEX Sales App
---

VTEX Sales App Extensibility](https://help.vtex.com/es/docs/tutorials/extensibilidad-en-vtex-sales-app) te permite personalizar una jornada de ventas predeterminada mediante extensiones en puntos específicos de la interfaz, sin necesidad de desarrollar una solución desde cero. Está disponible en beta abierta para quienes utilizan [Sales App](https://help.vtex.com/es/docs/tracks/que-es-vtex-sales-app) en VTEX.

Para facilitar el desarrollo y la implementación de extensiones puedes usar [VTEX Sales App Extensions Skill](https://developers.vtex.com/docs/guides/vtex-sales-app-extensions-skill), una skill basada en IA que incorpora conocimientos sobre Sales App y el monorepo de FastStore.

## ¿Qué cambió?

**VTEX Sales App Extensibility** permite renderizar componentes y agregar funcionalidades en ocho puntos de extensión predefinidos en Sales App. Los principales objetivos de la funcionalidad son:

- **Seguridad:** aumentar la seguridad para desarrolladores en la implementación de código.
- **Estabilidad:** promover la estabilidad de la aplicación, incluso en escenarios de fallas en personalizaciones.
- **Compatibilidad:** integrarse con APIs externas e interactuar con datos de otras aplicaciones preservando la compatibilidad de las extensiones con personalizaciones.

Algunos ejemplos de casos de uso de **VTEX Sales App Extensibility** incluyen la integración con programas de fidelidad, la venta de servicios adicionales, como garantías o seguros, la incorporación de soluciones VTEX fuera del flujo predeterminado de Sales App y la centralización de las tareas cotidianas de los vendedores en una única plataforma.

Las siguientes imágenes presentan los puntos de extensión en la jornada de ventas:

- Carrito de compras (`cart.cart-item.after`, `cart.cart-list.after`) y checkout (`cart.order-summary.after`):

  ![extensibilidad_vtex_sales_app_1_cart_checkout_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidad_vtex_sales_app_1_cart_checkout_PT.png)

- Página de detalles del producto (`pdp.sidebar.before`, `pdp.sidebar.after`, `pdp.content.after`):

  ![extensibilidad_vtex_sales_app_4_pdp_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidad_vtex_sales_app_4_pdp_PT.png)

- Menú (`menu.item`) y modal lateral (`menu.drawer-content`):

  ![extensibilidad_vtex_sales_app_2_menu_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidad_vtex_sales_app_2_menu_PT.png)

  ![extensibilidad_vtex_sales_app_3_drawer_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidad_vtex_sales_app_3_drawer_PT.png)

## ¿Qué se necesita hacer?

La implementación de **VTEX Sales App Extensibility** es responsabilidad de los retailers y partners. Te recomendamos seguir la documentación técnica [Sales App Extensions implementation](https://developers.vtex.com/docs/guides/sales-app-extensions-implementation).

> ℹ️ Utiliza [VTEX Sales App Extensions Skill](https://developers.vtex.com/docs/guides/vtex-sales-app-extensions-skill) para apoyarte en las etapas de definición e implementación del proyecto.