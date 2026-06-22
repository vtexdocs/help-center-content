---
title: 'Extensibilidad en VTEX Sales App'
createdAt: 2026-05-18T19:46:33.357Z
updatedAt: 2026-05-18T19:46:33.357Z
contentType: tutorial
productTeam: Shopping
slugEN: extensibility-in-vtex-sales-app
locale: es
---

> ℹ️ Esta funcionalidad se encuentra en fase beta, lo que significa que estamos trabajando para mejorarla. Si tienes alguna duda, ponte en contacto con [nuestro Soporte](https://help.vtex.com/es/support).

La **extensibilidad** es una funcionalidad que permite personalizar la jornada de ventas predeterminada en VTEX Sales App mediante la inclusión de recursos alineados con el modelo de negocio de la tienda. Esta funcionalidad permite integrar experiencias personalizadas en puntos específicos de la interfaz sin necesidad de crear una solución desde cero.

En este artículo encontrarás información general sobre la extensibilidad, casos de uso de las extensiones y orientaciones para su implementación.

> ❗ La implementación de la extensibilidad de VTEX Sales App es responsabilidad de los retailers y partners. Por este motivo, te recomendamos consultar nuestra [documentación para desarrolladores](https://developers.vtex.com/docs/guides/sales-app-extensions-implementation).

## Funcionamiento de la extensibilidad

La extensibilidad es una solución nativa para que las tiendas se integren con APIs externas e interactúen con datos de otras aplicaciones, con seguridad y estabilidad. La funcionalidad utiliza puntos de extensión predefinidos, en los cuales se pueden renderizar componentes y agregar recursos sin alterar el flujo principal de VTEX Sales App.

Existen ocho puntos de extensión en VTEX Sales App:

- `cart.cart-list.after`
- `cart.cart-item.after`
- `cart.order-summary.after`
- `pdp.sidebar.before`
- `pdp.sidebar.after`
- `pdp.content.after`
- `menu.item`
- `menu.drawer-content`

> ℹ️ Consulta más información sobre los puntos de extensión en [Exploring Sales App extensions](https://developers.vtex.com/docs/guides/exploring-sales-app-extensions).

Cada punto de extensión permite la interacción de los usuarios con datos y funciones específicas y están disponibles en los siguientes contextos de la jornada de venta:

- Carrito de compras (`cart.cart-item.after`, `cart.cart-list.after`) y checkout (`cart.order-summary.after`):

  ![extensibilidad_vtex_sales_app_1_cart_checkout_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidad_vtex_sales_app_1_cart_checkout_PT.png)

- Página de detalles del producto (`pdp.sidebar.before`, `pdp.sidebar.after`, `pdp.content.after`):

  ![extensibilidad_vtex_sales_app_4_pdp_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidad_vtex_sales_app_4_pdp_PT.png)

- Menú (`menu.item`) y modal lateral (`menu.drawer-content`):

  ![extensibilidad_vtex_sales_app_2_menu_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidad_vtex_sales_app_2_menu_PT.png)

  ![extensibilidad_vtex_sales_app_3_drawer_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidad_vtex_sales_app_3_drawer_PT.png)

  > ℹ️ Cuando la persona usuaria hace clic en el componente de la extensión del menú, VTEX Sales App abre un modal a la izquierda de la interfaz. Este comportamiento permite crear múltiples flujos de navegación internos.

## Seguridad y estabilidad de extensiones

Al ser una solución nativa, la extensibilidad evita comportamientos inesperados y contribuye a la continuidad de las operaciones de la tienda. Algunos de los principales objetivos de la funcionalidad son:

- **Seguridad:** aumentar la seguridad para desarrolladores en la implementación de código.
- **Estabilidad:** promover la estabilidad de la aplicación, incluso en escenarios de fallas en personalizaciones.
- **Compatibilidad:** preservar la compatibilidad de las extensiones con las personalizaciones, de forma que las actualizaciones de VTEX Sales App no comprometan las modificaciones realizadas por la tienda.

## Casos de uso de extensiones

La siguiente tabla presenta ejemplos en los que el retailer se beneficia de la extensibilidad:

| Contexto | Descripción |
| :--- | :--- |
| Integración con servicios o datos externos | Integración con programas de fidelidad, venta de servicios adicionales (como garantías o seguros), aplicación de descuentos asociados a cambios de producto, comisión o financiamiento internos, entre otros. En general, son integraciones con datos y servicios externos que ya se utilizan en la tienda de ecommerce o en la tienda física. |
| Integración con datos de VTEX | Integración con soluciones de VTEX que no forman parte de la jornada predeterminada de VTEX Sales App, como el ecosistema de marketplace o algunas soluciones de pago. |
| Centralización de tareas de vendedores | Centralización de las tareas cotidianas de los vendedores, como la captura de leads y la consulta de datos de gestión de la tienda, en una única plataforma para aumentar la agilidad y la eficiencia. |

## Antes de empezar

Recomendamos que los desarrolladores instalen la skill de extensiones de VTEX Sales App, que ayuda en las etapas de definición e implementación del proyecto. Consulta más información en [VTEX Sales App Extensions Skill](https://developers.vtex.com/docs/guides/vtex-sales-app-extensions-skill).

## Planificar el ámbito del proyecto

El primer paso es la planificación, en la cual el retailer o el partner debe delimitar el ámbito de lo que se implementará.

**Ejemplo:** una tienda vende material para construcción y el ámbito de su proyecto será agregar a la página de producto (PDP) una calculadora que mide la cantidad de material necesaria por metro cuadrado (m²) construido. Así, el cliente de la tienda podrá saber que necesita comprar 4 kilogramos (kg) de mortero por cada metro cuadrado.

## Mapear la experiencia del usuario y los requisitos técnicos

El segundo paso es mapear de forma detallada los flujos de la experiencia del usuario (UX) y los requisitos técnicos para esta implementación.

> ⚠️ Si el proyecto tiene flujos y requisitos muy complejos, te recomendamos asignar para esta etapa a un profesional especializado, como un diseñador o un gestor de producto, por ejemplo.

**Ejemplo:** en la tienda de materiales para construcción, el mapeo incluiría, de forma simplificada, el acceso del usuario a la calculadora en el flujo de compra, su visualización en la interfaz y los cálculos que permite realizar. El mapeo de los requisitos técnicos implicaría detallar la relación entre las operaciones de esa calculadora y los datos de los sistemas de checkout, catálogo y stock de la tienda durante la implementación.

> ℹ️ Cuando el recurso ya está implementado en la tienda de ecommerce, la experiencia del usuario en VTEX Sales App debe ser lo más similar posible para mantener la coherencia de la experiencia en los canales de venta de la tienda.

## Verificar la viabilidad técnica

El tercer paso es validar la viabilidad técnica del proyecto. Para ello, el desarrollador debe verificar si los requisitos y las integraciones mapeados son compatibles con las especificaciones de los puntos de extensión, como se indica en la [documentación de extensibilidad para desarrolladores](https://developers.vtex.com/docs/guides/sales-app-extensions-implementation).

> ⚠️ Si se identifica la inexistencia de alguna función o configuración obligatoria, te recomendamos ponerte en contacto con nuestro [Soporte](https://support.vtex.com/hc/es-419), describiendo el caso de uso y las limitaciones encontradas.

## Implementar el proyecto

Por último, el desarrollador implementa las extensiones, como se indica en la [documentación técnica de extensibilidad](https://developers.vtex.com/docs/guides/sales-app-extensions-implementation). Te recomendamos validar la implementación con pruebas locales antes de poner a disposición las extensiones para los clientes de la tienda.

> ℹ️ **Extensions Skill** puede ayudar en la etapa de implementación del proyecto. Consulta más información en [VTEX Sales App Extensions Skill](https://developers.vtex.com/docs/guides/vtex-sales-app-extensions-skill).
