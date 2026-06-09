---
title: 'Buyer Portal Checkout'
status: PUBLISHED
createdAt: 2026-04-24T18:00:00.000Z
updatedAt: 2026-04-24T18:00:00.000Z
contentType: tutorial
productTeam: Shopping
slugEN: buyer-portal-checkout
locale: es
---

> ℹ️ Esta funcionalidad se encuentra disponible solo para tiendas que utilizan [B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es), que actualmente está habilitada solo para cuentas seleccionadas.

Buyer Portal Checkout es la nueva versión del checkout VTEX, diseñado para ofrecer una experiencia de finalización de compra rápida y personalizable. La solución se construyó con base en las mejores prácticas de usabilidad del mercado y está integrada directamente a los flujos B2B de Buyer Portal como [Contratos](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es#contratos), [Campos contables](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es#campos-contables), [Presupuestos](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es#presupuestos) y [Políticas de compra](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es#politicas-de-compra).

![Buyer Portal Checkout](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-es_1.png)

## Concepto

Buyer Portal Checkout presenta una arquitectura moderna, desarrollada para proporcionar mayor flexibilidad, seguridad y escalabilidad a la experiencia de compra. Entre las características que definen la solución destacan:

- Integración con herramientas de compliance de Buyer Portal.
- Optimización para dispositivos móviles y de escritorio.
- Compatibilidad con opciones omnichannel sofisticadas.

> ℹ️ Buyer Portal Checkout se encuentra en fase beta cerrada y, por el momento, está disponible solamente para clientes B2B en Norteamérica. Para saber más sobre las condiciones de adhesión ponte en contacto con [Soporte VTEX](https://help.vtex.com/es/support).

## Funcionalidades

Buyer Portal Checkout ofrece todas las funcionalidades esperadas de un checkout moderno, cubriendo el flujo completo desde el carrito hasta la confirmación del pedido. Las funcionalidades principales incluyen:

- Gestión del carrito con visualización y ajuste de ítems (cantidad, agregar, remover individualmente o en masa), agrupación por canal de entrega (envío o recogida en tienda) y tratamiento automático de ítems no disponibles.
- Resumen del pedido en tiempo real, con desglose de subtotal, costo de envío, descuentos, promociones, impuestos, vales de regalo y total final.
- Simulación de envío directamente en el carrito con dirección nueva o guardada.
- Compatibilidad con múltiples medios de pago, incluyendo tarjeta de crédito con pago en cuotas y tarjetas guardadas (con flujo B2B sin CVV), Pix (Brasil) con código QR y finalización con checkout en un solo clic.
- Revisión y confirmación del pedido con posibilidad de editar cada sección, status del pedido (aprobado o pendiente), número, y resúmenes de envío o recogida y de pago.

Además de estas funcionalidades, VTEX ofrece soluciones para optimizar la experiencia de compra en escenarios B2B, facilitando la personalización y brindando seguridad en la transacción para tus compradores.

### Presupuestos

La funcionalidad [Presupuestos](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es#presupuestos) permite que el comprador vea cuáles son los presupuestos asociados a su pedido antes del checkout. Esto permite visualizar los presupuestos y evitar consumos superiores al valor definido por la organización.

![Facturación de la cuenta](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-es_3.png)

### Checkout para punchout

El flujo de [punchout](https://developers.vtex.com/docs/guides/punchout) que los compradores integren sus sistemas de e-procurement directamente al sitio web de la tienda de ecommerce. El [Checkout para punchout](https://developers.vtex.com/docs/guides/punchout-cart-integration) de VTEX está adaptado a este tipo de integración, lo que permite que el usuario transfiera el carrito listo y finalice la compra en su sistema de e-procurement.

### Direcciones de facturación

La funcionalidad direcciones de facturación permite que los compradores seleccionen explícitamente la dirección de facturación correcta durante el checkout. La funcionalidad garantiza que la dirección de facturación registrada en el pedido refleje con precisión la realidad fiscal de la transacción y se propague de forma consistente a los sistemas posteriores.

![Direcciones de facturación](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-es_3.png)

### Entrega programada

La [entrega programada](/docs/es/tutorials/configurar-entrega-programada-fastcheckout) permite a las tiendas VTEX ofrecer a los clientes la posibilidad de elegir el mejor día y hora para recibir sus compras. Esta configuración se realiza directamente en las políticas de envío y define los periodos disponibles para las entregas.

### Políticas de compra

El sistema de [políticas de compras](https://help.vtex.com/es/docs/tutorials/politicas-de-compras) admite reglas dinámicas que los compradores pueden configurar para incorporar sus reglas de compliance dentro del proceso de compra. [Gestores de organizaciones compradoras](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es#gestion-organizacional) Pueden definir reglas personalizadas para que los pedidos se envíen para su aprobación antes de confirmarse, o incluso para impedir que se completen en el propio checkout.

### Opciones de composición

La funcionalidad [Opciones de composición](https://help.vtex.com/es/docs/tutorials/assembly-options) permite agrupar los ítems de un kit en un único elemento en la lista del carrito. Este elemento muestra información detallada sobre la composición del kit y permite controlar las cantidades de cada ítem.

![Opciones de composición](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-es_4.png)

### Tarjetas guardadas

Buyer Portal Checkout permite el uso de tarjetas de crédito compartidas por la organización. También permite [guardar tarjetas](https://developers.vtex.com/docs/api-reference/checkout-custom-card-payment-api) para que puedan utilizarse en transacciones futuras (disponible para usuarios que tengan este [permiso](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es#miembros-y-roles)).

De forma integrada al [flujo de tokenización de tarjetas de crédito](https://help.vtex.com/es/docs/tutorials/dpan-y-fpan-comprender-la-seguridad-en-el-flujo-de-pagos-tokenizados-online) de VTEX, la información se procesa según las normas de [PCI](https://help.vtex.com/es/docs/tutorials/que-es-el-pci-ssc), proporcionando seguridad al proceso.

### Direcciones de envío guardadas

En Buyer Portal Checkout, los usuarios pueden seleccionar direcciones de envío a partir de la [lista proporcionada por su organización](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es#direcciones-y-gestion-de-pagos). Si tienen los [permisos](https://developers.vtex.com/docs/guides/storefront-roles) configurados, los usuarios también pueden registrar nuevas direcciones y editar las existentes directamente en la experiencia de compra del checkout.

![Gestor de direcciones](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-es_5.png)

### Múltiples opciones de envío (Multidelivery)

La funcionalidad permite que los compradores elijan diferentes combinaciones de [opciones de envío](https://help.vtex.com/es/docs/tutorials/opciones-de-envio-beta) para cada ítem del carrito, proporcionando más flexibilidad en el chekout.

![Múltiples opciones de envío](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-es_6.png)

### Campos contables

[Campos de datos personalizables](https://help.vtex.com/es/docs/tutorials/campos-contables) pueden ser configurados por la organización compradora para recopilar información administrativa o financiera, como centro de costo, número de pedido interno (orden de compra, PO) y otros datos de control.

![Campos contables](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-es_7.png)

### Recogida en tienda

Buyer Portal Checkout permite que los compradores encuentren y seleccionen una tienda para la recogida del pedido durante el proceso de checkout. Es posible buscar por dirección o código postal, filtrar por radio y verificar la disponibilidad de los artículos en tiempo real para cada ubicación.

![Campos contables](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-es_8.png)
