---
title: 'Conector de pago'
createdAt: 2018-02-08T21:31:32.599Z
updatedAt: 2026-10-30T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: what-is-the-connector
locale: es
hidden: false
---

Un conector de pago es la integración entre el módulo Pago de VTEX y un proveedor de pago, como un gateway, un adquirente o un subadquirente. El conector implementa el [Payment Provider Protocol](/es/docs/tutorials/payment-provider-protocol), que define la forma en que VTEX y el proveedor intercambian datos para una transacción. El mismo proveedor puede ofrecer más de un conector, diferentes versiones de una integración o conectores específicos para un país.

Para que tu tienda ofrezca un medio de pago debes configurar el proveedor que lo procesará en **Configuración de la Tienda > Pago > Proveedores** como se describe en [Configurar un proveedor de pagos](/es/docs/tracks/configurar-un-conector-de-pagos). Un mismo medio de pago puede ser procesado por varios proveedores, y un mismo proveedor puede procesar varios medios de pago. Por eso, para cada [condición de pago](/es/docs/tutorials/condiciones-de-pago), usas el campo **Procesar con proveedor** para elegir cuál de los proveedores configurados la procesará.

Para saber qué conectores están disponibles para tu proveedor en VTEX, consulta la [Lista de proveedores de pago por país](/es/docs/tutorials/lista-de-proveedores-de-pago-por-pais), que también incluye links al tutorial de configuración de cada proveedor. Si no hay ningún conector disponible, el proveedor puede desarrollar uno siguiendo las indicaciones de [Desarrollar un conector de pago para VTEX](/es/docs/tutorials/desarrollar-un-conector-de-pago-para-vtex).

### Artículos relacionados

- [Cómo funciona el módulo de pagos](/es/docs/tracks/como-funciona-el-modulo-de-pagos)
- [Registrar proveedores de pagos y antifraude](/es/docs/tutorials/afiliaciones-de-gateway)
